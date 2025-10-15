import { cn } from "@/lib/utils";

const FlowingLogo = ({
  children,
  vertical = false,
  repeat = 4,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "group relative flex h-full w-full overflow-hidden p-1 [--duration:10s] [--gap:12px] [gap:var(--gap)]",
      vertical ? "flex-col" : "flex-row",
      className
    )}>
    {Array.from({ length: repeat }).map((_, index) => (
      <div
        key={`item-${index}`}
        className={cn("flex shrink-0 [gap:var(--gap)]", {
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
          "animate-canopy-horizontal flex-row": !vertical,
          "animate-canopy-vertical flex-col": vertical,
        })}>
        {children}
      </div>
    ))}
    {applyMask && (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-full w-full",
          vertical
            ? "bg-gradient-to-b from-background via-transparent to-background"
            : "bg-gradient-to-r from-background via-transparent to-background"
        )}
      />
    )}

  </div>
);

const LogoCard = ({
  logo,
  className
}) => (
  <div
    className={cn(
      "flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center hover:scale-110 rounded-xl border-b-2 transition-all hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] p-3",
      className
    )}
    style={{
      backgroundColor: 'rgb(26, 26, 26)',
      borderBottomColor: 'rgb(38, 38, 38)'
    }}>
    <img
      src={logo.image}
      alt={logo.name}
      className="w-full h-full object-contain" />
  </div>
);

export const FlowingLogos = ({
  data,
  className,
  cardClassName
}) => (
  <div className={cn("w-full overflow-hidden", className)}>
    {[false, true, false].map((reverse, index) => (
      <FlowingLogo
        key={`Canopy-${index}`}
        reverse={reverse}
        className="[--duration:30s]"
        pauseOnHover
        applyMask
        repeat={9}>
        {data.map((logo) => (
          <LogoCard key={logo.name} logo={logo} className={cardClassName} />
        ))}
      </FlowingLogo>
    ))}
  </div>
);