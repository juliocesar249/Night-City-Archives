
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
    districtInkscapeLabel: string,
    pathOriginalStroke: string,
  ): React.CSSProperties => {
    const district = findDistrictByLabel(districtInkscapeLabel, districtsData);
    const currentDistrictId = district ? generateAnchorId(district.name) : null;

    const isHovered = hoveredDistrictId === currentDistrictId;
    const isActive = activeDistrictId === currentDistrictId;

    let fill = 'none';
    let fillOpacity = 0;
    let stroke = pathOriginalStroke; // Default to the path's original stroke
    let strokeWidth = "2.265px"; // Default from SVG
    let strokeOpacity = 1;

    if (isActive) {
      fill = `hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.5)`;
      fillOpacity = 1;
      stroke = `hsl(var(--primary))`;
      strokeWidth = '3.3px';
    } else if (isHovered) {
      // Use district's thematic color for hover
      const thematicColor = district?.borderColor || pathOriginalStroke; // Fallback to path's own stroke
      // Convert hex to HSL-like for hsla, or use a simpler approach if colors are always hex
      // For simplicity, if borderColor is hex, we might need a utility or just use it directly with fixed opacity
      // Assuming district.borderColor is a valid CSS color string
      fill = thematicColor; 
      fillOpacity = 0.3;
      stroke = thematicColor;
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

  const getGroupProps = (inkscapeLabel: string) => {
    const district = findDistrictByLabel(inkscapeLabel, districtsData);
    const districtId = district ? generateAnchorId(district.name) : null;
    if (!districtId) return {};
    return {
      onClick: () => onDistrictSelect(districtId),
      onMouseEnter: () => onDistrictHover(districtId),
      onMouseLeave: () => onDistrictHover(null),
    };
  };

  const baseOutlineStyle: React.CSSProperties = {
    display: 'inline',
    fill: 'hsl(var(--muted) / 0.05)', // Very subtle background for the map area
    stroke: 'hsl(var(--border))', // Use theme border color
    strokeWidth: '1px', // Thinner than district lines
    strokeDasharray: 'none',
    strokeOpacity: 0.6,
  };
  
  // Style for text elements (keep original colors from SVG)
  const getTextStyle = (originalFill: string): React.CSSProperties => ({
    fontSize: '4.23333px',
    textAlign: 'start', // or 'middle' if specified in SVG
    writingMode: 'lr-tb',
    direction: 'ltr',
    textAnchor: 'middle', // Defaulting to middle, adjust if SVG has start/end
    fill: originalFill,
    fillOpacity: 1,
    stroke: 'none',
    strokeWidth: '0.3px', // From SVG
    pointerEvents: 'none', // Text should not capture mouse events for interactivity
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
        
        <g id="g-watson" {...getGroupProps("Watson")}>
          <path style={getPathStyle("Watson", districtOriginalStrokes["Watson"])} d="M 63.177631,106.85921 35.124599,94.811854 38.194929,63.985719 62.51196,48.142807 l 11.790074,-1.47376 23.088899,-14.860408 24.439847,1.228133 8.59692,5.772226 0.8597,9.210995 10.93038,25.667975 -4.6669,3.6844 -3.43878,6.140664 0.24563,5.64941 -3.43877,3.684399 0.24562,1.228133 -12.28132,4.175651 -7.5951,6.394115 0.0868,8.98815 -2.62698,2.82237 -0.39079,6.25263 -2.25789,3.99474 -9.161842,1.0204 -23.838156,-0.0868 z" id="path19-watson" />
          <path style={getPathStyle("Watson", districtOriginalStrokes["Watson"])} d="m 141.35809,73.749375 -3.93003,3.31596 -3.19314,6.263476 v 5.280972 l -3.43878,4.175651 0.36844,1.228133 -12.77258,4.666905 -7.24598,5.895038 0.24563,9.211 -2.70189,2.70189 -0.12282,6.26347 -2.33345,4.29847 -9.825063,0.61407 -22.229204,-0.49126" id="path2-watson" />
          <path style={getPathStyle("Watson", districtOriginalStrokes["Watson"])} d="m 118.53947,98.21842 -1.21579,-6.078947 -1.21579,-3.473683 1.04211,-5.210527 -5.21053,-4.515789 -5.03684,2.952631 -4.68947,-0.347369 -4.689478,3.126316 1.042107,4.689473 2.431581,2.952631 -1.215792,30.047364 7.815792,0.52106" id="path3-watson" />
          <path style={getPathStyle("Watson", districtOriginalStrokes["Watson"])} d="M 63.394737,106.03421 85.799998,91.965789 100.0421,92.313156" id="path4-watson" />
          <path style={getPathStyle("Watson", districtOriginalStrokes["Watson"])} d="m 59.573683,49.934211 7.121054,9.031579 -2.08421,4.689472 2.778945,3.821054 4.689475,-0.173685 13.547368,23.794735" id="path5-watson" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Watson"])} x="104.42743" y="58.357895" id="text27-watson-nid"><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="104.42743" y="58.357895">Distrito Industrial</tspan><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="104.42743" y="63.649559">do Norte</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Watson"])} x="57.451443" y="80.923958" id="text27-4-watson-arasaka"><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="57.451443" y="80.923958">Cais da </tspan><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="57.451443" y="86.215622">Arasaka</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Watson"])} x="83.534184" y="112.65337" id="text27-2-watson-littlechina"><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="83.534184" y="112.65337">Little China</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Watson"])} x="84.256913" y="112.33808" id="text27-8-watson-kabuki" transform="rotate(90.167697) translate(0 -100)"><tspan style={getTextStyle(districtOriginalStrokes["Watson"])} x="84.256913" y="112.33808">Kabuki</tspan></text>
        </g>

        <g id="g-westbrook" {...getGroupProps("Westbrook")}>
          <path style={getPathStyle("Westbrook", districtOriginalStrokes["Westbrook"])} d="m 141.81316,74.076316 -4.51579,3.647368 -2.95263,5.905262 v 4.689475 l -3.30001,4.515789 V 94.05 l -11.98421,4.16842 -7.6421,6.42632 0.17368,8.85789 -2.60526,3.12632 -0.52105,6.07894 -2.43158,4.16842 -3.99474,0.34737 11.28948,17.19474 1.0421,5.73158 12.15789,9.20526 1.04211,2.08421 6.94737,4.51579 1.21579,-1.38947 15.80526,10.07368 4.51579,1.56316 18.7579,-4.60263 -0.86842,-9.72632 -11.81053,-15.28421 16.15263,-10.76842 1.38947,-20.32105 -9.89999,-3.82105 -24.83685,-31.089476 z" id="path20-westbrook" />
          <path style={getPathStyle("Westbrook", districtOriginalStrokes["Westbrook"])} d="m 134.60336,89.162442 4.42128,14.737598 -2.45627,1.96501 -3.19315,7.12317 4.42128,0.49125 3.19315,10.80757 -1.96501,2.21064 2.45626,1.47376 -2.70189,-0.24563 v 9.08818 l 5.15816,6.14067 5.89503,3.43877 12.03571,0.73688" id="path6-westbrook" />
          <path style={getPathStyle("Westbrook", districtOriginalStrokes["Westbrook"])} d="m 102.18065,128.21707 11.29882,16.45698 0.98251,5.15815 11.79007,9.33381 1.22814,1.96502 6.87754,4.91253 1.22813,-1.47376 15.96573,10.07069 4.42128,1.47375 18.42199,-4.29846" id="path7-westbrook" />
          <path style={getPathStyle("Westbrook", districtOriginalStrokes["Westbrook"])} d="m 138.53338,136.93681 -5.40378,2.21064 1.22813,1.71938 -4.91253,12.28133 -2.70189,5.40379" id="path8-westbrook" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="158.67909" y="122.42566" id="text27-0-westbrook-noak"><tspan style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="158.67909" y="122.42566">North Oak</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="123.60891" y="126.83202" id="text27-9-westbrook-japantown"><tspan style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="123.60891" y="126.83202">Japantown</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="150.47295" y="158.42465" id="text27-93-westbrook-charter"><tspan style={getTextStyle(districtOriginalStrokes["Westbrook"])} x="150.47295" y="158.42465">Charter Hill</tspan></text>
        </g>

        <g id="g-citycenter" {...getGroupProps("City Center")}>
          <path style={getPathStyle("City Center", districtOriginalStrokes["City Center"])} d="m 53.546591,128.40129 6.877542,5.28097 13.141024,-5.64941 28.861123,-0.8597 7.98286,13.50946 -4.42128,6.87755 -4.6669,0.85969 1.10532,1.96501 -0.8597,6.81614 -1.10532,2.08783 -3.193141,2.21064 -5.28097,-0.24563 -4.666906,-2.57908 -3.807211,-6.26348 -29.966441,0.85969 -0.491254,-6.38629 -8.965369,-9.21099 z" id="path21-citycenter" />
          <path style={getPathStyle("City Center", districtOriginalStrokes["City Center"])} d="m 93.215282,128.46269 0.245625,8.10568 -5.158157,0.24562 v 5.40379 l -2.210639,3.93002 -4.175652,-1.71938 -1.228132,2.70189 2.701891,1.47376 0.245626,3.6844 -29.475187,0.9825" id="path10-citycenter" />
          <path style={getPathStyle("City Center", districtOriginalStrokes["City Center"])} d="m 110.28633,140.62121 -4.42128,6.87754 -4.66691,0.98251 1.47376,1.96501 -1.22813,6.87754" id="path13-citycenter" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["City Center"])} x="68.623245" y="141.82172" id="text27-84-citycenter-downtown"><tspan style={getTextStyle(districtOriginalStrokes["City Center"])} x="68.623245" y="141.82172">Downtown</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["City Center"])} x="105.14274" y="143.10013" id="text27-29-citycenter-corpoplaza" ><tspan style={getTextStyle(districtOriginalStrokes["City Center"])} x="105.14274" y="143.10013">Corpo</tspan><tspan style={getTextStyle(districtOriginalStrokes["City Center"])} x="105.14274" y="148.39179">Plaza</tspan></text>
        </g>

        <g id="g-heywood" {...getGroupProps("Heywood")}>
          <path style={getPathStyle("Heywood", districtOriginalStrokes["Heywood"])} d="m 53.581577,153.45 2.344738,27.96316 5.036843,9.55263 7.46842,1.73684 30.568421,-2.2579 22.926311,-34.21579 -7.46842,-6.07894 -1.0421,-4.86316 -2.60526,-4.3421 -4.86316,6.25263 -4.16842,1.21579 0.69473,1.73684 -1.21579,7.98947 -3.821049,2.95263 -5.036841,0.52105 -4.863158,-2.95263 -3.3,-5.21052 -0.694738,-0.86842 z" id="path22-heywood" />
          <path style={getPathStyle("Heywood", districtOriginalStrokes["Heywood"])} d="M 121.95359,156.21849 99.601572,190.11496 68.16137,192.57122" id="path9-heywood" />
          <path style={getPathStyle("Heywood", districtOriginalStrokes["Heywood"])} d="m 76.267047,152.65691 1.965013,39.05462" id="path11-heywood" />
          <path style={getPathStyle("Heywood", districtOriginalStrokes["Heywood"])} d="m 106.84755,176.97394 c 0,-0.8597 -4.42127,-10.07069 -4.42127,-10.07069 l -1.22814,-8.59693 -3.930021,2.94752 -5.64941,0.24563 -4.42128,-2.94752 -3.193145,-5.64942" id="path12-heywood" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Heywood"])} x="90.777568" y="175.74119" id="text27-7-heywood-glen"><tspan style={getTextStyle(districtOriginalStrokes["Heywood"])} x="90.777568" y="175.74119">Glen</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Heywood"])} x="84.576812" y="169.37136" id="text27-09-heywood-wellsprings"><tspan style={getTextStyle(districtOriginalStrokes["Heywood"])} x="84.576812" y="169.37136">Wellsprings</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Heywood"])} x="109.10884" y="155.59982" id="text27-01-heywood-vista"><tspan style={getTextStyle(districtOriginalStrokes["Heywood"])} x="109.10884" y="155.59982">Vista</tspan><tspan style={getTextStyle(districtOriginalStrokes["Heywood"])} x="109.10884" y="160.89148">Del</tspan><tspan style={getTextStyle(districtOriginalStrokes["Heywood"])} x="109.10884" y="166.18314">Rey</tspan></text>
        </g>

        <g id="g-santodomingo" {...getGroupProps("Santo Domingo")}>
          <path style={getPathStyle("Santo Domingo", districtOriginalStrokes["Santo Domingo"])} d="m 98.739472,191.05263 23.273688,-34.91053 4.28495,2.99321 1.32024,2.24134 6.90825,4.85113 1.22813,-1.62728 15.85827,10.10139 4.48268,1.47376 18.91325,-4.78972 4.78971,4.91254 1.10533,4.6669 -6.50911,38.809 -17.80793,21.3081 -8.10567,-2.45626 -3.56159,-6.50911 -12.15851,0.73688 -13.07962,-8.41271 -15.65869,-14.36915 z" id="path23-santodomingo" />
          <path style={getPathStyle("Santo Domingo", districtOriginalStrokes["Santo Domingo"])} d="M 117.45395,222.9671 103.99342,209.85395 98.696051,190.74868" id="path14-santodomingo" />
          <path style={getPathStyle("Santo Domingo", districtOriginalStrokes["Santo Domingo"])} d="m 118.392,224.87112 11.0532,-6.87755 -9.57944,-6.14066 6.38629,-3.93002 3.19315,-6.63192 3.6844,2.45627 18.66762,-27.75581" id="path15-santodomingo" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Santo Domingo"])} x="157.46018" y="203.12694" id="text27-77-santodomingo-rancho"><tspan style={getTextStyle(districtOriginalStrokes["Santo Domingo"])} x="157.46018" y="203.12694">Rancho</tspan><tspan style={getTextStyle(districtOriginalStrokes["Santo Domingo"])} x="157.46018" y="208.4186">Coronado</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Santo Domingo"])} x="124.32686" y="186.98882" id="text27-82-santodomingo-arroyo"><tspan style={getTextStyle(districtOriginalStrokes["Santo Domingo"])} x="124.32686" y="186.98882">Arroyo</tspan></text>
        </g>

        <g id="g-pacifica" {...getGroupProps("Pacifica")}>
          <path style={getPathStyle("Pacifica", districtOriginalStrokes["Pacifica"])} d="m 64.610527,257.13947 3.994735,-13.2 12.33158,-13.2 5.557893,-8.33684 3.158961,-0.26411 4.175652,-4.72831 1.719384,1.41235 8.228488,-9.70224 -5.03534,-18.54481 -30.089255,2.11853 2.824704,7.98286 -16.395572,14.92182 -9.272402,23.94859 z" id="path37-pacifica" />
          <path style={getPathStyle("Pacifica", districtOriginalStrokes["Pacifica"])} d="m 71.600144,200.49268 4.544091,2.08783 -6.263478,12.28133 10.80757,16.08854 5.895036,-8.71975 3.193145,-0.12281 4.05284,-4.78972 1.596572,1.47376 7.3688,-8.59693" id="path16-pacifica" />
          <path style={getPathStyle("Pacifica", districtOriginalStrokes["Pacifica"])} d="M 80.565513,231.38022 68.284184,244.1528 65.091039,257.0482" id="path17-pacifica" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Pacifica"])} x="88.38386" y="209.40678" id="text27-5-pacifica-coastview"><tspan style={getTextStyle(districtOriginalStrokes["Pacifica"])} x="88.38386" y="209.40678">Coast View</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Pacifica"])} x="64.063586" y="230.70193" id="text27-1-pacifica-westwind"><tspan style={getTextStyle(districtOriginalStrokes["Pacifica"])} x="64.063586" y="230.70193">West Wind</tspan><tspan style={getTextStyle(districtOriginalStrokes["Pacifica"])} x="64.063586" y="235.99359">State</tspan></text>
        </g>

        <g id="g-dogtown" {...getGroupProps("Dogtown")}>
          <path style={getPathStyle("Dogtown", districtOriginalStrokes["Dogtown"])} d="m 103.49127,209.45613 -8.06535,9.33573 -1.350946,-1.22813 -4.237059,4.48268 -3.131738,0.33774 -6.079257,8.68904 -12.27388,13.06163 -3.980709,12.79782 1.03101,0.93747 40.617409,-17.36265 11.82078,-17.56229 z" id="path27-dogtown" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Dogtown"])} x="95.104078" y="234.49357" id="text27-51-dogtown-label"><tspan style={getTextStyle(districtOriginalStrokes["Dogtown"])} x="95.104078" y="234.49357">Dogtown</tspan></text>
        </g>

        <g id="g-badlands" {...getGroupProps("Badlands")}>
           {/* The main path for Badlands is the general outline minus the city. 
               We'll use the original general outline path for Badlands interaction,
               but ensure its fill is only applied when Badlands is active/hovered.
               The visual stroke of Badlands will come from path26-badlands.
               We need a clickable area for Badlands that doesn't overlap inner districts.
               This is tricky. The best way is to make path26-badlands itself interactive for fill,
               and rely on the space between city and edge of map.
               Alternatively, use the path18-geral-outline and ensure pointer-events:none on inner district groups.
               Let's make path26-badlands the interactive fill element for Badlands.
            */}
          <path style={getPathStyle("Badlands", districtOriginalStrokes["Badlands"])} d="m 46.05498,239.85434 -10.807567,4.42128 -7.123171,-0.24563 -1.719387,5.89504 -5.403784,2.21064 -0.982506,2.94752 -3.930025,1.71938 -14.9493765,2.63677 -0.02916,36.43552 207.7570065,-0.01 0.008,-294.728837 -207.7540184,-2e-7 0.013544,23.7876612 2.6868375,3.299999 7.1210519,0.347369 10.768421,5.557896 10.073684,4.689472 7.46842,6.252633 9.552633,0.521052 12.678947,-3.647368 10.76842,-1.910528 8.163158,2.257896 17.021053,-10.247368 24.489469,1.21579 8.68421,5.557893 0.69474,9.552633 13.72105,32.478945 24.83685,30.742102 9.9,3.99474 -1.56316,20.32105 -15.97895,10.76842 11.81053,15.28421 0.52105,9.55264 5.21053,5.21052 1.21579,4.51579 -6.6,38.5579 -17.88948,21.18947 -7.81579,-2.43158 -3.64737,-6.25263 -12.33157,0.60789 -14.41579,-8.94473 -12.50527,16.84737 -40.98947,16.32631 z" id="path26-badlands" />
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Badlands"])} x="111.90802" y="272.21828" id="text27-98-badlands1"><tspan style={getTextStyle(districtOriginalStrokes["Badlands"])} x="111.90802" y="272.21828">Terras Baldias</tspan></text>
          <text xmlSpace="preserve" style={getTextStyle(districtOriginalStrokes["Badlands"])} x="165.81128" y="36.01881" id="text27-98-8-badlands2"><tspan style={getTextStyle(districtOriginalStrokes["Badlands"])} x="165.81128" y="36.01881">Terras Baldias</tspan></text>
        </g>
      </g>
    </svg>
  );
}

NightCityMapSVG.displayName = "NightCityMapSVG";
