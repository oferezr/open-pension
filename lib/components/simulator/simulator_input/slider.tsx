'use client';

export default function Slider(props: any) {
    const [slider_val, setSlider] = props.function;
    const title = props.title;
    const left = props.left;
    const right = props.right;

    function change_value() {
        var slider = (document.getElementById(title+"_slider") as HTMLInputElement);
        setSlider(slider?.value);
    }
    return (
        <div>
            <h3>{title} Slider</h3>
            <div className="slider-container">

                <div className="item">{left}</div>
                <div className="item">
                    <input type="range" min="0" max="1" step="0.05" onChange={change_value} id={title+"_slider"} />
                </div>
                <div className="item">{right}</div>
            </div>
        </div>
    )
}
