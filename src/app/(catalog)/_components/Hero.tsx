"use client";

import type { MouseEvent } from "react";
import { buildWhatsAppAdvisorLink } from "@/lib/whatsapp";

export const Hero = () => {
  const whatsappAdvisorLink = buildWhatsAppAdvisorLink();
  const handleScrollToCatalog = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    document.getElementById("catalog-start")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--brand-bg)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
            Catálogo 2026
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--brand-fg)] sm:text-5xl">
            Flores que hablan por ti
          </h1>
          <p className="text-base leading-relaxed text-[var(--brand-muted)] sm:text-lg">
            Detalles hechos con amor para cada momento especial.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToCatalog}
              className="rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explorar catálogo
            </button>
            <a
              href={whatsappAdvisorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--brand-border)] px-6 py-3 text-sm font-semibold text-[var(--brand-fg)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
            >

              Asesoría por WhatsApp
              <p className="text-xs text-[var(--brand-muted)]">
                Atención personalizada y respuesta rápida
              </p>
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-card)] p-6 shadow-sm">
          <div className="space-y-4 rounded-2xl bg-gradient-to-br from-[rgba(59,91,219,0.1)] to-transparent p-6">
            <p className="text-sm text-[var(--brand-muted)]">Antes de hacer tu pedido</p>
            <h2 className="text-2xl font-semibold text-[var(--brand-fg)]">
              Todo lo que necesitas saber.
            </h2>
            <p className="text-sm leading-relaxed text-[var(--brand-muted)]">
              Cada arreglo se elabora con flores frescas seleccionadas cuidadosamente el mismo día, pensando en transmitir emociones reales y duraderas.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-[var(--brand-muted)]">
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">Envíos a domicilio</p>
                <p>Entregamos en Medellín y alrededores con cuidado y puntualidad.</p>
              </div>
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">1 día</p>
                <p>Entrega estimada</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-[var(--brand-muted)]">
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">Reserva tu pedido</p>
                <p>Solicitamos el 50% al confirmar y el restante al momento de la entrega.</p>
              </div>
              <div className="rounded-2xl border border-[var(--brand-border)] bg-white/70 p-3">
                <p className="font-semibold text-[var(--brand-fg)]">Arreglos personalizados</p>
                <p>Cuéntanos tu idea o referencia y la adaptamos a tu ocasión especial.</p>
              </div>
            </div>
            <div className="mt-2 rounded-xl border border-[var(--brand-border)] bg-white/60 px-4 py-3">
              <p className="text-center text-sm italic text-[var(--brand-muted)]">
                💐 Cada flor cuenta una historia. Nosotros te ayudamos a contar la tuya.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
