/// <reference lib="dom" />
'use client';
import ComparisonTab from "@/lib/components/simulator/comparsion-tab";
import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";
import SimulatorOutput from "@/lib/components/simulator/simulator_output/simulator_output";
import { monthly_income_by_by_sliders, saving_by_by_sliders } from "@/lib/utils/client";
import Link from "next/link";
import { useState } from "react";

export interface CompareSave {
  age:number;
  is_male:boolean;
  salary:number;
  route: number;
  fund: number;
}



function get_board(route: number): number[][] {
  const board = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
  if (route >= 0) {
    board[0][1] = 2;
  }
  if (route >= 0.1) {
    board[0][2] = 2;
  }
  if (route >= 0.2) {
    board[0][3] = 2;
  }
  if (route >= 0.3) {
    board[1][3] = 2;
  }
  if (route >= 0.4) {
    board[2][3] = 2;
  }
  if (route >= 0.5) {
    board[3][3] = 2;
  }
  if (route >= 0.6) {
    board[3][2] = 2;
  }
  if (route >= 0.7) {
    board[3][1] = 2;
  }
  if (route >= 0.8) {
    board[3][0] = 2;
  }
  if (route >= 0.9) {
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
  const [compare_list, setCompareList] = useState<CompareSave[]>([]);

  const monthly = monthly_income_by_by_sliders(salary, age, interest_slider, route, is_male);
  const total_savings = saving_by_by_sliders(salary, age, interest_slider, route, is_male);
  
//   const [tab1Clicked, setTab1Clicked] = useState(true);

  const [tab1Filled, setTab1Filled] = useState(false);
  const [tab2Filled, setTab2Filled] = useState(false);
  const [tab3Filled, setTab3Filled] = useState(false);

  const [isTab1Open, setIsTab1Open] = useState(false);
  const [isTab2Open, setIsTab2Open] = useState(false);
  const [isTab3Open, setIsTab3Open] = useState(false);

  const [continue1Clikced, setContinue1Clikced] = useState(false);
  const [continue2Clikced, setContinue2Clikced] = useState(false);
  const [continue3Clikced, setContinue3Clikced] = useState(false);

  function add_for_compare() {
    if (compare_list.length < 3) {
      console.log('Pushed ' + route)
      const fund = 1;
      const new_save = { age,is_male, salary, route, fund } as CompareSave;
      setCompareList([...compare_list, new_save]);
    }
  
  }

  return (
    <div dir='rtl'>
      <div className="simulator">
        <div className="right">
          <PersonalInput style={{opacity: 0.5}} tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} age={[age, setAge]} salary={[salary, setSalary]} is_male={[is_male, setIsMale]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} />
          <RouteInput tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} function={[route, setRoute]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]}/>
          <FundInput tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} tab3Filled={[tab3Filled, setTab3Filled]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]} continue3Clicked = {[continue3Clikced, setContinue3Clikced]} />
        </div>
        <div className="left">
          <h1><a href="/.">פנסיה פתוחה</a></h1>
          <SimulatorOutput monthly={monthly} savings={total_savings} borad={borad} save_funcion={add_for_compare} compare_list={[compare_list, setCompareList]} filled = {[tab2Filled, setTab2Filled]} />
        </div>
      </div>
      
    </div>
  )
}