import axios from 'axios'
const URL = 'https://ipinfo.io/'

export default function getLocation () {
  return new Promise((resolve, reject) => {
    axios.get(URL).then((response) => {
      resolve(response.data.country)
    })
    .catch((e) => reject(e))
  })
}
