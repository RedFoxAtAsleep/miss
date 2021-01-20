<template>
  <div class="admin">
    <div class="index">
      <div class="container">
        <div class="header">header</div>
        <div class="body">
          <div class="left"><router-view name="left_navigation"></router-view></div>
          <div class="right"><router-view name="right_window"></router-view></div>
        </div>
        <div class="footer">footer</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style>
div.admin {}
div.admin div.index {}
div.admin div.index div.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
}

div.admin div.index div.container div.header {
  background: white;
}

div.admin div.index div.container div.footer {
  background: white;
}

div.admin div.index div.container div.body {
  background: white;
  display: grid;
  grid-template-columns: 2fr 8fr;  /* fregment */
}
div.admin div.index div.container div.body div.left {

}
div.admin div.index div.container div.body div.right {

}
</style>
