<template>
  <div class="BoxContain">
    <div class="BoxContent">
      <!-- 创建活动部分 -->
      <div class="ActivityCon">
        <div class="Activity" v-for="(item, index) in CreateList" :key="index">
          <img  class="bg" src="../../assets/img/c_03.png">
          <img  class ="slide" src='../../assets/img/a_09.jpg'>
          <p class="Tips">{{item.name}}</p>
          <button class="djs-but">创建</button>
        </div>
      </div>
      <!-- 分页部分 -->
      <div id="demo3"></div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  width: 97%;
  height:222px;
  margin:4px;
}
.slide{
  width:208px;
  height:226px;
  position:absolute;
  left:100%;
  top:0;
  transition: all  1s;
}
.Activity:hover .slide{
  left:0;
}

.BoxContain {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.BoxContent {
  width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
}
.ActivityCon {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 29px 48px;
  background: #fff;
}
.Activity {
  width: 210px;
  height: 328px;
  position: relative;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-right: 10px;
  overflow: hidden;
}

.Tips {
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}
.djs-but {
  width: 122px;
  height: 38px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 16px;
  border: 1px solid #fa6e58;
  background: #fe7c63;
  color: #fff;
  position: absolute;
  left: 50px;
  bottom: 20px;
}
</style>
<style>
#demo3 {
  width: 100%;
  overflow: hidden;
  background: #fff;
  float: right;
  box-sizing: border-box;
}
.layui-laypage-next > em {
  font-size: 13px !important;
}
.layui-laypage {
  float: right;
}
</style>
<script>
export default {
  data() {
    return {
      CreateList: [ {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        },
        {
          name: "新春活动新春活动"
        }
      ]
    }
  },
  mounted() {
    layui.use(["element", "laypage"], function() {
      var element = layui.element;
      var laypage = layui.laypage;
      laypage.render({
        elem: "demo3",
        count: 100,
        prev:false,
        first: false,
        last: "尾页",
        next: "<em>下一页</em>"
      });
    });
  },
  methods: {}
};
</script>



