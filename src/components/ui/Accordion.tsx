import React from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  question: React.ReactNode;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  className = "",
}: AccordionItemProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs ${className}`.trim()}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "transform rotate-180 text-blue-600" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export interface AccordionProps {
  items: { q: string; a: string }[];
  openIndex?: number | null;
  onToggle?: (index: number) => void;
  className?: string;
}

export function Accordion({
  items,
  openIndex: controlledOpenIndex,
  onToggle: controlledOnToggle,
  className = "",
}: AccordionProps) {
  const [internalOpenIndex, setInternalOpenIndex] = React.useState<number | null>(0);

  const isControlled = controlledOpenIndex !== undefined;
  const activeIndex = isControlled ? controlledOpenIndex : internalOpenIndex;

  const handleToggle = (idx: number) => {
    if (controlledOnToggle) {
      controlledOnToggle(idx);
    } else {
      setInternalOpenIndex((prev) => (prev === idx ? null : idx));
    }
  };

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          isOpen={activeIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
