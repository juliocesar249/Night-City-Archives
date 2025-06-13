
"use client";

import type { District } from '@/lib/content/districts';
import { cn } from '@/lib/utils';
import React from 'react';
import { NightCityMapSVG } from './NightCityMapSVG'; // Import the new SVG component

interface NightCityInteractiveMapProps {
  districts: District[];
  hoveredDistrictId: string | null;
  activeDistrictId: string | null;
  onDistrictSelect: (districtId: string) => void;
  onDistrictHover: (districtId: string | null) => void;
}

// This function should ideally be in a shared utils file if used elsewhere,
// or can be passed as a prop if NightCityMapSVG needs it directly.
// For now, NightCityMapSVG will redefine it for its internal use if necessary.
export const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

// This function will also be needed by NightCityMapSVG.tsx
export const findDistrictByLabel = (label: string, districtsData: District[]): District | undefined => {
  const simplifiedLabel = label.toLowerCase().trim();
  const district = districtsData.find(d => {
    const districtName = d.name.split(":")[0].trim().toLowerCase();
    // Try matching by inkscape:label first, then by the start of the generated anchorId
    if (districtName === simplifiedLabel) return true;
    const anchorId = generateAnchorId(d.name);
    return anchorId.startsWith(simplifiedLabel);
  });
  return district;
};


export function NightCityInteractiveMap({
  districts: districtsData,
  hoveredDistrictId,
  activeDistrictId,
  onDistrictSelect,
  onDistrictHover,
}: NightCityInteractiveMapProps) {

  const districtOriginalStrokes: Record<string, string> = {
    "Watson": "#ff0000",
    "Westbrook": "#3c009a",
    "City Center": "#fcec00",
    "Heywood": "#fc6900",
    "Santo Domingo": "#4396fa",
    "Pacifica": "#6891cd",
    "Dogtown": "#5ab755", // Added Dogtown original stroke
    "Badlands": "#b5781a", // Added Badlands original stroke
  };

  const getPathStyle = (
    districtLabel: string,
    originalStrokeColor: string,
    isGroupElement: boolean = false // To differentiate group styling if needed
  ): React.CSSProperties => {
    const district = findDistrictByLabel(districtLabel, districtsData);
    const districtId = district ? generateAnchorId(district.name) : null;

    const isHovered = hoveredDistrictId === districtId;
    const isActive = activeDistrictId === districtId;

    let fill = 'none';
    let fillOpacity = 0;
    let stroke = originalStrokeColor;
    let strokeWidth = "2.265px"; // Default from SVG
    let strokeOpacity = 1; // Default from SVG

    if (isActive) {
      fill = `hsla(var(--primary-h, 51), var(--primary-s, 100%), var(--primary-l, 50%), 0.5)`; // More opaque
      fillOpacity = 1;
      stroke = `hsl(var(--primary-h, 51), var(--primary-s, 100%), var(--primary-l, 50%))`;
      strokeWidth = '3.3px';
    } else if (isHovered) {
      fill = `hsla(var(--primary-h, 51), var(--primary-s, 100%), var(--primary-l, 50%), 0.3)`; // Semi-transparent
      fillOpacity = 1;
      stroke = `hsl(var(--primary-h, 51), var(--primary-s, 100%), var(--primary-l, 50%))`;
      strokeWidth = '2.8px';
    }
    
    // For the group itself, we might not want to apply fill/stroke directly,
    // but let its children (paths) handle it.
    // However, event handlers are on the group.
    // If isGroupElement is true, we can return minimal style or a specific group style
    if (isGroupElement) {
      return {
        cursor: 'pointer',
        // Potentially other group-specific styles if needed
      };
    }

    return {
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      strokeOpacity,
      strokeDasharray: 'none', // from SVG
      transition: 'fill 0.15s ease-in-out, stroke 0.15s ease-in-out, stroke-width 0.15s ease-in-out, fill-opacity 0.15s ease-in-out',
      // cursor: 'pointer', // cursor is on the group
    };
  };


  return (
    <div
      className="w-full max-w-2xl mx-auto my-6 p-2 border border-border rounded-lg shadow-lg bg-card overflow-hidden"
      aria-label="Mapa Interativo de Night City"
    >
      <NightCityMapSVG
        districtsData={districtsData}
        hoveredDistrictId={hoveredDistrictId}
        activeDistrictId={activeDistrictId}
        onDistrictSelect={onDistrictSelect}
        onDistrictHover={onDistrictHover}
        districtOriginalStrokes={districtOriginalStrokes}
        getPathStyle={getPathStyle}
        findDistrictByLabel={findDistrictByLabel}
        generateAnchorId={generateAnchorId}
      />
    </div>
  );
}

    