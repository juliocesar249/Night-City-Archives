
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Map as MapIconLucideIO, Users, Building as BuildingIconLucide, Anchor, Building2, Home, Factory, BarChartBig, Dog, MountainSnow } from "lucide-react";
import { districts, type District } from "@/lib/content/districts";
import { Badge } from "@/components/ui/badge";
import { NightCityInteractiveMap } from '@/components/map/NightCityInteractiveMap'; // Import the map component

const iconMap: Record<string, React.ElementType> = {
  Anchor, Building2, Home, Factory, BarChartBig, Dog, MountainSnow, MapIconLucideIO
};

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') 
    .replace(/\(/g, '') 
    .replace(/\)/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, ''); 
};

export default function DistritosPage() {
  const pageTitle = "Os Distritos de Night City";
  const mainIntro = "Night City é uma metrópole vasta e complexa, dividida em múltiplos distritos, cada um com sua própria identidade, cultura, perigos e oportunidades. Explore as diferentes faces da cidade, desde os arranha-céus corporativos do City Center até as favelas perigosas de Pacifica e as indústrias poluídas de Santo Domingo.";

  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);
  const [activeDistrictId, setActiveDistrictId] = useState<string | null>(null);
  const districtRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleDistrictSelection = (districtId: string) => {
    setActiveDistrictId(districtId);
    const ref = districtRefs.current[districtId];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Effect to potentially set an initial active district or handle deep links
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1); // Remove #
      if (hash && districts.some(d => generateAnchorId(d.name) === hash)) {
        setActiveDistrictId(hash);
      } else if (districts.length > 0) {
        // Optionally set the first district as active by default
        // setActiveDistrictId(generateAnchorId(districts[0].name));
      }
    }
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <MapIconLucideIO className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <Card 
            className="w-full max-w-4xl mx-auto shadow-xl border-foreground rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-102 mb-8"
        >
            <CardHeader className="bg-card-foreground p-6">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Explorando os Territórios de Night City</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
            <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                {mainIntro}
            </p>
            </CardContent>
        </Card>

        <NightCityInteractiveMap 
          districts={districts}
          hoveredDistrictId={hoveredDistrictId}
          activeDistrictId={activeDistrictId}
          onDistrictSelect={handleDistrictSelection}
          onDistrictHover={setHoveredDistrictId}
        />

        <ScrollArea className="w-full h-[calc(100vh-280px)] md:h-[calc(100vh-240px)] mt-4"> {/* Adjusted height */}
          <div className="w-full max-w-4xl mx-auto space-y-8">
            {districts.map((district: District) => {
              const DistrictIcon = district.iconName ? iconMap[district.iconName] : MapIconLucideIO;
              const districtId = generateAnchorId(district.name);
              return (
              <Card 
                key={district.name} 
                id={districtId} // This is the anchor ID for scrolling
                ref={el => districtRefs.current[districtId] = el}
                onMouseEnter={() => setHoveredDistrictId(districtId)}
                onMouseLeave={() => setHoveredDistrictId(null)}
                onClick={() => handleDistrictSelection(districtId)}
                className="shadow-lg rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl cursor-pointer"
                style={{ 
                  borderColor: activeDistrictId === districtId ? district.borderColor : (hoveredDistrictId === districtId ? district.borderColor : 'hsl(var(--border))'),
                  boxShadow: activeDistrictId === districtId ? `0 0 15px 3px ${district.borderColor}` : (hoveredDistrictId === districtId ? `0 0 10px 2px ${district.borderColor}` : 'none'),
                  transform: activeDistrictId === districtId || hoveredDistrictId === districtId ? 'scale(1.01)' : 'scale(1)',
                }}
              >
                <CardHeader 
                  className="p-6 flex flex-row items-center gap-3" 
                  style={{ background: district.gradient }}
                >
                  <DistrictIcon className="h-7 w-7" style={{ color: district.titleColorClass.includes('text-black') ? 'black': district.borderColor }} />
                  <CardTitle className={`font-headline text-2xl sm:text-3xl ${district.titleColorClass}`}>
                    {district.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {district.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {(district.dominantGangs && district.dominantGangs.length > 0) || (district.majorCorporations && district.majorCorporations.length > 0) ? (
                    <div className="mt-6 pt-4 border-t border-border">
                      <h4 className="font-headline text-lg mb-3 text-foreground">Facções Notáveis:</h4>
                      {district.dominantGangs && district.dominantGangs.length > 0 && (
                        <div className="mb-3">
                          <div className="flex items-center mb-1">
                            <Users className="h-4 w-4 mr-2" style={{ color: district.borderColor }} />
                            <span className="text-sm font-semibold" style={{ color: district.borderColor }}>Gangues Dominantes:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {district.dominantGangs.map(gang => (
                              <Badge key={gang} variant="secondary" className="border" style={{ borderColor: district.borderColor, color: district.borderColor }}>{gang}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {district.majorCorporations && district.majorCorporations.length > 0 && (
                         <div>
                           <div className="flex items-center mb-1">
                            <BuildingIconLucide className="h-4 w-4 mr-2" style={{ color: district.borderColor }} />
                            <span className="text-sm font-semibold" style={{ color: district.borderColor }}>Corporações Presentes:</span>
                           </div>
                           <div className="flex flex-wrap gap-2">
                            {district.majorCorporations.map(corp => (
                              <Badge key={corp} variant="outline" className="border" style={{ borderColor: district.borderColor, color: district.borderColor }}>{corp}</Badge>
                            ))}
                          </div>
                         </div>
                      )}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

