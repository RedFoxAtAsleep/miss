<template>
  <div>
    <input v-model="someEntity.attributeA">
    <textarea v-model="someEntity.attributeB"></textarea>
    <button v-on:click="doSomething">Button</button>
  </div>
</template>
<script>
export default {
  name: "temp",
  data(){
    return {
      someEntity:{
        attributeA:'',
        attributeB:''
      },
    }
  },
  watch:{
    someEntity:function(newValue, oldValue){}
  },
  methods:{
    doSomething(){}
  }
}
</script>

<style scoped>

</style>
