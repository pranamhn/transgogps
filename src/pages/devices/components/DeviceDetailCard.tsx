import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Product, CONTACT_INFO } from "../../../data";
import { FadeSection } from "../../../components/ui";

export function DeviceDetailCard({ dev }: { dev: Product }) {
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

          <p className="text-sm text-slate-700 leading-relaxed">{dev.description}</p>

          {/* Spec rows */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-100">
            {dev.specs.map((spec) => (
              <div key={spec.label} className="text-sm">
                <dt className="text-slate-400 text-xs uppercase font-semibold">{spec.label}</dt>
                <dd className="font-bold text-slate-800">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {/* Features List */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Fitur Utama:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dev.features.map((f) => (
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
              {dev.suitableFor.map((app) => (
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
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {dev.website && (
              <a href={dev.website.href} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                <span>{dev.website.label}</span>
                <ArrowRight size={14} />
              </a>
            )}
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                `Halo Tim Transgo GPS, saya tertarik dengan ${dev.name}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className={`${dev.website ? "btn-outline" : "btn-primary"} text-xs`}
            >
              <span>Konsultasi via WhatsApp</span>
              {!dev.website && <ArrowRight size={14} />}
            </a>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
