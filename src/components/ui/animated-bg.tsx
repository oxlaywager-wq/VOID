"use client";
import { motion } from "framer-motion";

export function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Dot grid violet */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.14) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
        }}
      />

      {/* Orb top-left */}
      <motion.div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
        animate={{ x: [0, 26, 0], y: [0, 18, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb bottom-right */}
      <motion.div
        className="absolute -bottom-36 -right-16 w-[460px] h-[460px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
        animate={{ x: [0, -22, 0], y: [0, -16, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating ring 1 */}
      <motion.div
        className="absolute top-14 right-14 w-[72px] h-[72px] rounded-full"
        style={{ border: '1px solid rgba(124,58,237,0.14)' }}
        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating ring 2 */}
      <motion.div
        className="absolute bottom-20 left-20 w-[52px] h-[52px] rounded-full"
        style={{ border: '1px solid rgba(167,139,250,0.1)' }}
        animate={{ y: [0, 9, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Diamond */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 rotate-45"
        style={{ border: '1px solid rgba(124,58,237,0.18)' }}
        animate={{ y: [0, -14, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small diamond */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 rotate-45"
        style={{ background: 'rgba(124,58,237,0.1)' }}
        animate={{ y: [0, 11, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Dot clusters */}
      {[
        { top: '20%', left: '7%', delay: 0 },
        { top: '22%', left: '9.5%', delay: 0.3 },
        { top: '18%', left: '12%', delay: 0.6 },
        { top: '74%', right: '7%', delay: 1 },
        { top: '77%', right: '9.5%', delay: 1.3 },
        { top: '72%', right: '12%', delay: 1.6 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            top: dot.top,
            left: (dot as any).left,
            right: (dot as any).right,
            background: 'rgba(124,58,237,0.28)',
          }}
          animate={{ opacity: [0.2, 0.65, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

    </div>
  );
}
