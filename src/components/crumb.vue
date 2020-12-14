<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/background' }"
        >后台首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  watch: {
    $route: {
      handler(newval) {
        console.log(newval);
        this.title = newval.meta.title;
      },
    },
  },
};
// $route 是当前路由信息的对象 路径 参数
// $router 路由实例对象 包含了路由的方法 push(跳转一个新的页面)  go(-1) 跳到上一页
</script>
