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
  description?: string;
  meta?: string;
  team?: string;
  repoUrl?: string;
  slidesUrl?: string;
  tier: ProjectTier;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "optimal-transport",
    title: "Unifying Optimal Transport Frameworks in Diffusion",
    imageSrc: "/project_images/optimal-transport.png",
    description: "This project focuses on unifying diffusion and optimal transport frameworks, including Flow Matching, Schrödinger Bridges, and DDPMs, to simplify diffusion model training and inference. It explores DiT architectures and optimized sampling methods to improve performance.",
    meta: "Sp26",
    team: "Steve Yin",
    slidesUrl: "https://docs.google.com/presentation/d/1be63pw63t1oHu2bu7sKDec-CaN-yb2c2LcF6otjaT8A/edit?usp=sharing",
    tier: "featured",
    status: "current",
  },
  {
    id: "ai-news-digest",
    title: "AI News Digest",
    imageSrc: "/project_images/ai-news.png",
    description: "This project develops a personalized AI news digest system that uses user-interaction data to generate timed news summaries and recommend articles. It includes article ingestion, cleaning, embedding, user-interest modeling, and ranking pipelines using RSS feeds and vector similarity search.",
    meta: "Sp26",
    team: "Matthew, Aaryan, Kevin",
    slidesUrl: "https://docs.google.com/presentation/d/130rNOAQ9TjIrbLw49FJAf0eS2rw8QVBc9QoOwlqzCpQ/edit?usp=drivesdk",
    tier: "standard",
    status: "current",
  },
  {
    id: "ai-tour-guide",
    title: "Duke AI Tour Guide",
    imageSrc: "/project_images/ai-tour-guide.png",
    description: "AI-enabled tour guide web app that allows users to take pictures of Duke campus buildings and receive short summaries with up-to-date information. Uses CLIP for building recognition, LLMs for chatbot responses, and real-time location tracking for campus navigation.",
    meta: "Sp26",
    team: "Taylor Allen, Erica Zhang, Natalie Lai, Reese Pagtalunan, Uzair Chaudhry, Veronica Guo",
    slidesUrl: "https://docs.google.com/presentation/d/1GWsWNpebQj4WnEt6SiV64fD7KyFKZ_enYKXEFSAZWQE/edit",
    tier: "featured",
    status: "current",
  },
  {
    id: "ai-powered-film-review",
    title: "Courtvision: AI-Powered Sport Film Review",
    imageSrc: "/project_images/courtvision-ai-powered-film-review.png",
    description: "AI-powered interface for competitive sports teams using computer vision techniques, including object detection and player tracking, to analyze sports video, map court locations, and segment game footage into player-specific possession clips.",
    meta: "Sp26",
    team: "Peakay, Suvas, Alysa, Adonias",
    slidesUrl: "https://drive.google.com/file/d/1lyhOSXtNNqeCjc8EWCZ2Q32Jkyiql66c/view?usp=sharing",
    tier: "standard",
    status: "current",
  },
  {
    id: "multimodal-ncde-medical-imaging",
    title: "Multimodal NCDE for Medical Image Forecasting",
    imageSrc: "/project_images/medical-imaging.png",
    description: "Develops a multimodal neural controlled differential equation (NCDE) model to perform optical flow, interpolation, and extrapolation of medical image sequences to forecast disease progression in Alzheimer's patients using PET and MRI data.",
    meta: "Sp26",
    team: "Aashish Cheruvu, James Wright, Matthew Xie, Tristan Carter, Alan Ye",
    slidesUrl: "https://docs.google.com/presentation/d/1oatgcv9vszUUGR1sd_W2l2RO3EGW9_EGTnV5KJw96EU/edit?slide=id.g3d7300c3e32_4_75#slide=id.g3d7300c3e32_4_75",
    tier: "featured",
    status: "current",
  },
  {
    id: "comparative-instructions-vla",
    title: "Comparative Instructions Evaluation for Vision-Language-Action Models",
    hasScreenshot: false,
    imageSrc: "",
    description: "Internal research initiative evaluating whether Vision-Language-Action (VLA) models can correctly interpret relational comparison instructions between objects using controlled two-object scenes in simulation environments like SimplerEnv or LIBERO.",
    meta: "Sp26",
    team: "",
    slidesUrl: "https://docs.google.com/presentation/d/19ywW3lHIs4rtsZP3z8yfBImyVCN3NzUF/edit?usp=sharing&ouid=115565500497425283548&rtpof=true&sd=true",
    tier: "standard",
    status: "current",
  },
  {
    id: "music-genre-prediction",
    title: "Music Genre Prediction",
    imageSrc: "/project_images/music-genre-prediction.png",
    description: "Audio classification system that predicts the genre of a 30-second music clip using machine learning models trained on extracted audio features. Uses the FMA small dataset for preprocessing, feature extraction, label generation, and model evaluation.",
    meta: "Sp26",
    team: "Kaijing Zheng, Christian Kirby, Graze Zheng, Anoushka Chaudhury",
    slidesUrl: "https://docs.google.com/presentation/d/1ivCYcwntiQxrNbylg0GzRdkAXfmZInbFoS1kxQqrziI/edit?slide=id.g3d583bef732_0_0#slide=id.g3d583bef732_0_0",
    tier: "standard",
    status: "current",
  },
  {
    id: "ai-chess-engine",
    title: "AI Chess Engine",
    imageSrc: "/project_images/ai-chess.jpg",
    screenshotAlt: "Chess Enginge screenshot, photo taken by Dmitry Demidov",
    description: "A project dedicated to building an AI chess engine that can analyze and play chess games from scratch.",
    meta: "Sp25",
    team: "Haiyan Wang, Benjamin Yan, Jai Kasera",
    repoUrl: "https://github.com/benjaminyan1/chess-engine",
    tier: "standard",
    status: "current",
  },
  {
    id: "financial-stock-price-prediction",
    title: "Using Financial Data for Stock Price Prediction",
    imageSrc: "/project_images/financial-data-stock-prediction.png",
    description: "Financial prediction model that forecasts whether a stock will move up or down on the next trading day using company-related news headlines and historical price behavior. Combines news-based, price-based, and ensemble modeling approaches.",
    meta: "Sp26",
    team: "Cheri Ho, Moses Cho, Tim Jun, Gordon Li, Raphael Karamagi",
    slidesUrl: "https://docs.google.com/presentation/d/1jQg5166AYT1Su9be5JkPFn2j9vVHqAirvG2ppL-OlLA/edit?usp=drivesdk",
    tier: "standard",
    status: "current",
  },
  {
    id: "prediction-markets",
    title: "Predicting Changes in Prediction Markets",
    imageSrc: "/project_images/prediction-markets.png",
    description: "This project focuses on predicting changes in prediction market probabilities for events such as recessions, policy decisions, and geopolitical outcomes using market history and macroeconomic signals. It combines Polymarket data with financial indicators like VIX, gold, oil, and Bitcoin, and evaluates OLS, RidgeCV, and XGBoost models across multiple forecasting horizons.",
    meta: "Sp26",
    team: "Ruben Marcus, Alejandro Wigisser",
    slidesUrl: "https://docs.google.com/presentation/d/1N-BhR3XI5uN3hvoXn5d6afmRXZfmXn5UZ7Ig_PoSZ6w/edit?slide=id.g3d27788c90b_0_43#slide=id.g3d27788c90b_0_43",
    tier: "standard",
    status: "current",
  },
  {
    id: "legislator-chatbot",
    title: "Legislator Chatbot",
    imageSrc: "/project_images/legislator-chatbot.png",
    screenshotAlt: "Legislator Chatbot project screenshot",
    description: "Chatbot that leverages Retrieval Augmented Generation (RAG) to provide up-to-date information about US legislation and policy using bills, hearings, and voting polls. Integrates recent data scraped from the US Congress website to answer policy-related questions more accurately than a standard LLM.",
    meta: "Client Project | Sp24",
    team: "Jai Kasera",
    repoUrl: "https://github.com/jaikasera/Legislator-Chatbot",
    tier: "featured",
    status: "current",
  },
  {
    id: "liberata-topic-tagging",
    title: "Liberata – Topic Tagging & Classification",
    imageSrc: "/project_images/liberata-tagging.png",
    description: "A client project initiative focused on ML techniques in paper tagging and classification.",
    meta: "Sp26",
    team: "Rohan Wilmot, Iurii Beliaev, Mihail Mircheski, Ian Laurence, Charlie Berman, Aashiv Jain",
    tier: "standard",
    status: "current",
  },
  {
    id: "automatic-speech-destuttering",
    title: "Automatic Speech Destuttering",
    hasScreenshot: false,
    imageSrc: "",
    description: "Machine learning pipeline that automatically detects and removes speech dysfluencies, or stuttering. Uses Whisper-generated transcripts, a dysfluency detection model trained on labeled data, and time-domain audio removal to create fluent speech and transcripts.",
    meta: "Sp26",
    team: "Danielle Li, Bryan Jiang, Nicole Li, Joseph Song, Colin Zeng",
    slidesUrl: "https://www.canva.com/design/DAHDsd3WXv4/uyTWBTvCqqgxa3irW5hsyw/edit",
    tier: "standard",
    status: "current",
  },
  {
    id: "liberata-author-share-estimation",
    title: "Liberata – Author Attribution",
    hasScreenshot: false,
    imageSrc: "",
    description: "A client project initiative focused on ML techniques in author attribution.",
    meta: "Sp26",
    team: "Rohan Wilmot, Iurii Beliaev, Mihail Mircheski, Ian Laurence, Charlie Berman, Aashiv Jain",
    slidesUrl: "",
    tier: "standard",
    status: "current",
  },
];

