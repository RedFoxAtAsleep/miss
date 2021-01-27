<template>
  <div>
    <p>vue-json-editor</p>
    <vue-json-editor v-model="json" :show-btns="true" :expandedOnStart="true" @json-change="onJsonChange"></vue-json-editor>
  </div>
</template>

<script>
import VueJsonEditor from 'vue-json-editor'

export default {
  data () {
    return {
      json: {
        msg: 'demo of jsoneditor'
      }
    }
  },

  components: {
    VueJsonEditor
  },

  methods: {
    onJsonChange (value) {
      console.log('value:', value)
    }
  }
}
</script>
