'use client';

import { monthly_income_by_by_sliders, saving_by_by_sliders } from '@/lib/utils/client';
import { useEffect, useState } from 'react';
import Slider from './simulator_input/slider';
import BasicInput from './simulator_input/basic-input';
import FundDropDown from './simulator_input/fund-dropdown';

const dataApiEndpoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=6d47d6b5-cb08-488b-b333-f1e717b1e1bd";

interface RawFundsDataRow {
    FUND_ID: string;
    FUND_NAME: string;
    PARENT_COMPANY_ID:number;
    PARENT_COMPANY_NAME: string;
    AVG_ANNUAL_MANAGEMENT_FEE: number;
    AVG_DEPOSIT_FEE: number;
    AVG_ANNUAL_YIELD_TRAILING_5YRS: number;
    STANDARD_DEVIATION: number;
}

interface RawResult {
    records: RawFundsDataRow[];
}
interface RawFundsData {
    help: string;
    result: RawResult;
}

interface FundsData {
    result: RawFundsDataRow[];
}

async function getRawFundsData(): Promise<RawFundsData> {
    const response = await fetch(dataApiEndpoint);
    const data = await response.json();
    return data;
}

async function getFunds(): Promise<FundsData | null> {
    const data = await getRawFundsData();
    if (data.help != undefined) {
        const result = data.result.records;
        return { result } as FundsData
    }
    return null;
}

function getSearchSTD(stds:number[], interest_slider:number){
    const max_std = Math.max(...stds);
    const min_std = Math.min(...stds);
    const std_to_serach = min_std + interest_slider*(max_std- min_std);
    return std_to_serach
 }

function getFund(funds:FundsData|null, parent_company:number, interest_slider:number ):RawFundsDataRow[]{
    if (!funds){
        return []
    }
    const company_funds = funds.result.filter(f=> f.PARENT_COMPANY_ID==parent_company).sort((a,b)=>a.STANDARD_DEVIATION<=b.STANDARD_DEVIATION? -1:1);
    const stds = company_funds.map(f=>f.STANDARD_DEVIATION);
    
    const std_to_serach = getSearchSTD(stds, interest_slider);
    console.log("Current std: "+std_to_serach);
    return company_funds.filter(f=>f.STANDARD_DEVIATION>=std_to_serach);
}

export default function Simulator() {
    const [yearly_slider, setYearlySlider] = useState(0.5);
    const [interest_slider, setInterestSlider] = useState(0.5);
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(5800);
    const [is_male, setIsMale] = useState(true);
    const [funds, setFunds] = useState<FundsData | null>(null);
    const [fund, setFund] = useState<RawFundsDataRow|null>(null);
    const [parent_company, setParentCompany] = useState(163);
    const monthly = monthly_income_by_by_sliders(salary, age, interest_slider, yearly_slider, is_male);
    const total_savings = saving_by_by_sliders(salary, age, interest_slider, yearly_slider, is_male);
    const company_funds = getFund(funds,parent_company,yearly_slider);
    
    useEffect(() => {
        getFunds().then(data => {
            setFunds(data);
        });
    }, []);

    if (!funds) {
        return <div>loading...</div>
    }
    
    return (
        <div>
            <BasicInput age={[age, setAge]} salary={[salary, setSalary]} is_male={[is_male, setIsMale]} />
            <FundDropDown function={[parent_company, setParentCompany]} funds ={funds.result}/>
            <Slider function={[interest_slider, setInterestSlider]} title="Interest" left="Low Deposite interest" right="Low Saving interest" />
            <Slider function={[yearly_slider, setYearlySlider]} title="Yearly" left="Security" right="Yearly" />
            <div>
                <h3>Fund information</h3>
                <ul>
                    <li>Parent company: {parent_company}</li>
                    <li>Fund: {company_funds[0].FUND_NAME}</li>
                    <li>STD: {company_funds[0].STANDARD_DEVIATION}</li>
                    <li>Saving interest: {company_funds[0].AVG_ANNUAL_MANAGEMENT_FEE}%</li>
                    <li>Deposite interest: {company_funds[0].AVG_DEPOSIT_FEE}%</li>
                    <li>AVG Anual yield: {company_funds[0].AVG_ANNUAL_YIELD_TRAILING_5YRS}%</li>
                </ul>
            </div>
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