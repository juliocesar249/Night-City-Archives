
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Database, AlertTriangle, RefreshCw, Newspaper, ListChecks, Brain, Check, X } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getLoreDataShard, getNightCityQuiz, getNightCityNews } from "@/app/actions/loreActions";
import type { QuizOutput, QuizItem as RawQuizItem } from '@/ai/flows/quiz-flow';
import type { NewsOutput } from '@/ai/flows/news-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type ActiveTab = "snippet" | "quiz" | "news";

interface QuizItem extends RawQuizItem {
  shuffledOptions: string[];
}

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function DataShardPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("snippet");

  const [loreSnippet, setLoreSnippet] = useState<string | null>(null);
  const [isLoreLoading, setIsLoreLoading] = useState(false);
  const [loreError, setLoreError] = useState<string | null>(null);
  const [initialLoreLoadDone, setInitialLoreLoadDone] = useState(false);

  const [quizData, setQuizData] = useState<QuizOutput | null>(null);
  const [shuffledQuizItems, setShuffledQuizItems] = useState<QuizItem[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  const [newsData, setNewsData] = useState<NewsOutput | null>(null);
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState<string | null>(null);

  const fetchLoreSnippet = useCallback(async () => {
    setIsLoreLoading(true);
    setLoreError(null);
    try {
      const newShard = await getLoreDataShard();
      setLoreSnippet(newShard);
    } catch (err: any) {
      setLoreError(err.message || "Falha ao interceptar o Data Shard. As linhas podem estar cruzadas ou o arquivo de lore corrompido.");
      setLoreSnippet(null);
    } finally {
      setIsLoreLoading(false);
      if (!initialLoreLoadDone) {
        setInitialLoreLoadDone(true);
      }
    }
  }, [initialLoreLoadDone]);

  const fetchQuiz = async () => {
    setIsQuizLoading(true);
    setQuizError(null);
    setQuizData(null);
    setShuffledQuizItems([]);
    setSelectedAnswers({});
    setRevealedAnswers({});
    try {
      const newQuiz = await getNightCityQuiz();
      setQuizData(newQuiz);
      if (newQuiz && newQuiz.questions) {
        const processedItems = newQuiz.questions.map(q => ({
          ...q,
          shuffledOptions: shuffleArray([q.correctAnswer, ...q.alternatives]),
        }));
        setShuffledQuizItems(processedItems);
      }
    } catch (err: any) {
      setQuizError(err.message || "Falha ao gerar o Quiz. Parece que os netrunners da NetWatch estão bloqueando a transmissão.");
      setQuizData(null);
    } finally {
      setIsQuizLoading(false);
    }
  };

  const fetchNews = async () => {
    setIsNewsLoading(true);
    setNewsError(null);
    setNewsData(null);
    try {
      const newNews = await getNightCityNews();
      setNewsData(newNews);
    } catch (err: any) {
      setNewsError(err.message || "Falha ao buscar as últimas da N54. Interferência no sinal ou os repórteres estão... ocupados.");
      setNewsData(null);
    } finally {
      setIsNewsLoading(false);
    }
  };
  
  useEffect(() => {
    if (activeTab === "snippet" && !initialLoreLoadDone) {
      fetchLoreSnippet();
    }
  }, [activeTab, initialLoreLoadDone, fetchLoreSnippet]);

  const handleAnswerSelection = (questionIndex: number, selectedOption: string) => {
    if (revealedAnswers[questionIndex]) return; // Don't change answer after reveal
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
    setRevealedAnswers(prev => ({ ...prev, [questionIndex]: true }));
  };

  const isLoading = isLoreLoading || isQuizLoading || isNewsLoading;

  const renderContent = () => {
    switch (activeTab) {
      case "snippet":
        if (isLoreLoading && !initialLoreLoadDone) {
          return (
            <div className="flex flex-col items-center text-center py-10">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">Interceptando transmissão de Data Shard...</p>
            </div>
          );
        }
        if (loreError) {
          return (
            <div className="text-center text-destructive p-4 border border-destructive rounded-md bg-destructive/10 w-full">
              <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold mb-1">Erro de Transmissão</p>
              <p className="text-sm">{loreError}</p>
            </div>
          );
        }
        if (loreSnippet) {
          return (
             <ScrollArea className="h-auto max-h-[280px] w-full">
                <blockquote className="text-lg sm:text-xl text-center text-foreground leading-relaxed p-4 border-l-4 border-accent bg-accent/5 rounded-md shadow-inner">
                    &quot;{loreSnippet}&quot;
                </blockquote>
             </ScrollArea>
          );
        }
        return <p className="text-lg text-muted-foreground text-center py-10">Nenhum Data Shard recuperado. Tente a varredura novamente.</p>;
      
      case "quiz":
        if (isQuizLoading) {
          return (
            <div className="flex flex-col items-center text-center py-10">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">Gerando Quiz Neural...</p>
            </div>
          );
        }
        if (quizError) {
          return (
            <div className="text-center text-destructive p-4 border border-destructive rounded-md bg-destructive/10 w-full">
              <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold mb-1">Erro na Geração do Quiz</p>
              <p className="text-sm">{quizError}</p>
            </div>
          );
        }
        if (quizData && shuffledQuizItems.length > 0) {
          return (
            <ScrollArea className="w-full h-auto max-h-[550px] p-1">
              <div className="space-y-6">
                <h3 className="text-2xl font-headline text-accent text-center mb-4">{quizData.quizTitle}</h3>
                {shuffledQuizItems.map((item, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card/80 shadow-md">
                    <p className="font-semibold text-primary mb-2">Questão {index + 1}: <span className="text-foreground font-normal">{item.question}</span></p>
                    <RadioGroup
                      onValueChange={(value) => handleAnswerSelection(index, value)}
                      value={selectedAnswers[index] || ""}
                      disabled={revealedAnswers[index]}
                      className="space-y-2"
                    >
                      {item.shuffledOptions.map((option, optionIndex) => {
                        const isSelected = selectedAnswers[index] === option;
                        const isCorrect = option === item.correctAnswer;
                        const isRevealed = revealedAnswers[index];
                        
                        return (
                          <div key={optionIndex} className={cn(
                            "flex items-center space-x-3 p-3 rounded-md border transition-all",
                            isRevealed && isCorrect ? "border-green-500 bg-green-500/10" : "border-border",
                            isRevealed && isSelected && !isCorrect ? "border-red-500 bg-red-500/10" : ""
                          )}>
                            <RadioGroupItem
                              value={option}
                              id={`q${index}-opt${optionIndex}`}
                              disabled={isRevealed}
                              className={cn(
                                isRevealed && isCorrect && isSelected ? "ring-2 ring-green-500 border-green-600" : "",
                                isRevealed && !isCorrect && isSelected ? "ring-2 ring-red-500 border-red-600" : ""
                              )}
                            />
                            <Label
                              htmlFor={`q${index}-opt${optionIndex}`}
                              className={cn(
                                "flex-1 cursor-pointer",
                                isRevealed && isCorrect && "text-green-400 font-semibold",
                                isRevealed && isSelected && !isCorrect && "text-red-400 line-through"
                              )}
                            >
                              {option}
                            </Label>
                            {isRevealed && isCorrect && <Check className="h-5 w-5 text-green-500" />}
                            {isRevealed && isSelected && !isCorrect && <X className="h-5 w-5 text-red-500" />}
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </ScrollArea>
          );
        }
        return <p className="text-lg text-muted-foreground text-center py-10">Clique em "Gerar Novo Quiz" para testar seus conhecimentos sobre Night City.</p>;

      case "news":
        if (isNewsLoading) {
          return (
            <div className="flex flex-col items-center text-center py-10">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">Sintonizando N54 News...</p>
            </div>
          );
        }
        if (newsError) {
          return (
            <div className="text-center text-destructive p-4 border border-destructive rounded-md bg-destructive/10 w-full">
              <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
              <p className="font-semibold mb-1">Erro na Transmissão da N54</p>
              <p className="text-sm">{newsError}</p>
            </div>
          );
        }
        if (newsData) {
          return (
            <ScrollArea className="h-auto max-h-[280px] w-full p-1">
              <div className="p-6 border border-accent/70 rounded-lg bg-card/80 shadow-lg">
                <h3 className="text-2xl font-headline text-accent mb-3 text-center">{newsData.headline}</h3>
                <p className="text-foreground leading-relaxed text-justify">{newsData.story}</p>
              </div>
            </ScrollArea>
          );
        }
        return <p className="text-lg text-muted-foreground text-center py-10">Clique em "Gerar Novas Notícias" para ver as últimas de Night City.</p>;
      default:
        return <p className="text-lg text-muted-foreground text-center py-10">Selecione uma opção acima.</p>;
    }
  };

  const handleGenerate = () => {
    if (activeTab === 'snippet') fetchLoreSnippet();
    if (activeTab === 'quiz') fetchQuiz();
    if (activeTab === 'news') fetchNews();
  };

  const getButtonText = () => {
    if (activeTab === 'snippet') return "Nova Varredura de Shard";
    if (activeTab === 'quiz') return "Gerar Novo Quiz";
    if (activeTab === 'news') return "Gerar Novas Notícias";
    return "Gerar";
  };

  const getButtonIcon = () => {
    if (isLoreLoading && activeTab === 'snippet') return <Loader2 className="mr-2 h-5 w-5 animate-spin" />;
    if (isQuizLoading && activeTab === 'quiz') return <Loader2 className="mr-2 h-5 w-5 animate-spin" />;
    if (isNewsLoading && activeTab === 'news') return <Loader2 className="mr-2 h-5 w-5 animate-spin" />;

    if (activeTab === 'snippet') return <RefreshCw className="mr-2 h-5 w-5 group-hover:animate-spin" />;
    if (activeTab === 'quiz') return <Brain className="mr-2 h-5 w-5" />;
    if (activeTab === 'news') return <Newspaper className="mr-2 h-5 w-5" />;
    return <RefreshCw className="mr-2 h-5 w-5 group-hover:animate-spin" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Database className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">Terminal de Inteligência</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <Card className="w-full max-w-3xl shadow-xl border-primary rounded-lg overflow-hidden transition-all duration-300 ease-in-out" style={{ boxShadow: `0 0 15px 3px hsl(var(--primary))` }}>
          <CardHeader className="bg-card-foreground p-6 text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">Centro de Dados de Night City</CardTitle>
            <CardDescription className="text-muted-foreground pt-2 text-md sm:text-lg">
              Acesse fragmentos de lore, teste seus conhecimentos ou confira as últimas notícias da cidade.
            </CardDescription>
          </CardHeader>
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full p-4">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-background/50">
              <TabsTrigger value="snippet" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <Database className="mr-2 h-4 w-4" /> Data Shard
              </TabsTrigger>
              <TabsTrigger value="quiz" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <ListChecks className="mr-2 h-4 w-4" /> Quiz da Lore
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                 <Newspaper className="mr-2 h-4 w-4" /> N54 News
              </TabsTrigger>
            </TabsList>

            <CardContent className="p-4 min-h-[320px] flex flex-col items-center justify-start bg-black/20 rounded-md border border-border shadow-inner">
              <TabsContent value="snippet" className="w-full mt-0 h-full">
                {renderContent()}
              </TabsContent>
              <TabsContent value="quiz" className="w-full mt-0 h-full">
                {renderContent()}
              </TabsContent>
              <TabsContent value="news" className="w-full mt-0 h-full">
                {renderContent()}
              </TabsContent>
            </CardContent>
          </Tabs>

          <div className="p-6 border-t border-border flex justify-center">
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              variant="outline"
              size="lg"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group w-full sm:w-auto text-base py-6 px-8"
            >
              {isLoading && (activeTab === 'snippet' && isLoreLoading || activeTab === 'quiz' && isQuizLoading || activeTab === 'news' && isNewsLoading) ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  {getButtonIcon()}
                  {getButtonText()}
                </>
              )}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

