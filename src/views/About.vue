<template>
  <div class="about">
    <div :style="stylePaneContainer"><h1>This is an about page</h1></div>
    <div :style=stylePaneGallary>
      <div
          :style=stylePaneContainer
          v-for="(colors, pane) in panes"
          :key="pane"
      >
        <color-pane :colors=colors>
        </color-pane>
      </div>
    </div>
  </div>
</template>
<script>
import ColorPane from "@/components/ColorPane";
export default {
  name: "About",
  data(){
    return {
      "panes":[
        ["#4e89ae", "#43658b", "#ed6663", "#ffa372"],
        ["#fcf8e8", "#d4e2d4", "#ecb390", "#df7861"],
        ["#fcf8ec", "#d0e8f2", "#79a3b1", "#456268"],
        ["#726a95", "#709fb0", "#a0c1b8", "#f4ebc1"],
        ["#e8e8e8", "#f05454", "#30475e", "#222831"],
        ["#f67280", "#c06c84", "#6c5b7b", "#355c7d"],
        ["#ffc8c8", "#ff9999", "#444f5a", "#3e4149"],
        ["#f7fbfc", "#d6e6f2", "#b9d7ea", "#769fcd"],
        ["#07689f", "#a2d5f2", "#fafafa", "#ff7e67"],
      ],
      "stylePaneGallary":{
        "display": "grid",
        "grid-template-columns": "repeat(4, 1fr)",
        "row-gap": "5vh"
      },
      "stylePaneContainer":{
        "display": "grid",
        "place-items": "center",
      }
    }
  },
  components: {
    ColorPane
  }
}
</script>

