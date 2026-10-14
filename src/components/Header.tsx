import React, { useState } from "react";
import {
  Menu,
  X,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import type { Route } from "../data";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "../data";
import { useScrolled, go } from "../hooks";
import { useLang } from "../i18n";

export default function Header({ currentRoute }: { currentRoute: Route }) {
  const scrolled = useScrolled(15);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const handleNav = (href: Route) => {
    go(href);
    setMobileOpen(false);
  };

  return (
    <header className={`docked-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Ambient Top Glow Line */}
      <div className="docked-ambient-bar" />

      <div className="docked-nav-container">
        {/* ── Left: Brand ── */}
        <div className="docked-brand-cluster">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/");
            }}
            className="docked-brand-link"
            title="Transgo GPS Telematics"
          >
            <div className="flex flex-col">
              <span className="docked-brand-title">
                TRANSGO <span>GPS</span>
              </span>
              <span className="docked-brand-sub">IoT Fleet Telematics</span>
            </div>
          </a>
        </div>

        {/* ── Center: Desktop Navigation Links ── */}
        <nav className="docked-nav-links" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentRoute === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className={`docked-nav-link ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* ── Right: Language & WhatsApp CTA ── */}
        <div className="docked-right-cluster flex items-center gap-2.5 shrink-0">
          {/* Lang Selector */}
          <div className="docked-lang-pill">
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`docked-lang-btn ${lang === "id" ? "active" : ""}`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`docked-lang-btn ${lang === "en" ? "active" : ""}`}
            >
              EN
            </button>
          </div>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
              "Halo Tim Transgo GPS, saya tertarik untuk konsultasi & demo sistem pelacakan armada kendaraan."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="docked-cta-btn"
          >
            <PhoneCall size={14} />
            <span className="hidden sm:inline">{t.nav.waConsult}</span>
          </a>

          {/* Mobile Menu Toggle (only on mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn text-slate-800 p-1.5 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-head">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo-tgm-blue.png"
                  alt="Transgo GPS"
                  style={{ height: 26, width: "auto" }}
                />
                <span className="font-bold text-sm text-slate-900">
                  TRANSGO <span className="text-blue-600">GPS</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-links">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = currentRoute === item.href;
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className={`mobile-nav-btn ${
                      isActive ? "mobile-nav-btn-active" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={15} className="text-slate-400" />
                  </button>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                  "Halo Tim Transgo GPS, saya ingin konsultasi sistem GPS armada."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp btn-block py-3 rounded-lg text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} />
                <span>Konsultasi WhatsApp Teknisi</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
