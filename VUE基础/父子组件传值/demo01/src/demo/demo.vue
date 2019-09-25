<template>
  <div class="container">
    <h3 @click="upClick">{{transMsg}}</h3>
    <!--<input type="button" value="click" @click="upClick">-->
  </div>
</template>

<script>
    export default {
        name: "demo",
      data(){
          return{

          }
      },
      methods:{
          upClick(){
            this.$emit('func',"好好学习，天天向上")
          }
      }
      ,
      props:['transMsg']
    }
</script>

<style scoped>

</style>
