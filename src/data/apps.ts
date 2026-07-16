export type AppInfo = {
  id: string;
  name: string;
  status: string;
  summary: string;
  longDescription: string;
  features: string[];
  playStoreUrl: string;
  privacyUrl: string;
  supportUrl: string;
};

export const apps: AppInfo[] = [
  {
    id: "nlp-trainer",
    name: "NLP Trainer",
    status: "Available on Google Play",
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
    status: "Internal testing",
    summary:
      "An Android game currently available for internal testing through Bernhard Apps.",
    longDescription:
      "Bombats is currently in internal testing. Tester feedback will help shape the game before it is prepared for a wider release.",
    features: [
      "Internal testing",
      "Tester feedback",
      "Android game",
      "In development",
    ],
    playStoreUrl: "",
    privacyUrl: "",
    supportUrl: "/support",
  },
];
