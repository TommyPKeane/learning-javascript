/**
 * d3 and Plotly Configuration Module for ES6-style Imports and Setup
 *
 * References:
 * - https://www.npmjs.com/package/d3
 * - https://www.npmjs.com/package/plotly.js
 */
import * from "./lib/plotly.2.18.1.min.js";
debugger;

// Load in the trace types for pie, and choropleth
Plotly.register(
    [
        require("plotly.js/lib/bar"),
        require("plotly.js/lib/choropleth"),
        require("plotly.js/lib/pie"),
    ],
);

export { d3, Plotly };
