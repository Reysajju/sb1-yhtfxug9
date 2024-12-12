"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PREMIUM_TOOLS } from "@/lib/constants/tools";

interface ToolSelectorProps {
  selectedTools: string[];
  onToolSelect: (tool: string) => void;
  maxTools: number;
  onNext: () => void;
}

export function ToolSelector({ selectedTools, onToolSelect, maxTools, onNext }: ToolSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = PREMIUM_TOOLS.filter(
    tool => tool.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedTools.map(tool => (
          <Badge
            key={tool}
            variant="secondary"
            className="cursor-pointer"
            onClick={() => onToolSelect(tool)}
          >
            {tool} ×
          </Badge>
        ))}
      </div>

      <ScrollArea className="h-[300px] rounded-md border p-4">
        <div className="space-y-2">
          {filteredTools.map(tool => (
            <Button
              key={tool}
              variant={selectedTools.includes(tool) ? "secondary" : "outline"}
              onClick={() => onToolSelect(tool)}
              className="w-full justify-start"
              disabled={selectedTools.length >= maxTools && !selectedTools.includes(tool)}
            >
              {tool}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-muted-foreground">
          Selected: {selectedTools.length} / {maxTools} tools
        </p>
        <Button
          onClick={onNext}
          disabled={selectedTools.length === 0}
          className="bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}