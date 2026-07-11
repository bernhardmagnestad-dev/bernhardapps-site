import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form-panel"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <label>
          Name
          <input required name="name" autoComplete="name" />
        </label>
        <label>
          Email
          <input required type="email" name="email" autoComplete="email" />
        </label>
      </div>
      <label>
        Subject
        <input required name="subject" />
      </label>
      <label>
        Message
        <textarea required name="message" rows={6} />
      </label>
      <button className="button primary" type="submit">
        Prepare Contact Request
      </button>
      {submitted ? (
        <p className="form-note" role="status">
          Your message is ready to be connected to an external form or email
          service. No data has been sent from this static site yet.
        </p>
      ) : null}
    </form>
  );
}
