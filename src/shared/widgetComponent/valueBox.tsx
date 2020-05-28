import React from "react";
import Grid from "../layoutComponent/grid";
import { ValueBoxModel } from "../../_model/properties/valueBoxModel";

export default (props: ValueBoxModel) => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>R$ {props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
);
