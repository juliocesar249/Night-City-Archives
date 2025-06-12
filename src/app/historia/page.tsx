
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Users, Building, ArrowRight } from "lucide-react";

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') // Remove colons
    .replace(/\(/g, '') // Remove opening parenthesis
    .replace(/\)/g, '') // Remove closing parenthesis
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove other non-alphanumeric characters except hyphens
};

export default function HistoriaPage() {
  const pageTitle = "A História de Night City";
  const mainIntro = "Night City é a joia mais suja e brilhante da Costa Oeste dos Estados Unidos. Ela é a materialização do sonho de um cara visionário (ou maluco, dependendo do ponto de vista) que queria criar uma cidade sem as amarras do governo e da burocracia. O resultado? Um paraíso distópico onde tudo é à base de dinheiro, poder e muita violência.";

  const sections = [
    {
      title: "Os Primeiros Passos: A Visão de Richard Night (1960s - 1990s)",
      content: [
        "A ideia de Night City começa a germinar na cabeça do urbanista Richard Night nos anos 1960, no auge do movimento hippie e das ideias de liberdade. Ele sonhava com uma cidade utópica, Coronado City, livre das amarras governamentais e da corrupção, onde a inovação e o progresso fossem a única lei. Acontece que a realidade é bem mais punk que um sonho hippie.",
        "O projeto de Coronado City, que seria construída na baía de Del Coronado, na Califórnia, ganhou força nos anos 1980. Com o apoio financeiro e político de megacorporações como a Arasaka e a Militech, as obras começaram. A Arasaka via ali uma oportunidade de expandir seu império global, e a Militech, bom, eles sempre lucram com o caos.",
        "A coisa começou a desandar quando Richard Night percebeu que as corporações estavam cagando e andando para o seu ideal de utopia. Elas queriam mesmo era um território sem lei para tocar seus negócios sujos. Em 1998, Richard foi assassinado em seu apartamento, um crime que até hoje é envolto em mistério, mas que todo mundo sabe que foi queima de arquivo. Em sua homenagem (ou pra disfarçar a culpa), a cidade foi rebatizada de Night City. Que ironia, né? A cidade dos sonhos virou um pesadelo batizado com o nome do seu idealizador morto."
      ]
    },
    {
      title: "A Era das Guerras Corporativas (2000s - 2040s)",
      content: [
        "Os anos 2000 e 2010 foram uma zona de guerra. As megacorporações, lideradas pela Arasaka e pela Militech, se digladiaram pelo controle de Night City e do mundo. Essas não eram guerras com exércitos nacionais, mas sim conflitos entre empresas com seus próprios exércitos particulares, tecnologia de ponta e um desrespeito total pela vida humana. É tipo uma guerra de empresas em grande escala, onde o lucro é mais importante que qualquer coisa.",
        "Night City, por ser um território \"neutro\" e estrategicamente localizado, virou o principal campo de batalha. Imagine o caos: bombardeios, tiroteios, sabotagens, tudo em nome do dinheiro e do poder. A população, claro, pagava o pato. A lei era o foda-se corporativo.",
        "A Quarta Guerra Corporativa (2070), foi o ápice dessa loucura. A Arasaka e a Militech se enfrentaram de forma brutal. Night City foi devastada, com boa parte da cidade transformada em ruínas. A guerra só terminou com a detonação de uma bomba nuclear na Arasaka Tower, em 2023, um evento que mudou Night City para sempre. A explosão criou a \"Cratera\", uma cicatriz no coração da cidade, e jogou Night City em um período de reconstrução."
      ]
    },
    {
      title: "A Reconstrução e o Domínio Corporativo (2040s - 2077)",
      content: [
        "Depois da guerra, Night City se reerguê das cinzas, mas de um jeito bem diferente. As megacorporações continuaram no poder, mas agora de forma mais \"sofisticada\". Em vez de bombas, elas usavam o poder econômico e a influência política para controlar a cidade. A reconstrução foi um trabalho árduo, e corporações como a Trauma Team International, uma espécie de paramédicos de elite, ganharam destaque por salvar vidas (ou pelo menos tentar) em meio ao caos.",
        "A cidade foi dividida em diversos distritos, cada um com sua própria vibe e seus próprios problemas, como Watson, Heywood, Westbrook, Santo Domingo, Pacifica, o City Center e Dogtown, onde o poder real reside."
      ]
    },
    {
      title: "As Megacorporações: Os Verdadeiros Donos de Night City",
      content: [
        "Em Night City, o governo é uma piada. Quem manda de verdade são as megacorporações. Elas controlam tudo: a economia, a tecnologia, a mídia, a segurança e até mesmo a vida das pessoas. É como se fossem países dentro de um país, só que sem nenhuma responsabilidade social. As gigantes como Arasaka, Militech, Kang Tao, Zetatech, Biocorp e a Trauma Team International ditam as regras."
      ],
      button: {
        text: "Conheça as Corporações",
        href: "/corporacoes",
        icon: <Building className="mr-2 h-4 w-4" />
      }
    },
    {
      title: "As Gangues: O Submundo de Night City",
      content: [
        "Com tanta opressão corporativa, a criminalidade explode. As gangues são a resposta da população à falta de oportunidades e à violência das megacorporações. Elas controlam territórios, traficam drogas, armas e cibernéticos ilegais. Cada gangue tem sua própria ideologia, estilo e especialização."
      ],
      button: {
        text: "Explore as Gangues",
        href: "/gangues",
        icon: <Users className="mr-2 h-4 w-4" />
      }
    },
    {
      title: "Night City em 2077: O Estado Atual",
      content: [
        "Em 2077, Night City é um poço de paradoxos. É uma cidade tecnologicamente avançada, com arranha-céus que tocam as nuvens, carros voadores e implantes cibernéticos que transformam o corpo humano em uma máquina. Mas, ao mesmo tempo, é um lugar onde a desigualdade social é gritante, a violência é constante e a vida humana não vale nada.",
        "O controle corporativo é absoluto. A Arasaka e a Militech ainda se bicam, mas agora de forma mais velada. As gangues continuam sua guerra por território e poder. A polícia, a NCPD, é mais uma força de controle corporativo do que de proteção ao cidadão.",
        "Night City é um lugar onde a \"liberdade\" é apenas uma ilusão. Você pode ser quem quiser, ter o corpo que quiser, mas no final do dia, você é só mais uma engrenagem na máquina corporativa, lutando para sobreviver em um mundo que te esmaga.",
        "É tipo viver em um jogo de videogame, só que sem um botão de \"reset\". E é nesse cenário que o V, o protagonista do jogo, entra, tentando fazer a diferença ou apenas sobreviver."
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Home className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">{pageTitle}</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <ScrollArea className="w-full h-[calc(100vh-100px)]"> 
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <Card 
              className="shadow-xl border-foreground rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-102"
              style={{ borderColor: 'hsl(var(--foreground))' }}
            >
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Night City: Uma Cidade de Sonhos e Pesadelos</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <Card 
                key={index} 
                id={generateAnchorId(section.title)}
                className="shadow-lg border-primary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
                style={{ 
                  borderColor: 'hsl(var(--primary))', 
                  boxShadow: `0 0 10px 2px hsl(var(--primary))` 
                }}
              >
                <CardHeader className="bg-black p-6">
                  <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.button && (
                    <div className="flex justify-start mt-4">
                      <Button asChild variant="outline" className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                        <Link href={section.button.href}>
                          {section.button.icon}
                          {section.button.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

    