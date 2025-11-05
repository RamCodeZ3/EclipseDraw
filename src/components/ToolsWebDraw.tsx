import ToolDraw from "./ToolDraw"

export default function ToolsWebDraw(){
    return (
    <>
    <div className="fixed top-0 w-full h-full z-100 flex p-4 pointer-events-none items-end justify-center">
        <ToolDraw/>
    </div>
    </>
    )
} 