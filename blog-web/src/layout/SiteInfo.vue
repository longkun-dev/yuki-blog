<template>
  <div>
    <el-card class="box-card2">
      <div slot="header" class="clearfix">
        <span>📈 网站资讯</span>
      </div>
      <div class="box-card2-item">
        <span>文章数目 : </span>
        <span>{{ postCount }}</span>
      </div>
      <div class="box-card2-item">
        <span>运行时间 : </span>
        <span>{{ runTime }} 天</span>
      </div>
      <div class="box-card2-item">
        <span>总访客数 : </span>
        <span>{{ visitorCount }}</span>
      </div>
      <div class="box-card2-item">
        <span>总访问数 : </span>
        <span>{{ totalVisit }}</span>
      </div>
      <div class="box-card2-item">
        <span>最后更新 : </span>
        <span>{{ lastUpdateDate }}</span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    postCount: Number,
    runTime: Number,
    visitorCount: Number,
    totalVisit: Number,
    lastUpdateDate: String
  }
}
</script>
<style>
.box-card2 {
  width: 280px;
  height: auto;
  margin: 15px 0;
}

.box-card2-item {
  padding: 5px 5px;
}
</style>
