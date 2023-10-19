import React, { useState } from 'react';
import { HeaderLanding } from './header';

export const LayoutDefault = ({
  isTransparent = true,
  children,
}: {
  isTransparent?: boolean;
  children: React.ReactNode;
}) => {
  const [sideOpen, setSideOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-white text-neutral-100">
      <HeaderLanding isTransparent={isTransparent} />
      <div className="">{children}</div>
    </div>
  );
};

export default LayoutDefault;
