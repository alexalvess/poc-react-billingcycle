export default class ActionModel {
    constructor(type: string, payload: any) {
        this.type = type;
        this.payload = payload;
    }

    type: string;
    payload: any;
}
