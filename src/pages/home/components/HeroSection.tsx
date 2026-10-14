import React from "react";
import { Navigation, ArrowRight, Phone } from "lucide-react";
import { useLang } from "../../../i18n";
import { go } from "../../../hooks";
import { CONTACT_INFO } from "../../../data";
import LiveGpsSimulator from "../../../components/LiveGpsSimulator";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="hero-section">
      <div className="hero-background-glow" />
      <div className="hero-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content">
          {/* Pill & Tagline */}
          <div className="hero-badge-container">
            <span className="hero-badge-pill">
              <Navigation size={13} className="text-cyan-400" />
              <span>{t.hero.pill}</span>
            </span>
            <span className="hero-tagline-text">{t.hero.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-heading">
            {t.hero.title1}{" "}
            <span className="text-gradient-cyan">{t.hero.titleHighlight}</span>{" "}
            {t.hero.title2}
          </h1>

          {/* Subparagraph */}
          <p className="hero-desc">{t.hero.desc}</p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              onClick={() => go("/fitur")}
              className="btn-hero-primary"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                "Halo Tim Transgo GPS, saya ingin konsultasi teknis pemasangan GPS armada."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-secondary"
            >
              <Phone size={16} />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <span className="hero-stat-val text-white">{t.hero.stat1Val}</span>
              <span className="hero-stat-label">{t.hero.stat1Label}</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-val text-cyan-400">{t.hero.stat2Val}</span>
              <span className="hero-stat-label">{t.hero.stat2Label}</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-val text-emerald-400">{t.hero.stat3Val}</span>
              <span className="hero-stat-label">{t.hero.stat3Label}</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-val text-amber-400">{t.hero.stat4Val}</span>
              <span className="hero-stat-label">{t.hero.stat4Label}</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Live Telematics Simulator */}
        <div className="hero-visual-col">
          <LiveGpsSimulator />
        </div>
      </div>
    </section>
  );
}
