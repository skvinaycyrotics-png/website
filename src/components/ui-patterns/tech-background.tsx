export function TechBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Orb 1 */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

      {/* Animated Orb 2 */}
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl animate-pulse" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />

      {/* Floating Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.03] via-transparent to-blue-500/[0.03] animate-[spin_40s_linear_infinite]" />

    </div>
  );
}
