import React from "react";
import { ContentModel } from "../../../_model/properties/contentModel";

const Content: React.FC<ContentModel> = props => (
    <section className="content">
        {props.children}
    </section>
);

export default Content;