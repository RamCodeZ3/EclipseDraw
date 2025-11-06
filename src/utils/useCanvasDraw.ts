import { useEffect, useState } from "react";


export function useCanvasDraw(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    const getCoords = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const startDraw = (event: MouseEvent) => {
      setIsDrawing(true);
      const { x, y } = getCoords(event);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const continueDraw = (event: MouseEvent) => {
      if (!isDrawing) return;
      const { x, y } = getCoords(event);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDraw = () => setIsDrawing(false);

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", continueDraw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);

    return () => {
      canvas.removeEventListener("mousedown", startDraw);
      canvas.removeEventListener("mousemove", continueDraw);
      canvas.removeEventListener("mouseup", stopDraw);
      canvas.removeEventListener("mouseleave", stopDraw);
    };
  }, [canvasRef, isDrawing]);

  return { isDrawing, setIsDrawing };
}
