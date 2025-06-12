
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Database, AlertTriangle, RefreshCw } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getLoreDataShard } from "@/app/actions/loreActions";
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DataShardPage() {
  const [shard, setShard] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const fetchShard = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newShard = await getLoreDataShard();
      setShard(newShard);
    } catch (err: any) {
      setError(err.message || "Falha ao interceptar o Data Shard. As linhas podem estar cruzadas ou o arquivo de lore corrompido.");
      setShard(null);
    } finally {
      setIsLoading(false);
      if (!initialLoadDone) {
        setInitialLoadDone(true);
      }
    }
  };

  useEffect(() => {
    // Fetch a shard on initial load
    fetchShard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Database className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">Terminal de Data Shards</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8 bg-background">
        <Card className="w-full max-w-2xl shadow-xl border-primary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-101" style={{ boxShadow: `0 0 15px 3px hsl(var(--primary))` }}>
          <CardHeader className="bg-card-foreground p-6 text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">Data Shard Interceptado</CardTitle>
            <CardDescription className="text-muted-foreground pt-2 text-md sm:text-lg">
              Fragmentos de informação recuperados dos confins da rede de Night City.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 min-h-[200px] flex flex-col items-center justify-center">
            {isLoading && !initialLoadDone ? (
              <div className="flex flex-col items-center text-center">
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <p className="text-lg text-muted-foreground">Interceptando transmissão...</p>
              </div>
            ) : error ? (
              <div className="text-center text-destructive p-4 border border-destructive rounded-md bg-destructive/10">
                <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold mb-1">Erro de Transmissão</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : shard ? (
              <ScrollArea className="h-auto max-h-[200px] w-full">
                 <blockquote className="text-lg sm:text-xl text-center text-foreground leading-relaxed p-4 border-l-4 border-accent bg-accent/5 rounded-md shadow-inner">
                    &quot;{shard}&quot;
                 </blockquote>
              </ScrollArea>
            ) : (
              <p className="text-lg text-muted-foreground text-center">Nenhum Data Shard recuperado. Tente a varredura novamente.</p>
            )}
          </CardContent>
          <div className="p-6 border-t border-border flex justify-center">
            <Button
              onClick={fetchShard}
              disabled={isLoading}
              variant="outline"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Nova Varredura
                </>
              )}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
