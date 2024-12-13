"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categorizedTools } from "@/lib/utils/tool-categories";

interface ToolCategoryListProps {
  currentCategory: keyof typeof categorizedTools;
  onCategoryChange: (category: keyof typeof categorizedTools) => void;
}

export function ToolCategoryList({ currentCategory, onCategoryChange }: ToolCategoryListProps) {
  return (
    <ScrollArea className="h-[300px] md:h-[400px]">
      <div className="space-y-2 pr-4">
        {(Object.keys(categorizedTools) as Array<keyof typeof categorizedTools>).map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}