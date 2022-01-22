<template>
  <div>
    <el-menu :default-active="activeIndex"
             mode="horizontal" style="padding: 0 65px">
      <el-menu-item index="/" class="site-title">yuki.im</el-menu-item>
      <div style="float: right" class="menu-list">
        <subMenu v-for="(menuItem, index) in menuList" :key="menuItem.index"
          :index="index" :item="menuItem">
      </subMenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
import subMenu from './SubMenu.vue'
export default {
  name: "menu",
  components: {
    subMenu
  },
  data() {
    return {
      activeIndex: "1",
      menuList: [{
        menuName: "🏠 主页",
        category: "/",
        children: []
      },
      {
        menuName: "💻 编程",
        category: "Programming",
        children: [{
          menuName: "🍵 Java",
          category: "Java",
          children: []
        }, {
          menuName: "🐍 Python",
          category: "Python",
          children: []
        }]
      }, {
        menuName: "🎹 音乐",
        category: "Music",
        children: []
      }, {
        menuName: "🎬 电影",
        category: "Movie",
        children: [{
          menuName: "1 科幻片",
          category: "Fiction",
          children: []
        }, {
          menuName: "2 战争片",
          category: "War",
          children: []
        }, {
          menuName: "3 爱情片",
          category: "War",
          children: []
        }]
      }, {
        menuName: "🐳 友链",
        category: "Link",
        children: []
      }, {
        menuName: "🙂 关于",
        category: "About",
        children: []
      }]
    }
  },
  methods: {
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

.el-submenu {
  border-bottom: 2px solid #fff;
  color: #303133;
}

.el-menu-item:hover {
  border-bottom: 2px solid #409eff !important;
  transition-duration: 1.2s !important;
  opacity: 0.7;
}

.el-submenu:hover {
  border-bottom: 2px solid #409eff !important;
  transition-duration: 1.2s !important;
  opacity: 0.7;
}

.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
  min-width: 120px;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.site-title {
  float: left !important;
}
</style>
