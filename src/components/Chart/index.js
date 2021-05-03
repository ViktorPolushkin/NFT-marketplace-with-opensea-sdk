import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

// const chartConfigs = {
//   type: 'line',
//   width: 600,
//   height: 400,
//   dataFormat: 'json',
//   dataSource: {
//     /* see data tab */
//   },
// }

const Chart = ({ chartConfigs, ...otherProps }) => {
  return <ReactFC {...chartConfigs} {...otherProps} />
}

export default Chart
