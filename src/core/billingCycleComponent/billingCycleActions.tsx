import ApiService from "../../_services/apiService";
import Settings from "../../_utils/settings";
import { showTabs, selectTab } from "../../shared/tabComponent/tabActions";

import { reset as resetForm, initialize } from "redux-form";

import { toastr } from "react-redux-toastr";

const INITIALIZE_FORM = {
    credits: [{}],
    debts: [{}]
};

const getList = () => {
    const request = ApiService.get("billingCycle");

    return {
        type: Settings.ACTIONS_TYPE.BILLING_CYCLE_LIST,
        payload: request,
    };
};

const create = (values) => {
    return (dispatch) => {
        ApiService.post("billingCycle", values)
            .then((result) => {
                toastr.success("Success", "Operation performed success.");

                dispatch(init());
            })
            .catch((e) => {
                toastr.error("Error", "Something was wrong.");
            });
    };
};

const showUpdate = (billingCycle) => {
    return [
        showTabs("tabUpdate"),
        selectTab("tabUpdate"),
        initialize("billingCycleForm", billingCycle),
    ];
};

const showDelete = (billingCycle) => {
    return [
        showTabs("tabDelete"),
        selectTab("tabDelete"),
        initialize("billingCycleForm", billingCycle),
    ];
};

const update = (values) => {
    return (dispatch) => {
        ApiService.put(`billingCycle/${values.id}`, values)
            .then(() => {
                toastr.success("Success", "Operation performed success.");

                dispatch(init());
            })
            .catch((e) => {
                toastr.error("Error", "Something was wrong.");
            });
    };
};

const remove = (values) => {
    return (dispatch) => {
        ApiService.delete(`billingCycle/${values.id}`)
            .then(() => {
                toastr.success("Success", "Operation performed success.");

                dispatch(init());
            })
            .catch((e) => {
                toastr.error("Error", "Something was wrong.");
            });
    };
};

const init = () => {
    return [
        showTabs("tabList", "tabCreate"),
        selectTab("tabList"),
        getList(),
        initialize(Settings.FORMS.BILLING_CYCLE_CREATE, INITIALIZE_FORM)
    ]
}

export { getList, create, showUpdate, update, init, showDelete, remove };
