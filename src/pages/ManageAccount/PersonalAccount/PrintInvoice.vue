 <template>
   
  <div class="sqfp">
    <div class="kplc-info">
      <div class="kp-ddsel">
        <div class="kp-selset">
          <span>发票状态：</span>
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </div>
        <div class="kp-selset" style="margin-left:36px;">
          <span>申请时间：</span>
          <template>
            <el-date-picker v-model="dadate" type="date" placeholder="选择日期"></el-date-picker>
          </template>
        </div>
      </div>
      <div class="kpls-tab" style="margin-top: 30px;">
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            max-height="520"
            border
            tooltip-effect="dark"
            :header-cell-style="{background:'#f2f2f2'}"
            style="width: 100%; border:1px solid #EBEEF5;border-right:none;"
            @selection-change="handleSelectionChange"
          >
            <el-table-column prop="sqtime" label="申请时间" align="center" width="100"></el-table-column>
            <el-table-column prop="fptt" label="发票抬头" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column prop="fpje" align="center" label="发票金额" width="80"></el-table-column>
            <el-table-column prop="fptype" align="center" width="120" label="发票类型"></el-table-column>
            <el-table-column prop="fpzt" align="center" width="120" label="发票状态">
              <template slot-scope="scope">
                {{scope.row.fpzt}}
                <span class="fpztDow" @click="fpztDown(scope.row)">（下载）</span>
              </template>
            </el-table-column>
            <el-table-column prop="kddh" align="center" label="快递单号">
              <template slot-scope="scope">
                {{scope.row.kddh}}
                <input
                  type="text"
                  :value="scope.row.kddh"
                  :id="'kddhCopy'+scope.$index"
                  class="kddhCopy"
                >
                <button class="fpztDow"  @click="dhCopy(scope.$index)">（点击复制）</button>
              </template>
            </el-table-column>
            <el-table-column prop="kptime" align="center" width="100" label="开票时间"></el-table-column>
          </el-table>
          <el-pagination
            style="float:right; margin-top:30px;"
            background
            @size-change="handleSizeChange"
            C
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5, 10, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </template>
      </div>
    </div>
  </div>

</template>
<style scoped>
.sqfp {
    width: 988px;
    height: 760px;
    overflow: auto;
    background: #fff;
    float: right;
}
.kplc-info {
    width: 880px;
    height: auto;
    overflow: hidden;
    margin: 40px auto;
}
.kplc-info .kp-ddsel {
    width: 100%;
    height: 65px;
    background: #f0f0f0;
    border-radius: 5px;
}
.kplc-info .kp-ddsel .kp-selset {
    width: 360px;
    height: auto;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    float: left;
    margin-left: 20px;
    margin-top: 15px;
}
.kp-selset .el-select {
    width: 270px;
    display: inline-block;
    position: relative;
}
.kp-selset .el-input {
    width: 270px;
    display: inline-block; 
    position: relative;
    font-size: 14px;
}
.kp-selset .el-input .el-input__inner {
    height: 35px;
    line-height: 35px;
    border: none;
}
.el-input__suffix {
    right: 5px;
    transition: all .3s;
    position: absolute;
    top: 0;
    height: 100%;
    color: #c0c4cc;
    text-align: center;
}
.el-input__suffix-inner {
    pointer-events: all;
}
.el-select-dropdown {
    position: absolute;
    z-index: 1001;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 5px 0;
}
.fpztDow {
    cursor: pointer;
    color: #36a2ed;
}
.kddhCopy {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;
}
</style>
<script>
export default{
     data(){
            return{
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, 
                    {
                        value: '选项2',
                        label: '双皮奶'
                    }
                ],
                value: '',
                dadate: '',
                tableData3: [
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开1',
                        kddh: '14964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开2',
                        kddh: '24964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '34964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '44964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '34964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '34964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '34964684616854654642',
                        kptime: '2016-05-03',
                    },
                    {
                        sqtime: '2016-05-03',
                        fptt: '订单内容订单内容订单内容订单内容订单内容',
                        fpje: '500',
                        fptype: '增值税普通发票（电子）',
                        fpzt: '已开',
                        kddh: '34964684616854654642',
                        kptime: '2016-05-03',
                    },
                    
                ],
                multipleSelection: [],
                total: 400,
                currentPage4: 1,
                pagesize: 3,
            };
        },
        computed: {

        },
        created: function(){

        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                var _this = this;
                console.log(this)
                
            },
            
            //表格
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //下载
            fpztDown(row){
                console.log(row);
            },
            //复制单号
            dhCopy(index){
                // var that =this;
                // console.log(this)
                 var Url2=document.getElementById("kddhCopy"+index);
                 console.log(Url2.value);
                 Url2.select(); // 选择对象
                 document.execCommand("copy"); // 执行浏览器复制命令  
                  
                this.$message({
                  message: '复制成功',
                  type: 'success'
                });
               
            },
            //分页
            handleSizeChange(val) {
                //console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                //console.log(`当前页: ${val}`);
            }

        },
        watch: {

        }
    
}
</script>