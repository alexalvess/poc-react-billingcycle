import React, { Component } from "react";

export default class Grid extends Component<{ cols: string }> {
    toCssClasses(numbers: string) {
        const cols: Array<string> = numbers ? numbers.split(" ") : [];
        let classes: string = "";

        cols.map((el, i) => {
            if (el) classes += `col-${["xs", "sm", "md", "lg"][i]}-${el} `;
        });

        return classes;
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || "12");

        return <div className={gridClasses}>{this.props.children}</div>;
    }
}
