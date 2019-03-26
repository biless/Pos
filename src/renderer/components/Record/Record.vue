<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header>
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>今日记录</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-row style="margin:10px;">
            <el-col :span="5">
              <div class="block">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" :clearable="false">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="6">
              <el-button-group style="margin-left:10px;">
                <el-button type="primary" icon="el-icon-search">查询订单</el-button>
                <!-- <el-button type="warning">更多条件</el-button> -->
              </el-button-group>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <div style="height:100%">
          <el-table stripe height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="rechMoney" label="充值金额" width="120">
            </el-table-column>
            <el-table-column prop="rechTime" label="充值时间" width="120">
            </el-table-column>
            <el-table-column prop="memName" label="会员名称" width="150">
            </el-table-column>
            <el-table-column prop="memPhone" label="会员电话" width="120">
            </el-table-column>
            <el-table-column prop="name" label="操作账号" width="120">
            </el-table-column>
            <el-table-column prop="payment" label="充值方式" width="120">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>                
                <el-button type="text" size="small">删除订单</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer style="height:80px;">
        <div style="height:60px">
          <el-row>
            <el-col :span="12">
              <div>
                <el-card style="margin:5px 0px;height:60px;width:280px;padding:0px;" :body-style="{ padding: '5px' }">
                  <div>
                    <div style="margin-bottom:10px;">
                      <el-row>
                        <el-col :span="12">
                          微信支付 : 123
                        </el-col>
                        <el-col :span="12">
                          现金支付 : 456
                        </el-col>
                      </el-row>
                    </div>

                    <div style="margin-bottom:2px;">
                      <el-row>
                        <el-col :span="12">
                          支付宝支付 : 123
                        </el-col>
                        <el-col :span="12">
                          刷卡支付 : 789
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right;font-size: 50px;line-height: 80px;">
                <span style="margin:auto">合计
                  <span style="color:red;">1947</span>元</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tableData: [],
      value1: new Date()
    }
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
