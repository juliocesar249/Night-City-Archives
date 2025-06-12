
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
  
  // IMPORTANT: Replace this viewBox with the viewBox from YOUR SVG file (e.g., "0 0 1200 900")
  // You can find this by opening your SVG file (e.g., in a text editor if it's complex).
  const viewBox = "0 0 894 914"; // <<<< ----- UPDATE THIS VALUE from your SVG file

  // IMPORTANT: Replace the 'd' attribute below with the 'd' attribute from YOUR SINGLE complex SVG path.
  // This path will be the visual background and will not be interactive itself.
  const yourComplexMapPathData = "M100,10 L150,10 L125,50 Z M200,50 l50,0 l-25,40 Z"; // <<<< ----- PASTE YOUR SVG's SINGLE PATH 'd' ATTRIBUTE HERE

  // --- Approximate Hotspot Definitions ---
  // You WILL LIKELY NEED TO ADJUST x, y, width, height for each district 
  // to match your specific SVG layout. These are very rough guesses.
  const districtHotspots: Record<string, { x: string, y: string, width: string, height: string, name: string }> = {
    "watson-o-berco-e-o-abandono": { x: "150", y: "50", width: "200", height: "150", name: "Watson" },
    "westbrook-o-luxo-deteriorado-e-a-ordem-dos-tyger-claws": { x: "360", y: "100", width: "180", height: "120", name: "Westbrook" },
    "city-center-o-coracao-de-neon-do-poder-corporativo": { x: "300", y: "250", width: "250", height: "200", name: "City Center" },
    "heywood-a-alma-multifacetada-de-night-city": { x: "300", y: "460", width: "250", height: "180", name: "Heywood" },
    "santo-domingo-o-motor-industrial-e-o-caldeirao-de-classes": { x: "100", y: "350", width: "180", height: "250", name: "Santo Domingo" },
    "pacifica-o-paraiso-esquecido-vazio-e-perigoso": { x: "50", y: "620", width: "200", height: "150", name: "Pacifica" },
    "dogtown-o-feudo-anarquico-do-coronel-hansen": { x: "100", y: "780", width: "150", height: "100", name: "Dogtown (Pacifica Sub)" },
    "as-terras-baldias-badlands-o-deserto-sem-lei": { x: "600", y: "50", width: "250", height: "700", name: "Badlands (Surrounding Area)" },
    // Add more with estimated coordinates if you have more districts in your `districts` array
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-2 border border-border rounded-lg shadow-lg bg-card overflow-hidden" aria-label="Mapa Interativo de Night City">
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="mapTitle"
        role="graphics-document"
      >
        <title id="mapTitle">Mapa de Night City</title>
        <desc>Mapa interativo dos distritos de Night City. Clique ou passe o mouse sobre uma área para destacá-la e ver detalhes.</desc>
        
        {/* 1. Your complex SVG path as a non-interactive base layer */}
        {/* Replace the 'd' attribute with your actual single path data from your SVG file. */}
        <path
          d={yourComplexMapPathData} // <<<< ----- YOUR SINGLE COMPLEX SVG PATH DATA GOES HERE
          fill="hsl(var(--muted))" // Base color for the map drawing
          stroke="hsl(var(--border))" // Outline for the map drawing
          strokeWidth="0.5"
          className="pointer-events-none" // Make sure this base map layer doesn't interfere with clicks
        />

        {/* 2. Interactive Hotspot Overlays */}
        <g>
          {districts.map((district) => {
            const districtId = generateAnchorId(district.name);
            const hotspot = districtHotspots[districtId];
            
            if (!hotspot) {
              console.warn(`No hotspot definition for district: ${district.name} (ID: ${districtId})`);
              return null; // Or render a default small rect as a warning
            }

            const isActive = activeDistrictId === districtId;
            const isHovered = hoveredDistrictId === districtId;
            
            let fill = "transparent"; // Default: hotspots are invisible
            if (isActive) {
              fill = district.borderColor ? `${district.borderColor}99` : 'hsl(var(--primary) / 0.6)'; // 60% opacity active
            } else if (isHovered) {
              fill = district.borderColor ? `${district.borderColor}66` : 'hsl(var(--primary) / 0.4)'; // 40% opacity hover
            }
            
            let stroke = isActive || isHovered 
              ? (district.borderColor || 'hsl(var(--foreground))')
              : 'transparent'; // No border by default

            let strokeWidth = isActive ? 2 : isHovered ? 1.5 : 0;
            let zIndex = isActive ? 10 : isHovered ? 5 : 1;

            return (
              <g key={districtId}>
                <rect
                  id={districtId}
                  x={hotspot.x}
                  y={hotspot.y}
                  width={hotspot.width}
                  height={hotspot.height}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  onClick={() => onDistrictSelect(districtId)}
                  onMouseEnter={() => onDistrictHover(districtId)}
                  onMouseLeave={() => onDistrictHover(null)}
                  className={cn("cursor-pointer transition-all duration-150 ease-in-out")}
                  style={{ zIndex }}
                  aria-label={district.name}
                />
                {/* Optional: Add a text label for the hotspot - good for debugging positions */}
                {/* <text 
                  x={parseFloat(hotspot.x) + parseFloat(hotspot.width) / 2} 
                  y={parseFloat(hotspot.y) + parseFloat(hotspot.height) / 2} 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  fontSize="10" 
                  fill="hsl(var(--foreground))"
                  className="pointer-events-none"
                >
                  {hotspot.name}
                </text> */}
              </g>
            );
          })}
        </g>
        
      </svg>
    </div>
  );
}

    