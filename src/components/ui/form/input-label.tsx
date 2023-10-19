import type { InputHTMLAttributes } from 'react';
import React, { useRef, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'numeric' | 'password' | 'email';
  placeholder?: string;
  name?: string;
  isError?: boolean;
  errorMessage?: string;
  value: string | number;
  disabled?: boolean;
  classNameWrapper?: string;
  classNameInput?: string;
  subfix?: string;
  prefix?: string;
}
interface ILabel {
  name?: string;
  label: string;
  required?: boolean;
  classNameLabel?: string;
  filled?: string | number;
}

interface IInputLbalel extends IInput, ILabel {}

export const Label = ({
  label,
  name,
  required,
  classNameLabel,
  filled,
}: ILabel) => {
  return (
    <label
      htmlFor={name || label}
      className={twMerge(
        required && "after:content-['*'] after:ml-1 after:text-red-500",
        filled
          ? 'text-sm text-neutral-90 font-normal'
          : 'text-sm text-neutral-90 font-medium',
        classNameLabel,
      )}
    >
      {label}
    </label>
  );
};

export const Input = ({
  type = 'text',
  placeholder = 'Input here',
  name,
  isError,
  classNameInput,
  ...props
}: IInput) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={twMerge(
        isError ? 'mb-1 outline-red-900' : 'mb-2 focus:outline-primary',
        'border p-2 my-2 rounded-md w-full px-3 py-2 h-10 border-neutral-40 text-neutral-90',
        classNameInput,
      )}
      {...props}
    />
  );
};

export const InputLabel = ({
  label,
  type = 'text',
  name,
  placeholder = 'Input here',
  isError = false,
  errorMessage = '',
  required = false,
  classNameWrapper,
  classNameInput,
  classNameLabel,
  subfix,
  prefix,
  filled = '',
  disabled,
  ...props
}: IInputLbalel) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHidden, setIsHidden] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={twMerge('flex flex-col', classNameWrapper)}>
      <Label
        label={label}
        required={required}
        classNameLabel={classNameLabel}
        filled={filled}
      />
      <div
        className={twMerge(
          'bg-transparent border-neutral-40',
          isFocused && 'border-primary',
          isError && isFocused && ' border-red-500 ',
          disabled && 'bg-neutral-40',
          ' p-2 mt-2 rounded-md w-full px-3 py-2 h-10 border text-neutral-90 flex items-center cursor-text',
          classNameInput,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleDivClick}
      >
        <span className="pr-1">{prefix || ''}</span>
        <input
          type={type === 'password' && !isHidden ? 'text' : type}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          className={twMerge(
            disabled ? 'bg-neutral-40' : 'bg-transparent',
            'h-10 w-full outline-none autofill:bg-none text-sm',
          )}
          disabled={disabled}
          {...props}
        />
        {subfix && (
          <span className="w-full pl-1 text-end text-sm">{subfix || ''}</span>
        )}
        {type === 'password' && (
          <span
            className="flex cursor-pointer justify-end pl-1 text-end text-sm text-neutral-40"
            onClick={() => setIsHidden((curr) => !curr)}
          >
            {isHidden ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </span>
        )}
      </div>
      {isError && isFocused && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputLabel;
