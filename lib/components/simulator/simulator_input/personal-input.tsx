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
                    <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.6371" cy="13.5688" r="13.5688" fill="#9EDA82"/>
                        <path d="M29.0091 7.089C30.1083 8.75269 30.7941 10.6855 30.998 12.6691C31.0493 13.1682 31.0791 13.6699 31.0874 14.1758C31.0945 14.6177 30.9452 14.9262 30.5295 15.0231C29.1767 15.3407 27.8312 15.7585 26.4581 15.8991C22.82 16.2715 19.1884 16.1084 15.6135 15.2872C14.7401 15.0864 13.8946 14.732 13.0664 14.3803C12.8638 14.2943 12.643 13.9292 12.6565 13.7054C12.8429 10.5727 14.1184 4.37533 14.9384 6.56294C16.2505 10.0625 25.8788 2.34811 29.0091 7.089Z" fill="#265B1F"/>
                        <path d="M11.6173 12.8652C11.6492 12.9568 11.6617 12.975 11.6616 12.9925C11.5844 14.6641 11.7806 15.1529 13.4037 15.6525C15.1422 16.1885 16.9446 16.5882 18.7487 16.8197C22.1954 17.2611 25.6577 17.2615 29.0845 16.5621C29.7357 16.4296 30.3778 16.2063 30.9918 15.949C31.7423 15.6343 32.1905 15.0729 32.1071 14.1957C32.0885 14.0019 32.1054 13.8057 32.1067 13.5537C34.7669 14.0733 37.3945 14.578 39.7683 15.9119C40.2956 16.208 40.94 16.5422 40.9118 17.2279C40.8824 17.9428 40.1833 18.2072 39.6247 18.4764C37.3903 19.5562 34.9684 19.9238 32.5413 20.1793C24.6037 21.0163 16.7066 20.7603 8.89984 19.0108C7.29792 18.6515 5.7541 18.0129 4.21066 17.433C3.73125 17.2529 3.30173 16.8815 2.91726 16.5245C2.45143 16.0919 2.44436 15.6288 2.96289 15.2732C3.62115 14.8228 4.33637 14.4102 5.08491 14.1475C7.19284 13.4096 9.39553 13.0919 11.6196 12.8645L11.6173 12.8652Z" fill="#265B1F"/>
                        <path d="M13.7281 7.48555C13.9209 6.20059 15.0247 5.25 16.324 5.25H27.5525C28.8518 5.25 29.9556 6.20059 30.1484 7.48555L30.6734 10.9855C30.9114 12.5725 29.6823 13.9998 28.0775 13.9998H15.799C14.1942 13.9998 12.9651 12.5725 13.2031 10.9855L13.7281 7.48555Z" fill="#265B1F"/>
                        <path d="M2.23337 33.6268H7.7325V33.7788L4.63751 41.917H2.93803V41.8479L5.6047 34.9947H0.630604V32.2451H2.23337V33.6268ZM9.09379 33.6268H10.6966V38.3108L9.09379 38.5733V33.6268ZM15.8895 33.4749C18.5976 33.4749 20.1313 35.1881 20.1313 37.7028C20.1313 40.328 18.5423 42.069 15.6408 42.069C14.5907 42.069 13.5544 41.9308 12.5734 41.5025L12.9741 40.259C13.8169 40.5906 14.6874 40.7287 15.6131 40.7287C17.437 40.7287 18.5285 39.5267 18.5285 37.7028C18.5285 36.0033 17.5337 34.8151 15.8895 34.8151C14.6183 34.8151 13.7893 35.423 13.7893 36.3764C13.7893 37.2883 14.5907 37.8272 15.8066 37.7443L15.7651 38.974C13.6235 39.1398 12.1865 37.993 12.1865 36.3764C12.1865 34.4559 13.8031 33.4749 15.8895 33.4749ZM23.4183 33.6268V41.917H21.8155V33.6268H23.4183ZM31.9231 37.6337V41.917H30.3756V37.7028C30.3756 35.7823 29.4084 34.8151 27.8333 34.8151C26.9076 34.8151 26.12 35.1191 25.3739 35.5059L24.835 34.373C25.968 33.7374 27.0457 33.5163 28.0958 33.5163C30.3065 33.5163 31.9231 34.7598 31.9231 37.6337ZM37.1551 33.4749C39.8632 33.4749 41.3969 35.1881 41.3969 37.7028C41.3969 40.328 39.8079 42.069 36.9064 42.069C35.8563 42.069 34.82 41.9308 33.839 41.5025L34.2397 40.259C35.0825 40.5906 35.953 40.7287 36.8787 40.7287C38.7026 40.7287 39.7941 39.5267 39.7941 37.7028C39.7941 36.0033 38.7993 34.8151 37.1551 34.8151C35.8839 34.8151 35.0549 35.423 35.0549 36.3764C35.0549 37.2883 35.8563 37.8272 37.0722 37.7443L37.0307 38.974C34.8891 39.1398 33.4521 37.993 33.4521 36.3764C33.4521 34.4559 35.0687 33.4749 37.1551 33.4749Z" fill="#265B1F"/>
                        </svg>
                    </div>   
                    <div className='main-content'>
                        <div className='header' onClick={handleToggleTab}>
                            <h3> היי, נעים להכיר</h3>
                        </div>
                        <div className='tab-content'>
                        
                        <p className="intro-text">
                            נתחיל בכמה נתונים בסיסיים כדי שנוכל לחשב את הפנסיה העתידית שלך. 
                            בכל שדה שמנו ברירת מחדל, רצוי לשנות את הנתונים בהתאם למצב 
                            שלך כדי שהסימולציה תהיה מדויקת כמה שיותר.
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
                                <p className='subtext'>בכל חודש מופרש לחיסכון על ידך ועל ידי 
                                <br/>                                
                                המעסיק 
                                שלך אחוז מסוים מהשכר. (הפקדה)</p>
                            </div>
                        </div>
                        <div className="retire-age">
                            
                            <label>צפי לגיל פרישה</label>
                            <div className="binary-selector-container">
                                <label className='radio-container'>
                                    <input
                                    type="radio" id="female" name="option" value="65"
                                    onChange={handleRadioChange} checked={!isMale && tab1Filled}/>
                                    <span className="checkmark"></span>
                                    <span className='gender'>65 (נקבה)</span>
                                </label>
                                <label className='radio-container'>
                                    <input
                                    type="radio" id="male" name="option" value="67"
                                    onChange={handleRadioChange} checked={isMale && tab1Filled}/>
                                    <span className="checkmark"></span>
                                    <span className='gender'>67 (זכר)</span>
                                </label>

                            </div>
                        </div>
                        <p className='subtext'>לפי החוק הישראלי נשים זכאיות לפרוש לפנסיה בגיל 65 וגברים בגיל 67.</p>
                        <button className='continue' onClick={handleNextTab}>
                        <svg width="87" height="32" viewBox="0 0 87 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="87" height="32" rx="6.46902" fill="#265B1F"/>
                            <path d="M24.3964 12.7098H26.9802C29.7574 12.7098 30.8489 13.8981 30.8489 16.8826V23.3074H29.2462V16.8826C29.2462 14.8929 28.5415 14.0777 26.8697 14.0777H24.3964V12.7098ZM40.6499 12.7098H42.2527V16.3851C42.2527 19.3834 40.4427 21.1658 37.4029 21.1658C34.377 21.1658 32.567 19.3834 32.567 16.3851V12.7098H34.1698V16.4404C34.1698 18.5268 35.3995 19.7979 37.4029 19.7979C39.4202 19.7979 40.6499 18.5268 40.6499 16.4404V12.7098ZM38.2043 12.7098V17.4076L36.6015 17.7392V12.7098H38.2043ZM49.0849 12.5855C51.337 12.5855 52.8431 14.3264 52.8431 16.8135C52.8431 20.2815 50.7567 21.8843 47.565 20.6822L47.9242 19.3834C50.1626 20.2815 51.337 19.2453 51.337 16.8135C51.337 15.0725 50.4113 13.9948 49.154 13.9948C47.8137 13.9948 47.0676 15.2383 46.5564 17.1313L45.5201 21H43.9312L44.9951 17.1451L43.489 12.7098H45.0641L45.8517 15.1969C46.432 13.6632 47.5512 12.5855 49.0849 12.5855ZM54.4131 12.7098H57.9226C60.7412 12.7098 62.0262 14.0225 62.0262 16.9516V21H60.4234V16.9516C60.4234 14.9344 59.6773 14.0777 57.9226 14.0777H54.4131V12.7098ZM54.5098 16.62L56.1126 16.399V21H54.5098V16.62Z" fill="white"/>
                            </svg>

                        </button>
                    </div>  
                    </div>
                </div>


                )}{!isTab1Open &&(
                    <div className="tab-closed" onClick={handleToggleTab}>
                        <div className="icon">
                        <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.6371" cy="13.5688" r="13.5688" fill="#9EDA82"/>
                            <path d="M29.0091 7.089C30.1083 8.75269 30.7941 10.6855 30.998 12.6691C31.0493 13.1682 31.0791 13.6699 31.0874 14.1758C31.0945 14.6177 30.9452 14.9262 30.5295 15.0231C29.1767 15.3407 27.8312 15.7585 26.4581 15.8991C22.82 16.2715 19.1884 16.1084 15.6135 15.2872C14.7401 15.0864 13.8946 14.732 13.0664 14.3803C12.8638 14.2943 12.643 13.9292 12.6565 13.7054C12.8429 10.5727 14.1184 4.37533 14.9384 6.56294C16.2505 10.0625 25.8788 2.34811 29.0091 7.089Z" fill="#265B1F"/>
                            <path d="M11.6173 12.8652C11.6492 12.9568 11.6617 12.975 11.6616 12.9925C11.5844 14.6641 11.7806 15.1529 13.4037 15.6525C15.1422 16.1885 16.9446 16.5882 18.7487 16.8197C22.1954 17.2611 25.6577 17.2615 29.0845 16.5621C29.7357 16.4296 30.3778 16.2063 30.9918 15.949C31.7423 15.6343 32.1905 15.0729 32.1071 14.1957C32.0885 14.0019 32.1054 13.8057 32.1067 13.5537C34.7669 14.0733 37.3945 14.578 39.7683 15.9119C40.2956 16.208 40.94 16.5422 40.9118 17.2279C40.8824 17.9428 40.1833 18.2072 39.6247 18.4764C37.3903 19.5562 34.9684 19.9238 32.5413 20.1793C24.6037 21.0163 16.7066 20.7603 8.89984 19.0108C7.29792 18.6515 5.7541 18.0129 4.21066 17.433C3.73125 17.2529 3.30173 16.8815 2.91726 16.5245C2.45143 16.0919 2.44436 15.6288 2.96289 15.2732C3.62115 14.8228 4.33637 14.4102 5.08491 14.1475C7.19284 13.4096 9.39553 13.0919 11.6196 12.8645L11.6173 12.8652Z" fill="#265B1F"/>
                            <path d="M13.7281 7.48555C13.9209 6.20059 15.0247 5.25 16.324 5.25H27.5525C28.8518 5.25 29.9556 6.20059 30.1484 7.48555L30.6734 10.9855C30.9114 12.5725 29.6823 13.9998 28.0775 13.9998H15.799C14.1942 13.9998 12.9651 12.5725 13.2031 10.9855L13.7281 7.48555Z" fill="#265B1F"/>
                            <path d="M2.23337 33.6268H7.7325V33.7788L4.63751 41.917H2.93803V41.8479L5.6047 34.9947H0.630604V32.2451H2.23337V33.6268ZM9.09379 33.6268H10.6966V38.3108L9.09379 38.5733V33.6268ZM15.8895 33.4749C18.5976 33.4749 20.1313 35.1881 20.1313 37.7028C20.1313 40.328 18.5423 42.069 15.6408 42.069C14.5907 42.069 13.5544 41.9308 12.5734 41.5025L12.9741 40.259C13.8169 40.5906 14.6874 40.7287 15.6131 40.7287C17.437 40.7287 18.5285 39.5267 18.5285 37.7028C18.5285 36.0033 17.5337 34.8151 15.8895 34.8151C14.6183 34.8151 13.7893 35.423 13.7893 36.3764C13.7893 37.2883 14.5907 37.8272 15.8066 37.7443L15.7651 38.974C13.6235 39.1398 12.1865 37.993 12.1865 36.3764C12.1865 34.4559 13.8031 33.4749 15.8895 33.4749ZM23.4183 33.6268V41.917H21.8155V33.6268H23.4183ZM31.9231 37.6337V41.917H30.3756V37.7028C30.3756 35.7823 29.4084 34.8151 27.8333 34.8151C26.9076 34.8151 26.12 35.1191 25.3739 35.5059L24.835 34.373C25.968 33.7374 27.0457 33.5163 28.0958 33.5163C30.3065 33.5163 31.9231 34.7598 31.9231 37.6337ZM37.1551 33.4749C39.8632 33.4749 41.3969 35.1881 41.3969 37.7028C41.3969 40.328 39.8079 42.069 36.9064 42.069C35.8563 42.069 34.82 41.9308 33.839 41.5025L34.2397 40.259C35.0825 40.5906 35.953 40.7287 36.8787 40.7287C38.7026 40.7287 39.7941 39.5267 39.7941 37.7028C39.7941 36.0033 38.7993 34.8151 37.1551 34.8151C35.8839 34.8151 35.0549 35.423 35.0549 36.3764C35.0549 37.2883 35.8563 37.8272 37.0722 37.7443L37.0307 38.974C34.8891 39.1398 33.4521 37.993 33.4521 36.3764C33.4521 34.4559 35.0687 33.4749 37.1551 33.4749Z" fill="#265B1F"/>
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
