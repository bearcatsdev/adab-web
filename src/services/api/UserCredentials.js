import axios from 'axios'

export default {
    authenticate(username, password) {
        return axios.post('/api/v1/login', {
            'user_email': username,
            'user_password': password
        }).then(response => {
            return response
        })
    }
}