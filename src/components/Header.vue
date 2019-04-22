<template>
  <header class="title-header">
    <nav class="header-nav">
        <div class="d-logo">轻舟营销</div>
      <!-- <img class="d-logo" src="../assets/dt_logo.png"> -->
     
      <div class="nav-right">       
          <a href="javascript:" :class="{active: '/createPrograme'===index}" @click="goTo('/createPrograme')">创建活动</a>
          <a href="javascript:"  :class="{active: '/myPrograme'===index}" @click="goTo('/myPrograme')">我的活动</a>
          <a href="javascript:" :class="{active: '/operateLog'===index}" @click="goTo('/operateLog')">操作日志</a>
          <a href="javascript:" :class="{active: '/personal'===index}" @click="goTo('/personal')">个人中心</a>
      </div>
      <div class="nav-left">
        <div class="ico-bor">
          <span class="iconfont icon dow-cd">&#xe69b;</span>
          <div class="cd-title">
            <div class="cd-sjx"></div>
            <div class="cd-list">
              <ul>
                <li>
                  <a href ="/personal">
                    <span class="iconfont icon">&#xe68a;</span>个人中心
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="iconfont icon">&#xe683;</span>发票索取
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="iconfont icon">&#xe63f;</span>账户管理
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="iconfont icon">&#xe63d;</span>退出
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="nav-tx">
          <img class="tx-img" src="../assets/img/w_03.jpg">
          <p>格格巫123</p>
        </div>
        <div class="nav-help">
          <span class="iconfont icon">&#xe6a4;</span>
          <p>帮助</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "App",
  props: {
    navIndex: Number
  },
  data() {
    return {
      index:'/createPrograme'
    };
  },

  created() {},

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    
  },

  methods: {
    goTo(path){
        this.index = path;
        this.$router.push(path)
    }
    
  },
  watch: {}
};
</script>
<style scoped>
/* @import 'assets/styles/global'; */
.title-header {
  width: 100%;
  height: 70px;
  background: #3aa78a;
   position:fixed;
  top:0;
  z-index: 1111111;
  overflow: initial;
}
.header-nav {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
 
}
.nav-left {
  float: right;
  line-height:70px;
}
.d-logo {
  float: left;
  font-size:20px;
  color:#fff;
  font-weight:bolder;
  margin-top:20px;
  margin-right:50px;
}
.ico-bor {
  float: right;
  height: 70px;
}
/* 左边路由导航 */
.nav-right{
    display:flex;
    float:left;
    height:100%;
}
.nav-right>a{
    display:block;
    font-size: 14px;
    height: 92%;
  box-sizing:border-box;
    padding-top: 42px;
    margin-right: 20px;
    color:#fff;
}
/********************** 导航点击变色部分*************************/
.active{
   border-bottom:3px solid goldenrod;
    color:goldenrod!important;
}
.dow-cd {
  float: right;
  display: block;
  width: 26px;
  height: 26px;
  color: #fff;
  background: #97adf8;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 22px;
  line-height: 28px;
  text-align: center;
}
.nav-tx {
  height: 70px;
  float: right;
  margin-right: 10px;
}

.nav-tx>img {
  border-radius: 50%;
  float: left;
  width: 50px;
  height: 50px;
  margin-top: 10px;
}

.dow-cd {
  float: right;
  display: block;
  width: 26px;
  height: 26px;
  color: #fff;
  background: #c4f7e9;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 22px;
  line-height: 28px;
  text-align: center;
}

.nav-tx > p {
  float: left;
  margin-left: 20px;
  font-size: 14px;
  float: left;
  color: #fff;
  line-height: 70px;
}
.nav-help {
  float: right;
  height: 70px;
  line-height: 70px;
  margin-right: 40px;
  cursor: pointer;
}

.nav-help> span {
  display: block;
  float: left;
  color: #fff;
  font-size: 40px;
  margin-right: 10px;
}
.nav-help > p {
  float: left;
  color: #fff;
}

.cd-title {
  padding-top: 10px;
  width: 152px;
  height: auto;
  overflow: hidden;
  position: absolute;
  z-index: 99;
  display:none;
}

.cd-sjx {
  float: right;
  margin-right: 22px;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent #6273f0 transparent transparent;
  transform: rotate(90deg);
} /*顺时针旋转90°*/

.cd-list {
  width: 152px;
  height: auto;
  overflow: hidden;
  background: #6273f0;
}

.cd-list li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #7a89f2;
  transition: 0.5s all ease;
  -moz-transition: 0.5s all ease; /* Firefox 4 */
  -webkit-transition: 0.5s all ease; /* Safari and Chrome */
  -o-transition: 0.5s all ease; /* Opera */
}
.cd-list > li > a {
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100%;
}
.cd-list > li > a > span {
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
  margin-right: 20px;
}
.cd-list > li:last-child {
  border: none;
}
.cd-list > li:hover {
  background: #8391f7;
  transition: 0.5s all ease;
  -moz-transition: 0.5s all ease; /* Firefox 4 */
  -webkit-transition: 0.5s all ease; /* Safari and Chrome */
  -o-transition: 0.5s all ease; /* Opera */
}

.ico-bor:hover .cd-title {
  display:block;
}
</style>