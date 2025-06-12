
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Map } from "lucide-react";

export default function DistritosPage() {
  const pageTitle = "Os Distritos de Night City";
  const mainIntro = "Night City é uma metrópole vasta e complexa, dividida em múltiplos distritos, cada um com sua própria identidade, cultura, perigos e oportunidades. Explore as diferentes faces da cidade, desde os arranha-céus corporativos do City Center até as favelas perigosas de Pacifica e as indústrias poluídas de Santo Domingo.";

  const districts = [
    {
      name: "Watson: O Berço e o Abandono",
      paragraphs: [
        "Watson é um dos distritos mais antigos de Night City, e sua história é um reflexo perfeito da evolução (ou involução) da cidade. Localizado ao norte do City Center, Watson era, em seus primeiros dias, o coração financeiro e comercial de Night City. Seus edifícios, muitos deles construídos no final do século XX e início do XXI, abrigavam bancos, escritórios corporativos e lojas de luxo. A vida aqui era vibrante, um verdadeiro símbolo do progresso e da riqueza da cidade.",
        "A glória de Watson, no entanto, começou a desmoronar com as Guerras Corporativas, especialmente a Quarta Guerra. Com os bombardeios e a instabilidade econômica, as megacorporações mais poderosas começaram a migrar para o City Center, buscando mais segurança e maior status. Watson foi progressivamente abandonado por seus antigos \"donos\" corporativos. A infraestrutura, antes impecável, começou a decair. Prédios foram desocupados, a manutenção parou, e a área se tornou um terreno fértil para a criminalidade.",
        "A explosão da bomba nuclear na Arasaka Tower em 2023, embora tenha afetado mais diretamente o City Center, também reverberou por Watson, causando mais destruição e acelerando seu declínio. Muitos negócios fecharam, e a população de menor poder aquisitivo começou a se concentrar ali, atraída pelos aluguéis mais baixos e pela menor presença da lei (e das corporações).",
        "Com o êxodo corporativo, Watson se tornou um refúgio para imigrantes e minorias, especialmente comunidades asiáticas, que trouxeram suas culturas e estabeleceram bairros vibrantes como Little China e Kabuki. Little China é um labirinto de ruas estreitas, mercados de rua e lojas de todos os tipos, pulsando com a vida de seus moradores. Kabuki, por sua vez, é conhecido por seus \"ripperdocs\" clandestinos, clínicas de modificação corporal e uma vida noturna agitada e perigosa.",
        "Essa descentralização do poder corporativo abriu espaço para o surgimento e o fortalecimento das gangues. Os Tyger Claws, uma gangue japonesa com forte influência e um estilo de vida que mescla tradições Yakuza com um fascínio por aprimoramentos cibernéticos e motocicletas de alta performance, se estabeleceram como a força dominante em Watson, especialmente em Kabuki e Little China. Eles controlam o tráfico de cibernéticos ilegais, drogas e a prostituição, operando seus negócios à vista de todos, mas com um código de honra distorcido.",
        "Outras gangues menores também disputam território em Watson, como alguns grupos de Maelstrom que se escondem nas áreas industriais abandonadas do Northside Industrial District (NID). O NID é uma paisagem de fábricas enferrujadas e armazéns vazios, um local perfeito para atividades criminosas e confrontos sangrentos. A NCPD (Night City Police Department) tem uma presença limitada em Watson, muitas vezes optando por patrulhar as áreas mais \"nobres\" e deixar as gangues se resolverem entre si nas zonas menos visíveis.",
        "Apesar de ser um distrito menos valorizado pelas grandes megacorporações, Watson ainda sente a influência delas, embora de forma mais indireta. Empresas de tecnologia menores e startups tentam se estabelecer na região, buscando inovar em um ambiente mais \"livre\". O governo de Night City, através de vereadores locais e figuras políticas menos expressivas, tenta manter uma fachada de controle, mas a realidade é que o poder de fato está nas mãos dos Tyger Claws e de quem mais tiver mais edinhos (dinheiro) para bancar a influência.",
        "Locais conhecidos em Watson, além de Little China e Kabuki, incluem o Arasaka Waterfront, que, apesar do nome, não é mais um ponto forte da Arasaka, mas um lembrete da antiga glória corporativa, e vários mercados de rua onde você pode encontrar de tudo, desde comida de rua deliciosa até tecnologia duvidosa e armas.",
        "Em 2077, Watson é um distrito de contrastes gritantes: a efervescência cultural de Little China e Kabuki convive com a decadência do NID e a constante ameaça da violência das gangues. É o lugar onde a maioria dos recém-chegados em Night City começa sua jornada, um campo de testes brutal para quem quer sobreviver na cidade dos sonhos e pesadelos."
      ]
    },
    {
      name: "Westbrook: O Luxo Deteriorado e a Ordem dos Tyger Claws",
      paragraphs: [
        "Westbrook é o distrito que mais se aproxima do ideal de Richard Night para uma utopia de luxo e entretenimento, mas com o tempero distópico e perigoso de Night City. É o playground dos ricos, das celebridades e dos executivos corporativos, mas também é um lugar onde a influência das megacorporações se mistura com o domínio implacável dos Tyger Claws. Sua história é a de uma área que ascendeu rapidamente ao topo, mas que por baixo da superfície polida, esconde uma rede complexa de controle, poder e decadência.",
        "Desde o planejamento original de Night City, Westbrook foi destinada a ser a área de alto padrão. Com investimentos massivos de corporações como a Arasaka e outras empresas de entretenimento e tecnologia, o distrito se desenvolveu rapidamente, com construções de luxo, condomínios exclusivos e centros de lazer de última geração. A ideia era criar um refúgio para a elite, longe do caos dos distritos mais pobres, onde o estilo de vida ostentoso fosse a regra.",
        "Westbrook é dividido em três subdistritos principais, cada um com sua própria nuance, mas todos refletindo a opulência geral do distrito: Japantown, North Oak, e Charter Hill.",
        "Japantown: O coração cultural e de entretenimento de Westbrook. É o epicentro da cultura japonesa em Night City, com arquitetura deslumbrante, clubes noturnos exclusivos (como o famoso Clouds, que oferece braindances personalizados), restaurantes de alta gastronomia e boutiques de luxo. É um lugar de excessos e ostentação, permanentemente iluminado por néons gigantes. Japantown é um símbolo da influência da Arasaka e das megacorporações japonesas na cidade, servindo como uma vitrine de sua riqueza e poder cultural.",
        "North Oak: A área mais exclusiva e isolada de Westbrook. Aqui estão as mansões gigantescas, os condomínios fechados e os bunkers de luxo das famílias mais ricas e poderosas de Night City. A segurança é privada e impenetrável, protegendo seus moradores de qualquer ameaça externa. É o verdadeiro lar dos CEOs e das celebridades, um oásis de tranquilidade (relativa) em meio ao caos da cidade.",
        "Charter Hill: Uma área que serve como ponte entre o glamour de Japantown e a exclusividade de North Oak. Possui muitos prédios corporativos de médio porte e apartamentos de alto padrão, além de centros comerciais e escritórios de empresas que atendem à elite de Westbrook. Embora mais acessível que North Oak, ainda mantém um alto padrão de vida e segurança.",
        "Apesar de ser um distrito de elite, Westbrook está sob o controle esmagador dos Tyger Claws. Diferente de outras gangues que operam nas sombras, os Tyger Claws em Westbrook (especialmente em Japantown) são uma força quase onipresente e abertamente dominante. Eles são uma gangue de origem japonesa, conhecida por seu código de honra distorcido (baseado nas tradições Yakuza), seu fascínio por aprimoramentos cibernéticos e suas motocicletas neon.",
        "Os Tyger Claws controlam grande parte do submundo do entretenimento de Westbrook: o tráfico de cibernéticos de luxo, a prostituição (incluindo o lucrativo mercado de braindances), extorsão de negócios locais e outros esquemas ilícitos. Sua presença é tão forte que a NCPD (Night City Police Department) muitas vezes faz vista grossa para suas operações, preferindo que a gangue mantenha uma certa \"ordem\" nas ruas, desde que isso não interfira nos interesses das megacorporações que têm presença no distrito. Essa \"paz podre\" é uma característica marcante de Westbrook.",
        "As figuras políticas de Westbrook são frequentemente ligadas às corporações ou são meros fantoches dos interesses corporativos. A influência da Arasaka é palpável, com muitos de seus executivos residindo em North Oak e mantendo conexões profundas com os negócios em Japantown.",
        "Os conflitos em Westbrook são menos sobre guerra de gangues territorial em grande escala e mais sobre disputas de poder e controle sobre mercados lucrativos. Facções menores tentam roubar clientes dos Tyger Claws ou sabotar seus negócios, resultando em assassinatos discretos e confrontos localizados.",
        "Apesar do glamour e da riqueza, Westbrook, assim como outras partes de Night City, não é imune à decadência. Há bolsões de pobreza e áreas menos cuidadas. A dependência de tecnologia e a busca incessante por aprimoramentos cibernéticos levam muitos a vícios e problemas de saúde mental, mesmo entre os mais ricos.",
        "Em 2077, Westbrook é um contraste chocante: o auge do luxo e da tecnologia convivendo com uma violência organizada e uma vigilância constante. É um lugar onde a superficialidade e a ostentação escondem a brutalidade de uma cidade onde o poder e o dinheiro ditam todas as regras."
      ]
    },
    {
      name: "City Center: O Coração de Neon do Poder Corporativo",
      paragraphs: [
        "O City Center é o cérebro, o coração e a carteira de Night City, tudo em um só lugar. É o distrito que grita \"poder e grana\" em cada arranha-céu que toca as nuvens. Se Night City é uma distopia cyberpunk, o City Center é a sua versão mais pura e brutal, onde as megacorporações exercem seu domínio absoluto.",
        "Desde o início do projeto de Richard Night, a área que se tornaria o City Center foi destinada a ser o centro de poder e negócios. Durante os anos 1980 e 1990, com o crescimento exponencial das megacorporações, o City Center se transformou rapidamente em uma selva de concreto e vidro. A Arasaka e a Militech estabeleceram suas sedes aqui, transformando o horizonte em uma vitrine de sua competição.",
        "A arquitetura do City Center é monumental. Torres de aço e vidro, fachadas holográficas e painéis de neon gigantescos são a norma. É um lugar onde a tecnologia de ponta é exibida em cada esquina.",
        "O City Center foi o principal palco da Quarta Guerra Corporativa (2070). Foi aqui que a rivalidade entre Arasaka e Militech atingiu seu ápice. Bombardeios, tiroteios e sabotagens eram parte do dia a dia. A imagem mais trágica dessa guerra é a detonação da bomba nuclear tática na Arasaka Tower em 2023, orquestrada por Johnny Silverhand e Rogue Amendiares.",
        "A explosão não só destruiu grande parte da Arasaka Tower, mas também criou a cicatriz conhecida como \"A Cratera\". Embora a Arasaka tenha reconstruído sua torre, o evento deixou uma marca indelével. A reconstrução foi um esforço colossal, financiado pelas próprias corporações.",
        "Em 2077, o City Center é o domínio inquestionável das megacorporações. A Arasaka, com sua torre reconstruída, continua sendo a força dominante. A Militech mantém uma forte presença. Outras gigantes como Kang Tao, Zetatech e Biocorp também têm presença significativa.",
        "A Trauma Team International tem sua sede principal no City Center, operando suas unidades de resgate rápido para os clientes mais ricos.",
        "O governo de Night City, através do Conselho Municipal, tem seus escritórios no City Center, mas sua autoridade é amplamente simbólica. O poder real reside nas mãos dos CEOs das megacorporações. Lobby, subornos e assassinatos políticos são ferramentas comuns.",
        "A NCPD no City Center é mais robusta, mas seu papel é principalmente proteger os interesses corporativos. A segurança privada das corporações é ainda mais presente.",
        "Diferente de outros distritos, o City Center não tem gangues territoriais dominantes. A presença de gangues aqui é sutil, ligada a roubos de alto valor ou sabotagens corporativas. Confrontos abertos são raros.",
        "Além da Arasaka Tower, outros marcos incluem o Night City Financial Center e o Corpo Plaza. Há também megabuildings com apartamentos caríssimos e galerias de arte de ponta.",
        "Em 2077, o City Center é o ápice da distopia cyberpunk: um lugar de riqueza inigualável e avanço tecnológico estonteante, construído sobre as ruínas de guerras passadas e mantido pelo controle implacável das megacorporações."
      ]
    },
    {
      name: "Heywood: A Alma Multifacetada de Night City",
      paragraphs: [
        "Heywood é o distrito mais populoso de Night City, um verdadeiro mosaico social e cultural que espelha as vastas desigualdades da metrópole. Abriga desde luxuosos condomínios corporativos até favelas humildes. É onde a maioria dos cidadãos comuns de Night City vive e luta.",
        "Heywood se desenvolveu como uma área residencial e comercial, atraindo uma vasta gama de classes sociais devido à sua localização estratégica, adjacente ao City Center, mas com custos mais acessíveis. O crescimento foi orgânico, resultando em arquitetura diversa.",
        "Heywood é predominantemente o território dos Valentinos, uma das maiores e mais influentes gangues. Com raízes na cultura latina e um forte senso de família e honra, os Valentinos dominam as ruas de Wellsprings e grande parte de Vista del Rey. Controlam o tráfico de drogas, armas e negócios locais.",
        "Embora os Valentinos sejam dominantes, há pequenas células de outras gangues, como os 6th Street e Scavengers, levando a conflitos localizados.",
        "As megacorporações têm uma presença menos ostensiva em Heywood, mas sua influência é inegável, possuindo propriedades e controlando empregos. Empresas de segurança privada mantêm a ordem em áreas mais ricas.",
        "Figuras políticas em Heywood emergem da comunidade, mas sua autoridade é frágil e comprometida pela corrupção, influenciada por gangues ou corporações. A NCPD tem presença irregular.",
        "Subdistritos de Heywood: Wellsprings (coração dos Valentinos), The Glen (mais afluente, fronteira com City Center), Vista del Rey (mais pobre e industrial).",
        "Heywood é um palco constante de pequenos conflitos: disputas territoriais, brigas com outras gangues e confrontos com a NCPD. A vida é uma luta diária contra pobreza e violência.",
        "Em 2077, Heywood é o microcosmo de Night City: riqueza e pobreza extremas, onde fé e família se misturam com a brutalidade das ruas. A comunidade é forte, mas a opressão é constante."
      ]
    },
    {
      name: "Santo Domingo: O Motor Industrial e o Caldeirão de Classes",
      paragraphs: [
        "Santo Domingo é o pulmão e o músculo de Night City, o distrito industrial e de moradias populares que mantém a cidade funcionando. É onde a maior parte da produção industrial e infraestrutura pesada está localizada. É um lugar de trabalho duro, vida operária, mas também de conflitos, poluição e decadência.",
        "Desde os primórdios, Santo Domingo foi designada para indústria pesada. Sua proximidade com o porto e vias de transporte a tornou ideal para fábricas, refinarias e usinas, impulsionada por megacorporações como a Petrochem.",
        "A arquitetura é funcional e robusta: galpões industriais, tubulações, chaminés e blocos de apartamentos de baixo custo. A poluição do ar é constante.",
        "Santo Domingo é disputado por várias gangues, mas com forte presença dos 6th Street. Formados por veteranos de guerra, veem-se como guardiões do povo, mas operam como gangue, controlando tráfico de armas e proteção de negócios. Os Maelstrom também frequentam zonas abandonadas como Rancho Coronado. Os Animals têm presença em clubes de luta clandestinos.",
        "Megacorporações como Petrochem e Militech têm presença massiva, explorando mão de obra barata e regulamentações frouxas. As condições de trabalho são precárias.",
        "A influência política é complexa. O Conselho Municipal tem pouco controle real, com autoridade dividida entre megacorporações e gangues. A NCPD tem presença esporádica.",
        "Subdistritos detalhados: Rancho Coronado (principal área industrial e residencial, reduto dos 6th Street), Arroyo (mais industrial e desolado, intensa atividade de gangues).",
        "Santo Domingo é palco constante de brigas. Os 6th Street enfrentam os Maelstrom e outras gangues. A vida é uma luta pela sobrevivência em ambiente hostil.",
        "Em 2077, Santo Domingo é o retrato da resiliência e exploração. Mantém as engrenagens da metrópole girando à custa da saúde e segurança de seus habitantes. A comunidade é forte, mas a batalha contra corporações e violência é diária."
      ]
    },
    {
      name: "Pacifica: O Paraíso Esquecido, Vazio e Perigoso",
      paragraphs: [
        "Pacifica é a personificação do fracasso dos sonhos e promessas quebradas em Night City. Originalmente concebido como um mega-resort de luxo, transformou-se em uma vasta e perigosa favela, dominada pela criminalidade e ausência de lei.",
        "Nos anos 2060, Pacifica começou a ser desenvolvida como destino turístico de ponta, com investimentos em hotéis e shoppings. A crise econômica e as Guerras Corporativas fizeram com que os investimentos fossem retirados, abandonando o projeto e seus trabalhadores.",
        "Com o abandono, Pacifica tornou-se refúgio para desamparados e marginalizados, atraindo imigrantes, especialmente haitianos e caribenhos, que trouxeram sua cultura e expertise em netrunning. Foi nesse cenário que os Voodoo Boys ascenderam como força dominante, uma comunidade de netrunners e hackers perigosos que combinam habilidades cibernéticas com vodu e desconfiança da tecnologia corporativa.",
        "Em Pacifica, a NCPD não tem jurisdição. A lei é feita pelos Voodoo Boys. Apesar do domínio deles, Pacifica é lugar de conflitos com outras gangues menores e criminosos oportunistas. Os Animals ocasionalmente se aventuram ali.",
        "Não há figuras políticas reconhecidas. A liderança é exercida pelos Voodoo Boys. A economia é baseada no mercado negro, contrabando, tecnologia roubada e serviços de netrunning.",
        "Subdistritos e locais conhecidos: Coastview (com esqueletos de resorts e o Grand Imperial Mall, um shopping inacabado que virou uma \"cidade dentro da cidade\"), Capitão Caliente (moradias improvisadas e mercados), West Wind Estate (labirinto de prédios abandonados).",
        "Pacifica é de uma beleza distópica: palmeiras e praia poluída contrastam com prédios abandonados. Em meio à decadência, os habitantes criaram uma cultura de resistência.",
        "Em 2077, Pacifica é zona de perigo e liberdade, onde a tecnologia dos Voodoo Boys choca com a pobreza. A vida é barata, a esperança é luxo, mas a capacidade de sobreviver é inabalável."
      ]
    },
    {
      name: "Dogtown: O Feudo Anárquico do Coronel Hansen",
      paragraphs: [
        "Dogtown é mais que um subdistrito; é um estado dentro de um estado, uma anomalia anárquica e fortificada no que um dia foi Pacifica. Ilustra a falência do governo e o poder dos militares.",
        "Assim como Pacifica, Dogtown era parte do plano de paraíso turístico, incluindo o EBM Petrochem Stadium. O colapso econômico deixou construções inacabadas.",
        "A virada ocorreu durante e após o Golpe Militar de 2069. O Coronel Kurt Hansen, ex-militar das NUSA e líder do grupo paramilitar Barghest, tomou controle de Dogtown. Declarou a área uma Zona de Segurança Militar (ZSM) independente, com muros e checkpoints. A NCPD não tem jurisdição.",
        "O Barghest é a única força de \"ordem\", liderados por Hansen. Controlam acesso, comércio e atividades ilícitas. A economia é movida a contrabando e mercado negro, com o Stadium como centro nevrálgico.",
        "Habitantes são refugiados, criminosos e mercenários. A vida é brutal, mas a ausência de regras corporativas atrai alguns.",
        "A única figura política é Kurt Hansen. Corporações não têm presença oficial, mas fazem negócios clandestinos com Hansen e os Barghest. NetWatch monitora atividades de netrunning.",
        "Dogtown é lugar de conflitos internos entre facções dos Barghest, rivalidades com gangues menores e confrontos com quem tenta invadir ou fugir. A localização adjacente a Pacifica gera tensões com os Voodoo Boys.",
        "Locais conhecidos: Stadium (centro de operações Barghest e mercado negro), Black Sapphire (cassino e fortaleza de Hansen), Longshore Stacks (depósitos para contrabando).",
        "Em 2077, Dogtown é um testamento da capacidade humana de sobreviver. É uma zona de guerra constante onde a liberdade é anarquia e a lei é ditada pela arma. É o sonho de Richard Night, pervertido e distorcido."
      ]
    },
    {
      name: "As Terras Baldias (Badlands): O Deserto Sem Lei",
      paragraphs: [
        "As Terras Baldias (Badlands) não são um distrito urbano, mas uma vasta e desolada região que cerca Night City, seu subúrbio mais selvagem. São o domínio das Famílias Nômades, grupos itinerantes que vivem fora do sistema corporativo.",
        "Originalmente desertos e terras agrícolas, a expansão urbana, poluição e desastres ambientais transformaram a área em um deserto árido e tóxico. Após o colapso econômico, muitos abandonaram as cidades e formaram as primeiras Famílias Nômades, buscando liberdade e autossuficiência.",
        "As Badlands são governadas por um complexo sistema de Famílias Nômades, que se movem em caravanas de veículos personalizados. As mais proeminentes são os Aldecaldos (maior e mais influente, especialistas em transporte e contrabando), os Wraiths (violentos e sádicos, atacam caravanas) e os Forge (agressivos, frequentemente em conflito).",
        "A vida nômade é difícil, exigindo autossuficiência. A troca e o escambo são a base da economia, complementados por serviços de transporte e escolta.",
        "Megacorporações como Zetatech e Petrochem têm instalações de extração de recursos e laboratórios. Militech mantém bases de treinamento. Há tensão constante entre Nômades e forças corporativas.",
        "As Badlands são palco constante de conflitos entre Famílias Nômades por territórios e recursos. Os Wraiths são grandes inimigos. Scavengers também espreitam. A NCPD tem jurisdição quase zero.",
        "Locais conhecidos: Solar Array (complexo de painéis solares), Wind Farms (turbinas eólicas), Scrapyards (ferro-velhos), Nomad Camps (acampamentos temporários ou semi-permanentes), Aldecaldos Camp (principal acampamento Aldecaldo).",
        "Em 2077, as Terras Baldias são um lembrete de que a vida fora das megacidades é brutal, mas oferece liberdade. Para os Nômades, são o lar, símbolo de resistência e autonomia."
      ]
    }
  ];

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
            <Card className="shadow-xl border-accent rounded-lg overflow-hidden">
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">Explorando os Territórios de Night City</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {districts.map((district, index) => (
              <Card key={index} className="shadow-lg border-secondary rounded-lg overflow-hidden">
                <CardHeader className="bg-card-foreground/50 p-6">
                  <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">{district.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {district.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground text-base leading-relaxed">
                      {paragraph}
                    </p>
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

    