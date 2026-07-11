type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(to);
  const className = `button ${variant}`;

  if (isExternal) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
}
