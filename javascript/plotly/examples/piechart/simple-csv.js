import {
  extractColumnFromCsv,
  plotlyTableValuesFromCsv,
  updatePlotFromCsv,
} from "/examples/utils.js";


// Container Object
const examplePieCharthObj = {
  "data": {
    "url": "/data/example-simple.csv",
    "type": "csv",
  },
  "callback": function hstExamplePieChartCallback(data) {
    const pieTrace = {
      "type": "pie",
      "labels": extractColumnFromCsv(data, "B"),
      "values": extractColumnFromCsv(data, "A"),
      "customdata": extractColumnFromCsv(data, "C"),
    };
    const plotTraces = [
      pieTrace,
    ];
    const plotLayout = {
      "title": "Example Pie Chart",
    };
    Plotly.newPlot(
      "graph-container",
      plotTraces,
      plotLayout,
    );

    const tableTraces = [
      {
        "type": "table",
        "header": {
          "values": [
            [""],
            ["<b>A</b>"],
            ["<b>B</b>"],
            ["<b>C</b>"],
          ],
          "align": "center",
          "line": {"width": 1, "color": "black"},
          "fill": {"color": "grey"},
          "font": {"family": "sans-serif", "size": 12, "color": "white"},
        },
        "cells": {
          "values": plotlyTableValuesFromCsv(data),
          "align": "center",
          "line": {"color": "black", "width": 1},
          "font": {"family": "sans-serif", "size": 11, "color": "black"},
        },
      },
    ];
    const tableLayout = {
      "title": "Example Pie Chart Data",
    };

    Plotly.newPlot(
      "graph-data-table-container",
      tableTraces,
      tableLayout,
    );
  },
};


// Runtime
document.addEventListener(
  "DOMContentLoaded",
  () => {
    updatePlotFromCsv(
      examplePieCharthObj.data.url,
      examplePieCharthObj.callback,
    );
  },
);
