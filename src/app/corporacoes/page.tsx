
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building } from "lucide-react";
import { corporations, type Corporation } from "@/lib/content/corporations";

export default function CorporacoesPage() {
  const pageTitle = "As Megacorporações de Night City";
  const mainIntro = "Em Night City, o governo é uma piada. Quem manda de verdade são as megacorporações. Elas controlam tudo: a economia, a tecnologia, a mídia, a segurança e até mesmo a vida das pessoas. São como países dentro de um país, mas sem nenhuma responsabilidade social. Conheça os verdadeiros donos de Night City.";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Building className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <ScrollArea className="w-full h-[calc(100vh-100px)]">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card className="shadow-xl border-2 border-foreground rounded-lg overflow-hidden mb-8">
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Os Verdadeiros Donos de Night City</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {corporations.map((corp: Corporation, index: number) => (
              <Card 
                key={index} 
                className="shadow-lg border-2 rounded-lg overflow-hidden"
                style={{ 
                  borderColor: corp.accentColor, 
                  boxShadow: `0 0 10px 2px ${corp.accentColor}` 
                }}
              >
                <CardHeader 
                  className="p-6"
                  style={{ backgroundColor: corp.headerBackgroundColor }}
                >
                  <CardTitle 
                    className="font-headline text-2xl sm:text-3xl"
                    style={{ color: corp.accentColor }}
                  >
                    {corp.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground text-base leading-relaxed italic">{corp.introduction}</p>
                  {corp.sections.map((section, sIndex) => (
                    <div key={sIndex} className="mt-4">
                      <h3 
                        className="font-headline text-xl mb-2"
                        style={{ color: corp.accentColor }}
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
