import axios from 'axios';

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
};

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID a9b4360b6eb4e9a19fb25cf2bb43f0f5d6e4dfc873e111c1335dc37179c3fd02`
    }
})


const request = async (method, url, data) => {
    try {
        let axiosConfig = {
            url,
            method,
            data,
        };

        if(method === FetchConsts.GET) {
            axiosConfig.method = FetchConsts.GET;
            axiosConfig.params = data;
        }
        else {
            axiosConfig.data = data;
        }

        console.log("@@ [request] ", axiosConfig);

        const result = await axiosInstance(axiosConfig);

        console.log("@@ [response] ", result);

        return result;
    }
    catch (e) {
        console.log("@@ e", e);
    }
}

const FetchHelper =  {
    fetchJsonGet: (url, params) => request(FetchConsts.GET, url, params),

    fetchJsonPost: (url, data) => request(FetchConsts.POST, url, data),

    fetchJsonUpdate: (url, data) => request(FetchConsts.PUT, url, data),

    fetchJsonDelete: (url, data) => request(FetchConsts.DELETE, url, data),
};

export default FetchHelper;
