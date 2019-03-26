<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header style="height:90px">
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品销售</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-row style="margin:10px;">
            <el-col :span="5">
              <el-input placeholder="请输入商品编码" prefix-icon="el-icon-search" :clearable="false">
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-button-group style="margin-left:10px;">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="warning">更多条件</el-button>
              </el-button-group>
            </el-col>
            <el-col :offset="5" :span="8">
              <div style="text-align:right">
                <el-button type="danger" icon="el-icon-refresh">清空</el-button>
                <el-button type="success" icon="el-icon-goods" @click="dialogVisible = true">结算</el-button>
              </div>
            </el-col>
          </el-row>
          <el-dialog title="结算" :visible.sync="dialogVisible" width="30%" class="dialog">
            <span>
              支付方式<select style="width:173px;height:30px">
                <option value ="volvo">现金直接支付</option>
                <option value ="saab">微信支付</option>
                <option value="opel">刷卡支付</option>
                <option value="audi">支付宝支付</option>
              </select><br><br>
              会员号码<br><br>
              优&nbsp;&nbsp;惠&nbsp;&nbsp;卷<br><br>
              支付金额<span>0</span>元<br><br>
              收款金额<input type="text"/><br><br>
              找&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;零
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">支付完成</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </span>
          </el-dialog>
        </div>
      </el-header>
      <el-main style="padding: 0 20px;height:100%">
        <div style="height:100%">
          <el-table height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="date" label="商品名" width="150">
            </el-table-column>
            <el-table-column prop="name" label="码数" width="100">
            </el-table-column>
            <el-table-column prop="province" label="是否是赠品" width="120">
            </el-table-column>
            <el-table-column prop="city" label="零售价" width="100">
            </el-table-column>
            <el-table-column prop="address" label="实际价格" width="100">
            </el-table-column>
            <el-table-column prop="zip" label="数量" width="100">
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer style="height:100px;">
        <div style="height:80px">
          <el-row>
            <el-col :span="12">
              <div>
                <el-card style="margin:5px 0px;height:80px;width:300px;padding:0px;" :body-style="{ padding: '5px' }">
                  <div>
                    <div style="margin-bottom:2px;">
                      会员编号 : 18273667366
                    </div>

                    <div style="margin-bottom:2px;">
                      <el-row>
                        <el-col :span="12">
                          名称 : 某某某
                        </el-col>
                        <el-col :span="12">
                          余额 : 123456
                        </el-col>
                      </el-row>
                    </div>

                    <div>
                      <el-row>
                        <el-col :span="8">
                          总价 : 0元
                        </el-col>
                        <el-col :span="8">
                          优惠 : 0元
                        </el-col>
                        <el-col :span="8">
                          退款 : 0元
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right;font-size: 50px;line-height: 80px;">
                <span style="margin:auto">应收
                  <span style="color:red;">100</span>元</span>
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
      dialogVisible: false
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
