<template>
  <div class="ContainBox">
    <div class="ContainContent">
      <div class="act-back">
        <div class="BackList" @click="Back">
          <span class="iconfont icon">&#xe6ff;</span> 返回列表
        </div>
      </div>
      <!-- 中间数据部分列表部分 -->
      <div class="ListContent">
          <!-- 左边列表部分 -->
         <div class="ListLeft">
             <!-- 左边导航部分 -->
             <ul class="LeftMenu">
                 <li v-for="(item,index) in DataList"
            :key="index" @click="Change(index)" :class="{active:show === index+1}">{{item.name}}</li>    
             </ul>
         </div>
         <!-- 右边容器-------- -->
         <div class="ListRight">
            <div class="ListTitle">
              <div class=""></div>
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
  height: 300px;
  margin: 0 auto;
  margin-top:72px;
}
.act-back{
    cursor: pointer;
}
.BackList{
    font-size:12px;
}
.LftMeneu{
    width:100%;
}
.LeftMenu>li{
    width:100%;
    height:60px;
    line-height:60px;
    text-align: center;
    border-bottom:1px solid #ccc;
}
.ListLeft{
    width:150px;
    height:600px;
    background:#fff;
    float:left;
    cursor:pointer;
}
.ListRight{
    width:1042px;
    float:right;
}
.active{
    color:#71b1a1;
    border-left: 5px solid #5ed9ba;
    background:#c5f0e6;
}
.ListContent{
    margin-top:10px;
}
</style>
<script>
export default {
 data(){
     return{
         DataList:[{name:"数据总览"},{name:"参与人员"},{name:"中奖名单"}],
         show:1,
        
     }
 },
 methods:{
     Back(){
         this.$router.go(-1)
     },
     Change(index){
          this.show = index + 1;
     }

 }
}
</script>