import * as React from "react";
import {ISize} from "./Icon";

export function AnonIcon(size: ISize) {
    return (
        <svg width={size.Size} height={size.Size} viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="25" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0" transform="scale(0.00195312)"/>
                </pattern>
                <image id="image0" width="512" height="512" href="https://c7.uihere.com/files/196/33/78/lendup-russell-burch-ii-bancwest-investment-services-financial-advisor-payday-loan-anonymous.jpg"/>
            </defs>
        </svg>
    );
}