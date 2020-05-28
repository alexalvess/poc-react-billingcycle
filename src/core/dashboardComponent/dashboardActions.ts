import Settings from "../../_utils/settings";
import ApiService from "../../_services/apiService";
import ActionModel from "../../_model/actionModel";

export function getSummary() {
    const request = ApiService.get('BillingCycle/summary');

    return {
        type: Settings.ACTIONS_TYPE.GET_SUMMARY,
        payload: request
    };
}