import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLang } from "../../../i18n";
import { go } from "../../../hooks";
import { CONTACT_INFO } from "../../../data";
import { SectionLabel } from "../../../components/ui";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="flex items-center min-h-[calc(100svh-var(--header-h))] bg-white border-b border-slate-100">
      <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-16">
        <div>
          <SectionLabel>{t.hero.eyebrow}</SectionLabel>

          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 text-balance">
            {t.hero.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                "Halo Tim Transgo GPS, saya ingin konsultasi GPS tracker / sistem manajemen armada."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-xs"
            >
              <MessageCircle size={16} />
              <span>{t.hero.ctaPrimary}</span>
            </a>
            <button
              type="button"
              onClick={() => go("/perangkat")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200 pt-6">
            {t.hero.facts.map((fact) => (
              <div key={fact.title}>
                <dt className="text-sm font-semibold text-slate-900">{fact.title}</dt>
                <dd className="mt-1 text-sm text-slate-500 leading-snug">{fact.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <img
            src="/slides/hero-gps-telematics.jpg"
            alt={t.hero.imageAlt}
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-slate-200/80"
          />
          <figcaption className="mt-3 text-xs text-slate-500 text-center sm:text-left">
            {t.hero.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
