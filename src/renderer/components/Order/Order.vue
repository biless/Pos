<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header style="height:90px">
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
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
      <el-main style="padding: 0 20px;height:100%;margin-bottom:20px;">
        <div style="height:100%">
          <el-table stripe height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="ONumber" label="单号" width="120">
            </el-table-column>
            <el-table-column prop="price" label="价格" width="120">
            </el-table-column>
            <el-table-column prop="realCollect" label="实收" width="150">
            </el-table-column>
            <el-table-column prop="name" label="会员名称" width="120">
            </el-table-column>
            <el-table-column prop="name" label="操作账号" width="120">
            </el-table-column>
            <el-table-column prop="payment" label="支付方式" width="120">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="dialogTableVisible = true" size="small">查看</el-button>                
                <el-button  type="text" size="small" @click="dialogVisible = true">删除订单</el-button>
                <el-dialog title="订单详情" :visible.sync="dialogTableVisible" width="700px" class="dialog" lock-scroll="false">
                  <el-table :data="gridData" height="300px">
                    <el-table-column property="traName" label="商品名"></el-table-column>
                    <el-table-column property="traSize" label="商品尺码"></el-table-column>
                    <el-table-column property="traCode" label="商品货号"></el-table-column>
                    <el-table-column property="traNumber" label="商品编号"></el-table-column>
                    <el-table-column property="number" label="数量"></el-table-column>
                    <el-table-column property="uPrice" label="单价"></el-table-column>
                    <el-table-column property="total" label="总价"></el-table-column>
                    <el-table-column property="traClass" label="商品分类"></el-table-column>
                  </el-table>
                </el-dialog>
                <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" class="dialog">
                  <span>确定删除？</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native.prevent="deleteRow(scope.$index, tableData, dialogVisible = false)">确 定</el-button>
                  </span>
                </el-dialog>
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
                <el-card style="margin:5px 0px;height:60px;width:400px;padding:0px;" :body-style="{ padding: '5px' }">
                  <div>
                    <div style="margin-bottom:10px;">
                      <el-row>
                        <el-col :span="8">
                          微信支付 : 123
                        </el-col>
                        <el-col :span="8">
                          现金支付 : 456
                        </el-col>
                        <el-col :span="8">
                          刷卡支付 : 789
                        </el-col>
                      </el-row>
                    </div>

                    <div style="margin-bottom:2px;">
                      <el-row>
                        <el-col :span="8">
                          支付宝支付 : 123
                        </el-col>
                        <el-col :span="8">
                          余额支付 : 456
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
      tableData: [
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        },
        {
          ONumber: '12345',
          price: '100',
          realCollect: '99',
          name: '刘德华',
          payment: '微信支付'
        }
      ],
      gridData: [
        {
          traName: '拨浪鼓',
          traSize: 'big',
          traCode: '12345',
          traNumber: '54321',
          number: '2',
          uPrice: '20',
          total: '40',
          traClass: '玩具'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '帽子',
          traSize: 'big',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '40',
          total: '40',
          traClass: '帽子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        },
        {
          traName: '童袜',
          traSize: 'small',
          traCode: '12345',
          traNumber: '54321',
          number: '1',
          uPrice: '20',
          total: '20',
          traClass: '袜子'
        }
      ],
      value1: new Date(),
      dialogVisible: false,
      dialogTableVisible: false
    }
  },
  methods: {
    deleteRow: function (index, rows) {
      rows.splice(index, 1)
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

.dialog{  
  display:flex;   
  align-items:center;  
  justify-content:center;  
  height:100%;
}
</style>
