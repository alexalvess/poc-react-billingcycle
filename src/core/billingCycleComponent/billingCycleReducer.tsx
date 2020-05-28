import ActionModel from "../../_model/actionModel";
import { StoreModel } from "../../_model/storeModel";
import Settings from "../../_utils/settings";

const INITIAL_STATE = { list: [] as any[] } as unknown as StoreModel;

export default (state: StoreModel = INITIAL_STATE, action: ActionModel) => {
    switch(action.type) {
        case Settings.ACTIONS_TYPE.BILLING_CYCLE_LIST:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}