import axiosClient from "./axiosClient";
// api/productApi.js
const ImageApi= {
    getAll:  (params) => {
        const url = '/list';
        return axiosClient.get(url, { params });
    },
}

export default ImageApi;