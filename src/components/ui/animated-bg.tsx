"use client";
import { motion } from "framer-motion";

export function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orb 1 — top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, #7c3aed0f 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-20 w-[460px] h-[460px] rounded-full"
        style={{ background: 'radial-gradient(circle, #a78bfa0d 0%, transparent 70%)' }}
        animate={{ x: [0, -25, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Orb 3 — center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #7c3aed06 0%, transparent 70%)' }}
        animate={{ scaleX: [1, 1.1, 1], scaleY: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating ring 1 */}
      <motion.div
        className="absolute top-16 right-16 w-24 h-24 rounded-full border border-primary/10"
        animate={{ y: [0, -12, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating ring 2 */}
      <motion.div
        className="absolute bottom-24 left-24 w-16 h-16 rounded-full border border-primary/10"
        animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Small floating square 1 */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-5 h-5 rounded-sm border border-primary/15 rotate-45"
        animate={{ y: [0, -16, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small floating square 2 */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-sm bg-primary/8 rotate-45"
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Floating dot cluster */}
      {[
        { top: '20%', left: '8%', delay: 0 },
        { top: '22%', left: '10%', delay: 0.3 },
        { top: '18%', left: '12%', delay: 0.6 },
        { top: '75%', right: '8%', delay: 1 },
        { top: '77%', right: '10%', delay: 1.3 },
        { top: '73%', right: '12%', delay: 1.6 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
          style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

    </div>
  );
}
