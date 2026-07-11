const supportItems = [
  "Frequently asked questions",
  "Report a problem",
  "Request a feature",
  "Privacy Policy",
  "Contact support",
];

export function SupportPage() {
  return (
    <>
      <section className="section subpage-hero compact">
        <div>
          <p className="eyebrow">NLP Trainer Support</p>
          <h1>Support for NLP Trainer</h1>
          <p>
            Find help, request improvements or report issues about NLP Trainer.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="support-grid">
          {supportItems.map((item) => (
            <article className="info-card" key={item}>
              <h3>{item}</h3>
              <p>
                Send details by email to the support address below.
              </p>
            </article>
          ))}
        </div>
        <div className="contact-block">
          <p>
            Support email:{" "}
            <a href="mailto:support@bernhardapps.com">support@bernhardapps.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
