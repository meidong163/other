<template>
  <div id="app">
    <div id="echartContainer" style="width: 500px; height: 500px;"></div>

    <div id="dynamicChart"  style="width: 500px; height: 500px;"></div>
  </div>

</template>

<script>
  var echarts = require('echarts');
export default {
  name: 'app',
  data() {
    return {
      timer:"",
      // 随机数
      value: Math.random() * 1000,
      now :new Date(1997, 9, 3),
      oneDay :24 * 3600 * 1000,
      // 时间数组
      data:[],
      myChart:''
    }
  },

  methods: {
    // 创建 图标
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

    // 随机数据
    randomData() {
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 21 - 10;
      return {
        name: this.now.toString(),
        value: [
          [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
          Math.round(this.value)
        ]
      }
    },
    /* 初始化数据 */
    initData(){
      for (var i = 0; i < 1000; i++) {
        this.data.push(this.randomData());
      }
    },

    cheateDynamicChart(){
      // 1. 获取表格容器
      this.myChart = echarts.init(document.getElementById("dynamicChart"));
      // 2. 设置图表组件值
      this.myChart.setOption({
        title: {
          text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: this.data
        }]
      });
    },

    timelog()
    {
      // this.value++;
      // console.log(this.value);
      this.showDate()
    },
    showDate(){
      this.now = new Date(+this.now + this.oneDay);
      // 日期每秒
      // console.log(this.now)
    },
    // 更新数据
    updateData(){
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }
      this.myChart.setOption({
        series: [{
          data: this.data
        }]
      });
    }
  },
  mounted(){
    this.getChart();
    // 1. 生成图标随机数据
    this.initData();

    // 2. 创建图表
    this.cheateDynamicChart();
    // 3. 刷新数据
    this.timer = setInterval(this.updateData,1000);
  },
  beforeDestroy()
  {
    clearInterval(this.timer)
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
