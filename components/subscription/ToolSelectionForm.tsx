"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PREMIUM_TOOLS } from "@/lib/constants/tools";
import { ToolCategory, categorizedTools } from "@/lib/utils/tool-categories";

interface ToolSelectionFormProps {
  selectedTools: string[];
  onToolSelect: (tool: string) => void;
  maxTools: number;
  onSubmit: () => void;
}

export function ToolSelectionForm({
  selectedTools,
  onToolSelect,
  maxTools,
  onSubmit
}: ToolSelectionFormProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");

  const filteredTools = PREMIUM_TOOLS.filter(tool => 
    tool.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeCategory === "all" || categorizedTools[activeCategory].includes(tool))
  );

  const categories: { id: ToolCategory | "all"; label: string }[] = [
    { id: "all", label: "All Tools" },
    { id: "professional", label: "Professional" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
    { id: "productivity", label: "Productivity" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "streaming", label: "Streaming" },
  ];

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-8rem)] sm:max-h-none space-y-4">
      <Alert className="flex-shrink-0">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          You can select up to {maxTools} tools with your plan
        </AlertDescription>
      </Alert>

      <div className="space-y-4 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <ScrollArea className="w-full">
          <div className="flex space-x-2 pb-2 overflow-x-auto">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap flex-shrink-0"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-wrap gap-2 min-h-[40px] flex-shrink-0">
        {selectedTools.map(tool => (
          <Badge
            key={tool}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80"
            onClick={() => onToolSelect(tool)}
          >
            {tool} ×
          </Badge>
        ))}
      </div>

      <ScrollArea className="flex-1 min-h-[200px] rounded-md border p-4">
        <div className="space-y-2">
          {filteredTools.map(tool => (
            <Button
              key={tool}
              variant={selectedTools.includes(tool) ? "secondary" : "outline"}
              onClick={() => onToolSelect(tool)}
              className="w-full justify-start text-left"
              disabled={selectedTools.length >= maxTools && !selectedTools.includes(tool)}
            >
              <span className="truncate">{tool}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="flex items-center justify-between pt-4 border-t flex-shrink-0">
        <p className="text-sm text-muted-foreground">
          Selected: {selectedTools.length} / {maxTools} tools
        </p>
        <Button
          onClick={onSubmit}
          disabled={selectedTools.length === 0}
          className="bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}