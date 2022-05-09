import axios from 'axios'

const baseURL = 'http://localhost:3001/api/v1'

const setAxiosInstance = (token) => {
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${token}` },
    })

    return axiosInstance
}

export default setAxiosInstance
