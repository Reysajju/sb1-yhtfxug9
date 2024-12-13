"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categorizedTools } from "@/lib/utils/tool-categories";

interface ToolListProps {
  category: keyof typeof categorizedTools;
  selectedTools: string[];
  maxTools: number;
  onToolSelect: (tool: string) => void;
}

export function ToolList({ category, selectedTools, maxTools, onToolSelect }: ToolListProps) {
  return (
    <ScrollArea className="h-[300px] md:h-[400px]">
      <div className="space-y-3 pr-4">
        {categorizedTools[category].map((tool) => (
          <div key={tool} className="flex items-center space-x-3">
            <Checkbox
              id={tool}
              checked={selectedTools.includes(tool)}
              onCheckedChange={() => onToolSelect(tool)}
              disabled={!selectedTools.includes(tool) && selectedTools.length >= maxTools}
            />
            <label
              htmlFor={tool}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {tool}
            </label>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}