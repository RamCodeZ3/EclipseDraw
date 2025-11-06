import { useRef } from "react";
import { useCanvasDraw } from "../utils/useCanvasDraw";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCanvasDraw(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      width={4000}
      height={4000}
      className="bg-neutral-900"
    />
  );
}
