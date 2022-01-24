<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
  'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  /*background: #0d0d0d;*/
}
</style>
