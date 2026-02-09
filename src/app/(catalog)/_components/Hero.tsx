export const Hero = () => {
  return (
    <section className="bg-[var(--brand-bg)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
            Catálogo 2024
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--brand-fg)] sm:text-5xl">
            Inspira cada ambiente con piezas seleccionadas y atemporales.
          </h1>
          <p className="text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
            Descubre mobiliario, iluminación y accesorios que combinan diseño y
            funcionalidad. Todo listo para que visualices el estilo ideal de tu
            espacio.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Explorar catálogo
            </button>
            <button className="rounded-full border border-[var(--brand-border)] px-6 py-3 text-sm font-semibold text-[var(--brand-fg)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              Hablar con un asesor
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-card)] p-6 shadow-sm">
          <div className="space-y-4 rounded-2xl bg-gradient-to-br from-[rgba(59,91,219,0.1)] to-transparent p-6">
            <p className="text-sm text-[var(--brand-muted)]">Colección destacada</p>
            <h2 className="text-2xl font-semibold text-[var(--brand-fg)]">
              Línea Aura
            </h2>
            <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
              Tonos neutros, texturas cálidas y materiales responsables para una
              atmósfera serena.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-[var(--brand-muted)]">
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">+30</p>
                <p>Productos combinables</p>
              </div>
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">7 días</p>
                <p>Entrega estimada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
