import React from 'react';
import Chart from 'react-apexcharts';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: '',
        data: [35, 45, 30]
      }, {
        name: '',
        data: [20, 25, 15]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['2018', '2019', '2020'],
        },
        yaxis: {},
        fill: {
          opacity: 1,
          colors: ['#000000', '#bdbbbb'] // Black and gray colors for bars
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        },
        legend: {
          show: false // Hide legend
        }
      },
    };
  }

  render() {
    return (
      <div id="chart" data-aos="zoom-in-right">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}

export default BarGraph;
