
interface ParentCompany{
    id:number;
    name:string;
}

export default function FundDropDown(props: any) {
    const [fund, setFund] = props.function;
    const funds = props.funds;

    function change_value() {
        var dd = (document.getElementById("fund_dd") as HTMLInputElement);
        console.log("Parent company: "+ dd.value)
        setFund(dd?.value);
    }
    const uniques = [];
    const uniques_companies = [];
    funds.map(val=>{
        if(uniques.indexOf(val.PARENT_COMPANY_ID)==-1){
            uniques.push(val.PARENT_COMPANY_ID);
            const id = val.PARENT_COMPANY_ID
            const name = val.PARENT_COMPANY_NAME;
            uniques_companies.push({id, name} as ParentCompany)
        }
    })
    return (
        <div>
            <h3>Funds</h3>
            <div className="slider-container">
                <select className="item" onChange={change_value} id="fund_dd">
                    {uniques_companies.map(val=><option key={val.id} value={val.id}>{val.name}</option>)}
                </select>
            </div>
        </div>
    )
}