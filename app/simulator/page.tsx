/// <reference lib="dom" />

import Simulator from '@/lib/components/simulator/simulator';
export default function Home() {
  
  return (
        <div className="center padding-2">
          <h1>Welcom to the pension calculator</h1>
          <Simulator/>
        </div>
  )
}
