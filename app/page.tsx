/// <reference lib="dom" />

import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import Simulator from '@/lib/components/simulator/simulator';
export default function Home() {
  
  return (
        <div className="center padding-2">
          <h1>Welcom to the pension calculator</h1>
          <Simulator/>
        </div>
  )
}
