/// <reference lib="dom" />

import LandingExplanation from '@/lib/components/landing/landing-explanation';
import LandingInput from '@/lib/components/landing/landing-input';


export default function Home() {
  const grid_columns = [1];
  const grid_rows = [1,2,3,4,5,6]
  const grid_item_width = 182;
  for(let i=grid_item_width ; i<1920- 2*grid_item_width; i+=grid_item_width){
    grid_columns.push(i)
  }

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
            <div className={"div"+r+" row"} key={"r"+r}>
            {grid_columns.map(n=>
            <svg key={"r"+r+n} width={grid_item_width} height="111" viewBox="0 0 182 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.93436 55.0096L91.9928 1.17027L180.094 55.0094L91.9931 109.828L1.93436 55.0096Z" stroke="#b0f19173" strokeWidth="2"/>
            </svg>
            )}
          </div>
            )}
      </div>

    </div>
  )
}
