import React from 'react';
import { Button } from '../form/button';
import { Modal } from './modal';

export const ModalError = ({
  isOpen,
  toggleClose,
  message,
}: {
  isOpen: boolean;
  toggleClose: () => void;
  message: string;
}) => {
  return (
    <Modal isOpen={isOpen} toggleClose={toggleClose} size="sm">
      {/* Children Error */}
      <div className="flex flex-col px-8 text-center">
        <svg
          aria-hidden="true"
          className="mx-auto mb-2 mt-0 h-16 w-16 text-red-500 dark:text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mb-4 text-xl font-semibold text-neutral-90">
          {message}
        </h3>
        <div className="mb-6 flex justify-center">
          <Button
            variant="primary"
            label="Back to Dashboard"
            onClick={toggleClose}
            size="sm"
          >
            Tutup
          </Button>
        </div>
      </div>
    </Modal>
  );
};
