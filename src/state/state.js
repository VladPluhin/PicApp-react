import { createApi } from "unsplash-js";

export default class  State {
    landscape = `'landscape'`;
    createApi = createApi({
        accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw",
        headers: { 'X-Custom-Header': 'foo' }
    });

}
