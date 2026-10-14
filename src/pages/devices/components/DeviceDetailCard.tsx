import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { GpsDevice, CONTACT_INFO } from "../../../data";
import { FadeSection } from "../../../components/ui";

export function DeviceDetailCard({ dev }: { dev: GpsDevice }) {
  return (
    <FadeSection key={dev.id} className="device-detail-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Photo Col */}
        <div className="lg:col-span-5">
          <div className="device-detail-img-wrap">
            <img src={dev.image} alt={dev.name} className="device-detail-img" />
            <span className={`device-detail-badge ${dev.badgeColor}`}>
              {dev.badge}
            </span>
          </div>
        </div>

        {/* Specs Col */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
              {dev.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {dev.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1">{dev.tagline}</p>
          </div>

          {/* Tech Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100">
            <div className="text-sm">
              <span className="text-slate-400 block text-xs uppercase font-semibold">
                Jaringan Seluler
              </span>
              <span className="font-bold text-slate-800">{dev.specs.network}</span>
            </div>
            <div className="text-sm">
              <span className="text-slate-400 block text-xs uppercase font-semibold">
                Akurasi Satelit
              </span>
              <span className="font-bold text-slate-800">{dev.specs.accuracy}</span>
            </div>
            <div className="text-sm">
              <span className="text-slate-400 block text-xs uppercase font-semibold">
                Rentang Tegangan
              </span>
              <span className="font-bold text-slate-800">{dev.specs.voltage}</span>
            </div>
            <div className="text-sm">
              <span className="text-slate-400 block text-xs uppercase font-semibold">
                Baterai Cadangan Internal
              </span>
              <span className="font-bold text-slate-800">{dev.specs.backupBattery}</span>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Fitur Sensor &amp; Proteksi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dev.specs.features.map((f: string) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div className="pt-2">
            <h4 className="text-sm font-bold text-slate-900 mb-1.5">
              Sangat Cocok Untuk:
            </h4>
            <div className="flex flex-wrap gap-2">
              {dev.suitableFor.map((app: string) => (
                <span
                  key={app}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/60"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                `Halo Tim Transgo GPS, saya tertarik untuk konsultasi dan pemesanan perangkat ${dev.name}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs"
            >
              <span>Pesan Unit / Jadwalkan Pasang</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
