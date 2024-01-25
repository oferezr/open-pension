import '@/globals.css';
import type { ReactNode } from 'react';

interface Props {
  direction: 'rtl' | 'ltr';
  className: string;
  children: ReactNode[];
}

export default function AppScreen({ direction, className, children }: Props) {
  return (
    <div dir={direction} id="main" className={className}>
      <div className="container fullheight">
        {children}
      </div>
    </div>
  )
}
