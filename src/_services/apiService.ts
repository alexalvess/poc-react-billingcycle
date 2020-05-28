import axios from "axios";

import Settings from "../_utils/settings";

export default class ApiService {
    public static get = (suffix: string)  => axios.get(`${Settings.API}${suffix}`);

    public static post = (suffix: string, obj: any) => axios.post(`${Settings.API}${suffix}`, obj);

    public static put = (suffix: string, obj: any) => axios.put(`${Settings.API}${suffix}`, obj);
    
    public static delete = (suffix: string) => axios.delete(`${Settings.API}${suffix}`);
}