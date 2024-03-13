import { useState } from 'react';
export default function RouteInput(props: any) {
    const [isTabOpen, setIsTabOpen] = useState(false);
    // const currentStep = props.currentStep;

    const [route, setRoute] = props.function;
    // condition for opening tab2 for the first time
    const [tab1Filled, setTab1Filled] = props.tab1Filled;
    const [tab2Filled, setTab2Filled] = props.tab2Filled;
    // condition for closing other tabs when this opens
    const [isTab1Open, setIsTab1Open] = props.tab1Open;
    const [isTab2Open, setIsTab2Open] = props.tab2Open;
    const [isTab3Open, setIsTab3Open] = props.tab3Open;

    const [continue1Clikced, setContinue1Clikced] = props.continue1Clicked;
    const [continue2Clikced, setContinue2Clikced] = props.continue2Clicked;

    const primaryColor = "#9EDA82";
    const seconderyColor = "#376720";

    function change_value() {
        var slider = (document.getElementById("route_slider") as HTMLInputElement);
        setRoute(slider?.value);
        const sliderVal = parseFloat(slider?.value);
        const progress = (sliderVal / 1) * 100;
        slider.style.background = `linear-gradient(to left, ${seconderyColor} ${progress}%, ${primaryColor} ${progress}%)`;
        setTab2Filled(true);
    }
    function hover_show() {
        const hover = (document.getElementById("hover") as HTMLInputElement);
        hover.style.visibility = "visible";
    }

    function hover_hide() {
        const hover = (document.getElementById("hover") as HTMLInputElement);
        hover.style.visibility = "hidden";
    }


    const handleToggleTab = () => {
        if (continue2Clikced == true) {
            setIsTab2Open(!isTab2Open);
            setIsTab1Open(false); // close other tabs when this tab is opened
            setIsTab3Open(false); // close other tabs when this tab is opened
        }
    };

    const handleNextTab = () => {
        setContinue2Clikced(true);
        if (tab2Filled){
            setIsTab2Open(!isTab2Open);
            setIsTab1Open(false); // close other tabs when this tab is opened
            setIsTab3Open(true); // close other tabs when this tab is opened
        }
    };


    return (
        <div className={`simulator-input ${isTab2Open ? 'tab-open' : 'tab-closed'}`} style={!tab1Filled ? { opacity: 0.5 } : undefined}>
            <div className='tab-container'>
                <button className="arrow" onClick={handleToggleTab} disabled={!continue1Clikced}>
                    {isTab2Open ? <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.487 2.18604C11.2863 1.10093 12.9082 1.10093 13.7076 2.18604L21.7965 13.1672C22.7693 14.4878 21.8264 16.3534 20.1862 16.3534L4.00833 16.3534C2.36817 16.3534 1.4253 14.4878 2.39805 13.1672L10.487 2.18604Z" fill="#376720"/>
                        </svg> 
                        : <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5198 14.6186C14.7205 15.7038 13.0986 15.7038 12.2993 14.6186L4.21033 3.63746C3.23758 2.3169 4.18046 0.451303 5.82062 0.451303L21.9985 0.451305C23.6387 0.451305 24.5815 2.31691 23.6088 3.63747L15.5198 14.6186Z" fill="#376720"/>
                        </svg> 
                    }
                </button>
                {isTab2Open && (
                    <div className='tab-open'>
                        <div className="icon" onClick={handleToggleTab}>
                            <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.6049" cy="14.5292" r="12.1791" fill="#9EDA82"/>
                                <path d="M22.4185 7.93596V7.18785L30.7746 2.3501L39.3322 7.18785V7.93596L35.1289 10.3299L30.9257 12.7238L22.4185 7.93596Z" fill="#265B1F"/>
                                <path d="M22.4185 7.18785V7.93596L30.9257 12.7238M22.4185 7.18785L30.9257 12.0256M22.4185 7.18785L30.7746 2.3501L39.3322 7.18785M30.9257 12.7238V12.0256M30.9257 12.7238L35.1289 10.3299L39.3322 7.93596V7.18785M30.9257 12.0256L39.3322 7.18785" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M12.2671 14.0248V13.2767L20.6233 8.43896L29.1808 13.2767V14.0248L24.9775 16.4188L20.7743 18.8127L12.2671 14.0248Z" fill="#265B1F"/>
                                <path d="M12.2671 13.2767V14.0248L20.7743 18.8127M12.2671 13.2767L20.7743 18.1145M12.2671 13.2767L20.6233 8.43896L29.1808 13.2767M20.7743 18.8127V18.1145M20.7743 18.8127L24.9775 16.4188L29.1808 14.0248V13.2767M20.7743 18.1145L29.1808 13.2767" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M1.67041 20.3393V19.5912L10.0266 14.7534L18.5841 19.5912V20.3393L14.3809 22.7332L10.1776 25.1272L1.67041 20.3393Z" fill="#265B1F"/>
                                <path d="M1.67041 19.5912V20.3393L10.1776 25.1272M1.67041 19.5912L10.1776 24.4289M1.67041 19.5912L10.0266 14.7534L18.5841 19.5912M10.1776 25.1272V24.4289M10.1776 25.1272L14.3809 22.7332L18.5841 20.3393V19.5912M10.1776 24.4289L18.5841 19.5912" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M2.86227 33.6268H8.36141V33.7788L5.26642 41.917H3.56694V41.8479L6.2336 34.9947H1.25951V32.2451H2.86227V33.6268ZM11.4222 33.6268V41.917H9.81942V33.6268H11.4222ZM14.6904 33.6268H20.1895V33.7788L17.0945 41.917H15.3951V41.8479L18.0617 34.9947H13.0876V32.2451H14.6904V33.6268ZM25.449 33.6268C28.0466 33.6268 29.4974 35.0914 29.4974 37.7028C29.4974 40.3971 27.9637 42.0828 25.449 42.0828C22.9205 42.0828 21.3868 40.3971 21.3868 37.7028V33.6268H25.449ZM25.449 40.7149C26.9965 40.7149 27.8946 39.5405 27.8946 37.7028C27.8946 36.0033 27.0656 34.9947 25.449 34.9947H22.9896V37.7028C22.9896 39.5405 23.8877 40.7149 25.449 40.7149ZM35.9047 33.5025C38.1569 33.5025 39.6629 35.2434 39.6629 37.7305C39.6629 41.1985 37.5765 42.8013 34.3848 41.5992L34.7441 40.3004C36.9824 41.1985 38.1569 40.1622 38.1569 37.7305C38.1569 35.9895 37.2311 34.9118 35.9738 34.9118C34.6335 34.9118 33.8874 36.1553 33.3762 38.0483L32.3399 41.917H30.751L31.8149 38.0621L30.3088 33.6268H31.884L32.6715 36.1139C33.2518 34.5802 34.371 33.5025 35.9047 33.5025Z" fill="#265B1F"/>
                            </svg>
                        </div>
                        <div className="main-content">
                            <div className="header" onClick={handleToggleTab}>
                                <h3>איפה הכסף שלי?</h3>
                            </div>
                            <div className='tab-content'>
                                <div className="intro-text">
                                    <p id='first-par'>
                                    כדי להגיע לגיל הפרישה עם כמה שיותר כסף, חשוב להשקיע את כספי החיסכון באופן חכם במסלול שתואם להעדפות שלנו.
                                    </p>
                                    <p id='second-par'>
                                        <label>מה זה מסלול?</label> דרך בה הכסף שלנו יכול להרוויח לנו עוד כסף. 
                                        בעזרת בתי השקעות, החיסכון שצברנו מושקע במקומות שונים. 
                                        ההבדל העיקרי בין המסלולים הוא מידת הסיכון של הכסף שנצבר.
                                    </p>
                                </div>
                                <div className="slider-box">
                                    <label>מה אתם מעדיפים?</label> מקמו את עצמכם על הסליידר <svg id="question-mark" width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={hover_show} onMouseOut={hover_hide}>
                                            <circle cx="9.5" cy="9.5" r="8.94118" stroke="#376720" stroke-width="1.11765" />
                                            <path d="M8.80919 12.0566C8.72481 9.49701 11.4813 9.62359 11.4813 7.79531C11.4813 6.93743 10.8765 6.45926 9.8499 6.45926C8.82325 6.45926 8.09194 7.04994 7.78254 8.3016L6.33398 7.95001C6.68558 6.07955 8.06381 5.03883 10.0327 5.06696C11.9454 5.09509 13.0845 5.96704 13.0845 7.61248C13.0845 10.158 10.2296 10.2002 10.2859 12.0566H8.80919ZM9.55456 15.1365C8.97795 15.1365 8.52791 14.6865 8.52791 14.124C8.52791 13.5473 8.97795 13.0973 9.55456 13.0973C10.1171 13.0973 10.5812 13.5473 10.5812 14.124C10.5812 14.6865 10.1171 15.1365 9.55456 15.1365Z" fill="#376720" />
                                        </svg>
                                    <div id="hover">
                                        ככל שמתקרבים לגיל הפרישה בדרך כלל לא רוצים לקחת סיכון
                                        <br/>
                                        עם השקעות בשוק המשתנה מאחר והזמן דוחק. 
                                        <br/>
                                        בגיל צעיר, סכום החיסכון נמוך ועדיין יש זמן עד הפנסיה, 
                                        <br/>
                                        מה שמאפשר להתמודד עם הפסדים פוטנציאלים בהשקעות
                                        <br/>
                                        בטוחות פחות אבל הן יכולות להניב יותר כסף.
                                    </div>
                                    <div className="slider-container">
                                        <div className="item">בטחון</div>
                                        <input type="range" min="0" max="1" step="0.05" onChange={change_value} id="route_slider" className="range-input" value={route} style={{background:`linear-gradient(to left, ${seconderyColor} ${route*100}%, ${primaryColor} ${route*100}%)`}}/>
                                        <div className="item">תשואה</div>
                                        <div className="slider-background">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-concepts">
                                    <div className="slider-box">
                                        <label>ביטחון -</label> מסלול בעל סיכון נמוך להפסד הכסף, אבל עם רווח קטן יותר.
                                    </div>
                                    <div className="slider-box">
                                        <label>תשואה (רווח) -</label> מסלול בעל סיכון גבוה להפסד הכסף, אבל עם רווח גדול יותר.
                                    </div>

                                </div>
                                <button className="continue" onClick={handleNextTab}>
                                    <svg width="87" height="32" viewBox="0 0 87 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="87" height="32" rx="6.46902" fill="#265B1F"/>
                                        <path d="M24.3964 12.7098H26.9802C29.7574 12.7098 30.8489 13.8981 30.8489 16.8826V23.3074H29.2462V16.8826C29.2462 14.8929 28.5415 14.0777 26.8697 14.0777H24.3964V12.7098ZM40.6499 12.7098H42.2527V16.3851C42.2527 19.3834 40.4427 21.1658 37.4029 21.1658C34.377 21.1658 32.567 19.3834 32.567 16.3851V12.7098H34.1698V16.4404C34.1698 18.5268 35.3995 19.7979 37.4029 19.7979C39.4202 19.7979 40.6499 18.5268 40.6499 16.4404V12.7098ZM38.2043 12.7098V17.4076L36.6015 17.7392V12.7098H38.2043ZM49.0849 12.5855C51.337 12.5855 52.8431 14.3264 52.8431 16.8135C52.8431 20.2815 50.7567 21.8843 47.565 20.6822L47.9242 19.3834C50.1626 20.2815 51.337 19.2453 51.337 16.8135C51.337 15.0725 50.4113 13.9948 49.154 13.9948C47.8137 13.9948 47.0676 15.2383 46.5564 17.1313L45.5201 21H43.9312L44.9951 17.1451L43.489 12.7098H45.0641L45.8517 15.1969C46.432 13.6632 47.5512 12.5855 49.0849 12.5855ZM54.4131 12.7098H57.9226C60.7412 12.7098 62.0262 14.0225 62.0262 16.9516V21H60.4234V16.9516C60.4234 14.9344 59.6773 14.0777 57.9226 14.0777H54.4131V12.7098ZM54.5098 16.62L56.1126 16.399V21H54.5098V16.62Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}{!isTab2Open && (
                    <div className="tab-closed" onClick={handleToggleTab}>
                        <div className="icon">
                            <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.6049" cy="14.5292" r="12.1791" fill="#9EDA82"/>
                                <path d="M22.4185 7.93596V7.18785L30.7746 2.3501L39.3322 7.18785V7.93596L35.1289 10.3299L30.9257 12.7238L22.4185 7.93596Z" fill="#265B1F"/>
                                <path d="M22.4185 7.18785V7.93596L30.9257 12.7238M22.4185 7.18785L30.9257 12.0256M22.4185 7.18785L30.7746 2.3501L39.3322 7.18785M30.9257 12.7238V12.0256M30.9257 12.7238L35.1289 10.3299L39.3322 7.93596V7.18785M30.9257 12.0256L39.3322 7.18785" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M12.2671 14.0248V13.2767L20.6233 8.43896L29.1808 13.2767V14.0248L24.9775 16.4188L20.7743 18.8127L12.2671 14.0248Z" fill="#265B1F"/>
                                <path d="M12.2671 13.2767V14.0248L20.7743 18.8127M12.2671 13.2767L20.7743 18.1145M12.2671 13.2767L20.6233 8.43896L29.1808 13.2767M20.7743 18.8127V18.1145M20.7743 18.8127L24.9775 16.4188L29.1808 14.0248V13.2767M20.7743 18.1145L29.1808 13.2767" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M1.67041 20.3393V19.5912L10.0266 14.7534L18.5841 19.5912V20.3393L14.3809 22.7332L10.1776 25.1272L1.67041 20.3393Z" fill="#265B1F"/>
                                <path d="M1.67041 19.5912V20.3393L10.1776 25.1272M1.67041 19.5912L10.1776 24.4289M1.67041 19.5912L10.0266 14.7534L18.5841 19.5912M10.1776 25.1272V24.4289M10.1776 25.1272L14.3809 22.7332L18.5841 20.3393V19.5912M10.1776 24.4289L18.5841 19.5912" stroke="#265B1F" stroke-width="0.451032"/>
                                <path d="M2.86227 33.6268H8.36141V33.7788L5.26642 41.917H3.56694V41.8479L6.2336 34.9947H1.25951V32.2451H2.86227V33.6268ZM11.4222 33.6268V41.917H9.81942V33.6268H11.4222ZM14.6904 33.6268H20.1895V33.7788L17.0945 41.917H15.3951V41.8479L18.0617 34.9947H13.0876V32.2451H14.6904V33.6268ZM25.449 33.6268C28.0466 33.6268 29.4974 35.0914 29.4974 37.7028C29.4974 40.3971 27.9637 42.0828 25.449 42.0828C22.9205 42.0828 21.3868 40.3971 21.3868 37.7028V33.6268H25.449ZM25.449 40.7149C26.9965 40.7149 27.8946 39.5405 27.8946 37.7028C27.8946 36.0033 27.0656 34.9947 25.449 34.9947H22.9896V37.7028C22.9896 39.5405 23.8877 40.7149 25.449 40.7149ZM35.9047 33.5025C38.1569 33.5025 39.6629 35.2434 39.6629 37.7305C39.6629 41.1985 37.5765 42.8013 34.3848 41.5992L34.7441 40.3004C36.9824 41.1985 38.1569 40.1622 38.1569 37.7305C38.1569 35.9895 37.2311 34.9118 35.9738 34.9118C34.6335 34.9118 33.8874 36.1553 33.3762 38.0483L32.3399 41.917H30.751L31.8149 38.0621L30.3088 33.6268H31.884L32.6715 36.1139C33.2518 34.5802 34.371 33.5025 35.9047 33.5025Z" fill="#265B1F"/>
                            </svg>
                        </div>
                        <div className="header">
                            <h3>איפה הכסף שלי?</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}