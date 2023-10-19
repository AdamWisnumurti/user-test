/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import type {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
} from 'react';
import React, { useRef } from 'react';

export const InputOTP: React.FC<{
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  length?: number;
}> = ({ otp, setOtp, length = 6 }) => {
  const otpFields = Array(length).fill(null);
  const otpInputRefs = otpFields.map(() => useRef<HTMLInputElement>(null));

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (!isNaN(Number(value))) {
      otp[index] = value;

      if (index < length - 1 && value !== '') {
        otpInputRefs[index + 1]?.current?.focus();
      }

      setOtp([...otp]);
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputRefs[index - 1]?.current?.focus();
    }
  };

  return (
    <div className="grid grid-cols-6 space-x-2">
      {otpFields.map((_, index) => (
        <input
          key={index}
          className="-mt-1 h-[58px] rounded-md border border-neutral-20 px-3 py-2 text-center text-2xl focus:border-primary focus:outline-primary"
          placeholder="-"
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleInput(e, index)}
          onKeyPress={(e) => handleBackspace(e, index)}
          ref={otpInputRefs[index]}
        />
      ))}
    </div>
  );
};
