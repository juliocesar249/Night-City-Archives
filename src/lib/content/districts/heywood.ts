
import type { District } from './types';

export const heywood: District = {
  name: "Heywood: A Alma Multifacetada de Night City",
  iconName: "Home", // Generic home as it's very residential
  gradient: "linear-gradient(to right, #FF6A00, #000000)",
  titleColorClass: "text-primary",
  borderColor: "#FF6A00",
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
  ],
  dominantGangs: ["Valentinos", "6th Street (borders)"],
  majorCorporations: ["Biotechnica (clinics)", "Variadas (fachadas)"]
};
