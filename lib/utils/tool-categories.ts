export type ToolCategory = 
  | "professional"
  | "design"
  | "marketing"
  | "productivity"
  | "ecommerce"
  | "streaming";

export const categorizedTools: Record<ToolCategory, string[]> = {
  professional: [
    "LinkedIn Premium",
    "Grammarly Premium",
    "ChatGPT Plus",
  ],
  design: [
    "Canva Pro",
    "Adobe Creative Cloud",
    "Final Cut Pro",
    "Figma Pro",
  ],
  marketing: [
    "SEMrush",
    "Ahrefs",
    "BuzzSumo",
    "Moz Pro",
    "Surfer SEO",
    "Hootsuite Professional",
    "Buffer Premium",
  ],
  productivity: [
    "Google Workspace",
    "Trello Premium",
    "Notion Premium",
    "Asana Premium",
    "Monday.com",
    "ClickUp",
    "Slack Premium",
    "Zoom Pro",
    "Microsoft 365",
    "Dropbox Business",
  ],
  ecommerce: [
    "Shopify Plus",
    "Wix Premium",
    "BigCommerce",
    "WooCommerce Premium",
  ],
  streaming: [
    "Spotify Premium",
    "YouTube Premium",
    "Netflix Premium",
    "Disney+ Premium",
  ],
};