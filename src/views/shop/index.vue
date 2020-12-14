<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/size">
            <i class="el-icon-document"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/type">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <crumb></crumb>
        <!-- 面包屑子组件标签 -->
        <router-view></router-view>
        <!-- router-view占位符 -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
//引入面包屑子组件
import crumb from "@/components/crumb.vue";
export default {
  components: {
    crumb,
  },
};
</script>
