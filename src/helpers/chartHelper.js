/* This is a helper to drawcharts and all HighChart related functionality.
** In case we update our charting library this will be single changing point.
 */

export default {
	drawChart: function (containerId, config, data) {
		config.series = data;
		Highcharts.chart(containerId, config);
	}
}