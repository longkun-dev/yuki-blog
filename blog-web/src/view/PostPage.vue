<template>
  <div>
    <el-container>
      <el-header style="position: absolute; top: 0; z-index: 2001">
        <Menu1></Menu1>
      </el-header>
      <el-container id="main">
        <el-main>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </el-main>
        <el-aside style="width: 28%">
          <SiteInfo></SiteInfo>
        </el-aside>
      </el-container>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Menu1 from '../layout/Menu';
import User from '../layout/User';
import Tag from '../layout/Tag';
import SiteInfo from '../layout/SiteInfo';
import Post from '../layout/Post';
import Footer from '../layout/Footer'

export default {
  components: {
    Menu1,
    User,
    Tag,
    SiteInfo,
    Post,
    Footer
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
  padding: 0 0;
}

#main {
  width: 1100px;
  margin: 60px auto;
}

</style>
