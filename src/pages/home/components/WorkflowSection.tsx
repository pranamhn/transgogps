import React from "react";
import { Activity } from "lucide-react";
import { useLang } from "../../../i18n";
import { FadeSection, SectionHeader } from "../../../components/ui";

export default function WorkflowSection() {
  const { t } = useLang();

  return (
    <FadeSection className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={<Activity size={14} />}
          label={t.howItWorks.label}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.sub}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="step-card">
            <span className="step-num-badge">01</span>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">{t.howItWorks.step1Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{t.howItWorks.step1Desc}</p>
          </div>
          <div className="step-card">
            <span className="step-num-badge">02</span>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">{t.howItWorks.step2Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{t.howItWorks.step2Desc}</p>
          </div>
          <div className="step-card">
            <span className="step-num-badge">03</span>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">{t.howItWorks.step3Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{t.howItWorks.step3Desc}</p>
          </div>
          <div className="step-card">
            <span className="step-num-badge">04</span>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">{t.howItWorks.step4Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{t.howItWorks.step4Desc}</p>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
