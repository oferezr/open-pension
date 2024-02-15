'use client'

import { useState, ChangeEvent } from 'react';

export default function PersonalInput() {
const [numberInputAge, setNumberInputAge] = useState('');
// const navigate = useNavigate();

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
        setNumberInputAge(numericInput);
    }
    const [numberInputSal, setNumberInputSal] = useState('');

    const handleInputChangeSal = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;
        // Validate input: allow only numbers
        let numericInput = inputValue.replace(/\D/g, ''); // Remove non-numeric characters

        if (numericInput !== '') {
            let numericValue = parseInt(numericInput);
            // Ensure numeric value is within the range of 0-120
            inputValue = numericValue.toString(); // Convert back to string for input value
        }
            setNumberInputSal(numericInput);

      }

      const [isMale, SetSelectedRetirementValue] = useState<boolean | (() => boolean)>(false);

      const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        // sets isMale to true if value is equal to 67.
        SetSelectedRetirementValue(event.target.value === "67");
      };
    interface UserValDict {
        numberInputSal:  number;
        numberInputAge: number;
        isMale: boolean;
    }

    return (
      <div className="simultor-input">
        <h3>1 . היי, נעים להכיר</h3>
        <div className="input-wrapper">
          <p>
          נתחיל בכמה נתונים בסיסיים כדי שנוכל לחשב את הפנסיה העתידית שלך. בכל שדה שמנו ברירת מחדל אבל רצוי לשנות את הנתונים בהתאם למצב שלך כדי שהסימולציה תהיה מדויקת כמה שיותר.
          </p>
          <div className="cur_age">
            <label htmlFor="numberInputAge"><b>גיל נוכחי</b></label>
            <input type="text" id="numberInputAge" name="numberInput" value={numberInputAge} onChange={handleInputChangeAge} />
            <p className='subtext'>
              כדי שנדע כמה זמן יש לך לחסוך לפנסיה
              </p>
          </div>
          <div className="salary">
            <label htmlFor="numberInputSal"><b>שכר</b></label>
            <input type="text" id="numberInputSal" name="numberInput" value={numberInputSal} onChange={handleInputChangeSal} />
            <p className='subtext'>בכל חודש מופרש על ידך ועל ידי המעסיק שלך אחוז מסוים מהשכר. הפרשה זו נקראת ״הפקדה״ והיא מרכיב קריטי כדי לחשב את הפנסיה העתידית שלך.</p>
          </div>
        </div>
        <div className="retire-age">
          <b>צפי לגיל פרישה</b>
          <div className="binary-selector-container">
              <label htmlFor="binarySelector" className='radio-container'>
              <input 
                  type="radio" id="female" name="option" value="65"
                  checked={isMale === false}
                  onChange={handleRadioChange} />
                  <span className="checkmark"></span>

              <label htmlFor="option1">65 (נקבה)</label>
              </label>
              <label className='radio-container'>
              <input
                  type="radio" id="male" name="option" value="67"
                  checked={isMale === true}
                  onChange={handleRadioChange} />
                  <span className="checkmark"></span>
              <label htmlFor="option1">67 (זכר)</label>
              </label>
              <p className='subtext'>לפי החוק הישראלי נשים זכאיות לפרוש לפנסיה בגיל 65 וגברים בגיל 67.</p>
          </div>
        </div>  
      </div>
    )
  }