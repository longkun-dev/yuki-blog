<template>
  <div>
    <el-card class="box-card3">
      <el-row>
        <el-tag>{{ category }}</el-tag>
        <span style="float: right">{{ createDate }}</span>
      </el-row>
      <el-row>
        <h3><a href="#" style="text-decoration: none;color: inherit">{{ title }}</a></h3>
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
    return {
      title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
      category: '徒步',
      createDate: '2021年11月30日',
      shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
        '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
    }
  }
}
</script>
<style>
.box-card3 {
  height: 300px;
  width: auto;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.part3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
}

.part3 > img {
  width: 300px;
  height: 200px;
}
</style>
