
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Database, AlertTriangle, RefreshCw, Newspaper, ListChecks, Brain, Check, X } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getLoreDataShard, getNightCityQuiz, getNightCityNews } from "@/app/actions/loreActions";
import type { QuizOutput, QuizItem as RawQuizItem } from '@/ai/flows/quiz-flow';
import type { NewsOutput } from '@/ai/flows/news-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type ActiveContentType = "shard" | "quiz" | "news" | null;

interface QuizItem extends RawQuizItem {
  shuffledOptions: string[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function DataShardPage() {
  const [activeContent, setActiveContent] = useState<ActiveContentType>(null);

  const [loreSnippet, setLoreSnippet] = useState<string | null>(null);
  const [isLoreLoading, setIsLoreLoading] = useState(false);
  const [loreError, setLoreError] = useState<string | null>(null);

  const [quizData, setQuizData] = useState<QuizOutput | null>(null);
  const [shuffledQuizItems, setShuffledQuizItems] = useState<QuizItem[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  const [newsData, setNewsData] = useState<NewsOutput | null>(null);
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState<string | null>(null);
  
  const clearPreviousContent = () => {
    setLoreSnippet(null);
    setLoreError(null);
    setQuizData(null);
    setShuffledQuizItems([]);
    setSelectedAnswers({});
    setRevealedAnswers({});
    setQuizError(null);
    setNewsData(null);
    setNewsError(null);
  };

  const fetchLoreSnippet = useCallback(async () => {
    clearPreviousContent();
    setIsLoreLoading(true);
    setActiveContent("shard");
    try {
      const newShard = await getLoreDataShard();
      setLoreSnippet(newShard);
    } catch (err: any) {
      setLoreError(err.message || "Falha ao interceptar o Data Shard. As linhas podem estar cruzadas ou o arquivo de lore corrompido.");
      setLoreSnippet(null);
    } finally {
      setIsLoreLoading(false);
    }
  }, []);

  const fetchQuiz = async () => {
    clearPreviousContent();
    setIsQuizLoading(true);
    setActiveContent("quiz");
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
    clearPreviousContent();
    setIsNewsLoading(true);
    setActiveContent("news");
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
  
  const handleAnswerSelection = (questionIndex: number, selectedOption: string) => {
    if (revealedAnswers[questionIndex]) return; 
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
    setRevealedAnswers(prev => ({ ...prev, [questionIndex]: true }));
  };

  const isLoading = isLoreLoading || isQuizLoading || isNewsLoading;

  const renderDynamicContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center text-center py-10 mt-8">
          <Loader2 className="h-16 w-16 text-primary animate-spin mb-6" />
          <p className="text-xl text-muted-foreground">Processando solicitação...</p>
          {isLoreLoading && <p className="text-md text-primary">Acessando arquivos de lore...</p>}
          {isQuizLoading && <p className="text-md text-primary">Compilando simulação de conhecimento...</p>}
          {isNewsLoading && <p className="text-md text-primary">Interceptando feed da N54...</p>}
        </div>
      );
    }

    switch (activeContent) {
      case "shard":
        if (loreError) {
          return (
            <div className="mt-8 text-center text-destructive p-6 border border-destructive rounded-lg bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro de Transmissão</h3>
              <p className="text-md">{loreError}</p>
            </div>
          );
        }
        if (loreSnippet) {
          return (
             <Card className="mt-8 w-full max-w-2xl mx-auto shadow-xl border-accent overflow-hidden">
                <CardHeader className="bg-accent/10 p-4">
                    <CardTitle className="text-accent text-2xl font-headline text-center">Data Shard Interceptado</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <blockquote className="text-lg sm:text-xl text-center text-foreground leading-relaxed p-4 border-l-4 border-accent bg-accent/5 rounded-md shadow-inner">
                        &quot;{loreSnippet}&quot;
                    </blockquote>
                </CardContent>
             </Card>
          );
        }
        return null;
      
      case "quiz":
        if (quizError) {
          return (
            <div className="mt-8 text-center text-destructive p-6 border border-destructive rounded-md bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro na Geração do Quiz</h3>
              <p className="text-md">{quizError}</p>
            </div>
          );
        }
        if (quizData && shuffledQuizItems.length > 0) {
          return (
            <Card className="mt-8 w-full max-w-3xl mx-auto shadow-xl border-primary overflow-hidden">
                <CardHeader className="bg-primary/10 p-4">
                    <CardTitle className="text-primary text-3xl font-headline text-center">{quizData.quizTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <ScrollArea className="w-full h-auto max-h-[calc(100vh-350px)] p-1"> {/* Adjusted max-height */}
                      <div className="space-y-6">
                        {shuffledQuizItems.map((item, index) => (
                          <div key={index} className="p-4 border border-border rounded-lg bg-card/80 shadow-md">
                            <p className="font-semibold text-primary mb-3 text-lg">Questão {index + 1}: <span className="text-foreground font-normal">{item.question}</span></p>
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
                                        "flex-1 cursor-pointer text-md",
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
                </CardContent>
            </Card>
          );
        }
        return null;

      case "news":
        if (newsError) {
          return (
            <div className="mt-8 text-center text-destructive p-6 border border-destructive rounded-md bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro na Transmissão da N54</h3>
              <p className="text-md">{newsError}</p>
            </div>
          );
        }
        if (newsData) {
          return (
            <Card className="mt-8 w-full max-w-2xl mx-auto shadow-xl border-secondary overflow-hidden">
                <CardHeader className="bg-secondary/10 p-4">
                     <CardTitle className="text-secondary text-3xl font-headline text-center">N54 News Flash</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <h3 className="text-2xl font-headline text-secondary mb-3 text-center">{newsData.headline}</h3>
                    <p className="text-foreground leading-relaxed text-justify text-md">{newsData.story}</p>
                </CardContent>
            </Card>
          );
        }
        return null;
      default:
        return (
            <div className="mt-12 text-center">
                <Database className="h-24 w-24 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-xl text-muted-foreground">Selecione uma operação acima para iniciar a varredura.</p>
            </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <SidebarTrigger className="md:hidden" />
        <Database className="h-5 w-5 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-primary">Terminal de Inteligência</h1>
      </header>
      <main className="flex flex-1 flex-col items-center p-4 sm:p-8 bg-background">
        <Card className="w-full max-w-3xl shadow-xl border-primary rounded-lg overflow-hidden transition-all duration-300 ease-in-out mb-8" style={{ boxShadow: `0 0 15px 3px hsl(var(--primary))` }}>
          <CardHeader className="bg-card-foreground p-6 text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">Centro de Dados de Night City</CardTitle>
            <CardDescription className="text-muted-foreground pt-2 text-md sm:text-lg">
              Acesse fragmentos de lore, teste seus conhecimentos ou confira as últimas notícias da cidade.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-4 mb-8 p-4 border border-border rounded-lg bg-card/50 shadow-md">
            <Button
              onClick={fetchLoreSnippet}
              disabled={isLoreLoading}
              variant="outline"
              size="lg"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group w-full sm:w-auto text-base py-3 px-6"
            >
              {isLoreLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <RefreshCw className="mr-2 h-5 w-5 group-hover:animate-spin" />}
              Gerar Data Shard
            </Button>
            <Button
              onClick={fetchQuiz}
              disabled={isQuizLoading}
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group w-full sm:w-auto text-base py-3 px-6"
            >
              {isQuizLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Brain className="mr-2 h-5 w-5" />}
              Gerar Quiz da Lore
            </Button>
            <Button
              onClick={fetchNews}
              disabled={isNewsLoading}
              variant="outline"
              size="lg"
              className="border-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 group w-full sm:w-auto text-base py-3 px-6"
            >
              {isNewsLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Newspaper className="mr-2 h-5 w-5" />}
              Gerar Notícias N54
            </Button>
        </div>

        <div className="w-full flex-1">
            {renderDynamicContent()}
        </div>
      </main>
    </div>
  );
}
