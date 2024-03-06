'use client'
'use state'
import { ChangeEvent } from 'react';
import {useState} from 'react';


export default function PersonalInput(props:any) {
    const [age, setAge] = props.age;
    const [salary, setSalary] = props.salary;
    const [isMale, setIsMale] =props.is_male;

    // const [tab1Clicked, setTab1Clicked] = props.tab1Clicked;
    const [tab1Filled, setTab1Filled] = props.tab1Filled;
    // condition for closing other tabs when this opens
    const [isTab1Open, setIsTab1Open] = props.tab1Open;
    const [isTab2Open, setIsTab2Open] = props.tab2Open;
    const [isTab3Open, setIsTab3Open] = props.tab3Open;
    const opacity = props.opacity
    const [continue1Clikced, setContinue1Clikced] = props.continue1Clicked

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
        setTab1Filled(true);
    };


    const handleToggleTab = () => {
        setIsTab1Open(!isTab1Open);
        setIsTab2Open(false); // close other tabs when this tab is opened
        setIsTab3Open(false); // close other tabs when this tab is opened

    };

    const handleNextTab = () => {
        setContinue1Clikced(true);
        if (tab1Filled){
            setIsTab2Open(!isTab2Open);
            setIsTab1Open(false); // close other tabs when this tab is opened
            setIsTab3Open(false); // close other tabs when this tab is opened
        }
    };

  return (
    <div className={`simulator-input ${isTab1Open ? 'tab-open' : 'tab-closed'}`} style={{opacity:opacity}}>
        <div className='tab-container'>
            <button className="arrow" onClick={handleToggleTab}>
                {isTab1Open ? <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.487 2.18604C11.2863 1.10093 12.9082 1.10093 13.7076 2.18604L21.7965 13.1672C22.7693 14.4878 21.8264 16.3534 20.1862 16.3534L4.00833 16.3534C2.36817 16.3534 1.4253 14.4878 2.39805 13.1672L10.487 2.18604Z" fill="#376720"/>
                    </svg> 
                    : <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5198 14.6186C14.7205 15.7038 13.0986 15.7038 12.2993 14.6186L4.21033 3.63746C3.23758 2.3169 4.18046 0.451303 5.82062 0.451303L21.9985 0.451305C23.6387 0.451305 24.5815 2.31691 23.6088 3.63747L15.5198 14.6186Z" fill="#376720"/>
                    </svg>}
            </button>
            {isTab1Open &&(
                <div className='tab-open'>
                    <div className="icon" onClick={handleToggleTab}>
                    <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19.1051" cy="11.9547" r="11.9547" fill="#9EDA82"/>
                        <path d="M25.0476 6.24572C26.0161 7.71151 26.6203 9.41438 26.8 11.162C26.8452 11.6018 26.8714 12.0438 26.8787 12.4895C26.885 12.8788 26.7535 13.1506 26.3872 13.236C25.1954 13.5159 24.0099 13.8839 22.8002 14.0078C19.5948 14.3359 16.3952 14.1922 13.2456 13.4687C12.4761 13.2918 11.7312 12.9795 11.0015 12.6697C10.8229 12.5939 10.6284 12.2722 10.6404 12.0751C10.8046 9.31503 11.9283 3.85487 12.6508 5.78225C13.8068 8.86555 22.2898 2.06879 25.0476 6.24572Z" fill="#265B1F"/>
                        <path d="M9.72479 11.3348C9.75283 11.4155 9.76391 11.4315 9.76378 11.447C9.69572 12.9197 9.8686 13.3504 11.2987 13.7906C12.8303 14.2627 14.4184 14.6149 16.0078 14.8189C19.0445 15.2078 22.095 15.2081 25.1141 14.5919C25.6878 14.4752 26.2535 14.2785 26.7945 14.0518C27.4557 13.7745 27.8506 13.2799 27.7771 12.507C27.7608 12.3363 27.7757 12.1635 27.7768 11.9414C30.1206 12.3992 32.4355 12.8438 34.527 14.0191C34.9915 14.2799 35.5593 14.5744 35.5344 15.1785C35.5086 15.8084 34.8926 16.0413 34.4005 16.2786C32.4319 17.2298 30.2981 17.5537 28.1597 17.7788C21.1663 18.5163 14.2086 18.2907 7.33055 16.7494C5.91919 16.4328 4.55902 15.8701 3.19918 15.3592C2.7768 15.2006 2.39837 14.8734 2.05964 14.5588C1.64923 14.1777 1.643 13.7696 2.09984 13.4564C2.6798 13.0596 3.30993 12.696 3.96943 12.4645C5.82661 11.8145 7.76728 11.5346 9.72675 11.3342L9.72479 11.3348Z" fill="#265B1F"/>
                        <path d="M11.5845 6.5951C11.7543 5.463 12.7268 4.62549 13.8716 4.62549H23.7643C24.9091 4.62549 25.8816 5.463 26.0514 6.5951L26.514 9.67868C26.7237 11.0769 25.6408 12.3344 24.2269 12.3344H13.409C11.9951 12.3344 10.9122 11.0769 11.1219 9.67868L11.5845 6.5951Z" fill="#265B1F"/>
                        <path d="M2.03273 27.2793H6.78908V27.4108L4.11214 34.4497H2.64221V34.39L4.94868 28.4624H0.646458V26.0843H2.03273V27.2793ZM7.9665 27.2793H9.35277V31.3306L7.9665 31.5577V27.2793ZM13.8442 27.1479C16.1866 27.1479 17.5131 28.6298 17.5131 30.8048C17.5131 33.0754 16.1388 34.5812 13.6291 34.5812C12.7209 34.5812 11.8246 34.4617 10.9761 34.0912L11.3227 33.0156C12.0516 33.3024 12.8045 33.422 13.6052 33.422C15.1827 33.422 16.1268 32.3822 16.1268 30.8048C16.1268 29.3348 15.2664 28.3071 13.8442 28.3071C12.7448 28.3071 12.0277 28.8329 12.0277 29.6575C12.0277 30.4462 12.7209 30.9123 13.7725 30.8406L13.7367 31.9042C11.8843 32.0476 10.6415 31.0557 10.6415 29.6575C10.6415 27.9964 12.0397 27.1479 13.8442 27.1479ZM20.3561 27.2793V34.4497H18.9698V27.2793H20.3561ZM27.7122 30.745V34.4497H26.3737V30.8048C26.3737 29.1436 25.5372 28.3071 24.1748 28.3071C23.3741 28.3071 22.6929 28.57 22.0476 28.9046L21.5815 27.9247C22.5615 27.3749 23.4936 27.1837 24.4018 27.1837C26.3139 27.1837 27.7122 28.2593 27.7122 30.745ZM32.2374 27.1479C34.5798 27.1479 35.9063 28.6298 35.9063 30.8048C35.9063 33.0754 34.532 34.5812 32.0223 34.5812C31.1141 34.5812 30.2178 34.4617 29.3693 34.0912L29.7159 33.0156C30.4449 33.3024 31.1977 33.422 31.9984 33.422C33.5759 33.422 34.52 32.3822 34.52 30.8048C34.52 29.3348 33.6596 28.3071 32.2374 28.3071C31.138 28.3071 30.421 28.8329 30.421 29.6575C30.421 30.4462 31.1141 30.9123 32.1657 30.8406L32.1299 31.9042C30.2775 32.0476 29.0347 31.0557 29.0347 29.6575C29.0347 27.9964 30.4329 27.1479 32.2374 27.1479Z" fill="#265B1F"/>
                    </svg>
                    </div>   
                    <div className='main-content'>
                        <div className='header' onClick={handleToggleTab}>
                            <h3> היי, נעים להכיר</h3>
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
                                <p className='subtext'>בכל חודש מופרש לחיסכון על ידך ועל ידי המעסיק שלך אחוז מסוים מהשכר. (הפקדה)</p>
                            </div>
                        </div>
                        <div className="retire-age">
                            
                            <label>צפי לגיל פרישה</label>
                            <div className="binary-selector-container">
                                <label className='radio-container'>
                                    <input
                                    type="radio" id="female" name="option" value="65"
                                    onChange={handleRadioChange} />
                                    <span className="checkmark"></span>
                                    <span className='gender'>65 (נקבה)</span>
                                </label>
                                <label className='radio-container'>
                                    <input
                                    type="radio" id="male" name="option" value="67"
                                    onChange={handleRadioChange} />
                                    <span className="checkmark"></span>
                                    <span className='gender'>67 (זכר)</span>
                                </label>

                            </div>
                        </div>
                        <p className='subtext'>לפי החוק הישראלי נשים זכאיות לפרוש לפנסיה בגיל 65 וגברים בגיל 67.</p>
                        <button className='continue' onClick={handleNextTab}>
                            <svg width="89" height="30" viewBox="0 0 89 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="89" height="30" rx="8" fill="#265B1F"/>
                                <path d="M30.2309 11.7824H32.1687C34.2516 11.7824 35.0703 12.6736 35.0703 14.9119V19.7306H33.8682V14.9119C33.8682 13.4197 33.3397 12.8083 32.0858 12.8083H30.2309V11.7824ZM42.421 11.7824H43.6231V14.5389C43.6231 16.7876 42.2656 18.1244 39.9858 18.1244C37.7164 18.1244 36.3588 16.7876 36.3588 14.5389V11.7824H37.5609V14.5803C37.5609 16.1451 38.4832 17.0984 39.9858 17.0984C41.4987 17.0984 42.421 16.1451 42.421 14.5803V11.7824ZM40.5868 11.7824V15.3057L39.3848 15.5544V11.7824H40.5868ZM48.7472 11.6891C50.4364 11.6891 51.5659 12.9948 51.5659 14.8601C51.5659 17.4611 50.0011 18.6632 47.6074 17.7617L47.8768 16.7876C49.5555 17.4611 50.4364 16.6839 50.4364 14.8601C50.4364 13.5544 49.7421 12.7461 48.7991 12.7461C47.7939 12.7461 47.2343 13.6788 46.8509 15.0984L46.0737 18H44.882L45.6799 15.1088L44.5504 11.7824H45.7317L46.3224 13.6477C46.7576 12.4974 47.597 11.6891 48.7472 11.6891ZM52.7434 11.7824H55.3755C57.4895 11.7824 58.4532 12.7668 58.4532 14.9637V18H57.2512V14.9637C57.2512 13.4508 56.6916 12.8083 55.3755 12.8083H52.7434V11.7824ZM52.8159 14.715L54.018 14.5492V18H52.8159V14.715Z" fill="#DAFFC9"/>
                            </svg>
                        </button>
                    </div>  
                </div>


                )}{!isTab1Open &&(
                    <div className="tab-closed" onClick={handleToggleTab}>
                        <div className="icon">
                        <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.1051" cy="11.9547" r="11.9547" fill="#9EDA82"/>
                            <path d="M25.0476 6.24572C26.0161 7.71151 26.6203 9.41438 26.8 11.162C26.8452 11.6018 26.8714 12.0438 26.8787 12.4895C26.885 12.8788 26.7535 13.1506 26.3872 13.236C25.1954 13.5159 24.0099 13.8839 22.8002 14.0078C19.5948 14.3359 16.3952 14.1922 13.2456 13.4687C12.4761 13.2918 11.7312 12.9795 11.0015 12.6697C10.8229 12.5939 10.6284 12.2722 10.6404 12.0751C10.8046 9.31503 11.9283 3.85487 12.6508 5.78225C13.8068 8.86555 22.2898 2.06879 25.0476 6.24572Z" fill="#265B1F"/>
                            <path d="M9.72479 11.3348C9.75283 11.4155 9.76391 11.4315 9.76378 11.447C9.69572 12.9197 9.8686 13.3504 11.2987 13.7906C12.8303 14.2627 14.4184 14.6149 16.0078 14.8189C19.0445 15.2078 22.095 15.2081 25.1141 14.5919C25.6878 14.4752 26.2535 14.2785 26.7945 14.0518C27.4557 13.7745 27.8506 13.2799 27.7771 12.507C27.7608 12.3363 27.7757 12.1635 27.7768 11.9414C30.1206 12.3992 32.4355 12.8438 34.527 14.0191C34.9915 14.2799 35.5593 14.5744 35.5344 15.1785C35.5086 15.8084 34.8926 16.0413 34.4005 16.2786C32.4319 17.2298 30.2981 17.5537 28.1597 17.7788C21.1663 18.5163 14.2086 18.2907 7.33055 16.7494C5.91919 16.4328 4.55902 15.8701 3.19918 15.3592C2.7768 15.2006 2.39837 14.8734 2.05964 14.5588C1.64923 14.1777 1.643 13.7696 2.09984 13.4564C2.6798 13.0596 3.30993 12.696 3.96943 12.4645C5.82661 11.8145 7.76728 11.5346 9.72675 11.3342L9.72479 11.3348Z" fill="#265B1F"/>
                            <path d="M11.5845 6.5951C11.7543 5.463 12.7268 4.62549 13.8716 4.62549H23.7643C24.9091 4.62549 25.8816 5.463 26.0514 6.5951L26.514 9.67868C26.7237 11.0769 25.6408 12.3344 24.2269 12.3344H13.409C11.9951 12.3344 10.9122 11.0769 11.1219 9.67868L11.5845 6.5951Z" fill="#265B1F"/>
                            <path d="M2.03273 27.2793H6.78908V27.4108L4.11214 34.4497H2.64221V34.39L4.94868 28.4624H0.646458V26.0843H2.03273V27.2793ZM7.9665 27.2793H9.35277V31.3306L7.9665 31.5577V27.2793ZM13.8442 27.1479C16.1866 27.1479 17.5131 28.6298 17.5131 30.8048C17.5131 33.0754 16.1388 34.5812 13.6291 34.5812C12.7209 34.5812 11.8246 34.4617 10.9761 34.0912L11.3227 33.0156C12.0516 33.3024 12.8045 33.422 13.6052 33.422C15.1827 33.422 16.1268 32.3822 16.1268 30.8048C16.1268 29.3348 15.2664 28.3071 13.8442 28.3071C12.7448 28.3071 12.0277 28.8329 12.0277 29.6575C12.0277 30.4462 12.7209 30.9123 13.7725 30.8406L13.7367 31.9042C11.8843 32.0476 10.6415 31.0557 10.6415 29.6575C10.6415 27.9964 12.0397 27.1479 13.8442 27.1479ZM20.3561 27.2793V34.4497H18.9698V27.2793H20.3561ZM27.7122 30.745V34.4497H26.3737V30.8048C26.3737 29.1436 25.5372 28.3071 24.1748 28.3071C23.3741 28.3071 22.6929 28.57 22.0476 28.9046L21.5815 27.9247C22.5615 27.3749 23.4936 27.1837 24.4018 27.1837C26.3139 27.1837 27.7122 28.2593 27.7122 30.745ZM32.2374 27.1479C34.5798 27.1479 35.9063 28.6298 35.9063 30.8048C35.9063 33.0754 34.532 34.5812 32.0223 34.5812C31.1141 34.5812 30.2178 34.4617 29.3693 34.0912L29.7159 33.0156C30.4449 33.3024 31.1977 33.422 31.9984 33.422C33.5759 33.422 34.52 32.3822 34.52 30.8048C34.52 29.3348 33.6596 28.3071 32.2374 28.3071C31.138 28.3071 30.421 28.8329 30.421 29.6575C30.421 30.4462 31.1141 30.9123 32.1657 30.8406L32.1299 31.9042C30.2775 32.0476 29.0347 31.0557 29.0347 29.6575C29.0347 27.9964 30.4329 27.1479 32.2374 27.1479Z" fill="#265B1F"/>
                        </svg>
                        </div> 
                        <div className='header'>
                            <h3>היי, נעים להכיר</h3>
                        </div>
                    </div>
                )}
        </div>
    </div>
  );
}
