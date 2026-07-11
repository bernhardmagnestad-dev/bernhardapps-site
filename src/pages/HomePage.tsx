import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AppVisual } from "../components/AppVisual";
import { SectionHeader } from "../components/SectionHeader";

const principleCards = [
  ["Practical", "Every app should solve a real and identifiable problem."],
  ["Easy to use", "Important features should be easy to find and understand."],
  [
    "Honest development",
    "Apps in development, testing and public release should be clearly identified.",
  ],
  [
    "Built with feedback",
    "Real user feedback should influence how products are improved.",
  ],
];

export function HomePage() {
  const [activeHeroToggle, setActiveHeroToggle] = useState<"apps" | "development">(
    "apps"
  );

  const handleHeroToggle = (target: "apps" | "development") => {
    setActiveHeroToggle(target);
  };

  return (
    <>
      <section className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Independent Android app development</p>
          <div className="hero-toggle" aria-label="Homepage section shortcuts">
            <button
              type="button"
              className={activeHeroToggle === "apps" ? "active" : undefined}
              aria-pressed={activeHeroToggle === "apps"}
              onClick={() => handleHeroToggle("apps")}
            >
              Our Apps
            </button>
            <button
              type="button"
              className={
                activeHeroToggle === "development" ? "active" : undefined
              }
              aria-pressed={activeHeroToggle === "development"}
              onClick={() => handleHeroToggle("development")}
            >
              In Development
            </button>
          </div>
        </div>
        <AppVisual />
      </section>

      {activeHeroToggle === "apps" || activeHeroToggle === "development" ? (
        <section className="section app-logo-section" aria-label="Our Apps">
          <div className="app-icon-grid">
            {activeHeroToggle === "apps" ? (
              <a className="app-icon-link" href="/nlp-trainer">
                <img
                  className="nlp-logo-mark"
                  src="/nlp-trainer-icon.webp"
                  alt="NLP Trainer"
                />
              </a>
            ) : (
              <div
                className="development-example"
                aria-label="Example app placeholder"
              >
                Example
              </div>
            )}
          </div>
        </section>
      ) : null}

      <section className="section">
        <SectionHeader
          title={
            activeHeroToggle === "apps"
              ? "Development Principles"
              : "In Development"
          }
        />
        <div className="principle-grid">
          {principleCards.map(([title, text]) => (
            <div className="info-card" key={title}>
              <CheckCircle2 aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
