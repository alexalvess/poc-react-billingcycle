import React from "react";

export default (props) => (
    <select
        {...props.select}
        className="form-control"
        disabled={props.readOnly}
    >
        {props.children}
    </select>
);
