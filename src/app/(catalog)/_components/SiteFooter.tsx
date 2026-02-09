export const SiteFooter = () => {
  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-card)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[var(--brand-muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-[var(--brand-fg)]">
            Next Catalog
          </p>
          <p>Catálogo conceptual para interiores contemporáneos.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-[var(--brand-fg)]">
            Privacidad
          </a>
          <a href="#" className="transition hover:text-[var(--brand-fg)]">
            Soporte
          </a>
          <a href="#" className="transition hover:text-[var(--brand-fg)]">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};
