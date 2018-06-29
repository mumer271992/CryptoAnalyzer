import React, { PropTypes } from 'react';
import { chartType, chartTitle, chartSubTitle, chartXAxis, chartYAxis, chartLegend, chartPlotOptions } from '../config/chartsConfig';
import charthelper from '../helpers/chartHelper';

/* A presentational component which takes data list and plot a scatter chart,
** it does not know how and where to retrive data.
*/

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

const defaultProps = {
  data: []
}

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
  }

  /* Initialize Chart by providing configuration to HighChart library. */

  initChart() {
    let series = this.buildSeries([ ...this.props.data ]);
    let config = {
        chart: chartType,
        title: chartTitle,
        subtitle: chartSubTitle,
        xAxis: chartXAxis,
        yAxis: chartYAxis,
        legend: chartLegend,
        plotOptions: chartPlotOptions
    }
    charthelper.drawChart('container', config, series)
  }

  buildSeries(data) {
    let series = [{
      data: []
    }];

    data.forEach((dataitem) => {
      series[0].data.push({
        name: dataitem.name,
        volume: dataitem['24h_volume_usd'],
        marketcap: dataitem.market_cap_usd,
        pricechange: dataitem.percent_change_24h,
        color: 'rgba(223, 83, 83, .5)',
        x: parseFloat(dataitem['24h_volume_usd']),
        y: parseFloat(dataitem['market_cap_usd'])
      });
    })

    return series;
  }

  /* Component Lifecycle methods */

  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate() {
    this.initChart();
  }

  render() {
    return (
      <div className="data-chart">
        <div className="card">
          <div className="card-body">
            <div id="container" className="chart-area"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;