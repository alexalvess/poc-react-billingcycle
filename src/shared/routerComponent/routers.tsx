import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../../core/dashboardComponent/dashboard";
import BillingCycle from "../../core/billingCycleComponent/billingCycle";

import Settings from "../../_utils/settings";

export default (props: any) => (
    <Switch>
        <Route path={Settings.ROUTERS_NAME.DASH_BOARD} exact={true} component={Dashboard} />
        <Route path={Settings.ROUTERS_NAME.BILLING_CYCLES} component={BillingCycle} />
    </Switch>
);