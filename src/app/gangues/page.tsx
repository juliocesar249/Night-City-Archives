
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";
import { gangs, type Gang } from "@/lib/content/gangs";


export default function GanguesPage() {
  const pageTitle = "As Gangues de Night City";
  const mainIntro = "Com tanta opressão corporativa e desigualdade social, a criminalidade explode em Night City. As gangues são a resposta da população à falta de oportunidades e à violência das megacorporações. Elas controlam territórios, traficam drogas, armas e cibernéticos ilegais, e cada uma tem sua própria ideologia, estilo e especialização. Elas são a força viva do submundo, lutando por poder, sobrevivência e um pedaço do bolo nessa cidade implacável.";

  const defaultBorderColor = 'hsl(var(--secondary))';
  const defaultGlowColor = 'hsl(var(--accent))';
  const defaultGradient = 'linear-gradient(to right, hsl(var(--card-foreground)), hsl(var(--muted)))';
  const defaultTitleColorClass = 'text-primary';


  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Users className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <ScrollArea className="w-full h-[calc(100vh-100px)]">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card className="shadow-xl border-2 border-foreground rounded-lg overflow-hidden">
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">O Submundo em Ação</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {gangs.map((gang: Gang, index: number) => (
              <Card 
                key={index} 
                className="shadow-lg rounded-lg overflow-hidden border-2"
                style={{
                  borderColor: gang.borderColor || defaultBorderColor,
                  boxShadow: gang.glowColor ? `0 0 10px 2px ${gang.glowColor}` : `0 0 8px 1px ${defaultGlowColor}`,
                }}
              >
                <CardHeader 
                  className="p-6"
                  style={{ background: gang.gradient || defaultGradient }}
                >
                  <CardTitle className={`font-headline text-2xl sm:text-3xl ${gang.titleColorClass || defaultTitleColorClass}`}>
                    {gang.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground text-base leading-relaxed italic">{gang.introduction}</p>
                  {gang.sections.map((section, sIndex) => (
                    <div key={sIndex} className="mt-4">
                      <h3 
                        className="font-headline text-xl mb-2" 
                        style={{ color: gang.borderColor || defaultBorderColor }}
                      >
                        {section.title}
                      </h3>
                      {section.content.map((paragraph, pIndex) => (
                         <p key={pIndex} className="text-foreground text-base leading-relaxed mb-2">
                           {paragraph}
                         </p>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
