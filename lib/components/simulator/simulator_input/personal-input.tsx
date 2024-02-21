'use client'
'use state'
import { ChangeEvent } from 'react';
import {useState} from 'react';



export default function PersonalInput(props:any) {
  const [age, setAge] = props.age;
  const [salary, setSalary] = props.salary;
  const [isMale, setIsMale] =props.is_male;
  const [numberInputAge, setNumberInputAge] = useState('');
  const [numberInputSal, setNumberInputSal] = useState('');
  const [isTabOpen, setIsTabOpen] = useState(false);


  const handleInputChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    // Validate input: allow only numbers
    let numericInput = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    // Limit input range to 0-120
    if (numericInput !== '') {
      let numericValue = parseInt(numericInput);
      // Ensure numeric value is within the range of 0-120
      numericValue = Math.min(Math.max(numericValue, 0), 120);
      inputValue = numericValue.toString(); // Convert back to string for input value
    }
    setAge(numericInput);
  }
  

  const handleInputChangeSal = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    // Validate input: allow only numbers
    let numericInput = inputValue.replace(/\D/g, ''); // Remove non-numeric characters

    if (numericInput !== '') {
      let numericValue = parseInt(numericInput);
      // Ensure numeric value is within the range of 0-120
      inputValue = numericValue.toString(); // Convert back to string for input value
    }
    setSalary(numericInput);

  }

  

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    // sets isMale to true if value is equal to 67.
    setIsMale(event.target.value === "67");
  };
  interface UserValDict {
    numberInputSal:  number;
    numberInputAge: number;
    isMale: boolean;
}

const handleButtonClick = () => {
    // converts vals on pass to simulator from string to number. not working according to interface. 
    // TODO fix it so var userValDict is worling acoorsing to the interface UserValDict.
    // TODO export UserValDict interface.
        var userValDict =   {numberInputSal:  numberInputSal,
                            numberInputAge: numberInputAge,
                            isMale: isMale};
        if(window && window.sessionStorage){

            sessionStorage.setItem('userValDict', JSON.stringify(userValDict));

        window.location.href = "/simulator";
        // navigate('/simulator', { state: { numberInputSal:  numberInputSal,
        //                                   numberInputAge: numberInputAge,
        //                                   selectedRetirementValue: selectedRetirementValue} });
        }
                        
        
      };
const handleToggleTab = () => {
    setIsTabOpen(!isTabOpen); // Toggle the state when the button is clicked
    };

  return (
<div className={`simulator-input ${isTabOpen ? 'tab-open' : 'tab-closed'}`}>
        <div className='tab-container'>
            <button className="arrow" onClick={handleToggleTab}>
                {isTabOpen ? <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5198 14.6186C14.7205 15.7038 13.0986 15.7038 12.2993 14.6186L4.21033 3.63746C3.23758 2.3169 4.18046 0.451303 5.82062 0.451303L21.9985 0.451305C23.6387 0.451305 24.5815 2.31691 23.6088 3.63747L15.5198 14.6186Z" fill="#376720"/>
                </svg>
                : <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.487 2.18604C11.2863 1.10093 12.9082 1.10093 13.7076 2.18604L21.7965 13.1672C22.7693 14.4878 21.8264 16.3534 20.1862 16.3534L4.00833 16.3534C2.36817 16.3534 1.4253 14.4878 2.39805 13.1672L10.487 2.18604Z" fill="#376720"/>
                </svg>            
                }
            </button>
            {isTabOpen &&(
                <div className='tab-open'>
                    <div className="icon">
                        <svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72884 40.4068H9.60276V40.5968L5.73402 50.7695H3.60967V50.6832L6.94301 42.1167H0.725389V38.6797H2.72884V40.4068ZM11.3044 40.4068H13.3078V46.2618L11.3044 46.5899V40.4068ZM19.799 40.2169C23.1841 40.2169 25.1012 42.3585 25.1012 45.5018C25.1012 48.7833 23.115 50.9595 19.4881 50.9595C18.1755 50.9595 16.8801 50.7868 15.6539 50.2514L16.1547 48.697C17.2083 49.1115 18.2964 49.2842 19.4535 49.2842C21.7333 49.2842 23.0977 47.7816 23.0977 45.5018C23.0977 43.3775 21.8542 41.8922 19.799 41.8922C18.21 41.8922 17.1737 42.6521 17.1737 43.8438C17.1737 44.9837 18.1755 45.6573 19.6953 45.5536L19.6435 47.0908C16.9665 47.298 15.1703 45.8645 15.1703 43.8438C15.1703 41.4431 17.191 40.2169 19.799 40.2169ZM29.21 40.4068V50.7695H27.2065V40.4068H29.21ZM39.841 45.4155V50.7695H37.9066V45.5018C37.9066 43.1011 36.6977 41.8922 34.7288 41.8922C33.5716 41.8922 32.5871 42.2721 31.6545 42.7557L30.9809 41.3395C32.3971 40.545 33.7443 40.2687 35.0569 40.2687C37.8203 40.2687 39.841 41.8231 39.841 45.4155ZM46.381 40.2169C49.7661 40.2169 51.6832 42.3585 51.6832 45.5018C51.6832 48.7833 49.697 50.9595 46.0701 50.9595C44.7575 50.9595 43.4622 50.7868 42.2359 50.2514L42.7368 48.697C43.7903 49.1115 44.8784 49.2842 46.0356 49.2842C48.3154 49.2842 49.6798 47.7816 49.6798 45.5018C49.6798 43.3775 48.4363 41.8922 46.381 41.8922C44.792 41.8922 43.7558 42.6521 43.7558 43.8438C43.7558 44.9837 44.7575 45.6573 46.2774 45.5536L46.2255 47.0908C43.5485 47.298 41.7523 45.8645 41.7523 43.8438C41.7523 41.4431 43.773 40.2169 46.381 40.2169Z" fill="#265B1F"/>
                            <circle cx="27.0758" cy="20.2771" r="17.277" fill="#9EDA82"/>
                            <path d="M35.6636 12.0263C37.0633 14.1446 37.9365 16.6056 38.1961 19.1313C38.2614 19.7669 38.2994 20.4057 38.3099 21.0498C38.319 21.6125 38.1289 22.0053 37.5996 22.1287C35.8771 22.5331 34.1638 23.065 32.4156 23.2441C27.7831 23.7183 23.1591 23.5106 18.6071 22.465C17.495 22.2093 16.4185 21.758 15.364 21.3102C15.1059 21.2007 14.8248 20.7358 14.8421 20.4509C15.0794 16.4621 16.7034 8.57099 17.7476 11.3565C19.4183 15.8125 31.6779 5.98973 35.6636 12.0263Z" fill="#265B1F"/>
                            <path d="M13.5189 19.3811C13.5594 19.4977 13.5754 19.5208 13.5752 19.5432C13.4769 21.6716 13.7267 22.294 15.7935 22.9302C18.007 23.6125 20.3021 24.1215 22.5992 24.4162C26.9878 24.9783 31.3964 24.9788 35.7597 24.0882C36.5888 23.9195 37.4064 23.6353 38.1882 23.3077C39.1438 22.9069 39.7145 22.1921 39.6083 21.0752C39.5846 20.8284 39.6062 20.5787 39.6078 20.2577C42.9951 20.9193 46.3407 21.5619 49.3633 23.2604C50.0346 23.6374 50.8552 24.0629 50.8192 24.9361C50.7819 25.8463 49.8916 26.1829 49.1805 26.5258C46.3354 27.9006 43.2516 28.3687 40.1613 28.694C30.0543 29.7598 19.999 29.4338 10.0587 27.2062C8.019 26.7487 6.05327 25.9356 4.08802 25.1972C3.47759 24.9679 2.93069 24.495 2.44115 24.0405C1.84801 23.4896 1.83901 22.8999 2.49924 22.4472C3.33741 21.8737 4.24808 21.3483 5.20119 21.0138C7.88521 20.0743 10.6899 19.6698 13.5217 19.3801L13.5189 19.3811Z" fill="#265B1F"/>
                            <path d="M16.2065 12.5312C16.4519 10.8951 17.8574 9.68469 19.5119 9.68469H33.809C35.4634 9.68469 36.8689 10.8951 37.1143 12.5312L37.7828 16.9876C38.0859 19.0084 36.5208 20.8257 34.4775 20.8257H18.8434C16.8 20.8257 15.2349 19.0084 15.5381 16.9876L16.2065 12.5312Z" fill="#265B1F"/>
                        </svg>
                    </div>   
                    <div className='main-content'>
                        <div className='header'>
                            <h3>1 . היי, נעים להכיר</h3>
                        </div>
                        <p className="intro-text">
                            נתחיל בכמה נתונים בסיסיים כדי שנוכל לחשב את הפנסיה העתידית שלך. בכל שדה שמנו ברירת מחדל אבל רצוי לשנות את הנתונים בהתאם למצב שלך כדי שהסימולציה תהיה מדויקת כמה שיותר.
                        </p>
                        <div className='wrapper'>
                            <div className="cur-age">
                                <label htmlFor="numberInputAge">גיל נוכחי</label>
                                <input type="text" id="numberInputAge" name="numberInput" value={age} onChange={handleInputChangeAge} />
                                <p className='subtext'>
                                כדי שנדע כמה זמן יש לך לחסוך לפנסיה
                                </p>
                            </div>
                            <div className="salary">
                                <label htmlFor="numberInputSal">שכר</label>
                                <input type="text" id="numberInputSal" name="numberInput" value={salary} onChange={handleInputChangeSal} />
                                <p className='subtext'>בכל חודש מופרש על ידך ועל ידי המעסיק שלך אחוז מסוים מהשכר. הפרשה זו נקראת ״הפקדה״ והיא מרכיב קריטי כדי לחשב את הפנסיה העתידית שלך.</p>
                            </div>
                            <div className="retire-age">
                                <label>צפי לגיל פרישה</label>
                                <div className="binary-selector-container">
                                    <label className='radio-container'>
                                        <input
                                        type="radio" id="female" name="option" value="65"
                                        checked={isMale === false}
                                        onChange={handleRadioChange} />
                                        <span className="checkmark"></span>
                                        <span className='gender'>65 (נקבה)</span>
                                    </label>
                                    <label className='radio-container'>
                                        <input
                                        type="radio" id="male" name="option" value="67"
                                        checked={isMale === true}
                                        onChange={handleRadioChange} />
                                        <span className="checkmark"></span>
                                        <span className='gender'>67 (זכר)</span>
                                    </label>
                                    <p className='subtext'>לפי החוק הישראלי נשים זכאיות לפרוש לפנסיה בגיל 65 וגברים בגיל 67.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                )}{!isTabOpen &&(
                    <div className="tab-closed">
                        <div className="icon">
                            <svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.72884 40.4068H9.60276V40.5968L5.73402 50.7695H3.60967V50.6832L6.94301 42.1167H0.725389V38.6797H2.72884V40.4068ZM11.3044 40.4068H13.3078V46.2618L11.3044 46.5899V40.4068ZM19.799 40.2169C23.1841 40.2169 25.1012 42.3585 25.1012 45.5018C25.1012 48.7833 23.115 50.9595 19.4881 50.9595C18.1755 50.9595 16.8801 50.7868 15.6539 50.2514L16.1547 48.697C17.2083 49.1115 18.2964 49.2842 19.4535 49.2842C21.7333 49.2842 23.0977 47.7816 23.0977 45.5018C23.0977 43.3775 21.8542 41.8922 19.799 41.8922C18.21 41.8922 17.1737 42.6521 17.1737 43.8438C17.1737 44.9837 18.1755 45.6573 19.6953 45.5536L19.6435 47.0908C16.9665 47.298 15.1703 45.8645 15.1703 43.8438C15.1703 41.4431 17.191 40.2169 19.799 40.2169ZM29.21 40.4068V50.7695H27.2065V40.4068H29.21ZM39.841 45.4155V50.7695H37.9066V45.5018C37.9066 43.1011 36.6977 41.8922 34.7288 41.8922C33.5716 41.8922 32.5871 42.2721 31.6545 42.7557L30.9809 41.3395C32.3971 40.545 33.7443 40.2687 35.0569 40.2687C37.8203 40.2687 39.841 41.8231 39.841 45.4155ZM46.381 40.2169C49.7661 40.2169 51.6832 42.3585 51.6832 45.5018C51.6832 48.7833 49.697 50.9595 46.0701 50.9595C44.7575 50.9595 43.4622 50.7868 42.2359 50.2514L42.7368 48.697C43.7903 49.1115 44.8784 49.2842 46.0356 49.2842C48.3154 49.2842 49.6798 47.7816 49.6798 45.5018C49.6798 43.3775 48.4363 41.8922 46.381 41.8922C44.792 41.8922 43.7558 42.6521 43.7558 43.8438C43.7558 44.9837 44.7575 45.6573 46.2774 45.5536L46.2255 47.0908C43.5485 47.298 41.7523 45.8645 41.7523 43.8438C41.7523 41.4431 43.773 40.2169 46.381 40.2169Z" fill="#265B1F"/>
                                <circle cx="27.0758" cy="20.2771" r="17.277" fill="#9EDA82"/>
                                <path d="M35.6636 12.0263C37.0633 14.1446 37.9365 16.6056 38.1961 19.1313C38.2614 19.7669 38.2994 20.4057 38.3099 21.0498C38.319 21.6125 38.1289 22.0053 37.5996 22.1287C35.8771 22.5331 34.1638 23.065 32.4156 23.2441C27.7831 23.7183 23.1591 23.5106 18.6071 22.465C17.495 22.2093 16.4185 21.758 15.364 21.3102C15.1059 21.2007 14.8248 20.7358 14.8421 20.4509C15.0794 16.4621 16.7034 8.57099 17.7476 11.3565C19.4183 15.8125 31.6779 5.98973 35.6636 12.0263Z" fill="#265B1F"/>
                                <path d="M13.5189 19.3811C13.5594 19.4977 13.5754 19.5208 13.5752 19.5432C13.4769 21.6716 13.7267 22.294 15.7935 22.9302C18.007 23.6125 20.3021 24.1215 22.5992 24.4162C26.9878 24.9783 31.3964 24.9788 35.7597 24.0882C36.5888 23.9195 37.4064 23.6353 38.1882 23.3077C39.1438 22.9069 39.7145 22.1921 39.6083 21.0752C39.5846 20.8284 39.6062 20.5787 39.6078 20.2577C42.9951 20.9193 46.3407 21.5619 49.3633 23.2604C50.0346 23.6374 50.8552 24.0629 50.8192 24.9361C50.7819 25.8463 49.8916 26.1829 49.1805 26.5258C46.3354 27.9006 43.2516 28.3687 40.1613 28.694C30.0543 29.7598 19.999 29.4338 10.0587 27.2062C8.019 26.7487 6.05327 25.9356 4.08802 25.1972C3.47759 24.9679 2.93069 24.495 2.44115 24.0405C1.84801 23.4896 1.83901 22.8999 2.49924 22.4472C3.33741 21.8737 4.24808 21.3483 5.20119 21.0138C7.88521 20.0743 10.6899 19.6698 13.5217 19.3801L13.5189 19.3811Z" fill="#265B1F"/>
                                <path d="M16.2065 12.5312C16.4519 10.8951 17.8574 9.68469 19.5119 9.68469H33.809C35.4634 9.68469 36.8689 10.8951 37.1143 12.5312L37.7828 16.9876C38.0859 19.0084 36.5208 20.8257 34.4775 20.8257H18.8434C16.8 20.8257 15.2349 19.0084 15.5381 16.9876L16.2065 12.5312Z" fill="#265B1F"/>
                            </svg>
                        </div> 
                        <div className='header'>
                            <h3>1 . היי, נעים להכיר</h3>
                        </div>
                    </div>
                )}
        </div>
    </div>
  );
}
