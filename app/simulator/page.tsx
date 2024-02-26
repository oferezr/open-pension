/// <reference lib="dom" />
'use client';
import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";
import SimulatorOutput from "@/lib/components/simulator/simulator_output/simulator_output";
import { monthly_income_by_by_sliders, saving_by_by_sliders } from "@/lib/utils/client";
import Link from "next/link";
import { useState } from "react";

function get_board(route:number):number[][]{
  const board=  [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
  if(route>=0){
    board[0][1] = 2;
  }
  if(route>=0.1){
    board[0][2] = 2;
  }
  if(route>=0.2){
    board[0][3] = 2;
  }
  if(route>=0.3){
    board[1][3] = 2;
  }
  if(route>=0.4){
    board[2][3] = 2;
  }
  if(route>=0.5){
    board[3][3] = 2;
  }
  if(route>=0.6){
    board[3][2] = 2;
  }
  if(route>=0.7){
    board[3][1] = 2;
  }
  if(route>=0.8){
    board[3][0] = 2;
  }
  if(route>=0.9){
    board[2][0] = 2;
  }
  return board;
}

export default function Home() {
  const [route, setRoute] = useState(0.5);
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(6800);
  const [is_male, setIsMale] = useState(true);
  const interest_slider = 0.5;
  const borad = get_board(route);
  
  
  const monthly = monthly_income_by_by_sliders(salary, age, interest_slider, route, is_male);
  const total_savings = saving_by_by_sliders(salary, age, interest_slider, route, is_male);
  
  const [tab1Filled, setTab1Filled] = useState(false);
  const [tab2Filled, setTab2Filled] = useState(false);
  const [tab3Filled, setTab3Filled] = useState(false);

  const [isTab1Open, setIsTab1Open] = useState(false);
  const [isTab2Open, setIsTab2Open] = useState(false);
  const [isTab3Open, setIsTab3Open] = useState(false);


//   let currentStep = 1;
//     if (is_male){  // user filled the personal details
//         currentStep = 2;   // change the state to second tab   
//     } else if((currentStep == 2)) {
//         currentStep = 3;
//     }


  return (
    <div dir='rtl'>    
        <div className="simulator">
            <div className="right">
                {/* // if not age and not salary and not is male then show personal input */}
                <PersonalInput 
                    tab1Open = {[isTab1Open, setIsTab1Open]}
                    tab2Open = {[isTab2Open, setIsTab2Open]}
                    tab3Open = {[isTab3Open, setIsTab3Open]}
                    tab1Filled = {[tab1Filled, setTab1Filled]} 
                    age = {[age, setAge]} 
                    salary = {[salary, setSalary]} 
                    is_male = {[is_male, setIsMale]}/>
                    {/* // if age and salary and is male then show rout input */}
                <RouteInput 
                    tab1Open = {[isTab1Open, setIsTab1Open]}
                    tab2Open = {[isTab2Open, setIsTab2Open]}
                    tab3Open = {[isTab3Open, setIsTab3Open]}
                    tab1Filled = {[tab1Filled, setTab1Filled]} 
                    tab2Filled = {[tab2Filled, setTab2Filled]} 
                    function={[route, setRoute]} />
                    {/* // if route then show fund input */}
                <FundInput 
                    tab1Open = {[isTab1Open, setIsTab1Open]}
                    tab2Open = {[isTab2Open, setIsTab2Open]}
                    tab3Open = {[isTab3Open, setIsTab3Open]}
                    tab1Filled = {[tab1Filled, setTab1Filled]} 
                    tab2Filled = {[tab2Filled, setTab2Filled]} 
                    tab3Filled = {[tab3Filled, setTab3Filled]}/>
            </div>
            <div className="left">
                <h1><a href="http://localhost:3000/">פנסיה פתוחה</a></h1>
                <SimulatorOutput monthly={monthly} savings={total_savings} borad={borad}/>
            </div>
        </div>
      {/* <Comparsion/> */}
    </div>
  )
}
