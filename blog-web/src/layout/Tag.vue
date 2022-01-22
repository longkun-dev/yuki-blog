<template>
  <div>
    <el-card class="box-card" id="tag-card">
      <div slot="header">
        <span>🏷️ 标签</span>
      </div>
      <div>
        <div v-for="(tag, index) in tagList" :key="tag" class="tag">
          <a href="#" :style="{color: colors[index % colors.length]}">{{ tag }}</a>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagList: ['Echarts', 'Element', 'Hadoop', 'IDEA', 'Java',
        'JavaScript', 'Jenkins', 'shell', 'Linux', 'MQ', 'Markdown',
        'MySQL', 'OpenCV', 'SSL', 'Spring', 'SpringBoot', 'SpringCloud',
        'SpringMVC', 'SpringSecurity', 'Swagger', 'Thymeleaf', 'Tomcat',
        'Vue', '树莓派', '持续集成'],
      colors: [
        '#7F4B71',
        '#6C6E6B',
        '#687918',
        '#944F0A',
        '#187A46',
        '#9B119C',
        '#0DC7A2',
        '#3488A0',
        '#8DB71B',
        '#B6005D',
        '#B64709',
        '#0FC35B',
        '#6C9D76',
        '#249C3C',
        '#977677'
      ]
    }
  }
}
</script>
<style>
#tag-card {
  text-align: left;
  margin: 15px 0;
  width: 280px;
  height: auto;
  padding-bottom: 10px;
}

.tag {
  padding: 10px 15px 0 0;
  float: left;
}
</style>
