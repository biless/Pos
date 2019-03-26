<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header style="height:90px">
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>库存查询</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-row style="margin:10px;">
            <el-col :span="5">
              <el-input placeholder="请输入货号或名称" prefix-icon="el-icon-search" :clearable="false">
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-button-group style="margin-left:10px;">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <!-- <el-button type="warning">更多条件</el-button> -->
              </el-button-group>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main style="padding: 0 20px;height:100%;margin-bottom:20px;">
        <div style="height:100%">
          <el-table stripe height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="date" label="商品名">
            </el-table-column>
            <el-table-column prop="name" label="商品尺码">
            </el-table-column>
            <el-table-column prop="province" label="商品货号">
            </el-table-column>
            <el-table-column prop="city" label="商品进价">
            </el-table-column>
            <el-table-column prop="city" label="商品价格">
            </el-table-column>
            <el-table-column prop="zip" label="商品编码">
            </el-table-column>
            <el-table-column prop="zip" label="商品库存">
            </el-table-column>
            <el-table-column prop="zip" label="商品分类">
            </el-table-column>
            <el-table-column prop="zip" label="标星">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">修改</el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.sum {
  text-align: right;
  font-size: 70px;
  line-height: 70px;
}
</style>
