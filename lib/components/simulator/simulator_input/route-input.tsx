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
                    {isTab1Open ? <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1019">
                            <circle id="Ellipse 54" cx="13.3845" cy="9.62229" r="9.37619" fill="#9EDA82"/>
                            <g id="Vector 21">
                            <path d="M16.3218 4.54642V3.97048L22.7549 0.246094L29.3429 3.97048V4.54642L26.107 6.38942L22.8711 8.23241L16.3218 4.54642Z" fill="#265B1F"/>
                            <path d="M16.3218 3.97048V4.54642L22.8711 8.23241M16.3218 3.97048L22.8711 7.69487M16.3218 3.97048L22.7549 0.246094L29.3429 3.97048M22.8711 8.23241V7.69487M22.8711 8.23241L26.107 6.38942L29.3429 4.54642V3.97048M22.8711 7.69487L29.3429 3.97048" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            <g id="Vector 58">
                            <path d="M8.50781 9.2349V8.65896L14.9409 4.93457L21.529 8.65896V9.2349L18.2931 11.0779L15.0572 12.9209L8.50781 9.2349Z" fill="#265B1F"/>
                            <path d="M8.50781 8.65896V9.2349L15.0572 12.9209M8.50781 8.65896L15.0572 12.3833M8.50781 8.65896L14.9409 4.93457L21.529 8.65896M15.0572 12.9209V12.3833M15.0572 12.9209L18.2931 11.0779L21.529 9.2349V8.65896M15.0572 12.3833L21.529 8.65896" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            <g id="Vector 59">
                            <path d="M0.349121 14.0948V13.5188L6.7822 9.79443L13.3703 13.5188V14.0948L10.1344 15.9378L6.89846 17.7808L0.349121 14.0948Z" fill="#265B1F"/>
                            <path d="M0.349121 13.5188V14.0948L6.89846 17.7808M0.349121 13.5188L6.89846 17.2432M0.349121 13.5188L6.7822 9.79443L13.3703 13.5188M6.89846 17.7808V17.2432M6.89846 17.7808L10.1344 15.9378L13.3703 14.0948V13.5188M6.89846 17.2432L13.3703 13.5188" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            </g>
                        </svg>
                        </div>
                        <div className="main-content">
                            <div className="header" onClick={handleToggleTab}>
                                <h3>איפה הכסף שלי?</h3>
                            </div>

                            <div className="intro-text">
                                <p>
                                כדי להגיע לגיל הפרישה עם כמה שיותר כסף, חשוב להשקיע את כספי החיסכון באופן חכם במסלול שתואם להעדפות שלנו.
                                </p>
                                <br/>
                                <p>
                                    <label>מה זה מסלול?</label> דרך בה הכסף שלנו יכול להרוויח לנו עוד כסף. 
                                    בעזרת בתי השקעות, החיסכון שצברנו מושקע במקומות שונים. 
                                    ההבדל העיקרי בין המסלולים הוא מידת הסיכון של הכסף שנצבר.
                                </p>
                            </div>
                            <div className="slider-box">
                                <label>מה אתם מעדיפים?</label> מקמו את עצמכם על הסליידר <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={hover_show} onMouseOut={hover_hide}>
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
                                    <input type="range" min="0" max="1" step="0.05" onChange={change_value} id="route_slider" className="range-input" />
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
                            <svg width="89" height="30" viewBox="0 0 89 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="89" height="30" rx="8" fill="#265B1F"/>
                                <path d="M30.2309 11.7824H32.1687C34.2516 11.7824 35.0703 12.6736 35.0703 14.9119V19.7306H33.8682V14.9119C33.8682 13.4197 33.3397 12.8083 32.0858 12.8083H30.2309V11.7824ZM42.421 11.7824H43.6231V14.5389C43.6231 16.7876 42.2656 18.1244 39.9858 18.1244C37.7164 18.1244 36.3588 16.7876 36.3588 14.5389V11.7824H37.5609V14.5803C37.5609 16.1451 38.4832 17.0984 39.9858 17.0984C41.4987 17.0984 42.421 16.1451 42.421 14.5803V11.7824ZM40.5868 11.7824V15.3057L39.3848 15.5544V11.7824H40.5868ZM48.7472 11.6891C50.4364 11.6891 51.5659 12.9948 51.5659 14.8601C51.5659 17.4611 50.0011 18.6632 47.6074 17.7617L47.8768 16.7876C49.5555 17.4611 50.4364 16.6839 50.4364 14.8601C50.4364 13.5544 49.7421 12.7461 48.7991 12.7461C47.7939 12.7461 47.2343 13.6788 46.8509 15.0984L46.0737 18H44.882L45.6799 15.1088L44.5504 11.7824H45.7317L46.3224 13.6477C46.7576 12.4974 47.597 11.6891 48.7472 11.6891ZM52.7434 11.7824H55.3755C57.4895 11.7824 58.4532 12.7668 58.4532 14.9637V18H57.2512V14.9637C57.2512 13.4508 56.6916 12.8083 55.3755 12.8083H52.7434V11.7824ZM52.8159 14.715L54.018 14.5492V18H52.8159V14.715Z" fill="#DAFFC9"/>
                            </svg>
                        </button>
                        </div>
                    </div>
                )}{!isTab2Open && (
                    <div className="tab-closed" onClick={handleToggleTab}>
                        <div className="icon">
                        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1019">
                            <circle id="Ellipse 54" cx="13.3845" cy="9.62229" r="9.37619" fill="#9EDA82"/>
                            <g id="Vector 21">
                            <path d="M16.3218 4.54642V3.97048L22.7549 0.246094L29.3429 3.97048V4.54642L26.107 6.38942L22.8711 8.23241L16.3218 4.54642Z" fill="#265B1F"/>
                            <path d="M16.3218 3.97048V4.54642L22.8711 8.23241M16.3218 3.97048L22.8711 7.69487M16.3218 3.97048L22.7549 0.246094L29.3429 3.97048M22.8711 8.23241V7.69487M22.8711 8.23241L26.107 6.38942L29.3429 4.54642V3.97048M22.8711 7.69487L29.3429 3.97048" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            <g id="Vector 58">
                            <path d="M8.50781 9.2349V8.65896L14.9409 4.93457L21.529 8.65896V9.2349L18.2931 11.0779L15.0572 12.9209L8.50781 9.2349Z" fill="#265B1F"/>
                            <path d="M8.50781 8.65896V9.2349L15.0572 12.9209M8.50781 8.65896L15.0572 12.3833M8.50781 8.65896L14.9409 4.93457L21.529 8.65896M15.0572 12.9209V12.3833M15.0572 12.9209L18.2931 11.0779L21.529 9.2349V8.65896M15.0572 12.3833L21.529 8.65896" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            <g id="Vector 59">
                            <path d="M0.349121 14.0948V13.5188L6.7822 9.79443L13.3703 13.5188V14.0948L10.1344 15.9378L6.89846 17.7808L0.349121 14.0948Z" fill="#265B1F"/>
                            <path d="M0.349121 13.5188V14.0948L6.89846 17.7808M0.349121 13.5188L6.89846 17.2432M0.349121 13.5188L6.7822 9.79443L13.3703 13.5188M6.89846 17.7808V17.2432M6.89846 17.7808L10.1344 15.9378L13.3703 14.0948V13.5188M6.89846 17.2432L13.3703 13.5188" stroke="#265B1F" stroke-width="0.347231"/>
                            </g>
                            </g>
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