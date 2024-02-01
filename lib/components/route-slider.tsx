'use client';

export default function RouteSlider() {
    function display_total(){
        var output = document.getElementById("output");
        var slider = (document.getElementById("slider") as HTMLInputElement);
        if (output){
            output.innerHTML = slider?.value;
        }
        
    }
    return (
        <div>
            <input type="range" min="0" max="1" step="0.05" onChange={display_total} id= "slider"/>
        </div>
    )
}
