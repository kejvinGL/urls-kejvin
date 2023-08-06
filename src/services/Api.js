import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://urls-kejvin-server-f69fa1281575.herokuapp.com`

    })
}