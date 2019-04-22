<template>
	<div>
		<div class="Manage-account">
			<div class="account-left">
				<span class="iconfont icons num-tx"></span>
			</div>
			<div class="account-center">
				<h3>剩余短信条数</h3>
				<h1>10条</h1>
			</div>
			<div class="account-right">
				<button>立即充值</button>
			</div>
		</div>
		<div class="account-content">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="充值记录" name="first">
					<template>
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column prop="date" label="序号" width="180">
							</el-table-column>
							<el-table-column prop="name" label="充值条数" width="180">
							</el-table-column>
							<el-table-column prop="address" label="充值日期">
							</el-table-column>
							<el-table-column prop="address" label="充值方式">
							</el-table-column>
						</el-table>
					</template>
				</el-tab-pane>
				<el-tab-pane label="使用记录" name="second">
					<template>
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column prop="date" label="序号" width="180">
							</el-table-column>
							<el-table-column prop="name" label="所属活动" width="180">
							</el-table-column>
							<el-table-column prop="address" label="活动日期">
							</el-table-column>
							<el-table-column prop="address" label="使用条数">
							</el-table-column>
						</el-table>
					</template>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<style scoped>
	.Manage-account {
		width: 100%;
		height: 126px;
		background: #fff;
	}
	
	.account-left {
		background: #12c88a;
		width: 118px;
		height: 126px;
		float: left;
	}
	
	.icons {
		display: block;
		width: 73px;
		height: 73px;
		border-radius: 50%;
		text-align: center;
		color: #fff;
		float: left;
		line-height: 73px;
		font-size: 30px;
		margin-left: 22px;
		margin-top: 27px;
		background: linear-gradient(#63f1a0, #1acb90);
	}
	
	.account-center {
		width: 170px;
		height: 80px;
		float: left;
		text-align: center;
		border-right: 1px solid #d6d6d9;
		margin-top: 23px;
	}
	
	h3 {
		margin-top: 6px;
		font-size: 16px;
		font-weight: bold;
		line-height: 25px;
	}
	
	h1 {
		font-size: 26px;
		color: #ee1616;
		margin-top: 18px;
		font-weight: bold;
	}
	
	.account-right {
		width: 130px;
		height: 126px;
		float: left;
		text-align: center;
		margin-left: 20px;
	}
	
	button {
		width: 94px;
		height: 33px;
		border-radius: 5px;
		border: none;
		background: #fe7c63;
		font-size: 16px;
		margin-top: 24px;
		color: #fff;
		margin-bottom: 12px;
		cursor: pointer;
	}
	
	.account-content {
		width: 100%;
		height: 624px;
		margin-top: 10px;
		background: #fff;
		padding-top: 35px;
		padding-left: 43px;
		padding-right: 10px;
	}
</style>
<style>
	.el-table__header tr,
	.el-table__header th {
		padding: 0;
		height: 45px;
		background: #f4f4f4;
	}
	
	.el-table__body tr,
	.el-table__body td {
		padding: 0;
		height: 50px;
		background: #fff;
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
				activeName: 'second',
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
				}]
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>