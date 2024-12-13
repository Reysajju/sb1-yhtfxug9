"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Tool {
  id: string;
  name: string;
  price: number;
}

interface CategoryCardProps {
  name: string;
  description: string;
  tools: Tool[];
  onGetStarted: (selectedTools: string[]) => void;
}

export function CategoryCard({ name, description, tools, onGetStarted }: CategoryCardProps) {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleToolToggle = (toolId: string) => {
    setSelectedTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const totalPrice = tools
    .filter(tool => selectedTools.includes(tool.id))
    .reduce((sum, tool) => sum + tool.price, 0);

  const discountedPrice = totalPrice * 0.4; // 60% discount

  return (
    <Card className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {tools.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={tool.id}
                    checked={selectedTools.includes(tool.id)}
                    onCheckedChange={() => handleToolToggle(tool.id)}
                  />
                  <label htmlFor={tool.id} className="text-sm font-medium leading-none cursor-pointer">
                    {tool.name}
                  </label>
                </div>
                <span className="text-sm text-gray-400">${tool.price}/mo</span>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {selectedTools.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Regular Price:</span>
              <span className="line-through text-gray-400">${totalPrice.toFixed(2)}/mo</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Your Price:</span>
              <span className="text-yellow-400">${discountedPrice.toFixed(2)}/mo</span>
            </div>
            <Button
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
              onClick={() => onGetStarted(selectedTools)}
            >
              Get Started
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}