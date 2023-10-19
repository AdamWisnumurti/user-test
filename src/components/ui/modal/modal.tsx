import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import React, { Fragment, useMemo } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

export const Modal = ({
  isOpen,
  toggleClose,
  children,
  size = 'lg',
}: {
  isOpen: boolean;
  toggleClose: () => void;
  children?: ReactNode;
  size?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';
}) => {
  const maxSizeClass = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'md:max-w-sm';
      case 'md':
        return 'md:max-w-md';
      case 'lg':
        return 'md:max-w-lg';
      case 'xl':
        return 'md:max-w-xl';
      case '2xl':
        return 'md:max-w-2xl';
      case '3xl':
        return 'md:max-w-3xl';
      case '4xl':
        return 'md:max-w-4xl';
      case '5xl':
        return 'md:max-w-5xl';
      case '6xl':
        return 'md:max-w-6xl';
      case '7xl':
        return 'md:max-w-7xl';
      default:
        return 'md:max-w-lg';
    }
  }, [size]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[51]" onClose={toggleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto font-poppins">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* <Dialog.Panel className="w-full max-w-xs md:max-w-lg bg-white text-center px-8 md:px-16 pt-6 md:pt-12 pb-5 md:pb-10 rounded-[12px]"> */}
              <Dialog.Panel
                className={twMerge(
                  maxSizeClass,
                  'w-full max-w-xs rounded-[20px] bg-white text-center',
                )}
                data-cy="modal-add"
              >
                <Dialog.Title className="border-gray-90 flex items-center justify-end px-8 py-4 font-semibold">
                  <span
                    className="cursor-pointer text-neutral-30"
                    onClick={toggleClose}
                    data-cy="modal-add-close-button"
                  >
                    <RxCross2 />
                  </span>
                </Dialog.Title>
                {/* Children Error */}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
