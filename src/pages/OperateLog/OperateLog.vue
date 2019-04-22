<template>
  <div class="ContainBox">
    <div class="ContainContent">
      <div class="act-back">
        <div class="BackList" @click="Back">
          <span class="iconfont icon">&#xe6ff;</span> 返回列表
        </div>
      </div>
      <div class="operate">
        <div class="operate-log">
          <div class="identifier-left">
            <label>操作行为：</label>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="identifier-right">
            <label>操作时间：</label>
            <template>
              <el-date-picker v-model="dadate" type="date" placeholder="选择日期"></el-date-picker>
            </template>
          </div>
        </div>
        <div class="operate-table">
         
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column prop="date" label="操作行为" >
							</el-table-column>
							<el-table-column prop="name" label="创建内容">
							</el-table-column>
							<el-table-column prop="address" label="操作时间">
							</el-table-column>	
						</el-table>      
        </div>
        <div class="fenye">
<div id="demo3"></div>
        </div>
          
      </div>
    </div>
  </div>
</template>

<style scoped>
.ContainBox {
  width: 100%;
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
.operate {
  width: 100%;
  height: 500px;
  background: #fff;
  padding-top: 40px;
}
.operate-log {
  width: 958px;
  height: 65px;
  margin: 0 auto;
  background: #f0f0f0;
  padding:14px 10px;
}
.identifier-left {
  width: 50%;
  height: auo;
  float: left;
}
.fenye{
  width:958px;
  height:auto;
  margin:0 auto;
  overflow: hidden;
}
.identifier-right {
  width: 50%;
  height: auo;
  float: right;
}
.operate-table{
  width:958px;
  height:auto;
background:red;
margin:30px auto;

 
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
	.el-table th>.cell {
    text-align: center;
}
.el-table td {
    text-align: center;
}
.el-tabs__active-bar {
		background-color: red!important;
	}
	.el-tabs__item:hover {
		color: red!important;
		cursor: pointer;
	}
	.el-tabs__item.is-active {
    color: red!important;
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '111111'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '111'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '11111'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '1111'
				}],
      value: '',
				dadate: '',
    };
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
  components: {},
  methods: {
    Back() {
      this.$router.go(-1);
    },
    sideNavClick(index) {
      this.activeIndex = index;
      this.checkindex = index;
      console.log(index);
    }
  }
};

</script>
