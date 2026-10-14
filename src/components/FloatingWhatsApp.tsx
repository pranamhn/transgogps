import React, { useState } from "react";
import { MessageCircle, X, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    "Halo Tim Transgo GPS, saya ingin konsultasi mengenai pemasangan GPS tracker dan sistem monitoring armada."
  );

  return (
    <div className="floating-wa-container">
      {showTooltip && (
        <div className="floating-wa-card">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">
                Teknisi GPS Online
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Butuh demo dashboard atau jadwal pasang ke lokasi Anda? Chat teknisi kami sekarang!
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${defaultMsg}`}
        target="_blank"
        rel="noreferrer"
        className="floating-wa-btn"
        aria-label="Chat WhatsApp Teknisi GPS"
      >
        <div className="floating-wa-wave" />
        <MessageCircle size={26} className="text-white relative z-10" />
      </a>
    </div>
  );
}
