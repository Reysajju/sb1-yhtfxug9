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
    ]
  },
  social: {
    name: "Social Media & Marketing",
    description: "Grow your social presence and engage audiences",
    tools: [
      { id: "hootsuite", name: "Hootsuite Professional", price: 49 },
      { id: "buffer", name: "Buffer Premium", price: 15 },
      { id: "later", name: "Later Premium", price: 25 },
      { id: "planoly", name: "Planoly", price: 13 },
      { id: "sprout", name: "Sprout Social", price: 89 },
      { id: "sendible", name: "Sendible", price: 29 },
    ]
  },
  streaming: {
    name: "Streaming & Entertainment",
    description: "Access premium entertainment services",
    tools: [
      { id: "spotify", name: "Spotify Premium", price: 9.99 },
      { id: "youtube", name: "YouTube Premium", price: 11.99 },
      { id: "netflix", name: "Netflix Premium", price: 19.99 },
      { id: "disney", name: "Disney+ Premium", price: 10.99 },
      { id: "hbo", name: "HBO Max", price: 15.99 },
      { id: "prime", name: "Amazon Prime", price: 14.99 },
    ]
  }
} as const;