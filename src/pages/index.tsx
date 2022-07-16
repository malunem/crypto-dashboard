import * as React from "react"
import { Grid } from "@mui/material"
import { Layout } from "../components"

const Dashboard = () => {
  return (
    <Layout>
      <div id="dashboard-container" className="">
        <h1 className="text-3xl text-center py-10">
          Crypto Dashboard
        </h1>
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <h2>crypto 1</h2>
          </Grid>
          <Grid item>
            <h2>crypto 2</h2>
          </Grid>
          <Grid item>
            <h2>crypto 3</h2>
          </Grid>
          <Grid item>
            <h2>crypto 4</h2>
          </Grid>
          <Grid item>
            <h2>crypto 5</h2>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Dashboard
