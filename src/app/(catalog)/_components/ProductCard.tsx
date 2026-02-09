import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: number;
    currency: string;
    category: string;
    description: string;
    imageUrl: string;
  };
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-[var(--brand-shadow)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(47,42,40,0.1)]">
      <div className="h-48 overflow-hidden bg-[var(--brand-bg)]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
              {product.category}
            </p>
            <h3 className="text-lg font-semibold text-[var(--brand-fg)]">
              {product.name}
            </h3>
          </div>
          <span className="text-sm font-semibold text-[var(--brand-secondary)]">
            {formatPrice(product.price, product.currency)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
          {product.description}
        </p>
        <button className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-medium text-[var(--brand-fg)] transition hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-[var(--brand-fg)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-ring)]">
          Ver detalle
        </button>
      </div>
    </article>
  );
};
