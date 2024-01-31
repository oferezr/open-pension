'use client';
import {saving_by_by_sliders} from '@/lib/utils/client';

export default function RouteSlider() {
    return (
        <div>
            <input type="range" min="0.1" max="1" step="0.05" id= "slider"/>
        </div>
    )
}
