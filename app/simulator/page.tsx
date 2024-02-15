/// <reference lib="dom" />
'use client';
import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";
import { useState } from "react";

export default function Home() {
  const [route, setRoute] = useState(0.5);
  
  return (
        <div dir='rtl'>
          <h1>פנסיה פתוחה</h1>
            <PersonalInput/>
         
            <RouteInput function={[route, setRoute]}/>
          
            <FundInput/>
          {/* <Comparsion/> */}
        </div>
  )
}
