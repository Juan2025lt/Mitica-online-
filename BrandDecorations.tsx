import React from 'react';

// Angular minimal "M" Isotype seal (used on cups, glasses, and brand signage)
export const MiticaIsotype: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-6 h-6',
  size
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Mítica Isotipo"
    >
      {/* Geometric angular M with refined sharp apex and clean symmetry */}
      <path
        d="M20 82V18L50 54L80 18V82"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Subtle fine cross accentuating author craft */}
      <line x1="16" y1="82" x2="24" y2="82" stroke="currentColor" strokeWidth="4" />
      <line x1="76" y1="82" x2="84" y2="82" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};

// Organic fine lines (waves/leaves) in translucent white/copper for section corners
export const OrganicWaveTexture: React.FC<{
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'bottom-left':
        return 'rotate-180';
      case 'top-left':
        return 'scale-x-[-1]';
      case 'bottom-right':
        return 'scale-y-[-1]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden opacity-30 select-none z-0 ${className} ${getTransform()}`}
      aria-hidden="true"
    >
      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#F5F1EA]"
      >
        <path
          d="M260 0C210 50 160 80 120 120C80 160 50 210 0 260"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
        />
        <path
          d="M260 30C220 70 180 100 140 140C100 180 70 220 30 260"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.3"
        />
        <path
          d="M260 60C230 90 200 120 160 160C120 200 90 230 60 260"
          stroke="#AB7758"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
        <path
          d="M260 90C240 110 220 135 185 175C150 215 115 240 90 260"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.2"
        />
        <path
          d="M260 120C245 135 230 155 205 190C180 225 155 245 125 260"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
      </svg>
    </div>
  );
};
