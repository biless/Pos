<template>
  <div style="background:white;">
    <div class="box">
      <el-row v-for="items in menu" style="margin-top:30px">
        <el-col v-bind="items" v-for="item in items" :span="8">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div v-on:click="onClick(item)">
              <div class="image-box">
                <img v-bind:src="item.src" class="image">
              </div>
              <el-row>
                <el-col :span="16">
                  <div class="menu-title">
                    {{item.title}}
                  </div>
                </el-col>
                <el-col :span="8">
                  <div style="text-align:right;margin-top:8px;margin-right:10px;">
                    <icon class="fa-icon" name="sign-in-alt"></icon>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Menu extends Vue {
  menu: any = [
    [
      {
        src: require('../assets/img/shop.png'),
        title: '商品销售',
        routerString: '/shop'
      },
      {
        src: require('../assets/img/idcard.png'),
        title: '会员管理',
        routerString: '/member'
      },
      {
        src: require('../assets/img/folders.png'),
        title: '库存查询',
        routerString: '/inventory'
      }
    ],
    [
      {
        src: require('../assets/img/presentation.png'),
        title: '今日记录',
        routerString: '/record'
      },
      {
        src: require('../assets/img/calendar.png'),
        title: '订单管理',
        routerString: '/order'
        // click: function () {

        // }
      },
      {
        src: require('../assets/img/money.png'),
        title: '退换处理',
        routerString: '/replacement'
        // click: function () {

        // }
      }
    ]
  ]

  onClick (item: any): void {
    this.$router.push(item.routerString)
  }
}
</script>

<style>
.menu-title {
  text-align: left;
  margin-left: 20px;
  line-height: 50px;
}

.box-card {
  margin: auto;
  width: 200px;
  height: 250px;
  box-shadow: 2px 2px 5px 1px gray;
}
.box-card :hover {
  cursor: pointer;
}

.box-card :hover .fa-icon {
  color: #409eff;
}

.image {
  width: 180px;
  height: 180px;
  margin: auto;
  display: block;
}

.image-box {
  background: #ebeef5;
  padding: 10px;
}

.box {
  height: 590px;
  position: absolute;
  left: 100px;
  right: 100px;
  top: 50%;
  transform: translate(0%, -50%);
}

.fa-icon {
  width: auto;
  color: #909399;
  height: 2em;
  max-width: 100%;
  max-height: 100%;
}
</style>
