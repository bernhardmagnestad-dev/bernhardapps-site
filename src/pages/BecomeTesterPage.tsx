import { TesterForm } from "../components/TesterForm";

export function BecomeTesterPage() {
  return (
    <section className="section subpage-grid">
      <div>
        <p className="eyebrow">Become a Tester</p>
        <h1>Help shape the next Bernhard Apps project</h1>
        <p>
          Real user feedback is an important part of the development process.
          Testers help identify bugs, unclear workflows and opportunities for
          improvement before an app is publicly released. Technical experience
          is not required.
        </p>
      </div>
      <TesterForm />
    </section>
  );
}
