
"use client";

import type { District } from '@/lib/content/districts';
import { cn } from '@/lib/utils';

interface NightCityInteractiveMapProps {
  districts: District[];
  hoveredDistrictId: string | null;
  activeDistrictId: string | null;
  onDistrictSelect: (districtId: string) => void;
  onDistrictHover: (districtId: string | null) => void;
}

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') 
    .replace(/\(/g, '') 
    .replace(/\)/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, ''); 
};

export function NightCityInteractiveMap({
  districts,
  hoveredDistrictId,
  activeDistrictId,
  onDistrictSelect,
  onDistrictHover,
}: NightCityInteractiveMapProps) {
  
  // Placeholder: Replace with actual SVG viewBox from your map
  const viewBox = "0 0 800 1000"; 

  // Placeholder coordinates for text - these would be path 'd' attributes in a real SVG
  const placeholderCoords: { [key: string]: { x: number; y: number } } = {
    "watson-o-berco-e-o-abandono": { x: 150, y: 150 },
    "westbrook-o-luxo-deteriorado-e-a-ordem-dos-tyger-claws": { x: 350, y: 200 },
    "city-center-o-coracao-de-neon-do-poder-corporativo": { x: 300, y: 400 },
    "heywood-a-alma-multifacetada-de-night-city": { x: 250, y: 600 },
    "santo-domingo-o-motor-industrial-e-o-caldeirao-de-classes": { x: 500, y: 700 },
    "pacifica-o-paraiso-esquecido-vazio-e-perigoso": { x: 100, y: 800 },
    "dogtown-o-feudo-anarquico-do-coronel-hansen": { x: 250, y: 900 },
    "as-terras-baldias-badlands-o-deserto-sem-lei": { x: 600, y: 100 },
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4 p-2 border rounded-lg shadow-lg bg-card" aria-label="Mapa Interativo de Night City">
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Mapa de Night City</title>
        {/* 
          INTEGRATION POINT FOR YOUR SVG:
          Replace the <g> group below with your actual SVG <path> or <g> elements for each district.
          Ensure each district path/group has an `id` attribute matching the output of 
          `generateAnchorId(district.name)`.
          For example: <path id="watson-o-berco-e-o-abandono" d="..." />
        */}
        <g>
          {districts.map((district, index) => {
            const districtId = generateAnchorId(district.name);
            const isActive = activeDistrictId === districtId;
            const isHovered = hoveredDistrictId === districtId;
            
            let fill = 'hsl(var(--muted))'; // Default fill
            let stroke = district.borderColor || 'hsl(var(--border))';
            let strokeWidth = 1;
            let opacity = 0.7;

            if (isActive) {
              fill = district.borderColor || 'hsl(var(--primary))';
              stroke = 'hsl(var(--foreground))';
              strokeWidth = 2;
              opacity = 1;
            } else if (isHovered) {
              fill = district.borderColor || 'hsl(var(--primary))';
              opacity = 0.9;
              strokeWidth = 1.5;
            }

            // Using text as placeholders. Replace with your <path> elements.
            const coords = placeholderCoords[districtId] || { x: 50 + (index * 100) % 700, y: 50 + Math.floor(index / 7) * 100 };

            return (
              <g 
                key={districtId} 
                id={`map-${districtId}`} // Ensure IDs on SVG elements are unique if map elements are directly used
                onClick={() => onDistrictSelect(districtId)}
                onMouseEnter={() => onDistrictHover(districtId)}
                onMouseLeave={() => onDistrictHover(null)}
                className="cursor-pointer transition-all duration-200"
                aria-label={district.name}
              >
                {/* Placeholder Rectangle: Replace with your actual <path> element */}
                <rect 
                  x={coords.x - 40} 
                  y={coords.y - 20} 
                  width="80" 
                  height="30" 
                  fill={fill} 
                  stroke={stroke} 
                  strokeWidth={strokeWidth}
                  opacity={opacity}
                  rx="5"
                />
                <text 
                  x={coords.x} 
                  y={coords.y} 
                  textAnchor="middle" 
                  fontSize="10" 
                  fill={isActive || isHovered ? 'hsl(var(--background))' : 'hsl(var(--foreground))'}
                  className="pointer-events-none select-none"
                >
                  {district.name.split(':')[0]}
                </text>
                 {/* Add a comment for where the actual path would go */}
                {/* <path id={districtId} d="YOUR_DISTRICT_PATH_HERE" fill={fill} stroke={stroke} strokeWidth={strokeWidth} opacity={opacity} /> */}
              </g>
            );
          })}
        </g>
        <desc>Mapa interativo dos distritos de Night City. Clique ou passe o mouse sobre um distrito para destacá-lo.</desc>
      </svg>
    </div>
  );
}
