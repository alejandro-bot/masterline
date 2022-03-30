<template>
  <div>
    <apexchart height="390" :options="chartOptions" :series="series">
    </apexchart>
  </div>
</template>

<script>
export default {
  props: ["labels", "arrayData", "type", "titulo"],
  data() {
    return {
      series: this.arrayData,
      chartOptions: {
        chart: {
          height: 390,
          type: this.type,
        },
        title: {
          text: this.titulo,
          align: "left",
        },

        colors: ["#1ab7ea", "#0084ff"],
        labels: this.labels,
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  },
  created() {
    console.log("labels", this.labels);
    console.log("arrayData", this.arrayData);
  },
};
</script>
