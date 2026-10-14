import React from "react";
import { Cpu, ArrowRight } from "lucide-react";
import { useLang } from "../../../i18n";
import { go } from "../../../hooks";
import { GPS_DEVICES } from "../../../data";
import { FadeSection, SectionHeader } from "../../../components/ui";

export default function DevicesPreviewSection() {
  const { t } = useLang();

  return (
    <FadeSection className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={<Cpu size={14} />}
          label={t.devices.label}
          title={t.devices.title}
          subtitle={t.devices.sub}
          rightAction={
            <button
              type="button"
              onClick={() => go("/perangkat")}
              className="btn-outline self-start sm:self-auto shrink-0"
            >
              <span>Semua Perangkat ({GPS_DEVICES.length})</span>
              <ArrowRight size={14} />
            </button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GPS_DEVICES.map((d) => (
            <div key={d.id} className="device-card group">
              <div className="device-img-wrap">
                <img src={d.image} alt={d.name} className="device-img" />
                <span className={`device-badge ${d.badgeColor}`}>{d.badge}</span>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    {d.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                    {d.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {d.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => go("/perangkat")}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-50 text-slate-700 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Lihat Spesifikasi</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
