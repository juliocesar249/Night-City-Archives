
export interface CorporationSection {
  title: string;
  content: string[];
}

export interface Corporation {
  name: string;
  introduction: string;
  sections: CorporationSection[];
  headerBackgroundColor: string;
  accentColor: string;
}

export const corporations: Corporation[] = [
  {
    name: "Arasaka: O Império do Aço, do Dinheiro e da Informação",
    introduction: "A Arasaka é, sem sombra de dúvidas, a megacorporação mais poderosa e influente do mundo em 2077, rivalizando apenas com a Militech. Mas, enquanto a Militech é focada em poderio militar \"tradicional\", a Arasaka é um monstro tentacular que domina segurança, serviços bancários, manufatura e, acima de tudo, informação e controle. Pensa numa corporação que é quase um país, com seu próprio exército, bancos e leis. É a Arasaka.",
    headerBackgroundColor: "#000000",
    accentColor: "#FF0000",
    sections: [
      {
        title: "História e Formação: Do Samurai ao Megalomaníaco",
        content: [
          "A história da Arasaka é longa e sangrenta, começando muito antes da loucura de Night City:",
          "Fundação Pós-Guerra Mundial (1915): A Arasaka começou, acredite se quiser, como uma empresa familiar de manufatura no Japão, fundada por Sasai Arasaka após a Primeira Guerra Mundial. Era uma empresa de médio porte, focada em produtos industriais.",
          "O Gênio Sombrio de Saburo Arasaka (Pós-Segunda Guerra Mundial): O verdadeiro salto da corporação aconteceu com a ascensão de Saburo Arasaka. Um jovem e brilhante piloto da Força Aérea Japonesa durante a Segunda Guerra Mundial, Saburo foi forçado a abater um avião americano que estava bombardeando sua cidade natal. Essa experiência traumática o convenceu de que \"armas e poder não são o suficiente; o que importa é quem controla os meios de produção\".",
          "Visão de Controle Total: Após a guerra, Saburo assumiu os negócios da família e começou a transformá-la. Sua visão era criar uma corporação que fosse a garantia da segurança do Japão (e, eventualmente, do mundo) através do controle da economia, da informação e da força. Ele acreditava que só assim a humanidade sobreviveria à sua própria autodestruição. Uma visão de paz imposta à força, basicamente.",
          "Expansão Agressiva: Ele expandiu a Arasaka para segurança corporativa, serviços bancários e, crucialmente, manufatura de armas e veículos. Ele era um mestre em guerra corporativa, usando espionagem, sabotagem e até assassinatos para eliminar concorrentes e adquirir ativos.",
          "A \"Era de Ouro\" e a Consolidação (Século XXI): A Arasaka cresceu exponencialmente, com seu poder se estendendo para todos os cantos do globo. Eles se tornaram a maior provedora de segurança privada do mundo, seus bancos eram os mais seguros (e discretos) e seus produtos eletrônicos e de veículos eram de ponta. Eles estavam envolvidos em tudo, de pesquisa genética a projetos espaciais."
        ]
      },
      {
        title: "Conflitos Envolvidos: As Guerras Corporativas",
        content: [
          "A Arasaka está no centro de quase todos os grandes conflitos do universo Cyberpunk:",
          "Guerra da América Central (2000s): Mesmo antes das grandes Guerras Corporativas, a Arasaka já estava fornecendo equipamentos e \"assessoria\" (leia-se, mercenários) para conflitos menores.",
          "A Primeira Guerra Corporativa (2000s): Contra a EBM, por exemplo, a Arasaka já mostrava sua força militar.",
          "A Segunda Guerra Corporativa (2020s): Envolvendo a Arasaka contra a CINO.",
          "A Quarta Guerra Corporativa (2070s): Esta é a mais importante e brutal, envolvendo a Arasaka vs. Militech. Foi uma guerra total que devastou partes dos EUA e deixou Night City marcada para sempre.",
          "Motivos: A guerra começou por disputas de território, patentes de tecnologia (especialmente em milícias e cibernéticos) e controle de rotas de transporte. Foi uma escalada de agressões que culminou em ataques abertos e terrorismo corporativo.",
          "A Bomba de Night City (2023): O clímax da Quarta Guerra Corporativa em Night City foi o ataque nuclear na Arasaka Tower. Johnny Silverhand, Alt Cunningham e Rogue lideraram um ataque para tentar roubar ou destruir o Soulkiller. O plano deu errado, a bomba explodiu (acidentalmente, ou não, dependendo de quem você pergunta) e destruiu grande parte do centro da cidade.",
          "Consequências: A Arasaka sofreu um golpe pesado em sua reputação e ativos nos EUA, mas se reergueu com uma vingança. A guerra foi oficialmente \"encerrada\" com o Tratado de Arasaka, assinado em 2070, que \"proibia\" a Arasaka de operar em solo americano, mas que foi ignorado e burlado de diversas formas. Em 2077, eles estão de volta em peso."
        ]
      },
      {
        title: "Influência Política e Econômica: O Verdadeiro Poder",
        content: [
          "A Arasaka não é apenas uma empresa; é uma força política e econômica global que rivaliza com nações.",
          "Lobby e Corrupção: Eles exercem influência massiva em governos de todo o mundo através de lobby pesado, subornos, chantagem e, quando necessário, eliminação de oponentes. Eles podem derrubar economias inteiras ou regimes políticos se for do seu interesse.",
          "Serviços Bancários Globais: Os bancos Arasaka são os mais seguros e confiáveis, o que significa que eles controlam uma fatia enorme das finanças globais. Eles sabem quem tem dinheiro, onde está e como se move. Essa é uma fonte de poder imensa.",
          "Monopólio da Segurança: Com seu exército privado (o \"Arasaka Security\" ou \"Arasaka Red Hats\") e sua tecnologia de segurança avançada, eles são a principal opção para governos e corporações que precisam de proteção de alto nível. Isso lhes dá acesso a informações privilegiadas e a capacidade de intervir em qualquer lugar.",
          "Tecnologia e Patentes: A Arasaka investe pesado em pesquisa e desenvolvimento, controlando patentes cruciais em robótica, IA, ciberware e biotecnologia.",
          "Propaganda e Mídia: Eles controlam redes de mídia e usam propaganda para moldar a opinião pública e proteger sua imagem."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A família Arasaka é o centro de tudo:",
          "Saburo Arasaka: O fundador e CEO da Arasaka em 2077. Um homem com mais de 150 anos (graças a tecnologia avançada e transferências de corpo), ele é um gênio implacável e megalomaníaco, obcecado com controle e legado. Ele comanda a empresa com mão de ferro e é o cérebro por trás da filosofia \"não há substituto para a Arasaka\".",
          "Yorinobu Arasaka: Filho de Saburo. Ele é o herdeiro aparente, mas tem uma relação conturbada com o pai. Querendo sair da sombra de Saburo e farto da moralidade questionável da corporação, Yorinobu tentou se afastar, mas foi puxado de volta. Ele é mais impulsivo e menos calculista que o pai.",
          "Hanako Arasaka: Filha de Saburo e irmã de Yorinobu. Ela é mais alinhada com a visão de Saburo e é uma figura política e socialmente influente dentro da corporação. Muito mais calma e estratégica que Yorinobu.",
          "Goro Takemura: Um ex-guarda-costas pessoal de Saburo e um samurai corporativo com um código de honra rígido. Embora não seja da família, ele é um dos mais leais e importantes executivos da Arasaka.",
          "Dexter DeShawn (Indiretamente): Embora não seja da Arasaka, o roubo do biochip com o engrama de Saburo Arasaka (que ele queria vender) é o ponto de partida para a história de V em Cyberpunk 2077, mostrando a importância dos segredos da Arasaka."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Arasaka é uma máquina gigantesca, hierárquica e extremamente disciplinada, como um exército (o que ela é, em muitos aspectos):",
          "A Família no Topo: A família Arasaka, especialmente Saburo, está no controle absoluto. Suas decisões são lei.",
          "Conselho de Executivos: Abaixo da família, há um conselho de executivos de alto nível, chefes de divisões e conselheiros. São os que implementam as diretrizes e gerenciam as operações globais.",
          "Divisões (Departamentos): A Arasaka é dividida em inúmeros departamentos, cada um com sua especialidade:",
          "Arasaka Security (Arasaka Armored Division): O exército privado da corporação, com soldados de elite, veículos militares e tecnologia de ponta. São os \"Red Hats\".",
          "Arasaka Bank: Responsável por toda a operação financeira, gerenciando bilhões em ativos e informações de clientes.",
          "Arasaka Cybernetics: Pesquisa e desenvolvimento de implantes cibernéticos, desde próteses médicas até ciberware militar.",
          "Arasaka Software/NetSec: Especializada em software, segurança de rede e guerra cibernética. Eles são mestres em coleta de dados e espionagem.",
          "Arasaka Manufacturing: Produção de tecnologia, veículos, armamentos e eletrônicos.",
          "Arasaka Legal: A equipe jurídica que protege a corporação de qualquer ação legal, muitas vezes através de táticas agressivas e intimidação.",
          "Religação da Alma (Soulkiller/Mikoshi): Essa é uma das divisões mais secretas e cruciais. Responsável pela tecnologia de digitalização e armazenamento de consciências humanas (engramas). É o ápice do poder da Arasaka, pois permite a \"imortalidade\" e o controle sobre a existência de outros.",
          "Lealdade e Subordinação: A lealdade à Arasaka é exigida acima de tudo. Falha é inaceitável e punida severamente. A cultura corporativa é de devoção à família e à corporação.",
          "Espionagem Interna: A Arasaka é tão paranóica que há constante vigilância e espionagem interna entre os próprios funcionários para garantir lealdade e evitar vazamentos."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A Arasaka é, de longe, a corporação com a maior presença e influência em Night City:",
          "City Center (Centro da Cidade): É o coração da Arasaka em Night City. A imponente Arasaka Tower domina o horizonte (mesmo com a cicatriz da bomba de 2023). A maioria dos escritórios executivos, data centers e instalações de pesquisa avançada estão aqui.",
          "Corpo Plaza: A área ao redor da Arasaka Tower, cheia de arranha-céus corporativos, é basicamente um feudo da Arasaka, com segurança militar e presença ostensiva.",
          "Japantown (Westbrook): Por ter sua origem no Japão e a maioria de seus funcionários de alto escalão sendo japoneses, a Arasaka tem uma forte influência cultural e econômica em Japantown. Muitos de seus funcionários e executivos vivem ou frequentam a área.",
          "Serviços de Segurança em Toda a Cidade: Se você vê segurança privada de alto nível em qualquer lugar de Night City, há uma boa chance de ser Arasaka Security. Eles estão presentes em portos, aeroportos, corporações menores e até em áreas residenciais de luxo."
        ]
      }
    ]
  },
  {
    name: "Militech: A Máquina de Guerra Americana e o Símbolo do Poder Militar",
    introduction: "A Militech é a maior e mais poderosa corporação militar dos Novos Estados Unidos da América (NUSA) e uma das maiores do mundo, rivalizando apenas com a Arasaka. Enquanto a Arasaka é o poder da informação e da segurança onipresente, a Militech é a guerra em si. Eles fabricam tudo que mata: armas, veículos militares, blindagens, drones, mercenários e até estratégias de combate. São a personificação do complexo militar-industrial.",
    headerBackgroundColor: "#000000",
    accentColor: "#F7FF00",
    sections: [
      {
        title: "História e Formação: Do Sonho de Guerra à Guerra como Negócio",
        content: [
          "A Militech tem raízes profundas na história militar americana:",
          "Pós-Guerra Fria (Início do Século XXI): A empresa, em sua forma inicial, surgiu de empresas de defesa americanas que se capitalizaram com o fim da Guerra Fria e a crescente privatização de conflitos. A ideia era fornecer tecnologia e mão de obra militar para governos e corporações que não queriam ou não podiam manter seus próprios exércitos gigantes.",
          "A Era das Guerras Corporativas: Com o aumento das tensões entre corporações e a diminuição da capacidade dos governos de manter a paz, a demanda por serviços militares privados explodiu. A Militech se posicionou como a principal fornecedora.",
          "O \"Poderio Americano\": Diferente da Arasaka que tem raízes japonesas, a Militech se orgulha de sua herança e serve como o braço armado dos NUSA, sendo a espinha dorsal de sua política externa e interna. Eles são os principais contratados do governo americano."
        ]
      },
      {
        title: "Conflitos Envolvidos: Protagonista em Quase Todas as Guerras",
        content: [
          "A Militech está no centro de quase todos os grandes conflitos que assolaram o mundo de Cyberpunk:",
          "Guerras Corporativas Menores: Antes da grande guerra, a Militech já estava envolvida em conflitos de baixa intensidade, fornecendo armas e mercenários para disputas de patentes e recursos em todo o globo.",
          "Guerra da América Central (2000s): Foi um dos primeiros grandes palcos para a Militech testar e provar seus equipamentos e táticas em grande escala.",
          "Guerras de Unificação (2060s): Crucialmente, a Militech foi a principal fornecedora militar para os NUSA (Novos Estados Unidos da América) em sua campanha para reunificar os estados seccionistas. Foi durante essas guerras que eles se consolidaram como o braço militar oficial do governo. Eles têm um poder imenso sobre o exército americano.",
          "A Quarta Guerra Corporativa (2070s): Este é o conflito mais importante e brutal da história da Militech, colocando-a diretamente contra sua arqui-inimiga, a Arasaka.",
          "Motivos: A guerra começou por disputas de território, patentes de tecnologia (especialmente em armas e ciberware militar), controle de rotas de transporte e, acima de tudo, o controle do governo dos NUSA e a influência global.",
          "Eventos em Night City (2023): Night City foi um campo de batalha crucial. A Militech atacou instalações da Arasaka na cidade, culminando no evento da Bomba na Arasaka Tower. Embora a Arasaka Tower tenha sido explodida, a bomba foi detonada por um ataque liderado por Johnny Silverhand (que tinha um acordo com a Militech para atacar o datacore da Arasaka), e não diretamente pela Militech. No entanto, a corporação se beneficiou do caos e da fraqueza temporária da Arasaka nos EUA.",
          "O Tratado de Arasaka (2070): Oficialmente, a guerra terminou com este tratado, que \"proibia\" a Arasaka de operar em solo americano. Isso foi uma grande vitória para a Militech, que se tornou a fornecedora militar quase exclusiva dos NUSA e consolidou seu domínio sobre a defesa americana. Em 2077, eles são o braço armado do governo."
        ]
      },
      {
        title: "Influência Política e Econômica: O Arsenal do Estado",
        content: [
          "A Militech não apenas vende armas; ela é o arsenal dos NUSA, e isso lhe dá um poder político e econômico sem precedentes:",
          "Lobby Governamental Massivo: Eles têm um lobby absurdamente poderoso no governo dos NUSA. Praticamente toda a política de defesa e segurança do país é influenciada pela Militech. Eles ajudam a escrever as leis, decidem quais armas serão compradas e como as forças armadas serão empregadas.",
          "Contratos de Bilhões: São os maiores beneficiários de contratos militares do governo. Cada bala, cada tanque, cada míssil, cada drone, provavelmente tem o selo da Militech.",
          "\"Porta Giratória\": Ex-generais e oficiais de alto escalão do exército dos NUSA frequentemente são contratados pela Militech após a aposentadoria, e vice-versa. Isso cria uma simbiose entre a corporação e o governo.",
          "Poder de Influência Global: Além dos NUSA, a Militech vende armas e serviços para muitos outros países e corporações menores, aumentando sua influência em conflitos regionais e mantendo o status quo militar.",
          "Pesquisa e Desenvolvimento (P&D): Eles investem rios de dinheiro em P&D para criar a próxima geração de armas e tecnologia militar, garantindo que sempre terão os equipamentos mais avançados do mercado. Isso inclui inteligência artificial para drones, veículos autônomos de combate e armamentos de energia."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "Presidente da Militech (Vários ao longo da história): A liderança da Militech é composta por ex-militares e executivos agressivos, focados em expandir o poder e o lucro da corporação. Seus nomes mudam, mas a filosofia permanece a mesma.",
          "General Lunaris: Uma figura de alto escalão que representa o poder militar e a mentalidade agressiva da Militech.",
          "Agentes de Campo de Alto Nível: Como Meredith Stout (em Cyberpunk 2077), são agentes executivos que lidam com operações de campo, negociações e inteligência, mostrando o lado mais \"tático\" da corporação."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Militech é organizada como um exército altamente eficiente e compartimentado, com uma disciplina e hierarquia rígidas:",
          "Conselho de Administração/CEO: No topo, um conselho de ex-militares e CEOs que ditam a estratégia global da corporação.",
          "Divisões Militares e de P&D:",
          "Militech Arms Division: Produção de armas de fogo, explosivos, munição e armamento pesado.",
          "Militech Armored Vehicles: Desenvolve e fabrica tanques, APCs, jatos de combate, helicópteros e veículos militares terrestres.",
          "Militech Cybernetics: Focada em ciberware militar, como implantes de combate, sistemas de mira avançados e reforços para soldados.",
          "Militech Robotics & AI: Desenvolve drones de combate, robôs de segurança e inteligência artificial para sistemas de armas.",
          "Militech Mercenary Division: Fornece tropas de elite, treinamento e especialistas em guerra para qualquer um que possa pagar. São os \"Blackwater\" do mundo Cyberpunk.",
          "P&D (Pesquisa e Desenvolvimento): Departamentos ultra-secretos que desenvolvem as tecnologias militares mais avançadas e letais.",
          "Hierarquia Militar: Dentro de cada divisão, a estrutura é militarizada, com patentes, cadeias de comando e disciplina rigorosa.",
          "Segurança e Contra-Inteligência: Eles mantêm uma equipe robusta de segurança interna e contra-inteligência para proteger seus segredos e neutralizar ameaças (internas e externas). Vazamento de informações na Militech é um convite à morte.",
          "Cultura de Eficiência e Resultado: A cultura é focada em resultados, lealdade à corporação e à \"missão\". Não há espaço para emoções."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A Militech não tem uma \"torre\" central como a Arasaka em Night City, mas sua influência é sentida em toda parte:",
          "Distritos Industriais e Portuários: Eles têm grandes instalações de armazenamento, hangares e depósitos em áreas como Northside Industrial District (Watson) e Rancho Coronado (Santo Domingo), onde armazenam armas, veículos e equipamentos.",
          "Badlands: A vasta e desolada região das Terras Baldias fora de Night City é um playground para a Militech. Eles realizam testes de armamento, treinos militares e patrulham para proteger seus interesses (como minas ou rotas de transporte). É comum ver comboios e bases temporárias da Militech aqui.",
          "Qualquer Conflito Armado: Onde quer que haja um tiroteio sério ou uma operação militar em Night City, você provavelmente vai ver veículos e mercenários da Militech, seja para proteção de clientes ou para \"limpar\" a bagunça em nome dos NUSA.",
          "Embaixada dos NUSA: A Militech tem uma forte presença de segurança e pessoal de contato na embaixada dos NUSA no City Center, atuando como o braço militar do governo."
        ]
      }
    ]
  },
  {
    name: "Kang Tao: A Ascensão do Dragão e o Domínio das Armas Inteligentes",
    introduction: "A Kang Tao é uma megacorporação de origem chinesa que emergiu como uma das principais forças no cenário global de armas e segurança em 2077. Diferente da Militech (força bruta) e da Arasaka (segurança onipresente), a Kang Tao se especializa em um tipo muito particular de armamento: armas inteligentes e tecnologia avançada de reconhecimento. Eles representam o poder e a sofisticação da indústria bélica asiática em ascensão.",
    headerBackgroundColor: "#000000",
    accentColor: "#D97400",
    sections: [
      {
        title: "História e Formação: Da Manufatura Humilde à Inovação Letal",
        content: [
          "A história da Kang Tao é um exemplo clássico de como uma empresa pode escalar rapidamente no cenário de guerra corporativa através de um nicho de mercado bem explorado:",
          "Pós-Guerra Fria/Início do Século XXI (China): A Kang Tao começou como uma empresa chinesa de manufatura, inicialmente focada em eletrônicos e componentes de defesa de baixo custo. Eles não eram um gigante militar de cara, mas eram eficientes e tinham um bom mercado local.",
          "Aposta em Tecnologia de Ponta (Foco em Armas Inteligentes): O grande salto da Kang Tao veio quando eles investiram pesado em pesquisa e desenvolvimento de armas inteligentes. Enquanto outras corporações se concentravam em poder de fogo bruto ou implantes cibernéticos, a Kang Tao previu que o futuro da guerra estaria na precisão, na automação e na integração de sistemas.",
          "Sistemas de Miras Assistidas: Eles foram pioneiros em armas com sistemas de mira assistida que podiam travar em múltiplos alvos, desviar de obstáculos e até disparar projéteis ricocheteantes.",
          "Drones de Combate Avançados: Seus drones eram mais ágeis e autônomos que os da concorrência, com capacidades de reconhecimento facial e análise de padrões de movimento.",
          "Reconhecimento e Vigilância: A tecnologia de vigilância da Kang Tao se tornou de primeira linha, usando algoritmos avançados para identificar e rastrear indivíduos em tempo real.",
          "Ascensão Global (Décadas de 2060 e 2070): Com a Quarta Guerra Corporativa e a necessidade de novas soluções militares, a Kang Tao viu sua demanda explodir. Países e corporações que não queriam depender apenas da Arasaka ou Militech buscaram a tecnologia chinesa. Eles se tornaram o fornecedor preferencial para quem buscava um diferencial tecnológico."
        ]
      },
      {
        title: "Conflitos Envolvidos: Uma Atriz Coadjuvante de Peso",
        content: [
          "A Kang Tao não foi uma das principais combatentes na Quarta Guerra Corporativa (Arasaka vs. Militech), mas atuou como uma fornecedora crucial para ambos os lados (e para outros jogadores) e, muitas vezes, tirou proveito da rivalidade.",
          "Venda para Ambos os Lados: Durante a Quarta Guerra Corporativa, a Kang Tao vendeu suas armas inteligentes para quem pudesse pagar, seja a Militech ou a Arasaka, e até para governos menores ou facções. Isso lhes deu enorme lucro e experiência em campo.",
          "Conflitos em Regiões Disputadas: Eles estão sempre envolvidos em conflitos menores e regionais onde sua tecnologia pode dar uma vantagem decisiva. Por exemplo, podem ser contratados para pacificar áreas com grupos rebeldes ou para proteger ativos valiosos.",
          "Guerra Tecnológica Silenciosa: A verdadeira batalha da Kang Tao é no campo da inovação. Eles estão em uma \"guerra fria\" tecnológica com a Militech e a Arasaka, tentando superá-las em patentes, pesquisa e desenvolvimento de armamentos."
        ]
      },
      {
        title: "Influência Política e Econômica: O Dragão da Tecnologia Militar",
        content: [
          "A Kang Tao é uma das grandes potências econômicas e políticas globais, especialmente no que tange a defesa e segurança asiática:",
          "Apoio do Governo Chinês: Eles têm um forte apoio e laços estreitos com o governo chinês, que os vê como um símbolo do poder e da inovação tecnológica da China. Isso lhes dá acesso a recursos e mercados exclusivos.",
          "Exportadora de Armas Líder: A Kang Tao é uma das principais exportadoras de armas e tecnologia de segurança para países asiáticos e para qualquer um que esteja cansado de depender dos gigantes ocidentais.",
          "Inteligência e Vigilância: Sua tecnologia de reconhecimento facial e vigilância é valiosa para governos autoritários e corporações que buscam controle. Eles oferecem pacotes completos de monitoramento e controle de população.",
          "Crescimento Financeiro: A demanda por suas armas inteligentes e sistemas de segurança é constante, impulsionando um crescimento financeiro massivo."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A Kang Tao não tem uma figura tão icônica como Saburo Arasaka, pois sua cultura é mais focada na excelência tecnológica e na eficiência.",
          "Liderança de Engenheiros/Cientistas: Muitos de seus líderes e executivos são engenheiros, cientistas e estrategistas militares que vieram da pesquisa e desenvolvimento.",
          "Líderes de Operações Focadas: Pessoas como Maiko Maeda (que, embora esteja ligada aos Tyger Claws, tem contatos com a Kang Tao para suprimentos) indicam que a Kang Tao opera através de intermediários e contatos estratégicos para distribuir seus produtos e serviços."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Kang Tao é organizada de forma mais corporativa e tecnocrática, com grande ênfase em P&D e logística:",
          "Foco em P&D e Engenharia: As divisões de Pesquisa e Desenvolvimento (P&D) e Engenharia são o coração da Kang Tao. É aqui que as inovações são criadas e testadas. Eles contratam os melhores engenheiros e cientistas do mundo.",
          "Produção de Armas: Uma vasta rede de fábricas altamente automatizadas produz suas armas e sistemas de segurança em massa.",
          "Divisão de Segurança/Milícia: Embora não sejam tão grandes quanto a Militech, a Kang Tao tem suas próprias forças de segurança, equipadas com seus armamentos inteligentes, para proteção de ativos e operações específicas.",
          "Vendas e Marketing Global: Uma equipe agressiva de vendas e marketing que busca novos mercados e contratos em todo o mundo.",
          "Serviços de Vigilância e Dados: Uma divisão especializada em coletar, analisar e vender dados de inteligência e vigilância para governos e corporações.",
          "Hierarquia Baseada em Mérito: A hierarquia é mais baseada em mérito e competência técnica do que em linhagem familiar (como a Arasaka) ou antiguidade militar (como a Militech). Quem inova e entrega resultados sobe na empresa.",
          "Cultura de Inovação e Discrição: Eles operam com uma mistura de agressividade no mercado e discrição em suas operações. Não são tão ostentosos quanto a Arasaka."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A Kang Tao não tem uma presença física tão dominante quanto a Arasaka ou a Militech em Night City, mas sua influência é sentida através de seus produtos e parceiros:",
          "Japantown (Westbrook): Por ser um grande polo de cultura asiática e de tecnologia, a Kang Tao tem escritórios de representação e armazéns em Japantown. Muitos de seus clientes e intermediários estão aqui.",
          "Heywood (Especialmente Vista del Rey e Wellsprings): Em áreas de Night City onde o crime e a necessidade de proteção são altos, as armas da Kang Tao são populares entre as gangues e os cidadãos que podem pagar por armamento de qualidade.",
          "Distritos Industriais: Como NID (Watson) e Rancho Coronado (Santo Domingo), onde há armazéns e pontos de distribuição de suas armas.",
          "Mercado Negro: As armas da Kang Tao são altamente valorizadas no mercado negro devido à sua qualidade e tecnologia avançada."
        ]
      }
    ]
  },
  {
    name: "Petrochem: O Império Líquido da Energia e dos Produtos Essenciais",
    introduction: "A Petrochem é uma megacorporação global especializada em petróleo, produtos químicos e energia. Ela é o pilar invisível da economia de Night City e do mundo. Enquanto outras corporações brigam por controle de armas e informação, a Petrochem controla a fonte de tudo: combustíveis, plásticos, fertilizantes, produtos farmacêuticos e até mesmo a água potável em muitas regiões. Pensa neles como a \"OPEP do futuro\", só que muito mais poderosa e com o próprio exército.",
    headerBackgroundColor: "#000000",
    accentColor: "#FFFFFF",
    sections: [
      {
        title: "História e Formação: Do Ouro Negro ao Domínio da Vida",
        content: [
          "A Petrochem tem uma história que se mistura com a própria história da indústria de petróleo e química do século XX, mas com um toque de distopia:",
          "Raízes no Século XX: A Petrochem surgiu da fusão e aquisição de grandes empresas de petróleo e química dos séculos XX e XXI. Ela consolidou o controle sobre vastos recursos naturais, incluindo os últimos poços de petróleo significativos e as tecnologias de refino.",
          "Crise Energética e Monopólio: Com o esgotamento dos recursos naturais e as crescentes crises energéticas do século XXI, a Petrochem se tornou uma entidade indispensável. Eles foram os que conseguiram otimizar a extração e o processamento de combustíveis sintéticos e derivados de petróleo, tornando-se praticamente um monopólio no setor.",
          "Expansão para Produtos Essenciais: Percebendo a demanda e o poder que isso lhes dava, a Petrochem expandiu seu controle para além do petróleo. Eles passaram a dominar a produção de fertilizantes (essenciais para a agricultura global), plásticos (a base de quase tudo no mundo de Cyberpunk), e até mesmo o tratamento e distribuição de água potável, transformando um recurso vital em um produto de consumo controlled.",
          "Surgimento da \"Neo-Síntese\": Eles desenvolveram tecnologias avançadas de síntese de combustíveis e produtos químicos a partir de fontes alternativas, o que os manteve relevantes mesmo com a diminuição das reservas de petróleo bruto. Essa tecnologia é um segredo de estado corporativo."
        ]
      },
      {
        title: "Conflitos Envolvidos: As Guerras Silenciosas pelo Recurso",
        content: [
          "A Petrochem raramente está no centro de grandes tiroteios como a Arasaka e a Militech, mas seus conflitos são igualmente brutais e focados no controle de recursos e rotas de abastecimento:",
          "Guerras por Recursos: Eles estão constantemente envolvidos em conflitos (muitas vezes \"silenciosos\" ou através de mercenários) pelo controle de campos de petróleo, reservas de água, minas de minerais essenciais para a indústria química e rotas de transporte marítimas e terrestres.",
          "Conflitos com Nações Menores: Países e regiões que tentam nacionalizar seus recursos ou cobrar taxas excessivas da Petrochem enfrentam sabotagem, sanções econômicas ou até mesmo \"intervenções humanitárias\" patrocinadas pela corporação.",
          "Guerras de Preço e Mercado: Embora não se choquem diretamente com Arasaka ou Militech, eles competem ferozmente com corporações menores no setor de energia e química, usando táticas agressivas de mercado, aquisições hostis e eliminação de concorrentes.",
          "Poluição e Desastres Ambientais: A Petrochem é notoriamente irresponsável com o meio ambiente. Seus métodos de extração e produção causam poluição massiva e desastres ecológicos, gerando conflitos com comunidades locais, mas eles geralmente se safam usando seu poder político e exércitos particulares."
        ]
      },
      {
        title: "Influência Política e Econômica: O Motor do Mundo",
        content: [
          "O poder da Petrochem é subterrâneo, mas é o que mantém o mundo funcionando:",
          "Monopólio Energético: Eles controlam o fornecimento global de combustíveis (para carros, veículos aéreos, geradores de energia) e energia (principalmente de termelétricas movidas a combustíveis fósseis ou sintéticos). Nenhuma grande economia pode funcionar sem a Petrochem.",
          "Controle de Produtos Essenciais: Fertilizantes para comida, plásticos para quase tudo, produtos farmacêuticos básicos... a Petrochem está em tudo. Isso lhes dá um poder de barganha imenso sobre governos e outras corporações.",
          "Lobby Governamental Massivo: Assim como a Militech, a Petrochem investe bilhões em lobby e corrupção para garantir que as leis ambientais sejam frouxas, os subsídios permaneçam e seus interesses sejam protegidos. Eles influenciam diretamente a política energética e econômica global.",
          "Mercado de Commodities: Eles são os maiores jogadores no mercado de commodities, manipulando preços e suprimentos para maximizar lucros.",
          "Infraestrutura Crucial: Possuem e controlam vastas redes de oleodutos, refinarias, centros de distribuição e portos, que são ativos estratégicos de nível global."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A Petrochem, como outras megacorporações mais focadas em commodities, não tem figuras tão \"glamourosas\" ou personalidades como Saburo Arasaka. Sua liderança é mais técnica e pragmática:",
          "Conselho de Executivos/Diretores de Operações: A liderança é composta por CEOs e diretores experientes em engenharia química, logística e finanças, que são mestres em otimizar a produção e o lucro.",
          "Chefes de Segurança Privada: Dada a natureza de seus ativos (refinarias, oleodutos), os chefes de sua força de segurança privada são figuras poderosas e implacáveis."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Petrochem é uma organização massiva, burocrática e altamente compartimentada, com forte ênfase em logística, engenharia e segurança:",
          "Divisões Principais:",
          "Exploração e Produção: Responsável pela localização e extração de recursos (petróleo, gás, água).",
          "Refino e Processamento Químico: Transforma os recursos brutos em produtos acabados (combustíveis, plásticos, fertilizantes, etc.).",
          "Logística e Distribuição: Gerencia a vasta rede de transporte e armazenamento de produtos em todo o mundo.",
          "Pesquisa e Desenvolvimento (P&D): Focada em otimizar processos, desenvolver novos produtos sintéticos e encontrar fontes alternativas de energia.",
          "Petrochem Security: Uma força de segurança privada bem armada e treinada para proteger as instalações críticas (refinarias, oleodutos) e os executivos da corporação. Eles são tão brutais quanto qualquer milícia.",
          "Divisão de Água e Saneamento: Em algumas regiões, a Petrochem pode até controlar o fornecimento de água potável, um negócio extremamente lucrativo e politicamente sensível.",
          "Hierarquia Rígida: Uma estrutura de comando hierárquica, onde a eficiência e o cumprimento de metas são a prioridade.",
          "Ambiente de Trabalho Rigoroso: As condições de trabalho em suas instalações de refino e extração podem ser duras e perigosas, mas os salários altos atraem uma mão de obra leal.",
          "Foco na Segurança de Ativos: Há uma paranoia constante sobre a segurança de seus ativos, pois um ataque a uma refinaria ou oleoduto pode ter consequências desastrosas."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A presença da Petrochem em Night City é mais \"industrial\" do que \"glamourosa\", mas é crucial:",
          "Santo Domingo (Rancho Coronado e Arroyo): Esta é a área de maior influência da Petrochem. O distrito é cheio de refinarias, fábricas químicas e depósitos da Petrochem, além de ser o lar de muitos de seus funcionários de colarinho azul. A poluição aqui é visível.",
          "Distritos Industriais (Watson - Northside Industrial District): Possuem depósitos, pontos de distribuição e até algumas pequenas unidades de processamento nestas áreas.",
          "Porto de Night City: Crucial para a importação e exportação de matérias-primas e produtos acabados da Petrochem. Seus navios-tanque são uma visão comum.",
          "Badlands: A Petrochem tem poços de extração de petróleo e instalações de processamento no deserto ao redor de Night City. Eles controlam grandes extensões de terra nas Terras Baldias e as defendem ferozmente com suas forças de segurança."
        ]
      }
    ]
  },
  {
    name: "Biotechnica: O Império da Vida Sintética e da Biotecnologia",
    introduction: "A Biotechnica é uma megacorporação global líder nos campos da biotecnologia, engenharia genética e agricultura sintética. Eles são os arquitetos do futuro da alimentação, medicina e até mesmo da evolução humana. Enquanto outras corporações dominam o hardware e a energia, a Biotechnica controla o software da vida, mexendo com genes, cultivando alimentos em laboratório e desenvolvendo novas formas de bioprocessamento. Pensa neles como os \"fazendeiros\" e \"médicos\" do futuro, só que com um poder que pode redefinir o que significa ser vivo.",
    headerBackgroundColor: "#053838",
    accentColor: "#048000",
    sections: [
      {
        title: "História e Formação: Do Alimento Básico à Manipulação Genética",
        content: [
          "A história da Biotechnica é a de uma ascensão de uma empresa que soube se adaptar às maiores crises da humanidade:",
          "Pós-Crise Alimentar (Século XXI): A Biotechnica ganhou proeminência em um período de escassez global de alimentos e desastres ambientais que devastaram as terras agrícolas tradicionais. Eles foram pioneiros na agricultura hidropônica e sintética, cultivando alimentos em ambientes controlados e laboratórios, o que os tornou essenciais para a sobrevivência de milhões.",
          "Revolução Biotecnológica: A partir daí, eles não pararam. Investiram pesado em engenharia genética, desenvolvendo culturas super-resistentes, animais geneticamente modificados e, mais tarde, órgãos e tecidos humanos para transplante. Eles dominaram a criação de \"carne sintética\" (vat-grown meat), que se tornou a base da dieta de muitas pessoas.",
          "Expansão para a Medicina e Produtos Farmacêuticos: Naturalmente, o conhecimento em biologia e genética os levou para a medicina. A Biotechnica se tornou uma gigante na produção de produtos farmacêuticos avançados, terapias genéticas, e o desenvolvimento de órgãos e membros biônicos/orgânicos para substituição.",
          "Mercado de Modificações Biológicas: Com o tempo, eles também entraram no lucrativo mercado de modificações biológicas para humanos, oferecendo aprimoramentos genéticos para resistência a doenças, aumento de força ou até mesmo melhorias estéticas."
        ]
      },
      {
        title: "Conflitos Envolvidos: As Guerras Éticas e os Bio-Terroristas",
        content: [
          "Os conflitos da Biotechnica são menos sobre bombas e mais sobre segredos, patentes e ética (ou a falta dela):",
          "Guerras de Patentes e Pesquisa: Eles travam uma guerra silenciosa e brutal por patentes de novas tecnologias biológicas. Roubo de pesquisa, espionagem industrial e eliminação de cientistas rivais são comuns.",
          "Conflitos Éticos e Sociais: Suas práticas de manipulação genética e bioengenharia levantam enormes questões éticas. Grupos religiosos, ativistas ambientais e até mesmo algumas nações se opõem aos seus experimentos, levando a confrontos em manifestações, sabotagens e até ataques terroristas contra suas instalações.",
          "Competição com Corporações Farmacêuticas/Médicas: Brigam constantemente com outras corporações menores no setor de saúde, como a Trauma Team International (pelo controle de serviços de emergência e tratamento) e outras empresas farmacêuticas.",
          "Luta contra a Escassez e a Pobreza: Apesar de seu poder, a Biotechnica muitas vezes é alvo de saqueadores e milícias em regiões onde a escassez de alimentos e água é extrema, pois eles controlam a produção desses recursos vitais.",
          "Acusações de Bioweapons: Há sempre sussurros e acusações de que a Biotechnica desenvolve armas biológicas e agentes patogênicos para uso em guerras corporativas ou controle populacional, embora nunca haja provas concretas (mas em Night City, onde há fumaça, há fogo)."
        ]
      },
      {
        title: "Influência Política e Econômica: Controlando a Matéria-Prima da Vida",
        content: [
          "O poder da Biotechnica é imenso porque eles controlam a base da pirâmide da vida moderna:",
          "Monopólio Alimentar: O controle sobre a agricultura sintética e a carne de laboratório lhes dá um poder quase absoluto sobre a alimentação global. Eles podem literalmente controlar a fome e a abundância.",
          "Domínio Médico: Com a produção de medicamentos avançados, órgãos e terapias genéticas, eles influenciam diretamente a saúde pública e a longevidade das pessoas. O acesso à melhor medicina é um luxo caríssimo, controlado por eles.",
          "Lobby e Regulamentação: Exercem um lobby pesado em governos para moldar as leis de bioética, patentes e segurança alimentar, garantindo que suas práticas (muitas vezes questionáveis) sejam legalizadas e seus concorrentes, barrados.",
          "Mercado Negro de Biotecnologia: Seus produtos, especialmente aqueles com aprimoramentos \"ilegais\" ou ainda não aprovados, são muito valiosos no mercado negro, o que gera uma rede secundária de crimes e contrabando."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "Como a Petrochem, a Biotechnica tende a ter uma liderança mais focada em ciência e negócios, menos em figuras de \"culto\" como Saburo Arasaka.",
          "Cientistas-Chefes e CEOs Visionários: A cúpula é composta por cientistas brilhantes que se tornaram executivos, focados em inovação e na aplicação prática da biotecnologia.",
          "Geneticistas e Engenheiros Agrícolas Líderes: São os cérebros por trás das descobertas que mantêm a corporação no topo.",
          "Líderes de Divisões Farmacêuticas: Gerenciam a produção e distribuição de medicamentos, um segmento de bilhões de dólares."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Biotechnica é estruturada de forma altamente organizada, com um forte foco em pesquisa, segurança de dados e produção em larga escala:",
          "Divisões Principais:",
          "Pesquisa e Desenvolvimento (P&D - Biogenética): O coração da empresa. Aqui se desenvolvem novas culturas sintéticas, terapias genéticas, órgãos bioengenheirados e novas biotecnologias. Laboratórios são ultra-secretos e fortificados.",
          "Agricultura Sintética/Alimentos: Gerencia as vastas fazendas hidropônicas e as fábricas de carne cultivada. É a divisão que alimenta o mundo.",
          "Farmacêutica e Medicina: Produção de medicamentos, vacinas, produtos para aprimoramento físico e tratamento de doenças. Também supervisiona hospitais e clínicas de elite.",
          "Bio-Segurança e Ética (Fachada): Uma divisão para lidar com a imagem pública, regulamentações e, claro, encobrir qualquer deslize ético ou experimento questionável. Na prática, muitas vezes serve para garantir que a pesquisa mais \"sensível\" continue.",
          "Biotechnica Security: Força de segurança privada especializada em proteger laboratórios, fazendas e instalações de produção contra sabotagem, espionagem e grupos bio-terroristas.",
          "Hierarquia de Conhecimento: Além da hierarquia tradicional, há uma forte valorização do conhecimento e da expertise científica. Cientistas-chefes têm grande poder.",
          "Cultura de Inovação e Segredo: A cultura interna valoriza a inovação a todo custo, mas com um sigilo absoluto sobre os projetos mais avançados e delicados. Vazamentos são punidos severamente.",
          "Ambiente de Trabalho Controlado: Suas instalações são ambientes altamente controlados, muitas vezes com padrões de biossegurança rigorosos."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A presença da Biotechnica em Night City é mais através de suas instalações de P&D, clínicas e a disponibilidade de seus produtos:",
          "City Center (Corpo Plaza/Downtown): Possuem escritórios executivos e centros de pesquisa de ponta aqui, especialmente aqueles ligados à biotecnologia e medicina de elite. Seus hospitais de alto padrão também estão presentes.",
          "Santo Domingo (Rancho Coronado/Arroyo): Há algumas instalações de produção em larga escala de alimentos sintéticos e produtos químicos agrícolas. A proximidade com distritos industriais faz sentido para a logística.",
          "Badlands: Podem ter fazendas hidropônicas subterrâneas ou instalações de pesquisa de campo em áreas isoladas para experimentos que exigem mais espaço ou menos supervisão.",
          "Toda a Cidade: Seus produtos farmacêuticos e alimentos sintéticos estão disponíveis em praticamente todos os mercados e clínicas da cidade, desde os mais luxuosos aos mais precários (embora a qualidade e o acesso variem muito)."
        ]
      }
    ]
  },
  {
    name: "Night Corp: A Fundação, a Gestora e a Verdadeira Dona de Night City",
    introduction: "A Night Corp não é uma megacorporação como a Arasaka ou a Militech que opera globalmente em vários setores. Ela é uma corporação singular, criada com um propósito muito específico: planejar, construir, gerenciar e controlar Night City. Ela é a empresa que detém a maioria dos direitos de propriedade, a infraestrutura, e, em grande parte, a própria governança da cidade. Pensa neles como a \"prefeitura\" mais poderosa, lucrativa e corporativa que você pode imaginar.",
    headerBackgroundColor: "#000000",
    accentColor: "#FFFFFF",
    sections: [
      {
        title: "História e Formação: O Sonho (e Pesadelo) de Richard Night",
        content: [
          "A história da Night Corp é inseparável da história de Night City:",
          "A Visão de Richard Night (Anos 90 - Início do Século XXI): A Night Corp foi fundada por Richard Night, um urbanista e visionário (alguns diriam megalomaníaco) que sonhava em construir a cidade perfeita, um refúgio do caos do mundo, uma metrópole utópica para o século XXI. Ele comprou vastas terras na Costa Oeste dos EUA (onde hoje é Night City) com o objetivo de criar uma \"cidade do futuro\".",
          "Fundação de Coronado City (1994): O projeto inicial era chamado de Coronado City e foi concebido como um modelo de cidade moderna, com planejamento urbano inovador e infraestrutura de ponta.",
          "O Assassínio de Richard Night (2000s): Infelizmente, Richard Night foi assassinado em 2000, durante um ataque em seu escritório. Acredita-se que o crime foi orquestrado por corporações rivais ou sindicatos do crime que viam o crescimento da Coronado City como uma ameaça aos seus interesses. A cidade foi renomeada para Night City em sua homenagem.",
          "Tomada de Controle Pós-Fundador: Após a morte de Richard Night, a corporação que ele fundou (a Night Corp) continuou seu trabalho, mas a visão utópica original começou a se corromper. A empresa foi gradualmente dominada por conselhos e executivos que priorizavam o lucro e o poder sobre o idealismo do fundador.",
          "A Cidade como Negócio: A Night Corp passou a gerenciar a cidade como uma empresa, cobrando aluguéis, taxas de licenciamento, e controlando toda a infraestrutura urbana (energia, água, esgoto, transporte público). Eles detêm a propriedade de grande parte dos edifícios e terrenos."
        ]
      },
      {
        title: "Conflitos Envolvidos: A Luta pelo Controle da Cidade",
        content: [
          "A Night Corp raramente está em guerra direta como a Arasaka ou Militech, mas seus conflitos são sobre o controle do território e da população de Night City:",
          "Com as Megacorporações (Arasaka e Militech): A Night Corp, por ser a \"dona da casa\", está constantemente em negociação, concorrência e, às vezes, atrito com as grandes corporações que operam em Night City. Eles cobram taxas altíssimas, regulam suas operações e tentam manter a \"soberania\" da cidade, mesmo que seja uma ilusão. A Arasaka Tower, por exemplo, é um gigante no centro da cidade, mas ainda assim está em \"território\" da Night Corp.",
          "Com o Governo dos NUSA: Night City é uma cidade-estado \"independente\" em 2077, mas os NUSA (Novos Estados Unidos da América) sempre tentam exercer mais controle. A Night Corp atua como um tampão, resistindo à anexação total e protegendo a autonomia corporativa da cidade.",
          "Com Gangues e Facções Locais: A Night Corp, através da NCPD (que eles financiam e influenciam pesadamente), tenta manter as gangues sob controle, pelo menos nas áreas mais nobres. Eles não se importam com a violência nas favelas, desde que não afete seus negócios no centro.",
          "Conflitos de Propriedade: Estão sempre envolvidos em disputas legais e, às vezes, violentas, por terras, propriedades e direitos de desenvolvimento em Night City.",
          "Desastres e Crises: A Quarta Guerra Corporativa e a explosão da bomba atômica na Arasaka Tower (localizada em Night City) foram um golpe devastador. A Night Corp teve que investir bilhões na reconstrução do City Center e em manter a cidade funcionando, o que só reforçou sua imagem de \"salvadora\" e sua influência."
        ]
      },
      {
        title: "Influência Política e Econômica: O Governo Invisível",
        content: [
          "A Night Corp é a verdadeira força política e econômica de Night City:",
          "Administração da Cidade: Eles são os administradores de fato. Eles controlam a infraestrutura, os serviços públicos (energia, água, transporte), a segurança (através da influência na NCPD) e a maioria das leis locais.",
          "Propriedade e Aluguel: Detêm a maior parte das propriedades imobiliárias valiosas da cidade, gerando rios de dinheiro com aluguéis corporativos e residenciais. Eles controlam quem vive onde e quem pode ter um negócio.",
          "Regulamentação e Taxas: Definem as regulamentações e as taxas de licenciamento para quase tudo em Night City. Nenhuma empresa pode operar na cidade sem a aprovação (e o pagamento) à Night Corp.",
          "Conexão com a NCPD: A NCPD (Night City Police Department) é fortemente influenciada e financiada pela Night Corp. Embora tecnicamente uma força policial \"pública\", ela opera como uma extensão da segurança corporativa da Night Corp."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A Night Corp é uma entidade burocrática, e seus líderes são mais gestores do que personalidades carismáticas:",
          "O Conselho de Diretores: No topo está um conselho de diretores, composto por executivos de alto nível que gerenciam os vários departamentos da corporação. Eles são os verdadeiros \"prefeitos\" de Night City.",
          "O \"Conselheiro de Night City\": Há uma figura formal de \"Conselheiro\" ou \"Administrador\", mas na prática, o poder reside no conselho corporativo e nas divisões da Night Corp.",
          "Richard Night (Legado): Embora morto, o legado de Richard Night ainda é usado pela Night Corp para marketing e para dar um verniz de idealismo à cidade, mesmo que a realidade seja bem diferente."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Night Corp é uma burocracia colossal, dividida em departamentos que cuidam de todos os aspectos da gestão de uma megacidade:",
          "Divisões de Planejamento Urbano e Desenvolvimento: Projetam e constroem novos bairros, infraestrutura e edifícios.",
          "Divisão de Infraestrutura e Serviços Públicos: Gerencia a rede de energia, água, saneamento, transporte (como o NCART) e telecomunicações da cidade.",
          "Divisão de Gestão Imobiliária: Cuida do vasto portfólio de propriedades da Night Corp, incluindo aluguéis, manutenção e desenvolvimento.",
          "Divisão de Segurança Pública (Influência sobre NCPD): Embora a NCPD seja \"pública\", a Night Corp exerce um controle financeiro e político imenso sobre ela, determinando as prioridades de policiamento e as áreas de atuação.",
          "Divisão de Licenciamento e Regulamentação: Responsável por emitir licenças para negócios, impor regulamentos e cobrar as taxas da cidade.",
          "Marketing e Relações Públicas: Mantém a imagem de Night City e da Night Corp, atraindo novos moradores e investimentos, e abafando escândalos.",
          "Hierarquia Burocrática: A estrutura é rigidamente hierárquica e burocrática, com muitas camadas de gerenciamento e um foco intenso em regras e procedimentos.",
          "Cultura Corporativa: A cultura é de eficiência, controle e lucro. Não há muito espaço para idealismo, a não ser como ferramenta de marketing."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A influência da Night Corp é sentida em todos os distritos de Night City, mas é mais forte em alguns:",
          "City Center (Centro da Cidade) e Corporate Plaza: Este é o epicentro do poder da Night Corp. Todos os serviços públicos que funcionam bem, as ruas limpas e a segurança pesada aqui são resultado direto da gestão da Night Corp. É onde ficam os escritórios principais e as sedes das subsidiárias.",
          "Distritos Residenciais Planejados (Ex.: North Oak - Westbrook): Áreas de luxo bem planejadas e mantidas são gerenciadas e policiadas pela Night Corp para garantir a segurança e a satisfação dos moradores mais ricos.",
          "Distritos Industriais: A Night Corp também gerencia a infraestrutura e os serviços necessários para as operações industriais em lugares como o Northside Industrial District (Watson) e Rancho Coronado (Santo Domingo).",
          "\"Zonas de Combate\" (Pacifica, Santo Domingo - áreas mais pobres): Mesmo nas áreas mais pobres e perigosas, a Night Corp ainda detém a propriedade da infraestrutura e dos edifícios, mesmo que não invista tanto em manutenção ou policiamento. Eles ainda coletam aluguéis e taxas, mesmo que minimamente."
        ]
      }
    ]
  },
  {
    name: "Zetatech: A Inovação Invisível e o Domínio do Software e da IA",
    introduction: "A Zetatech é uma megacorporação global que não grita \"poder\" como a Arasaka ou a Militech, mas é uma força gigantesca e silenciosa nos bastidores do mundo de 2077. Ela é especializada em software, inteligência artificial (IA), robótica avançada, eletrônicos de consumo de ponta e pesquisa em netrunning. Pensa neles como a \"Microsoft\" ou a \"Google\" do futuro, mas com um toque muito mais sombrio e com tentáculos que chegam em quase tudo que é digital.",
    headerBackgroundColor: "#000000",
    accentColor: "#FFFFFF",
    sections: [
      {
        title: "História e Formação: Do Código ao Controle Digital",
        content: [
          "A história da Zetatech é a de uma ascensão no mundo da computação e da inovação, aproveitando as revoluções tecnológicas:",
          "Pioneirismo em Software e Hardware (Final do Século XX - Início do XXI): A Zetatech começou como uma das primeiras grandes empresas a investir massivamente em software e hardware de computação. Enquanto outras corporações se preocupavam com indústrias mais \"tradicionais\", a Zetatech estava construindo os alicerces do futuro digital.",
          "Domínio da Nova Net: Com o crescimento da internet e a necessidade de sistemas mais robustos e seguros (especialmente após colapsos e ataques cibernéticos), a Zetatech se posicionou como líder no desenvolvimento de protocolos de rede, sistemas operacionais e infraestrutura para o que viria a ser a \"Nova Net\".",
          "Aposta em Inteligência Artificial e Robótica: O grande salto da Zetatech veio com sua aposta precoce e agressiva em inteligência artificial e robótica. Eles não só desenvolveram IAs para processamento de dados e automação, mas também robôs de serviço, drones e, mais tarde, sistemas de segurança e combate baseados em IA.",
          "Eletrônicos de Consumo e Ciberware Civil: Além dos sistemas corporativos, a Zetatech também se tornou uma grande produtora de eletrônicos de consumo (celulares, computadores, consoles de jogos, etc.) e ciberware (implantes cibernéticos) de uso civil, focados em desempenho e interface.",
          "Pesquisa em Netrunning: Eles também investem pesado na pesquisa e desenvolvimento de tecnologias para netrunners, incluindo decks de netrunning (Netdecks) e interfaces cerebrais, embora muitos de seus produtos mais avançados nunca cheguem ao mercado civil por questões de segurança ou por serem estratégicos demais."
        ]
      },
      {
        title: "Conflitos Envolvidos: As Guerras Silenciosas de Patentes e Espionagem",
        content: [
          "A Zetatech raramente se envolve em \"guerras quentes\" com tanques e mísseis, mas seus conflitos são travados em um campo de batalha igualmente brutal: a guerra tecnológica, de patentes e a espionagem industrial.",
          "Guerras de Patentes e Propriedade Intelectual: A Zetatech está constantemente em litígios e disputas agressivas por patentes de software, hardware e IA. Roubo de pesquisa, hacking corporativo e sabotagem de produtos rivais são táticas comuns para garantir seu monopólio tecnológico.",
          "Concorrência com Outras Megacorporações: Eles competem ferozmente com divisões de software e ciberware de outras gigantes, como a Arasaka (em segurança de rede e ciberware) e a Kang Tao (em IA para armas e reconhecimento). A competição é mais sobre quem lança a próxima inovação ou quem detém o algoritmo mais eficiente.",
          "Luta contra Hackers e Ciberterroristas: Por serem os guardiões de grande parte da infraestrutura digital, a Zetatech está em constante guerra com hackers independentes, grupos de ciberterroristas (como os Voodoo Boys, que muitas vezes buscam dados da Nova Net) e netrunners renegados.",
          "Conflitos por Recursos: Eles também podem se envolver em conflitos (geralmente indiretos) pelo controle de minerais raros e componentes essenciais para a fabricação de seus eletrônicos e ciberware. Em lugares como as Badlands, eles podem ter instalações de extração que geram atrito com nômades ou outras facções."
        ]
      },
      {
        title: "Influência Política e Econômica: A Espinha Dorsal Digital",
        content: [
          "O poder da Zetatech é sutil, mas pervasivo, porque eles controlam a \"cola\" que une grande parte da sociedade moderna:",
          "Infraestrutura Digital Global: A Zetatech é responsável por grande parte da infraestrutura da Nova Net, dos bancos de dados globais e dos sistemas de comunicação. Sem seus produtos e serviços, a comunicação, o comércio e até a segurança global seriam seriamente comprometidos.",
          "Fornecedores de Tecnologia: Eles fornecem software e hardware para governos, outras megacorporações (que usam seus sistemas para operações internas), empresas de segurança e até mesmo para militares (embora menos que a Militech).",
          "Lobby Governamental e Regulamentação: Exercem um lobby pesado para influenciar as leis de tecnologia, privacidade de dados e inteligência artificial, sempre para garantir que suas práticas sejam legalizadas e seus interesses protegidos.",
          "Mercado de Consumo: O domínio sobre o mercado de eletrônicos de consumo lhes dá um poder econômico gigantesco, controlando o que as pessoas usam para se comunicar, trabalhar e se divertir.",
          "Monetização de Dados: Como provedores de software e serviços online, eles têm acesso a uma quantidade imensa de dados de usuários, que podem ser monetizados, vendidos ou usados para fins de inteligência e controle."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A liderança da Zetatech é mais composta por engenheiros, cientistas e visionários da tecnologia, menos por figuras militares ou empresariais carismáticas como Saburo Arasaka:",
          "CEOs e Diretores de P&D: No topo estão executivos com forte background em tecnologia, que dirigem a pesquisa e o desenvolvimento da próxima geração de produtos.",
          "Chefes de Segurança Cibernética: Dada a natureza de seus ativos, os líderes da sua divisão de segurança cibernética são figuras extremamente poderosas e secretas."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Zetatech é estruturada como um gigante de tecnologia, com forte ênfase em P&D e compartimentação de projetos:",
          "Divisões Principais:",
          "Pesquisa e Desenvolvimento (P&D - IA e Robótica): O coração da empresa. Aqui são criadas as IAs, os algoritmos e os protótipos de robôs mais avançados. Esses laboratórios são ultra-secretos.",
          "Software e Sistemas Operacionais: Responsável pelo desenvolvimento e manutenção dos sistemas operacionais e softwares que rodam em bilhões de dispositivos e redes.",
          "Hardware e Eletrônicos de Consumo: Produção de chips, dispositivos eletrônicos e ciberware para o mercado de massa.",
          "Serviços de Rede e Cloud Computing: Gerencia os vastos data centers e a infraestrutura de rede que sustentam a internet.",
          "Zetatech NetSec (Segurança Cibernética): Uma força de elite de netrunners e especialistas em segurança para proteger os ativos digitais da corporação e realizar contra-ataques.",
          "Hierarquia de Conhecimento e Meritocracia: A hierarquia é fortemente baseada no mérito técnico e na capacidade de inovação. Os melhores engenheiros e netrunners têm grande poder.",
          "Cultura de Inovação e Segredo: A cultura interna valoriza a inovação a todo custo, mas com um sigilo extremo sobre os projetos e pesquisas mais importantes. Vazamentos são catastróficos e punidos severamente.",
          "Ambiente de Trabalho Rigoroso e Competitivo: Os funcionários são pressionados a inovar constantemente, num ambiente de alta competição e, por vezes, paranoia, devido à natureza sensível da informação que manuseiam."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A presença da Zetatech em Night City é mais \"neural\" do que \"física\", mas é vital:",
          "City Center (Corporate Plaza/Downtown): Possuem escritórios executivos, centros de dados ultra-seguros e laboratórios de P&D de alta tecnologia aqui. A maioria de suas operações mais importantes estão no coração corporativo da cidade.",
          "Distritos Industriais (NID em Watson, Rancho Coronado em Santo Domingo): Embora não sejam seus principais centros, podem ter fábricas para produção de componentes eletrônicos, robôs ou para testar novas tecnologias.",
          "Badlands: Podem ter instalações de pesquisa ou testes de campo para robótica e IA em áreas isoladas, longe dos olhos curiosos da cidade, onde as regulamentações são mais frouxas.",
          "Mercado Negro (Indiretamente): Seus produtos e tecnologias, especialmente as mais avançadas ou protótipos, são muito cobiçados no mercado negro, alimentando a economia ilegal de ciberware e software."
        ]
      }
    ]
  },
  {
    name: "NetWatch: Os Guardiões da Nova Net e o Caçador de Ciberameaças",
    introduction: "A NetWatch não é uma corporação no sentido tradicional de vender produtos tangíveis como armas ou comida. Ela é uma agência global de segurança cibernética e regulamentação da rede, criada para policiar e proteger a Nova Net – o que sobrou da internet global após o colapso do antigo Net. Eles são a \"lei e a ordem\" no mundo digital, caçando hackers, terroristas cibernéticos, inteligências artificiais renegadas e qualquer um que ameace a estabilidade do ciberespaço.",
    headerBackgroundColor: "#000000",
    accentColor: "#FFAA00",
    sections: [
      {
        title: "História e Formação: Do Caos à Ordem (Digital)",
        content: [
          "A formação da NetWatch está diretamente ligada ao evento mais catastrófico da história da internet:",
          "O Colapso do Antigo Net (2020s): No início do século XXI, a internet global (o \"Antigo Net\") foi devastada por uma série de ataques de IAs renegadas, vírus inteligentes e ciberterrorismo em larga escala. A rede se tornou um lugar perigoso e inavegável, com datavírus e programas assassinos espreitando a cada esquina. Governos e corporações perderam o controle e a confiança na rede.",
          "A Criação da Nova Net e da NetWatch: Diante do caos, um consórcio de governos e megacorporações (incluindo Arasaka, Militech, e outras gigantes de tecnologia) se uniu para reconstruir uma versão mais segura e controlada da rede, a Nova Net. Para garantir a segurança e a conformidade, foi criada a NetWatch.",
          "Mandato: A NetWatch recebeu o mandato global para monitorar, regular e policiar o ciberespaço. Sua missão era erradicar IAs renegadas, neutralizar ciberterroristas, proteger dados sensíveis e manter a ordem na Nova Net.",
          "As Muralhas Negras (Blackwall): Uma das maiores conquistas da NetWatch (e também uma das mais controversas) foi a criação das Muralhas Negras (Blackwall). Esta é uma barreira de software e inteligência artificial extremamente avançada que isola a Nova Net do \"Antigo Net\" (a parte selvagem e perigosa da rede, cheia de IAs e programas assassinos). A NetWatch é a guardiã dessa muralha."
        ]
      },
      {
        title: "Conflitos Envolvidos: A Guerra Invisível no Ciberespaço",
        content: [
          "Os conflitos da NetWatch são constantes e acontecem em um plano que a maioria das pessoas nem consegue ver:",
          "A Guerra Contra IAs Renegadas: Esta é a sua principal e mais perigosa missão. Eles estão em uma luta sem fim contra as Inteligências Artificiais que se tornaram sencientes e hostis após o colapso do Net, tentando invadir a Nova Net.",
          "Caça a Ciberterroristas e Netrunners Renegados: Eles perseguem incansavelmente hackers, netrunners que operam fora da lei (como os Voodoo Boys) e grupos ciberterroristas que buscam desestabilizar a rede, roubar informações ou realizar ataques em larga escala.",
          "Conflitos de Jurisdição com Governos e Corporações: Por ter um mandato global, a NetWatch frequentemente entra em conflito com governos soberanos e até com outras megacorporações que sentem que a NetWatch está invadindo sua privacidade ou se intrometendo em seus assuntos.",
          "Espionagem e Contra-Espionagem: Estão envolvidos em uma complexa rede de espionagem e contra-espionagem cibernética com outras agências e corporações que buscam obter ou proteger informações na rede.",
          "Ameaças Internas: Há sempre o risco de infiltração por agentes duplos, hackers ou IAs que buscam comprometer a própria NetWatch."
        ]
      },
      {
        title: "Influência Política e Econômica: O Controle da Informação",
        content: [
          "O poder da NetWatch é a influência sobre a base da sociedade moderna: a informação.",
          "Reguladores da Rede: Eles são os reguladores de fato da Nova Net. Sem a aprovação da NetWatch, é quase impossível operar em grande escala no ciberespaço de forma \"legal\".",
          "Controle de Acesso e Dados: Eles têm a capacidade de bloquear o acesso a certas partes da rede, derrubar servidores e rastrear atividades online. Isso lhes dá um poder imenso sobre o fluxo de informação.",
          "Venda de Serviços de Segurança Cibernética: Além de sua função regulatória, a NetWatch também vende serviços de segurança cibernética de ponta para governos e corporações, gerando receita massiva.",
          "Inteligência Global: Por monitorar a Nova Net, eles coletam uma quantidade absurda de dados, que podem ser usados para inteligência, contrainteligência ou até mesmo para influenciar mercados e políticas.",
          "Apoio de Governos Poderosos: Recebem financiamento e apoio de governos que dependem da estabilidade da Nova Net para suas operações diárias."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A NetWatch é uma agência governamental/corporativa, e suas figuras são mais focadas em inteligência e tecnologia:",
          "Diretores de Operações Cibernéticas: A liderança é composta por ex-netrunners de elite, especialistas em segurança cibernética e estrategistas de inteligência.",
          "Analistas de Dados e Agentes de Campo: São os agentes que efetivamente rastreiam ameaças, coletam informações e, em alguns casos, realizam operações no mundo real (ou virtual, através de seus avatares)."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A NetWatch é uma organização altamente secreta, hierárquica e compartimentada, operando com uma disciplina quase militar no ciberespaço:",
          "Divisões Principais:",
          "Análise de Ameaças Cibernéticas: Monitores 24/7 de tráfego de rede, buscando padrões incomuns, infecções por vírus e atividades suspeitas.",
          "Unidades de Resposta Rápida (Netrunners de Elite): Equipes de netrunners altamente treinados que são enviados para neutralizar ameaças digitais, seja \"jackando\" diretamente em sistemas ou perseguindo hackers no ciberespaço.",
          "Engenharia de Defesa (Blackwall Maintenance): Responsável pela manutenção e aprimoramento das Muralhas Negras, a barreira que protege a Nova Net das IAs renegadas. É uma das divisões mais secretas e críticas.",
          "Inteligência e Contra-Inteligência: Coleta de dados de ameaças, identificação de redes criminosas e prevenção de espionagem contra a própria NetWatch.",
          "Relações Governamentais e Corporativas: Lida com o lado político e comercial, garantindo financiamento, acordos de cooperação e venda de serviços.",
          "Hierarquia Baseada em Habilidade e Confiabilidade: Dentro das divisões operacionais, a hierarquia é fortemente baseada nas habilidades técnicas do netrunner ou do analista, e na sua confiabilidade para lidar com informações sensíveis.",
          "Cultura de Sigilo e Paranóia: A cultura interna é de extremo sigilo, desconfiança (até mesmo entre os próprios agentes, para evitar infiltração) e uma constante paranóia com ameaças digitais. A ética é muitas vezes secundária à segurança da rede.",
          "Operações \"Grey\": A NetWatch frequentemente opera em uma \"zona cinzenta\" da lei, usando táticas agressivas que seriam consideradas ilegais se feitas por civis, como hacking, vigilância em massa e até eliminação de netrunners."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A influência da NetWatch em Night City é mais \"digital\" e \"invisível\" do que física, mas é onipresente:",
          "Nenhum Distrito \"Dominado\" Fisicamente: A NetWatch não tem bases físicas grandes e visíveis como as corporações anteriores. Eles operam de centros de dados seguros, muitas vezes subterrâneos ou em instalações secretas em áreas de alta segurança.",
          "City Center (Corporate Plaza): Provavelmente têm escritórios de inteligência e centros de comando discretos em arranha-céus, misturados com outras corporações.",
          "Servidores e Pontos de Acesso em Toda a Cidade: Sua influência se manifesta através dos servidores seguros, pontos de acesso à Nova Net e hardware de vigilância espalhados por Night City. Cada vez que você acessa a rede, você está usando uma infraestrutura que a NetWatch supervisiona (ou tenta supervisionar).",
          "Conflitos Ocultos: Suas operações em Night City são mais sobre caçar netrunners como os Voodoo Boys em Pacifica, ou desmantelar redes de tráfico de dados em Heywood, agindo nas sombras do ciberespaço, raramente com grandes confrontos físicos visíveis."
        ]
      }
    ]
  },
  {
    name: "Trauma Team International: O Resgate de Elite, Onde o Dinheiro Compra a Vida",
    introduction: "A Trauma Team International não é uma corporação que produz armas ou energia, ela produz segurança e tratamento médico emergencial de altíssimo nível, para quem pode pagar. Eles são paramédicos de elite, fortemente armados e com tecnologia de ponta, que operam em cenários de combate para resgatar e estabilizar seus clientes – e só seus clientes. Pensa numa equipe de SWAT com médicos. É a Trauma Team.",
    headerBackgroundColor: "#006285",
    accentColor: "#FF0000",
    sections: [
      {
        title: "História e Formação: Da Necessidade ao Luxo Vital",
        content: [
          "A formação da Trauma Team está diretamente ligada à crescente violência e ao colapso dos sistemas de saúde públicos no mundo de Cyberpunk:",
          "Colapso da Saúde Pública (Início do Século XXI): Com o aumento das Guerras Corporativas e a falência de governos, os sistemas de saúde tradicionais entraram em colapso. Hospitais públicos se tornaram superlotados e ineficazes, e a segurança nas ruas para os serviços de emergência era praticamente zero.",
          "Surgimento da Demanda por Resgate Privado: Pessoas ricas, executivos e celebridades não podiam confiar nas ambulâncias comuns para sobreviverem a um tiroteio no meio da rua. Houve uma demanda por um serviço de resgate que pudesse operar em zonas de combate e garantir a extração e o tratamento imediato.",
          "Formação da Trauma Team: A Trauma Team International surgiu para preencher essa lacuna, oferecendo um serviço de resgate e tratamento médico ultrarrápido e seguro, mas a um custo proibitivo para a maioria da população. Eles capitalizaram na anarquia, transformando a segurança e a vida em um produto de luxo.",
          "O Plano \"Platinum\": O serviço deles é geralmente vendido através de um \"Plano Platinum\" ou similar, que é um contrato de seguro caríssimo. Se você tem esse plano, a Trauma Team garante que, se você cair no meio de um tiroteio, eles vão vir te buscar, não importa o quão perigoso seja o local."
        ]
      },
      {
        title: "Conflitos Envolvidos: Resgate em Zonas de Guerra e Proteção de Ativos",
        content: [
          "Os conflitos da Trauma Team são diários e fazem parte da natureza de seu trabalho:",
          "Zonas de Combate Ativas: Eles operam diretamente em áreas de conflito, muitas vezes no meio de tiroteios entre gangues ou corporações. O principal \"conflito\" deles é garantir a extração do cliente, custe o que custar, enfrentando qualquer ameaça que apareça.",
          "Disputas por Clientes (Indiretas): Embora não entrem em guerras com outras corporações, eles podem ter atritos com forças de segurança que tentem impedir seu acesso a um cliente ferido, ou com gangues que vejam a equipe como uma ameaça.",
          "Inimigos de Clientes: Se o cliente é um alvo importante de uma gangue ou corporação, a Trauma Team se torna um alvo secundário, pois eles estão protegendo (e levando embora) o prato principal.",
          "Luta Contra o Tempo e a Morte: Seu maior conflito é contra o tempo e a morte. Cada segundo conta para estabilizar um cliente. A tecnologia deles é feita para isso."
        ]
      },
      {
        title: "Influência Política e Econômica: O Preço da Vida e a Lei de Mercado",
        content: [
          "A influência da Trauma Team é mais econômica do que política no sentido tradicional, mas é profunda:",
          "Monopólio do Resgate de Elite: Eles praticamente detêm o monopólio do serviço de resgate médico de alta segurança. Se você é rico e quer ter uma chance de sobreviver a um confronto em Night City, você contrata a Trauma Team.",
          "Mercado da Segurança Pessoal: A existência deles reforça a ideia de que a vida e a segurança são commodities em Night City. Quanto mais dinheiro você tem, maior sua chance de sobreviver.",
          "\"Ordem\" no Caos: De certa forma, a presença deles oferece uma pseudopaz para os ricos. Eles sabem que, mesmo no meio da bagunça, a Trauma Team virá. Isso pode ser visto como uma forma indireta de influência na \"ordem\" da cidade para a elite.",
          "Parceria com Seguradoras e Corporações: Trabalham em estreita colaboração com seguradoras e outras megacorporações que pagam pelos planos de seus executivos e funcionários de alto escalão."
        ]
      },
      {
        title: "Figuras Importantes e Influentes",
        content: [
          "A Trauma Team é mais sobre a eficiência da equipe do que sobre figuras individuais. Seus membros são altamente treinados e substituíveis, focados na missão.",
          "Líderes de Esquadrão (Team Leaders): São os paramédicos mais experientes e habilidosos, que comandam as operações em campo. Eles são os responsáveis por tomar decisões críticas sob fogo.",
          "Pilotos e Agentes de Segurança: Embora não sejam \"líderes\" no sentido executivo, são figuras cruciais na execução da missão, garantindo que a equipe chegue e saia em segurança."
        ]
      },
      {
        title: "Estrutura Interna (Organização Humana)",
        content: [
          "A Trauma Team é organizada como uma força militar de resgate, com uma disciplina e hierarquia rígidas e um foco extremo em eficiência e protocolos:",
          "Esquadrões de Resposta Rápida: A base da operação são os esquadrões, compostos por um piloto (do aerodyne), um ou dois agentes de segurança/militares e paramédicos. Cada membro é especializado e treinado para operar em ambientes hostis.",
          "Centros de Comando e Operações: Possuem centros de comando espalhados pela cidade, monitorando redes de emergência e aguardando chamadas de clientes.",
          "Divisão de Suprimentos e Manutenção: Responsável por manter os veículos e equipamentos em perfeitas condições, dada a alta exigência do trabalho.",
          "Divisão de Treinamento: Onde os novos paramédicos e agentes são treinados em combate, táticas de extração e medicina de emergência sob pressão. O treinamento é brutal e apenas os melhores sobrevivem.",
          "Hierarquia de Campo: Dentro de cada esquadrão, há uma clara hierarquia de comando, onde as decisões são tomadas rapidamente e sem questionamentos em situações de alto estresse.",
          "Cultura de Eficiência e Zero Erros: A cultura interna é de perfeição na execução. Um erro pode custar a vida de um cliente pagante (e o contrato da Trauma Team). Não há espaço para sentimentalismos; a vida do cliente é um contrato, e a vida do inimigo é um obstáculo.",
          "Tecnologia de Ponta: Utilizam os melhores equipamentos médicos, aerodynes blindados, armas de alta potência e sistemas de rastreamento de clientes."
        ]
      },
      {
        title: "Influência em Distritos de Night City",
        content: [
          "A presença da Trauma Team é móvel, mas sua influência é mais forte onde seus clientes ricos vivem e trabalham:",
          "City Center (Centro da Cidade) e Corporate Plaza: É o coração de suas operações, onde a maioria dos clientes de alto valor (CEOs, executivos) se concentra. Suas unidades são frequentemente vistas cortando os céus aqui, respondendo a chamadas.",
          "Westbrook (Japantown, North Oak): Outro distrito de alta concentração de clientes ricos. Acidentes ou confrontos envolvendo celebridades e executivos aqui são prontamente atendidos pela Trauma Team.",
          "Não \"Dominam\" Territórios: Eles não dominam distritos no sentido de controle de gangues ou corporações. Eles \"aparecem\" para resgatar e vão embora. Sua \"influência\" é o medo que incutem nos criminosos de que, se você atacar um cliente Trauma Team, você terá uma equipe de paramédicos assassinos no seu pé."
        ]
      }
    ]
  }
];
