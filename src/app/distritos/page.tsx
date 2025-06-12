
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Map, Users, Building as BuildingIcon } from "lucide-react"; // Renamed to avoid conflict
import { districts, type District } from "@/lib/content/districts";
import { Badge } from "@/components/ui/badge";

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') // Remove colons
    .replace(/\(/g, '') // Remove opening parenthesis
    .replace(/\)/g, '') // Remove closing parenthesis
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove other non-alphanumeric characters except hyphens
};

export default function DistritosPage() {
  const pageTitle = "Os Distritos de Night City";
  const mainIntro = "Night City é uma metrópole vasta e complexa, dividida em múltiplos distritos, cada um com sua própria identidade, cultura, perigos e oportunidades. Explore as diferentes faces da cidade, desde os arranha-céus corporativos do City Center até as favelas perigosas de Pacifica e as indústrias poluídas de Santo Domingo.";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Map className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <ScrollArea className="w-full h-[calc(100vh-100px)]">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card 
              className="shadow-xl border-foreground rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-102"
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

            {districts.map((district: District, index: number) => (
              <Card 
                key={index} 
                id={generateAnchorId(district.name)}
                className="shadow-lg rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
                style={{ 
                  borderColor: district.borderColor,
                  boxShadow: `0 0 10px 2px ${district.borderColor}` 
                }}
              >
                <CardHeader 
                  className="p-6"
                  style={{ background: district.gradient }}
                >
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
                            <BuildingIcon className="h-4 w-4 mr-2" style={{ color: district.borderColor }} />
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
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

    