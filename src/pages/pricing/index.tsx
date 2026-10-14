import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { go } from "../../hooks";
import { PageHero } from "../../components/ui";
import { PRICING_PLANS } from "../../data";
import RoiCalculator from "./components/RoiCalculator";
import PricingStandards from "./components/PricingStandards";

export default function PricingPage() {
  return (
    <div className="subpage-wrap">
      {/* Page Header */}
      <PageHero
        icon={<Sparkles size={14} />}
        label="PAKET &amp; HARGA TRANSPARAN"
        title="Investasi Terjangkau untuk Kendali Penuh Seluruh Armada"
        subtitle="Tanpa biaya tersembunyi. Seluruh paket sudah termasuk perangkat bergaransi resmi, kartu SIM M2M berkuota, dan akses cloud dashboard 24/7."
      />

      {/* Pricing Cards Grid */}
      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              >
                {plan.popular && (
                  <div className="pricing-badge-popular">
                    <span>REKOMENDASI TERBAIK</span>
                  </div>
                )}

                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
                  <p className="text-sm text-slate-500 mt-1">{plan.target}</p>
                </div>

                <div className="my-5 py-4 border-y border-slate-100">
                  <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                    {plan.priceLabel ?? "Biaya Perangkat"}
                  </span>
                  <div className={`${plan.priceDevice.startsWith("Rp") ? "text-4xl font-mono" : "text-2xl"} font-black text-slate-900 mt-1`}>
                    {plan.priceDevice}
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mt-1">
                    {plan.feeLabel ?? "Langganan Server"}: {plan.serverFee}
                  </div>
                </div>

                <ul className="space-y-3 my-4 flex-1">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => (plan.href ? window.open(plan.href, "_blank", "noopener") : go("/kontak"))}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all mt-4 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <RoiCalculator />

      {/* Included Standards */}
      <PricingStandards />
    </div>
  );
}
