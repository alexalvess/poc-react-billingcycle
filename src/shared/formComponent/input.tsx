import React from "react";

export default (props: any) => (
    <input
        {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
    />
);
