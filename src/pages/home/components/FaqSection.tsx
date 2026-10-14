import React from "react";
import { ShieldCheck } from "lucide-react";
import { useLang } from "../../../i18n";
import { FAQS } from "../../../data";
import { FadeSection, SectionHeader, Accordion } from "../../../components/ui";

export default function FaqSection() {
  const { t } = useLang();

  return (
    <FadeSection className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          icon={<ShieldCheck size={14} />}
          label={t.faq.label}
          title={t.faq.title}
          subtitle={t.faq.sub}
          className="mb-12"
        />

        <Accordion items={FAQS} />
      </div>
    </FadeSection>
  );
}
