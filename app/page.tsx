/// <reference lib="dom" />
'use client';
import FundInput from "@/lib/components/simulator/simulator_input/fund-input";
import PersonalInput from "@/lib/components/simulator/simulator_input/personal-input";
import RouteInput from "@/lib/components/simulator/simulator_input/route-input";
import SimulatorOutput from "@/lib/components/simulator/simulator_output/simulator_output";
import { monthly_income_by_by_sliders, saving_by_by_sliders } from "@/lib/utils/client";
import { useState } from "react";
import { CompareSave } from "./simulator/page";

function get_board(state: boolean): number[][] {
  const board = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
  if (state) {
    board[3][2] = 2;
    board[3][1] = 2;
  }
  return board;
}

function get_buttom(step: number, f: (n: number) => void) {
  const boxes = [1, 2, 3, 4, 5];
  const elems:React.JSX.Element[] = [];
  boxes.map(b => {
    if (step == b) {
      elems.push((<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.92773" cy="8.5" r="8" stroke="#DAFFC9" />
        <circle cx="8.92773" cy="8.5" r="5" fill="#DAFFC9" stroke="#DAFFC9" />
      </svg>));
    }
    else {
      elems.push((<svg onClick={() => f(b-1)} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.92773" cy="8.5" r="8" stroke="#DAFFC9" />
      </svg>));
    }
  })

  var btn = null;
  if (step == 1) {
    btn = (
      <svg onClick={() => f(step)} width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24.4277" cy="24" r="24" fill="#C7F5B1"/>
        <path d="M27.7613 12.6318L17.333 22.443C16.6859 23.0519 16.6859 24.0391 17.333 24.6481L27.7613 34.4592" stroke="#376720" stroke-width="4.09263" stroke-linecap="round"/>
      </svg> );
  }
  if (1 < step && step < 5){
    btn = (
    <svg onClick={() => f(step)} xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
        <circle cx="18.9277" cy="18.5" r="18.5" fill="#C7F5B1"/>
        <path d="M21.3722 9.73828L13.3817 17.301C12.8858 17.7705 12.8858 18.5314 13.3817 19.0008L21.3722 26.5635" stroke="#376720" stroke-width="3.15474" stroke-linecap="round"/>
    </svg> );
  }
  if (step == 5) {
    btn = (<a href="/simulator"> בואו נתחיל</a> );
  }

  return (
    <div className="modal-buttom">
      <div className="right">
        <ul>
          {boxes.map((b)=>(<li key={b}> {elems[b-1]}</li>))}
        </ul>
      </div>
      <div className="left">
        {btn}
      </div>
    </div>
  )
}

export default function Home() {
  const [route, setRoute] = useState(0.5);
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(6800);
  const [is_male, setIsMale] = useState(true);
  const [yearly,setYearly] = useState(5);
  const [fund,setFund] = useState(0);
  const interest_slider = 0.5;
  const [board_state, setBorardState] = useState(false);
  const [compare_list, setCompareList] = useState<CompareSave[]>([]);
  const borad = get_board(board_state);
  const [active, setActive] = useState(false);
  const [tab1Clicked, setTab1Clicked] = useState(false);
  const [tab1Filled, setTab1Filled] = useState(false);
  const [tab2Filled, setTab2Filled] = useState(false);
  const [tab3Filled, setTab3Filled] = useState(false);

  const [isTab1Open, setIsTab1Open] = useState(false);
  const [isTab2Open, setIsTab2Open] = useState(false);
  const [isTab3Open, setIsTab3Open] = useState(false);

  const [continue1Clikced, setContinue1Clikced] = useState(false);
  const [continue2Clikced, setContinue2Clikced] = useState(false);
  const [continue3Clicked, setcontinue3Clicked] = useState(false);


  function step(n: number) {
    var mod1 = (document.getElementById("welcome-modal") as HTMLInputElement);
    var mod2 = (document.getElementById("first-modal") as HTMLInputElement);
    var mod3 = (document.getElementById("impact-modal") as HTMLInputElement);
    var mod4 = (document.getElementById("dogri-modal") as HTMLInputElement);
    var mod5 = (document.getElementById("eyes-modal") as HTMLInputElement);
    
    const header_h1 = (document.getElementsByTagName("h1") as HTMLCollectionOf<HTMLElement>);
    const pred_elements = (document.getElementsByClassName("elm") as HTMLCollectionOf<HTMLElement>);
    const tiles = (document.getElementsByClassName("output-tiles") as HTMLCollectionOf<HTMLElement>);
    if (n == 0) { // first click - moves to second tab
        mod1.style.display = "block";
        mod2.style.display = "none";
        mod3.style.display = "none";
        mod4.style.display = "none";
        mod5.style.display = "none";
        // header_h1[0].style.opacity="50%";
        pred_elements[0].style.opacity="50%";
        pred_elements[1].style.opacity="50%";
        setActive(false);
      }
    if (n == 1) { // first click - moves to second tab
      mod1.style.display = "none";
      mod2.style.display = "block";
      mod3.style.display = "none";
      mod4.style.display = "none";
      mod5.style.display = "none";
    //   header_h1[0].style.opacity="50%";
      pred_elements[0].style.opacity="50%";
      pred_elements[1].style.opacity="50%";
      setActive(true);
    }
    if (n == 2) {
        mod1.style.display = "none";
        mod2.style.display = "none";
        mod3.style.display = "block";
        mod4.style.display = "none";
        mod5.style.display = "none";
      setBorardState(true);
      setActive(true);
    }

    if (n == 3) {
        mod1.style.display = "none";
        mod2.style.display = "none";
        mod3.style.display = "none";
        mod4.style.display = "block";
        mod5.style.display = "none";
      setBorardState(false);
      pred_elements[1].style.opacity="100%";
      tiles[0].style.opacity="50%";
      setActive(true);
    }

    if (n == 4) {
        mod1.style.display = "none";
        mod2.style.display = "none";
        mod3.style.display = "none";
        mod4.style.display = "none";
        mod5.style.display = "block";
      pred_elements[1].style.opacity="50%";
      pred_elements[0].style.opacity="100%";
      setActive(true);
    }

    if (n == 5){
        setTab1Clicked(true);
        console.log("setTab1Clicked"+ tab1Clicked);
        setActive(true);
    }
  }



  const monthly = monthly_income_by_by_sliders(salary, age, interest_slider, route, is_male);
  const total_savings = saving_by_by_sliders(salary, age, interest_slider, route, is_male);

  return (
    <div dir='rtl'>
      <div className="simulator">
        <div className="right" style={{opacity:0.5}}>
          <PersonalInput opacity = {0.5} tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} age={[age, setAge]} salary={[salary, setSalary]} is_male={[is_male, setIsMale]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]}/>
          <RouteInput tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} function={[route, setRoute]}  continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]}/>
          <FundInput  tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} tab3Filled={[tab3Filled, setTab3Filled]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]} continue3Clicked = {[continue3Clicked, setcontinue3Clicked]} route={[route, setRoute]} yearly={[yearly,setYearly]} fund = {[fund,setFund]}/>
        </div>
        <div className="left">
            <h1 style={{opacity:0.5}}><a href="/."><svg id='logo' width="107" height="81" viewBox="0 0 107 81" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <SimulatorOutput monthly={monthly} savings={total_savings} borad={borad} filled = {[tab3Filled, setTab3Filled]} compare_list={[compare_list, setCompareList]} active ={[active, setActive]} continue3Clicked = {[continue3Clicked, setcontinue3Clicked]}/>
        </div>
      </div>


      <div id="welcome-modal" className="modal">
        <div className="modal-content">
          <h2>עתיד טוב יותר</h2>
            <p>״פנסיה פתוחה״ מבית הסדנא לידע ציבורי הוא כלי שבעזרתו תלמדו על מושגי פנסיה חשובים, 
                תיצרו סימולציות אותן ניתן לשמור ולהשוות, 
                ובכך להגדיל את החיסכון ולהרוויח עד מאות אלפי שקלים. </p>
          {get_buttom(1, step)}
        </div>
      </div>

      <div id="first-modal" className="modal">
        <div className="modal-content">
          <h3>פשוט כמו 1-2-3:</h3>
          <div className="split-containter">
            <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M93.3352 23.7205V26.7238C93.3352 26.9482 93.2131 27.1381 93.0212 27.2416C93.0212 27.2503 93.0125 27.2503 93.0125 27.2503L49.922 48.9384C49.922 48.9384 49.8958 48.947 49.8871 48.9556C49.7214 49.0247 49.5557 49.016 49.3987 48.9384H49.39L6.28203 27.2503C6.28203 27.2503 6.27331 27.2503 6.27331 27.2416C6.08144 27.1381 5.95935 26.9482 5.95935 26.7238V23.7205C5.95935 23.6255 6.0204 23.5824 6.05528 23.5565C6.07272 23.5392 6.11633 23.522 6.15993 23.522C6.17738 23.522 6.22098 23.5306 6.24714 23.5479L49.1196 45.1237C49.2068 45.1583 49.2853 45.2014 49.3813 45.2187C49.4685 45.2446 49.5557 45.2532 49.6516 45.2532C49.7388 45.2532 49.826 45.2446 49.922 45.2187C50.0092 45.2014 50.0964 45.1583 50.1836 45.1237L93.0561 23.5479C93.1433 23.4961 93.2131 23.5306 93.248 23.5565C93.2828 23.5737 93.3439 23.6255 93.3439 23.7205H93.3352Z" fill="#CDA05D" />
              <path d="M93.4398 21.9082L92.9601 21.6752L50.3493 0.220074L50.1487 0.11651C49.8347 -0.0388366 49.4597 -0.0388366 49.1545 0.11651L48.9626 0.211444C48.9626 0.211444 48.9539 0.220074 48.9452 0.220074L6.34304 21.6665L5.84594 21.9168C5.3314 22.1843 5 22.7108 5 23.289V26.9742C5 27.3971 5.23547 27.8027 5.63663 27.9926L5.77617 28.0703C5.77617 28.0703 5.81978 28.0961 5.84594 28.1048L48.9365 49.7929C48.9365 49.7929 48.9713 49.8101 48.9975 49.8101L49.1196 49.8792C49.2853 49.9655 49.4684 50 49.6429 50C49.8173 50 50.0004 49.9655 50.1661 49.8792L50.3318 49.8015H50.3405L93.4311 28.1048C93.4398 28.0961 93.4485 28.0961 93.4572 28.0875L93.6491 27.9926C94.0415 27.8027 94.2857 27.4057 94.2857 26.9742V23.289C94.2857 22.7108 93.963 22.1757 93.4311 21.9168L93.4398 21.9082ZM6.77037 22.5123L49.3812 1.07448C49.4597 1.03133 49.5556 1.00544 49.6516 1.00544C49.7475 1.00544 49.8347 1.0227 49.9219 1.07448L77.6635 15.0298L92.5241 22.5123C92.5938 22.5382 92.6026 22.5986 92.6026 22.6331C92.6026 22.6676 92.5938 22.7194 92.5241 22.7539L49.7475 44.2781C49.7475 44.2781 49.7301 44.2867 49.7213 44.2867C49.6865 44.304 49.6341 44.304 49.5993 44.2867C49.5905 44.2867 49.5818 44.2781 49.5731 44.2781L6.77037 22.7539C6.7006 22.7194 6.69188 22.6676 6.69188 22.6331C6.69188 22.5986 6.7006 22.5382 6.77037 22.5123ZM93.3351 26.7239C93.3351 26.9483 93.213 27.1382 93.0212 27.2417C93.0212 27.2504 93.0124 27.2504 93.0124 27.2504L49.9219 48.9385C49.9219 48.9385 49.8958 48.9471 49.887 48.9557C49.7213 49.0248 49.5556 49.0161 49.3987 48.9385H49.3899L6.28199 27.2504C6.28199 27.2504 6.27327 27.2504 6.27327 27.2417C6.08141 27.1382 5.95931 26.9483 5.95931 26.7239V23.7205C5.95931 23.6256 6.02036 23.5825 6.05524 23.5566C6.07268 23.5393 6.11629 23.522 6.15989 23.522C6.17734 23.522 6.22094 23.5307 6.2471 23.5479L49.1196 45.1238C49.2068 45.1584 49.2853 45.2015 49.3812 45.2188C49.4684 45.2447 49.5556 45.2533 49.6516 45.2533C49.7388 45.2533 49.826 45.2447 49.9219 45.2188C50.0091 45.2015 50.0964 45.1584 50.1836 45.1238L93.0561 23.5479C93.1433 23.4962 93.213 23.5307 93.2479 23.5566C93.2828 23.5738 93.3438 23.6256 93.3438 23.7205V26.7239H93.3351Z" fill="#7D0101" />
              <path d="M92.585 22.6331C92.585 22.6331 92.5763 22.7194 92.5065 22.7539L49.73 44.278C49.73 44.278 49.7125 44.2866 49.7038 44.2866C49.6689 44.3039 49.6166 44.3039 49.5817 44.2866C49.573 44.2866 49.5643 44.278 49.5556 44.278L6.77026 22.7539C6.70049 22.7194 6.69177 22.6676 6.69177 22.6331C6.69177 22.5985 6.70049 22.5381 6.77026 22.5122L49.3811 1.07441C49.4596 1.03126 49.5556 1.00537 49.6515 1.00537C49.7474 1.00537 49.8346 1.02263 49.9218 1.07441L77.6634 15.0297L92.524 22.5122C92.5938 22.5381 92.6025 22.5985 92.6025 22.6331H92.585Z" fill="#CDA05D" />
            </svg>
            <div>
              <p>שדה זה מייצג את החיסכון הפנסיוני שלך.</p>
              <p>ריבוע חום הוא ההפרשה האוטומטית מהמשכורת.</p>
            </div>
          </div>
          {get_buttom(2, step)}

        </div>
      </div>
      <div id="impact-modal" className="modal">
        <div className="modal-content">
          <h3>משפיעים על העתיד:</h3>
          <div className="split-containter">
            <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M93.3352 23.7205V26.7238C93.3352 26.9482 93.2131 27.1381 93.0212 27.2416C93.0212 27.2503 93.0125 27.2503 93.0125 27.2503L49.922 48.9384C49.922 48.9384 49.8958 48.947 49.8871 48.9556C49.7214 49.0247 49.5557 49.016 49.3987 48.9384H49.39L6.28203 27.2503C6.28203 27.2503 6.27331 27.2503 6.27331 27.2416C6.08144 27.1381 5.95935 26.9482 5.95935 26.7238V23.7205C5.95935 23.6255 6.0204 23.5824 6.05528 23.5565C6.07272 23.5392 6.11633 23.522 6.15993 23.522C6.17738 23.522 6.22098 23.5306 6.24714 23.5479L49.1196 45.1237C49.2068 45.1583 49.2853 45.2014 49.3813 45.2187C49.4685 45.2446 49.5557 45.2532 49.6516 45.2532C49.7388 45.2532 49.826 45.2446 49.922 45.2187C50.0092 45.2014 50.0964 45.1583 50.1836 45.1237L93.0561 23.5479C93.1433 23.4961 93.2131 23.5306 93.248 23.5565C93.2828 23.5737 93.3439 23.6255 93.3439 23.7205H93.3352Z" fill="#5DCD69" />
              <path d="M93.4398 21.9082L92.9601 21.6752L50.3493 0.220074L50.1487 0.11651C49.8347 -0.0388366 49.4597 -0.0388366 49.1545 0.11651L48.9626 0.211444C48.9626 0.211444 48.9539 0.220074 48.9452 0.220074L6.34304 21.6665L5.84594 21.9168C5.3314 22.1843 5 22.7108 5 23.289V26.9742C5 27.3971 5.23547 27.8027 5.63663 27.9926L5.77617 28.0703C5.77617 28.0703 5.81978 28.0961 5.84594 28.1048L48.9365 49.7929C48.9365 49.7929 48.9713 49.8101 48.9975 49.8101L49.1196 49.8792C49.2853 49.9655 49.4684 50 49.6429 50C49.8173 50 50.0004 49.9655 50.1661 49.8792L50.3318 49.8015H50.3405L93.4311 28.1048C93.4398 28.0961 93.4485 28.0961 93.4572 28.0875L93.6491 27.9926C94.0415 27.8027 94.2857 27.4057 94.2857 26.9742V23.289C94.2857 22.7108 93.963 22.1757 93.4311 21.9168L93.4398 21.9082ZM6.77037 22.5123L49.3812 1.07448C49.4597 1.03133 49.5556 1.00544 49.6516 1.00544C49.7475 1.00544 49.8347 1.0227 49.9219 1.07448L77.6635 15.0298L92.5241 22.5123C92.5938 22.5382 92.6026 22.5986 92.6026 22.6331C92.6026 22.6676 92.5938 22.7194 92.5241 22.7539L49.7475 44.2781C49.7475 44.2781 49.7301 44.2867 49.7213 44.2867C49.6865 44.304 49.6341 44.304 49.5993 44.2867C49.5905 44.2867 49.5818 44.2781 49.5731 44.2781L6.77037 22.7539C6.7006 22.7194 6.69188 22.6676 6.69188 22.6331C6.69188 22.5986 6.7006 22.5382 6.77037 22.5123ZM93.3351 26.7239C93.3351 26.9483 93.213 27.1382 93.0212 27.2417C93.0212 27.2504 93.0124 27.2504 93.0124 27.2504L49.9219 48.9385C49.9219 48.9385 49.8958 48.9471 49.887 48.9557C49.7213 49.0248 49.5556 49.0161 49.3987 48.9385H49.3899L6.28199 27.2504C6.28199 27.2504 6.27327 27.2504 6.27327 27.2417C6.08141 27.1382 5.95931 26.9483 5.95931 26.7239V23.7205C5.95931 23.6256 6.02036 23.5825 6.05524 23.5566C6.07268 23.5393 6.11629 23.522 6.15989 23.522C6.17734 23.522 6.22094 23.5307 6.2471 23.5479L49.1196 45.1238C49.2068 45.1584 49.2853 45.2015 49.3812 45.2188C49.4684 45.2447 49.5556 45.2533 49.6516 45.2533C49.7388 45.2533 49.826 45.2447 49.9219 45.2188C50.0091 45.2015 50.0964 45.1584 50.1836 45.1238L93.0561 23.5479C93.1433 23.4962 93.213 23.5307 93.2479 23.5566C93.2828 23.5738 93.3438 23.6256 93.3438 23.7205V26.7239H93.3351Z" fill="#7D0101" />
              <path d="M92.585 22.6331C92.585 22.6331 92.5763 22.7194 92.5065 22.7539L49.73 44.278C49.73 44.278 49.7125 44.2866 49.7038 44.2866C49.6689 44.3039 49.6166 44.3039 49.5817 44.2866C49.573 44.2866 49.5643 44.278 49.5556 44.278L6.77026 22.7539C6.70049 22.7194 6.69177 22.6676 6.69177 22.6331C6.69177 22.5985 6.70049 22.5381 6.77026 22.5122L49.3811 1.07441C49.4596 1.03126 49.5556 1.00537 49.6515 1.00537C49.7474 1.00537 49.8346 1.02263 49.9218 1.07441L77.6634 15.0297L92.524 22.5122C92.5938 22.5381 92.6025 22.5985 92.6025 22.6331H92.585Z" fill="#5DCD69" />
            </svg>
            <div>
              <p>ריבועים ירוקים = צמיחת הכסף. הוספה או הורדה של ריבוע ירוק מציגה את מהירות צמיחת החיסכון.</p>
            </div>
          </div>

          {get_buttom(3, step)}
        </div>
      </div>
      <div id="dogri-modal" className="modal">
        <div className="modal-content">
          <h3>מדברים ת׳כלס:</h3>
          <p>כאן אפשר לראות את סכום החיסכון הפנסיוני 
            <br/>
            הכללי העתידי בגיל הפרישה.</p>
          {get_buttom(4, step)}
        </div>
      </div>
      <div id="eyes-modal" className="modal">
        <div className="modal-content">
          <h3>עיניים אל המטרה:</h3>
          <p>כאן אפשר לראות את גובה הקצבה החודשית הצפויה לך לאחר הפרישה, קצבה זו תהיה מקור ההכנסה שלך.
          </p>
          {get_buttom(5, step)}
        </div>
      </div>
    </div>
  )
}