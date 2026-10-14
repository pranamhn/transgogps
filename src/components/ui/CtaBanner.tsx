import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "../../i18n";
import { go } from "../../hooks";
import { CONTACT_INFO } from "../../data";

export interface CtaBannerProps {
  title?: string;
  desc?: string;
  btnBookText?: string;
  btnWaText?: string;
  waMessage?: string;
  className?: string;
}

export function CtaBanner({
  title,
  desc,
  btnBookText,
  btnWaText,
  waMessage = "Halo Tim Transgo GPS, saya ingin jadwalkan pemasangan GPS armada.",
  className = "",
}: CtaBannerProps) {
  const { t } = useLang();

  const finalTitle = title || t.cta.title;
  const finalDesc = desc || t.cta.desc;
  const finalBtnBook = btnBookText || t.cta.btnBook;
  const finalBtnWa = btnWaText || t.cta.btnWa;

  return (
    <section className={`cta-banner-wrap ${className}`.trim()}>
      <div className="cta-banner-card">
        <div className="cta-banner-text">
          <h2>{finalTitle}</h2>
          <p>{finalDesc}</p>
        </div>
        <div className="cta-banner-actions">
          <button
            type="button"
            onClick={() => go("/kontak")}
            className="btn-cta-white"
          >
            <span>{finalBtnBook}</span>
            <ArrowRight size={16} />
          </button>
          <a
            href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
              waMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-cta-whatsapp"
          >
            <Phone size={16} />
            <span>{finalBtnWa}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
