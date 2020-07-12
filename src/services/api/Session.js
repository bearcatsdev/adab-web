import axios from 'axios'

const BASE_URL = '/api/v1/session'

export default {
    getSessionDetails(sessionId) {
        return axios.post(`${BASE_URL}/details`, {
            'session_id': sessionId
        }).then(response => {
            return response
        })
    },
}