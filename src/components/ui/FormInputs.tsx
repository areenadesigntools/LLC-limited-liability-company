import React from 'react';
import { cn } from '@/lib/cn';

const fieldClasses =
  'w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-primary-dark shadow-inner shadow-slate-950/[0.025] transition duration-200 hover:border-slate-300 focus:border-electric focus:bg-white focus:outline-none focus:ring-4 focus:ring-electric/10';

interface FieldProps {
  label?: string;
  error?: string;
  helperText?: string;
}

function Description({
  id,
  error,
  helperText,
}: {
  id: string;
  error?: string;
  helperText?: string;
}) {
  if (error) {
    return (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
        {error}
      </p>
    );
  }

  return helperText ? (
    <p id={`${id}-helper`} className="mt-1.5 text-sm text-muted">
      {helperText}
    </p>
  ) : null;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FieldProps {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const descriptionId = error
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-slate-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-describedby={descriptionId}
          aria-invalid={error ? true : undefined}
          className={cn(
            fieldClasses,
            'min-h-12',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        <Description id={inputId} error={error} helperText={helperText} />
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, FieldProps {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const descriptionId = error
      ? `${textareaId}-error`
      : helperText
        ? `${textareaId}-helper`
        : undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-2 block text-sm font-semibold text-slate-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-describedby={descriptionId}
          aria-invalid={error ? true : undefined}
          className={cn(
            fieldClasses,
            'resize-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
        <Description id={textareaId} error={error} helperText={helperText} />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, FieldProps {
  options: Array<{ value: string; label: string }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, className, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const descriptionId = error
      ? `${selectId}-error`
      : helperText
        ? `${selectId}-helper`
        : undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="mb-2 block text-sm font-semibold text-slate-700">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-describedby={descriptionId}
          aria-invalid={error ? true : undefined}
          className={cn(
            fieldClasses,
            'min-h-12',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        >
          <option value="">Select an option...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Description id={selectId} error={error} helperText={helperText} />
      </div>
    );
  }
);

Select.displayName = 'Select';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id ?? generatedId;

    return (
      <div className="w-full">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            aria-invalid={error ? true : undefined}
            className={cn(
              'mt-0.5 size-5 shrink-0 cursor-pointer rounded border border-slate-300 accent-electric focus:outline-none focus:ring-4 focus:ring-electric/10',
              error && 'border-red-500 focus:ring-red-500/10',
              className
            )}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className="cursor-pointer text-sm leading-6 text-slate-600">
              {label}
            </label>
          )}
        </div>
        {error && <Description id={checkboxId} error={error} />}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
