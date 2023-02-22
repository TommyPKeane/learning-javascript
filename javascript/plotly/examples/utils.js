/**
 * Utility Methods for Local Examples
 *
 * There are some common functionalities that are truly common enough that we
 * can make our example code easier to follow by just reusing these utility
 * functions, objects, and classes.
 */

/**
 * [extractColumnFromCsv description]
 * @param  {[type]} data       [description]
 * @param  {[type]} columnName [description]
 * @return {[type]}            [description]
 */
export const extractColumnFromCsv = function hstExtractColumnFromCsv(data, columnName) {
  return data.map((row) => row[columnName]);
}

export const plotlyTableValuesFromCsv = function hstPlotlyTableValuesFromCsv(data, indices) {
  console.log(data);
  let tableData = [];
  if (indices) {
    tableData.push(indices);
  } else {
    tableData.push([...Array(data.length).keys()]);
  }
  for (const row of data) {
    tableData.push(Object.values(row));
  }
  console.log(tableData);
  return tableData;
}


/**
 * Given a Plotly Callback, ingest the given CSV File and pass the data to the
 * Callback function to generate an SVG node to add to the DOM
 * @async
 *
 * References:
 * - https://github.com/d3/d3/blob/main/CHANGES.md#changes-in-d3-50
 *
 * @param  {[type]} csvUrl       [description]
 * @param  {[type]} dataCallback [description]
 * @return {[type]}              [description]
 */
export const updatePlotFromCsv = async function hstUpdatePlotFromCsv(csvUrl, dataCallback) {
  const data = await d3.csv(csvUrl);
  return dataCallback(data);
}

/**
 * [showPlotlyVersions description]
 * @return {[type]} [description]
 */
export const showPlotlyVersions = function hstShowPlotlyVersions() {
  document.getElementById("value-version-d3js").innerHTML = `v${d3.version}`;
  document.getElementById("value-version-plotlyjs").innerHTML = `v${Plotly.version}`;
  return;
}
