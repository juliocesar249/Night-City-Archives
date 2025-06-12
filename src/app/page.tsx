
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Map, Users, Building, Database, IdCard } from "lucide-react"; // Added IdCard
import Link from "next/link";

export default function Home() {
  const introText = "Night City é a joia mais suja e brilhante da Costa Oeste dos Estados Unidos. Ela é a materialização do sonho de um cara visionário (ou maluco, dependendo do ponto de vista) que queria criar uma cidade sem as amarras do governo e da burocracia. O resultado? Um paraíso distópico onde tudo é à base de dinheiro, poder e muita violência.";

  const districtIntro = "Night City é dividida em diversos distritos, cada um com sua própria vibe e seus próprios problemas, como Watson, Heywood, Westbrook, Santo Domingo, Pacifica, o City Center e Dogtown, onde o poder real reside.";
  const gangIntro = "Com tanta opressão corporativa, a criminalidade explode. As gangues são a resposta da população à falta de oportunidades e à violência das megacorporações. Elas controlam territórios, traficam drogas, armas e cibernéticos ilegais.";
  const corpIntro = "Em Night City, o governo é uma piada. Quem manda de verdade são as megacorporações. Elas controlam tudo: a economia, a tecnologia, a mídia, a segurança e até mesmo a vida das pessoas.";
  const figuresIntro = "Por trás dos neons e do aço, figuras lendárias e infames moldaram o destino de Night City. Conheça os rostos que definem a luta pelo poder e sobrevivência.";
  const terminalIntro = "Acesse fragmentos de lore perdidos, teste seus conhecimentos sobre os becos escuros ou intercepte as últimas notícias caóticas da N54. O Terminal de Inteligência é sua conexão direta com os segredos da cidade.";


  const sections = [
    {
      title: "Os Distritos de Night City",
      description: districtIntro,
      href: "/distritos",
      icon: <Map className="mr-2 h-5 w-5 text-primary" />,
    },
    {
      title: "As Gangues de Night City",
      description: gangIntro,
      href: "/gangues",
      icon: <Users className="mr-2 h-5 w-5 text-primary" />,
    },
    {
      title: "As Megacorporações",
      description: corpIntro,
      href: "/corporacoes",
      icon: <Building className="mr-2 h-5 w-5 text-primary" />,
    },
    { // New Section for Figuras Notáveis
      title: "Figuras Notáveis",
      description: figuresIntro,
      href: "/figuras",
      icon: <IdCard className="mr-2 h-5 w-5 text-primary" />,
    },
    {
      title: "Terminal de Inteligência",
      description: terminalIntro,
      href: "/datashard", 
      icon: <Database className="mr-2 h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold text-primary">Introdução</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <Card className="w-full max-w-3xl shadow-xl border-accent rounded-lg overflow-hidden mb-8 transition-all duration-300 ease-in-out hover:scale-102">
          <CardHeader className="bg-card-foreground p-6">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Bem-vindo(a) a Night City</CardTitle>
            <CardDescription className="text-center text-muted-foreground pt-2 text-md sm:text-lg">
              Uma introdução à metrópole dos sonhos e pesadelos.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-foreground text-center text-base sm:text-lg leading-relaxed mb-6">
              {introText}
            </p>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Link href="/historia">
                  Explore a História Completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-3xl space-y-8">
          {sections.map((section) => (
            <Card 
              key={section.title} 
              className="shadow-lg border-secondary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
            >
              <CardHeader className="p-6">
                <div className="flex items-center justify-center mb-2">
                  {section.icon}
                  <CardTitle className="font-headline text-2xl sm:text-3xl text-center text-primary">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-sm sm:text-base leading-relaxed mb-6">
                  {section.description}
                </p>
                <div className="flex justify-center">
                  <Button asChild variant="outline" className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                    <Link href={section.href}>
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
