<template>
  <div id="app">
    <div id="echartContainer" style="width: 500px; height: 500px;"></div>
  </div>
</template>

<script>
  var echarts = require('echarts');
export default {
  name: 'app',
  data() {
    return {}
  },

  methods: {
    getChart() {
      // 1. 获取表格容器
      var myChart = echarts.init(document.getElementById("echartContainer"));
      // 2. 设置各组件样式
      myChart.setOption({
        //表头
        title: {text: '柱状图表'},
        // 工具箱
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
          }
        },
        // x轴
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        // y轴
        yAxis: {
          type: 'value'
        },

        // 展示数据
        series: [{
          name: '成交',
          type: 'line',
          smooth: true,
          data: [10, 12, 21, 54, 260, 830, 710]
        },
          {
            name: '预购',
            type: 'line',
            smooth: true,
            data: [30, 182, 434, 791, 390, 30, 10]
          },
          {
            name: '意向',
            type: 'line',
            smooth: true,
            data: [1320, 1132, 601, 234, 120, 90, 20]
          }]

      });
    },
  },
  mounted(){
    this.getChart()
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
