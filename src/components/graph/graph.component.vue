<template>
  <div>
    <div id="container" style="width: 1000px; height: 500px; margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: "graph",

  computed: {
    checkForGraphDataUpdate() {
      return this.$store.state.graphData;
    }
  },

  watch: {
    checkForGraphDataUpdate(newValue, oldValue) {
      if (newValue != oldValue) {
        this.realData = newValue;
        google.charts.setOnLoadCallback(this.drawChart);
      }
    }
  },

  data() {
    return {
      realData: null
    };
  },

  methods: {
    drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn("string", "Date");
      data.addColumn("number", this.realData.lineChartTitle);
      data.addRows(this.realData.dataItems);

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