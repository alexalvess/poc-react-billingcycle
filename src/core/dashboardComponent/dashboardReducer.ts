import { StoreModel } from "../../_model/storeModel";
import Settings from "../../_utils/settings";
import ActionModel from "../../_model/actionModel";

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } } as StoreModel;

export default function(
    state: StoreModel = INITIAL_STATE,
    action: ActionModel
) {
    switch (action.type) {
        case Settings.ACTIONS_TYPE.GET_SUMMARY:
            return { ...state, summary: action.payload.data };
        default:
            return state;
    }
}
