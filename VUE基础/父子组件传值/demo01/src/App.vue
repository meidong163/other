<template>
  <div id="app">
    <h1>父</h1>
    <h1>{{ msg }}</h1>
    <demoBox :transMsg="name" @func="alert"></demoBox>
  </div>
</template>

<script>
  import demo from './demo/demo'
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      name:'tiantian'
    }
  },
  methods:{
    alert(data){
      alert(data)
    }
  }
  ,
  components:{
    demoBox:demo
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
