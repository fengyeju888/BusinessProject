<template>
	<div class="bindbox">
		<div class="Header-bind">
			<h1 class="header-bind-open">开票流程说明</h1>
			<p>
				1.选择试用可免费使用3天，参与人数20人，到期将关闭活动<br> 2.选择试用可免费使用3天，参与人数
				<br> 3.选择试用可免费使用3天，参与人数20人，到期将关闭活动且清空试用数据
				<br> 4.选择试用可免费使用3天
			</p>
			<button class="buttons">查看开票记录</button>
		</div>
		<div class="bind-time-box">
			<div class="bind-open">
				<div class="identifier-left">
					<label>订单编号：</label>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="identifier-right">
					<label>订单时间：</label>
					<template>
						<el-date-picker v-model="dadate" type="date" placeholder="选择日期">
						</el-date-picker>
					</template>
				</div>
			</div>
			<div class="money-sum">
				<p class="select">已选<span class="select-two">2</span>项,金额共计<i class="select-sum">999</i>元</p>
				<a class="open-button" href="#/personal/invoice">开发票</a>
				<span class="text-tips">(满100元免邮费)</span>
			</div>
		</div>
		<div class="kpls-tab">
			<template>
				<el-table ref="multipleTable" :data="tableData3" border height="290" tooltip-effect="dark" :header-cell-style="{background:'#f2f2f2'}" style="width: 100%; border:1px solid #EBEEF5;border-right:none;" @selection-change="handleSelectionChange">
					<el-table-column type="selection" label="全选" align="center" width="55">
					</el-table-column>
					<el-table-column prop="bianh" label="订单编号" align="center" width="120">
					</el-table-column>
					<el-table-column prop="nr" label="订单内容" align="center" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="date" align="center" label="订单时间" width="120">
					</el-table-column>
					<el-table-column prop="ddje" align="center" width="120" label="订单金额（元）">
					</el-table-column>
					<el-table-column prop="kkje" align="center" width="120" label="可开金额（元）">
					</el-table-column>
				</el-table>
				<el-pagination style="float:right; margin-top:30px;" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</template>
		</div>
	</div>
</template>
<style scoped>
	.bindbox {
		width: 100%;
		height: auto;
		background: #fff;
	}
	
	.Header-bind {
		width: 100%;
		height: 188px;
		background: #fff;
		padding: 20px;
		position: relative;
		border-bottom: 1px solid #eeeeee;
	}
	
	.header-bind-open {
		width: 100%;
		font-size: 18px;
		font-weight: bold;
		color: #333;
		margin-top: 10px;
		margin-left: 20px;
	}
	
	p {
		font-size: 14px;
		color: #999;
		line-height: 25px;
		padding-left: 35px;
		margin-top: 20px;
	}
	
	.buttons {
		width: 120px;
		height: 35px;
		position: absolute;
		top: 15px;
		right: 40px;
		font-size: 14px;
		margin-top: 10px;
		border-radius: 5px;
		border: 1px solid #fe7c63;
		background: none;
		font-size: 16px;
		cursor: pointer;
		color: #fff;
		background: #fe7c63;
	}
	
	.bind-time-box {
		width: 100%;
		height: auto;
	}
	
	.bind-open {
		width: 880px;
		height: 65px;
		background: #f0f0f0;
		border-radius: 5px;
		margin: 20px auto;
		padding: 12px 37px;
	}
	
	.identifier-left {
		width: 50%;
		height: auo;
		float: left;
	}
	
	.identifier-right {
		width: 50%;
		height: auo;
		float: right;
	}
	
	.money-sum {
		width: 100%;
		height: 57px;
		line-height: 34px;
		padding-left: 19px;
	}
	
	.select {
		display: inline-block;
		font-size: 16px;
		color: black;
	}
	
	.open-button {
		display: inline-block;
		cursor: pointer;
		color: rgb(255, 255, 255);
		border-radius: 5px;
		border-width: 1px;
		border-style: solid;
		border-color: rgb(254, 124, 99);
		border-image: initial;
		background: rgb(254, 124, 99);
		padding: 2px 38px;
		margin: 0 20px;
	}
	
	.select-two,
	.select-sum {
		color: rgb(238, 22, 22);
		font-weight: bolder;
	}
	
	.text-tips {
		color: rgb(238, 22, 22);
	}
	.kpls-tab{
		width:100%;
		padding:10px 48px;
		height:auto;
		overflow: hidden;
	}
</style>
<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				tableData3: [{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					},
					{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					},
					{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					},
					{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					},
					{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					},
					{
						bianh: '3546875652',
						nr: '订单内容订单内容订单内容订单内容订单内容',
						date: '2016-05-03',
						ddje: '500',
						kkje: '1000'
					}
				],
				value: '',
				dadate: '',
				multipleSelection: [],
				total: 400,
				currentPage4: 1,
				pagesize: 3,
			}
		},
		methods: {
			init() {
				var _this = this;

			},
			//表格
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			//分页
			handleSizeChange(val) {
				//console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				//console.log(`当前页: ${val}`);
			},
			kfp(name) {
				parent.$("#pandhtml").attr("src", name);
			}

		},
		watch: {

		}
	}
</script>