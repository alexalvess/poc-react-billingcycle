import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashboardReducer from "../core/dashboardComponent/dashboardReducer";
import TabReducer from "../shared/tabComponent/tabReducer";
import BillingCycleReducer from "../core/billingCycleComponent/billingCycleReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer;
