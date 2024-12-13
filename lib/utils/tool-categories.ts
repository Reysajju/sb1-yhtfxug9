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
    "Microsoft 365",
    "DocuSign",
  ],
  design: [
    "Canva Pro",
    "Adobe Creative Cloud",
    "Final Cut Pro",
    "Figma Pro",
    "Sketch",
  ],
  marketing: [
    "SEMrush",
    "Ahrefs",
    "BuzzSumo",
    "Moz Pro",
    "Surfer SEO",
    "Mailchimp Premium",
    "HubSpot Premium",
  ],
  productivity: [
    "Google Workspace",
    "Trello Premium",
    "Notion Premium",
    "Asana Premium",
    "Monday.com",
    "ClickUp",
    "Slack Premium",
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