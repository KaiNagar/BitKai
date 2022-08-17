import React from "react"
import moment from "moment"
import { Line } from "react-chartjs-2"

import { Component } from "react"
export class StatChart extends Component {
  state = {}
  componentDidMount() {
    this.priceLabels()
  }
  componentWillUnmount() {}

  priceLabels = () => {
    let labels = []
    const data = []
    const { info } = this.props
    info.values.map((k) => {
      labels.push(moment( k.x *1000).format("D/M/YY"))
      return data.push(k.y)
      
    })
    return {
      labels,
      datasets: [
        {
          label: info.name,
          backgroundColor: "#0c6cf2",
          borderColor: "#0c6cf2",
          data,
          pointRadius: 0,
          lineTension: 0.4,
          radius: 6,
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Line data={this.priceLabels()} />
      </div>
    )
  }
}
