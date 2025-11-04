import { useEffect, useRef, useState } from "react";

export default function Canvas(){
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;

        const getCoords = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            }
        }
        
        const starDraw = (event: MouseEvent) => {
            setIsDrawing(true);
            const { x, y } = getCoords(event)
            ctx.beginPath();
            ctx.moveTo(x, y);

        }

        const continueDraw = (event: MouseEvent) => {
            if (!isDrawing) return;
            const { x, y } = getCoords(event)           
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        const stopDraw = () => setIsDrawing(false);

        canvas.addEventListener('mousedown', starDraw)
        canvas.addEventListener('mousemove', continueDraw)
        canvas.addEventListener('mouseup', stopDraw);
        canvas.addEventListener('mouseleave', stopDraw)
        
        return () => {
            canvas.removeEventListener("mousemove", continueDraw);
            canvas.removeEventListener("mouseup", stopDraw);
            canvas.removeEventListener("mouseleave", stopDraw);
        };

    },[isDrawing])

    return <canvas ref={canvasRef} width={4000} height={4000} className=" bg-neutral-800"></canvas>
}