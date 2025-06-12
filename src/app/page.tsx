import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const introText = "Night City é a joia mais suja e brilhante da Costa Oeste dos Estados Unidos. Ela é a materialização do sonho de um cara visionário (ou maluco, dependendo do ponto de vista) que queria criar uma cidade sem as amarras do governo e da burocracia. O resultado? Um paraíso distópico onde tudo é à base de dinheiro, poder e muita violência.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Card className="w-full max-w-2xl shadow-xl border-primary">
        <CardHeader>
          <CardTitle className="font-headline text-4xl text-center text-primary">Bem-vindo(a) a Night City</CardTitle>
          <CardDescription className="text-center text-muted-foreground pt-2 text-lg">
            Uma introdução à metrópole dos sonhos e pesadelos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground text-center text-base leading-relaxed">
            {introText}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
