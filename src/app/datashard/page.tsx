
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Database, AlertTriangle, RefreshCw, Newspaper, Brain, Check, X, Ear } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getLoreDataShard, getNightCityQuiz, getNightCityNews, getNightCityRumor } from "@/app/actions/loreActions";
import type { QuizOutput, QuizItem as RawQuizItem } from '@/ai/flows/quiz-flow';
import type { NewsOutput } from '@/ai/flows/news-flow';
import type { RumorOutput } from '@/ai/flows/rumor-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type ActiveContentType = "shard" | "quiz" | "news" | "rumor" | null;

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

  const [rumorData, setRumorData] = useState<RumorOutput | null>(null);
  const [isRumorLoading, setIsRumorLoading] = useState(false);
  const [rumorError, setRumorError] = useState<string | null>(null);
  
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
    setRumorData(null);
    setRumorError(null);
  };

  const fetchLoreSnippet = async () => {
    clearPreviousContent();
    setActiveContent("shard");
    setIsLoreLoading(true);
    try {
      const newShard = await getLoreDataShard();
      setLoreSnippet(newShard);
    } catch (err: any) {
      setLoreError(err.message || "Falha ao interceptar o Data Shard. As linhas podem estar cruzadas ou o arquivo de lore corrompido.");
      setLoreSnippet(null);
    } finally {
      setIsLoreLoading(false);
    }
  };

  const fetchQuiz = async () => {
    clearPreviousContent();
    setActiveContent("quiz");
    setIsQuizLoading(true);
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
    setActiveContent("news");
    setIsNewsLoading(true);
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

  const fetchRumor = async () => {
    clearPreviousContent();
    setActiveContent("rumor");
    setIsRumorLoading(true);
    try {
      const newRumor = await getNightCityRumor();
      setRumorData(newRumor);
    } catch (err: any) {
      setRumorError(err.message || "Falha ao interceptar boatos. As fontes devem ter secado ou há muita interferência na rede.");
      setRumorData(null);
    } finally {
      setIsRumorLoading(false);
    }
  };
  
  const handleAnswerSelection = (questionIndex: number, selectedOption: string) => {
    if (revealedAnswers[questionIndex]) return; 
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
    setRevealedAnswers(prev => ({ ...prev, [questionIndex]: true }));
  };

  const isLoading = isLoreLoading || isQuizLoading || isNewsLoading || isRumorLoading;

  const renderDynamicContent = () => {
    if (isLoading && activeContent) {
      let loadingMessage = "Processando solicitação...";
      if (isLoreLoading) loadingMessage = "Acessando arquivos de lore...";
      if (isQuizLoading) loadingMessage = "Compilando simulação de conhecimento...";
      if (isNewsLoading) loadingMessage = "Interceptando feed da N54...";
      if (isRumorLoading) loadingMessage = "Escutando os sussurros da rua...";

      return (
        <div className="flex flex-col items-center text-center py-10 mt-8">
          <Loader2 className="h-16 w-16 text-primary animate-spin mb-6" />
          <p className="text-xl text-muted-foreground">Carregando...</p>
          <p className="text-md text-primary">{loadingMessage}</p>
        </div>
      );
    }

    switch (activeContent) {
      case "shard":
        if (loreError) {
          return (
            <Card className="mt-8 text-center text-destructive p-6 border border-destructive rounded-lg bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro de Transmissão</h3>
              <p className="text-md">{loreError}</p>
            </Card>
          );
        }
        if (loreSnippet) {
          return (
             <Card className="mt-8 w-full max-w-2xl mx-auto shadow-xl border-accent">
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
            <Card className="mt-8 text-center text-destructive p-6 border border-destructive rounded-md bg-destructive/10 w-full max-w-3xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro na Geração do Quiz</h3>
              <p className="text-md">{quizError}</p>
            </Card>
          );
        }
        if (quizData && shuffledQuizItems.length > 0) {
          return (
            <Card className="mt-8 w-full max-w-3xl mx-auto shadow-xl border-primary">
                <CardHeader className="bg-primary/10 p-4">
                    <CardTitle className="text-primary text-3xl font-headline text-center">{quizData.quizTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <ScrollArea className="w-full h-[600px] p-1">
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
            <Card className="mt-8 text-center text-destructive p-6 border border-destructive rounded-md bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro na Transmissão da N54</h3>
              <p className="text-md">{newsError}</p>
            </Card>
          );
        }
        if (newsData) {
          return (
            <Card className="mt-8 w-full max-w-2xl mx-auto shadow-xl border-secondary">
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
      
      case "rumor":
        if (rumorError) {
          return (
            <Card className="mt-8 text-center text-destructive p-6 border border-destructive rounded-md bg-destructive/10 w-full max-w-2xl mx-auto shadow-lg">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-headline text-2xl mb-2">Erro na Interceptação de Boatos</h3>
              <p className="text-md">{rumorError}</p>
            </Card>
          );
        }
        if (rumorData) {
          return (
             <Card className="mt-8 w-full max-w-2xl mx-auto shadow-xl border-purple-500">
                <CardHeader className="bg-purple-500/10 p-4">
                    <CardTitle className="text-purple-400 text-2xl font-headline text-center">Sussurro da Rua Interceptado</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <blockquote className="text-lg sm:text-xl text-center text-foreground leading-relaxed p-4 border-l-4 border-purple-500 bg-purple-500/5 rounded-md shadow-inner">
                        &quot;{rumorData.rumor}&quot;
                    </blockquote>
                </CardContent>
             </Card>
          );
        }
        return null;

      default:
         if (!isLoading && !activeContent) {
          return (
            <div className="mt-12 text-center">
                <Database className="h-24 w-24 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-xl text-muted-foreground">Selecione uma operação acima para iniciar a varredura.</p>
            </div>
          );
         }
         return null;
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
        <Card className="w-full max-w-4xl shadow-xl border-primary rounded-lg overflow-hidden transition-all duration-300 ease-in-out mb-8" style={{ boxShadow: `0 0 15px 3px hsl(var(--primary))` }}>
          <CardHeader className="bg-card-foreground p-6 text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">Centro de Dados de Night City</CardTitle>
            <CardDescription className="text-muted-foreground pt-2 text-md sm:text-lg">
              Acesse fragmentos de lore, teste seus conhecimentos, confira as últimas notícias ou intercepte boatos das ruas.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 mb-8 p-4 border border-border rounded-lg bg-card/50 shadow-md">
            <Button
              onClick={fetchLoreSnippet}
              disabled={isLoading && activeContent !== 'shard'}
              variant="outline"
              size="lg"
              className="border-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group w-full text-base py-3 px-6"
            >
              {isLoreLoading && activeContent === 'shard' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <RefreshCw className="mr-2 h-5 w-5 group-hover:animate-spin" />}
              Gerar Data Shard
            </Button>
            <Button
              onClick={fetchQuiz}
              disabled={isLoading && activeContent !== 'quiz'}
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group w-full text-base py-3 px-6"
            >
              {isQuizLoading && activeContent === 'quiz' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Brain className="mr-2 h-5 w-5" />}
              Gerar Quiz da Lore
            </Button>
            <Button
              onClick={fetchNews}
              disabled={isLoading && activeContent !== 'news'}
              variant="outline"
              size="lg"
              className="border-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 group w-full text-base py-3 px-6"
            >
              {isNewsLoading && activeContent === 'news' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Newspaper className="mr-2 h-5 w-5" />}
              Gerar Notícias N54
            </Button>
            <Button
              onClick={fetchRumor}
              disabled={isLoading && activeContent !== 'rumor'}
              variant="outline"
              size="lg"
              className="border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300 group w-full text-base py-3 px-6"
            >
              {isRumorLoading && activeContent === 'rumor' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Ear className="mr-2 h-5 w-5" />}
              Ouvir Boatos da Rua
            </Button>
        </div>

        <div className="w-full flex-1 min-h-[320px]"> {/* Ensure this container can take up space */}
            {renderDynamicContent()}
        </div>
      </main>
    </div>
  );
}

    
