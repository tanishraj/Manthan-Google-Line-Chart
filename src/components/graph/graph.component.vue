<template>
  <div>
    <div id="container" style="width: 1000px; height: 500px; margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: "graph",

  props: { graphData: Object },

  watch: {
    graphData: function(newValue, oldvalue) {
      if (newValue != oldvalue) {
        this.realData = newValue;
        google.charts.setOnLoadCallback(this.drawChart);
      }
    }
  },

  data() {
    return {
      realData: []
    };
  },

  methods: {
    drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();

      data.addColumn("string", "Date");
      data.addColumn("number", this.realData.lineChartTitle);

      data.addRows(this.realData.dataItems);

      // Set chart options
      var options = {
        title: this.realData.graphTitle,
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
  },

  mounted() {
    google.charts.load("current", { packages: ["corechart", "line"] });
  }
};
</script>