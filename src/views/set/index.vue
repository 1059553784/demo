<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="">
            <i class="el-icon-menu"></i>
            <span slot="title">设置首页</span>
          </el-menu-item>
          <el-menu-item index="">
            <i class="el-icon-document"></i>
            <span slot="title">设置管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <crumb></crumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// 引入子组件
import crumb from "@/components/crumb.vue";
export default {
  components: {
    crumb,
  },
};
</script>
