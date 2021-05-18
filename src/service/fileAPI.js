import axios from 'axios';

export default {
    getSystemInfo () {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:5000/systemInformation')
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    getDirInfo (value) {
        let obj = {
            mainDir: value
        }
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5000/systemInformation',obj)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}