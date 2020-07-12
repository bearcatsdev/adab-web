import axios from 'axios'

const BASE_URL = '/api/v1'

export default {
    authenticate(username, password) {
        return axios.post(`${BASE_URL}/login`, {
            'user_email': username,
            'user_password': password
        }).then(response => {
            return response
        })
    },

    getUserProfile() {
        return axios.get(`${BASE_URL}/user/profile`,).then(response => {
            return response
        })
    },

    getUserSessions() {
        return axios.get(`${BASE_URL}/user/sessions`,).then(response => {
            return response
        })
    }
}