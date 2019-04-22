<template>
  <div class="ContainBox">
    <div class="ContainContent">
          <div class="act-back">
        <div class="BackList" @click="Back">
          <span class="iconfont icon">&#xe6ff;</span> 返回列表
        </div>
      </div>
      <div class="ListLeft">
        <div class="tab">
          <div class="tab-item">
            <router-link to="/set/sum"  :class="{active: '/set/sum'===$route.path}" replace>数据总览</router-link>
          </div>
          <div class="tab-item">
            <router-link to="/set/par" :class="{active: '/set/par'===$route.path}" replace>参与人员</router-link>
          </div>
          <div class="tab-item" >
            <router-link to="/set/lottery" :class="{active: '/set/lottery'===$route.path}" replace>中奖名单</router-link>
          </div>
        </div>
      </div>
      <!-- 右边显示区域----- -->
      <div class="ListRight">
         <keep-alive>
             <router-view></router-view>
         </keep-alive>
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
  height: 300px;
  margin: 0 auto;
  margin-top: 72px;
}
.act-back {
  cursor: pointer;
}
.BackList {
  font-size: 12px;
}
.tab {
  width: 100%;
}
.tab-item {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #dadada;
}
.ListLeft {
  width: 153px;
  height: 800px;
  background: #fff;
  float: left;
  cursor: pointer;
}
.ListRight {
  width: 1042px;
  float: right;
}
a{
    display:block;
    height: 100%;
    width:100%;
}
.active {
  color: #71b1a1;
  border-left: 5px solid #5ed9ba;
  background: #c5f0e6;
}
.ListContent {
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      DataList: [
        { name: "数据总览" },
        { name: "参与人员" },
        { name: "中奖名单" }
      ],
      show: 1
    };
  },
  methods: {
    Back() {
      this.$router.go(-1);
    },
    Change(index) {
      this.show = index + 1;
    }
  }
};
</script>