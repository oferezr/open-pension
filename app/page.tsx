/// <reference lib="dom" />

import LandingExplanation from '@/lib/components/landing/landing-explanation';
import LandingInput from '@/lib/components/landing/landing-input';
export default function Home() {
  const grid_columns = [1, 2, 3,4,5,6,7,8];
  const grid_rows = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <div id="wrapper" dir="rtl">
      <div className="landing">
        <h1>הסדנא</h1>
        <div className='container'>
          <LandingExplanation />
          <div className='spacer'></div>
          <LandingInput />
        </div>
      </div>
      <div className='backgound-tilt-grid'>
          {grid_rows.map(r=>
            <div className={"div"+r} key={"r"+r}>
            {grid_columns.map(n=><svg key={"r"+r+n} width="172" height="100" viewBox="0 0 172 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99648 48.2609L84.005 1.39891L169.459 49.2532L84.9971 96.9002L1.99648 48.2609Z" fill="#9EDA82" stroke="#b0f19173" strokeWidth="2" />
            </svg>)}
          </div>
            )}
      </div>

    </div>
  )
}
