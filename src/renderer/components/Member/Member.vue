<template>
  <div style="height:100%;width:100%">
    <el-container>
      <el-header style="height:90px">
        <div>
          <el-breadcrumb style="margin-top:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>会员管理</el-breadcrumb-item>
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
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="warning" @click="dialogVisible1 = true">新增会员</el-button>
              </el-button-group>
            </el-col>
          </el-row>
          <el-dialog title="新增会员" :visible.sync="dialogVisible1" width="30%" class="dialog">
            <span>
              会员电话<input type="text"/><br><br>
              会员名称<input type="text"/>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible1 = false">创建</el-button>
            </span>
          </el-dialog>
        </div>
      </el-header>
      <el-main style="padding: 0 20px;height:100%;margin-bottom:20px;">
        <div style="height:100%">
          <el-table stripe height="100%" :data="tableData" style="width:100%;height:100%">
            <el-table-column prop="memPhone" label="会员手机号" width="120">
            </el-table-column>
            <el-table-column prop="memName" label="会员名称" width="120">
            </el-table-column>
            <el-table-column prop="memBalance" label="会员余额" width="120">
            </el-table-column>
            <el-table-column prop="memIntegral" label="会员积分" width="120">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">消费积分</el-button>
                <el-button @click="dialogVisible2 = true" type="text" size="small">充值</el-button>
                <el-dialog title="充值" :visible.sync="dialogVisible2" width="30%" class="dialog">
                  <span>
                    充值金额<input type="text"/><br><br>
                    支付方式<select style="width:173px;height:30px">
                      <option value ="volvo">现金直接支付</option>
                      <option value ="saab">微信支付</option>
                      <option value="opel">刷卡支付</option>
                      <option value="audi">支付宝支付</option>
                    </select><br><br>
                    充值说明<input type="text"/>
                  </span>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible2 = false">充值</el-button>
                  </span>
                </el-dialog>
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
      tableData: [
        {
          memPhone: '13828394738',
          memName: '张三',
          memBalance: '393',
          memIntegral: '3847'
        },
        {
          memPhone: '13828394738',
          memName: '张三',
          memBalance: '393',
          memIntegral: '3847'
        },
        {
          memPhone: '13828394738',
          memName: '张三',
          memBalance: '393',
          memIntegral: '3847'
        },
        {
          memPhone: '13828394738',
          memName: '张三',
          memBalance: '393',
          memIntegral: '3847'
        },
        {
          memPhone: '13828394738',
          memName: '张三',
          memBalance: '393',
          memIntegral: '3847'
        }
      ],
      dialogVisible1: false,
      dialogVisible2: false
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

.dialog{  
  display:flex;   
  align-items:center;  
  justify-content:center;  
  height:100%;
}

input {
  height:25px;
}
</style>
