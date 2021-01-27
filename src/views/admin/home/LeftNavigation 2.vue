<template>
  <div>
    <div class="left-navigation">
      <u-menu v-bind:items="indexInfo['indexTreeComplete']"></u-menu>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import UMenu from "@/views/admin/home/UMenu";

export default {
  name: "LeftNavigation",
  data(){
    return {
      json: {}
    }
  },
  async created(){
    await this.requestIndexTree();
    console.log(this.indexTree);
    // this.$store.dispatch('index/requestIndexTree');
  },
  mounted(){},
  computed:{
    ...mapState('index', ['indexTree', 'selected']),
    ...mapGetters('index',['indexInfo']),
  },
  methods:{
    ...mapMutations('index', ['setIndexTree']),
    ...mapActions('index', ['requestIndexTree']),
  },
  components:{
    UMenu
  }
}
</script>

<style>
div.left-navigation {
}
</style>
