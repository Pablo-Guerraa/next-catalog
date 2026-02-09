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
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
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
          <span className="text-sm font-semibold text-[var(--brand-primary)]">
            {formatPrice(product.price, product.currency)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
          {product.description}
        </p>
        <button className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-medium text-[var(--brand-fg)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
          Ver detalle
        </button>
      </div>
    </article>
  );
};
