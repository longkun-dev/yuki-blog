<template>
  <div id="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
             @select="handleSelect" style="padding: 0 36px">
      <el-menu-item>chenxii81</el-menu-item>
      <el-menu-item index="1">🏠 主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">💻 编程</template>
        <el-menu-item index="2-1">🍵 Java</el-menu-item>
        <el-menu-item index="2-2">🐍 Python</el-menu-item>
        <el-menu-item index="2-3">📁 数据库</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">🎸 兴趣</template>
        <el-menu-item index="3-1">🚴‍♀️ 骑行</el-menu-item>
        <el-menu-item index="3-2">🚶‍♀️ 徒步</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">🛩️ 航空</el-menu-item>
      <el-menu-item index="4">🎬 电影</el-menu-item>
      <el-menu-item index="4">🎵 音乐</el-menu-item>
      <el-submenu index="5">
        <template slot="title">🧸 关于</template>
        <el-menu-item index="5-1">🚴‍♀️ 骑行</el-menu-item>
        <el-menu-item index="5-2">🚶‍♀️ 徒步</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'menu',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #fff;
  color: #303133;
}

.el-submenu__title {
  color: #303133 !important;
}

.el-menu--horizontal > .el-submenu.is-active {
  border-bottom: 2px solid #fff;
  color: #303133;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: 2px solid #fff;
  color: #303133;
}

.el-menu--horizontal > .el-submenu {
  border-bottom: 2px solid #fff;
  color: #303133;
}


.el-menu--horizontal > .el-menu-item:hover {
  border-bottom: 2px solid #409eff !important;
  transition-duration: 1s !important;
  opacity: 0.7;
}

.el-menu--horizontal > .el-submenu:hover {
  border-bottom: 2px solid #409eff !important;
  transition-duration: 1s !important;
  opacity: 0.7;
}
</style>
