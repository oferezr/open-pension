import { CompareSave } from "@/app/simulator/page";
import { monthly_by_yearly, saving_by_yearly } from "@/lib/utils/client";

export function CompareItem(props: any) {
    const save:CompareSave = props.item;
    const [compare_list, setCompareList] = props.compare_list;
    const routes = ["מסלול הלכתי", "מסלול לבני 60 ומעלה", "מסלול לבני 50-60", "מסלול לבני 50 ומטה", "מסלול מניות", "מסלול מניות חול", "מסלול מניות פאסיבי", "מסלול מדד S&P 500"];
    const route = routes[ Math.round( save.route*(routes.length-1))];
    const funds = ["אנליסט" , "מור פנסיה","אלטשולר שחם","מגדל","הפניקס","כלל","מנורה מבטחים","מיטב דש","הראל"];
    const fund = funds[save.fund];
    const interest_slider = 0.5;
    const monthly = monthly_by_yearly(save.salary, save.age, save.yearly, save.is_male);
    const total_savings = saving_by_yearly(save.salary, save.age, save.yearly, save.is_male);
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
            <label>{save.yearly}%</label>
        </div>
        <button onClick={remove}>להסרה</button>
    </div>);

}