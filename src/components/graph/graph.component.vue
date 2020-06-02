<template>
  <div>
    <div id="container" style="width: 1000px; height: 500px; margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: "graph",

  data() {
    return {};
  },

  mounted() {
    google.charts.load("current", { packages: ["corechart", "line"] });
    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();

      data.addColumn("string", "Date");
      data.addColumn("number", "Page Views");

      data.addRows([
        ["04/27/2016", 672522],
        ["04/28/2016", 700062],
        ["04/29/2016", 733293],
        ["04/30/2016", 744330],
        ["05/01/2016", 721189],
        ["05/02/2016", 732430],
        ["05/03/2016", 754441],
        ["05/04/2016", 688406],
        ["05/05/2016", 714970],
        ["05/06/2016", 788050],
        ["05/07/2016", 830397],
        ["05/08/2016", 766436],
        ["05/09/2016", 770331],
        ["05/10/2016", 813858],
        ["05/11/2016", 750419],
        ["05/12/2016", 778135],
        ["05/13/2016", 815841],
        ["05/14/2016", 901105],
        ["05/15/2016", 777439],
        ["05/16/2016", 853066],
        ["05/17/2016", 840720],
        ["05/18/2016", 933133],
        ["05/19/2016", 914542],
        ["05/20/2016", 935753],
        ["05/21/2016", 955818],
        ["05/22/2016", 599937],
        ["05/23/2016", 594761],
        ["05/24/2016", 598206],
        ["05/25/2016", 535037],
        ["05/26/2016", 536224],
        ["05/27/2016", 831113]
      ]);

      // Set chart options
      var options = {
        title: "Page Views",
        hAxis: {
          title: ""
        },
        vAxis: {
          title: ""
        },
        width: 1000,
        height: 500,
        pointsVisible: true
      };

      // Instantiate and draw the chart.
      var chart = new google.visualization.LineChart(
        document.getElementById("container")
      );
      chart.draw(data, options);
    }
    google.charts.setOnLoadCallback(drawChart);
  }
};
</script>