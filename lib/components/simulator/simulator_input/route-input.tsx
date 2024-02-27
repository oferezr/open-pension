import { useState } from 'react';
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
        if (tab1Filled == true) {
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
                        <path d="M15.5198 14.6186C14.7205 15.7038 13.0986 15.7038 12.2993 14.6186L4.21033 3.63746C3.23758 2.3169 4.18046 0.451303 5.82062 0.451303L21.9985 0.451305C23.6387 0.451305 24.5815 2.31691 23.6088 3.63747L15.5198 14.6186Z" fill="#376720" />
                    </svg>
                        : <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.487 2.18604C11.2863 1.10093 12.9082 1.10093 13.7076 2.18604L21.7965 13.1672C22.7693 14.4878 21.8264 16.3534 20.1862 16.3534L4.00833 16.3534C2.36817 16.3534 1.4253 14.4878 2.39805 13.1672L10.487 2.18604Z" fill="#376720" />
                        </svg>
                    }
                </button>
                {isTab2Open && (
                    <div className='tab-open'>
                        <div className="icon" onClick={handleToggleTab}>
                            <svg width="52" height="56" viewBox="0 0 52 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.4822" cy="20.5076" r="15.5076" fill="#9EDA82" />
                                <path d="M28.3398 12.1124V11.1599L38.9797 5L49.8759 11.1599V12.1124L44.524 15.1606L39.172 18.2088L28.3398 12.1124Z" fill="#265B1F" />
                                <path d="M28.3398 11.1599V12.1124L39.172 18.2088M28.3398 11.1599L39.172 17.3198M28.3398 11.1599L38.9797 5L49.8759 11.1599M39.172 18.2088V17.3198M39.172 18.2088L44.524 15.1606L49.8759 12.1124V11.1599M39.172 17.3198L49.8759 11.1599" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M15.416 19.8654V18.9128L26.0559 12.7529L36.9521 18.9128V19.8654L31.6001 22.9136L26.2482 25.9617L15.416 19.8654Z" fill="#265B1F" />
                                <path d="M15.416 18.9128V19.8654L26.2482 25.9617M15.416 18.9128L26.2482 25.0727M15.416 18.9128L26.0559 12.7529L36.9521 18.9128M26.2482 25.9617V25.0727M26.2482 25.9617L31.6001 22.9136L36.9521 19.8654V18.9128M26.2482 25.0727L36.9521 18.9128" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M1.92188 27.9054V26.9528L12.5617 20.793L23.458 26.9528V27.9054L18.106 30.9536L12.754 34.0018L1.92188 27.9054Z" fill="#265B1F" />
                                <path d="M1.92188 26.9528V27.9054L12.754 34.0018M1.92188 26.9528L12.754 33.1127M1.92188 26.9528L12.5617 20.793L23.458 26.9528M12.754 34.0018V33.1127M12.754 34.0018L18.106 30.9536L23.458 27.9054V26.9528M12.754 33.1127L23.458 26.9528" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M3.17806 41.6373H10.052V41.8273L6.18324 52H4.05889V51.9136L7.39222 43.3472H1.17461V39.9102H3.17806V41.6373ZM13.8779 41.6373V52H11.8745V41.6373H13.8779ZM17.9632 41.6373H24.8371V41.8273L20.9684 52H18.844V51.9136L22.1774 43.3472H15.9598V39.9102H17.9632V41.6373ZM31.4115 41.6373C34.6585 41.6373 36.4719 43.468 36.4719 46.7323C36.4719 50.1002 34.5548 52.2073 31.4115 52.2073C28.2509 52.2073 26.3338 50.1002 26.3338 46.7323V41.6373H31.4115ZM31.4115 50.4974C33.3458 50.4974 34.4685 49.0294 34.4685 46.7323C34.4685 44.6079 33.4322 43.3472 31.4115 43.3472H28.3372V46.7323C28.3372 49.0294 29.4598 50.4974 31.4115 50.4974ZM44.4811 41.4819C47.2963 41.4819 49.1788 43.658 49.1788 46.7668C49.1788 51.1019 46.5709 53.1054 42.5813 51.6028L43.0303 49.9793C45.8282 51.1019 47.2963 49.8066 47.2963 46.7668C47.2963 44.5907 46.1391 43.2435 44.5674 43.2435C42.8921 43.2435 41.9595 44.7979 41.3205 47.1641L40.0251 52H38.0389L39.3688 47.1813L37.4863 41.6373H39.4552L40.4396 44.7461C41.165 42.829 42.564 41.4819 44.4811 41.4819Z" fill="#265B1F" />
                            </svg>

                        </div>
                        <div className="main-content">
                            <div className="header" onClick={handleToggleTab}>
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
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-concepts">
                            <div className="slider-box">
                                    <b>ביטחון -</b> מסלול בעל סיכון נמוך להפסד הכסף, אבל עם רווח קטן יותר.
                                </div>
                                <div className="slider-box">
                                    <b>תשואה (רווח) -</b> מסלול בעל סיכון גבוה להפסד הכסף, אבל עם רווח גדול יותר.
                                </div>

                            </div>

                        </div>
                    </div>
                )}{!isTab2Open && (
                    <div className="tab-closed" onClick={handleToggleTab}>
                        <div className="icon">
                            <svg width="52" height="56" viewBox="0 0 52 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.4822" cy="20.5076" r="15.5076" fill="#9EDA82" />
                                <path d="M28.3398 12.1124V11.1599L38.9797 5L49.8759 11.1599V12.1124L44.524 15.1606L39.172 18.2088L28.3398 12.1124Z" fill="#265B1F" />
                                <path d="M28.3398 11.1599V12.1124L39.172 18.2088M28.3398 11.1599L39.172 17.3198M28.3398 11.1599L38.9797 5L49.8759 11.1599M39.172 18.2088V17.3198M39.172 18.2088L44.524 15.1606L49.8759 12.1124V11.1599M39.172 17.3198L49.8759 11.1599" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M15.416 19.8654V18.9128L26.0559 12.7529L36.9521 18.9128V19.8654L31.6001 22.9136L26.2482 25.9617L15.416 19.8654Z" fill="#265B1F" />
                                <path d="M15.416 18.9128V19.8654L26.2482 25.9617M15.416 18.9128L26.2482 25.0727M15.416 18.9128L26.0559 12.7529L36.9521 18.9128M26.2482 25.9617V25.0727M26.2482 25.9617L31.6001 22.9136L36.9521 19.8654V18.9128M26.2482 25.0727L36.9521 18.9128" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M1.92188 27.9054V26.9528L12.5617 20.793L23.458 26.9528V27.9054L18.106 30.9536L12.754 34.0018L1.92188 27.9054Z" fill="#265B1F" />
                                <path d="M1.92188 26.9528V27.9054L12.754 34.0018M1.92188 26.9528L12.754 33.1127M1.92188 26.9528L12.5617 20.793L23.458 26.9528M12.754 34.0018V33.1127M12.754 34.0018L18.106 30.9536L23.458 27.9054V26.9528M12.754 33.1127L23.458 26.9528" stroke="#265B1F" stroke-width="0.574296" />
                                <path d="M3.17806 41.6373H10.052V41.8273L6.18324 52H4.05889V51.9136L7.39222 43.3472H1.17461V39.9102H3.17806V41.6373ZM13.8779 41.6373V52H11.8745V41.6373H13.8779ZM17.9632 41.6373H24.8371V41.8273L20.9684 52H18.844V51.9136L22.1774 43.3472H15.9598V39.9102H17.9632V41.6373ZM31.4115 41.6373C34.6585 41.6373 36.4719 43.468 36.4719 46.7323C36.4719 50.1002 34.5548 52.2073 31.4115 52.2073C28.2509 52.2073 26.3338 50.1002 26.3338 46.7323V41.6373H31.4115ZM31.4115 50.4974C33.3458 50.4974 34.4685 49.0294 34.4685 46.7323C34.4685 44.6079 33.4322 43.3472 31.4115 43.3472H28.3372V46.7323C28.3372 49.0294 29.4598 50.4974 31.4115 50.4974ZM44.4811 41.4819C47.2963 41.4819 49.1788 43.658 49.1788 46.7668C49.1788 51.1019 46.5709 53.1054 42.5813 51.6028L43.0303 49.9793C45.8282 51.1019 47.2963 49.8066 47.2963 46.7668C47.2963 44.5907 46.1391 43.2435 44.5674 43.2435C42.8921 43.2435 41.9595 44.7979 41.3205 47.1641L40.0251 52H38.0389L39.3688 47.1813L37.4863 41.6373H39.4552L40.4396 44.7461C41.165 42.829 42.564 41.4819 44.4811 41.4819Z" fill="#265B1F" />
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