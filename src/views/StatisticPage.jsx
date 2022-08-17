import { Component } from "react"
import { StatChart } from "../cmps/StatChart.jsx"

import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { bitCoinService } from "../services/BitcoinService.js"
Chart.register(CategoryScale)

export class StatisticPage extends Component {
  state = {
    priceMarketData: null,
    avgTransactionData: null,
  }

  componentDidMount() {
    this.loadPriceData()
    this.loadTransactionAvg()
  }
  componentWillUnmount() {}
  async loadPriceData() {
    const priceMarketData = await bitCoinService.getMarketPrice('5year')
    this.setState({ priceMarketData }, () => {
      // console.log(this.state.priceMarketData)
    })
  }

  async loadTransactionAvg() {
    const avgTransactionData = await bitCoinService.getConfirmedTransactions()
    this.setState({ avgTransactionData }, () => {
      // console.log(this.state.avgTransactionData)
    })
  }

  render() {
    const { priceMarketData, avgTransactionData } = this.state
    if (!priceMarketData || !avgTransactionData) return <div>Loading...</div>
    return (
      <section className='stat-page container margin'>
        <StatChart info={priceMarketData} />
        <StatChart info={avgTransactionData} />
      </section>
    )
  }
}
