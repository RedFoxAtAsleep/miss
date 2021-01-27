<template>
  <div class="u-tabs">
    <el-tabs class="u-el-tabs"
             v-model="selectedLocal"
             type="card"
             closable
             @tab-remove="removeTab">
<!--      <el-breadcrumb-->
<!--          v-if="breadcrumb"-->
<!--          separator-class="el-icon-arrow-right">-->
<!--        <el-breadcrumb-item-->
<!--            v-for="item in breadcrumb"-->
<!--            :key="item"-->
<!--        >-->
<!--          {{ item in indices ? indices[item]['label'] : menus[item]['label'] }}-->
<!--        </el-breadcrumb-item>-->
<!--      </el-breadcrumb>-->
<!--      <div style="height: 20px"></div>-->
      <el-tab-pane
          v-for="index in loadedIndices"
          :key="index['uid']"
          :label="index['label']"
          :name="index['uid']"
          :closable="index['closable']">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
name: "UTabPane"
}
</script>

<style scoped>

</style>
