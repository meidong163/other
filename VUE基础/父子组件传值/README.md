### VUE 父子组件如何互相传值？

* **父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息**

props 和 template 在一层设计，这个很有意思就好比一个类声明了自己的属性一样。 在ios中 1 V 1 的传值，通过属性往里传，通过代理方法往往外传值。有异曲同工之妙。

![27584e95845e262286d25c47d44e0979.png](evernotecid://D8AD8C7D-0E4A-48D0-907F-874B6DE7F9DB/appyinxiangcom/12705989/ENResource/p48)

*  props down
```
// 全局组件
Vue.component('child', {
// camelCase in JavaScript
props: ['myMessage'],
template: '<span>{{ myMessage }}</span>'
})

<div>
<input v-model="parentMsg">
<br>
<child v-bind:my-message="parentMsg"></child>
</div>
```
使用 v-bind 的缩写语法通常更简单：
```
my-message 子组件的 props
<child :my-message="parentMsg"></child>
```
结果
![1b27c2e1372f623cdcf76ee28c02ea24.png](evernotecid://D8AD8C7D-0E4A-48D0-907F-874B6DE7F9DB/appyinxiangcom/12705989/ENResource/p49)


* events up 传值

```
//1. 在父组件使用的时候，绑定父组件的alert方法到子组件上
<demoBox :transMsg="name" @func="alert"></demoBox>

methods:{
alert(data){
alert(data)
}
}
,
components:{
demoBox:demo
}

//2. 通过V-on给子组件绑定events 内部通过 $emit() 触发父组件的方法来传值。
<h3 @click="upClick">{{transMsg}}</h3>

methods:{
upClick(){
this.$emit('func',"好好学习，天天向上")
}
}
```
