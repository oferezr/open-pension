
export default function FundDropDown(props: any) {
    const [fund, setFund] = props.function;
    const funds = props.funds;

    function change_value() {
        var dd = (document.getElementById("fund_dd") as HTMLInputElement);
        console.log("Parent company: "+ dd.value)
        setFund(dd?.value);
    }
    return (
        <div>
            <h3>Funds</h3>
            <div className="slider-container">
                <select className="item" onChange={change_value} id="fund_dd">
                    {funds.map((val: { id: number; name: string; })=><option key={val.id} value={val.id}>{val.name}</option>)}
                </select>
            </div>
        </div>
    )
}