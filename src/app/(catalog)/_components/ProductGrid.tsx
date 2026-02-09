import mockProducts from "@/data/mock-products.json";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  id?: string;
};

export const ProductGrid = ({ id }: ProductGridProps) => {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
            Catálogo
          </p>
          <h2 className="text-3xl font-semibold text-[var(--brand-fg)]">
            Arreglos pensados para cada ocasión
          </h2>
        </div>
        <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-card)] px-4 py-2 text-sm text-[var(--brand-muted)]">
          <span className="text-base">🔍</span>
          <input
            type="text"
            placeholder="Buscar flores para un momento especial"
            className="w-full bg-transparent text-sm text-[var(--brand-fg)] outline-none placeholder:text-[var(--brand-muted)]"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
