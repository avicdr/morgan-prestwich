import React from "react";
import Chart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.data || [],
      options: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
            },
          },
        ],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        labels: props.labels || [],
        colors: props.colors || [],
        stroke: {
          show: false,
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
              },
            },
            customScale: 1,
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.data !== this.props.data ||
      prevProps.labels !== this.props.labels ||
      prevProps.colors !== this.props.colors
    ) {
      this.setState({
        series: this.props.data || [],
        options: {
          ...this.state.options,
          labels: this.props.labels || [],
          colors: this.props.colors || [],
        },
      });
    }
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default PieChart;
