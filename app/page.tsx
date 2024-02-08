/// <reference lib="dom" />

import LandingExplanation from '@/lib/components/landing/landing-explanation';
import LandingInput from '@/lib/components/landing/landing-input';
export default function Home() {

  return (
    <div className="landing" dir="rtl">
      <h1>הסדנא</h1>
      <div className='container'>
        <LandingExplanation />
        <div className='spacer'></div>
        <LandingInput />
      </div>


    </div>
  )
}
