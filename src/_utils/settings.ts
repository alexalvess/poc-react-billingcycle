export default {
    API: "https://localhost:44359/api/",
    ACTIONS_TYPE: {
        GET_SUMMARY: "BILLING_SUMMARY_FETCHED",
        SELECT_TAB: "TAB_SELECTED",
        SHOW_TAB: "TAB_SHOWED",
        BILLING_CYCLE_LIST: "BILLING_CYCLES_FETCHED",
        BILLING_CYCLE_CREATE: "BILLING_CYCLES_CREATED"
    },
    ROUTERS_NAME: {
        DASH_BOARD: "/",
        BILLING_CYCLES: "/billingCycles"
    },
    FORMS: {
        BILLING_CYCLE_CREATE: "billingCycleForm"
    }
};
