<template>
  <div>
    <el-card class="box-card1">
      <img id="avatar" src="https://images2.imgbox.com/7b/d4/g5S2VvUp_o.jpeg" alt="avatar">
      <div class="author-name">
        <span style="font-weight: bold">{{ author }}</span>
      </div>
      <div>
        <span style="font-size: 18px">求知若饥，虚心若愚。</span>
      </div>
      <div class="stat">
        <div>
          <span>文章</span>
          <span>{{ postCount }}</span>
        </div>
        <div>
          <span>分类</span>
          <span>{{ categoryCount }}</span>
        </div>
        <div>
          <span>标签</span>
          <span>{{ tagCount }}</span>
        </div>
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
    author: String,
    postCount: Number,
    tagCount: Number,
    categoryCount: Number
  }
}
</script>
<style>
.box-card1 {
  width: 280px;
  height: 280px;
  text-align: center;
  margin: 15px 0;
}

#avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  opacity: 0.9;
}

.author-name {
  margin: 10px 0 10px;
}

.stat {
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.stat > div {
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
}

.stat > div > span:last-child {
  font-weight: bold;
  font-size: 1.1rem;
  opacity: 0.8;
  padding-top: 4px;
}
</style>
