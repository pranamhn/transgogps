import React from "react";
import {
  Navigation,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  Radio,
  ExternalLink,
} from "lucide-react";
import type { Route } from "../data";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "../data";
import { go } from "../hooks";
import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();

  const handleNav = (href: Route) => {
    go(href);
  };

  return (
    <footer className="transgo-footer">
      <div className="footer-top-wave" />
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col-brand">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-tgm-white.png"
                alt="Transgo GPS"
                style={{ height: 30, width: "auto" }}
              />
              <span className="brand-title text-white">
                TRANSGO <span className="text-cyan-400">GPS</span>
              </span>
            </div>

            <p className="footer-bio">
              {t.footer.aboutDesc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="footer-pill-tag">
                <Radio size={12} className="text-cyan-400" />
                <span>GNSS Satellite Multi-Band</span>
              </span>
              <span className="footer-pill-tag">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span>Bank-Grade 256-bit TLS</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">{t.footer.quickLinks}</h4>
            <ul className="footer-link-list">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className="footer-link-btn"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solusi Industri */}
          <div className="footer-col-solutions">
            <h4 className="footer-heading">Solusi Fleet Armada</h4>
            <ul className="footer-link-list">
              <li>
                <button type="button" onClick={() => handleNav("/solusi")} className="footer-link-btn">
                  Rental Mobil &amp; Taksi Online
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav("/solusi")} className="footer-link-btn">
                  Motor Listrik (EV) &amp; Last-Mile
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav("/solusi")} className="footer-link-btn">
                  Truk Logistik &amp; Wingbox Kargo
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav("/solusi")} className="footer-link-btn">
                  Alat Berat Tambang &amp; Konstruksi
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav("/solusi")} className="footer-link-btn">
                  Cold-Chain &amp; Sensor Temperatur
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Location */}
          <div className="footer-col-contact">
            <h4 className="footer-heading">{t.footer.contactTitle}</h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.workshopAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  {CONTACT_INFO.phone} (WhatsApp 24/7)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Transgo GPS. {t.footer.rights}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>
              {t.footer.partOf}{" "}
              <strong className="text-slate-200">Transgo Group Mobility</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
