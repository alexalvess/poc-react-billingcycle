import Settings from "../../_utils/settings";
import ActionModel from "../../_model/actionModel";

const INITIAL_STATE = { selected: '', visible: {} };

export default (state = INITIAL_STATE, action: ActionModel) => {
    switch(action.type) {
        case Settings.ACTIONS_TYPE.SELECT_TAB:
            return { ...state, selected: action.payload };
        case Settings.ACTIONS_TYPE.SHOW_TAB:
            return { ...state, visible: action.payload };
        default:
            return state;
    }
}