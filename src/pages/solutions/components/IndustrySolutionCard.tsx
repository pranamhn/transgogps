import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { go } from "../../../hooks";
import { FadeSection } from "../../../components/ui";

export interface IndustrySolutionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tag: string;
  problem: string;
  solution: string;
  benefits: string[];
  recommendedDevice: string;
}

export function IndustrySolutionCard({ sol }: { sol: IndustrySolutionItem }) {
  return (
    <FadeSection key={sol.id} className="industry-solution-card">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          {sol.icon}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
              {sol.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {sol.title}
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">{sol.subtitle}</p>
          </div>

          {/* Problem & Solution Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">
                Tantangan Utama
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">{sol.problem}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Solusi Transgo GPS
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">{sol.solution}</p>
            </div>
          </div>

          {/* Benefit Points */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Manfaat Nyata untuk Operasional:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sol.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended device & CTA */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Rekomendasi Alat:{" "}
              <strong className="text-slate-800">{sol.recommendedDevice}</strong>
            </span>

            <button
              type="button"
              onClick={() => go("/kontak")}
              className="btn-primary text-xs"
            >
              <span>Konsultasi Solusi Ini</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
