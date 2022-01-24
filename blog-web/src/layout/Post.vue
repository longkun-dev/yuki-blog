<template>
  <div>
    <el-card class="box-card3">
      <el-row>
        <el-tag>{{ category }}</el-tag>
        <span style="float: right">{{ createDate }}</span>
      </el-row>
      <el-row style="margin-bottom: -8px">
        <h3>
          <span @click="toDetail" style="text-decoration: none; color: inherit">
            {{ title }}
          </span>
        </h3>
      </el-row>
      <hr style="opacity: 0.5">
      <el-row class="part3">
        <img alt="测试图片" src="http://rikumalog.com/wp-content/uploads/rmpic20211129_00015.jpg">
        <article style="padding: 20px 20px">
          {{ shortDesc }}
        </article>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    title: String,
    category: String,
    createDate: String,
    shortDesc: String
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: 'post/post001',
        query: {}
      })
    }
  }
}
</script>
<style>
.box-card3 {
  height: 300px;
  width: auto;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 8px;
}

.part3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
}

.part3 > img {
  width: 300px;
  height: 150px;
}
</style>
