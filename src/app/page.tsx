
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const introText = "Night City é a joia mais suja e brilhante da Costa Oeste dos Estados Unidos. Ela é a materialização do sonho de um cara visionário (ou maluco, dependendo do ponto de vista) que queria criar uma cidade sem as amarras do governo e da burocracia. O resultado? Um paraíso distópico onde tudo é à base de dinheiro, poder e muita violência.";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-xl font-semibold text-primary">Introdução</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8 bg-background">
        <Card className="w-full max-w-3xl shadow-xl border-accent rounded-lg overflow-hidden">
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
                  Explore a História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
