import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Resize handler
    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateDimensions();

    // Generate 65-75 particles (within the 50-90 range)
    const particleCount = Math.min(80, Math.max(50, Math.floor((width * height) / 14000)));
    const particles: Particle[] = [];

    const colors = [
      'rgba(199, 210, 254, ', // soft indigo
      'rgba(165, 180, 252, ', // soft periwinkle
      'rgba(216, 180, 254, ', // soft violet
      'rgba(147, 197, 253, ', // soft sky blue
      'rgba(244, 244, 245, '  // pure soft white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.1,
        baseAlpha: Math.random() * 0.45 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Mouse movement listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const parentElement = canvas.parentElement || window;
    parentElement.addEventListener('mousemove', handleMouseMove as EventListener);
    parentElement.addEventListener('mouseleave', handleMouseLeave as EventListener);
    window.addEventListener('resize', updateDimensions);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep navy-to-black radial background with subtle blue and violet ambient glows
      const bgGradient = ctx.createRadialGradient(
        width * 0.35, height * 0.4, 40,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.85
      );
      bgGradient.addColorStop(0, '#0a1128'); // Deep midnight navy
      bgGradient.addColorStop(0.35, '#050b18'); // Dark indigo-navy
      bgGradient.addColorStop(0.7, '#030611'); // Navy-black
      bgGradient.addColorStop(1, '#020408'); // Pure obsidian black

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Ambient violet glow
      const violetGlow = ctx.createRadialGradient(
        width * 0.75, height * 0.65, 20,
        width * 0.75, height * 0.65, Math.min(width, height) * 0.55
      );
      violetGlow.addColorStop(0, 'rgba(88, 28, 135, 0.14)');
      violetGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = violetGlow;
      ctx.fillRect(0, 0, width, height);

      // Ambient cyan-blue glow
      const blueGlow = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 10,
        width * 0.2, height * 0.3, Math.min(width, height) * 0.5
      );
      blueGlow.addColorStop(0, 'rgba(30, 58, 138, 0.16)');
      blueGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const maxDistance = 115; // Max line connection distance

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Normal drift movement
          p.x += p.vx;
          p.y += p.vy;

          // Gentle cursor interaction: attract slightly toward cursor if nearby
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const interactionRadius = 160;

            if (dist < interactionRadius && dist > 1) {
              const force = (1 - dist / interactionRadius) * 0.04;
              p.x += (dx / dist) * force * 15;
              p.y += (dy / dist) * force * 15;
            }
          }

          // Screen wrap-around
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        // Draw soft glow around particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha * 0.28})`;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles with very faint lines (Constellation effect)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(165, 180, 252, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener('change', handleMotionChange);
      parentElement.removeEventListener('mousemove', handleMouseMove as EventListener);
      parentElement.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
