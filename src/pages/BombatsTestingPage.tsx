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
            {app.playStoreUrl ? (
              <a
                className="button primary"
                href={app.playStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Google Play <ExternalLink size={18} aria-hidden="true" />
              </a>
            ) : (
              <ButtonLink to={app.privacyUrl}>Privacy Policy</ButtonLink>
            )}
            <ButtonLink to="/support" variant="secondary">
              Support
            </ButtonLink>
          </div>
        </div>
        <div className="app-detail-media">
          <img
            className="bombats-hero-image"
            src="/bombats-icon.webp"
            alt="Bombats app icon"
          />
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Bombats">
          Bombats is part of the Bernhard Apps catalog. The app status and
          privacy details are kept updated as features change.
        </SectionHeader>
        <div className="feature-detail-grid">
          {app.features.map((feature) => (
            <article className="info-card" key={feature}>
              <Gamepad2 size={18} aria-hidden="true" />
              <h3>{feature}</h3>
              <p>
                {feature === "Built with feedback"
                  ? "Player feedback is used to improve the game over time."
                  : "A practical part of the Bombats game experience."}
              </p>
            </article>
          ))}
        </div>
        <div className="link-row">
          {app.playStoreUrl ? <a href={app.playStoreUrl}>Google Play</a> : null}
          <a href={testerEmailUrl}>Send feedback</a>
          <a href={app.privacyUrl}>Bomb Bats Privacy Policy</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </>
  );
}
