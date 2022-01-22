<template>
  <div>
    <div class="footer">
      <hr style="opacity: 0.5">
      <div id="foot-wrap">
        <div>{{ since }} By {{ author }}</div>
        <div style="margin-top: 10px">{{ icp }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      since: '©️2018-2022',
      author: 'chenxii81',
      icp: '墙ICP备 01030930号'
    }
  }
}
</script>
<style>
.footer {
  height: 130px;
  width: 100%;
  animation: bottom-top 1s;
}

#foot-wrap {
  padding: 2rem;
  text-align: center;
  position: relative;
}
</style>
