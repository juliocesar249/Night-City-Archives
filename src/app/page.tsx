import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center">React Vite Template</CardTitle>
          <CardDescription className="text-center text-muted-foreground pt-2">
            A minimal starting point for your Next.js application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground text-center">
            This is a basic template. Modify this page and add new components to build your application.
            The styling is set according to your preferences with a light gray primary, white background, and soft blue accent.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">Primary Button</Button>
          <Button variant="outline" className="ml-4 border-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground">Accent Button</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
