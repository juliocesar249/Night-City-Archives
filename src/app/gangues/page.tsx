
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";

export default function GanguesPage() {
  const pageTitle = "As Gangues de Night City";
  const mainIntro = "Com tanta opressão corporativa e desigualdade social, a criminalidade explode em Night City. As gangues são a resposta da população à falta de oportunidades e à violência das megacorporações. Elas controlam territórios, traficam drogas, armas e cibernéticos ilegais, e cada uma tem sua própria ideologia, estilo e especialização. Elas são a força viva do submundo, lutando por poder, sobrevivência e um pedaço do bolo nessa cidade implacável.";

  const gangs = [
    {
      name: "Maelstrom: A Sinapse da Loucura Cibernética",
      borderColor: "#c90000",
      glowColor: "#c90000",
      gradient: "linear-gradient(to right, #c90000, #333333)",
      titleColorClass: "text-primary", 
      introduction: "Os Maelstrom são, sem sombra de dúvida, uma das gangues mais perturbadoras e temidas de Night City. Eles não são apenas criminosos; são uma encarnação do perigo da obsessão cibernética e da linha tênue entre aprimoramento e psicose. Seus membros são facilmente reconhecíveis por suas modificações corporais extremas, muitas vezes envolvendo grandes quantidades de cromo e implantes que distorcem a forma humana, e seus olhos que brilham com luzes vermelhas intensas, um símbolo de sua insanidade e dependência.",
      sections: [
        {
          title: "Formação e a Busca pelo \"Verdadeiro Eu\"",
          content: [
            "A origem dos Maelstrom remonta a uma gangue anterior chamada Metal Maulers. Após uma série de eventos turbulentos e a liderança de um indivíduo conhecido como Royce, a gangue passou por uma transformação radical. Royce, obcecado por aprimoramentos cibernéticos, começou a empurrar os limites da modificação corporal, incentivando seus membros a substituir cada vez mais partes de seus corpos por chrome. O objetivo era, em sua visão distorcida, transcender a fragilidade humana e se tornar algo \"mais\" – ou, na prática, menos humano e mais máquina.",
            "Essa busca incessante por mais e mais chrome levou a gangue a um estágio avançado de cyberpsicose, um distúrbio mental grave causado pelo excesso de implantes cibernéticos, que resulta em paranoia extrema, agressão incontrolável e perda da humanidade. Os Maelstrom abraçam essa loucura como uma forma de \"iluminação\" ou \"purificação\", vendo a dor e a desfiguração como parte do processo de se tornarem seres superiores."
          ]
        },
        {
          title: "Práticas, Ideologia e a Obsessão pelo Chrome",
          content: [
            "A ideologia dos Maelstrom é baseada em uma forma de niilismo tecnológico e um culto à máquina. Eles acreditam que a carne é fraca e que a verdadeira força reside na fusão com a tecnologia. Essa crença os leva a realizar modificações corporais extremas e muitas vezes desnecessárias, muitas das quais os deixam desfigurados e brutalmente eficientes em combate. A dor das cirurgias e a instabilidade mental são vistas como provas de sua dedicação.",
            "Suas práticas criminosas são tão brutais quanto sua aparência. Eles se envolvem em roubo de equipamentos cibernéticos, extorsão, tráfico de drogas (especialmente estimulantes e produtos químicos que exacerbam sua psicose), e são frequentemente contratados como \"músculos\" para serviços de intimidação e violência extrema. Eles adoram torturar suas vítimas e usar o medo como arma."
          ]
        },
        {
          title: "Conflitos e Guerras Internas Notórias",
          content: [
            "Os Maelstrom são notórios por sua instabilidade interna e por seus conflitos. A gangue teve várias mudanças de liderança, geralmente através de assassinatos brutais e golpes internos. Um dos incidentes mais famosos foi o \"Inquisitor Incident\" (Incidente do Inquisidor). O líder anterior da gangue, um Netrunner chamado Simon \"The Inquisitor\" Randall, foi derrubado por Royce em uma disputa de poder sangrenta. Esse evento solidificou o controle de Royce e sua visão radical de aprimoramento cibernético.",
            "Além das brigas internas, os Maelstrom estão em constante conflito com quase todas as outras gangues de Night City, especialmente as que tentam invadir seu território industrial. Sua rivalidade com os 6th Street em Santo Domingo é acirrada, com frequentes tiroteios por controle de fábricas abandonadas e rotas de contrabando. Eles também se chocam com os Tyger Claws e os Valentinos quando suas operações se sobrepõem."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Os Maelstrom não têm interesse em política formal; eles desprezam o governo e as megacorporações. Sua economia é puramente criminosa e focada no controle de recursos que sustentam suas modificações e seu estilo de vida. Eles roubam chrome de transporte, saqueiam fábricas de tecnologia e controlam laboratórios clandestinos onde produzem drogas e cibernéticos de baixa qualidade para o mercado negro.",
            "Eles são frequentemente contratados por corporações menores ou indivíduos ricos para serviços de segurança ou para eliminar alvos, pois sua brutalidade e desprezo pela vida os tornam executores eficientes. No entanto, sua instabilidade e tendência à cyberpsicose os tornam imprevisíveis e difíceis de controlar."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "Os Maelstrom dominam principalmente os distritos industriais e as áreas mais decadentes de Night City, que oferecem o isolamento e as ruínas que eles preferem para suas bases.",
            "Northside Industrial District (NID) em Watson: Este é o principal reduto dos Maelstrom. Vastos complexos de fábricas abandonadas, armazéns e siderúrgicas enferrujadas são seus esconderijos e campos de batalha. O famoso clube Totentanz é um dos seus locais mais conhecidos, uma casa noturna suja e brutal onde a música pesada e a violência são a norma, e onde o braindance ilegal e as lutas são a principal atração.",
            "Rancho Coronado (Santo Domingo): Áreas industriais e abandonadas em Santo Domingo também são controladas por facções dos Maelstrom, especialmente as que fazem fronteira com o NID.",
            "Old Power Plant (Usina Elétrica Antiga): Locais como usinas de energia desativadas e complexos de tratamento de água se tornam fortalezas perfeitas para a gangue, longe dos olhos da NCPD."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Maelstrom continuam sendo uma força implacável e caótica em Night City. Sua obsessão pelo cromo só aumentou, e a linha entre humano e máquina se tornou ainda mais tênue para eles. Eles são um perigo constante para qualquer um que se aventure em seu território, e sua mera presença já é um aviso de violência extrema e desprovida de razão. Eles representam o lado mais sombrio da busca por aprimoramento e a inevitável descida à loucura que o mundo cyberpunk pode oferecer."
          ]
        }
      ]
    },
    {
      name: "Tyger Claws: A Ordem do Neon e a Sombra da Yakuza",
      borderColor: "#FF00FF", 
      glowColor: "#FF00FF",
      gradient: "linear-gradient(to right, #FF00FF, #330033)", 
      titleColorClass: "text-white",
      introduction: "Os Tyger Claws são uma das gangues mais proeminentes e estilosas de Night City, com uma forte influência na cultura e no submundo japonês. Diferente de muitas gangues que prosperam no caos puro, os Tyger Claws operam com uma ordem brutal e uma estrutura hierárquica que remete às tradições da Yakuza japonesa. Eles são conhecidos por seu estilo de vida luxuoso, seus aprimoramentos cibernéticos cromados e suas motocicletas neon de alta velocidade, que rasgam as ruas de Night City como fantasmas luminosos.",
      sections: [
        {
          title: "Formação e Raízes Culturais",
          content: [
            "Os Tyger Claws surgiram das comunidades japonesas em Night City, especialmente aquelas que se estabeleceram em Japantown, no distrito de Westbrook. Embora a Arasaka exercesse uma vasta influência corporativa na cidade, muitos japoneses sentiam a necessidade de uma organização que protegesse seus interesses e tradições fora das estruturas corporativas formais. A gangue se formou a partir dessa necessidade, incorporando elementos da cultura tradicional japonesa, como códigos de honra e lealdade, mas adaptando-os para a brutal realidade das ruas cyberpunk.",
            "Sua formação não foi um evento singular, mas um processo gradual de consolidação de pequenas quadrilhas e famílias que compartilhavam a mesma etnia e interesses no submundo. Eles se estabeleceram em Japantown e Watson, áreas com forte presença asiática, e cresceram controlando o tráfico de drogas sintéticas, contrabando, prostituição e, especialmente, o mercado de braindances ilegais."
          ]
        },
        {
          title: "Práticas, Estilo e o Código de Honra Distorcido",
          content: [
            "Os Tyger Claws são esteticamente impressionantes. Seus membros frequentemente exibem tatuagens cibernéticas, implantes de cromo brilhante e vestem roupas de seda e couro, com um toque japonês moderno. Eles são adeptos do combate corpo a corpo, utilizando katanas de alta tecnologia e artes marciais aprimoradas por cibernéticos.",
            "Apesar de se gabarem de um \"código de honra\", suas práticas são tão violentas e implacáveis quanto as de qualquer outra gangue. A lealdade à gangue e à família é primordial, e a traição é punida com extrema brutalidade. Eles usam a intimidação e a força para manter o controle de seus territórios e negócios. São mestres em extorsão, oferecendo \"proteção\" a negócios locais, que na verdade é uma forma de tributo para evitar a violência da própria gangue ou de rivais."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "O envolvimento dos Tyger Claws com a política e a economia de Night City é sutil, mas profundo. Eles não buscam assentos no Conselho Municipal, mas exercem uma influência considerável nos bastidores. Sua principal força está em sua capacidade de controlar vastos mercados ilegais que são intrínsecos à vida de Night City.",
            "Economia de Braindance: Eles dominam o lucrativo mercado de braindances ilegais, controlando a produção, distribuição e a segurança dos clubes e estúdios que os produzem. Clubes como o Clouds em Japantown são fachadas para operações mais sombrias, onde os clientes podem viver fantasias programadas.",
            "Tráfico e Contrabando: Controlam rotas de contrabando de alta tecnologia, drogas sintéticas e outros produtos ilegais, aproveitando-se da vasta demanda do distrito de Westbrook.",
            "Relação com Corporações: Embora não sejam aliados diretos, os Tyger Claws frequentemente têm uma relação simbiótica com corporações menores e até mesmo algumas divisões da Arasaka. As corporações podem \"tolerar\" as operações da gangue em troca de uma estabilidade superficial no distrito, ou podem usar os Tyger Claws para \"serviços\" que não querem sujar as mãos. A NCPD muitas vezes adota uma postura de \"não-interferência\" em seus territórios, o que sugere um acordo tácito."
          ]
        },
        {
          title: "Conflitos e Disputas",
          content: [
            "Os Tyger Claws estão em constante conflito com outras gangues que tentam invadir seu território ou desafiar seu domínio.",
            "Maelstrom: Embora operem em distritos diferentes (Tyger Claws em Watson/Westbrook e Maelstrom no NID/Santo Domingo), a rivalidade é forte. Os Maelstrom veem o estilo dos Tyger Claws como \"fraco\" e \"superficial\", e há disputas por recursos tecnológicos e rotas de contrabando.",
            "Valentinos: Conflitos de território e ideologia são comuns nas fronteiras entre Westbrook/Watson e Heywood, onde os Valentinos têm forte presença.",
            "NCPD: A polícia de Night City, embora não os confronte abertamente em seus redutos, realiza operações pontuais contra eles quando os crimes dos Tyger Claws se tornam muito visíveis ou afetam diretamente os interesses corporativos."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "Os Tyger Claws têm uma presença dominante em:",
            "Japantown (Westbrook): Este é o seu principal bastião, onde sua cultura e poder são mais evidentes. Clubes, restaurantes e pontos de encontro estão sob seu controle.",
            "Kabuki (Watson): Uma parte significativa de Kabuki, em Watson, também está sob seu domínio, especialmente as áreas de mercado negro de cibernéticos e clínicas de ripperdocs.",
            "Little China (Watson): Embora com uma presença mais discreta, também controlam diversas operações e negócios nessa área."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Tyger Claws são uma força estabelecida e poderosa em Night City. Eles conseguiram manter sua influência e controle sobre suas áreas, adaptando-se às mudanças e mantendo uma fachada de ordem que, paradoxalmente, beneficia a vida luxuosa do distrito. Sua combinação de brutalidade, organização e um estilo inconfundível os torna uma das gangues mais fascinantes e perigosas da cidade, um lembrete constante de que, mesmo nos paraísos de neon, a lei é moldada por quem tem o poder e a disciplina para impô-la."
          ]
        }
      ]
    },
    {
      name: "Valentinos: Honra, Fé e Sangue nas Ruas de Heywood",
      borderColor: "#E6DC22", 
      glowColor: "#E6DC22",
      gradient: "linear-gradient(to right, #E6DC22, #E05200)", 
      titleColorClass: "text-black",
      introduction: "Os Valentinos são uma das gangues mais numerosas e influentes de Night City, com uma presença esmagadora no distrito de Heywood. Eles se destacam não apenas por sua força e controle territorial, mas também por sua profunda conexão com a cultura latina, um forte senso de comunidade, lealdade à família (de sangue ou não) e uma fé religiosa, ainda que distorcida para se adaptar à brutalidade da vida nas ruas.",
      sections: [
        {
          title: "Formação e Raízes Comunitárias",
          content: [
            "Os Valentinos surgiram das comunidades latinas que se estabeleceram em Heywood, especialmente nas áreas mais densamente povoadas de Wellsprings e Vista del Rey. Eles não foram formados por um único evento, mas cresceram organicamente a partir da necessidade de proteção mútua e da resistência à opressão corporativa e à negligência do governo. Em um mundo onde as leis eram feitas pelos ricos e as oportunidades eram escassas, os Valentinos ofereceram um senso de pertencimento e uma rede de segurança para aqueles que não tinham nada.",
            "A gangue se enraizou profundamente na cultura chicana, com forte ênfase na família, na tradição, no orgulho e em uma versão particular da fé católica, que se manifesta em altares de rua, tatuagens religiosas e uma devoção a figuras como a La Santa Muerte. Essa base cultural e religiosa dá aos Valentinos uma coesão e uma lealdade interna raramente vistas em outras gangues de Night City."
          ]
        },
        {
          title: "Práticas, Ideologia e o Código do Sangue",
          content: [
            "A ideologia dos Valentinos é centrada na honra, lealdade e na proteção de sua gente e de seus territórios. Eles se consideram os guardiões de Heywood e operam com um código moral que, embora brutal, é mais estruturado do que o niilismo de gangues como os Maelstrom. A infidelidade e a deslealdade são os maiores pecados.",
            "Suas práticas criminosas são diversas e visam manter o controle econômico e social de suas áreas:",
            "Extorsão e Proteção: Cobram \"taxas de proteção\" de pequenos negócios e moradores, garantindo que suas operações não sejam perturbadas por outras gangues ou por criminosos independentes.",
            "Tráfico de Drogas e Armas: Controlam o mercado de drogas de baixo custo e armas de fogo, que são essenciais para a sobrevivência e a defesa de seu território.",
            "Prostituição e Entretenimento: Operam bordéis e casas de jogos, muitas vezes discretamente, para gerar receita e manter o controle social.",
            "Rachas e Apostas: Organizam e participam de rachas de rua e outras competições ilegais, que servem como fonte de renda e como forma de manter a reputação da gangue.",
            "Os membros dos Valentinos são facilmente reconhecíveis por seus carros lowrider, roupas com símbolos religiosos ou culturais, tatuagens extensas e, muitas vezes, implantes cibernéticos menos chamativos, focados mais em funcionalidade do que em ostentação."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Apesar de serem uma gangue, os Valentinos têm uma influência política informal e econômica considerável em Heywood. Eles não buscam assentos no Conselho Municipal, mas exercem pressão sobre vereadores locais e funcionários da cidade para garantir que seus interesses sejam atendidos. A corrupção é comum, com políticos locais fazendo acordos com a gangue para garantir sua \"colaboração\" ou para desviar a atenção da NCPD.",
            "Eles controlam uma rede econômica subterrânea que sustenta a vida em Heywood, fornecendo serviços e produtos que as megacorporações e o governo não oferecem ou não se importam em oferecer. Isso inclui desde a venda de alimentos e produtos básicos até a oferta de \"justiça\" em áreas onde a lei oficial não chega."
          ]
        },
        {
          title: "Conflitos e Guerras de Território",
          content: [
            "Os Valentinos estão em constante conflito com várias outras gangues, disputando territórios, rotas de contrabando e influência.",
            "Tyger Claws: Há tensões nas fronteiras entre Heywood e Watson/Westbrook, especialmente por conta do mercado de cibernéticos e da vida noturna.",
            "6th Street: A rivalidade com os 6th Street de Santo Domingo é uma das mais notórias, com frequentes tiroteios nas áreas industriais da fronteira de Heywood e Santo Domingo, como Vista del Rey. As duas gangues disputam o controle de trabalhadores e mercados de armas.",
            "Animals: Conflitos pontuais podem ocorrer em áreas de academia clandestina ou clubes de luta.",
            "Scavengers: Os Valentinos veem os Scavengers como um inimigo comum e uma ameaça à sua comunidade, e não hesitam em eliminá-los quando encontrados."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "Os Valentinos têm seu domínio mais forte em:",
            "Wellsprings (Heywood): Este é o seu coração e base de operações. As ruas estão cheias de seus grafites e altares, e a presença da gangue é inegável.",
            "Vista del Rey (Heywood): Uma área mais industrial e pobre de Heywood, onde a gangue exerce controle sobre fábricas abandonadas e moradias populares.",
            "The Glen (Heywood): Embora mais afluente, partes de The Glen também sentem a influência dos Valentinos, especialmente nas áreas mais próximas a Wellsprings."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Valentinos continuam sendo uma força imponente em Night City. Eles representam a complexidade das gangues urbanas, onde a criminalidade se entrelaça com um forte senso de comunidade e a busca por um lugar ao sol em um mundo que tenta esmagá-los. Sua lealdade tribal e sua resiliência os tornam um pilar fundamental da vida em Heywood, um lembrete de que, mesmo na sombra das megacorporações, a cultura e a fé podem ser uma arma poderosa."
          ]
        }
      ]
    },
    {
      name: "Voodoo Boys: A Voz Digital de Pacifica e os Guardiões do Old Net",
      borderColor: "#6992CF", 
      glowColor: "#6992CF",
      gradient: "linear-gradient(to right, #6992CF, #000000)", 
      titleColorClass: "text-primary",
      introduction: "Os Voodoo Boys são, de longe, uma das gangues mais enigmáticas e tecnologicamente avançadas de Night City. Eles não são apenas uma gangue; são uma comunidade de netrunners e hackers profundamente enraizados na cultura haitiana e na mística do vodu, operando no distrito abandonado de Pacifica. Sua principal preocupação não é o controle territorial físico (embora o exerçam com brutalidade quando necessário), mas sim o domínio do ciberespaço, a busca pela sabedoria do Old Net (a antiga internet) e a proteção de sua comunidade contra a invasão corporativa e o controle da NetWatch.",
      sections: [
        {
          title: "Formação e Raízes em Pacifica",
          content: [
            "Os Voodoo Boys surgiram das comunidades haitianas e caribenhas que migraram para Night City após desastres naturais e instabilidade política em suas terras natais. Muitos se estabeleceram em Pacifica, atraídos pelas promessas de um resort de luxo que nunca se concretizou. Quando as megacorporações abandonaram o projeto, deixando Pacifica em ruínas e sem lei, essas comunidades se viram isoladas e à mercê do caos.",
            "Foi nesse cenário que os Voodoo Boys se formaram, não como uma gangue tradicional, mas como uma rede de netrunners e hackers que usavam suas habilidades digitais para proteger e sustentar sua comunidade. Eles desenvolveram uma filosofia que mescla o conhecimento avançado de netrunning com as crenças e rituais do vodu haitiano, vendo a Net como um tipo de plano espiritual onde os \"espíritos\" das IAs e os dados corrompidos residem."
          ]
        },
        {
          title: "Práticas, Ideologia e o Misticismo Digital",
          content: [
            "A ideologia dos Voodoo Boys é complexa. Eles são ferozmente protetores de sua comunidade e desconfiam profundamente de todas as megacorporações e do governo. Sua principal motivação é garantir a autonomia de Pacifica e desvendar os segredos do Old Net, a parte da internet que foi isolada e corrompida após o colapso da Net em 2020. Eles acreditam que o Old Net contém conhecimentos proibidos e entidades digitais (IAs) que podem ser tanto perigosas quanto fontes de poder.",
            "Suas práticas são centradas no netrunning e no hacking:",
            "Hacking e Roubo de Dados: São especialistas em invadir sistemas corporativos, roubar dados confidenciais e realizar ataques cibernéticos por encomenda.",
            "Manipulação de Braindances: Os Voodoo Boys são mestres na criação e manipulação de braindances, usando-os para coletar informações, manipular indivíduos ou até mesmo criar programas de \"experiências\" que servem a seus próprios fins. Eles são notórios por usar braindances com feedback negativo, que podem causar danos cerebrais graves ou até a morte.",
            "Contrabando Digital: Operam no mercado negro de dados, software e hardware cibernético ilegal.",
            "Vodu e Netrunning: Suas crenças vodu se manifestam em seus rituais de netrunning, onde eles buscam se conectar com o \"ciberespaço\" de forma quase espiritual, usando o jargão e os ritos do vodu para descrever suas operações digitais.",
            "Os Voodoo Boys são liderados por figuras como Brigitte, a chefe dos netrunners e a principal visionária da gangue, e Placide, o executor e o braço forte, que lida com as operações no mundo real. Eles são discretos em sua aparência, focando mais na funcionalidade de seus implantes de netrunning do que na ostentação, mas suas armas e táticas são brutais e eficazes."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Os Voodoo Boys desprezam a política de Night City e não participam de seus sistemas. Eles operam como uma força soberana em Pacifica, impondo sua própria lei e garantindo a autonomia de sua comunidade. Sua economia é quase totalmente baseada em atividades ilegais e no controle do submundo digital. Eles não buscam riqueza no sentido corporativo, mas sim poder, conhecimento e a liberdade de sua comunidade.",
            "Autonomia de Pacifica: Sua principal agenda política é manter Pacifica como uma zona livre, longe da influência da NCPD e das megacorporações. Eles se defendem ferozmente de qualquer tentativa de invasão ou controle.",
            "Conflito com NetWatch: Os Voodoo Boys estão em guerra constante com a NetWatch, a agência global encarregada de monitorar e policiar a Net. A NetWatch tenta conter as ameaças do Old Net e qualquer um que tente acessá-lo, o que coloca os Voodoo Boys diretamente em seu caminho. Essa é uma guerra silenciosa e perigosa no reino digital."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "Os Voodoo Boys são ferozes defensores de seu território e de suas operações.",
            "NetWatch: Seu maior e mais perigoso adversário. Os Voodoo Boys veem a NetWatch como uma ameaça à sua busca por conhecimento e à liberdade da Net. Os confrontos são principalmente digitais, mas podem se manifestar em ataques físicos contra agentes da NetWatch que se aventuram em Pacifica.",
            "Animals: A rivalidade com os Animals, que tentam expandir seu território e suas operações de tráfico para Pacifica, é constante. As brigas são geralmente por controle de recursos e espaço físico.",
            "Coronel Hansen e os Barghest (Dogtown): Com a ascensão de Dogtown sob o controle de Kurt Hansen e seus Barghest, os Voodoo Boys veem uma nova ameaça à sua autonomia nas fronteiras de Pacifica. Embora não seja uma guerra aberta, a tensão é palpável, e os Voodoo Boys estão sempre atentos a qualquer incursão de Hansen.",
            "Scavengers: Embora não seja uma prioridade, os Voodoo Boys não toleram os Scavengers em seu território, pois eles são uma ameaça direta à comunidade de Pacifica."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "Os Voodoo Boys têm seu domínio total em:",
            "Pacifica: Controlam virtualmente todo o distrito de Pacifica, especialmente as áreas de Coastview e o Grand Imperial Mall.",
            "Grand Imperial Mall: O shopping center abandonado e gigantesco é um de seus principais esconderijos e centros de operações, com seus mercados clandestinos e bases de netrunners escondidas nas ruínas.",
            "Clínicas de Netrunning Clandestinas: Operam várias clínicas clandestinas de netrunning e implantes, onde realizam modificações em seus membros e em outros que buscam seus serviços."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Voodoo Boys continuam a ser uma força formidável e incompreendida em Night City. Eles vivem em seu próprio mundo, tanto no digital quanto no real, e a linha entre os dois é cada vez mais tênue para eles. Representam a resistência final contra o controle corporativo, a busca pelo conhecimento proibido e a crença de que, no futuro, o poder reside não na força física ou na riqueza, mas na capacidade de manipular as redes e os segredos do ciberespaço. Para os Voodoo Boys, o futuro não é apenas o que se constrói, mas o que se hackeia."
          ]
        }
      ]
    },
    {
      name: "The Mox: Os Vingadores dos Oprimidos e a Paz no Meio do Caos",
      borderColor: "#FF69B4", 
      glowColor: "#FF69B4",
      gradient: "linear-gradient(to right, #FF69B4, #4A003D)", 
      titleColorClass: "text-white",
      introduction: "As Mox são uma gangue única em Night City, destacando-se por sua ideologia de proteção e justiça para os oprimidos, em vez da tradicional busca por poder territorial e lucro puro. Elas se formaram como uma resposta direta à brutalidade e à exploração, especialmente contra trabalhadores do sexo, braindancers e qualquer pessoa vulnerável. Elas são as \"mães\" e \"irmãs\" dos que não têm a quem recorrer, e embora sejam implacáveis com quem as desafia, sua motivação principal é a defesa.",
      sections: [
        {
          title: "Formação: Nascidas da Tragédia",
          content: [
            "As Mox surgiram em 2076, em um ato de revolta e luto. Elas foram fundadas em homenagem a Elizabeth \"Lizzie\" Borden, uma ex-trabalhadora do sexo e proprietária de um bordel em Lizzie's Bar, em Watson. Lizzie era conhecida por tratar suas garotas com respeito e dignidade, algo raro no submundo de Night City. No entanto, ela foi brutalmente assassinada por membros dos Tyger Claws que tentavam expandir seu controle sobre o mercado de prostituição e braindance.",
            "A morte de Lizzie, que era uma figura respeitada e amada, chocou muitos no submundo. Em vez de aceitar a exploração, um grupo de ex-trabalhadoras do sexo, ripperdocs e cyberpunks se uniu para vingar Lizzie e proteger aqueles que eram explorados. Elas se autodenominaram \"Mox\" (abreviação de moxie, que significa coragem, ousadia, garra), em um desafio direto aos Tyger Claws e a qualquer outra gangue que explorasse os fracos."
          ]
        },
        {
          title: "Práticas, Ideologia e a Proteção dos Marginalizados",
          content: [
            "A ideologia das Mox é baseada na proteção mútua e na justiça, com uma forte ênfase na liberdade individual e no consentimento. Elas não buscam expandir seu território agressivamente como outras gangues, mas defendem ferozmente suas áreas e seus protegidos.",
            "Suas práticas incluem:",
            "Proteção e Vigilância: Oferecem proteção a trabalhadores do sexo, artistas de braindance e outros indivíduos vulneráveis, garantindo que não sejam explorados ou abusados.",
            "Vingança: São rápidas e brutais em retaliar contra qualquer um que maltrate seus protegidos ou desrespeite seus códigos.",
            "Contrabando e Operações Clandestinas: Embora não sejam sua principal fonte de renda, as Mox se envolvem em contrabando e operações clandestinas para financiar suas atividades e manter seus membros equipados.",
            "Modificações Cibernéticas: Embora não sejam tão extremas quanto os Maelstrom, as Mox usam implantes cibernéticos para defesa e ataque, muitas vezes com um toque mais discreto e funcional. Elas têm acesso a ripperdocs de confiança que as auxiliam.",
            "Visualmente, as Mox são mais diversas em suas modificações e vestimentas do que outras gangues. Elas não têm um uniforme rígido, mas frequentemente usam elementos que simbolizam sua causa, como cores vibrantes (rosa, roxo) e acessórios que remetem à liberdade e à individualidade."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "As Mox não têm interesse em se envolver na política formal de Night City. Elas operam à margem do sistema, agindo como uma força de contrapoder no submundo. Sua economia é primariamente de subsistência e focada em financiar suas operações de proteção.",
            "Economia Subterrânea: Dependem de doações, pequenos esquemas de contrabando e, ocasionalmente, \"taxas de proteção\" (mas com uma conotação diferente da extorsão das outras gangues, mais como um pagamento por serviço) para manter suas operações.",
            "Anticorporativa na Prática: Embora não tenham uma ideologia anticapitalista declarada, suas ações são diretamente contra a exploração corporativa e o abuso de poder, especialmente no setor de entretenimento e trabalho sexual, onde as corporações frequentemente tratam as pessoas como mercadorias."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "As Mox são uma gangue relativamente nova em 2077, mas já se envolveram em conflitos significativos, principalmente devido à sua natureza protetora e vingativa.",
            "Tyger Claws: Sua rivalidade com os Tyger Claws é a mais intensa e visceral. A morte de Lizzie Borden foi o estopim para a formação das Mox, e a gangue busca vingança e impede ativamente as operações de exploração dos Tyger Claws, resultando em frequentes confrontos violentos nas ruas de Watson e Westbrook.",
            "Outras Gangues: As Mox podem se envolver em atritos com outras gangues que tentam explorar ou abusar de indivíduos em seus territórios de influência. Eles se chocam com os Scavengers e qualquer outra gangue que se envolva em tráfico humano ou de órgãos.",
            "NCPD: A NCPD as vê como mais uma gangue criminosa, apesar de suas motivações. Conflitos com a polícia ocorrem quando as Mox se envolvem em atos de violência que chamam a atenção ou interferem em operações policiais."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "As Mox não têm um vasto território, mas operam em áreas específicas onde sua presença é mais necessária e onde podem proteger seus protegidos.",
            "Kabuki (Watson): O principal reduto das Mox é em Kabuki, no distrito de Watson, onde o famoso Lizzie's Bar (o antigo bordel de Lizzie Borden) serve como sua sede. O bar é um ponto de encontro, um refúgio seguro e um centro de operações para a gangue.",
            "Outras áreas de Watson e Westbrook: Embora não dominem esses distritos, elas têm uma presença vigilante em outras partes de Watson e nas áreas limítrofes de Westbrook onde a exploração pode ocorrer."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, as Mox são uma força crescente e respeitada (ou temida) no submundo de Night City. Elas provam que nem toda gangue é motivada apenas por poder e dinheiro; algumas são movidas por um senso de justiça, mesmo que brutal. As Mox representam a resistência dos oprimidos, um farol de esperança (ainda que violento) para aqueles que são pisoteados pelo sistema e pelas outras gangues. Elas são a voz e o punho dos marginalizados, lutando para criar um espaço onde a dignidade humana ainda possa existir, mesmo em Night City."
          ]
        }
      ]
    },
    {
      name: "Barghest: O Exército Particular de Dogtown e o Reino de Hansen",
      borderColor: "#4CAF50", 
      glowColor: "#4CAF50",
      gradient: "linear-gradient(to right, #4CAF50, #2E3B2E)", 
      titleColorClass: "text-white",
      introduction: "Os Barghest são muito mais do que uma gangue; eles são uma milícia privada e o braço militar do Coronel Kurt Hansen, o senhor da guerra que governa Dogtown com punho de ferro. Eles são a personificação da lei e da ordem (ou da falta dela) dentro de Dogtown, uma força implacável e bem organizada que impõe a vontade de Hansen sem questionamentos. Sua história é a de um golpe de estado em miniatura, de militares desiludidos que encontraram um novo propósito na anarquia controlada.",
      sections: [
        {
          title: "Formação: Nascidos do Caos e da Traição",
          content: [
            "Os Barghest foram formados por Kurt Hansen e seus seguidores após o Colapso dos Estados Unidos e, mais especificamente, durante e após o Golpe Militar de 2069. Hansen, um ex-coronel das NUSA (Novos Estados Unidos da América), liderou um grupo de militares veteranos, desertores e mercenários que se sentiam traídos ou desiludidos com o governo federal e as megacorporações. Eles se viram como a verdadeira força capaz de manter a ordem e criar um novo tipo de \"liberdade\" em um mundo caótico.",
            "Aproveitando o vácuo de poder e o abandono de Pacifica pelas corporações, Hansen e os Barghest tomaram o controle da área que se tornou Dogtown. Eles não foram criados para serem uma gangue de rua, mas sim uma força paramilitar com treinamento de elite e um armamento pesado, o que lhes deu uma vantagem esmagadora sobre qualquer outra facção que tentasse desafiá-los. Sua ascensão foi rápida e brutal, consolidando Dogtown como sua Zona de Segurança Militar (ZSM) independente."
          ]
        },
        {
          title: "Práticas, Ideologia e a Lei da Força",
          content: [
            "A ideologia dos Barghest é baseada na disciplina militar, lealdade a Hansen e na crença de que a força é o único caminho para a ordem e a sobrevivência em Night City. Eles se consideram superiores às gangues de rua e à própria NCPD.",
            "Suas práticas incluem:",
            "Controle Militar Absoluto: Impõem uma lei marcial em Dogtown. Qualquer ato de desobediência ou crime contra seus interesses é punido com brutalidade extrema.",
            "Contrabando e Mercado Negro: A principal fonte de renda dos Barghest vem do controle de todas as operações de contrabando que entram e saem de Dogtown. O Stadium (EBM Petrochem Stadium) serve como seu centro de operações para o vasto mercado negro de armas, chrome, drogas e bens de luxo.",
            "Extorsão e \"Taxas\": Todos os negócios e habitantes de Dogtown devem pagar \"taxas\" aos Barghest para operar ou simplesmente para existir. Isso garante um fluxo constante de edinhos para a milícia.",
            "Segurança e Proteção: Embora brutais, os Barghest garantem uma segurança interna em Dogtown que é invejada por outras áreas de Night City, desde que você esteja do lado deles e pague suas taxas. Eles eliminam rapidamente qualquer ameaça interna ou externa.",
            "Recrutamento: Recrutam ativamente novos membros, muitas vezes de desertores militares, mercenários sem sorte ou qualquer um que prove sua utilidade e lealdade a Hansen.",
            "Visualmente, os Barghest se destacam por sua aparência militarista, com equipamentos táticos, armaduras pesadas e armas de fogo de alta potência. Muitos deles exibem cicatrizes de combate e implantes cibernéticos focados em utilidade militar."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "O envolvimento dos Barghest com a política é direto e absoluto: eles são o governo de Dogtown. Kurt Hansen é o único governante, e suas decisões são a lei. A NCPD e o Conselho Municipal de Night City não têm poder sobre Dogtown, e qualquer tentativa de intervir é vista como um ato de guerra.",
            "Economicamente, os Barghest operam um sistema autônomo baseado no mercado negro.",
            "Comércio Ilícito: Eles controlam as rotas de contrabando que ligam Night City ao restante das Badlands e outras regiões, transformando Dogtown em um hub para produtos ilegais.",
            "Acordos Corporativos Secretos: Apesar de sua independência, Hansen faz acordos secretos e transações com megacorporações como Militech e Arasaka, vendendo armas, informações ou oferecendo acesso para operações clandestinas em troca de tecnologia e recursos. Isso demonstra a complexidade da rede de poder em Night City, onde até os inimigos podem fazer negócios."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "Os Barghest são uma força de combate e estão em constante tensão ou conflito com várias facções:",
            "NCPD e Governo de Night City: Há uma fronteira militarizada entre Dogtown e Night City, com checkpoints que impedem a entrada da NCPD. Qualquer tentativa de invasão é respondida com força.",
            "Voodoo Boys: Sendo vizinhos em Pacifica, os Barghest têm uma rivalidade com os Voodoo Boys. Hansen não confia nos netrunners de Pacifica e vê suas operações cibernéticas como uma ameaça ao seu controle. Conflitos por território e por informações são comuns.",
            "Outras Gangues: Embora menos frequente devido à sua superioridade militar, os Barghest podem se envolver em confrontos com gangues de rua que tentam infiltrar Dogtown ou roubar suas mercadorias. Os Scavengers que tentam operar em Dogtown são caçados impiedosamente pelos Barghest.",
            "Militech e NUSA: Embora Hansen tenha laços com ex-militares e faça negócios com a Militech, há sempre uma tensão. As NUSA gostariam de reincorporar Dogtown, mas Hansen é um obstáculo."
          ]
        },
        {
          title: "Partes e Locais Dominados",
          content: [
            "Os Barghest dominam Dogtown por completo:",
            "Stadium (EBM Petrochem Stadium): É o principal centro de operações dos Barghest e o coração do mercado negro de Dogtown. É uma fortaleza e um centro comercial caótico.",
            "Black Sapphire: O luxuoso cassino inacabado se tornou a base de operações e a fortaleza pessoal de Kurt Hansen, onde ele vive e de onde comanda Dogtown.",
            "Longshore Stacks: Área de armazéns e depósitos utilizada para armazenar e distribuir contrabando.",
            "Checkpoints e Muros: Toda a fronteira de Dogtown é controlada pelos Barghest, com patrulhas constantes e torres de vigilância que impedem a entrada e saída não autorizadas."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Barghest representam a culminação do poder militar em um mundo pós-colapso. Sob a liderança carismática e brutal de Kurt Hansen, eles transformaram Dogtown em seu próprio império, um enclave de liberdade (para eles) e opressão (para os outros). Eles são um testamento de que, em Night City, a hierarquia pode ser derrubada, mas a ausência de um governo central apenas dá espaço para novos tiranos surgirem, impondo sua própria ordem através da força."
          ]
        }
      ]
    },
    {
      name: "Scavengers (Rapineiros): O Lado Mais Sombrio do Submundo de Night City",
      borderColor: "#616161", 
      glowColor: "#757575", 
      gradient: "linear-gradient(to right, #424242, #1a1a1a)", 
      titleColorClass: "text-neutral-300",
      introduction: "Se Night City já é um lugar barra pesada, os Scavengers são o esgoto do esgoto, o lado mais repugnante e cruel do submundo. Eles não são uma gangue com ideologia ou território fixo, tipo os Valentinos ou os Tyger Claws. Na real, os Scavengers são uma rede de criminosos oportunistas e sem escrúpulos que se especializam em um dos comércios mais nojentos da cidade: o tráfico de órgãos e implantes cibernéticos humanos, muitas vezes roubados de vítimas vivas. Pensa num pesadelo de ficção científica, eles são isso.",
      sections: [
        {
          title: "Formação e a Busca por Lucro no Mercado Negro",
          content: [
            "Os Scavengers não têm uma história de fundação bonitinha, tipo \"veteranos de guerra se uniram\" ou \"comunidade oprimida se revoltou\". Eles surgiram e se espalharam como uma doença, se aproveitando do caos, da miséria e da falta de regulamentação em Night City. Num mundo onde a vida não vale quase nada e os implantes cibernéticos são caríssimos, o corpo humano se tornou uma commodity.",
            "A \"formação\" deles foi mais um processo natural de oportunismo:",
            "Colapso Social: Com tanta gente na lona por causa das guerras corporativas, desemprego e pobreza extrema, muita gente virou presa fácil. Os Scavengers viram aí um mercado gigantesco.",
            "Tecnologia Barata: A proliferação de tecnologia cibernética e a facilidade de obter ferramentas para \"extrair\" órgãos e implantes, mesmo que de forma rudimentar, abriu as portas pra esse tipo de crime.",
            "Falta de Lei: A NCPD (a polícia de Night City) é mais preocupada em proteger os interesses das megacorporações do que os cidadãos comuns. Isso deixou um vácuo enorme pra galera como os Scavengers agirem sem medo.",
            "Eles não têm um líder supremo ou uma estrutura rígida. São grupos pequenos e descentralizados, agindo como parasitas. Pensa neles como \"catadores\" de corpos e partes, literalmente."
          ]
        },
        {
          title: "Práticas, Ideologia (ou a Falta Dela) e a Brutalidade Diária",
          content: [
            "A ideologia dos Scavengers é simples: lucro a qualquer custo. Eles não têm código de honra, lealdade ou qualquer tipo de moral. O que importa é a grana que as partes humanas podem render no mercado negro.",
            "Suas práticas são um show de horrores:",
            "Caça Humana: Eles caçam pessoas nas ruas, especialmente as mais vulneráveis – sem-teto, viciados, imigrantes, qualquer um que não fará falta ou não será procurado. Podem ser disfarçados de taxistas, entregadores, ou simplesmente emboscando suas vítimas.",
            "Extração Brutal: A \"extração\" de órgãos e implantes é feita de forma amadora e violenta, muitas vezes com a vítima ainda viva e consciente. Eles não se preocupam com a vida ou a saúde da vítima, só em conseguir as partes intactas.",
            "Tráfico no Mercado Negro: Os órgãos e implantes roubados são vendidos para clínicas clandestinas de ripperdocs que operam sem licença, para criminosos que precisam de peças de reposição baratas, ou até para algumas corporações que fazem vista grossa.",
            "Assassinos de Aluguel: Às vezes, eles também são contratados para eliminar alvos, mas sempre com o interesse secundário de saquear o corpo da vítima.",
            "Eles são quase invisíveis na cidade. Não têm um visual marcante como os Maelstrom com seus cromos ou os Tyger Claws com suas jaquetas de neon. Eles se misturam na multidão, o que os torna ainda mais perigosos."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Com a política, os Scavengers não têm nenhum envolvimento direto. Eles não se importam com quem está no poder ou com as leis; operam à margem de tudo. São o resultado da falha do sistema, não uma força que busca mudar o sistema.",
            "Na economia, eles são 100% mercado negro.",
            "Fornecedores de Peças: Eles são os \"fornecedores\" de matéria-prima (corpos e implantes) para o comércio ilegal de cibernéticos.",
            "Conexões Clandestinas: Têm contato com ripperdocs desonestos e outros criminosos que precisam de órgãos e implantes sem fazer perguntas."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "Os Scavengers são odiados por quase todo mundo em Night City, o que significa que estão em constante conflito com várias outras gangues. Eles não se arriscam em grandes confrontos, preferindo emboscadas e ataques surpresa.",
            "Valentinos: Os Valentinos, que têm um forte senso de comunidade e proteção de seu povo, não toleram os Scavengers em seu território. Vê-los por perto significa briga na certa.",
            "Mox: As Mox, que surgiram pra proteger os mais vulneráveis, também odeiam os Scavengers e os caçam sem piedade.",
            "Barghest (Dogtown): Em Dogtown, sob o domínio de Kurt Hansen, os Scavengers são vistos como uma praga e são caçados impiedosamente pelos Barghest. Hansen não quer \"parasitas\" que não sigam suas regras no seu feudo.",
            "Nômades (Badlands): Nas Badlands, os Scavengers atacam caravanas nômades e assentamentos, tentando roubar suprimentos, veículos e, claro, pessoas. As Famílias Nômades, como os Aldecaldos, se defendem com unhas e dentes.",
            "NCPD: A NCPD até tenta prender os Scavengers, mas é tipo enxugar gelo. Como eles não têm bases fixas e operam de forma descentralizada, é difícil erradicá-los."
          ]
        },
        {
          title: "Partes e Locais Dominados (ou Frequentados)",
          content: [
            "Os Scavengers não \"dominam\" distritos como as outras gangues, porque não é o estilo deles. Eles se espalham onde há mais vulneráveis ou onde a lei é mais ausente.",
            "Heywood: Em áreas mais pobres e densamente povoadas como Wellsprings e Vista del Rey, em Heywood, eles espreitam nas sombras.",
            "Pacifica: No distrito abandonado de Pacifica, com suas construções inacabadas e a ausência quase total da NCPD, é um prato cheio para eles.",
            "Badlands: As vastas e desoladas Terras Baldias, fora de Night City, são outro lugar onde eles se escondem e atacam nômades ou viajantes.",
            "Áreas Industriais Abandonadas: Locais como o Northside Industrial District (NID) em Watson ou Rancho Coronado em Santo Domingo, com seus galpões vazios e pouca fiscalização, são ideais para seus laboratórios clandestinos e operações.",
            "Qualquer Esquina: A verdade é que um Scavenger pode estar em qualquer lugar, esperando a oportunidade perfeita."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Scavengers continuam sendo uma ameaça constante e um lembrete cruel da degradação humana em Night City. Eles são a prova de que, no fundo do poço da distopia, sempre tem algo mais podre. Sua existência é a materialização do quão barata a vida se tornou e o quão longe as pessoas vão pelo dinheiro no mundo de Cyberpunk. É um horror à espreita, sempre pronto pra te transformar em \"peças\"."
          ]
        }
      ]
    },
    {
      name: "6th Street (Sexta Rua / Seis-de-Rua): A Gangue dos \"Veteranos\" e do Orgulho Americano",
      borderColor: "#0D47A1", 
      glowColor: "#1976D2", 
      gradient: "linear-gradient(to right, #0D47A1, #B71C1C)", 
      titleColorClass: "text-white",
      introduction: "A Gangue dos Sixers é uma das maiores e mais estabelecidas gangues de Night City, e eles têm uma vibe meio \"milícia patriota\" misturada com gangue de rua. Eles se veem como os \"guardiões\" dos cidadãos comuns, especialmente nas áreas que eles consideram seu território, e têm um orgulho danado de sua herança \"americana\".",
      sections: [
        {
          title: "Formação: Honra, Patriotismo e um Gosto Amargo na Boca",
          content: [
            "A Gangue dos Sixers não nasceu do crime puro e simples, como muitas outras. A origem deles é bem peculiar e até um pouco irônica, considerando o quão quebrada Night City é:",
            "Veteranos Desiludidos: Os Sixers foram formados por um grupo de veteranos da \"Guerra de Unificação\" (ou Guerra das Corporações, como muitos chamam) que se sentiam completamente abandonados pelo governo dos NUSA (Novos Estados Unidos da América) e pelas megacorporações após o conflito. Eles lutaram, deram o sangue, e quando voltaram pra casa, não encontraram nada além de pobreza, desemprego e a promessa de um \"Sonho Americano\" que nunca chegou.",
            "A \"Sexta Rua\": O nome \"6th Street\" vem de uma rua específica em Santo Domingo onde esses veteranos se reuniam e se sentiam mais à vontade. Era o ponto de encontro deles, onde eles compartilhavam suas frustrações e a sensação de terem sido usados e descartados.",
            "Justiça com as Próprias Mãos: Sentindo que a lei e a ordem tinham falhado em Night City (e falharam mesmo, né?), eles decidiram que iriam proteger os cidadãos comuns com as próprias mãos. A ideia original era ser uma espécie de grupo de vigilantes comunitários, oferecendo proteção onde o sistema falhava.",
            "Transição para Gangue: Com o tempo, a linha entre \"vigilantes\" e \"criminosos\" ficou bem borrada em Night City. Para se manterem, para adquirir armas e recursos, e para impor sua própria \"justiça\", eles acabaram se tornando uma gangue, mas mantendo sempre um verniz de \"honra\" e \"serviço à comunidade\" que a maioria das outras gangues não tem.",
            "Eles se vestem com cores militares, usam bandanas com a bandeira americana (ou versões dela), e muitas vezes ostentam tatuagens e insígnias que remetem ao exército. São bem organizados e valorizam a hierarquia."
          ]
        },
        {
          title: "Práticas, Ideologia e o Jeito Sixer de Ser",
          content: [
            "A ideologia dos Sixers é um amálgama de patriotismo deturpado, senso de justiça e pragmatismo para sobreviver no mundo de Night City:",
            "\"Proteger o Cidadão Comum\": Eles se veem como defensores dos \"verdadeiros americanos\", aqueles que não são ricos corporativos nem grandes criminosos. Oferecem proteção para comerciantes locais, moradores de bairro e qualquer um que precise de \"segurança\" (geralmente cobrando por isso).",
            "Justiça Pessoal: Quando alguém é injustiçado em seu território, eles não esperam pela NCPD. Eles \"resolvem\" a situação à sua maneira, muitas vezes com violência e sem muita delicadeza. Eles podem ser bem brutais com quem eles consideram uma ameaça à \"sua gente\" ou ao seu território.",
            "Mercenários e Ex-Militares: Muitos Sixers ainda mantêm as habilidades militares que aprenderam. Eles aceitam contratos de segurança, fornecem \"segurança\" para eventos, e até agem como mercenários, usando suas táticas de combate de veteranos.",
            "Traficantes de Armas e Munição: Dada a sua origem militar, eles têm acesso fácil a armas e munição e são grandes distribuidores desses itens no mercado negro de Night City.",
            "Rachas e Apostas: Eles são apaixonados por veículos e corridas de rua. Organizam rachas clandestinos e apostas, e ter um carro modificado e potente é um símbolo de status entre eles.",
            "Eles não são sádicos como os Maelstrom ou os Scavengers, mas são extremamente violentos quando seu \"código\" ou seu território é ameaçado. A honra e o respeito são muito importantes para eles."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Política: Diretamente, eles não se envolvem em política em grande escala. No entanto, sua presença em certas áreas pode influenciar eleições locais, pois eles controlam o voto de seus \"protegidos\" e podem intimidar oponentes. Eles são anti-corporativos e anti-NUSA (o governo que os \"abandonou\"), mas não têm um plano de mudança de sistema, apenas de sobreviver e proteger o seu.",
            "Economia: A economia dos Sixers é baseada em:",
            "Proteção de Negócios Locais: Cobram uma \"taxa de proteção\" (vulgo extorsão) de pequenos comerciantes em seus territórios.",
            "Tráfico de Armas: São grandes fornecedores de armas, munição e equipamentos militares no mercado ilegal.",
            "Contratos de Segurança: Oferecem serviços de segurança para eventos, pessoas e empresas.",
            "Rachas e Apostas: A receita gerada por rachas de rua e apostas é significativa para eles."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "Os Sixers são uma força respeitável e, por isso, entram em conflito com quase todas as gangues, dependendo do interesse e do território:",
            "Valentinos: São rivais históricos, especialmente em Santo Domingo e Heywood, onde os territórios se cruzam. Há uma rivalidade cultural também: os Sixers com seu patriotismo americano vs. os Valentinos com sua herança latina e devoção a Santo Morte.",
            "Tyger Claws: Podem ter atritos por controle de rotas de tráfico ou pontos de interesse em áreas limítrofes, embora os Sixers não sejam tão \"nocturnos\" quanto os Tyger Claws.",
            "Maelstrom: Os Sixers veem os Maelstrom como psicopatas sem controle, e o estilo militarista dos Sixers se choca com a anarquia cibernética dos Maelstrom. Podem haver conflitos quando os Maelstrom tentam expandir para áreas mais \"organizadas\".",
            "Voodo Boys: Não há muito atrito direto, pois seus territórios são bem separados (Pacifica vs. Santo Domingo/Heywood), mas se cruzarem, a ideologia digital dos Voodo Boys e o pragmatismo \"terreno\" dos Sixers podem gerar tensão.",
            "NCPD: A polícia de Night City os vê como criminosos e tenta contê-los, mas os Sixers são bem difíceis de erradicar devido à sua organização e apoio (ainda que relutante) de parte da população."
          ]
        },
        {
          title: "Partes e Locais Dominados na Cidade",
          content: [
            "Os Sixers são mais fortes e dominam principalmente em:",
            "Santo Domingo: Este é o coração do território Sixer. Eles controlam grande parte dos bairros residenciais e industriais leves aqui, como Rancho Coronado e Arroyo. A atmosfera militarista e de \"comunidade\" é forte.",
            "Heywood (partes de Vista del Rey e Wellsprings): Em Heywood, especialmente nas áreas mais pobres e residenciais, eles competem com os Valentinos pelo controle.",
            "Distritos Industriais: Por terem muitos veteranos e acesso a veículos, eles se sentem à vontade em áreas industriais e portuárias, usando galpões para suas operações de contrabando ou como oficinas de veículos.",
            "Eles não têm um \"quartel-general\" grandioso como a fortaleza dos Maelstrom, mas sim vários esconderijos, arsenais e \"clubes\" que servem como pontos de encontro e operação. Seus carros são facilmente reconhecíveis: Muscle cars americanos, picapes e caminhonetes customizadas com pintura camuflada, emblemas patrióticos e armas visíveis."
          ]
        },
        {
          title: "O Estado Atual em 2077",
          content: [
            "Em 2077, os Sixers são uma força a ser reconhecida em Night City. Eles não são os mais \"fashion\" ou os mais \"cibernéticos\", mas sua disciplina militar, sua paixão por armas e veículos, e seu senso (distorcido) de \"justiça\" os tornam uma gangue perigosa e influente, especialmente para quem vive nas áreas que eles consideram \"suas\". Eles são um retrato bem interessante de como o patriotismo pode se transformar em algo bem diferente em um futuro distópico."
          ]
        }
      ]
    },
    {
      name: "The Animals (Os Animais): Força Bruta, Músculos e Narcotráfico",
      borderColor: "#FFB700", 
      glowColor: "#FFB700", 
      gradient: "linear-gradient(to right, #FFB700, #FFFFFF)", 
      titleColorClass: "text-black",
      introduction: "Os Animals são a personificação da força física bruta em Night City. Esqueça cromo e implantes cibernéticos super avançados para combate. Essa gangue aposta na força muscular extrema, aprimorada por esteroides de ponta e um estilo de vida focado em ser o ápice da força humana. Eles são os gorilas do submundo, os \"muscleheads\" bombados de Night City.",
      sections: [
        {
          title: "Formação: A Busca pela Força Perfeita",
          content: [
            "A formação dos Animals não tem a ver com política ou ideologia, mas com a busca pela supremacia física e uma rejeição à dependência excessiva de cromo e tecnologia.",
            "A \"Filosofia\" da Força: No mundo de Cyberpunk, onde todo mundo tem algum tipo de implante, os Animals se destacam por focar no desenvolvimento muscular \"natural\" (com muitas aspas, porque eles usam e abusam de esteroides e outros produtos químicos). Eles acreditam que a verdadeira força vem do corpo, não de peças de metal.",
            "Rejeição ao Cromo Excessivo: Embora usem alguns implantes para aumentar a resistência e a dor (como as luvas Gorilla Arms, que são a cara deles), eles evitam cromo extenso que possa substituir tecidos orgânicos ou viciá-los em atualizações. Para eles, muitos implantes te deixam \"fraco\" e dependente de tecnologia externa.",
            "Academias e Clubes de Luta: A gangue se formou em academias clandestinas e clubes de luta onde a força era cultuada. Começou com atletas que queriam ir além do limite humano, mas que o esporte legal não permitia, e logo se espalhou para as ruas.",
            "Líderes Carismáticos e Fortes: A gangue é liderada por figuras incrivelmente fortes e carismáticas, que são o exemplo máximo da filosofia dos Animals. Sasquatch, por exemplo, é uma figura imponente que representa a ferocidade e a força deles.",
            "Eles são facilmente reconhecíveis pelo tamanho GIGANTE, músculos saltados, veias aparentes, e geralmente usam roupas que expõem seus corpos trabalhados. A maioria tem cicatrizes e tatuagens que simbolizam sua força e lealdade."
          ]
        },
        {
          title: "Práticas, Ideologia e a Brutalidade dos Animais",
          content: [
            "A ideologia dos Animals é bem direta: força bruta e domínio físico. Eles respeitam a força acima de tudo e desprezam a fraqueza.",
            "Combate Corpo a Corpo: São mestres no combate desarmado e armado com armas brancas pesadas, como bastões, martelos e seus famosos \"Gorilla Arms\". Eles preferem esmagar seus oponentes de perto.",
            "Tráfico de Esteroides e Drogas de Aumento: Essa é a principal fonte de renda e o que mantém seus músculos e os de seus clientes. Eles traficam \"Juice\" (esteroides superpotentes), \"Chimera\" (uma droga que aumenta a resistência e diminui a dor) e outras substâncias que aumentam o desempenho físico.",
            "Segurança de Clubes e Redutos: Muitos deles trabalham como seguranças, especialmente em clubes de luta, academias e casas noturnas onde a força física é um requisito. Onde os Animals estão, a segurança é garantida pela ameaça de uma surra épica.",
            "Lutas Clandestinas: Organizam e participam de lutas clandestinas e rachas de força bruta, atraindo apostadores e mostrando sua superioridade física.",
            "Testes de Força: Eles estão sempre buscando testar seus limites e provar quem é o mais forte. Isso pode envolver desafios físicos extremos ou simplesmente espancar qualquer um que cruze seu caminho.",
            "Eles não são sádicos de carteirinha, mas são incrivelmente violentos e impiedosos em um confronto. Se você os desafiar fisicamente, prepare-se para ser pulverizado."
          ]
        },
        {
          title: "Envolvimento com Política e Economia",
          content: [
            "Política: Os Animals têm zero interesse em política. Eles não ligam para o governo, corporações ou quem manda na cidade. Seu foco é no próprio corpo, na força, e no domínio do seu \"pedaço\". São apolíticos nesse sentido.",
            "Economia: Sua economia gira em torno de:",
            "Narcotráfico: Principalmente esteroides e drogas de aumento de desempenho, como o \"Juice\". Isso é o que os financia e os mantém grandes.",
            "Serviços de Segurança: Prestam segurança para quem precisa de proteção pesada, geralmente de estabelecimentos que não querem problemas com outras gangues.",
            "Clubes de Luta e Apostas: Ganham dinheiro com a organização de eventos de luta e as apostas envolvidas.",
            "Roubo e Extorsão: Embora não sejam a principal fonte de renda, eles não hesitam em usar a força para roubar ou extorquir quando necessário."
          ]
        },
        {
          title: "Conflitos e Disputas Notórias",
          content: [
            "Por serem tão focados em território e força, os Animals frequentemente se chocam com outras gangues e facções em Night City:",
            "Voodo Boys: Essa é a maior e mais famosa rivalidade. Os Animals e os Voodo Boys disputam o controle de Pacifica. Os Voodo Boys querem controlar o ciberespaço e as comunidades de netrunners, enquanto os Animals dominam os clubes e a segurança física. Eles são oponentes diretos e a tensão entre eles é palpável.",
            "Tyger Claws: Em Westbrook e Japantown, os Animals podem ter atritos com os Tyger Claws, especialmente quando se trata de clubes noturnos, bares e boates. Os Tyger Claws dominam a parte mais \"glamourosa\" da noite, enquanto os Animals buscam o controle da \"força bruta\" e da segurança desses locais.",
            "Valentinos: Menos frequente, mas pode haver conflitos em áreas limítrofes de Heywood ou Santo Domingo, onde ambos buscam expandir sua influência.",
            "NCPD: A polícia de Night City os vê como criminosos perigosos devido à sua força e ao tráfico de drogas, mas geralmente evitam confrontos diretos, a menos que tenham um bom plano e reforços, pois os Animals são brutalmente eficazes em combate.",
            "Mox: Os Mox podem entrar em conflito com os Animals se a segurança de clubes ou a proteção de pessoas vulneráveis estiverem em jogo, mas não é uma rivalidade tão central quanto com os Voodo Boys."
          ]
        },
        {
          title: "Partes e Locais Dominados na Cidade",
          content: [
            "Os Animals têm uma presença muito forte em:",
            "Pacifica: Este é o reduto principal dos Animals. Eles dominam os clubes, as academias, e muitas das ruas de Pacifica, especialmente Grand Imperial Mall e o GIM. Eles se aproveitaram do abandono de Pacifica para construir sua base de poder.",
            "Westbrook (especialmente Japantown): Em algumas áreas de Japantown, eles se misturam com a cena noturna, trabalhando como seguranças em boates ou operando clubes de luta clandestinos.",
            "Academias e Ginásios Clandestinos: Por toda Night City, há \"academias\" e \"ginásios\" secretas que servem como centros de treinamento e pontos de encontro dos Animals, onde eles treinam, usam suas drogas de aumento e fazem seus negócios.",
            "Eles não constroem grandes impérios visíveis, mas seu poder está na força bruta e na capacidade de controlar os locais onde a força física é primordial."
          ]
        }
      ]
    },
  ];

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
            <Card className="shadow-xl border-2 border-accent rounded-lg overflow-hidden">
              <CardHeader className="bg-card-foreground p-6">
                <CardTitle className="font-headline text-3xl sm:text-4xl text-center text-primary">O Submundo em Ação</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground text-center text-base sm:text-lg leading-relaxed">
                  {mainIntro}
                </p>
              </CardContent>
            </Card>

            {gangs.map((gang, index) => (
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

