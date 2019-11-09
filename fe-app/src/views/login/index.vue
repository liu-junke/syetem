<template>
  <div class="login-box">
    <div class="container">
      <p class="title"> 后台管理系统 </p>
      <div class="content">
        <el-input v-model="input1" placeholder="用户名"></el-input>
        <el-input v-model="input2" placeholder="密码"></el-input>
        <el-button type="primary"> 登录 </el-button>
        <div class="text-box">
          <p>温馨提示:</p>
          <p>未登录过的新用户，自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            input1: '',
            input2: ''
        }
    }
}
</script>

<style lang="stylus">
.login-box
  height 100%
  width 100%
  position fixed 
  left 0 
  top 0 
  z-index 100000
  background-color #324057
  .container
    width 370px
    height 370px
    padding 25px
    position absolute 
    left 0 
    right 0 
    top 0 
    bottom 0 
    margin auto 
    .title
      width 100%
      font-size 34px
      margin-bottom 60px
      color white
      text-align center
    .content
      display flex
      flex-direction column
      width 320px   
      background white
      padding 25px
      border-radius 10px
      .el-input__inner
        margin-bottom 20px
        height 36px!important
      .text-box
        padding 25px 0 0 0
        p
          text-align center
          font-size 12px
          color red
          margin 5px 0
</style>