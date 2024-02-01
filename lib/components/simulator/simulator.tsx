'use client';
import RouteSlider from '@/lib/components/simulator/simulator_input/route-slider';
import { monthly_income_by_by_sliders,saving_by_by_sliders } from '@/lib/utils/client';
import { useState } from 'react';
import InterestSlider from './simulator_input/interest-slider';

export default function Simulator() {
    const [yearly_slider, setYearlySlider] = useState(0.5);
    const [interest_slider, setInterestSlider] = useState(0.5);
    const age = 20;
    const salary = 5800;
    const is_male = true;
    const monthly = monthly_income_by_by_sliders(salary,age,interest_slider,yearly_slider,is_male);
    const total_savings = saving_by_by_sliders(salary,age,interest_slider,yearly_slider,is_male);
    return (
        <div>
            <RouteSlider  function={[yearly_slider, setYearlySlider]}/>
            <InterestSlider  function={[interest_slider, setInterestSlider]}/>
            <h3 id="output"></h3>
            <h2>You will get {monthly.toLocaleString("en-US")}&#x20AA; (gross) monthly income on your retirment.</h2>
            <h2>You will have {total_savings.toLocaleString("en-US")}&#x20AA; in your saving by you get to your retiermnet.</h2>
            {/* Calculated by the valus:
            <ul>
                <li>Age: {age}</li>
                <li>Salary: {salary}</li>
                <li>Saving interest: {saving_interest}</li>
                <li>Deposite interest: {deposite_interest}</li>
                <li>Yearly: {yearly}</li>
                <li>Male: {is_male}</li>
            </ul> */}
        </div>

    );
}