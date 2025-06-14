
"use client";

import type { District } from '@/lib/content/districts';
import React from 'react';

interface NightCityMapSVGProps {
  districtsData: District[];
  hoveredDistrictId: string | null;
  activeDistrictId: string | null;
  onDistrictSelect: (districtId: string) => void;
  onDistrictHover: (districtId: string | null) => void;
  districtOriginalStrokes: Record<string, string>;
  findDistrictByLabel: (label: string, districtsData: District[]) => District | undefined;
  generateAnchorId: (name: string) => string;
}

export function NightCityMapSVG({
  districtsData,
  hoveredDistrictId,
  activeDistrictId,
  onDistrictSelect,
  onDistrictHover,
  districtOriginalStrokes,
  findDistrictByLabel,
  generateAnchorId,
}: NightCityMapSVGProps) {
  const viewBox = "0 0 210 297";

  const getPathStyle = (
    districtKey: string, // e.g., "Watson", "Westbrook"
  ): React.CSSProperties => {
    const district = findDistrictByLabel(districtKey, districtsData);
    const currentDistrictId = district ? generateAnchorId(district.name) : null;
    const originalStrokeColor = districtOriginalStrokes[districtKey] || 'hsl(var(--border))';

    const isHovered = hoveredDistrictId === currentDistrictId;
    const isActive = activeDistrictId === currentDistrictId;

    let fill = 'none';
    let fillOpacity = 0;
    let stroke = originalStrokeColor;
    let strokeWidth = "2.265px"; // Default from SVG
    let strokeOpacity = 1;

    if (isActive) {
      fill = `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.5)`;
      fillOpacity = 1; // More opaque for active
      stroke = `hsl(var(--primary))`;
      strokeWidth = '3.3px';
    } else if (isHovered) {
      // Use district's thematic color for hover from original strokes
      fill = originalStrokeColor;
      fillOpacity = 0.3; // Semi-transparent
      stroke = originalStrokeColor;
      strokeWidth = '2.8px';
    }
    
    return {
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      strokeOpacity,
      strokeDasharray: 'none',
      transition: 'fill 0.15s ease-in-out, stroke 0.15s ease-in-out, stroke-width 0.15s ease-in-out, fill-opacity 0.15s ease-in-out',
      cursor: 'pointer',
    };
  };
  
  const baseOutlineStyle: React.CSSProperties = {
    display: 'inline',
    fill: 'hsl(var(--muted) / 0.05)',
    stroke: 'hsl(var(--border))',
    strokeWidth: '1px',
    strokeDasharray: 'none',
    strokeOpacity: 0.6,
  };

  // Simpler style for text elements: only apply fill color from original strokes.
  // All other styling (font-size, text-anchor, etc.) will come from the inline styles in the SVG.
  const getTextStyle = (districtKey: string): React.CSSProperties => ({
    fill: districtOriginalStrokes[districtKey] || '#000000', // Fallback to black if key not found
    pointerEvents: 'none', // Text should not capture mouse events
  });


  return (
    <svg
      width="100%"
      height="auto"
      viewBox={viewBox}
      version="1.1"
      id="svg_map_interactive_root"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="mapTitle"
      role="graphics-document"
    >
      <title id="mapTitle">Mapa de Night City</title>
      <desc>Mapa interativo dos distritos de Night City.</desc>
      <defs id="defs1_svgmap">
        <rect x="358.57611" y="215.37775" width="47.810147" height="15.549902" id="rect28_svgmap" />
      </defs>
      <g id="layer1_svgmap">
        <path style={baseOutlineStyle} d="m 71.384209,200.60526 -3.473682,-8.16316 -6.947369,-1.38947 -5.210526,-9.9 -2.778948,-34.56316 -9.031579,-9.03158 9.726316,-9.20526 6.947369,5.38421 12.678946,-5.5579 -10.160526,-21.71052 -28.136842,-11.810527 3.3,-30.915789 24.142104,-15.457895 11.810527,-1.563156 23.1,-14.76316 L 121.83947,33 l 8.68421,5.557895 0.69474,9.378948 13.72105,32.652631 24.83685,31.089476 10.07368,3.64736 -1.65,20.49474 -16.15263,10.42105 11.63684,15.28421 1.38947,9.9 4.68948,4.68948 1.21579,5.03684 -6.77369,38.55789 -17.71579,21.71053 -8.16316,-2.95263 -3.64736,-6.6 -12.1579,0.86842 -14.58947,-9.20526 -12.1579,17.5421 -41.163153,16.67368 -18.757897,-18.23684 9.118422,-24.1421 z" id="path18-geral-outline" />
        
        {/* Watson */}
        <g 
          id="g-watson" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Watson", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Watson", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Watson")} d="M 63.177631,106.85921 35.124599,94.811854 38.194929,63.985719 62.51196,48.142807 l 11.790074,-1.47376 23.088899,-14.860408 24.439847,1.228133 8.59692,5.772226 0.8597,9.210995 10.93038,25.667975 -4.6669,3.6844 -3.43878,6.140664 0.24563,5.64941 -3.43877,3.684399 0.24562,1.228133 -12.28132,4.175651 -7.5951,6.394115 0.0868,8.98815 -2.62698,2.82237 -0.39079,6.25263 -2.25789,3.99474 -9.161842,1.0204 -23.838156,-0.0868 z" id="path-watson-main" />
          <path style={getPathStyle("Watson")} d="m 141.35809,73.749375 -3.93003,3.31596 -3.19314,6.263476 v 5.280972 l -3.43878,4.175651 0.36844,1.228133 -12.77258,4.666905 -7.24598,5.895038 0.24563,9.211 -2.70189,2.70189 -0.12282,6.26347 -2.33345,4.29847 -9.825063,0.61407 -22.229204,-0.49126" id="path-watson-details1" />
          <path style={getPathStyle("Watson")} d="m 118.53947,98.21842 -1.21579,-6.078947 -1.21579,-3.473683 1.04211,-5.210527 -5.21053,-4.515789 -5.03684,2.952631 -4.68947,-0.347369 -4.689478,3.126316 1.042107,4.689473 2.431581,2.952631 -1.215792,30.047364 7.815792,0.52106" id="path-watson-details2" />
          <path style={getPathStyle("Watson")} d="M 63.394737,106.03421 85.799998,91.965789 100.0421,92.313156" id="path-watson-details3" />
          <path style={getPathStyle("Watson")} d="m 59.573683,49.934211 7.121054,9.031579 -2.08421,4.689472 2.778945,3.821054 4.689475,-0.173685 13.547368,23.794735" id="path-watson-details4" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="104.42743" y="58.357895" id="text-watson-nid">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="104.42743" y="58.357895" id="tspan-watson-nid1">Distrito Industrial</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="104.42743" y="63.649559" id="tspan-watson-nid2">do Norte</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="57.451443" y="80.923958" id="text-watson-arasaka">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="57.451443" y="80.923958" id="tspan-watson-arasaka1">Cais da </tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="57.451443" y="86.215622" id="tspan-watson-arasaka2">Arasaka</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="104.91869" y="62.533546" id="text-watson-littlechina" transform="translate(-21.384506,50.119828)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="104.91869" y="62.533546" id="tspan-watson-littlechina1">Little China</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="49.452881" y="-126.76587" id="text-watson-kabuki" transform="rotate(90.167697,-35.678927,14.39891)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Watson"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="49.452881" y="-126.76587" id="tspan-watson-kabuki1">Kabuki</tspan>
          </text>
        </g>

        {/* Westbrook */}
        <g 
            id="g-westbrook" 
            style={{ display: 'inline' }}
            onClick={() => { const d = findDistrictByLabel("Westbrook", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
            onMouseEnter={() => { const d = findDistrictByLabel("Westbrook", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
            onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Westbrook")} d="m 141.81316,74.076316 -4.51579,3.647368 -2.95263,5.905262 v 4.689475 l -3.30001,4.515789 V 94.05 l -11.98421,4.16842 -7.6421,6.42632 0.17368,8.85789 -2.60526,3.12632 -0.52105,6.07894 -2.43158,4.16842 -3.99474,0.34737 11.28948,17.19474 1.0421,5.73158 12.15789,9.20526 1.04211,2.08421 6.94737,4.51579 1.21579,-1.38947 15.80526,10.07368 4.51579,1.56316 18.7579,-4.60263 -0.86842,-9.72632 -11.81053,-15.28421 16.15263,-10.76842 1.38947,-20.32105 -9.89999,-3.82105 -24.83685,-31.089476 z" id="path-westbrook-main" />
          <path style={getPathStyle("Westbrook")} d="m 134.60336,89.162442 4.42128,14.737598 -2.45627,1.96501 -3.19315,7.12317 4.42128,0.49125 3.19315,10.80757 -1.96501,2.21064 2.45626,1.47376 -2.70189,-0.24563 v 9.08818 l 5.15816,6.14067 5.89503,3.43877 12.03571,0.73688" id="path-westbrook-details1" />
          <path style={getPathStyle("Westbrook")} d="m 102.18065,128.21707 11.29882,16.45698 0.98251,5.15815 11.79007,9.33381 1.22814,1.96502 6.87754,4.91253 1.22813,-1.47376 15.96573,10.07069 4.42128,1.47375 18.42199,-4.29846" id="path-westbrook-details2" />
          <path style={getPathStyle("Westbrook")} d="m 138.53338,136.93681 -5.40378,2.21064 1.22813,1.71938 -4.91253,12.28133 -2.70189,5.40379" id="path-westbrook-details3" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="180.0636" y="72.305801" id="text-westbrook-noak" transform="translate(-21.384506,50.119828)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="180.0636" y="72.305801" id="tspan-westbrook-noak1">North Oak</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="144.99342" y="76.712189" id="text-westbrook-japantown" transform="translate(-21.384506,50.119828)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="144.99342" y="76.712189" id="tspan-westbrook-japantown1">Japantown</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="171.85745" y="108.30482" id="text-westbrook-charterhill" transform="translate(-21.384506,50.119828)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Westbrook"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="171.85745" y="108.30482" id="tspan-westbrook-charterhill1">Charter Hill</tspan>
          </text>
        </g>

        {/* City Center */}
        <g 
          id="g-citycenter" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("City Center", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("City Center", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("City Center")} d="m 53.546591,128.40129 6.877542,5.28097 13.141024,-5.64941 28.861123,-0.8597 7.98286,13.50946 -4.42128,6.87755 -4.6669,0.85969 1.10532,1.96501 -0.8597,6.81614 -1.10532,2.08783 -3.193141,2.21064 -5.28097,-0.24563 -4.666906,-2.57908 -3.807211,-6.26348 -29.966441,0.85969 -0.491254,-6.38629 -8.965369,-9.21099 z" id="path-citycenter-main" />
          <path style={getPathStyle("City Center")} d="m 93.215282,128.46269 0.245625,8.10568 -5.158157,0.24562 v 5.40379 l -2.210639,3.93002 -4.175652,-1.71938 -1.228132,2.70189 2.701891,1.47376 0.245626,3.6844 -29.475187,0.9825" id="path-citycenter-details1" />
          <path style={getPathStyle("City Center")} d="m 110.28633,140.62121 -4.42128,6.87754 -4.66691,0.98251 1.47376,1.96501 -1.22813,6.87754" id="path-citycenter-details2" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["City Center"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="90.007751" y="91.701889" id="text-citycenter-downtown" transform="translate(-21.384506,50.119828)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["City Center"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="90.007751" y="91.701889" id="tspan-citycenter-downtown1">Downtown</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["City Center"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="117.96028" y="0.65327555" id="text-citycenter-corpoplaza" transform="rotate(25.016708,-216.09815,22.315188)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["City Center"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="117.96028" y="0.65327555" id="tspan-citycenter-corpoplaza1">Corpo</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["City Center"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="117.96028" y="5.9449377" id="tspan-citycenter-corpoplaza2">Plaza</tspan>
          </text>
        </g>

        {/* Heywood */}
        <g 
          id="g-heywood" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Heywood", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Heywood", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Heywood")} d="m 53.581577,153.45 2.344738,27.96316 5.036843,9.55263 7.46842,1.73684 30.568421,-2.2579 22.926311,-34.21579 -7.46842,-6.07894 -1.0421,-4.86316 -2.60526,-4.3421 -4.86316,6.25263 -4.16842,1.21579 0.69473,1.73684 -1.21579,7.98947 -3.821049,2.95263 -5.036841,0.52105 -4.863158,-2.95263 -3.3,-5.21052 -0.694738,-0.86842 z" id="path-heywood-main" />
          <path style={getPathStyle("Heywood")} d="M 121.95359,156.21849 99.601572,190.11496 68.16137,192.57122" id="path-heywood-details1" />
          <path style={getPathStyle("Heywood")} d="m 76.267047,152.65691 1.965013,39.05462" id="path-heywood-details2" />
          <path style={getPathStyle("Heywood")} d="m 106.84755,176.97394 c 0,-0.8597 -4.42127,-10.07069 -4.42127,-10.07069 l -1.22814,-8.59693 -3.930021,2.94752 -5.64941,0.24563 -4.42128,-2.94752 -3.193145,-5.64942" id="path-heywood-details3" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="101.61422" y="82.26355" id="text-heywood-glen" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="101.61422" y="82.26355" id="tspan-heywood-glen1">Glen</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="108.25951" y="-6.167387" id="text-heywood-wellsprings" transform="rotate(48.943074,-108.11247,34.83372)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="108.25951" y="-6.167387" id="tspan-heywood-wellsprings1">Wellsprings</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="119.94549" y="62.122173" id="text-heywood-vistadelrey" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="119.94549" y="62.122173" id="tspan-heywood-vistadelrey1">Vista</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="119.94549" y="67.413834" id="tspan-heywood-vistadelrey2">Del</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Heywood"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="119.94549" y="72.705498" id="tspan-heywood-vistadelrey3">Rey</tspan>
          </text>
        </g>

        {/* Santo Domingo */}
        <g 
          id="g-santodomingo" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Santo Domingo", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Santo Domingo", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Santo Domingo")} d="m 98.739472,191.05263 23.273688,-34.91053 4.28495,2.99321 1.32024,2.24134 6.90825,4.85113 1.22813,-1.62728 15.85827,10.10139 4.48268,1.47376 18.91325,-4.78972 4.78971,4.91254 1.10533,4.6669 -6.50911,38.809 -17.80793,21.3081 -8.10567,-2.45626 -3.56159,-6.50911 -12.15851,0.73688 -13.07962,-8.41271 -15.65869,-14.36915 z" id="path-santodomingo-main" />
          <path style={getPathStyle("Santo Domingo")} d="M 117.45395,222.9671 103.99342,209.85395 98.696051,190.74868" id="path-santodomingo-details1" />
          <path style={getPathStyle("Santo Domingo")} d="m 118.392,224.87112 11.0532,-6.87755 -9.57944,-6.14066 6.38629,-3.93002 3.19315,-6.63192 3.6844,2.45627 18.66762,-27.75581" id="path-santodomingo-details2" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Santo Domingo"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="168.29683" y="109.64929" id="text-santodomingo-rancho" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Santo Domingo"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="168.29683" y="109.64929" id="tspan-santodomingo-rancho1">Rancho</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Santo Domingo"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="168.29683" y="114.94096" id="tspan-santodomingo-rancho2">Coronado</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Santo Domingo"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="135.16351" y="93.511185" id="text-santodomingo-arroyo" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Santo Domingo"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="135.16351" y="93.511185" id="tspan-santodomingo-arroyo1">Arroyo</tspan>
          </text>
        </g>

        {/* Pacifica */}
        <g 
          id="g-pacifica" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Pacifica", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Pacifica", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={{...getPathStyle("Pacifica"), fillOpacity: findDistrictByLabel("Pacifica", districtsData) && (hoveredDistrictId === generateAnchorId(findDistrictByLabel("Pacifica", districtsData)!.name) || activeDistrictId === generateAnchorId(findDistrictByLabel("Pacifica", districtsData)!.name)) ? (activeDistrictId === generateAnchorId(findDistrictByLabel("Pacifica", districtsData)!.name) ? 0.5: 0.3) : 1 }} d="m 64.610527,257.13947 3.994735,-13.2 12.33158,-13.2 5.557893,-8.33684 3.158961,-0.26411 4.175652,-4.72831 1.719384,1.41235 8.228488,-9.70224 -5.03534,-18.54481 -30.089255,2.11853 2.824704,7.98286 -16.395572,14.92182 -9.272402,23.94859 z" id="path-pacifica-main" />
          <path style={getPathStyle("Pacifica")} d="m 71.600144,200.49268 4.544091,2.08783 -6.263478,12.28133 10.80757,16.08854 5.895036,-8.71975 3.193145,-0.12281 4.05284,-4.78972 1.596572,1.47376 7.3688,-8.59693" id="path-pacifica-details1" />
          <path style={getPathStyle("Pacifica")} d="M 80.565513,231.38022 68.284184,244.1528 65.091039,257.0482" id="path-pacifica-details2" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Pacifica"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="99.220512" y="115.92914" id="text-pacifica-coastview" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Pacifica"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="99.220512" y="115.92914" id="tspan-pacifica-coastview1">Coast View</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Pacifica"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="74.900238" y="137.22429" id="text-pacifica-westwind" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Pacifica"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="74.900238" y="137.22429" id="tspan-pacifica-westwind1">West Wind</tspan>
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Pacifica"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="74.900238" y="142.51595" id="tspan-pacifica-westwind2">State</tspan>
          </text>
        </g>
        
        {/* Dogtown */}
        <g 
          id="g-dogtown" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Dogtown", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Dogtown", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Dogtown")} d="m 103.49127,209.45613 -8.06535,9.33573 -1.350946,-1.22813 -4.237059,4.48268 -3.131738,0.33774 -6.079257,8.68904 -12.27388,13.06163 -3.980709,12.79782 1.03101,0.93747 40.617409,-17.36265 11.82078,-17.56229 z" id="path-dogtown-main" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Dogtown"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="105.94073" y="141.01593" id="text-dogtown-label" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Dogtown"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="105.94073" y="141.01593" id="tspan-dogtown-label1">Dogtown</tspan>
          </text>
        </g>

        {/* Badlands */}
        <g 
          id="g-badlands" 
          style={{ display: 'inline' }}
          onClick={() => { const d = findDistrictByLabel("Badlands", districtsData); if (d) onDistrictSelect(generateAnchorId(d.name)); }}
          onMouseEnter={() => { const d = findDistrictByLabel("Badlands", districtsData); if (d) onDistrictHover(generateAnchorId(d.name)); }}
          onMouseLeave={() => onDistrictHover(null)}
        >
          <path style={getPathStyle("Badlands")} d="m 46.05498,239.85434 -10.807567,4.42128 -7.123171,-0.24563 -1.719387,5.89504 -5.403784,2.21064 -0.982506,2.94752 -3.930025,1.71938 -14.9493765,2.63677 -0.02916,36.43552 207.7570065,-0.01 0.008,-294.728837 -207.7540184,-2e-7 0.013544,23.7876612 2.6868375,3.299999 7.1210519,0.347369 10.768421,5.557896 10.073684,4.689472 7.46842,6.252633 9.552633,0.521052 12.678947,-3.647368 10.76842,-1.910528 8.163158,2.257896 17.021053,-10.247368 24.489469,1.21579 8.68421,5.557893 0.69474,9.552633 13.72105,32.478945 24.83685,30.742102 9.9,3.99474 -1.56316,20.32105 -15.97895,10.76842 11.81053,15.28421 0.52105,9.55264 5.21053,5.21052 1.21579,4.51579 -6.6,38.55789 -17.88948,21.18947 -7.81579,-2.43158 -3.64737,-6.25263 -12.33157,0.60789 -14.41579,-8.94473 -12.50527,16.84737 -40.98947,16.32631 z" id="path-badlands-main" />
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Badlands"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="122.74461" y="178.74088" id="text-badlands-label1" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Badlands"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="122.74461" y="178.74088" id="tspan-badlands-label1-1">Terras Baldias</tspan>
          </text>
          <text xmlSpace="preserve" style={{ fontSize: '4.23333px', textAlign: 'start', writingMode: 'lr-tb', direction: 'ltr', textAnchor: 'start', fill: districtOriginalStrokes["Badlands"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="176.64793" y="-57.45713" id="text-badlands-label2" transform="translate(-10.836652,93.477644)">
            <tspan style={{ fontSize: '4.23333px', textAlign: 'center', textAnchor: 'middle', fill: districtOriginalStrokes["Badlands"], fillOpacity: 1, stroke: 'none', strokeWidth: '0.3px' }} x="176.64793" y="-57.45713" id="tspan-badlands-label2-1">Terras Baldias</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

NightCityMapSVG.displayName = "NightCityMapSVG";
