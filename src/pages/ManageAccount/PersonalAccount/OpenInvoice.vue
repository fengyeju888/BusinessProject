<template>
  <div>
    <!-- 填写编辑发票信息部分 -->
    <div v-show="invoiceshow" class="form-contain">
      <h1>填写发票信息</h1>
      <div class="invoice-form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="发票抬头" prop="name1">
            <el-input v-model="ruleForm.name1" placeholder="请输入发票抬头"></el-input>
          </el-form-item>
          <el-form-item label="开票类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择发票类型" style="width:510px;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="税务登记号" prop="name1">
            <el-input v-model="ruleForm.name1"  placeholder="请输入税务登记号"></el-input>
          </el-form-item>
          <el-form-item label="开户银行名称" placeholder="请输入开户银行名称" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="基本开户账号" prop="name1">
            <el-input v-model="ruleForm.name1" placeholder="请输入基本开户账号"></el-input>
          </el-form-item>
          <el-form-item label="注册场所地址" prop="name1">
            <el-input v-model="ruleForm.name1"  placeholder="请输入注册场所地址"></el-input>
          </el-form-item>
          <el-form-item label="注册固定电话" prop="name1">
            <el-input v-model="ruleForm.name1" placeholder="请输入注册固定电话"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="buttons" type="primary" @click="submitForm('ruleForm')">提交</el-button>          
          </el-form-item>
        </el-form>
        <div class="back-invoice">
          <button @click="back" class="back-text">返回</button>
        </div>
      </div>
    </div>

    <!-- 提示填写发票信息部分 -->
    <div class="open-invoice" v-show="!invoiceshow">
      <div class="invoice-info">
        <h3>发票信息</h3>
        <div class="inovice-fill">
          您还没有填写发票信息，请先
          <a href="#" @click="write">填写发票信息</a>
        </div>
      </div>
      <div class="invoice-message">
        <h3>发票信息</h3>
        <div class="invoice-contain">
          <form class="layui-form" action>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <div class="input-block" @click="tabid=1">
                  <input type="radio" name="tabid" value="1" title="电子发票" checked>
                </div>
                <div class="input-block" @click="tabid=2">
                  <input type="radio" name="tabid" value="2" title="纸质发票">
                </div>
              </div>
            </div>
          </form>
          <div class="invoice-box">
            <div class="invoice-kai" v-show="tabid===1"></div>
            <div class="invoice-kai" v-show="tabid===2">
              <el-table
                :data="shaddsz"
                border
                max-height="138"
                tooltip-effect="dark"
                :header-cell-style="{background:'#f2f2f2'}"
                style="width: 100%"
                ref="multipleTable"
              >
                <el-table-column label width="50" align="center">
                  <template slot-scope="scope">
                    <el-radio
                      :label="scope.$index"
                      v-model="addrideo"
                      @change.native="getCurrentRow(scope.$index,scope.row)"
                    >&nbsp;</el-radio>
                  </template>
                </el-table-column>
                <el-table-column prop="name2" label="收件人姓名" align="center" width="100"></el-table-column>
                <el-table-column
                  prop="addss"
                  label="收货人地址"
                  align="center"
                  width
                  show-overflow-tooltip
                ></el-table-column>
                <el-table-column prop="phones" label="收货人电话" align="center" width="120"></el-table-column>
                <el-table-column prop="youb" label="邮编" align="center" width="100"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="add-shadds">
                <span class="iconfont">&#xe727;</span> 新增地址
              </div>
            </div>
            <div class="confrim-box">
              <a class="confrim-invoice" href="#/personal/print">确认开票</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.open-invoice {
  width: 100%;
  height: 100%;
  background: #fff;
}
.invoice-info {
  width: 100%;
  height: 320px;
  border-bottom: 1px solid #eee;
  padding: 30px;
}
h3 {
  font-size: 18px;
  font-weight: bolder;
}
.inovice-fill {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 20px;
  color: gray;
  margin-top: 70px;
}
a {
  display: inline-block;
  color: #1ea3ef;
  cursor: pointer;
  border-bottom: 1px solid #1ea3ef;
}
.invoice-message {
  width: 100%;
  height: 400px;
  background: #fff;
  padding: 30px;
}
.invoice-contain {
  width: 100%;
  height: 100%;
}
.invoice-box {
  width: 100%;
  height: auto;
}
.input-block {
  float: left;
}
.confrim-box {
  width: 100%;
  height: auto;
  padding: 20px 406px;
  box-sizing: border-box;
}
.confrim-invoice {
  display: block;
  width: 120px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #fe7c63;
  background: none;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background: #fe7c63;
  text-align: center;
  line-height: 36px;
}
.add-shadds {
  width: 100%;
  height: 35px;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  margin-top: 2px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
.form-contain {
    position:relative;
  width: 100%;
  height: 760px;
  background: #fff;
  padding: 50px 30px 0px 50px;
}
.invoice-form {
  width: 660px;
  height: auto;
}
h1{
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin:0px 20px 37px -14px;
}
.buttons,.back-text{
 width: 136px;
    height: 44px;
    border-radius: 5px;
    border: 1px solid #fe7c63;
    background: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background: #fe7c63;
}
.buttons {
    margin-top: 10px;
    margin-left:223px
}
.back-invoice{
  position: absolute;
    top: 20px;
    right: 30px;
    width: 120px;
    height: 36px;
}
</style>
<style>
.el-table td .el-button {
  border: none;
  background: none;
  padding: 5px;
  color: #1ea3ef;
}
</style>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      tabid: 1,
      addrideo: "",
      invoiceshow: false,
      shaddsz: [
        {
          name2: "名字1",
          addss: "收货地址收货地址收货地址收货地址",
          phones: "12345678901",
          youb: "222222"
        },
        {
          name2: "名字2",
          addss: "收货地址收货地址收货地址收货地址",
          phones: "12345678901",
          youb: "222222"
        }
      ],
      ruleForm: {
        name1: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name1: [
          { required: true, message: "请输入发票抬头", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    write() {
      this.invoiceshow = true;
    },
    back() {
      this.invoiceshow = false;
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  mounted() {
    layui.use(["form", "layedit", "laydate"], function() {
      var form = layui.form,
        layer = layui.layer;
      form.render();
    });
  }
};
</script>