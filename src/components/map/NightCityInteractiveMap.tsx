
"use client";

import type { District } from '@/lib/content/districts';
import { cn } from '@/lib/utils';
import React from 'react';

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

const findDistrictByLabel = (label: string, districtsData: District[]): District | undefined => {
  const simplifiedLabel = label.toLowerCase().split(':')[0].trim();
  return districtsData.find(d => d.name.toLowerCase().startsWith(simplifiedLabel));
};

export function NightCityInteractiveMap({
  districts: districtsData, // Renamed to avoid conflict with SVG attributes if any
  hoveredDistrictId,
  activeDistrictId,
  onDistrictSelect,
  onDistrictHover,
}: NightCityInteractiveMapProps) {
  const viewBox = "0 0 210 297"; // From user's SVG

  const getDistrictStyle = (districtLabel: string) => {
    const district = findDistrictByLabel(districtLabel, districtsData);
    if (!district) {
      return { fill: "transparent", stroke: "#ff0000", strokeWidth: "0.6", fillOpacity: 0 };
    }

    const districtId = generateAnchorId(district.name);
    const isActive = activeDistrictId === districtId;
    const isHovered = hoveredDistrictId === districtId;

    let fill = "transparent";
    let fillOpacity = 0;
    let stroke = "#ff0000"; // Default stroke from user's SVG if not hovered/active
    let strokeWidth = "0.6"; // Default stroke-width from user's SVG

    if (isActive) {
      fill = `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.5)`; // Use HSL CSS vars
      stroke = `hsl(var(--primary))`;
      strokeWidth = "1"; 
      fillOpacity = 1; // Use fill-opacity directly for hsla
    } else if (isHovered) {
      fill = `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.3)`; // Use HSL CSS vars
      stroke = `hsl(var(--primary))`;
      strokeWidth = "0.75";
      fillOpacity = 1; // Use fill-opacity directly for hsla
    }
    
    return { 
        fill: fill, 
        stroke: stroke, 
        strokeWidth: strokeWidth, 
        fillOpacity: isActive || isHovered ? (isActive ? 0.5 : 0.3) : 0, // Set fill-opacity for highlight
        strokeOpacity: 1, // Ensure stroke is always visible
        transition: 'fill 0.2s ease-in-out, stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out, fill-opacity 0.2s ease-in-out' // Smooth transitions
    };
  };
  
  const baseStrokeWidth = "0.6";

  return (
    <div
      className="w-full max-w-2xl mx-auto my-6 p-2 border border-border rounded-lg shadow-lg bg-card overflow-hidden"
      aria-label="Mapa Interativo de Night City"
    >
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="mapTitle"
        role="graphics-document"
        version="1.1"
        id="svg1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        // xmlnsSvg="http://www.w3.org/2000/svg" // Redundant with xmlns
        // sodipodiDocname="night-city-divisions.svg" // Removed as not needed for rendering
        // inkscapeVersion="1.4.2 (f4327f4, 2025-05-13)" // Removed
      >
        <title id="mapTitle">Mapa de Night City</title>
        <desc>Mapa interativo dos distritos de Night City. Clique ou passe o mouse sobre uma área para destacá-la e ver detalhes.</desc>
        <defs id="defs1" />
        <g id="layer1" /* inkscapeLabel="Camada 1" inkscapeGroupmode="layer" */ > {/* Removed inkscape attributes not needed for rendering */}
          {/* Contorno Geral - Non-interactive base */}
          <path
            style={{ display: 'inline', fill: 'hsl(var(--muted))', fillOpacity: 0.05, stroke: 'hsl(var(--border))', strokeWidth: baseStrokeWidth, strokeDasharray: 'none', strokeOpacity: 0.7 }}
            d="m 71.384209,200.60526 -3.473682,-8.16316 -6.947369,-1.38947 -5.210526,-9.9 -2.778948,-34.56316 -9.031579,-9.03158 9.726316,-9.20526 6.947369,5.38421 12.678946,-5.5579 -10.160526,-21.71052 -28.136842,-11.810527 3.3,-30.915789 24.142104,-15.457895 11.810527,-1.563156 23.1,-14.76316 L 121.83947,33 l 8.68421,5.557895 0.69474,9.378948 13.72105,32.652631 24.83685,31.089476 10.07368,3.64736 -1.65,20.49474 -16.15263,10.42105 11.63684,15.28421 1.38947,9.9 4.68948,4.68948 1.21579,5.03684 -6.77369,38.55789 -17.71579,21.71053 -8.16316,-2.95263 -3.64736,-6.6 -12.1579,0.86842 -14.58947,-9.20526 -12.1579,17.5421 -41.163153,16.67368 -18.757897,-18.23684 9.118422,-24.1421 z"
            id="path18"
            // inkscapeLabel="Contorno geral" // Removed
            className="pointer-events-none"
          />

          {/* Watson */}
          <g
            id="g18"
            // inkscapeLabel="Watson" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Watson", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Watson", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("Watson")} d="M 63.177631,106.85921 35.124599,94.811854 38.194929,63.985719 62.51196,48.142807 l 11.790074,-1.47376 23.088899,-14.860408 24.439847,1.228133 8.59692,5.772226 0.8597,9.210995 10.93038,25.667975 -4.6669,3.6844 -3.43878,6.140664 0.24563,5.64941 -3.43877,3.684399 0.24562,1.228133 -12.28132,4.175651 -7.5951,6.394115 0.0868,8.98815 -2.62698,2.82237 -0.39079,6.25263 -2.25789,3.99474 -9.161842,1.0204 -23.838156,-0.0868 z" id="path19" />
            <path style={getDistrictStyle("Watson")} d="m 141.35809,73.749375 -3.93003,3.31596 -3.19314,6.263476 v 5.280972 l -3.43878,4.175651 0.36844,1.228133 -12.77258,4.666905 -7.24598,5.895038 0.24563,9.211 -2.70189,2.70189 -0.12282,6.26347 -2.33345,4.29847 -9.825063,0.61407 -22.229204,-0.49126" id="path2" />
            <path style={getDistrictStyle("Watson")} d="m 118.53947,98.21842 -1.21579,-6.078947 -1.21579,-3.473683 1.04211,-5.210527 -5.21053,-4.515789 -5.03684,2.952631 -4.68947,-0.347369 -4.689478,3.126316 1.042107,4.689473 2.431581,2.952631 -1.215792,30.047364 7.815792,0.52106" id="path3" />
            <path style={getDistrictStyle("Watson")} d="M 63.394737,106.03421 85.799998,91.965789 100.0421,92.313156" id="path4" />
            <path style={getDistrictStyle("Watson")} d="m 59.573683,49.934211 7.121054,9.031579 -2.08421,4.689472 2.778945,3.821054 4.689475,-0.173685 13.547368,23.794735" id="path5" />
          </g>

          {/* Westbrook */}
          <g
            id="g19"
            // inkscapeLabel="Westbrook" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Westbrook", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Westbrook", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("Westbrook")} d="m 141.81316,74.076316 -4.51579,3.647368 -2.95263,5.905262 v 4.689475 l -3.30001,4.515789 V 94.05 l -11.98421,4.16842 -7.6421,6.42632 0.17368,8.85789 -2.60526,3.12632 -0.52105,6.07894 -2.43158,4.16842 -3.99474,0.34737 11.28948,17.19474 1.0421,5.73158 12.15789,9.20526 1.04211,2.08421 6.94737,4.51579 1.21579,-1.38947 15.80526,10.07368 4.51579,1.56316 18.7579,-4.60263 -0.86842,-9.72632 -11.81053,-15.28421 16.15263,-10.76842 1.38947,-20.32105 -9.89999,-3.82105 -24.83685,-31.089476 z" id="path20" />
            <path style={getDistrictStyle("Westbrook")} d="m 134.60336,89.162442 4.42128,14.737598 -2.45627,1.96501 -3.19315,7.12317 4.42128,0.49125 3.19315,10.80757 -1.96501,2.21064 2.45626,1.47376 -2.70189,-0.24563 v 9.08818 l 5.15816,6.14067 5.89503,3.43877 12.03571,0.73688" id="path6" />
            <path style={getDistrictStyle("Westbrook")} d="m 102.18065,128.21707 11.29882,16.45698 0.98251,5.15815 11.79007,9.33381 1.22814,1.96502 6.87754,4.91253 1.22813,-1.47376 15.96573,10.07069 4.42128,1.47375 18.42199,-4.29846" id="path7" />
            <path style={getDistrictStyle("Westbrook")} d="m 138.53338,136.93681 -5.40378,2.21064 1.22813,1.71938 -4.91253,12.28133 -2.70189,5.40379" id="path8" />
          </g>

          {/* City Center */}
          <g
            id="g21"
            // inkscapeLabel="City Center" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("City Center", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("City Center", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("City Center")} d="m 53.546591,128.40129 6.877542,5.28097 13.141024,-5.64941 28.861123,-0.8597 7.98286,13.50946 -4.42128,6.87755 -4.6669,0.85969 1.10532,1.96501 -0.8597,6.81614 -1.10532,2.08783 -3.193141,2.21064 -5.28097,-0.24563 -4.666906,-2.57908 -3.807211,-6.26348 -29.966441,0.85969 -0.491254,-6.38629 -8.965369,-9.21099 z" id="path21" />
            <path style={getDistrictStyle("City Center")} d="m 93.215282,128.46269 0.245625,8.10568 -5.158157,0.24562 v 5.40379 l -2.210639,3.93002 -4.175652,-1.71938 -1.228132,2.70189 2.701891,1.47376 0.245626,3.6844 -29.475187,0.9825" id="path10" />
            <path style={getDistrictStyle("City Center")} d="m 110.28633,140.62121 -4.42128,6.87754 -4.66691,0.98251 1.47376,1.96501 -1.22813,6.87754" id="path13" />
          </g>

          {/* Heywood */}
          <g
            id="g22"
            // inkscapeLabel="Heywood" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Heywood", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Heywood", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("Heywood")} d="m 53.581577,153.45 2.344738,27.96316 5.036843,9.55263 7.46842,1.73684 30.568421,-2.2579 22.926311,-34.21579 -7.46842,-6.07894 -1.0421,-4.86316 -2.60526,-4.3421 -4.86316,6.25263 -4.16842,1.21579 0.69473,1.73684 -1.21579,7.98947 -3.821049,2.95263 -5.036841,0.52105 -4.863158,-2.95263 -3.3,-5.21052 -0.694738,-0.86842 z" id="path22" />
            <path style={getDistrictStyle("Heywood")} d="M 121.95359,156.21849 99.601572,190.11496 68.16137,192.57122" id="path9" />
            <path style={getDistrictStyle("Heywood")} d="m 76.267047,152.65691 1.965013,39.05462" id="path11" />
            <path style={getDistrictStyle("Heywood")} d="m 106.84755,176.97394 c 0,-0.8597 -4.42127,-10.07069 -4.42127,-10.07069 l -1.22814,-8.59693 -3.930021,2.94752 -5.64941,0.24563 -4.42128,-2.94752 -3.193145,-5.64942" id="path12" />
          </g>

          {/* Santo Domingo */}
          <g
            id="g23"
            // inkscapeLabel="Santo Domingo" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Santo Domingo", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Santo Domingo", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("Santo Domingo")} d="m 98.739472,191.05263 23.273688,-34.91053 4.28495,2.99321 1.32024,2.24134 6.90825,4.85113 1.22813,-1.62728 15.85827,10.10139 4.48268,1.47376 18.91325,-4.78972 4.78971,4.91254 1.10533,4.6669 -6.50911,38.809 -17.80793,21.3081 -8.10567,-2.45626 -3.56159,-6.50911 -12.15851,0.73688 -13.07962,-8.41271 -15.65869,-14.36915 z" id="path23" />
            <path style={getDistrictStyle("Santo Domingo")} d="M 117.45395,222.9671 103.99342,209.85395 98.696051,190.74868" id="path14" />
            <path style={getDistrictStyle("Santo Domingo")} d="m 118.392,224.87112 11.0532,-6.87755 -9.57944,-6.14066 6.38629,-3.93002 3.19315,-6.63192 3.6844,2.45627 18.66762,-27.75581" id="path15" />
          </g>

          {/* Pacifica */}
          <g
            id="g24"
            // inkscapeLabel="Pacifica" // Removed
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Pacifica", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Pacifica", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            <path style={getDistrictStyle("Pacifica")} d="m 68.51842,192.61579 2.952631,8.16316 -16.499999,14.76315 -9.192402,23.9438 18.729025,18.08425 41.203855,-16.57979 12.40414,-17.50089 -13.81649,-13.63228 -5.526598,-19.40449 z" id="path24" />
            <path style={getDistrictStyle("Pacifica")} d="m 71.600144,200.49268 4.544091,2.08783 -6.263478,12.28133 10.80757,16.08854 5.895036,-8.71975 3.193145,-0.12281 4.05284,-4.78972 1.596572,1.47376 7.3688,-8.59693" id="path16" />
            <path style={getDistrictStyle("Pacifica")} d="M 80.565513,231.38022 68.284184,244.1528 65.091039,257.0482" id="path17" />
          </g>
          
          {/* 
            Placeholder for Dogtown:
            If your SVG has a group for Dogtown (e.g., <g id="g_dogtown" inkscape:label="Dogtown">...</g>),
            you would add it here, similar to Pacifica:
          */}
          {/*
          <g
            id="g_dogtown_placeholder" // Replace with actual ID if available
            // inkscapeLabel="Dogtown"
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Dogtown", districtsData);
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Dogtown", districtsData);
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            // Assuming Dogtown has path data, e.g., id="path_dogtown_1", id="path_dogtown_2"
            // <path style={getDistrictStyle("Dogtown")} d="your_dogtown_path_1_data" id="path_dogtown_1" />
            // <path style={getDistrictStyle("Dogtown")} d="your_dogtown_path_2_data" id="path_dogtown_2" />
          </g>
          */}

          {/* 
            Placeholder for Badlands:
            If your SVG has a group for Badlands (e.g., <g id="g_badlands" inkscape:label="Badlands">...</g>),
            you would add it here. Note: "As Terras Baldias (Badlands)" might need careful label matching.
          */}
          {/*
          <g
            id="g_badlands_placeholder" // Replace with actual ID if available
            // inkscapeLabel="Badlands" 
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={() => {
              const dist = findDistrictByLabel("Badlands", districtsData); // Or "As Terras Baldias"
              if (dist) onDistrictSelect(generateAnchorId(dist.name));
            }}
            onMouseEnter={() => {
              const dist = findDistrictByLabel("Badlands", districtsData); // Or "As Terras Baldias"
              if (dist) onDistrictHover(generateAnchorId(dist.name));
            }}
            onMouseLeave={() => onDistrictHover(null)}
          >
            // <path style={getDistrictStyle("Badlands")} d="your_badlands_path_1_data" id="path_badlands_1" />
          </g>
          */}
        </g>
      </svg>
    </div>
  );
}
