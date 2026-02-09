import mockProducts from "@/data/mock-products.json";

const categories = Array.from(
  new Set(mockProducts.map((product) => product.category))
);

export const CategoryChips = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-[var(--brand-fg)]">
          Categorías destacadas
        </span>
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-card)] px-4 py-1 text-sm text-[var(--brand-muted)]"
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  );
};
