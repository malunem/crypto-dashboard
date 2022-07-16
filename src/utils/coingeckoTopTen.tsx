const getTopTenCryptos = async ( baseCurrency: string ) => {

  let data: []

  const result = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${baseCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1y`)

  data = await result.json()

  return data
}

export default getTopTenCryptos