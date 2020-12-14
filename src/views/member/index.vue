<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="">
            <i class="el-icon-menu"></i>
            <span slot="title">会员首页</span>
          </el-menu-item>
          <el-menu-item index="">
            <i class="el-icon-document"></i>
            <span slot="title">会员管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <crumb></crumb>
        <!-- 引入面包屑组件 -->
        <router-view></router-view>
        <!-- 通过router-view占位符 -->
        <el-table :data="list" border style="width: 100%">
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="age" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="member" label="会员" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// 引入面包屑子组件
import crumb from "@/components/crumb.vue";
export default {
  data() {
    return {
      list: [],//list存放数据
    };
  },
  mounted() {
    //通过axios发送get请求，获取list.json的数据，然后渲染页面
    this.$axios.get("list.json").then((res) => {
      this.list = res.data.list;
    });
  },
  components: {
    crumb,
  },
};
</script>
