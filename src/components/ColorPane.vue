<template>
  <div class="pane">
    <color-block
        v-for="color in colors"
        :key="color"
        :hex="color"
    ></color-block>
  </div>
</template>
<script>
import ColorBlock from "@/components/ColorBlock";

export default {
  name: "ColorPane",
  props: ['colors'],
  components:{
    ColorBlock
  }
}
</script>

<style>
div.pane {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-rows: 5fr 4fr 3fr 2fr;
  width: 200px;
  height: 200px;
  border:2px solid rgba(0, 0, 0, 0);
  border-radius: 5%;
  overflow: auto;  /* 浏览器缺省overflow-x overflow-y是visible */
}
</style>
