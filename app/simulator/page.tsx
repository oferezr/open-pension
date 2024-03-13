/// <reference lib="dom" />
'use client';
import ComparisonTab from "@/lib/components/simulator/comparsion-tab";
import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";
import SimulatorOutput from "@/lib/components/simulator/simulator_output/simulator_output";
import { monthly_by_yearly, monthly_income_by_by_sliders, saving_by_by_sliders, saving_by_yearly } from "@/lib/utils/client";
import Link from "next/link";
import { use, useState } from "react";

export interface CompareSave {
  age:number;
  is_male:boolean;
  salary:number;
  route: number;
  fund: number;
  yearly:number;
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
  const [yearly,setYearly] = useState(5);
  const [fund, setFund] = useState(0);
  const interest_slider = 0.5;
  const borad = get_board(route);
  const [compare_list, setCompareList] = useState<CompareSave[]>([]);
  const [active, setActive] = useState(true);
  const monthly = monthly_by_yearly(salary, age, yearly, is_male);
  const total_savings = saving_by_yearly(salary, age, yearly, is_male);
  
//   const [tab1Clicked, setTab1Clicked] = useState(true);

  const [tab1Filled, setTab1Filled] = useState(false);
  const [tab2Filled, setTab2Filled] = useState(false);
  const [tab3Filled, setTab3Filled] = useState(false);

  const [isTab1Open, setIsTab1Open] = useState(false);
  const [isTab2Open, setIsTab2Open] = useState(false);
  const [isTab3Open, setIsTab3Open] = useState(false);

  const [continue1Clikced, setContinue1Clikced] = useState(false);
  const [continue2Clikced, setContinue2Clikced] = useState(false);
  const [continue3Clicked, setcontinue3Clicked] = useState(false);


  function add_for_compare() {
    if (compare_list.length < 3) {
      console.log('Pushed ' + route)
      const new_save = { age,is_male, salary, route, fund, yearly } as CompareSave;
      setCompareList([...compare_list, new_save]);
    }
  
  }

  return (
    <div dir='rtl'>
      <div className="simulator">
        <div className="right">
          <PersonalInput style={{opacity: 0.5}} tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} age={[age, setAge]} salary={[salary, setSalary]} is_male={[is_male, setIsMale]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} />
          <RouteInput tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} function={[route, setRoute]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]}/>
          <FundInput tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} tab3Filled={[tab3Filled, setTab3Filled]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]} continue3Clicked = {[continue3Clicked, setcontinue3Clicked]}  route={[route, setRoute]} yearly={[yearly,setYearly]} fund={[fund,setFund]}/>
        </div>
        <div className="left">
            <h1><a href="/."><svg id='logo' width="107" height="81" viewBox="0 0 107 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_452_333)">
                <path d="M51.0053 55.141L43.7208 49.7496C42.0095 48.4851 42.4562 46.0998 44.5462 44.8201L68.6258 30.077L53.7994 19.4002L43.0544 26.0789L49.4075 30.7055C51.2249 32.0231 50.8387 34.1963 48.5822 35.582L39.4652 41.193C37.1178 42.6317 33.9753 42.6544 32.1883 41.3369L15.3931 28.8957C13.6061 27.5782 13.9923 25.2989 16.1049 23.9662L52.4743 1.03755C54.6778 -0.34817 57.9263 -0.317881 59.7966 0.999685L89.5554 22.0807C91.7286 23.6255 92.236 24.4433 92.3193 27.0481V32.0458C92.2133 33.9464 91.1607 35.2943 88.7679 36.733L58.4336 55.0502C56.1317 56.4359 52.868 56.5116 51.0053 55.141Z" fill="#265B1F"/>
                <path d="M6.12959 80.0532V64.7952H0.639732C0.261121 64.7952 -0.00390625 64.4923 -0.00390625 64.1137V62.4857C-0.00390625 62.1071 0.261121 61.8042 0.639732 61.8042H5.71312C8.0605 61.8042 8.96917 62.7507 8.96917 65.1738V80.0532C8.96917 80.4697 8.70414 80.7347 8.32553 80.7347H6.81109C6.43248 80.7347 6.12959 80.4697 6.12959 80.0532ZM0.450427 80.0911V69.9443C0.450427 69.6036 0.677593 69.225 1.0562 69.225H2.57065C2.98712 69.225 3.25215 69.49 3.25215 69.9443V80.0911C3.25215 80.4697 2.98712 80.7347 2.60851 80.7347H1.09407C0.715454 80.7347 0.450427 80.4697 0.450427 80.0911Z" fill="#265B1F"/>
                <path d="M12.263 80.0532V67.1048C12.263 66.3475 12.4902 65.401 13.361 64.7952H11.8465C11.4679 64.7952 11.165 64.4923 11.165 64.1137V62.4857C11.165 62.1071 11.4679 61.8042 11.8465 61.8042H21.0468C21.4254 61.8042 21.6904 62.1071 21.6904 62.5236V80.0532C21.6904 80.4319 21.4633 80.7347 21.0846 80.7347H19.4566C19.078 80.7347 18.813 80.4319 18.813 80.0532V64.7952H15.1026V80.0911C15.1026 80.4697 14.8376 80.7347 14.459 80.7347H12.9445C12.5659 80.7347 12.263 80.4319 12.263 80.0532Z" fill="#265B1F"/>
                <path d="M25.4767 80.0532L25.4388 64.7952H24.5301C24.1515 64.7952 23.8486 64.4923 23.8486 64.038V62.4857C23.8486 62.1071 24.1515 61.8042 24.5301 61.8042H27.5969C28.0512 61.8042 28.3162 62.0692 28.3162 62.4857V80.0532C28.3162 80.4697 28.0891 80.7347 27.6726 80.7347H26.1203C25.7417 80.7347 25.4767 80.4697 25.4767 80.0532Z" fill="#265B1F"/>
                <path d="M29.8682 80.3183V78.766C29.8682 78.3495 30.1711 78.0466 30.5497 78.0466C32.1777 78.0466 32.4806 76.5322 32.4806 73.7304V64.7952H31.4962C31.1176 64.7952 30.8526 64.4923 30.8526 64.1137V62.4478C30.8526 62.0692 31.1176 61.8042 31.4962 61.8042H40.3935C40.8479 61.8042 41.1886 62.1449 41.1886 62.6371V80.0911C41.1886 80.4697 40.9236 80.6969 40.545 80.6969H39.0305C38.6519 80.6969 38.349 80.4697 38.349 80.0911V64.7574H34.4115C35.1309 65.0981 35.358 66.0446 35.358 67.029V74.8663C35.358 79.3717 34.0707 80.9998 30.5497 80.9998C30.1711 80.9998 29.8682 80.6969 29.8682 80.3183Z" fill="#265B1F"/>
                <path d="M45.0509 80.0911V78.5009C45.0509 78.1223 45.3159 77.8194 45.6945 77.8194H46.7925C49.4049 77.8194 50.5407 76.4943 50.5407 73.0489V64.7574H46.6789V69.6414H47.8905C48.2691 69.6414 48.572 69.9065 48.572 70.2851V71.951C48.572 72.3296 48.2691 72.5946 47.8905 72.5946H45.4673C44.4072 72.5946 43.915 71.9888 43.915 70.7394V62.5614C43.915 62.1071 44.2179 61.8042 44.7101 61.8042H50.0864C52.2823 61.8042 53.3803 62.9022 53.3803 65.1738V72.3674C53.3803 77.1758 52.093 80.7347 46.5275 80.7347H45.6945C45.3159 80.7347 45.0509 80.4697 45.0509 80.0911Z" fill="#265B1F"/>
                <path d="M66.6306 80.0532V64.7952H61.1407C60.7621 64.7952 60.4971 64.4923 60.4971 64.1137V62.4857C60.4971 62.1071 60.7621 61.8042 61.1407 61.8042H66.2141C68.5615 61.8042 69.4701 62.7507 69.4701 65.1738V80.0532C69.4701 80.4697 69.2051 80.7347 68.8265 80.7347H67.3121C66.9335 80.7347 66.6306 80.4697 66.6306 80.0532ZM60.9514 80.0911V69.9443C60.9514 69.6036 61.1786 69.225 61.5572 69.225H63.0716C63.4881 69.225 63.7531 69.49 63.7531 69.9443V80.0911C63.7531 80.4697 63.4881 80.7347 63.1095 80.7347H61.595C61.2164 80.7347 60.9514 80.4697 60.9514 80.0911Z" fill="#265B1F"/>
                <path d="M73.0299 72.0645V64.8709H71.9698C71.5912 64.8709 71.3262 64.5681 71.3262 64.1516V62.4478C71.3262 62.0692 71.5912 61.8042 71.9698 61.8042H75.188C75.5666 61.8042 75.8695 62.1071 75.8695 62.5236V72.0645C75.8695 72.4432 75.6045 72.746 75.2259 72.746H73.6736C73.295 72.746 73.0299 72.4432 73.0299 72.0645Z" fill="#265B1F"/>
                <path d="M78.6348 79.4853V62.4857C78.6348 62.0314 78.8998 61.8042 79.3541 61.8042H84.6547C86.7749 61.8042 87.835 62.8264 87.835 64.9088V72.4053C87.835 78.1602 85.9798 80.7347 81.8151 80.7347H79.8842C79.1648 80.7347 78.6348 80.2047 78.6348 79.4853ZM84.9954 73.2761V64.5681H81.4743V78.0466C83.9732 78.0087 84.9954 76.6079 84.9954 73.2761Z" fill="#265B1F"/>
                <path d="M89.0469 80.0532V78.4631C89.0469 78.0845 89.3119 77.7816 89.6527 77.7816H89.9934C91.8107 77.7816 91.7729 75.8885 91.7729 73.5411V64.7574H90.8263C90.4477 64.7574 90.1827 64.4923 90.1827 64.1137V62.4857C90.1827 62.1071 90.4477 61.8042 90.8263 61.8042H93.8552C94.3096 61.8042 94.6125 62.1071 94.6125 62.5236V74.1848C94.6125 77.8573 94.2338 80.7347 90.4099 80.7347H89.6527C89.3119 80.7347 89.0469 80.4319 89.0469 80.0532Z" fill="#265B1F"/>
                <path d="M98.3585 80.0911V78.5009C98.3585 78.1223 98.6235 77.8194 99.0021 77.8194H100.1C102.713 77.8194 103.848 76.4943 103.848 73.0489V64.7574H99.9865V69.6414H101.198C101.577 69.6414 101.88 69.9065 101.88 70.2851V71.951C101.88 72.3296 101.577 72.5946 101.198 72.5946H98.775C97.7149 72.5946 97.2227 71.9888 97.2227 70.7394V62.5614C97.2227 62.1071 97.5255 61.8042 98.0177 61.8042H103.394C105.59 61.8042 106.688 62.9022 106.688 65.1738V72.3674C106.688 77.1758 105.401 80.7347 99.8351 80.7347H99.0021C98.6235 80.7347 98.3585 80.4697 98.3585 80.0911Z" fill="#265B1F"/>
                </g>
                <defs>
                <clipPath id="clip0_452_333">
                <rect width="106.693" height="81" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </a></h1>
          <SimulatorOutput monthly={monthly} savings={total_savings} borad={borad} save_funcion={add_for_compare} compare_list={[compare_list, setCompareList]} filled = {[tab3Filled, setTab3Filled]} active ={[active, setActive]} continue3Clicked = {[continue3Clicked, setcontinue3Clicked]}/>
        </div>
      </div>
      
    </div>
  )
}