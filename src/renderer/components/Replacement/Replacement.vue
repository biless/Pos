<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header style="height:90px">
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>退换处理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-row style="margin:10px;">
            <el-col :span="5">
              <el-input placeholder="请输入电话号码或名称" prefix-icon="el-icon-search" :clearable="false">
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-button-group style="margin-left:10px;">
                <el-button type="primary" icon="el-icon-search">查询订单</el-button>
                <!-- <el-button type="warning">更多条件</el-button> -->
              </el-button-group>
            </el-col>
            <el-col :offset="5" :span="8">
              <div style="text-align:right">
                <el-button type="danger" icon="el-icon-goods">退货</el-button>
                <el-button type="success" icon="el-icon-refresh">换货</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main style="padding: 0 20px;height:100%;margin-bottom:20px;">
        <div style="height:100%">
          <el-table stripe height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="comSize" label="商品尺码" width="110">
            </el-table-column>
            <el-table-column prop="comNo" label="商品货号" width="110">
            </el-table-column>
            <el-table-column prop="originalPrice" label="商品原价" width="140">
            </el-table-column>
            <el-table-column prop="comNumber" label="商品编码" width="110">
            </el-table-column>
            <el-table-column prop="number" label="数量" width="110">
            </el-table-column>
            <el-table-column prop="price" label="单价" width="110">
            </el-table-column>
            <el-table-column prop="total" label="总价" width="110">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button  type="text" size="small">删除订单</el-button>
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
  methods: {}
}
</script>

<style>
.sum {
  text-align: right;
  font-size: 70px;
  line-height: 70px;
}
</style>
