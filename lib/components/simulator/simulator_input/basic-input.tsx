'use client';

export default function BasicInput(props: any) {
    const [age, setAge] = props.age;
    const [salary, setSalary] = props.salary;
    const [is_male, setIsMale] = props.is_male;
    function change_age() {
        var age_element = (document.getElementById("age") as HTMLInputElement);
        setAge(age_element?.value);
    }
    function change_slary() {
        var salary_element = (document.getElementById("salary") as HTMLInputElement);
        setSalary(salary_element?.value);
    }
    // function change_is_male() {
    //     var is_male_element = (document.getElementsByName("mm") as NodeListOf<HTMLElement>);
    //     setIsMale(is_male_element?.value);
    // }
    return (
        <div>
            <input type="number" id ="age" onChange={change_age} value={age}/>
            <br/>
            <input type="number" id ="salary" onChange={change_slary} value={salary}/>
            <br/>
            {/* <div>
            <input type="radio" id ="is_male" onChange={change_is_male} name="mm" value={is_male?"checked":""}/>
            <input type="radio" id ="is_female" onChange={change_is_male} name="mm" value={is_male?"checked":""}/>
            </div> */}
            
        </div>
    );

}