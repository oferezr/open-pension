'use client';

export default function RouteSlider(props:any) {
    const [slider_val, setSlider] = props.function;

    function display_total(){
        var slider = (document.getElementById("y_slider") as HTMLInputElement);
        setSlider(slider?.value);
    }
    return (
        <div>
            <h3>Yearly Slider</h3>
            <div className="slider-container">

                <div className="item">Scurity</div>
                <div className="item">
                    <input type="range" min="0" max="1" step="0.05" onChange={display_total} id="y_slider" />
                </div>
                <div className="item">Yield</div>
            </div>
        </div>
    )
}
