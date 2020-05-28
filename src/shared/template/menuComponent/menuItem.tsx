import React from "react";
import { Link } from "react-router-dom";

import { MenuItemModel } from "../../../_model/properties/menuItemModel";

export default (props: MenuItemModel) => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
);