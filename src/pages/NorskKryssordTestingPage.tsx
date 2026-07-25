import { ExternalLink, Puzzle } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { apps } from "../data/apps";

export function NorskKryssordTestingPage() {
  const app = apps.find((item) => item.id === "norsk-kryssord");
  const testerEmailUrl = `mailto:contact@bernhardapps.com?subject=${encodeURIComponent(
    `Apply for tester program ${app?.name ?? "Norsk Kryssord"}`
  )}`;

  return (
    <>
      <section className="section subpage-hero">
        <div>
          <p className="eyebrow">{app?.status ?? "Open testing"}</p>
          <h1>{app?.name ?? "Norsk Kryssord"}</h1>
          <p>{app?.longDescription}</p>
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
          <img
            className="detail-hero-image"
            src="/norsk-kryssord-preview.jpg"
            alt="Norsk Kryssord puzzle preview"
          />
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Open testing">
          Norsk Kryssord is not listed as a final public release yet. The app is
          available for open testing so feedback can be used before production.
        </SectionHeader>
        <div className="feature-detail-grid">
          {(app?.features ?? []).map((feature) => (
            <article className="info-card" key={feature}>
              <Puzzle size={18} aria-hidden="true" />
              <h3>{feature}</h3>
              <p>
                {feature === "Local progress"
                  ? "Puzzle progress is stored locally on the device."
                  : "This status will be updated as the app moves through testing."}
              </p>
            </article>
          ))}
        </div>
        <div className="link-row">
          <a href={testerEmailUrl}>Become a Tester</a>
          <a href="/norsk-kryssord/privacy-policy">
            Norsk Kryssord Privacy Policy
          </a>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </>
  );
}
