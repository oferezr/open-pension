import { CompareSave } from "@/app/simulator/page";
import { monthly_income_by_by_sliders, saving_by_by_sliders } from "@/lib/utils/client";

export function CompareItem(props: any) {
    const save:CompareSave = props.item;
    const [compare_list, setCompareList] = props.compare_list;
    const routes = ["פנסיה מקיפה מסלול הלכתי", "פנסיה מקיפה מסלול לבני 60 ומעלה", "פנסיה מקיפה מסלול לבני 50-60", "פנסיה מקיפה מסלול לבני 50 ומטה", "פנסיה מקיפה מסלול מניות", "פנסיה מקיפה מסלול מניות חול", "פנסיה מקיפה מסלול מניות פאסיבי", "פנסיה מקיפה מסלול מדד S&P 500"];
    const route = routes[ Math.round( save.route*(routes.length-1))];
    const fund = "מיטב דש";
    const interest_slider = 0.5;
    const monthly = monthly_income_by_by_sliders(save.salary, save.age, interest_slider, save.route, save.is_male);
    const total_savings = saving_by_by_sliders(save.salary, save.age, interest_slider, save.route, save.is_male);
    function remove(){
        setCompareList(compare_list.filter((i:CompareSave)=>i!=save))
    }
    const is_last = save==compare_list[compare_list.length-1];
    return (<div className="compare-item">
        <div className="compare-item-elem" style={{borderTopLeftRadius:is_last?"10px":"0px"}}>
            <h2>{monthly.toLocaleString("en-US")}&#x20AA;</h2>
            <h3>{total_savings.toLocaleString("en-US")}&#x20AA;</h3>
        </div>
        <div className="compare-item-elem">
            גיל פרישה: {save.is_male?"67":"65"}
            <br />
            שכר: {save.salary}
        </div>
        <div className="compare-item-elem">
            {route}
        </div>
        <div className="compare-item-elem" style={{borderBottomLeftRadius:is_last?"10px":"0px"}}>
            <p>{fund}</p>
            <label>7.2%</label>
        </div>
        <button onClick={remove}>להסרה</button>
    </div>);

}