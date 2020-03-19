import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import './pieChart.css'


export class PieChart extends Component {
    componentDidMount() {
    //   let chart = am4core.create("chartdiv", am4charts.XYChart);
      const chart = am4core.create("chartdiv", am4charts.PieChart);
  
      // ... chart code goes here ...
      chart.data = [{
        "event": "Google API",
        "amountOfEvent": 110
      }, {
        "event": "Wavenet Voice",
        "amountOfEvent": 90
      }, {
        "event": "Agent Transaction",
        "amountOfEvent": 120
      }];
      
      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amountOfEvent";
      pieSeries.dataFields.category = "event";

      const hs = pieSeries.slices.template.states.getKey("hover");
      hs.properties.scale = 1.1;
      hs.properties.fillOpacity = 0.5;

      this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }

  render() {
    return (
      <secction className="chartSection">
      <div id="chartdiv"></div>
      </secction>
    );
  }
}

  export default PieChart;