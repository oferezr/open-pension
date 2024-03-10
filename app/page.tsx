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
  const [continue3Clikced, setContinue3Clikced] = useState(false);

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
        header_h1[0].style.opacity="50%";
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
      header_h1[0].style.opacity="50%";
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
          <FundInput  tab1Open={[isTab1Open, setIsTab1Open]} tab2Open={[isTab2Open, setIsTab2Open]} tab3Open={[isTab3Open, setIsTab3Open]} tab1Filled={[tab1Filled, setTab1Filled]} tab2Filled={[tab2Filled, setTab2Filled]} tab3Filled={[tab3Filled, setTab3Filled]} continue1Clicked = {[continue1Clikced, setContinue1Clikced]} continue2Clicked = {[continue2Clikced, setContinue2Clikced]} continue3Clicked = {[continue3Clikced, setContinue3Clikced]} route={[route, setRoute]}/>
        </div>
        <div className="left">
          <h1><a href="/.">פנסיה פתוחה</a></h1>
          <SimulatorOutput monthly={monthly} savings={total_savings} borad={borad} filled = {[tab2Filled, setTab2Filled]} compare_list={[compare_list, setCompareList]} active ={[active, setActive]}/>
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