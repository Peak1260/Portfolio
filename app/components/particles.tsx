"use client";
import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export default function Particles({
  className = "",
  quantity = 20,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  class Star {
    x: number;
    y: number;
    size: number;
    speed: number;

    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 1.5;
      this.speed = Math.random() * 0.15;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    update() {
      this.y += this.speed;
      if (this.y > window.innerHeight) {
        this.y = 0;
        this.x = Math.random() * window.innerWidth;
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      for (let i = 0; i < quantity; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [quantity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}