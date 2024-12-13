export const TOOL_CATEGORIES = {
  seo: {
    name: "SEO & Marketing",
    description: "Dominate search rankings and boost your online presence",
    tools: [
      { id: "semrush", name: "SEMrush", price: 119.95 },
      { id: "ahrefs", name: "Ahrefs", price: 99 },
      { id: "moz-pro", name: "Moz Pro", price: 99 },
      { id: "surfer-seo", name: "Surfer SEO", price: 49 },
      { id: "buzzsumo", name: "BuzzSumo", price: 99 },
      { id: "mangools", name: "Mangools", price: 49 },
      { id: "ubersuggest", name: "Ubersuggest", price: 29 },
      { id: "serpstat", name: "Serpstat", price: 69 },
    ]
  },
  design: {
    name: "Design & Creative",
    description: "Create stunning visuals and professional content",
    tools: [
      { id: "adobe-cc", name: "Adobe Creative Cloud", price: 54.99 },
      { id: "canva-pro", name: "Canva Pro", price: 12.99 },
      { id: "figma-pro", name: "Figma Pro", price: 15 },
      { id: "sketch", name: "Sketch", price: 99 },
      { id: "final-cut", name: "Final Cut Pro", price: 299.99 },
      { id: "premiere-pro", name: "Premiere Pro", price: 20.99 },
      { id: "invision", name: "InVision", price: 7.95 },
      { id: "photoshop", name: "Photoshop", price: 20.99 },
    ]
  },
  productivity: {
    name: "Productivity & Management",
    description: "Streamline your workflow and boost efficiency",
    tools: [
      { id: "notion-pro", name: "Notion Premium", price: 8 },
      { id: "asana-pro", name: "Asana Premium", price: 10.99 },
      { id: "monday", name: "Monday.com", price: 10 },
      { id: "clickup", name: "ClickUp", price: 7 },
      { id: "trello-pro", name: "Trello Premium", price: 10 },
      { id: "slack-pro", name: "Slack Premium", price: 8.75 },
      { id: "basecamp", name: "Basecamp", price: 99 },
      { id: "todoist", name: "Todoist Pro", price: 4 },
    ]
  },
  ai: {
    name: "AI & Automation",
    description: "Leverage cutting-edge AI tools for your business",
    tools: [
      { id: "chatgpt-plus", name: "ChatGPT Plus", price: 20 },
      { id: "jasper-ai", name: "Jasper AI", price: 49 },
      { id: "copy-ai", name: "Copy.ai", price: 36 },
      { id: "midjourney", name: "Midjourney", price: 10 },
      { id: "dalle", name: "DALL-E Credits", price: 15 },
      { id: "synthesia", name: "Synthesia", price: 30 },
      { id: "grammarly", name: "Grammarly Premium", price: 12 },
      { id: "otter-ai", name: "Otter.ai", price: 8.33 },
    ]
  },
  business: {
    name: "Business & Professional",
    description: "Essential tools for business growth",
    tools: [
      { id: "linkedin-premium", name: "LinkedIn Premium", price: 29.99 },
      { id: "gsuite", name: "Google Workspace", price: 12 },
      { id: "docusign", name: "DocuSign", price: 25 },
      { id: "quickbooks", name: "QuickBooks", price: 25 },
      { id: "freshbooks", name: "FreshBooks", price: 15 },
      { id: "zoom-pro", name: "Zoom Pro", price: 14.99 },
      { id: "calendly", name: "Calendly Pro", price: 8 },
      { id: "hubspot", name: "HubSpot Starter", price: 45 },
    ]
  },
  streaming: {
    name: "Streaming & Entertainment",
    description: "Premium entertainment services",
    tools: [
      { id: "spotify", name: "Spotify Premium", price: 9.99 },
      { id: "youtube", name: "YouTube Premium", price: 11.99 },
      { id: "netflix", name: "Netflix Premium", price: 19.99 },
      { id: "disney", name: "Disney+ Premium", price: 10.99 },
      { id: "hbo", name: "HBO Max", price: 15.99 },
      { id: "prime", name: "Amazon Prime", price: 14.99 },
      { id: "apple-tv", name: "Apple TV+", price: 6.99 },
      { id: "hulu", name: "Hulu Premium", price: 14.99 },
    ]
  }
} as const;

export type CategoryId = keyof typeof TOOL_CATEGORIES;
export type Tool = typeof TOOL_CATEGORIES[CategoryId]["tools"][number];