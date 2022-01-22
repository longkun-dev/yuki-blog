<template>
  <div>
    <template v-if="item.children.length === 0">
      <el-menu-item :index="item.category">{{ item.menuName }}</el-menu-item>
    </template>
    <el-submenu :index="item.category" v-else>
      <template slot="title">{{ item.menuName }}</template>
      <el-menu-item v-for="(subItem, index) in item.children" :key="index"
                    :index="subItem.category">{{ subItem.menuName }}
      </el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "subMenu",
  data() {
    return {}
  },
  props: {
    item: {
      typeof: Object,
      default: () => {}
    }
  }
}
</script>
<style>

</style>
