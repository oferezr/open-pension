'use client';

export default function InterestSlider(props: any) {
    const [slider_val, setSlider] = props.function;

    function display_total() {
        var slider = (document.getElementById("i_slider") as HTMLInputElement);
        setSlider(slider?.value);
    }
    return (
        <div>
            <h3>Interest Slider</h3>
            <div className="slider-container">

                <div className="item">Low Deposite interest</div>
                <div className="item">
                    <input type="range" min="0" max="1" step="0.05" onChange={display_total} id="i_slider" />
                </div>
                <div className="item">Low Saving interest</div>
            </div>
        </div>
    )
}
