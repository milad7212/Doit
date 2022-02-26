import { create } from "apisauce";

const apiClient = create({
    // baseURL: "http://192.168.1.53:9000/api",
    baseURL: "https://nakhll.com/api/v1",
});

export default apiClient;