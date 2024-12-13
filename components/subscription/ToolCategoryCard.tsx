"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CategoryToolsDialog } from "./CategoryToolsDialog";
import { TOOL_CATEGORIES, CategoryId, Tool } from "@/lib/constants/tool-categories";

interface ToolCategoryCardProps {
  categoryId: CategoryId;
  maxTools: number;
  onToolsSelect: (categoryId: CategoryId, tools: Tool[]) => void;
}

export function ToolCategoryCard({ categoryId, maxTools, onToolsSelect }: ToolCategoryCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const category = TOOL_CATEGORIES[categoryId];

  const handleToolsSelect = (tools: Tool[]) => {
    onToolsSelect(categoryId, tools);
  };

  return (
    <>
      <Card className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl">{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            onClick={() => setDialogOpen(true)}
          >
            Select Tools
          </Button>
        </CardContent>
      </Card>

      <CategoryToolsDialog
        category={categoryId}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        maxTools={maxTools}
        onToolsSelect={handleToolsSelect}
      />
    </>
  );
}