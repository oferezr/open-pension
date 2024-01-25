import '@/globals.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import type { ReactNode } from 'react';

// Next.js has built in support for Google Fonts.
// https://nextjs.org/docs/app/api-reference/components/font
const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: 'Digital Product Jam Starter Kit',
  description: 'A starter kit for wiritng code in the Digital Product Jam course.',
}

export default function RootLayout({ children } : { children: ReactNode }) {
  const bodyClassNames = `${ubuntu.variable} ${process.env.CSS_DEBUG}`
  return (
    <html>
      <body className={bodyClassNames}>
        <div id="page-grid">
          {children}
        </div>
      </body>
    </html>
  )
}
