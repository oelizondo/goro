import axios from 'axios'
const COUNTRY_URL = 'https://restcountries.eu/rest/v2/name/'
const EXCHANGE_URL = 'http://api.fixer.io/latest?base='

export async function getCurrencyName (countryName) {
  return new Promise ((resolve, reject) => {
    axios.get(COUNTRY_URL + countryName).then((response) => {
      resolve(response.data[0].currencies[0].code)
    }).catch((e) => reject(e))
  })
}

export async function getCurrentExchange (baseCurrencyCode, currencyCode) {
  return new Promise ((resolve, reject) => {
    axios.get(EXCHANGE_URL + baseCurrencyCode).then((response) => {
      resolve(response.data.rates[currencyCode])
    }).catch((e) => reject(e))
  })
}
