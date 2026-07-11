import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { BrandMark } from "./BrandMark";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

type LayoutProps = {
  children: ReactNode;
  route: string;
};

export function Layout({ children, route }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Bernhard Apps home">
          <BrandMark />
          <span>Bernhard Apps</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={() => setOpen(false)}
              className={route === item.to ? "active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-top">
          <a className="brand" href="/">
            <BrandMark />
            <span>Bernhard Apps</span>
          </a>
          <nav aria-label="Footer navigation">
            <a href="/support">Support</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <p>© Bernhard Apps. All rights reserved.</p>
      </footer>
    </div>
  );
}
