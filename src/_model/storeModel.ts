import DashboardModel from "./dashboardModel";

export interface StoreModel {
    summary: DashboardModel;
    selected: string;
    visible: {},
    list: any[]
}