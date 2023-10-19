import type { TextareaHTMLAttributes } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IInput extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  name?: string;
  error?: string;
}

interface IInputLbalel extends IInput {
  label: string;
}

export const TextAreaLabel = ({
  label,
  name,
  placeholder = 'Input here',
  // onChange,
  value,
  error = '',
  ...props
}: IInputLbalel) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <textarea
        // type={type}
        name={name}
        placeholder={placeholder}
        // onChange={onChange}
        value={value}
        className={twMerge(
          error ? 'mb-1' : 'mb-2',
          'border p-2 my-2 rounded-[6px] w-full px-3 py-2 h-12 bg-neutral-70',
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default TextAreaLabel;
