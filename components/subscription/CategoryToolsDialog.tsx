"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TOOL_CATEGORIES, CategoryId, Tool } from "@/lib/constants/tool-categories";

interface CategoryToolsDialogProps {
  category: CategoryId;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  maxTools: number;
  onToolsSelect: (tools: Tool[]) => void;
}

export function CategoryToolsDialog({
  category,
  open,
  onOpenChange,
  maxTools,
  onToolsSelect,
}: CategoryToolsDialogProps) {
  const [selectedTools, setSelectedTools] = useState<Tool[]>([]);
  const categoryData = TOOL_CATEGORIES[category];

  const handleToolToggle = (tool: Tool) => {
    setSelectedTools(prev => {
      if (prev.find(t => t.id === tool.id)) {
        return prev.filter(t => t.id !== tool.id);
      }
      if (prev.length >= maxTools) return prev;
      return [...prev, tool];
    });
  };

  const handleSubmit = () => {
    onToolsSelect(selectedTools);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {categoryData.name} Tools ({selectedTools.length}/{maxTools})
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh] mt-4">
          <div className="space-y-4 pr-4">
            {categoryData.tools.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={tool.id}
                    checked={selectedTools.some(t => t.id === tool.id)}
                    onCheckedChange={() => handleToolToggle(tool)}
                    disabled={!selectedTools.some(t => t.id === tool.id) && selectedTools.length >= maxTools}
                  />
                  <label htmlFor={tool.id} className="text-sm font-medium">
                    {tool.name}
                  </label>
                </div>
                <span className="text-sm text-yellow-400">${tool.price}/mo</span>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-6 space-y-4">
          <p className="text-sm text-gray-400 text-center">
            {selectedTools.length < maxTools
              ? `You can select ${maxTools - selectedTools.length} more tools`
              : "You've reached the maximum number of tools"}
          </p>
          <Button
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            onClick={handleSubmit}
          >
            Confirm Selection
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}