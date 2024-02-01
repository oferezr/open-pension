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
    function change_is_male(e:any) {
        setIsMale(e.currentTarget.value=="1");
    }
    return (
        <div>
            <h3>Basic Information</h3>
            <div className="slider-container">
            <label>Age: </label>
            <input type="number" id ="age" onChange={change_age} value={age}/>
            <label>Salary: </label>
            <input type="number" id ="salary" onChange={change_slary} value={salary}/>
            <br/>
            <div>
            <input type="radio" name="gender" value={1} onChange={change_is_male}/>
              Male
              <input type="radio" name="gender" value={0} onChange={change_is_male} />
              Female
            </div>
            
        </div>
        </div>
        
    );

}