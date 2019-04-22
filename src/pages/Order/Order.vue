<template>
  <div class="ContainBox">
    <div class="ContainContent">
      <div class="act-back">
        <div class="BackList" @click="Back">
          <span class="iconfont icon">&#xe6ff;</span> 返回列表
        </div>
      </div>
      <div class="order-contain">
        <div class="order-details">
          <h3>订单详情</h3>
          <div class="order-list">
            <template>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="序号" width="180"></el-table-column>
                <el-table-column prop="name" label="充值金额" width="180"></el-table-column>
                <el-table-column prop="address" label="账户余额"></el-table-column>
                <el-table-column prop="address" label="充值日期"></el-table-column>
                <el-table-column prop="address" label="充值方式"></el-table-column>
              </el-table>
            </template>
          </div>
        </div>
        <div class="order-pay">
          <h3>支付方式</h3>
        </div>
        <div class="order-pay-action">
          <div>
            <div class="pay-fs">
              <div class="pay-selfs payon">
                <img class="pay-dg" src="../../assets/img/p_03.png">
                <img @click="zfqh" class="pay-zfb" src="../../assets/img/p_01.jpg">
              </div>
              <div class="pay-selfs">
                <img class="pay-dg" src="../../assets/img/p_03.png">
                <img @click="zfqh" class="pay-wx" src="../../assets/img/p_06.jpg">
              </div>
              <div class="pay-selfs" style="padding-top:6px;">
                <img class="pay-dg" src="../../assets/img/p_03.png">
                <img @click="zfqh" class="pay-wx" src="../../assets/img/yuepay.jpg">
                <span style="display:inline-block;margin-top:10px;margin-right:10px;color:red;font-weight:bolder;float:right">200.00元</span>
              </div>
            </div>
            <div class="pay-bottom">
              <div class="pay-bott">
                <button class="bott-qd" type="button">确认支付</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ContainBox {
  width: 100%;
  overflow: hidden;
}
.ContainContent {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  margin-top: 72px;
}
.act-back {
  cursor: pointer;
  margin: 10px 0px;
}
.BackList {
  font-size: 16px;
}
.order-details {
  width: 100%;

  height: auto;
  padding-top: 20px;
}
h3 {
  font-size: 18px;
  font-weight: bolder;
}
.order-contain {
  width: 100%;
  height: 800px;
  background: #fff;
  padding-left: 50px;
}
.order-list {
  width: 964px;
  height: auto;
  margin: 20px auto;
}
.order-pay-action {
  width: 964px;
  margin: 0 auto;
}
.pay-fs {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 20px 0px;
}

.pay-fs .pay-selfs {
  float: left;
  width: 153px;
  height: 47px;
  border-radius: 5px;
  border: 1px solid #d8dcd8;
  margin-left: 30px;
  position: relative;
  cursor: pointer;
}

.pay-fs .pay-selfs .pay-dg {
  position: absolute;
  top: 0px;
  right: 0px;
  display: none;
}

.pay-fs .pay-selfs .pay-zfb {
  margin-left: 18px;
  margin-top: 2px;
}

.pay-fs .pay-selfs .pay-wx {
  margin-left: 10px;
  margin-top: 2px;
}

.pay-fs .pay-selfs .pay-ye {
  text-align: center;
  line-height: 47px;
}

.pay-fs .pay-selfs .pay-ye p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.pay-fs .pay-selfs .pay-ye p span {
  color: #ef5236;
}

.pay-fs .pay-selfs {
  float: left;
  width: 153px;
  height: 47px;
  border-radius: 5px;
  border: 1px solid #d8dcd8;
  margin-left: 30px;
  position: relative;
  cursor: pointer;
}

.pay-fs .pay-selfs .pay-dg {
  position: absolute;
  top: 0px;
  right: 0px;
  display: none;
}

.pay-fs .pay-selfs .pay-zfb {
  margin-left: 18px;
  margin-top: 2px;
}

.pay-fs .pay-selfs .pay-wx {
  margin-left: 10px;
  margin-top: 2px;
}

.pay-fs .payon {
  border: 1px solid #01aaee;
}

.pay-fs .payon .pay-dg {
  display: block;
}

.pay-fs .payyeon {
  border: 1px solid #fe7c63;
}

.pay-fs .payyeon .pay-dg {
  display: block;
}

.pay-bottom {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 40px 0px;
}

.pay-bottom p {
  font-size: 14px;
  color: #999;
  text-align: center;
}

.pay-bottom .pay-bott {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 20px;
}

.pay-bottom .pay-bott button {
  width: 136px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #fe7c63;
  background: none;
  margin-right: 34px;
  font-size: 16px;
  cursor: pointer;
}

.pay-bottom .pay-bott .bott-up {
  color: #fe7c63;
  margin-left: 300px;
}

.pay-bottom .pay-bott .bott-qd {
  color: #fff;
  background: #fe7c63;
}
</style>
<script>
</script>