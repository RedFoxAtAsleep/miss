<template>
  <div>
    <div>
      Clicked: {{ this.count }} times, count is {{ this.evenOrOdd }}.
      <button @click="this.increment">+</button>
      <button @click="this.decrement">-</button>
      <button @click="this['count/incrementIfOdd']">Increment if odd</button>
      <button @click="this['count/incrementAsync']">Increment async</button>
    </div>
    <div>
      Recent history:
      <ol>
        <li v-for="(item, index) in this.recentHistory" :key="index">{{ item }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapActions } = createNamespacedHelpers('count')

export default {
  computed: {
    ...mapState('count', ['count']),
    ...mapGetters('count', {
      'evenOrOdd': 'evenOrOdd',
      'recentHistory': 'recentHistory'
    }),
  },
  methods: {
    ...mapMutations({
      'increment': 'count/increment',
      'decrement': 'count/decrement',
    }),
    ...mapActions([
      'count/incrementIfOdd',
      'count/incrementAsync',
    ]),
  }
}
</script>
