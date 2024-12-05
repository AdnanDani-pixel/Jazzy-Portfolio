'use client';

import { ReactNode, forwardRef } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children }, ref) => {
    return (
      <div 
        ref={ref}
        className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden cursor-none"
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';