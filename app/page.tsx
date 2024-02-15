/// <reference lib="dom" />

import LandingExplanation from '@/lib/components/landing/landing-explanation';
import LandingInput from '@/lib/components/landing/landing-input';

function Comp(props: any) {
  return (
    <div className='tile'>
      <svg width="141" height="72" viewBox="0 0 141 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M140.29 36.2005L70.1896 71.8505L0.0996094 36.2005L70.1896 0.560547L140.29 36.2005Z" stroke="#b0f19173"/>
      </svg>

    </div>

  )
}

export default function Home() {
  const grid_columns = [1, 2, 3, 4, 5, 6, 7, 8];
  const grid_rows = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

  return (
    <div id="wrapper" dir="rtl">
      <div className="landing">
        <h1>הסדנא</h1>
        <div className='container'>
          <LandingExplanation />
          <div className='spacer'></div>
          <LandingInput className='content-box'/>
        </div>
      </div>
      <div className='backgound-tilt-grid'>
        {grid_rows.map(r =>
          <div className={"div" + r + " row"} key={"r" + r}>
            {grid_columns.map(n =>
              <Comp r={r} c={n} key={r + "_" + n} />
            )}
          </div>
        )}
      </div>

    </div>
  )
}
