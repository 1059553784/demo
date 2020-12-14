<template>
  <div>
    <h1>商品规格</h1>
 <el-table
    :data="list"
    border
    style="width: 100%">
  
    <el-table-column
      prop="name"
      label="会员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="member"
      label="会员等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop=""
      label="登录注册"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-main>
    <crumb />
  </el-main>
  </div>
</template>
<script>
import crumb from "@/components/crumb.vue";
export default {
  components:{
    crumb
  },
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    this.$axios.get("list.json").then((res)=>{
      this.list=res.data.list
    })
  }
}
</script>
