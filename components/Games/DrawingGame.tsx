"use client";

import { useState, useRef, useEffect } from "react";
import "./drawing.css";

export default function DrawingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState<"brush" | "eraser" | "fill">("brush");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== "mousedown") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "fill") {
      floodFill(x, y, ctx, canvas);
      return;
    }

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : currentColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const floodFill = (startX: number, startY: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const startPos = (Math.floor(startY) * canvas.width + Math.floor(startX)) * 4;
    
    const startR = pixels[startPos];
    const startG = pixels[startPos + 1];
    const startB = pixels[startPos + 2];
    
    const fillColor = hexToRgb(currentColor);
    if (!fillColor) return;

    if (startR === fillColor.r && startG === fillColor.g && startB === fillColor.b) return;

    const pixelStack: [number, number][] = [[Math.floor(startX), Math.floor(startY)]];

    while (pixelStack.length > 0) {
      const [x, y] = pixelStack.pop()!;
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

      const pos = (y * canvas.width + x) * 4;
      
      if (pixels[pos] !== startR || pixels[pos + 1] !== startG || pixels[pos + 2] !== startB) continue;

      pixels[pos] = fillColor.r;
      pixels[pos + 1] = fillColor.g;
      pixels[pos + 2] = fillColor.b;
      pixels[pos + 3] = 255;

      pixelStack.push([x + 1, y]);
      pixelStack.push([x - 1, y]);
      pixelStack.push([x, y + 1]);
      pixelStack.push([x, y - 1]);
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "my-drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const colors = [
    "#000000", "#808080", "#C0C0C0", "#FFFFFF",
    "#800000", "#FF0000", "#808000", "#FFFF00",
    "#008000", "#00FF00", "#008080", "#00FFFF",
    "#000080", "#0000FF", "#800080", "#FF00FF",
    "#804000", "#FF8000", "#C04080", "#FF80FF"
  ];

  return (
    <div className="drawing-container">
      <div className="drawing-header">
        <h3 className="drawing-title">🎨 PAINT</h3>
      </div>
      <div className="drawing-body">
        <p className="drawing-description">
          draw whatever you want. choose colors, change brush size, use the eraser,
          or fill areas with color. save your masterpiece when you're done. it's like
          MS Paint but worse lmao.
        </p>

        <div className="drawing-controls">
          <div className="control-section">
            <label className="control-label">Tool:</label>
            <div className="tool-buttons">
              <button
                className={`tool-btn ${tool === "brush" ? "active" : ""}`}
                onClick={() => setTool("brush")}
                title="Brush"
              >
                🖌️ Brush
              </button>
              <button
                className={`tool-btn ${tool === "eraser" ? "active" : ""}`}
                onClick={() => setTool("eraser")}
                title="Eraser"
              >
                🧹 Eraser
              </button>
              <button
                className={`tool-btn ${tool === "fill" ? "active" : ""}`}
                onClick={() => setTool("fill")}
                title="Fill"
              >
                🪣 Fill
              </button>
            </div>
          </div>

          <div className="control-section">
            <label className="control-label">Brush Size: {brushSize}px</label>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="size-slider"
            />
          </div>

          <div className="control-section">
            <label className="control-label">Color Palette:</label>
            <div className="color-palette">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`color-btn ${currentColor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setCurrentColor(color)}
                  title={color}
                />
              ))}
            </div>
            <input
              type="color"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
              className="custom-color-picker"
            />
          </div>
        </div>

        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="drawing-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>

        <div className="drawing-actions">
          <button className="action-btn clear-btn" onClick={clearCanvas}>
            🗑️ Clear Canvas
          </button>
          <button className="action-btn save-btn" onClick={saveImage}>
            💾 Save Image
          </button>
        </div>
      </div>
    </div>
  );
}
