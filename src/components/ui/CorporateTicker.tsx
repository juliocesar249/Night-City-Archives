
"use client";

import React, { useState, useEffect } from 'react';
import { corporations } from '@/lib/content/corporations'; // Assuming this exports all corps
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, AlertTriangle, Zap, Megaphone } from 'lucide-react';

interface TickerMessage {
  id: string;
  corpName: string;
  corpAccentColor: string;
  message: string;
  type: 'stock_up' | 'stock_down' | 'security_alert' | 'product_launch' | 'rumor';
}

const predefinedMessagesTemplates = [
  { messageTemplate: "{corpName} stock soaring! +{value}% today.", type: 'stock_up', icon: <TrendingUp className="h-4 w-4 text-green-400" /> },
  { messageTemplate: "Heavy losses for {corpName}, stock plummets -{value}%.", type: 'stock_down', icon: <TrendingDown className="h-4 w-4 text-red-400" /> },
  { messageTemplate: "SECURITY ALERT: Increased {gangName} activity near {corpName} assets in {districtName}.", type: 'security_alert', icon: <AlertTriangle className="h-4 w-4 text-yellow-400" /> },
  { messageTemplate: "{corpName} unveils new '{productName}' cyberware line! Pre-orders open.", type: 'product_launch', icon: <Megaphone className="h-4 w-4 text-blue-400" /> },
  { messageTemplate: "Whispers on the net: {corpName} secretly developing {projectAdjective} AI project?", type: 'rumor', icon: <Zap className="h-4 w-4 text-purple-400" /> }
];

const sampleGangs = ["Maelstrom", "Tyger Claws", "Valentinos", "6th Street", "Animals"];
const sampleDistricts = ["Watson", "City Center", "Heywood", "Santo Domingo", "Pacifica"];
const sampleProducts = ["OptiCore Augs", "Ronin Reflexes", "Kage Blades", "Titan Grip", "Nightwing OS"];
const sampleAdjectives = ["controversial", "groundbreaking", "classified", "rogue", "sentient"];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateTickerMessage = (index: number): TickerMessage => {
  const corp = getRandomElement(corporations);
  const template = getRandomElement(predefinedMessagesTemplates);
  
  let message = template.messageTemplate
    .replace("{corpName}", corp.name.split(":")[0].trim())
    .replace("{value}", (Math.random() * 5 + 1).toFixed(1))
    .replace("{gangName}", getRandomElement(sampleGangs))
    .replace("{districtName}", getRandomElement(sampleDistricts))
    .replace("{productName}", getRandomElement(sampleProducts))
    .replace("{projectAdjective}", getRandomElement(sampleAdjectives));

  return {
    id: `${corp.name.replace(/\s+/g, '-').toLowerCase()}-${index}-${Date.now()}`,
    corpName: corp.name.split(":")[0].trim(),
    corpAccentColor: corp.accentColor,
    message: message,
    type: template.type,
  };
};

export function CorporateTicker() {
  const [messages, setMessages] = useState<TickerMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Generate initial batch of messages
    const initialMessages = Array.from({ length: 10 }, (_, i) => generateTickerMessage(i));
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % messages.length;
        // If we're about to loop, regenerate some messages to keep it fresh
        if (nextIndex === 0) {
          const newMessages = Array.from({ length: 10 }, (_, i) => generateTickerMessage(i));
          setMessages(newMessages);
        }
        return nextIndex;
      });
    }, 7000); // Change message every 7 seconds

    return () => clearInterval(intervalId);
  }, [messages]);

  if (messages.length === 0) {
    return <div className="text-sm text-muted-foreground p-2 text-center">Initializing corporate datastream...</div>;
  }

  const currentMessage = messages[currentIndex];

  const getIconForType = (type: TickerMessage['type'], corpAccent: string) => {
    switch (type) {
      case 'stock_up': return <TrendingUp className="h-5 w-5 mr-2 flex-shrink-0" style={{color: 'hsl(var(--primary))'}} />;
      case 'stock_down': return <TrendingDown className="h-5 w-5 mr-2 flex-shrink-0" style={{color: 'hsl(var(--destructive))'}} />;
      case 'security_alert': return <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" style={{color: corpAccent}}/>;
      case 'product_launch': return <Megaphone className="h-5 w-5 mr-2 flex-shrink-0" style={{color: corpAccent}}/>;
      case 'rumor': return <Zap className="h-5 w-5 mr-2 flex-shrink-0" style={{color: 'hsl(var(--accent))'}}/>;
      default: return <Zap className="h-5 w-5 mr-2 flex-shrink-0" style={{color: corpAccent}}/>;
    }
  };

  return (
    <div className="w-full bg-card border border-border rounded-lg p-3 my-6 shadow-md overflow-hidden">
      <div className="flex items-center animate-pulse-once" key={currentMessage.id}> {/* key ensures re-render for animation */}
        {getIconForType(currentMessage.type, currentMessage.corpAccentColor)}
        <p className="text-sm text-foreground truncate">
          <span className="font-semibold" style={{ color: currentMessage.corpAccentColor }}>
            {currentMessage.corpName.toUpperCase()}:
          </span>
          <span className="ml-2">{currentMessage.message}</span>
        </p>
      </div>
      <style jsx>{`
        @keyframes pulse-once {
          0% { opacity: 0.3; transform: translateY(5px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-once {
          animation: pulse-once 1s ease-out;
        }
      `}</style>
    </div>
  );
}
