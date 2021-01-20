<template>
  <div :style=styleColorBlock>{{hex}}</div>
</template>

<script>
export default {
  name: "ColorBlock",
  props:['hex'],
  created() {
  },
  data(){
    return {
      "styleColorBlock": {
        "background-color": this.hex,
        "margin": 0,
        "padding": 0,
        "border": 0,
        "color": "white",
      }
    }
  },
  computed: {
    generateStyle: () => {
      return {

      }
    }
  }

}
</script>

<style>

</style>
