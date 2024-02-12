'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function LandingInput(props: any) {
    const [numberInputAge, setNumberInputAge] = useState('');

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

        const handleButtonClick = () => {
            window.location.href = "/simulator";
          };

        
    return (
        <div className="content-box">
            <p>
                היי, הגעתם לסימולציה של פנסיה עבור שכירים. כאן נראה כמה כסף (בערך) תוכלו לקבל כשתהיו מבוגרים ותרצו לנוח.
            </p>
            <div className="retire-age">
                <p>
                    צפי לגיל פרישה:
                </p>
                <div className="binary-selector-container">

                    <label htmlFor="binarySelector"></label>
                    <label htmlFor="option1">65 (נקבה):</label>
                    <input type="radio" id="female" name="option" value="65" />
                    <label htmlFor="option1">67 (זכר):</label>
                    <input type="radio" id="male" name="option" value="67" />
                </div>
            </div>
                <div className="input-wrapper">
                <div className="cur_age">
                    <label htmlFor="numberInputAge">גיל נוכחי</label>
                    <input type="text" id="numberInputAge" name="numberInput" value={numberInputAge} onChange={handleInputChangeAge} />
                </div>

                <div className="salary">
                    <label htmlFor="numberInputSal">שכר</label>
                    <input type="text" id="numberInputSal" name="numberInput" value={numberInputSal} onChange={handleInputChangeSal} />
                </div>
            </div>
            <div className='button'>
            <button onClick={handleButtonClick} className='next-page'> </button>
            </div>
        </div>
        
    );

}
