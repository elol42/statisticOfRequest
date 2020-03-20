import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import './pieChart.css'


export class PieChart extends Component {
    componentDidMount() {
    //   let chart = am4core.create("chartdiv", am4charts.XYChart);
      const chart = am4core.create("chartdiv", am4charts.PieChart);
  
      chart.dataSource.url = "http://localhost:8080/total";

      
      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "name";

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