const navLinks = [
  { label: "Novedades", href: "#" },
  { label: "Colecciones", href: "#" },
  { label: "Espacios", href: "#" },
  { label: "Sobre nosotros", href: "#" },
];

export const SiteHeader = () => {
  return (
    <header className="border-b border-[var(--brand-border)] bg-[var(--brand-card)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] text-sm font-semibold text-white">
            NC
          </span>
          <div>
            <p className="text-base font-semibold text-[var(--brand-fg)]">
              Next Catalog
            </p>
            <p className="text-xs text-[var(--brand-muted)]">
              Estudio de diseño interior
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-[var(--brand-muted)] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[var(--brand-fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="hidden rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-medium text-[var(--brand-fg)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] md:inline-flex">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};
