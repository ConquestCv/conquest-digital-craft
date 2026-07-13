import { useEffect, useRef } from "react";

interface LiquidMeterProps {
  level: number; // 0-100
  className?: string;
}

const LiquidMeter = ({ level, className = "" }: LiquidMeterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Clamp level between 0 and 100
  const clampedLevel = Math.max(0, Math.min(100, level));
  // Calculate fill height (inverted because SVG y grows downward)
  const fillHeight = 100 - clampedLevel;
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-6 rounded-full overflow-hidden bg-muted/40 border border-border/50 ${className}`}
    >
      {/* SVG Liquid Container */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 200 24" 
        preserveAspectRatio="none"
      >
        <defs>
          {/* Multi-color gradient */}
          <linearGradient id={`liquidGradient-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(265, 90%, 65%)" />
            <stop offset="35%" stopColor="hsl(290, 85%, 58%)" />
            <stop offset="65%" stopColor="hsl(320, 80%, 55%)" />
            <stop offset="100%" stopColor="hsl(265, 85%, 70%)" />
          </linearGradient>
          
          {/* Wave turbulence filter */}
          <filter id={`turbulence-${level}`} x="0" y="0" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02 0.05" 
              numOctaves="2" 
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="3s"
                values="0.02 0.05;0.03 0.08;0.02 0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="3"
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
          
          {/* Glow effect */}
          <filter id={`glow-${level}`}>
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background track */}
        <rect 
          x="0" 
          y="0" 
          width="200" 
          height="24" 
          fill="transparent"
          rx="12"
        />
        
        {/* Liquid fill with wave effect */}
        <g filter={`url(#turbulence-${level})`}>
          <rect 
            x="0" 
            y="0" 
            width={clampedLevel * 2} 
            height="24" 
            fill={`url(#liquidGradient-${level})`}
            rx="12"
            className="transition-all duration-700 ease-out"
            filter={`url(#glow-${level})`}
          />
        </g>
        
        {/* Animated wave overlay at the liquid edge */}
        {clampedLevel > 5 && (
          <g className="animate-liquid-wave">
            <ellipse
              cx={clampedLevel * 2 - 2}
              cy="12"
              rx="4"
              ry="10"
              fill="hsl(290, 85%, 70%)"
              opacity="0.6"
            >
              <animate
                attributeName="ry"
                dur="1.5s"
                values="10;8;10;12;10"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                dur="1.5s"
                values="0.6;0.4;0.6;0.5;0.6"
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        )}
        
        {/* Shine/highlight on top */}
        <rect 
          x="2" 
          y="2" 
          width={Math.max(0, clampedLevel * 2 - 4)} 
          height="6" 
          fill="url(#shineGradient)"
          rx="3"
          opacity="0.3"
          className="transition-all duration-700 ease-out"
        />
        <defs>
          <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Bubble animations */}
        {clampedLevel > 20 && (
          <>
            <circle cx={clampedLevel * 0.5} cy="16" r="1.5" fill="white" opacity="0.4">
              <animate
                attributeName="cy"
                dur="2s"
                values="18;6;18"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                dur="2s"
                values="0.4;0.1;0.4"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={clampedLevel * 1.2} cy="14" r="1" fill="white" opacity="0.3">
              <animate
                attributeName="cy"
                dur="2.5s"
                values="16;8;16"
                repeatCount="indefinite"
                begin="0.5s"
              />
              <animate
                attributeName="opacity"
                dur="2.5s"
                values="0.3;0.1;0.3"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
          </>
        )}
      </svg>
      
      {/* Glass reflection overlay */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)"
        }}
      />
    </div>
  );
};

export default LiquidMeter;