/// <reference lib="dom" />

import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import {saving_result} from '@/lib/utils/client';
import {monthly_income} from '@/lib/utils/client';
import RouteSlider from '@/lib/components/route-slider';
export default function Home() {
  const age = 20;
  const salary = 5800;
  const saving_interest = 0.1;
  const deposite_interest = 1.5;
  const yearly = 4;
  const is_male = true;
  const total_savings = saving_result(salary,age,saving_interest,deposite_interest,yearly,is_male);
  const monthly = monthly_income(salary,age,saving_interest,deposite_interest,yearly,is_male);
  return (
    <WebsiteScreen>
        <div className="center padding-2">
          <h1>Welcom to the pension calculator</h1>
          <RouteSlider/>
          <h3 id = "output">Blanck</h3>
          <h2>You will get {monthly.toLocaleString("en-US")}&#x20AA; (gross) monthly income on your retirment.</h2>
          <h2>You will have {total_savings.toLocaleString("en-US")}&#x20AA; in your saving by you get to your retiermnet.</h2>
          Calculated by the valus:
          <ul>
            <li>Age: {age}</li>
            <li>Salary: {salary}</li>
            <li>Saving interest: {saving_interest}</li>
            <li>Deposite interest: {deposite_interest}</li>
            <li>Yearly: {yearly}</li>
            <li>Male: {is_male}</li>
          </ul>
          <Image
            src="/huji.png"
            alt="HUJI Logo"
            width={320}
            height={100}
            priority
          />
        </div>
    </WebsiteScreen>
  )
}
