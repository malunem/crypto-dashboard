import * as React from "react"
import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import SyncIcon from '@mui/icons-material/Sync';
import { Layout, CryptoCard } from "../components"
import getTopTenCryptos from "../utils/coingeckoTopTen";

type dashboardState = {
  loading: Boolean,
  cryptoData: Array<any>,
  baseCurrency: string
}

type cryptoCardData = {
  symbol: string,
  image: string,
  name: string,
  current_price: number,
  price_change_percentage_1y_in_currency: number,
  baseCurrency: string
}

const Dashboard = () => {

  const [dashboardState, setDashboardState] = useState<dashboardState>({
    loading: true,
    cryptoData: Array(10).fill(null),
    baseCurrency: 'usd'
  })

  const callCoinGeckoApi = () => {
    getTopTenCryptos(dashboardState.baseCurrency)
    .then( (result: []) => {
      setDashboardState({ 
        ...dashboardState,
        loading: false,
        cryptoData: result
      })

      console.log(result)
    })
  }

  useEffect(() => {
    callCoinGeckoApi()

    // return () => {
    // }
  }, [dashboardState.baseCurrency])

  return (
    <Layout>
      <div id="dashboard-container" className="">
        <h1 className="text-3xl text-center py-10">
          Crypto Dashboard
          <SyncIcon className="mx-1 pb-1 cursor-pointer" onClick={() => callCoinGeckoApi()} />
        </h1>
        <Grid container columns={{ xs: 1, sm: 2, md: 5 }} justifyContent="space-evenly" alignItems="center" spacing={2} className="p-4">
          { dashboardState.loading && 
            <h2>loading crypto data...</h2>
          }
          { !dashboardState.loading && dashboardState.cryptoData.map( (crypto) => {

            const cryptoData: cryptoCardData = {
              ...crypto,
              baseCurrency: dashboardState.baseCurrency
            }

            return <CryptoCard {...cryptoData} />
          })
          }
        </Grid>
      </div>
    </Layout>
  )
}

export default Dashboard
