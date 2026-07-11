import { CheckCircle2, ExternalLink } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { apps } from "../data/apps";

type NlpTrainerPageProps = {
  mode?: "published" | "development";
};

export function NlpTrainerPage({ mode = "published" }: NlpTrainerPageProps) {
  const app = apps[0];
  const isDevelopmentMode = mode === "development";
  const testerEmailUrl = `mailto:contact@bernhardapps.com?subject=${encodeURIComponent(
    `Apply for tester program ${app.name}`
  )}`;
  const screenshots = [
    "/nlp-trainer-screenshot-1.webp",
    "/nlp-trainer-screenshot-2.webp",
    "/nlp-trainer-screenshot-3.webp",
    "/nlp-trainer-screenshot-4.webp",
    "/nlp-trainer-screenshot-5.webp",
  ];
  const featureDetails = [
    [
      "Manage clients",
      "Create client profiles with contact information, notes and session history.",
    ],
    [
      "Write session notes",
      "Add notes from each session, including problem, action, result, session type, price and techniques used.",
    ],
    [
      "Keep payment overview",
      "See which sessions are paid, unpaid or invoiced, so it is easier to stay organized.",
    ],
    [
      "Prepare invoices",
      "Select sessions and view invoice totals directly inside the app.",
    ],
    [
      "Use the planner",
      "Plan upcoming sessions, courses and appointments in a simple calendar view.",
    ],
    [
      "Explore NLP techniques",
      "Browse and search NLP techniques by name or category, and use them as a practical toolbox for coaching and personal development.",
    ],
    [
      "Add your own notes",
      "Each technique has a My notes field where you can write your own reminders, variations and practical experience.",
    ],
    [
      "Local storage",
      "Your client information and notes are stored locally on your device. NLP Trainer does not store client data on external servers.",
    ],
  ];

  return (
    <>
      <section className="section subpage-hero">
        <div>
          <p className="eyebrow">
            {isDevelopmentMode ? "Tester program" : app.status}
          </p>
          <h1>{app.name}</h1>
          <p>{app.longDescription}</p>
          <div className="hero-actions">
            {isDevelopmentMode ? (
              <a className="button primary" href={testerEmailUrl}>
                Become a Tester <ExternalLink size={18} aria-hidden="true" />
              </a>
            ) : (
              <ButtonLink to={app.playStoreUrl}>
                Google Play <ExternalLink size={18} aria-hidden="true" />
              </ButtonLink>
            )}
            <ButtonLink to="/support" variant="secondary">
              Support
            </ButtonLink>
          </div>
        </div>
        <div className="app-detail-media">
          <img
            className="detail-hero-image"
            src="/nlp-trainer-hero.webp"
            alt="NLP Trainer promotional graphic"
          />
        </div>
      </section>
      <section className="section app-gallery-section">
        <SectionHeader title="Screenshots and app details">
          NLP Trainer is designed for both beginners and experienced
          practitioners who want a structured and practical approach to NLP.
          More features and techniques will be added over time.
        </SectionHeader>
        <div className="screenshot-grid" aria-label="NLP Trainer screenshots">
          {screenshots.map((src, index) => (
            <img
              className="screenshot-image"
              src={src}
              alt={`NLP Trainer screenshot ${index + 1}`}
              key={src}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeader title="What you can do with NLP Trainer">
          NLP Trainer is designed for people who want a clear, structured and
          practical tool for coaching work. Simple. Practical. Structured.
        </SectionHeader>
        <div className="feature-detail-grid">
          {featureDetails.map(([title, text]) => (
            <article className="info-card" key={title}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="link-row">
          <a href={app.privacyUrl}>NLP Trainer Privacy Policy</a>
          <a href="/support">Support</a>
          {isDevelopmentMode ? (
            <a href={testerEmailUrl}>Become a Tester</a>
          ) : (
            <a href={app.playStoreUrl} target="_blank" rel="noreferrer">
              Google Play
            </a>
          )}
        </div>
      </section>
    </>
  );
}
