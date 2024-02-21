'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

<div className="icon">
    <svg width="154" height="103" viewBox="0 0 154 103" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_709_5818)">
    <path d="M54.5 35.2825V19.7128L63.8996 14.1353L73.7467 27.891V46.2089L54.5 35.2825Z" fill="#265B1F"/>
    <path d="M65.1539 13.3153L87.9884 0.884033L98.6386 12.8942L74.2764 26.8341L65.1539 13.3153Z" fill="#265B1F"/>
    <path d="M74.8287 27.7539L99.1809 13.8423L99.2538 31.5467L74.8287 46.2085V27.7539Z" fill="#265B1F"/>
    <path d="M64.6919 13.6062L74.1945 27.5998" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
    <path d="M74.2764 27.0955V46.2082" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
    <path d="M98.911 13.3687L74.3519 27.3933" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
    <path d="M59.3522 38.0372L66.0901 41.8629V30.3832L59.3522 26.4126V38.0372Z" fill="#9ACE7D"/>
    <path d="M54.5 19.7122L64.2569 13.9031L73.7467 27.8903" fill="#265B1F"/>
    </g>
    <path d="M45.557 60.4219H48.4585V65.8105C48.4585 70.453 45.7228 73.1266 40.9974 73.1266C36.2927 73.1266 33.557 70.453 33.557 65.8105V60.4219H36.4585V65.8934C36.4585 68.9194 38.1373 70.6396 40.9974 70.6396C43.8575 70.6396 45.557 68.9194 45.557 65.8934V60.4219ZM42.4482 60.4219V67.3857L39.5466 67.966V60.4219H42.4482ZM50.4438 60.4219H62.05V62.8883C60.2055 62.8883 59.3765 63.966 59.3765 66.08V72.8572H56.4749V66.1836C56.4749 64.5463 56.993 63.5308 57.8221 62.8883H50.4438V60.4219ZM80.5498 70.3909H82.1249V72.8572H70.1871V70.3909H77.6482V66.5152C77.6482 64.1525 76.5705 62.6396 74.4358 62.6396C73.0886 62.6396 71.8659 63.137 70.8089 63.7173L69.8555 61.5618C71.4721 60.6292 73.1923 60.1732 74.8918 60.1732C78.871 60.1732 80.5498 62.3701 80.5498 66.308V70.3909ZM91.3464 60.2561C94.1236 60.2561 96.1339 62.1214 96.1339 66.2458C96.1339 70.5359 93.8956 73.0644 89.8542 73.0644C85.8334 73.0644 83.4086 70.5359 83.4086 66.2458V60.4219H86.3101V66.2458C86.3101 68.9815 87.5951 70.5981 89.8542 70.5981C92.1339 70.5981 93.2946 68.9815 93.2946 66.2458C93.2946 64.1732 92.5692 62.7225 90.994 62.7225C90.1443 62.7225 89.7091 62.909 89.0873 63.1991L88.3619 61.023C89.1495 60.5877 90.1236 60.2561 91.3464 60.2561ZM98.412 60.4219H101.314V67.4479L98.412 67.9038V60.4219ZM111.75 60.2354C115.211 60.2354 117.491 62.8468 117.491 66.5774C117.491 71.8002 114.299 74.1836 109.553 72.3805L110.195 70.0178C113.242 71.3028 114.776 69.9349 114.776 66.5774C114.776 64.194 113.532 62.7846 111.874 62.7846C110.195 62.7846 109.138 64.2147 108.33 67.1784L106.796 72.8572H103.936L105.532 67.137L103.252 60.4219H106.092L107.086 63.6758C107.998 61.5411 109.656 60.2354 111.75 60.2354Z" fill="#1A330E"/>
    <path d="M3.48577 85.9763H10.636V86.1473L6.54795 96.8572H5.00909L8.69303 87.2199H3.48577V85.9763ZM12.2344 96.9504C11.6282 96.9504 11.1619 96.4686 11.1619 95.8779C11.1619 95.2717 11.6282 94.7898 12.2344 94.7898C12.8251 94.7898 13.307 95.2717 13.307 95.8779C13.307 96.4686 12.8251 96.9504 12.2344 96.9504ZM14.7236 89.3805C15.1122 86.738 16.7598 85.8209 18.6718 85.8209C20.9101 85.8209 22.2935 87.0489 22.2935 88.9919C22.2935 90.3753 21.4075 91.6188 19.3868 93.7173L17.4438 95.6137H22.4334V96.8572H14.7702V96.624L17.879 93.2976C20.0863 91.0437 20.8013 90.1422 20.8013 88.9763C20.8013 87.8727 20.0396 87.1111 18.6562 87.1111C17.4127 87.1111 16.3712 87.795 16.1536 89.5981L14.7236 89.3805ZM26.6323 92.3183C24.9225 92.3183 23.85 91.0437 23.85 89.1007C23.85 87.1577 24.9225 85.8831 26.6323 85.8831C28.3266 85.8831 29.3992 87.1577 29.3992 89.1007C29.3992 91.0437 28.3266 92.3183 26.6323 92.3183ZM30.3785 89.6914L33.0676 85.9763H34.451V86.0541L31.622 89.8002H30.3785V89.6914ZM26.6323 91.4012C27.7204 91.4012 28.3577 90.4997 28.3577 89.1007C28.3577 87.6862 27.7204 86.7846 26.6323 86.7846C25.5443 86.7846 24.8914 87.6862 24.8914 89.1007C24.8914 90.4997 25.5443 91.4012 26.6323 91.4012ZM32.5702 96.966C30.8448 96.966 29.7722 95.6758 29.7722 93.7484C29.7722 91.8054 30.8448 90.5152 32.5702 90.5152C34.2645 90.5152 35.337 91.8054 35.337 93.7484C35.337 95.6758 34.2645 96.966 32.5702 96.966ZM32.5702 96.0489C33.6427 96.0489 34.2955 95.1318 34.2955 93.7484C34.2955 92.3339 33.6427 91.4168 32.5702 91.4168C31.4821 91.4168 30.8137 92.3339 30.8137 93.7484C30.8137 95.1318 31.4821 96.0489 32.5702 96.0489ZM28.8862 93.1422L26.1971 96.8572H24.8137V96.7795L27.6582 93.0333H28.8862V93.1422ZM46.8739 87.5308C49.936 87.5308 51.2417 88.8675 51.2417 92.0074V96.8572H49.7806V92.0074C49.7806 89.8002 48.8946 88.7743 46.8428 88.7743H44.5578V94.7432C44.5578 96.251 43.7495 96.9504 42.5682 96.9504C42.0241 96.9504 41.278 96.8416 40.8428 96.6862L41.0449 95.5359C41.3557 95.6447 41.6822 95.7069 42.1174 95.7069C42.8324 95.7069 43.1122 95.2872 43.1122 94.339V88.7743H41.7754V87.5308H46.8739ZM59.8561 87.5308H61.3172V90.5774C61.3172 94.7743 59.6851 97.2458 52.9079 97.5411L52.7991 96.3442C53.7473 96.282 54.5867 96.1732 55.3017 96.0489L53.11 87.5308H54.6177L56.7006 95.7069C59.11 94.9297 59.8561 93.4375 59.8561 90.5774V87.5308ZM68.5322 93.1577L71.1902 96.7173V96.8572H63.1539V95.6137H68.7964L62.7187 87.5774V87.5308H64.3508L67.8016 92.1629C68.9829 91.5877 69.6358 90.1266 69.5425 87.5308H70.957C71.0503 90.6396 70.1798 92.4116 68.5322 93.1577ZM74.8041 87.5308V96.8572H73.343V87.5308H74.8041ZM82.871 87.3909C85.3735 87.3909 87.0368 89.3494 87.0368 92.1473C87.0368 96.0489 84.7051 97.852 81.0989 96.4997L81.4254 95.3183C84.1767 96.3909 85.6533 95.1007 85.6533 92.1473C85.6533 90.0333 84.5031 88.681 82.9331 88.681C81.2077 88.681 80.3373 90.3753 79.7777 92.4271L78.5808 96.8572H77.1352L78.3321 92.4893L76.6533 87.5308H78.0989L79.1093 90.6862C79.7311 88.852 80.9746 87.3909 82.871 87.3909ZM94.4374 87.3909C96.9399 87.3909 98.6032 89.3494 98.6032 92.1473C98.6032 96.0489 96.2716 97.852 92.6653 96.4997L92.9918 95.3183C95.7431 96.3909 97.2197 95.1007 97.2197 92.1473C97.2197 90.0333 96.0695 88.681 94.4995 88.681C92.7741 88.681 91.9037 90.3753 91.3441 92.4271L90.1472 96.8572H88.7016L89.8985 92.4893L88.2197 87.5308H89.6653L90.6757 90.6862C91.2975 88.852 92.541 87.3909 94.4374 87.3909ZM105.273 87.5308H109.283C112.33 87.5308 113.729 88.9919 113.729 92.194V96.8572H112.268V92.194C112.268 89.8157 111.351 88.7743 109.283 88.7743H105.273V87.5308ZM105.382 91.8831L106.843 91.681V96.8572H105.382V91.8831ZM122.19 93.7328L124.646 96.795V96.8572H123.013L118.801 91.6033C117.573 92.2872 116.967 93.7017 117.044 96.8572H115.583C115.506 93.1266 116.361 91.4945 118.024 90.6551L115.568 87.5929V87.5308H117.2L121.412 92.7691C122.64 92.0852 123.231 90.6706 123.169 87.5308H124.63C124.708 91.2458 123.853 92.8934 122.19 93.7328ZM128.312 87.5308V96.8572H126.851V87.5308H128.312ZM139.767 87.5308H141.229V91.7587C141.229 95.023 139.208 97.0437 135.912 97.0437C132.617 97.0437 130.596 95.023 130.596 91.7587V87.5308H132.058V91.7898C132.058 94.2458 133.55 95.8002 135.912 95.8002C138.275 95.8002 139.767 94.2458 139.767 91.7898V87.5308ZM136.643 87.5308V92.8779L135.182 93.1888V87.5308H136.643ZM148.458 87.5308C151.52 87.5308 152.826 88.8675 152.826 92.0074V96.8572H151.365V92.0074C151.365 89.8002 150.479 88.7743 148.427 88.7743H146.142V94.7432C146.142 96.251 145.333 96.9504 144.152 96.9504C143.608 96.9504 142.862 96.8416 142.427 96.6862L142.629 95.5359C142.94 95.6447 143.266 95.7069 143.701 95.7069C144.416 95.7069 144.696 95.2872 144.696 94.339V88.7743H143.359V87.5308H148.458Z" fill="black"/>
    <defs>
    <clipPath id="clip0_709_5818">
    <rect width="48.8571" height="50.1429" fill="white" transform="translate(50)"/>
    </clipPath>
    </defs>
    </svg>
</div>

export default function FundInput() {
    return (
        <div className="simultor-input">
            <div className="icon">
                    <svg width="80" height="63" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="41.9219" cy="28.3281" rx="17.9219" ry="9.82812" fill="#9EDA82"/>
                <path d="M28.0244 25.4308V13.8945H28.6102V25.1153L32.7703 27.2725V27.9484L28.0244 25.4308Z" fill="#376720" stroke="#376720" stroke-width="0.317268"/>
                <path d="M42.2181 33.6321L35.4136 29.4415V28.7655L41.7224 32.7308V20.1131L35.4136 9.56823L35.9093 9.29785L42.2181 19.9328V33.6321Z" fill="#376720" stroke="#376720" stroke-width="0.317268"/>
                <path d="M61.194 22.6813V13.9391V9.34259L42.2674 20.0226V33.6317L61.194 22.6813Z" fill="#376720"/>
                <path d="M46.9973 20.0233L46.4565 19.7529V27.9545L46.9973 28.2699V20.0233Z" fill="#376720"/>
                <path d="M52.6745 16.7342L52.1338 16.4639V24.6654L52.6745 24.9808V16.7342Z" fill="#376720"/>
                <path d="M51.729 17.2305L51.2333 16.915L46.4565 19.709L46.9973 20.0244L51.729 17.2305Z" fill="#376720"/>
                <path d="M57.4062 13.9395L56.9105 13.624L52.1338 16.418L52.6745 16.7334L57.4062 13.9395Z" fill="#376720"/>
                <path d="M51.8179 25.4771L47.0412 28.271L46.9961 20.0244L51.8179 17.2305V25.4771Z" fill="#376720"/>
                <path d="M57.4977 22.1871L52.721 24.981L52.6759 16.7344L57.4977 13.9405V22.1871Z" fill="#376720"/>
                <path d="M50.6906 18.4453L47.5361 20.2929V22.9066L50.6906 21.0139V18.4453Z" fill="#376720"/>
                <path d="M56.3678 15.1562L53.2134 17.0038V19.6175L56.3678 17.7249V15.1562Z" fill="#376720"/>
                <path d="M50.6906 22.2773L47.5361 24.1249V26.6936L50.6906 24.891V22.2773Z" fill="#376720"/>
                <path d="M56.3678 18.9863L53.2134 20.8339V23.4025L56.3678 21.6V18.9863Z" fill="#376720"/>
                <path d="M51.2317 18.0859L50.6909 18.4014V21.0151L51.2317 21.3305V18.0859Z" fill="#376720"/>
                <path d="M56.9089 14.7949L56.3682 15.1104V17.724L56.9089 18.0395V14.7949Z" fill="#376720"/>
                <path d="M51.2316 21.9608L50.6909 22.2763V24.8449L51.2316 25.1603V21.9608Z" fill="#376720"/>
                <path d="M56.9089 18.6719L56.3682 18.9873V21.5559L56.9089 21.8714V18.6719Z" fill="#376720"/>
                <path d="M47.536 23.4931V22.9073L50.6904 21.0146L51.2312 21.3301L47.536 23.4931Z" fill="#376720"/>
                <path d="M53.2134 20.2039V19.6181L56.3678 17.7254L56.9086 18.0408L53.2134 20.2039Z" fill="#376720"/>
                <path d="M47.536 27.3684V26.7826L50.6904 24.8899L51.2312 25.2053L47.536 27.3684Z" fill="#376720"/>
                <path d="M53.2134 24.0791V23.4933L56.3678 21.6006L56.9086 21.9161L53.2134 24.0791Z" fill="#376720"/>
                <path d="M35.9107 9.29785L28.1147 13.8493H28.7006L36.136 9.6133L35.9107 9.29785Z" fill="#376720" stroke="#376720" stroke-width="0.317268"/>
                <path d="M53.5336 0.375L61.2394 9.29755L60.6987 9.56793L53.3083 1.14108L35.6434 9.83831L35.373 9.61299L53.5336 0.375Z" fill="#376720" stroke="#376720" stroke-width="0.317268"/>
                <path d="M42.5 20.2344L36 9.34375L53.4844 0.578125L61 9.82812L42.5 20.2344Z" fill="#376720"/>
                <path d="M61 8.84375L42.5 19.8438" stroke="#9EDA82"/>
                <path d="M28.5 25.3438L31.5 26.8438L42 32.8438V19.8438L35 10.3438L28.5 14.3438V25.3438Z" fill="#376720" stroke="#376720"/>
                <path d="M36.994 21.8795L31.9019 18.9053V28.5939L36.994 31.523V21.8795Z" fill="#9EDA82"/>
                <path d="M35 9.34375L42.5 19.8438V33.8438" stroke="#9EDA82"/>
                <path d="M25.8394 43.6373C29.38 43.6373 30.8653 45.1054 30.8653 48.6632V54H28.8618V48.6632C28.8618 46.4007 27.9637 45.3472 25.8048 45.3472H23.6459V51.5475C23.6459 53.3092 22.6442 54.1036 21.2971 54.1036C20.658 54.1036 19.7427 53.9827 19.2418 53.7927L19.5181 52.2211C19.8463 52.3247 20.1917 52.4111 20.658 52.4111C21.3834 52.4111 21.6598 51.9793 21.6598 50.9775V45.3472H20.2435V43.6373H25.8394ZM35.4365 43.6373V54H33.4331V43.6373H35.4365ZM37.6393 54V52.2902H40.299V47.2297C40.299 45.9344 39.9536 45.3472 38.9 45.3472H38.0019V43.6373H39.5045C41.508 43.6373 42.3025 44.6563 42.3025 46.6943V54H37.6393ZM52.8254 48.6459V54H50.891V48.7323C50.891 46.3316 49.682 45.1226 47.7131 45.1226C46.556 45.1226 45.5715 45.5026 44.6389 45.9862L43.9653 44.5699C45.3815 43.7755 46.7287 43.4991 48.0413 43.4991C50.8047 43.4991 52.8254 45.0535 52.8254 48.6459ZM55.3367 43.6373H64.9912V49.5959C64.9912 53.0501 63.4023 54.1209 61.2779 54.1209C60.5007 54.1209 59.8617 54.0345 59.1881 53.8273L59.4127 52.1693C59.9135 52.3247 60.4835 52.4111 61.0016 52.4111C62.4006 52.4111 63.0569 51.7375 63.0569 49.4231V45.3472H55.3367V43.6373ZM57.3919 48.0069V56.8843H55.4576V48.2487L57.3919 48.0069Z" fill="#376720"/>
                </svg>  
        </div>   
            <h3><strong>3. מי מנהל את הכסף שלי?</strong></h3>
            <div>
                <p>
                    את החיסכון הפנסיוני מנהלים עבורנו הגופים המוסדיים, קרנות הפנסייה,
                    <br/> 
                    ובתמורה הם גובים מאיתנו דמי ניהול. הם משקיעים את הכסף עבורנו
                    <br/>
                    בשוק ההון ובדרכים נוספות כדי להשיג רווחים שיגדילו את החיסכון שלנו.
                </p>
                <p>
                    ההחלטה איפה תנוהל הפנסיה היא אחת ההחלטות החשובות שנעשה
                    <br/>
                    במישור הכלכלי והיא משפיעה על גובה הקצבה שנקבל ביום בו נפרוש.
                </p>
                <b>בחר קרן פניסה: </b>
                
        <div className="container">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          scrollbar={{ enabled: false }}
          pagination
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
        
            <SwiperSlide key = 'one'>
                <div className="icon">
                    <svg width="154" height="103" viewBox="0 0 154 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_709_5818)">
                    <path d="M54.5 35.2825V19.7128L63.8996 14.1353L73.7467 27.891V46.2089L54.5 35.2825Z" fill="#265B1F"/>
                    <path d="M65.1539 13.3153L87.9884 0.884033L98.6386 12.8942L74.2764 26.8341L65.1539 13.3153Z" fill="#265B1F"/>
                    <path d="M74.8287 27.7539L99.1809 13.8423L99.2538 31.5467L74.8287 46.2085V27.7539Z" fill="#265B1F"/>
                    <path d="M64.6919 13.6062L74.1945 27.5998" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                    <path d="M74.2764 27.0955V46.2082" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                    <path d="M98.911 13.3687L74.3519 27.3933" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                    <path d="M59.3522 38.0372L66.0901 41.8629V30.3832L59.3522 26.4126V38.0372Z" fill="#9ACE7D"/>
                    <path d="M54.5 19.7122L64.2569 13.9031L73.7467 27.8903" fill="#265B1F"/>
                    </g>
                    <path d="M45.557 60.4219H48.4585V65.8105C48.4585 70.453 45.7228 73.1266 40.9974 73.1266C36.2927 73.1266 33.557 70.453 33.557 65.8105V60.4219H36.4585V65.8934C36.4585 68.9194 38.1373 70.6396 40.9974 70.6396C43.8575 70.6396 45.557 68.9194 45.557 65.8934V60.4219ZM42.4482 60.4219V67.3857L39.5466 67.966V60.4219H42.4482ZM50.4438 60.4219H62.05V62.8883C60.2055 62.8883 59.3765 63.966 59.3765 66.08V72.8572H56.4749V66.1836C56.4749 64.5463 56.993 63.5308 57.8221 62.8883H50.4438V60.4219ZM80.5498 70.3909H82.1249V72.8572H70.1871V70.3909H77.6482V66.5152C77.6482 64.1525 76.5705 62.6396 74.4358 62.6396C73.0886 62.6396 71.8659 63.137 70.8089 63.7173L69.8555 61.5618C71.4721 60.6292 73.1923 60.1732 74.8918 60.1732C78.871 60.1732 80.5498 62.3701 80.5498 66.308V70.3909ZM91.3464 60.2561C94.1236 60.2561 96.1339 62.1214 96.1339 66.2458C96.1339 70.5359 93.8956 73.0644 89.8542 73.0644C85.8334 73.0644 83.4086 70.5359 83.4086 66.2458V60.4219H86.3101V66.2458C86.3101 68.9815 87.5951 70.5981 89.8542 70.5981C92.1339 70.5981 93.2946 68.9815 93.2946 66.2458C93.2946 64.1732 92.5692 62.7225 90.994 62.7225C90.1443 62.7225 89.7091 62.909 89.0873 63.1991L88.3619 61.023C89.1495 60.5877 90.1236 60.2561 91.3464 60.2561ZM98.412 60.4219H101.314V67.4479L98.412 67.9038V60.4219ZM111.75 60.2354C115.211 60.2354 117.491 62.8468 117.491 66.5774C117.491 71.8002 114.299 74.1836 109.553 72.3805L110.195 70.0178C113.242 71.3028 114.776 69.9349 114.776 66.5774C114.776 64.194 113.532 62.7846 111.874 62.7846C110.195 62.7846 109.138 64.2147 108.33 67.1784L106.796 72.8572H103.936L105.532 67.137L103.252 60.4219H106.092L107.086 63.6758C107.998 61.5411 109.656 60.2354 111.75 60.2354Z" fill="#1A330E"/>
                    <path d="M3.48577 85.9763H10.636V86.1473L6.54795 96.8572H5.00909L8.69303 87.2199H3.48577V85.9763ZM12.2344 96.9504C11.6282 96.9504 11.1619 96.4686 11.1619 95.8779C11.1619 95.2717 11.6282 94.7898 12.2344 94.7898C12.8251 94.7898 13.307 95.2717 13.307 95.8779C13.307 96.4686 12.8251 96.9504 12.2344 96.9504ZM14.7236 89.3805C15.1122 86.738 16.7598 85.8209 18.6718 85.8209C20.9101 85.8209 22.2935 87.0489 22.2935 88.9919C22.2935 90.3753 21.4075 91.6188 19.3868 93.7173L17.4438 95.6137H22.4334V96.8572H14.7702V96.624L17.879 93.2976C20.0863 91.0437 20.8013 90.1422 20.8013 88.9763C20.8013 87.8727 20.0396 87.1111 18.6562 87.1111C17.4127 87.1111 16.3712 87.795 16.1536 89.5981L14.7236 89.3805ZM26.6323 92.3183C24.9225 92.3183 23.85 91.0437 23.85 89.1007C23.85 87.1577 24.9225 85.8831 26.6323 85.8831C28.3266 85.8831 29.3992 87.1577 29.3992 89.1007C29.3992 91.0437 28.3266 92.3183 26.6323 92.3183ZM30.3785 89.6914L33.0676 85.9763H34.451V86.0541L31.622 89.8002H30.3785V89.6914ZM26.6323 91.4012C27.7204 91.4012 28.3577 90.4997 28.3577 89.1007C28.3577 87.6862 27.7204 86.7846 26.6323 86.7846C25.5443 86.7846 24.8914 87.6862 24.8914 89.1007C24.8914 90.4997 25.5443 91.4012 26.6323 91.4012ZM32.5702 96.966C30.8448 96.966 29.7722 95.6758 29.7722 93.7484C29.7722 91.8054 30.8448 90.5152 32.5702 90.5152C34.2645 90.5152 35.337 91.8054 35.337 93.7484C35.337 95.6758 34.2645 96.966 32.5702 96.966ZM32.5702 96.0489C33.6427 96.0489 34.2955 95.1318 34.2955 93.7484C34.2955 92.3339 33.6427 91.4168 32.5702 91.4168C31.4821 91.4168 30.8137 92.3339 30.8137 93.7484C30.8137 95.1318 31.4821 96.0489 32.5702 96.0489ZM28.8862 93.1422L26.1971 96.8572H24.8137V96.7795L27.6582 93.0333H28.8862V93.1422ZM46.8739 87.5308C49.936 87.5308 51.2417 88.8675 51.2417 92.0074V96.8572H49.7806V92.0074C49.7806 89.8002 48.8946 88.7743 46.8428 88.7743H44.5578V94.7432C44.5578 96.251 43.7495 96.9504 42.5682 96.9504C42.0241 96.9504 41.278 96.8416 40.8428 96.6862L41.0449 95.5359C41.3557 95.6447 41.6822 95.7069 42.1174 95.7069C42.8324 95.7069 43.1122 95.2872 43.1122 94.339V88.7743H41.7754V87.5308H46.8739ZM59.8561 87.5308H61.3172V90.5774C61.3172 94.7743 59.6851 97.2458 52.9079 97.5411L52.7991 96.3442C53.7473 96.282 54.5867 96.1732 55.3017 96.0489L53.11 87.5308H54.6177L56.7006 95.7069C59.11 94.9297 59.8561 93.4375 59.8561 90.5774V87.5308ZM68.5322 93.1577L71.1902 96.7173V96.8572H63.1539V95.6137H68.7964L62.7187 87.5774V87.5308H64.3508L67.8016 92.1629C68.9829 91.5877 69.6358 90.1266 69.5425 87.5308H70.957C71.0503 90.6396 70.1798 92.4116 68.5322 93.1577ZM74.8041 87.5308V96.8572H73.343V87.5308H74.8041ZM82.871 87.3909C85.3735 87.3909 87.0368 89.3494 87.0368 92.1473C87.0368 96.0489 84.7051 97.852 81.0989 96.4997L81.4254 95.3183C84.1767 96.3909 85.6533 95.1007 85.6533 92.1473C85.6533 90.0333 84.5031 88.681 82.9331 88.681C81.2077 88.681 80.3373 90.3753 79.7777 92.4271L78.5808 96.8572H77.1352L78.3321 92.4893L76.6533 87.5308H78.0989L79.1093 90.6862C79.7311 88.852 80.9746 87.3909 82.871 87.3909ZM94.4374 87.3909C96.9399 87.3909 98.6032 89.3494 98.6032 92.1473C98.6032 96.0489 96.2716 97.852 92.6653 96.4997L92.9918 95.3183C95.7431 96.3909 97.2197 95.1007 97.2197 92.1473C97.2197 90.0333 96.0695 88.681 94.4995 88.681C92.7741 88.681 91.9037 90.3753 91.3441 92.4271L90.1472 96.8572H88.7016L89.8985 92.4893L88.2197 87.5308H89.6653L90.6757 90.6862C91.2975 88.852 92.541 87.3909 94.4374 87.3909ZM105.273 87.5308H109.283C112.33 87.5308 113.729 88.9919 113.729 92.194V96.8572H112.268V92.194C112.268 89.8157 111.351 88.7743 109.283 88.7743H105.273V87.5308ZM105.382 91.8831L106.843 91.681V96.8572H105.382V91.8831ZM122.19 93.7328L124.646 96.795V96.8572H123.013L118.801 91.6033C117.573 92.2872 116.967 93.7017 117.044 96.8572H115.583C115.506 93.1266 116.361 91.4945 118.024 90.6551L115.568 87.5929V87.5308H117.2L121.412 92.7691C122.64 92.0852 123.231 90.6706 123.169 87.5308H124.63C124.708 91.2458 123.853 92.8934 122.19 93.7328ZM128.312 87.5308V96.8572H126.851V87.5308H128.312ZM139.767 87.5308H141.229V91.7587C141.229 95.023 139.208 97.0437 135.912 97.0437C132.617 97.0437 130.596 95.023 130.596 91.7587V87.5308H132.058V91.7898C132.058 94.2458 133.55 95.8002 135.912 95.8002C138.275 95.8002 139.767 94.2458 139.767 91.7898V87.5308ZM136.643 87.5308V92.8779L135.182 93.1888V87.5308H136.643ZM148.458 87.5308C151.52 87.5308 152.826 88.8675 152.826 92.0074V96.8572H151.365V92.0074C151.365 89.8002 150.479 88.7743 148.427 88.7743H146.142V94.7432C146.142 96.251 145.333 96.9504 144.152 96.9504C143.608 96.9504 142.862 96.8416 142.427 96.6862L142.629 95.5359C142.94 95.6447 143.266 95.7069 143.701 95.7069C144.416 95.7069 144.696 95.2872 144.696 94.339V88.7743H143.359V87.5308H148.458Z" fill="black"/>
                    <defs>
                    <clipPath id="clip0_709_5818">
                    <rect width="48.8571" height="50.1429" fill="white" transform="translate(50)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide key = 'one'>
                            <svg width="154" height="102" viewBox="0 0 154 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_709_6244)">
                <path d="M54.5 35.2825V19.7128L63.8996 14.1353L73.7467 27.891V46.2089L54.5 35.2825Z" fill="#265B1F"/>
                <path d="M65.1539 13.3153L87.9884 0.884033L98.6386 12.8942L74.2764 26.8341L65.1539 13.3153Z" fill="#265B1F"/>
                <path d="M74.8288 27.7539L99.181 13.8423L99.2539 31.5467L74.8288 46.2085V27.7539Z" fill="#265B1F"/>
                <path d="M64.6918 13.6062L74.1944 27.5998" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M74.2764 27.0955V46.2082" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M98.9111 13.3687L74.352 27.3933" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M59.3522 38.0372L66.0901 41.8629V30.3832L59.3522 26.4126V38.0372Z" fill="#2D296B"/>
                <path d="M54.5 19.7122L64.2569 13.9031L73.7467 27.8903" fill="#265B1F"/>
                </g>
                <path d="M51.7306 58.4219H59.6269V58.6914L55.1295 70.8572H52.0415V70.7536L55.7927 60.8883H48.829V56.3494H51.7306V58.4219ZM60.9516 58.4219H72.5578V60.8883C70.7133 60.8883 69.8843 61.966 69.8843 64.08V70.8572H66.9827V64.1836C66.9827 62.5463 67.5008 61.5308 68.3299 60.8883H60.9516V58.4219ZM76.3806 58.4219C78.9506 58.4219 80.2148 59.5826 80.2148 61.9867V70.8572H77.9972L77.562 68.5567L77.4791 68.5359C76.8366 70.1732 75.6967 70.8572 74.2874 70.8572H73.3962V68.1214H74.2874C76.3806 68.1214 77.4169 66.8572 77.4169 65.0955V62.5877C77.4169 61.4271 76.9402 60.8883 75.821 60.8883H74.5982V58.4219H76.3806ZM90.359 58.2354C93.8201 58.2354 96.0999 60.8468 96.0999 64.5774C96.0999 69.8002 92.9082 72.1836 88.1621 70.3805L88.8046 68.0178C91.8512 69.3028 93.3849 67.9349 93.3849 64.5774C93.3849 62.194 92.1414 60.7846 90.4833 60.7846C88.8046 60.7846 87.7476 62.2147 86.9393 65.1784L85.4056 70.8572H82.5455L84.1414 65.137L81.8616 58.4219H84.7009L85.6958 61.6758C86.6077 59.5411 88.2657 58.2354 90.359 58.2354Z" fill="#265B1F"/>
                <ellipse cx="112" cy="64.2144" rx="7" ry="7.5" fill="#2D296B"/>
                <path d="M3.48577 84.9763H10.636V85.1473L6.54795 95.8572H5.00909L8.69303 86.2199H3.48577V84.9763ZM12.2344 95.9504C11.6282 95.9504 11.1619 95.4686 11.1619 94.8779C11.1619 94.2717 11.6282 93.7898 12.2344 93.7898C12.8251 93.7898 13.307 94.2717 13.307 94.8779C13.307 95.4686 12.8251 95.9504 12.2344 95.9504ZM14.7236 88.3805C15.1122 85.738 16.7598 84.8209 18.6718 84.8209C20.9101 84.8209 22.2935 86.0489 22.2935 87.9919C22.2935 89.3753 21.4075 90.6188 19.3868 92.7173L17.4438 94.6137H22.4334V95.8572H14.7702V95.624L17.879 92.2976C20.0863 90.0437 20.8013 89.1422 20.8013 87.9763C20.8013 86.8727 20.0396 86.1111 18.6562 86.1111C17.4127 86.1111 16.3712 86.795 16.1536 88.5981L14.7236 88.3805ZM26.6323 91.3183C24.9225 91.3183 23.85 90.0437 23.85 88.1007C23.85 86.1577 24.9225 84.8831 26.6323 84.8831C28.3266 84.8831 29.3992 86.1577 29.3992 88.1007C29.3992 90.0437 28.3266 91.3183 26.6323 91.3183ZM30.3785 88.6914L33.0676 84.9763H34.451V85.0541L31.622 88.8002H30.3785V88.6914ZM26.6323 90.4012C27.7204 90.4012 28.3577 89.4997 28.3577 88.1007C28.3577 86.6862 27.7204 85.7846 26.6323 85.7846C25.5443 85.7846 24.8914 86.6862 24.8914 88.1007C24.8914 89.4997 25.5443 90.4012 26.6323 90.4012ZM32.5702 95.966C30.8448 95.966 29.7722 94.6758 29.7722 92.7484C29.7722 90.8054 30.8448 89.5152 32.5702 89.5152C34.2645 89.5152 35.337 90.8054 35.337 92.7484C35.337 94.6758 34.2645 95.966 32.5702 95.966ZM32.5702 95.0489C33.6427 95.0489 34.2955 94.1318 34.2955 92.7484C34.2955 91.3339 33.6427 90.4168 32.5702 90.4168C31.4821 90.4168 30.8137 91.3339 30.8137 92.7484C30.8137 94.1318 31.4821 95.0489 32.5702 95.0489ZM28.8862 92.1422L26.1971 95.8572H24.8137V95.7795L27.6582 92.0333H28.8862V92.1422ZM46.8739 86.5308C49.936 86.5308 51.2417 87.8675 51.2417 91.0074V95.8572H49.7806V91.0074C49.7806 88.8002 48.8946 87.7743 46.8428 87.7743H44.5578V93.7432C44.5578 95.251 43.7495 95.9504 42.5682 95.9504C42.0241 95.9504 41.278 95.8416 40.8428 95.6862L41.0449 94.5359C41.3557 94.6447 41.6822 94.7069 42.1174 94.7069C42.8324 94.7069 43.1122 94.2872 43.1122 93.339V87.7743H41.7754V86.5308H46.8739ZM59.8561 86.5308H61.3172V89.5774C61.3172 93.7743 59.6851 96.2458 52.9079 96.5411L52.7991 95.3442C53.7473 95.282 54.5867 95.1732 55.3017 95.0489L53.11 86.5308H54.6177L56.7006 94.7069C59.11 93.9297 59.8561 92.4375 59.8561 89.5774V86.5308ZM68.5322 92.1577L71.1902 95.7173V95.8572H63.1539V94.6137H68.7964L62.7187 86.5774V86.5308H64.3508L67.8016 91.1629C68.9829 90.5877 69.6358 89.1266 69.5425 86.5308H70.957C71.0503 89.6396 70.1798 91.4116 68.5322 92.1577ZM74.8041 86.5308V95.8572H73.343V86.5308H74.8041ZM82.871 86.3909C85.3735 86.3909 87.0368 88.3494 87.0368 91.1473C87.0368 95.0489 84.7051 96.852 81.0989 95.4997L81.4254 94.3183C84.1767 95.3909 85.6533 94.1007 85.6533 91.1473C85.6533 89.0333 84.5031 87.681 82.9331 87.681C81.2077 87.681 80.3373 89.3753 79.7777 91.4271L78.5808 95.8572H77.1352L78.3321 91.4893L76.6533 86.5308H78.0989L79.1093 89.6862C79.7311 87.852 80.9746 86.3909 82.871 86.3909ZM94.4374 86.3909C96.9399 86.3909 98.6032 88.3494 98.6032 91.1473C98.6032 95.0489 96.2716 96.852 92.6653 95.4997L92.9918 94.3183C95.7431 95.3909 97.2197 94.1007 97.2197 91.1473C97.2197 89.0333 96.0695 87.681 94.4995 87.681C92.7741 87.681 91.9037 89.3753 91.3441 91.4271L90.1472 95.8572H88.7016L89.8985 91.4893L88.2197 86.5308H89.6653L90.6757 89.6862C91.2975 87.852 92.541 86.3909 94.4374 86.3909ZM105.273 86.5308H109.283C112.33 86.5308 113.729 87.9919 113.729 91.194V95.8572H112.268V91.194C112.268 88.8157 111.351 87.7743 109.283 87.7743H105.273V86.5308ZM105.382 90.8831L106.843 90.681V95.8572H105.382V90.8831ZM122.19 92.7328L124.646 95.795V95.8572H123.013L118.801 90.6033C117.573 91.2872 116.967 92.7017 117.044 95.8572H115.583C115.506 92.1266 116.361 90.4945 118.024 89.6551L115.568 86.5929V86.5308H117.2L121.412 91.7691C122.64 91.0852 123.231 89.6706 123.169 86.5308H124.63C124.708 90.2458 123.853 91.8934 122.19 92.7328ZM128.312 86.5308V95.8572H126.851V86.5308H128.312ZM139.767 86.5308H141.229V90.7587C141.229 94.023 139.208 96.0437 135.912 96.0437C132.617 96.0437 130.596 94.023 130.596 90.7587V86.5308H132.058V90.7898C132.058 93.2458 133.55 94.8002 135.912 94.8002C138.275 94.8002 139.767 93.2458 139.767 90.7898V86.5308ZM136.643 86.5308V91.8779L135.182 92.1888V86.5308H136.643ZM148.458 86.5308C151.52 86.5308 152.826 87.8675 152.826 91.0074V95.8572H151.365V91.0074C151.365 88.8002 150.479 87.7743 148.427 87.7743H146.142V93.7432C146.142 95.251 145.333 95.9504 144.152 95.9504C143.608 95.9504 142.862 95.8416 142.427 95.6862L142.629 94.5359C142.94 94.6447 143.266 94.7069 143.701 94.7069C144.416 94.7069 144.696 94.2872 144.696 93.339V87.7743H143.359V86.5308H148.458Z" fill="black"/>
                <defs>
                <clipPath id="clip0_709_6244">
                <rect width="48.8571" height="50.1429" fill="white" transform="translate(50)"/>
                </clipPath>
                </defs>
                </svg>

            </SwiperSlide>
            <SwiperSlide key = 'one'>
                            <svg width="158" height="102" viewBox="0 0 158 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_709_6222)">
                <path d="M54.5 35.2825V19.7128L63.8996 14.1353L73.7467 27.891V46.2089L54.5 35.2825Z" fill="#265B1F"/>
                <path d="M65.1539 13.3153L87.9884 0.884033L98.6386 12.8942L74.2764 26.8341L65.1539 13.3153Z" fill="#265B1F"/>
                <path d="M74.8288 27.7539L99.181 13.8423L99.2539 31.5467L74.8288 46.2085V27.7539Z" fill="#265B1F"/>
                <path d="M64.6918 13.6062L74.1944 27.5998" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M74.2764 27.0955V46.2082" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M98.9111 13.3687L74.352 27.3933" stroke="#9ACE7D" stroke-width="1.09382" stroke-miterlimit="10"/>
                <path d="M59.3522 38.0372L66.0901 41.8629V30.3832L59.3522 26.4126V38.0372Z" fill="#EF8812"/>
                <path d="M54.5 19.7122L64.2569 13.9031L73.7467 27.8903" fill="#265B1F"/>
                </g>
                <path d="M55.2124 58.4219C59.2124 58.4219 61.3886 60.5567 61.3886 64.5359C61.3886 68.6188 59.0466 71.1059 55.2124 71.1059C51.3575 71.1059 49.057 68.6188 49.057 64.5359V58.4219H55.2124ZM55.2124 68.6396C57.285 68.6396 58.487 67.0644 58.487 64.5359C58.487 62.2147 57.4301 60.8883 55.2124 60.8883H51.9585V64.5359C51.9585 67.0644 53.1192 68.6396 55.2124 68.6396ZM63.5133 58.4219H75.2646V65.5308C75.2646 69.8002 73.192 71.0023 70.7257 71.0023C69.7931 71.0023 69.0262 70.8986 68.2179 70.6499L68.5495 68.2458C69.1091 68.4116 69.7102 68.5359 70.3112 68.5359C71.7827 68.5359 72.4666 67.8934 72.4666 65.2613V60.8883H63.5133V58.4219ZM66.4356 63.6447V74.1525H63.6169V63.9971L66.4356 63.6447ZM78.0995 58.4219H81.0011V65.4479L78.0995 65.9038V58.4219ZM83.0342 70.8572V68.3909H85.8943V62.8572C85.8943 61.4686 85.542 60.8883 84.4228 60.8883H83.428V58.4219H85.314C87.801 58.4219 88.7959 59.6033 88.7959 62.0696V70.8572H83.0342ZM96.5295 58.194C100.675 58.194 102.975 60.7432 102.975 64.5359C102.975 68.4738 100.612 71.0852 96.1357 71.0852C94.5813 71.0852 92.9854 70.8572 91.4932 70.2147L92.2186 67.9763C93.4414 68.453 94.7471 68.6603 96.0942 68.6603C98.602 68.6603 100.074 67.0023 100.074 64.5359C100.074 62.2354 98.7264 60.6188 96.5295 60.6188C94.8093 60.6188 93.7937 61.3857 93.7937 62.5877C93.7937 63.7484 94.7885 64.4323 96.4258 64.3287L96.3429 66.567C93.0269 66.8157 90.8922 65.0333 90.8922 62.5877C90.8922 59.6447 93.3585 58.194 96.5295 58.194ZM105.255 58.4219H110.437C114.831 58.4219 116.82 60.4116 116.82 64.9504V70.8572H113.919V64.9504C113.919 62.0903 112.903 60.8883 110.437 60.8883H105.255V58.4219ZM105.359 64.3494L108.261 63.9556V70.8572H105.359V64.3494Z" fill="#265B1F"/>
                <ellipse cx="133" cy="64.2144" rx="7" ry="7.5" fill="#EE8811"/>
                <path d="M3.48577 84.9763H10.636V85.1473L6.54795 95.8572H5.00909L8.69303 86.2199H3.48577V84.9763ZM12.2344 95.9504C11.6282 95.9504 11.1619 95.4686 11.1619 94.8779C11.1619 94.2717 11.6282 93.7898 12.2344 93.7898C12.8251 93.7898 13.307 94.2717 13.307 94.8779C13.307 95.4686 12.8251 95.9504 12.2344 95.9504ZM14.7236 88.3805C15.1122 85.738 16.7598 84.8209 18.6718 84.8209C20.9101 84.8209 22.2935 86.0489 22.2935 87.9919C22.2935 89.3753 21.4075 90.6188 19.3868 92.7173L17.4438 94.6137H22.4334V95.8572H14.7702V95.624L17.879 92.2976C20.0863 90.0437 20.8013 89.1422 20.8013 87.9763C20.8013 86.8727 20.0396 86.1111 18.6562 86.1111C17.4127 86.1111 16.3712 86.795 16.1536 88.5981L14.7236 88.3805ZM26.6323 91.3183C24.9225 91.3183 23.85 90.0437 23.85 88.1007C23.85 86.1577 24.9225 84.8831 26.6323 84.8831C28.3266 84.8831 29.3992 86.1577 29.3992 88.1007C29.3992 90.0437 28.3266 91.3183 26.6323 91.3183ZM30.3785 88.6914L33.0676 84.9763H34.451V85.0541L31.622 88.8002H30.3785V88.6914ZM26.6323 90.4012C27.7204 90.4012 28.3577 89.4997 28.3577 88.1007C28.3577 86.6862 27.7204 85.7846 26.6323 85.7846C25.5443 85.7846 24.8914 86.6862 24.8914 88.1007C24.8914 89.4997 25.5443 90.4012 26.6323 90.4012ZM32.5702 95.966C30.8448 95.966 29.7722 94.6758 29.7722 92.7484C29.7722 90.8054 30.8448 89.5152 32.5702 89.5152C34.2645 89.5152 35.337 90.8054 35.337 92.7484C35.337 94.6758 34.2645 95.966 32.5702 95.966ZM32.5702 95.0489C33.6427 95.0489 34.2955 94.1318 34.2955 92.7484C34.2955 91.3339 33.6427 90.4168 32.5702 90.4168C31.4821 90.4168 30.8137 91.3339 30.8137 92.7484C30.8137 94.1318 31.4821 95.0489 32.5702 95.0489ZM28.8862 92.1422L26.1971 95.8572H24.8137V95.7795L27.6582 92.0333H28.8862V92.1422ZM46.8739 86.5308C49.936 86.5308 51.2417 87.8675 51.2417 91.0074V95.8572H49.7806V91.0074C49.7806 88.8002 48.8946 87.7743 46.8428 87.7743H44.5578V93.7432C44.5578 95.251 43.7495 95.9504 42.5682 95.9504C42.0241 95.9504 41.278 95.8416 40.8428 95.6862L41.0449 94.5359C41.3557 94.6447 41.6822 94.7069 42.1174 94.7069C42.8324 94.7069 43.1122 94.2872 43.1122 93.339V87.7743H41.7754V86.5308H46.8739ZM59.8561 86.5308H61.3172V89.5774C61.3172 93.7743 59.6851 96.2458 52.9079 96.5411L52.7991 95.3442C53.7473 95.282 54.5867 95.1732 55.3017 95.0489L53.11 86.5308H54.6177L56.7006 94.7069C59.11 93.9297 59.8561 92.4375 59.8561 89.5774V86.5308ZM68.5322 92.1577L71.1902 95.7173V95.8572H63.1539V94.6137H68.7964L62.7187 86.5774V86.5308H64.3508L67.8016 91.1629C68.9829 90.5877 69.6358 89.1266 69.5425 86.5308H70.957C71.0503 89.6396 70.1798 91.4116 68.5322 92.1577ZM74.8041 86.5308V95.8572H73.343V86.5308H74.8041ZM82.871 86.3909C85.3735 86.3909 87.0368 88.3494 87.0368 91.1473C87.0368 95.0489 84.7051 96.852 81.0989 95.4997L81.4254 94.3183C84.1767 95.3909 85.6533 94.1007 85.6533 91.1473C85.6533 89.0333 84.5031 87.681 82.9331 87.681C81.2077 87.681 80.3373 89.3753 79.7777 91.4271L78.5808 95.8572H77.1352L78.3321 91.4893L76.6533 86.5308H78.0989L79.1093 89.6862C79.7311 87.852 80.9746 86.3909 82.871 86.3909ZM94.4374 86.3909C96.9399 86.3909 98.6032 88.3494 98.6032 91.1473C98.6032 95.0489 96.2716 96.852 92.6653 95.4997L92.9918 94.3183C95.7431 95.3909 97.2197 94.1007 97.2197 91.1473C97.2197 89.0333 96.0695 87.681 94.4995 87.681C92.7741 87.681 91.9037 89.3753 91.3441 91.4271L90.1472 95.8572H88.7016L89.8985 91.4893L88.2197 86.5308H89.6653L90.6757 89.6862C91.2975 87.852 92.541 86.3909 94.4374 86.3909ZM105.273 86.5308H109.283C112.33 86.5308 113.729 87.9919 113.729 91.194V95.8572H112.268V91.194C112.268 88.8157 111.351 87.7743 109.283 87.7743H105.273V86.5308ZM105.382 90.8831L106.843 90.681V95.8572H105.382V90.8831ZM122.19 92.7328L124.646 95.795V95.8572H123.013L118.801 90.6033C117.573 91.2872 116.967 92.7017 117.044 95.8572H115.583C115.506 92.1266 116.361 90.4945 118.024 89.6551L115.568 86.5929V86.5308H117.2L121.412 91.7691C122.64 91.0852 123.231 89.6706 123.169 86.5308H124.63C124.708 90.2458 123.853 91.8934 122.19 92.7328ZM128.312 86.5308V95.8572H126.851V86.5308H128.312ZM139.767 86.5308H141.229V90.7587C141.229 94.023 139.208 96.0437 135.912 96.0437C132.617 96.0437 130.596 94.023 130.596 90.7587V86.5308H132.058V90.7898C132.058 93.2458 133.55 94.8002 135.912 94.8002C138.275 94.8002 139.767 93.2458 139.767 90.7898V86.5308ZM136.643 86.5308V91.8779L135.182 92.1888V86.5308H136.643ZM148.458 86.5308C151.52 86.5308 152.826 87.8675 152.826 91.0074V95.8572H151.365V91.0074C151.365 88.8002 150.479 87.7743 148.427 87.7743H146.142V93.7432C146.142 95.251 145.333 95.9504 144.152 95.9504C143.608 95.9504 142.862 95.8416 142.427 95.6862L142.629 94.5359C142.94 94.6447 143.266 94.7069 143.701 94.7069C144.416 94.7069 144.696 94.2872 144.696 93.339V87.7743H143.359V86.5308H148.458Z" fill="black"/>
                <defs>
                <clipPath id="clip0_709_6222">
                <rect width="48.8571" height="50.1429" fill="white" transform="translate(50)"/>
                </clipPath>
                </defs>
                </svg>

            </SwiperSlide>
            
            
            
        </Swiper>
        
        </div>
        </div>
         </div>
    )
  }