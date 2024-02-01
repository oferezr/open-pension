'use client';

import { monthly_income_by_by_sliders,saving_by_by_sliders } from '@/lib/utils/client';
import { useState } from 'react';
import Slider from './simulator_input/slider';
import BasicInput from './simulator_input/basic-input';

export default function Simulator() {
    const [yearly_slider, setYearlySlider] = useState(0.5);
    const [interest_slider, setInterestSlider] = useState(0.5);
    const [age, setAge] =useState(20);
    const  [salary, setSalary] = useState(5800);
    const [is_male, setIsMale] = useState(true);
    const monthly = monthly_income_by_by_sliders(salary,age,interest_slider,yearly_slider,is_male);
    const total_savings = saving_by_by_sliders(salary,age,interest_slider,yearly_slider,is_male);
    return (
        <div>
            <BasicInput age ={[age, setAge]} salary ={[salary, setSalary]} is_male ={[is_male, setIsMale]}/>
            <Slider function={[interest_slider, setInterestSlider]} title= "Interest" left = "Low Deposite interest" right = "Low Saving interest"/>
            <Slider function={[yearly_slider, setYearlySlider]} title= "Yearly" left = "Security" right = "Yearly"/>
            <h3 id="output"></h3>
            <h2>You will get {monthly.toLocaleString("en-US")}&#x20AA; (gross) monthly income on your retirment.</h2>
            <h2>You will have {total_savings.toLocaleString("en-US")}&#x20AA; in your saving by you get to your retiermnet.</h2>
            Calculated by the valus:
            <ul>
                <li>Age: {age}</li>
                <li>Salary: {salary}</li>
                <li>Male: {is_male}</li>
            </ul>
        </div>

    );
}