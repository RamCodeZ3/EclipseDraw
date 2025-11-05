import { Hand, Pen, MousePointer2, Square, Circle, ALargeSmall, Minus, Eraser } from "lucide-react"

export default function ToolDraw(){
    return (
        <>
        <div className="flex bg-neutral-800 w-120 h-14 p-1 justify-around rounded-lg text-white">
            
            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Hand size={20}/> 
            </div>
            
            <div className=" p-4 rounded-lg flex items-center justify-center">
                <MousePointer2 size={20}/> 
            </div>
            
            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Pen size={20}/> 
            </div>

            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Square size={20}/> 
            </div>

            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Minus size={20}/> 
            </div>

            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Circle size={20}/> 
            </div>

            <div className=" p-4 rounded-lg flex items-center justify-center">
                <ALargeSmall size={20}/> 
            </div>

            <div className=" p-4 rounded-lg flex items-center justify-center">
                <Eraser size={20}/> 
            </div>

        </div>
        </>
    )
}