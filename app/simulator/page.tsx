/// <reference lib="dom" />

import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";

export default function Home() {
  
  return (
        <div dir='rtl'>
          <h1>הסדנא</h1>
            <PersonalInput/>
         
            <RouteInput/>
          
            <FundInput/>
          {/* <Comparsion/> */}
        </div>
  )
}
