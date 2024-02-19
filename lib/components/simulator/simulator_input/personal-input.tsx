'use client'
'use state'
import { ChangeEvent } from 'react';
import {useState} from 'react';
import Image from 'next/image';


export default function PersonalInput(props:any) {
  const [age, setAge] = props.age;
  const [salary, setSalary] = props.salary;
  const [isMale, setIsMale] =props.is_male;
  const [numberInputAge, setNumberInputAge] = useState('');
  const [numberInputSal, setNumberInputSal] = useState('');

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


  return (
    <div className="simultor-input">
        <div className="icon">
            <svg width="80" height="67" viewBox="0 0 80 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.6657" cy="17.2771" r="17.277" fill="#9EDA82"/>
            <path d="M49.2535 9.02627C50.6532 11.1446 51.5263 13.6056 51.786 16.1313C51.8513 16.7669 51.8892 17.4057 51.8997 18.0498C51.9089 18.6125 51.7187 19.0053 51.1895 19.1287C49.4669 19.5331 47.7537 20.065 46.0054 20.2441C41.373 20.7183 36.7489 20.5106 32.197 19.465C31.0849 19.2093 30.0084 18.758 28.9538 18.3102C28.6958 18.2007 28.4146 17.7358 28.4319 17.4509C28.6692 13.4621 30.2933 5.57099 31.3374 8.35645C33.0081 12.8125 45.2678 2.98973 49.2535 9.02627Z" fill="#194E00"/>
            <path d="M27.1087 16.3811C27.1493 16.4977 27.1653 16.5208 27.1651 16.5432C27.0667 18.6716 27.3166 19.294 29.3833 19.9302C31.5969 20.6125 33.8919 21.1215 36.189 21.4162C40.5777 21.9783 44.9862 21.9788 49.3496 21.0882C50.1787 20.9195 50.9963 20.6353 51.7781 20.3077C52.7337 19.9069 53.3044 19.1921 53.1981 18.0752C53.1745 17.8284 53.196 17.5787 53.1976 17.2577C56.5849 17.9193 59.9305 18.5619 62.9531 20.2604C63.6245 20.6374 64.445 21.0629 64.4091 21.9361C64.3717 22.8463 63.4815 23.1829 62.7703 23.5258C59.9253 24.9006 56.8415 25.3687 53.7511 25.694C43.6441 26.7598 33.5888 26.4338 23.6486 24.2062C21.6088 23.7487 19.6431 22.9356 17.6779 22.1972C17.0674 21.9679 16.5205 21.495 16.031 21.0405C15.4379 20.4896 15.4289 19.8999 16.0891 19.4472C16.9273 18.8737 17.8379 18.3483 18.791 18.0138C21.4751 17.0743 24.2797 16.6698 27.1116 16.3801L27.1087 16.3811Z" fill="#194E00"/>
            <path d="M29.7964 9.5312C30.0418 7.89507 31.4473 6.68469 33.1017 6.68469H47.3988C49.0533 6.68469 50.4587 7.89507 50.7042 9.5312L51.3726 13.9876C51.6757 16.0084 50.1107 17.8257 48.0673 17.8257H32.4332C30.3899 17.8257 28.8248 16.0084 29.1279 13.9876L29.7964 9.5312Z" fill="#194E00"/>
            <path d="M16.2288 44.1913H23.1028V44.3812L19.234 54.554H17.1097V54.4676L20.443 45.9011H14.2254V42.4641H16.2288V44.1913ZM24.8044 44.1913H26.8078V50.0462L24.8044 50.3743V44.1913ZM33.299 44.0013C36.6841 44.0013 38.6012 46.1429 38.6012 49.2863C38.6012 52.5678 36.615 54.7439 32.9881 54.7439C31.6755 54.7439 30.3801 54.5712 29.1539 54.0358L29.6547 52.4814C30.7083 52.8959 31.7964 53.0686 32.9535 53.0686C35.2333 53.0686 36.5977 51.566 36.5977 49.2863C36.5977 47.1619 35.3542 45.6766 33.299 45.6766C31.71 45.6766 30.6737 46.4365 30.6737 47.6282C30.6737 48.7681 31.6755 49.4417 33.1953 49.3381L33.1435 50.8752C30.4665 51.0825 28.6703 49.6489 28.6703 47.6282C28.6703 45.2275 30.691 44.0013 33.299 44.0013ZM42.71 44.1913V54.554H40.7065V44.1913H42.71ZM53.341 49.1999V54.554H51.4066V49.2863C51.4066 46.8856 50.1977 45.6766 48.2288 45.6766C47.0716 45.6766 46.0871 46.0565 45.1545 46.5401L44.4809 45.1239C45.8971 44.3294 47.2443 44.0531 48.5569 44.0531C51.3203 44.0531 53.341 45.6075 53.341 49.1999ZM59.881 44.0013C63.2661 44.0013 65.1832 46.1429 65.1832 49.2863C65.1832 52.5678 63.197 54.7439 59.5701 54.7439C58.2575 54.7439 56.9622 54.5712 55.7359 54.0358L56.2368 52.4814C57.2903 52.8959 58.3784 53.0686 59.5356 53.0686C61.8154 53.0686 63.1798 51.566 63.1798 49.2863C63.1798 47.1619 61.9363 45.6766 59.881 45.6766C58.292 45.6766 57.2558 46.4365 57.2558 47.6282C57.2558 48.7681 58.2575 49.4417 59.7774 49.3381L59.7255 50.8752C57.0485 51.0825 55.2523 49.6489 55.2523 47.6282C55.2523 45.2275 57.273 44.0013 59.881 44.0013Z" fill="#376720"/>
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
        <button className="arrow">
            {/* <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9108 14.9991L25.957 31.3525L1.86453 31.3525L13.9108 14.9991Z" fill="#194E00"/>
            </svg> */}
        </button>
    </div>
  )
}