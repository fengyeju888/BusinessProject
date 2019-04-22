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
            <nav>
                <ul class="nav-list">
                    <li @click='sideNavClick(index)' :class="{on:index==checkindex}" class="nav-list-item" v-for='(item,index) in sideList' :key="index">
                        <a :href="'#'+item.url"><span v-text="item.name" ></span></a>
                        <ul class="sub-nav-list" :class="{active:activeIndex == index}">
                             <span class="iconfont icon iconfj"></span>
                            <li class="sub-nav-list-item"  v-for="(subItem,subIndex) in item.children" :key="subIndex" >
                                <a :href="'#'+subItem.url"><span v-text="subItem.name"></span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
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
  width: 200px;
  height: 800px;
  background: #fff;
  float: left;
  cursor: pointer;
}
.ListRight {
   width: 991px;
  float: right;
}
a {
  display: block;
  height: 100%;
  width: 100%;
}
.active {
  color: #71b1a1;
  background: #c5f0e6;
}
.on{
	background:#c5f0e6;
	border-left:5px solid #5ed9ba;;
}
.ListContent {
  margin-top: 10px;
}
.nav-list{
    width:100%;
    height:auto;
    text-align: center;
}

.nav-list-item{
 width:100%;
    /* height:50px; */
    height:auto;
    font-size:16px;
    line-height:50px;
    border-bottom:1px solid #eee;
    position:relative;
}
.sub-nav-list{
    background: #e8e8e8;
    height:0;
    overflow: hidden;
    transition:height .3s;

}
.sub-nav-list-item{
    border-bottom: 1px solid #dbdbdb;
}
.sub-nav-list.active{
    height:auto;
}
.sub-nav-list-item:last-child{
    border-bottom: none;
}
.iconfj{
    position:absolute;
    right:15px;
    top:0px;

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
      sideList:[
        {
            name:'个人信息',
            children:[],
            url:'/personal/center'
        },
        {
            name:'账户管理',
            url:'/personal/redback',
            children:[
                {
                    name:'红包明细',
                    url:'/personal/redback',
                },
                {
                     name:'账户明细',
                     url:'/personal/account'
                },
                {
                    name:'短信明细',
                    url:'/personal/message'
                }
            ]
        },
        {
            name:'发票管理',
            url:'/personal/bind',
            children:[
                {
                    name:'索取发票',
                    url:'/personal/bind'
                }
            ]
        }
      ],
      activeIndex:0,
      checkindex:0,
    };
  },
  components:{

  },
  methods: {
    Back() {
      this.$router.go(-1);
    },
    sideNavClick(index){
        this.activeIndex = index;
        this.checkindex=index;
        console.log(index)    }
  }
};
</script>
