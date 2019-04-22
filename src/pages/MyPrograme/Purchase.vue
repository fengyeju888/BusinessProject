<template>
  <div class="ContainBox">
    <div class="ContainContent">
		<div class="act-back">
        <div class="BackList">
          <span class="iconfont icon">&#xe6ff;</span> 返回列表
        </div>
      </div>
		<div class="purchase-contain">
               <div class="purchase-box" v-for='(item,index) in purchaselist' :key="index">
        <div class="purchase-img">
          <img class="purchase-bg" src="../../assets/img/purchase.jpg">
          <div class="purchase-bottom">暖春活动暖春活动</div>
        </div>
        <div class="purchase-pay">
          <div class="purchase-content">
            <h3>
              原价：
              <span class="oldprice">¥100</span>
            </h3>
            <h2>
              惊喜价：
              <span class="suprise">¥100</span>
            </h2>
            <p>说明数说明数说明数说明数说明数说明数说明数说明数说明数说明数</p>
            <a class="atonce" href="#">立刻购买</a>
          </div>
        </div>
      </div>
		</div>
 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchaselist: [
        {
          title: "暖春活动暖春活动",
          old: "¥100",
          suprise: "¥100",
          info: "说明数说明数说明数说明数说明数说明数说明数说明数说明数说明数"
		},
		{
          title: "暖春活动暖春活动",
          old: "¥100",
          suprise: "¥100",
          info: "说明数说明数说明数说明数说明数说明数说明数说明数说明数说明数"
		},
		{
          title: "暖春活动暖春活动",
          old: "¥100",
          suprise: "¥100",
          info: "说明数说明数说明数说明数说明数说明数说明数说明数说明数说明数"
        }
      ]
    };
  }
};
</script>

<style scoped>
.ContainBox {
  width: 100%;
  overflow: hidden;
}
.ContainContent {
  width: 1200px;
  height: 746px;
  margin: 0 auto;
  margin-top: 72px;
  background: #fff;
}
.purchase-contain{
	width:90%;
	height:auto;
	padding:25px 50px;
	 border-bottom:1px solid #eee;
	overflow: hidden;
	margin:0 auto;
}
.purchase-box {
  width: 322px;
  height: 523px;
  float:left;
 
}
.act-back{
	background:#f2f3f5;
}
.purchase-img {
  width: 201px;
  height: 361px;
  margin: 0 auto;
}
.purchase-bg {
  width: 100%;
  height: 267px;
}
.purchase-bottom {
  width: 100%;
  text-align: center;
  height: 83px;
  line-height: 83px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  background: #f94c8c;
}
.purchase-pay {
  width: 100%;
  height: 160px;
  border-right: 1px dashed #cbcbcb;
}
.purchase-content {
  width: 222px;
  height: 100%;
  margin: 0 auto;
}
h2,
h3 {
  text-align: center;
  margin-bottom: 4px;
}
.oldprice,
.suprise {
  text-decoration: line-through;
  color: red;
}
p {
  margin-top: 15px;
  line-height: 20px；;
}
.atonce {
  display: block;
  width: 121px;
  height: 36px;
  background: #fc795b;
  color: #fff;
  border-radius: 5px;
  margin: 5px auto;
  text-align: center;
  line-height: 36px;
  margin-top: 8px;
}
</style>


