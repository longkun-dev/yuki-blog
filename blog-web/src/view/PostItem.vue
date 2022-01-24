<template>
  <div ref="scrollOne">
    <el-container>
      <el-header style="z-index: 2001">
        <Menu1></Menu1>
      </el-header>
      <el-container id="main1" v-if="showAside" class="class1">
        <el-main class="el-main">
          <PostDetail v-bind:postContent="html"
                      postTitle="我真是日了尼玛的逼了">
          </PostDetail>
        </el-main>
        <el-aside style="width: 290px; margin: 0 8px">
          <User v-if="showUserInfo" v-bind="userInfo"></User>
          <Tag v-bind:tagList="tagList"></Tag>
          <SiteInfo v-bind="siteInfo"></SiteInfo>
        </el-aside>
      </el-container>
      <el-container id="main2" v-else class="class2">
        <el-main class="el-main">
          <PostDetail v-bind:postContent="html"
                      postTitle="我真是日了尼玛的逼了">
          </PostDetail>
        </el-main>
      </el-container>
      <el-footer>
        <Footer v-bind="footerInfo"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import PostDetail from "../layout/PostDetail"
import Menu1 from "../layout/Menu"
import User from "../layout/User"
import Tag from "../layout/Tag"
import SiteInfo from "../layout/SiteInfo"
import Footer from "../layout/Footer"

import marked from 'marked'
import hljs from "highlight.js"

export default {
  components: {
    Menu1,
    PostDetail,
    User,
    Tag,
    SiteInfo,
    Footer
  },
  data() {
    return {
      showAside: true,
      showUserInfo: true,
      userInfo: {
        author: 'im-yuki',
        postCount: 10,
        tagCount: 20,
        categoryCount: 5
      },
      tagList: ['Echarts', 'Element', 'Hadoop', 'IDEA', 'Java',
              'JavaScript', 'Jenkins', 'shell', 'Linux', 'MQ', 'Markdown',
              'MySQL', 'OpenCV', 'SSL', 'Spring', 'SpringBoot', 'SpringCloud',
              'SpringMVC', 'SpringSecurity', 'Swagger', 'Thymeleaf', 'Tomcat',
              'Vue', '树莓派', '持续集成'],
      siteInfo: {
        postCount: 86,
        runTime: 1269,
        visitorCount: 1200,
        totalVisit: 1300,
        lastUpdateDate: '2021年10月09日'
      },
      footerInfo: {
        since: '©️2018-2022',
        author: 'im-yuki',
        icp: '東京都备 ICP20220122号'
      },
      article: '## Hello world!',
      html: ''
    }
  },
  created() {
    this.showAside = false
    this.showUserInfo = false
    console.log('this.aside: ', this.showAside)
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      // 引入样式
      highlight: function(code) {
        return hljs.highlightAuto(code).value
      }
    })
    this.html = marked('### 画矩形\n\n绘制矩形需要指定两个点的坐')
  }
}
</script>
<style>
.el-header {
  width: 100%;
  min-width: 1100px;
}

.el-footer {
  color: #333;
  text-align: center;
  padding: 0;
  min-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.el-main {
  padding: 0 8px;
}

#main1 {
  margin: 50px auto;
}

 #main2 {
  margin: 50px auto;
}

.class1 {
  width: 1100px;
}

.class2 {
  width: 970px;
}
</style>
