
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IdCard, Quote, UserCircle, Zap, AlertTriangle, Network, ShieldQuestion } from "lucide-react";
import { figures, type Figure } from "@/lib/content/figures";
// import Image from 'next/image'; // Image component no longer needed
import { Badge } from "@/components/ui/badge";

const generateAnchorId = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
};

export default function FigurasPage() {
  const pageTitle = "Figuras Notáveis de Night City";
  const mainIntro = "Por trás das corporações e gangues, existem indivíduos cujas ações e legados moldaram Night City. Conheça as lendas, os infames e os jogadores chave no grande jogo da metrópole.";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <IdCard className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <ScrollArea className="w-full h-[calc(100vh-100px)]">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card className="shadow-xl border-foreground rounded-lg overflow-hidden mb-8 transition-all duration-300 ease-in-out hover:scale-102">
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Dossiês de Night City</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {figures.map((figure: Figure) => (
              <Card 
                key={figure.id} 
                id={generateAnchorId(figure.name)}
                className="shadow-lg rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
                style={{ 
                  borderColor: figure.accentColor, 
                  boxShadow: `0 0 10px 2px ${figure.accentColor}` 
                }}
              >
                <CardHeader 
                  className="p-6 flex flex-row items-center gap-4"
                  style={{ backgroundColor: figure.headerBackgroundColor || 'hsl(var(--card-foreground))' }}
                >
                  <UserCircle className="h-8 w-8" style={{ color: figure.accentColor }}/>
                  <CardTitle 
                    className={`font-headline text-2xl sm:text-3xl ${figure.titleColorClass || 'text-primary'}`}
                  >
                    {figure.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start mb-4"> {/* Badges moved here, aligned start */}
                        <Badge variant="outline" className="text-sm mb-2" style={{borderColor: figure.accentColor, color: figure.accentColor}}>{figure.affiliation}</Badge>
                        {figure.status && (
                          <Badge variant={figure.status.toLowerCase().includes("falecido") || figure.status.toLowerCase().includes("deceased") ? "destructive" : "secondary"} className="text-sm">
                            {figure.status.toLowerCase().includes("falecido") || figure.status.toLowerCase().includes("deceased") ? <AlertTriangle className="mr-1 h-3 w-3" /> : 
                             figure.status.toLowerCase().includes("ativo") || figure.status.toLowerCase().includes("active") ? <Zap className="mr-1 h-3 w-3" /> : 
                             figure.status.toLowerCase().includes("digitalizada") || figure.status.toLowerCase().includes("digitized") ? <Network className="mr-1 h-3 w-3" /> :
                             <ShieldQuestion className="mr-1 h-3 w-3" />
                            }
                            Status: {figure.status}
                          </Badge>
                        )}
                    </div>
                    {figure.bio.map((paragraph, pIndex) => (
                       <p key={pIndex} className="text-foreground text-base leading-relaxed">
                         {paragraph}
                       </p>
                    ))}
                    {figure.iconicQuote && (
                      <blockquote className="mt-4 p-3 border-l-4 rounded-md" style={{ borderColor: figure.accentColor, backgroundColor: `${figure.accentColor}1A` }}>
                        <Quote className="inline h-5 w-5 mr-2" style={{ color: figure.accentColor }} />
                        <p className="text-foreground italic text-md">"{figure.iconicQuote}"</p>
                      </blockquote>
                    )}
                    {figure.sections && figure.sections.map((section, sIndex) => (
                      <div key={sIndex} className="mt-4">
                        <h3 
                          className="font-headline text-lg mb-1"
                          style={{ color: figure.accentColor }}
                        >
                          {section.title}
                        </h3>
                        {section.content.map((paragraph, pIndex) => (
                           <p key={pIndex} className="text-foreground text-sm leading-relaxed mb-1">
                             {paragraph}
                           </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
