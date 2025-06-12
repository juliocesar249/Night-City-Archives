
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
  // You can find this by opening src/img/night-city-complete.svg in a text editor.
  const viewBox = "0 0 800 700"; // <<<< ----- UPDATE THIS VALUE from your SVG file

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-2 border border-border rounded-lg shadow-lg bg-card overflow-hidden" aria-label="Mapa Interativo de Night City">
      <svg
        viewBox={viewBox} // Ensure this matches your SVG's viewBox for correct scaling
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="mapTitle"
        role="graphics-document"
      >
        <title id="mapTitle">Mapa de Night City</title>
        <desc>Mapa interativo dos distritos de Night City. Clique ou passe o mouse sobre um distrito para destacá-lo e ver detalhes.</desc>
        
        {/* 
          SVG INTEGRATION INSTRUCTIONS:
          You need to replace the content within this loop with the <path> elements from your SVG file (src/img/night-city-complete.svg).
          
          For EACH district in the `districts` array:
          1. Identify the <path> element in your SVG that visually represents that district.
          2. Copy its 'd' attribute (e.g., d="M10,10 L20,10 L15,20 Z").
          3. Also copy any 'transform' attribute if your path uses it (e.g., transform="translate(10, 20) scale(2)").
          4. Place this <path> element inside the loop below, making sure it corresponds to the correct `district` object.
          5. To make it interactive, you MUST apply the following attributes to YOUR <path> element:
             - key={districtId}
             - id={districtId}  // CRITICAL for linking
             - d="YOUR_COPIED_D_ATTRIBUTE_HERE"
             - transform="YOUR_COPIED_TRANSFORM_ATTRIBUTE_HERE" // (if applicable)
             - fill={fill}
             - stroke={stroke}
             - strokeWidth={strokeWidth}
             - opacity={opacity}
             - onClick={() => onDistrictSelect(districtId)}
             - onMouseEnter={() => onDistrictHover(districtId)}
             - onMouseLeave={() => onDistrictHover(null)}
             - className={cn("cursor-pointer transition-all duration-150 ease-in-out")}
             - style={{ zIndex }} // Helps with hover overlaps
             - aria-label={district.name}
          
          I've included an EXAMPLE conditional rendering for 'watson'. You'll need to adapt this
          for all your districts, or find a way to map your SVG paths to the district data.
        */}

        <g> {/* Optional: A group for all district paths */}
          {districts.map((district) => {
            const districtId = generateAnchorId(district.name);
            const isActive = activeDistrictId === districtId;
            const isHovered = hoveredDistrictId === districtId;
            
            // Dynamic styles for the path
            let fill = isActive 
              ? (district.borderColor ? `${district.borderColor}E6` : 'hsl(var(--primary) / 0.9)') // 90% opacity active
              : isHovered 
                ? (district.borderColor ? `${district.borderColor}B3` : 'hsl(var(--primary) / 0.7)') // 70% opacity hover
                : 'hsl(var(--muted) / 0.5)'; // Default: 50% opacity muted
            
            let stroke = isActive || isHovered 
              ? 'hsl(var(--foreground))' 
              : (district.borderColor || 'hsl(var(--border) / 0.7)');

            let strokeWidth = isActive ? 2.5 : isHovered ? 2 : 1;
            let opacity = 1; // Opacity is now mainly handled by the fill color's alpha
            let zIndex = isActive ? 10 : isHovered ? 5 : 1;

            // --- Your integration point for EACH district's path ---
            // Replace this illustrative 'if' block with the actual paths from your SVG.
            // You need one <path> here for each district, with the correct 'd' attribute.
            if (districtId === "watson-o-berco-e-o-abandono") { 
               return (
                <path
                  key={districtId}
                  id={districtId} 
                  // IMPORTANT: Replace this 'd' attribute with Watson's path data from your SVG file
                  d="M50,50 h100 v50 h-100 z" // EXAMPLE PATH - REPLACE THIS
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  opacity={opacity}
                  onClick={() => onDistrictSelect(districtId)}
                  onMouseEnter={() => onDistrictHover(districtId)}
                  onMouseLeave={() => onDistrictHover(null)}
                  className={cn("cursor-pointer transition-all duration-150 ease-in-out")}
                  style={{ zIndex }}
                  aria-label={district.name}
                />
              );
            }
            // Add similar <path> elements for other districts, mapping them to their districtId
            // For example:
            // if (districtId === "city-center-o-coracao-de-neon-do-poder-corporativo") {
            //   return <path key={districtId} id={districtId} d="YOUR_CITY_CENTER_PATH_DATA" ... (apply all props as above) />;
            // }
            
            // If you don't have a path for a district yet, you can return null or a placeholder
            return null; 
          })}
        </g>
        
        {/* Fallback text if no paths are specifically mapped above, or as an initial guide */}
        {/* This checks if at least one path (e.g. Watson) has been manually added. 
            You might want to remove this text once you've integrated all your paths. */}
        {!districts.find(d => generateAnchorId(d.name) === "watson-o-berco-e-o-abandono" && activeDistrictId) && 
         !districts.find(d => generateAnchorId(d.name) === "watson-o-berco-e-o-abandono" && hoveredDistrictId) && 
         (
            <text x="50%" y="50%" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="14" className="pointer-events-none">
                Interactive Map Area. Please integrate SVG paths from 
                <tspan x="50%" dy="1.2em">src/img/night-city-complete.svg into NightCityInteractiveMap.tsx</tspan>
                <tspan x="50%" dy="1.2em">(See comments in the component for instructions)</tspan>
            </text>
        )}
      </svg>
    </div>
  );
}
 