export function convertValues (convertiblePrices, keys) {
  let value = null
  keys.map((key) => {
    value = convertiblePrices[key].innerHTML
    convertiblePrices[key].innerHTML = value * exchangeRate
  })
}
