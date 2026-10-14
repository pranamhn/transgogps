import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useLang } from "../../../i18n";
import { go } from "../../../hooks";
import { PRICING_PLANS } from "../../../data";
import { FadeSection, SectionHeader } from "../../../components/ui";

export default function PricingPreviewSection() {
  const { t } = useLang();

  return (
    <FadeSection className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={<Sparkles size={14} />}
          label={t.pricing.label}
          title={t.pricing.title}
          subtitle={t.pricing.sub}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
            >
              {plan.popular && (
                <div className="pricing-badge-popular">
                  <span>PALING BANYAK DIPILIH</span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{plan.target}</p>
              </div>

              <div className="my-4 py-3 border-y border-slate-100">
                <div className="text-3xl font-black font-mono text-slate-900">
                  {plan.priceDevice}
                </div>
                <div className="text-sm text-blue-600 font-semibold mt-1">
                  Server: {plan.serverFee}
                </div>
              </div>

              <ul className="space-y-2.5 my-4 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => go("/kontak")}
                className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all ${
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
    </FadeSection>
  );
}
