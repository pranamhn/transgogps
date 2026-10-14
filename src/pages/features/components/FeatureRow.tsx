import React from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeSection } from "../../../components/ui";

export interface DeepFeatureItem {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  desc: string;
  highlights: string[];
}

export function FeatureRow({
  feat,
  isReversed,
}: {
  feat: DeepFeatureItem;
  isReversed: boolean;
}) {
  return (
    <FadeSection key={feat.id} className="feature-deep-row">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              {feat.icon}
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {feat.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {feat.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{feat.desc}</p>

          <ul className="space-y-2.5">
            {feat.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
              >
                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup Card */}
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="telematics-mockup-card">
            <div className="mockup-header">
              <span className="mockup-dot bg-rose-500" />
              <span className="mockup-dot bg-amber-500" />
              <span className="mockup-dot bg-emerald-500" />
              <span className="mockup-title">TRANSGO TELEMATICS ENGINE — v4.2</span>
            </div>
            <div className="mockup-body">
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-sm font-bold text-slate-800">{feat.title}</span>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    CONNECTED
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 block font-semibold">
                      Status Sinyal
                    </span>
                    <span className="font-bold text-slate-800">4G LTE-M (99.8%)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 block font-semibold">
                      Interval Update
                    </span>
                    <span className="font-bold text-slate-800">Tiap 10 Detik</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  *Fitur ini aktif otomatis pada seluruh varian perangkat Transgo GPS tanpa biaya setup tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
