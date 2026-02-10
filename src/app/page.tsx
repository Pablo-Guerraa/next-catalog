import { CategoryChips } from "./(catalog)/_components/CategoryChips";
import { Hero } from "./(catalog)/_components/Hero";
import { ProductGrid } from "./(catalog)/_components/ProductGrid";
import { SiteFooter } from "./(catalog)/_components/SiteFooter";
import { SiteHeader } from "./(catalog)/_components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <SiteHeader />
      <main>
        <Hero />
        <CategoryChips />
        <ProductGrid id="catalog-start" />
      </main>
      <SiteFooter />
    </div>
  );
}
