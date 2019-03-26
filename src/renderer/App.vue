<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header class="header">
        <div style="-webkit-app-region: drag">
          <span class="main-title">{{title}}</span>
          <span class="main-mini-title">收银系统</span>
        </div>
      </el-header>
      <el-main class="main" style="height:100%">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer" style="height:20px;">
        ©2018 由 Biless 设计实现
      </el-footer>
    </el-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  title = '嘟蔚子童品'
}
</script>

<style>
body {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 0;
  margin: 0;
}

.header {
  line-height: 60px;
  background: #409eff;
  text-align: left;
}

.footer {
  background-color: #f2f6fc;
  line-height: 20px;
  text-align: center;
}

.main {
  margin: 0px;
  background: white;
  padding: 0px;
}

.el-container {
  height: 100%;
}

.main-title {
  font-size: 35px;
  margin: auto;
  color: #303133;
  font-family: 'PingFang SC';
  -moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-khtml-user-select: none;
	user-select: none;
  cursor:default;
}

.main-mini-title {
  color: #606266;
  -moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-khtml-user-select: none;
	user-select: none;
  cursor:default;
}

.app {
  margin: 0px;
  padding: 0px;
}

#nprogress .bar {
  background: #67c23a;
}
</style>
