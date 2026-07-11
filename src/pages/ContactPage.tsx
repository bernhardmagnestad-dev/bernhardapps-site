import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
  return (
    <section className="section subpage-grid">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Contact Bernhard Apps</h1>
        <p>
          For privacy questions, tester interest or general inquiries, use the
          form or email Bernhard Apps directly.
        </p>
        <p className="contact-email">
          Email: <a href="mailto:contact@bernhardapps.com">contact@bernhardapps.com</a>
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
