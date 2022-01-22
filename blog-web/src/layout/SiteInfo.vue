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
        <span>最后更新时间 : </span>
        <span>{{ lastUpdateDate }}</span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postCount: 86,
      runTime: 1269,
      visitorCount: 1200,
      totalVisit: 1300,
      lastUpdateDate: '2021年10月09日'
    }
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
