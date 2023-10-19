import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from './button.module.scss';

type VariantTypes =
  | 'primary'
  | 'primary-text'
  | 'secondary'
  | 'danger'
  | 'white'
  | 'white-text'
  | 'outlined_primary'
  | 'outlined_danger';
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  variant?: VariantTypes;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  classWrapper?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'lg',
  isLoading,
  className,
  classWrapper,
  ...props
}: ButtonProps) => {
  const variantButton = useMemo(() => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'primary-text':
        return styles.primary_text;
      case 'secondary':
        return styles.secondary;
      default:
        return styles.default;
    }
  }, [variant]);
  const baseClass = styles.base_class;

  const sizeClasses = useMemo(() => {
    switch (size) {
      case 'lg':
        return ['font-semibold', 'text-lg', 'px-4', 'py-2'];
      case 'md':
        return ['h-8', 'text-sm', 'px-6', 'py-4'];
      case 'sm':
        return ['text-sm', 'px-4', 'py-2'];
      default:
        return ['h-6', 'text-[0.8125rem]', 'px-4', 'py-3'];
    }
  }, [size]);

  return (
    <button
      className={twMerge(
        variantButton,
        sizeClasses,
        baseClass,
        className,
        classWrapper,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="my-0.5 animate-spin" />
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
