<template>
  <div id="app">
    <el-container>
      <el-header class="nav" v-show="show">
        <h1>UNI-ADMIN</h1>
        <div class="right">
          <el-menu class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="/home">首页</el-menu-item>

            <el-menu-item index="/shop">商品列表</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/member">会员</el-menu-item>
            <el-menu-item index="/set">设置</el-menu-item>
          </el-menu>

          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-button @click="logout">退出登陆</el-button>
        </div>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  watch: {
    $route: {
      handler(newval, oldval) {
        // console.log(newval, oldval);
        if (newval.path == "/login") {
          this.show = false;
        } else {
          this.show = true;
        }
      },
    },
    //监听路由 handler是watch的完整写法 是执行函数的意思
    // 如果是登陆页面就让头部的导航隐藏 如果不是登陆页面就显示头部导航
  },
  methods: {
    logout() {
      this.$http("http://ceshi5.dishait.cn/admin/logout", "post")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setTimeout(()=>{
            localStorage.removeItem("token");
             this.$router.push({ path: "/login" });
          },2000)
         
        });
    },
    //退出登陆
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.nav {
  width: 100%;
  justify-content: space-between;
  display: flex;
  background: skyblue;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
  }

  .el-menu {
    background: none;
  }
}
</style>
