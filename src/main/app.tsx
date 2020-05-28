import "../shared/template/dependencies";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../shared/template/headerComponent/header";
import SideBar from "../shared/template/sideBarComponent/sideBar";
import Footer from "../shared/template/footerComponent/footer";

import Routers from "../shared/routerComponent/routers";
import Messages from "../shared/messageComponent/messages";

export default (props: any) => (
    <div className="wrapper">
        <BrowserRouter>
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Routers />
            </div>
            <Footer />
            <Messages />
        </BrowserRouter>
    </div>
);
