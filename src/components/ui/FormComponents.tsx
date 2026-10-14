import React from "react";

export interface FormRowProps {
  children: React.ReactNode;
  className?: string;
}

export function FormRow({ children, className = "" }: FormRowProps) {
  return <div className={`form-row-2 ${className}`.trim()}>{children}</div>;
}

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  requiredMarker?: boolean;
  wrapperClassName?: string;
  hint?: string;
}

export function FormInput({
  label,
  requiredMarker,
  wrapperClassName = "",
  hint,
  id,
  className = "",
  ...props
}: FormInputProps) {
  const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`form-group ${wrapperClassName}`.trim()}>
      <label htmlFor={inputId} className="form-label">
        {label} {requiredMarker && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={inputId}
        className={`form-input ${className}`.trim()}
        {...props}
      />
      {hint && <span className="text-2xs text-slate-400 mt-1 block">{hint}</span>}
    </div>
  );
}

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  requiredMarker?: boolean;
  options: { label: string; value: string }[] | string[];
  wrapperClassName?: string;
  hint?: string;
}

export function FormSelect({
  label,
  requiredMarker,
  options,
  wrapperClassName = "",
  hint,
  id,
  className = "",
  ...props
}: FormSelectProps) {
  const selectId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`form-group ${wrapperClassName}`.trim()}>
      <label htmlFor={selectId} className="form-label">
        {label} {requiredMarker && <span className="text-rose-500">*</span>}
      </label>
      <select
        id={selectId}
        className={`form-select ${className}`.trim()}
        {...props}
      >
        {options.map((opt) => {
          if (typeof opt === "string") {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          }
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      {hint && <span className="text-2xs text-slate-400 mt-1 block">{hint}</span>}
    </div>
  );
}

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  requiredMarker?: boolean;
  wrapperClassName?: string;
  hint?: string;
}

export function FormTextarea({
  label,
  requiredMarker,
  wrapperClassName = "",
  hint,
  id,
  className = "",
  rows = 3,
  ...props
}: FormTextareaProps) {
  const textareaId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`form-group ${wrapperClassName}`.trim()}>
      <label htmlFor={textareaId} className="form-label">
        {label} {requiredMarker && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={`form-textarea ${className}`.trim()}
        {...props}
      />
      {hint && <span className="text-2xs text-slate-400 mt-1 block">{hint}</span>}
    </div>
  );
}
