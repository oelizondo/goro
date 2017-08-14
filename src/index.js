import getLocation from './services/location_service'
import { getCurrencyName, getCurrentExchange } from './services/currency_service'

export default async function Goro (baseCurrencyCode, currencyResidenceElement) {
  const convertiblePrices = document.getElementsByClassName(currencyResidenceElement)
  const keys = Object.keys(convertiblePrices)
  let value = null

  const country = await getLocation()
  const currencyCode = await getCurrencyName(country)
  const exchangeRate = await getCurrentExchange(baseCurrencyCode, currencyCode)

  keys.map((key) => {
    value = convertiblePrices[key].innerHTML
    convertiblePrices[key].innerHTML = value * exchangeRate
  })
}
