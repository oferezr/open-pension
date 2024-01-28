/// <reference lib="dom" />

import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <WebsiteScreen>
        <div className="center padding-2">
          <Image
            src="/huji.png"
            alt="HUJI Logo"
            width={320}
            height={100}
            priority
          />
        </div>
    </WebsiteScreen>
  )
}
