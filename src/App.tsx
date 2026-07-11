import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { BecomeTesterPage } from "./pages/BecomeTesterPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NlpTrainerPage } from "./pages/NlpTrainerPage";
import { NlpTrainerPrivacyPolicyPage } from "./pages/NlpTrainerPrivacyPolicyPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { SupportPage } from "./pages/SupportPage";
import { TermsPage } from "./pages/TermsPage";

function getRoute() {
  if (window.location.hash.startsWith("#/")) {
    const routeFromHash = window.location.hash.replace(/^#/, "") || "/";
    window.history.replaceState(null, "", routeFromHash);
    return routeFromHash;
  }

  const route = window.location.pathname;
  return route || "/";
}

function renderPage(route: string) {
  switch (route) {
    case "/nlp-trainer":
      return <NlpTrainerPage />;
    case "/nlp-trainer/testing":
      return <NlpTrainerPage mode="development" />;
    case "/nlp-trainer/privacy-policy":
      return <NlpTrainerPrivacyPolicyPage />;
    case "/become-a-tester":
      return <BecomeTesterPage />;
    case "/support":
      return <SupportPage />;
    case "/privacy-policy":
      return <PrivacyPolicyPage />;
    case "/terms-and-conditions":
      return <TermsPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());
    window.addEventListener("popstate", updateRoute);
    return () => window.removeEventListener("popstate", updateRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [route]);

  return <Layout route={route}>{renderPage(route)}</Layout>;
}
