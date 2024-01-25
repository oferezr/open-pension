import '@/globals.css';
import Footer from '@/lib/components/footer';
import Navbar from '@/lib/components/navbar';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'rtl' | 'ltr';
}

export default function WebsiteScreen({ direction = 'ltr', children }: Props) {
  return (
    <div dir={direction}>
      <Navbar />
      <div id="main">
        <div className="container">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
