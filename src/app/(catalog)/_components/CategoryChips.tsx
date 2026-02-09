const categories = [
  "Hogar",
  "Muebles",
  "Iluminación",
  "Decoración",
  "Textiles",
  "Organización",
  "Cocina",
];

export const CategoryChips = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-[var(--brand-fg)]">
          Categorías destacadas
        </span>
        {categories.map((category, index) => (
          <span
            key={category}
            className={`rounded-full border px-4 py-1 text-sm transition ${
              index === 0
                ? "border-[var(--brand-primary-soft)] bg-[var(--brand-primary-soft)] text-[var(--brand-fg)]"
                : "border-[var(--brand-border)] bg-[var(--brand-card)] text-[var(--brand-muted)] hover:border-[var(--brand-primary-soft)] hover:text-[var(--brand-fg)]"
            }`}
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  );
};
