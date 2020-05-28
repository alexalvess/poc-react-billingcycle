import  React from "react";
import { ContentHeaderModel } from "../../../_model/properties/contentHeaderModel";

export default (props: ContentHeaderModel) => (
    <section className="content-header">
        <h1>{props.title}</h1> <small>{props.small}</small>
    </section>
);