import React, { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { Button } from '@component/ui';
import { useAuth } from '@hook';

export const HeaderLanding = ({
  isTransparent = true,
}: {
  isTransparent: boolean;
}) => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const changePosition = useCallback(() => {
    if (window.scrollY > 25) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  }, []);
  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', changePosition);
  }
  const { logout } = useAuth();

  return (
    <div
      className={twMerge(
        isOnTop && isTransparent ? 'bg-transparent' : 'bg-white',
        isTransparent ? 'fixed' : 'sticky top-0',
        'font-poppins z-50 w-full transition-all duration-700',
      )}
    >
      <div
        className={twMerge(
          isOnTop
            ? 'bg-transparent text-white'
            : 'bg-white text-neutral-100 shadow-sm',
          'p-4 md:px-20 py-3 flex justify-between items-center',
        )}
      >
        <div>
          <Image
            src="/images/logo-vhiweb.png"
            className="my-2 h-auto w-full cursor-pointer"
            alt="icon"
            width={70}
            height={0}
          />
        </div>
        <div>
          <Button size="sm" onClick={logout} variant="secondary">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLanding;
