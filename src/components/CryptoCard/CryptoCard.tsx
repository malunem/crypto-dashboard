import * as React from "react"
import { Grid, Card, CardContent } from "@mui/material"

type cryptoCardData = {
  symbol: string,
  image: string,
  name: string,
  current_price: number,
  price_change_percentage_1y_in_currency: number,
  baseCurrency: string
}

const CryptoCard = ( crypto: cryptoCardData ) => {

  const priceChangeColor: string = crypto.price_change_percentage_1y_in_currency >= 0 ? "text-green-800" : "text-red-800"

  return (
    <Grid item xs={1} key={crypto.symbol}>
      <Card>
        <CardContent className="bg-slate-200 relative">
          <img src={crypto.image} width="20" alt={`${crypto.name} icon`} className="inline mr-1"/>
          <span>{crypto.symbol.toUpperCase()}</span>
          <h2> {crypto.name}</h2>
          <p>{crypto.current_price} {crypto.baseCurrency.toUpperCase()}</p>
          <p className={priceChangeColor}>
            {Math.round(crypto.price_change_percentage_1y_in_currency)}%
          </p>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CryptoCard