<template>
    <div class="layout-box">
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="220px" style="background-color: #324057 " >
    <h3 class="layout-title"> 山海边 </h3>
    <el-menu :default-openeds="['1', '3']" 
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#ffd04b"
    class="aside-menu">
      <el-submenu index="1">
        <template slot="title" ><i class="el-icon-message"></i>首页</template>
        <el-menu-item-group >
          <el-menu-item index="1-1"><router-link tag = "a" to = "/home">数据统计</router-link></el-menu-item>
        </el-menu-item-group>          
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i><b class="el-submenu__title1">数据管理</b></template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><router-link tag = "a" to = "/userlist">用户列表</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link tag = "a" to = "/shop">商家列表</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link tag = "a" to = "/foodlist">食品列表</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-document"></i><b class="el-submenu__title1">添加数据</b></template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><router-link tag = "a" to = "/shopadd">店铺添加</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link tag = "a" to = "/foodadd">食品添加</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-star-on"></i><b class="el-submenu__title1">图表</b></template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><router-link tag = "a" to = "/chart">图标</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-edit"></i><b class="el-submenu__title1">编辑</b></template>
        <el-menu-item-group>
          <el-menu-item index="5-1"><router-link tag = "a" to = "/edit">富文本编辑</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-setting"></i><b class="el-submenu__title1">设置</b></template>
        <el-menu-item-group>
          <el-menu-item index="6-1"><router-link tag = "a" to = "/set">用户设置</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-warning"></i><b class="el-submenu__title1">说明</b></template>
        <el-menu-item-group>
          <el-menu-item index="7-1"><router-link tag = "a" to = "/warn">说明</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">  
      <span>山海边</span>
    </el-header>

    <el-main>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </el-main>

  </el-container>
</el-container>
    </div>
</template>

<style lang= "stylus" scoped>
.el-menu-item{
  background:#1f2d3d!important;
  padding: 0!important;
}
.el-menu-item
  a
    color #bfcbd9
    display block
    width 100%
    height 100%
    text-align center
  &:hover
    background #324157!important
.layout-box
   height 100%
.el-aside 
    color #333   
    .layout-title
      height 60px
      line-height 60px
      background #324157
      color white
      font-weight bold
      font-size 20px
      text-align center
      border-right 1px solid white
    .el-menu
      background #324057
      color #bfcbd9
.el-menu-item
      background-color #1F2D3D
      color #bfcbd9
.el-header 
    background-color #EFF2F7
    color #333
    line-height 60px  
.el-menu-item-group
    background #1F2D3D!important
.el-main
    padding 0 
</style>



<script>
  export default {

  };
</script>