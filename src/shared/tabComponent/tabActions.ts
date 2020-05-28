import Settings from "../../_utils/settings";

const selectTab = (tabId: string) => {
    return {
        type: Settings.ACTIONS_TYPE.SELECT_TAB,
        payload: tabId
    };
};

const showTabs = (...tabIds) => {
    const tabsToShow = {};
    tabIds.forEach(e => (tabsToShow[e] = true));

    return {
        type: Settings.ACTIONS_TYPE.SHOW_TAB,
        payload: tabsToShow
    };
};

export { selectTab, showTabs };
