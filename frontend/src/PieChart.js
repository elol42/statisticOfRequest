import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { render } from 'react-dom';
import './pieChart.css'


export class PieChart extends Component {
    componentDidMount() {
    //   let chart = am4core.create("chartdiv", am4charts.XYChart);
      var chart = am4core.create("chartdiv", am4charts.PieChart);
  
      // ... chart code goes here ...
      chart.data = [{
        "event": "Google API",
        "amountOfEvent": 101.2
      }, {
        "event": "Wavenet Voice",
        "amountOfEvent": 101.2
      }, {
        "event": "Agent Transaction",
        "amountOfEvent": 101.2
      }];
      
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amountOfEvent";
      pieSeries.dataFields.category = "event";


      this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }

  render() {
    return (
      <div id="chartdiv"></div>
    );
  }
}

  export default PieChart;