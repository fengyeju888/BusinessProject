<template>
  <div class="MainContain">
    <div class="NameList">
      <div class="NameLeft">
        <label style="font-size:18px;color:#b6b6b6">活动名称：</label>
        <span style="font-size:18px;color:#f68058;font-weight:bolder;">暖春活动暖春活动</span>
      </div>
      <div class="NameRight">
        <div style="display:inline-block;">
          <label style="font-size:18px">搜索：</label><input class="Search" type="text" placeholder="请输入昵称或者联系电话">
        </div>   
        <button  class="ExportName">导出名单</button>
         <button class="ExportName">刷新</button>
      </div>
      <!-- 表格部分 -->
    </div>
     <div class="TableList">
      <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="姓名"
      width="92">
    </el-table-column>
    <el-table-column
      prop="name"
      label="联系方式"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="奖项名称">
    </el-table-column>
      <el-table-column
      prop="address"
      label="奖品">
    </el-table-column>
      <el-table-column
      prop="address"
      label="中奖时间">
    </el-table-column>
     <el-table-column
      prop="address"
      label="是否核销">
    </el-table-column>
     <el-table-column
      prop="address"
      label="核销方式">
    </el-table-column>
     <el-table-column
      prop="address"
      label="核销时间">
    </el-table-column>
     <el-table-column
      prop="address"
      label="核销员">
    </el-table-column>
     <el-table-column
      prop="address"
      label="操作"
     >
    </el-table-column>
  </el-table>
</template>
     </div>
      <div id="demo3" style="float:right;margin-right:8px;  margin-right: 28px;margin-top:10px;box-sizing:border-box"></div>
  </div>
</template>
<style scoped>
.MainContain {
  width: 1000px;
  height: 800px;
  background: #fff;
}
.NameList {
  width: 100%;
  height: 78px;
  line-height:78px;
  padding:0 15px;
  box-sizing: border-box;
}
.NameLeft{
  float:left;
}
.NameRight{
  float:right;
}
.Search{
  width:242px;
  height:35px;
  border-radius: 5px;
  padding-left:10px;
  box-sizing: border-box;
  border:1px solid #d4d4d4;
}
.ExportName{
  width:121px;
  height:37px;
  background:#fe7c64;
  color:#fff;
  border-radius: 10px;
}
button:nth-of-type(1){
  margin:0 5px;
}
.TableList{
  width:940px;
  height:612px;
  margin:10px auto;
 
}
</style>
<style>
.el-table__header {
    border-collapse: collapse;
}
.el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 45px;
    background:#f4f4f4;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 30px;
    background:#fff;
}
#demo3{
  box-sizing: border-box;
  width: 77%;
}
.layui-table-cell {
    text-align: center;
}
.layui-table-view .layui-table td, .layui-table-view .layui-table th {
    padding: 1px 0;
    border-top: none;
    border-left: none;
}
.layui-laypage-next > em {
  font-size: 13px !important;
}

</style>
<script>
export default{
 data(){
   return{
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: ''
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: ''
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: ''
        }, 
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        }
        ]
   }
 },
 mounted(){
  
  var laypage = layui.laypage;
      laypage.render({
        elem: "demo3",
        count: 100,
        prev:false,
        first: "首页",
        last: "尾页",
        next: "<em>下一页</em>"
      });

 }
  
}
</script>