<template>
  <div class="readme">
    <div class="notice">
      <div class="item" @click="go2admin">
        <img class="image" src="../../public/bird.gif"  alt="封面图" />
        <div class="article">
          <div class="title">后台模板：左侧导航栏右侧标签页</div>
          <div class="content"><br/><br/>
            试图搭建开箱即用的后台管理系统模板。基于Vue和Element实现。<br/>
            1.实现可以无限嵌套的导航栏，配置前端路由和组件、配置层级菜单和路由后，即可生成对应的嵌套菜单。<br/>
            2.实现标签页、导航页、网址三方联动，目前只限一个菜单项打开一个标签页。MENU、NODE、LINK后缀的导航分别是标签页、分组、跳转站外的链接<br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Readme",
  data(){
    return {}
  },
  methods:{
    go2admin:function (){
      this.$router.push({'name': 'Admin_Home'})
    }
  }
}
</script>

<style>
.readme {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgba(48,71,94, 1);
}
.notice {
  width: 98vw;
  height: 96vh;
  display: grid;
  place-items: center;
  background-color: rgba(255,255,255,1);
}

.item {
  width: 90vw;
  height: 10vh;
  display: grid;
  grid-template-columns: auto 1fr;
}
.image{
  width: 10vh;
  height: 10vh;
}
.article {
  display: grid;
  grid-template-rows: auto 1fr;
}
.title {
  font-size: 30px;
  line-height: 30px;
  font-weight: bolder;
}
.content {
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
}

</style>
