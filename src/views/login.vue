<template>
  <div class="box">
    <h1 style="text-align:center;">UNI-ADMIN</h1>
    <el-form
      :model="form"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="pass">
        <el-input type="text" style="width:200px" v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" style="width:200px" v-model="form.pass"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        pass: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.form.user,
          password: this.form.pass,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          this.$router.push({ path: "/background" });
        })
        .catch((res) => {
          console.log(res);
          alert("用户名或者密码错误，登陆失败");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
    width: 400px;
    height: 200px;
    margin:200px  auto;
    border:1px solid #000;
    
}
</style>
