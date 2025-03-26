import axios from "axios";

console.log(import.meta.env)

export const cvScannerApi = axios.create({
    baseURL: import.meta.env.VITE_CV_SCANNER_API_BASE_URL
})