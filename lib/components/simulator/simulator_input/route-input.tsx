import {useState} from 'react';
export default function RouteInput(props: any) {
    const [isTabOpen, setIsTabOpen] = useState(false);
    // const currentStep = props.currentStep;

    const [route, setRoute] = props.function;
    const [tab2Clicked, setTab2Clicked] = useState(false); 
    // condition for opening tab2 for the first time
    const [tab1Filled, setTab1Filled] = props.tab1Filled;
    const [tab2Filled, setTab2Filled] = props.tab2Filled;
    // condition for closing other tabs when this opens
    const [isTab1Open, setIsTab1Open] = props.tab1Open;
    const [isTab2Open, setIsTab2Open] = props.tab2Open;
    const [isTab3Open, setIsTab3Open] = props.tab3Open;

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

    // const handleToggleTab = () => {
    //     if (currentStep == 2){
    //         setIsTabOpen(isTabOpen);
    //     }
    //     else {
    //         setIsTabOpen(false);
    //     }
        
    //     };

    const handleToggleTab = () => {
    if (tab1Filled == true){
        setIsTab2Open(!isTab2Open);
        setTab2Clicked(true); 
        setIsTab1Open(false); // close other tabs when this tab is opened
        setIsTab3Open(false); // close other tabs when this tab is opened
        }
    };


    return (
        <div className={`simulator-input ${isTab2Open ? 'tab-open' : 'tab-closed'}`} style={!tab2Clicked ? { opacity: 0.5 } : undefined}>
        <div className='tab-container'>
            <button className="arrow" onClick={handleToggleTab} disabled={!tab1Filled}>
                {isTab2Open ? <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5198 14.6186C14.7205 15.7038 13.0986 15.7038 12.2993 14.6186L4.21033 3.63746C3.23758 2.3169 4.18046 0.451303 5.82062 0.451303L21.9985 0.451305C23.6387 0.451305 24.5815 2.31691 23.6088 3.63747L15.5198 14.6186Z" fill="#376720"/>
                </svg>
                : <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.487 2.18604C11.2863 1.10093 12.9082 1.10093 13.7076 2.18604L21.7965 13.1672C22.7693 14.4878 21.8264 16.3534 20.1862 16.3534L4.00833 16.3534C2.36817 16.3534 1.4253 14.4878 2.39805 13.1672L10.487 2.18604Z" fill="#376720"/>
                </svg>            
                }
            </button>
            {isTab2Open &&(
            <div className='tab-open'>
                <div className="icon">
                    <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20.7407" cy="14.8139" r="13.6972" fill="#9EDA82" />
                        <path d="M25.0312 7.39883V6.55747L34.429 1.1167L44.0532 6.55747V7.39883L39.326 10.0912L34.5989 12.7835L25.0312 7.39883Z" fill="#376720" />
                        <path d="M25.0312 6.55747V7.39883L34.5989 12.7835M25.0312 6.55747L34.5989 11.9983M25.0312 6.55747L34.429 1.1167L44.0532 6.55747M34.5989 12.7835V11.9983M34.5989 12.7835L39.326 10.0912L44.0532 7.39883V6.55747M34.5989 11.9983L44.0532 6.55747" stroke="#376720" stroke-width="0.507253" />
                        <path d="M13.6162 14.247V13.4056L23.014 7.96484L32.6382 13.4056V14.247L27.911 16.9393L23.1838 19.6317L13.6162 14.247Z" fill="#376720" />
                        <path d="M13.6162 13.4056V14.247L23.1838 19.6317M13.6162 13.4056L23.1838 18.8464M13.6162 13.4056L23.014 7.96484L32.6382 13.4056M23.1838 19.6317V18.8464M23.1838 19.6317L27.911 16.9393L32.6382 14.247V13.4056M23.1838 18.8464L32.6382 13.4056" stroke="#376720" stroke-width="0.507253" />
                        <path d="M1.69775 21.3485V20.5072L11.0955 15.0664L20.7197 20.5072V21.3485L15.9925 24.0409L11.2654 26.7332L1.69775 21.3485Z" fill="#376720" />
                        <path d="M1.69775 20.5072V21.3485L11.2654 26.7332M1.69775 20.5072L11.2654 25.948M1.69775 20.5072L11.0955 15.0664L20.7197 20.5072M11.2654 26.7332V25.948M11.2654 26.7332L15.9926 24.0409L20.7197 21.3485V20.5072M11.2654 25.948L20.7197 20.5072" stroke="#376720" stroke-width="0.507253" />
                        <path d="M2.41028 33.8119H8.48174V33.9797L5.06464 42.9648H3.18828V42.8886L6.13248 35.3221H0.640707V32.2864H2.41028V33.8119ZM11.8611 33.8119V42.9648H10.0915V33.8119H11.8611ZM15.4694 33.8119H21.5409V33.9797L18.1238 42.9648H16.2474V42.8886L19.1916 35.3221H13.6999V32.2864H15.4694V33.8119ZM27.3477 33.8119C30.2157 33.8119 31.8174 35.4289 31.8174 38.3121C31.8174 41.2868 30.1241 43.1479 27.3477 43.1479C24.5561 43.1479 22.8628 41.2868 22.8628 38.3121V33.8119H27.3477ZM27.3477 41.6377C29.0563 41.6377 30.0479 40.341 30.0479 38.3121C30.0479 36.4357 29.1326 35.3221 27.3477 35.3221H24.6324V38.3121C24.6324 40.341 25.6239 41.6377 27.3477 41.6377ZM38.8916 33.6746C41.3782 33.6746 43.041 35.5967 43.041 38.3426C43.041 42.1716 40.7375 43.9412 37.2136 42.614L37.6102 41.18C40.0815 42.1716 41.3782 41.0275 41.3782 38.3426C41.3782 36.4205 40.3561 35.2306 38.9679 35.2306C37.4882 35.2306 36.6644 36.6035 36.1 38.6935L34.9558 42.9648H33.2015L34.3762 38.7087L32.7134 33.8119H34.4524L35.322 36.5578C35.9627 34.8645 37.1983 33.6746 38.8916 33.6746Z" fill="#376720" />
                    </svg>
                </div>
                <div className="main-content">
                    <div className="header">
                        <h3>2. איפה הכסף שלי?</h3>
                    </div>

                    <div className="intro-text">
                        <p>
                            כדי להגיע לגיל הפרישה עם כמה שיותר כסף, חשוב להשקיע את כספי החסכון באופן חכם מסלול שמתאים להעדפות שלנו.
                        </p>
                        <p>
                            <b>מה זה מסלול?</b> אופן השקעת החיסכון שלנו על די קרן הפסניה.
                            המסלול מורכב פרמטרים כמו: ביטחון ותשואה המשתנים במשקלם בין המסלולים השונים.
                        </p>
                    </div>
                    <div className="slider-box">
                        <b>מה אתם מעדיפים?</b> מקמו את עצמכם על הסליידר <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={hover_show} onMouseOut={hover_hide}>
                            <circle cx="9.5" cy="9.5" r="8.94118" stroke="#376720" stroke-width="1.11765" />
                            <path d="M8.80919 12.0566C8.72481 9.49701 11.4813 9.62359 11.4813 7.79531C11.4813 6.93743 10.8765 6.45926 9.8499 6.45926C8.82325 6.45926 8.09194 7.04994 7.78254 8.3016L6.33398 7.95001C6.68558 6.07955 8.06381 5.03883 10.0327 5.06696C11.9454 5.09509 13.0845 5.96704 13.0845 7.61248C13.0845 10.158 10.2296 10.2002 10.2859 12.0566H8.80919ZM9.55456 15.1365C8.97795 15.1365 8.52791 14.6865 8.52791 14.124C8.52791 13.5473 8.97795 13.0973 9.55456 13.0973C10.1171 13.0973 10.5812 13.5473 10.5812 14.124C10.5812 14.6865 10.1171 15.1365 9.55456 15.1365Z" fill="#376720" />
                        </svg>
                        <div id="hover">
                            ככל שמתקרבים לגיל הפרישה בדרך כלל לא רוצים לקחת סיכום עם השקעות בשור משתנה מאחר והזמן דוחק.
                            ביל צעיר, סכום החיסכון נמוך ועדיין יש זמן עד הפנסיה, מה שמאפשרל להתמודד עם הפסדים פוטנציאלים בהשקעות בטוחות פחות אבל
                            הן יכולות להניב יותר כסף.
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
                            </div>
                        </div>
                    </div>
                    <div className="slider-concepts">
                        <div className="slider-box">
                            <b>תשואה (רווח)-</b> מסלול בעל סיכון גבוה להפסד הכסף, אבל עם רווח גדול יותר.
                        </div>
                        <div className="slider-box">
                            <b>ביטחון -</b> מסלול בעל סיכון נמוך להפסד הכסף, אבל עם רווח קטן יותר.
                        </div>

                    </div>

                </div>
            </div>
            )}{!isTab2Open &&(
                <div className="tab-closed">
                    <div className="icon">
                        <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20.7407" cy="14.8139" r="13.6972" fill="#9EDA82" />
                            <path d="M25.0312 7.39883V6.55747L34.429 1.1167L44.0532 6.55747V7.39883L39.326 10.0912L34.5989 12.7835L25.0312 7.39883Z" fill="#376720" />
                            <path d="M25.0312 6.55747V7.39883L34.5989 12.7835M25.0312 6.55747L34.5989 11.9983M25.0312 6.55747L34.429 1.1167L44.0532 6.55747M34.5989 12.7835V11.9983M34.5989 12.7835L39.326 10.0912L44.0532 7.39883V6.55747M34.5989 11.9983L44.0532 6.55747" stroke="#376720" stroke-width="0.507253" />
                            <path d="M13.6162 14.247V13.4056L23.014 7.96484L32.6382 13.4056V14.247L27.911 16.9393L23.1838 19.6317L13.6162 14.247Z" fill="#376720" />
                            <path d="M13.6162 13.4056V14.247L23.1838 19.6317M13.6162 13.4056L23.1838 18.8464M13.6162 13.4056L23.014 7.96484L32.6382 13.4056M23.1838 19.6317V18.8464M23.1838 19.6317L27.911 16.9393L32.6382 14.247V13.4056M23.1838 18.8464L32.6382 13.4056" stroke="#376720" stroke-width="0.507253" />
                            <path d="M1.69775 21.3485V20.5072L11.0955 15.0664L20.7197 20.5072V21.3485L15.9925 24.0409L11.2654 26.7332L1.69775 21.3485Z" fill="#376720" />
                            <path d="M1.69775 20.5072V21.3485L11.2654 26.7332M1.69775 20.5072L11.2654 25.948M1.69775 20.5072L11.0955 15.0664L20.7197 20.5072M11.2654 26.7332V25.948M11.2654 26.7332L15.9926 24.0409L20.7197 21.3485V20.5072M11.2654 25.948L20.7197 20.5072" stroke="#376720" stroke-width="0.507253" />
                            <path d="M2.41028 33.8119H8.48174V33.9797L5.06464 42.9648H3.18828V42.8886L6.13248 35.3221H0.640707V32.2864H2.41028V33.8119ZM11.8611 33.8119V42.9648H10.0915V33.8119H11.8611ZM15.4694 33.8119H21.5409V33.9797L18.1238 42.9648H16.2474V42.8886L19.1916 35.3221H13.6999V32.2864H15.4694V33.8119ZM27.3477 33.8119C30.2157 33.8119 31.8174 35.4289 31.8174 38.3121C31.8174 41.2868 30.1241 43.1479 27.3477 43.1479C24.5561 43.1479 22.8628 41.2868 22.8628 38.3121V33.8119H27.3477ZM27.3477 41.6377C29.0563 41.6377 30.0479 40.341 30.0479 38.3121C30.0479 36.4357 29.1326 35.3221 27.3477 35.3221H24.6324V38.3121C24.6324 40.341 25.6239 41.6377 27.3477 41.6377ZM38.8916 33.6746C41.3782 33.6746 43.041 35.5967 43.041 38.3426C43.041 42.1716 40.7375 43.9412 37.2136 42.614L37.6102 41.18C40.0815 42.1716 41.3782 41.0275 41.3782 38.3426C41.3782 36.4205 40.3561 35.2306 38.9679 35.2306C37.4882 35.2306 36.6644 36.6035 36.1 38.6935L34.9558 42.9648H33.2015L34.3762 38.7087L32.7134 33.8119H34.4524L35.322 36.5578C35.9627 34.8645 37.1983 33.6746 38.8916 33.6746Z" fill="#376720" />
                        </svg>
                    </div>
                    <div className="header">
                        <h3>2. איפה הכסף שלי?</h3>
                    </div>
                </div>

                )}
                
        </div>
    </div>
    );
}