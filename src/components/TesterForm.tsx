import { useState } from "react";

export function TesterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form-panel tester-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-grid">
        <label>
          Full name
          <input required name="fullName" autoComplete="name" />
        </label>
        <label>
          Email address
          <input required type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Country
          <input required name="country" autoComplete="country-name" />
        </label>
        <label>
          Device model
          <input required name="deviceModel" placeholder="Samsung Galaxy, Pixel, etc." />
        </label>
        <label>
          Android version
          <input required name="androidVersion" placeholder="Android 15" />
        </label>
        <label>
          Preferred language
          <input required name="language" />
        </label>
      </div>
      <label>
        Areas of interest
        <input required name="interests" placeholder="Coaching, productivity, finance, wellness..." />
      </label>
      <label>
        Previous testing experience, optional
        <textarea name="experience" rows={3} />
      </label>
      <label>
        Additional comments
        <textarea name="comments" rows={4} />
      </label>
      <label className="checkbox">
        <input required type="checkbox" name="consent" />
        <span>I consent to receive testing-related emails from Bernhard Apps.</span>
      </label>
      <button className="button primary" type="submit">
        Register as a Tester
      </button>
      {submitted ? (
        <p className="form-note success" role="status">
          Registration details are ready for a future form or email integration.
          This static demo has not sent your data anywhere.
        </p>
      ) : null}
    </form>
  );
}
