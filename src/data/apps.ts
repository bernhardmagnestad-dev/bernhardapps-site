export type AppInfo = {
  id: string;
  name: string;
  status: string;
  category: "published" | "development";
  summary: string;
  longDescription: string;
  features: string[];
  playStoreUrl: string;
  privacyUrl: string;
  supportUrl: string;
  testingUrl?: string;
  iconUrl?: string;
};

export const apps: AppInfo[] = [
  {
    id: "nlp-trainer",
    name: "NLP Trainer",
    status: "Available on Google Play",
    category: "published",
    summary:
      "A practical app for coaches, NLP practitioners and life coaches who want a simple way to keep track of clients, sessions, notes, planning and NLP techniques.",
    longDescription:
      "NLP Trainer is an app made for coaches, NLP practitioners and life coaches who want a simple way to keep track of clients, sessions, notes, planning and NLP techniques. Instead of using several different tools, NLP Trainer brings the most important parts of coaching work into one place. You can create clients, add session notes, plan appointments, keep track of payment status, prepare invoices and use the built-in NLP training library when you need inspiration or structure. The app is built to be practical in everyday use, whether you are working with one client, several clients, courses or your own training.",
    features: [
      "Manage clients",
      "Write session notes",
      "Keep payment overview",
      "Prepare invoices",
      "Use the planner",
      "Explore NLP techniques",
      "Add your own notes",
      "Local storage",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bernhard.nlptrainer",
    privacyUrl: "/nlp-trainer/privacy-policy",
    supportUrl: "/support",
  },
  {
    id: "bombats",
    name: "Bombats",
    status: "Available on Google Play",
    category: "published",
    summary:
      "A casual Android game from Bernhard Apps.",
    longDescription:
      "Bombats is a casual Android game from Bernhard Apps. The game is built for quick play sessions, simple controls and arcade-style challenge.",
    features: [
      "Casual Android game",
      "Quick play sessions",
      "Arcade challenge",
      "Built with feedback",
    ],
    playStoreUrl: "",
    privacyUrl: "/bombats/privacy-policy",
    supportUrl: "/support",
    testingUrl: "/bombats/testing",
    iconUrl: "/bombats-icon.webp",
  },
  {
    id: "norsk-kryssord",
    name: "Norsk Kryssord",
    status: "Open testing",
    category: "development",
    summary:
      "A Norwegian crossword puzzle app currently available for open testing.",
    longDescription:
      "Norsk Kryssord is currently in open testing. Tester feedback is used to improve puzzle flow, readability and the overall game experience before a wider public release.",
    features: [
      "Open testing",
      "Norwegian crossword puzzles",
      "Local progress",
      "Built with feedback",
    ],
    playStoreUrl: "",
    privacyUrl: "/norsk-kryssord/privacy-policy",
    supportUrl: "/support",
    testingUrl: "/norsk-kryssord/testing",
    iconUrl: "/norsk-kryssord-icon.webp",
  },
];
