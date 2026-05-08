export type ProjectTier = "standard" | "featured";

/** "current" = shown in Current Projects; "archive" = shown in Archive (expand all) */
export type ProjectStatus = "current" | "archive";

export type Project = {
  id: string;
  title: string;
  /** When false, no screenshot/placeholder is shown on the card. Defaults to true when omitted. */
  hasScreenshot?: boolean;
  imageSrc?: string;
  screenshotAlt?: string;
  outcome?: string;
  stack?: string;
  meta?: string;
  team?: string;
  repoUrl?: string;
  tier: ProjectTier;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "legislator-chatbot",
    title: "Legislator Chatbot",
    imageSrc: "/project_images/legislator-chatbot.png",
    screenshotAlt: "Legislator Chatbot project screenshot",
    outcome: "Outcome metric placeholder – e.g. reduced research time by 40%.",
    stack: "Placeholder stack – e.g. Python, FastAPI, Pinecone, OpenAI.",
    meta: "Client Project | Sp24",
    team: "Led by Jai Kasera",
    repoUrl: "https://github.com/jaikasera/Legislator-Chatbot",
    tier: "featured",
    status: "current",
  },
  {
    id: "ai-chess-engine",
    title: "AI Chess Engine",
    hasScreenshot: false,
    outcome: "Outcome metric placeholder – e.g. trained to 2000+ ELO via self-play.",
    stack: "Placeholder stack – e.g. PyTorch, NumPy, Monte Carlo Tree Search.",
    meta: "Program Project | Sp25",
    team: "Haiyan Wang, Benjamin Yan, Jai Kasera",
    repoUrl: "https://github.com/benjaminyan1/chess-engine",
    tier: "featured",
    status: "current",
  },
  {
    id: "hate-speech-detection",
    title: "Hate Speech Detection",
    hasScreenshot: false,
    outcome: "Outcome metric placeholder – e.g. 92% accuracy on moderation benchmark.",
    stack: "Placeholder stack – e.g. Python, Hugging Face Transformers.",
    meta: "Program Project | Fa23",
    team: "Brian Chen, Arthur Zhao, Darian Salehi, Jai Kasera",
    tier: "featured",
    status: "current",
  },
];

