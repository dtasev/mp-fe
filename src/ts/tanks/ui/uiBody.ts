import { Color } from "../drawing/color";
import { J2H } from "../json2html";

export class UiBody {

    readonly htmlElement: HTMLDivElement;
    constructor(htmlElement: HTMLDivElement) {
        this.htmlElement = htmlElement;
    }

    textColor(color: Color) {
        this.htmlElement.style.color = color.rgba();
    }
    textAlign(position: string = "center") {
        this.htmlElement.style.textAlign = position;
    }
    clear(): void {
        this.htmlElement.innerHTML = "";
    }
    addColumns(): [HTMLDivElement, HTMLDivElement, HTMLDivElement] {
        // these are on the side of the menu buttons, to pad it out so that it can be in the middle
        const sideDescription = {
            "div": {
                "className": "w3-col s1 m1 l2",
                // tells the browser to render a whitespace and respect the CSS styling classes
                "innerHTML": "&nbsp;"
            }
        };
        const middleDescription = {
            "div": {
                "className": "w3-col s10 m10 l8"
            }
        };
        const left = J2H.parse<HTMLDivElement>(sideDescription);
        const right = J2H.parse<HTMLDivElement>(sideDescription);
        const middle = J2H.parse<HTMLDivElement>(middleDescription);
        return [left, middle, right];
    }
}