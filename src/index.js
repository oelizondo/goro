import getLocation from './services/location_service'
import { getCurrencyName, getCurrentExchange } from './services/currency_service'
import { convertValues } from './services/convert_values'

export default async function Goro (baseCurrencyCode, currencyResidenceElement) {
  const convertiblePrices = document.getElementsByClassName(currencyResidenceElement)
  const keys = Object.keys(convertiblePrices)

  const country = await getLocation()
  const currencyCode = await getCurrencyName(country)
  const exchangeRate = await getCurrentExchange(baseCurrencyCode, currencyCode)
  convertValues(convertiblePrices, keys)
}
