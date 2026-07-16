import { ExternalLink, Gamepad2 } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { apps } from "../data/apps";

export function BombatsTestingPage() {
  const app = apps.find((item) => item.id === "bombats") ?? apps[1];
  const testerEmailUrl = `mailto:contact@bernhardapps.com?subject=${encodeURIComponent(
    `Apply for tester program ${app.name}`
  )}`;

  return (
    <>
      <section className="section subpage-hero">
        <div>
          <p className="eyebrow">{app.status}</p>
          <h1>{app.name}</h1>
          <p>{app.longDescription}</p>
          <div className="hero-actions">
            <a className="button primary" href={testerEmailUrl}>
              Become a Tester <ExternalLink size={18} aria-hidden="true" />
            </a>
            <ButtonLink to="/support" variant="secondary">
              Support
            </ButtonLink>
          </div>
        </div>
        <div className="app-detail-media">
          <div className="bombats-hero-mark" aria-hidden="true">
            <Gamepad2 size={72} />
            <span>Bombats</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Internal testing">
          Bombats is not listed as a public Google Play release yet. People who
          want to help test can contact Bernhard Apps and ask to join the tester
          program.
        </SectionHeader>
        <div className="feature-detail-grid">
          {app.features.map((feature) => (
            <article className="info-card" key={feature}>
              <Gamepad2 size={18} aria-hidden="true" />
              <h3>{feature}</h3>
              <p>
                {feature === "Tester feedback"
                  ? "Feedback from internal testers is used before a wider release."
                  : "This status will be updated as the app moves through testing."}
              </p>
            </article>
          ))}
        </div>
        <div className="link-row">
          <a href={testerEmailUrl}>Become a Tester</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </>
  );
}
