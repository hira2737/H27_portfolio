import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  drift: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  type: "star" | "glow";
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const createParticle = (type: Particle["type"]): Particle => {
      const isGlow = type === "glow";

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGlow ? Math.random() * 2 + 1.5 : Math.random() * 1.2 + 0.4,
        speedY: isGlow ? Math.random() * 0.04 + 0.01 : Math.random() * 0.08 + 0.02,
        speedX: (Math.random() - 0.5) * 0.02,
        drift: Math.random() * 0.06 + 0.01,
        opacity: isGlow ? Math.random() * 0.1 + 0.06 : Math.random() * 0.2 + 0.25,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        type,
      };
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!particles.length) {
        for (let i = 0; i < 30; i++) {
          particles.push(createParticle("star"));
        }

        for (let i = 0; i < 6; i++) {
          particles.push(createParticle("glow"));
        }

        return;
      }

      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, width);
        particle.y = Math.min(particle.y, height);
      });
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      particles.forEach((p) => {
        const twinkle = Math.sin(time * p.twinkleSpeed + p.twinklePhase);
        const currentOpacity = Math.max(0.04, p.opacity + twinkle * (p.type === "glow" ? 0.04 : 0.08));

        if (p.type === "glow") {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          gradient.addColorStop(0, `hsla(210, 30%, 80%, ${currentOpacity})`);
          gradient.addColorStop(0.6, `hsla(210, 30%, 75%, ${currentOpacity * 0.2})`);
          gradient.addColorStop(1, "hsla(210, 30%, 75%, 0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(220, 20%, 85%, ${currentOpacity})`;
          ctx.shadowColor = `hsla(220, 20%, 85%, ${currentOpacity * 0.3})`;
          ctx.shadowBlur = p.size * 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(time * 0.01 + p.twinklePhase) * p.drift;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default Particles;
