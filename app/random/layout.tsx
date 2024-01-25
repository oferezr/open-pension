import AppScreen from '@/lib/components/app-screen';
import { Noto_Sans_Hebrew, Noto_Serif_Hebrew } from 'next/font/google';
import type { ReactNode } from 'react';

const noto_sans = Noto_Sans_Hebrew({
  weight: ['500', '900'],
  subsets: ['hebrew'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-noto-sans',
});

const noto_serif = Noto_Serif_Hebrew({
  weight: ['500', '900'],
  subsets: ['hebrew'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-noto-serif',
});

const fontClassName = `${noto_sans.variable} ${noto_serif.variable}`

interface Props {
  children: ReactNode[]
}

export default function Layout({ children }: Props) {
  return (
    <AppScreen direction="rtl" className={fontClassName}>
      {children}
    </AppScreen>
  )
}
