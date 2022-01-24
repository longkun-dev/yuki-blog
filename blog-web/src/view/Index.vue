<template>
  <div>
    <el-container>
      <el-header style="z-index: 2001" ref="scrollOne" id="top-nav">
        <Menu1></Menu1>
      </el-header>
      <el-container id="main">
        <el-main class="el-main">
          <Post v-for="item in postList" :key="item.index" :item="item" v-bind="item"></Post>
        </el-main>
        <el-aside style="width: 290px; margin: 0 0">
          <User v-bind="userInfo"></User>
          <Tag v-bind:tagList="tagList"></Tag>
          <SiteInfo v-bind="siteInfo"></SiteInfo>
        </el-aside>
      </el-container>
      <el-footer>
        <Footer v-bind="footerInfo"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Menu1 from "../layout/Menu"
import User from "../layout/User"
import Tag from "../layout/Tag"
import SiteInfo from "../layout/SiteInfo"
import Post from "../layout/Post"
import Footer from "../layout/Footer"

export default {
  components: {
    Menu1,
    User,
    Tag,
    SiteInfo,
    Post,
    Footer
  },
  data() {
    return {
      userInfo: {
        author: 'im-yuki',
        postCount: 10,
        tagCount: 20,
        categoryCount: 5
      },
      postList: [{
        title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
        category: '徒步',
        createDate: '2021年11月30日',
        shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
          '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
      }, {
        title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
        category: '徒步',
        createDate: '2021年11月30日',
        shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
          '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
      }, {
        title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
        category: '徒步',
        createDate: '2021年11月30日',
        shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
          '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
      }, {
        title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
        category: '徒步',
        createDate: '2021年11月30日',
        shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
          '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
      }, {
        title: '6年ぶりに歩いた福岡アイランドシティの発展ぶりに仰天する【香椎ウォーク】',
        category: '徒步',
        createDate: '2021年11月30日',
        shortDesc: '2021年11月、福岡市東区の香椎エリアを歩いてきました。' +
          '（JR香椎駅→香椎浜北公園→アイランドシティ中央公園→あいたか橋→香椎花園前駅→JR香椎駅）'
      }],
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
        author: 'chenxii81',
        icp: '墙ICP备 01030930号'
      }
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    // document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      //获取滚动时的高度
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // if (scrollTop > 130) {
      //   //大于65的时候要做的操作
      //   document.getElementById("top-nav").classList.add("top-nav")
      // } else {
      //   document.getElementById("top-nav").classList.remove('top-nav')
      // }
    }
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

#main {
  width: 1100px;
  margin: 50px auto;
}

.top-nav {
  position: fixed;
  top: 0;
  -webkit-transition: all 2s ease 1s;
  transition: all 2s ease 1s;
}
</style>
