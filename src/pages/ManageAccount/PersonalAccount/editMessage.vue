<template>
  <div>
    <div class="safely">
      <div class="saf-bj">
        <h2 class="safbj-tit">编辑资料</h2>
        <div class="actset-top">
          <span @click="safsets(1)" :class="{settopon:safset===1}">基本资料</span>
          <span @click="safsets(2)" :class="{settopon:safset===2}">账户安全</span>
          <div class="acttop-line"></div>
        </div>
        <div v-if="safset === 1" class="safe-jczl">
          <div class="safe-txbj">
            <img src="../../../assets/img/g_03.jpg" alt class="safe-txup">
            <div class="safe-upbu">上传头像</div>
          </div>
          <div class="safe-zh" style="padding-top:20px;">
            <div class="zh-lis">
              <div class="zh-biaot">昵称：</div>
              <div class="zh-cents">
                <input type="text" placeholder="请输入" name id>
              </div>
            </div>
            <div class="zh-lis" style="margin-top:40px;">
              <div class="zh-biaot">手机号：</div>
              <div class="zh-cents">
                <input type="text" placeholder="请输入" name id>
              </div>
            </div>
            <button type="button" class="buttons">保存</button>
          </div>
        </div>
        <div v-if="safset === 2" class="safe-zh">
          <div class="zh-lis">
            <div class="zh-biaot">账户：</div>
            <div class="zh-cents">23543641@qq.com</div>
          </div>
          <div class="zh-lis">
            <div class="zh-biaot">原密码：</div>
            <div class="zh-cents">
              <input type="text" placeholder="请输入" name id>
            </div>
          </div>
          <div class="zh-lis">
            <div class="zh-biaot">新密码：</div>
            <div class="zh-cents">
              <input type="text" placeholder="请输入" name id>
            </div>
          </div>
          <div class="zh-lis">
            <div class="zh-biaot">确认密码：</div>
            <div class="zh-cents">
              <input type="text" placeholder="请输入" name id>
            </div>
          </div>
          <button type="button" class="buttons">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      safset: 1
    };
  },
  computed: {},
  created: function() {},
  mounted() {
    this.init();
  },
  methods: {
    init: function() {},
    safsets(index) {
      this.safset = index;
    },
    //页面切换
    comPop(event) {
      const _this = event.target;
      console.log(parent.$("#pandhtml").attr("src"));
      parent.$("#pandhtml").attr("src", _this.name);
    }
  },
  watch: {}
};
</script>

<style scoped>
.safely {
  width: 988px;
  height: 760px;
  background: #fff;
  float: right;
}
.safely .saf-bj {
  width: 890px;
  height: auto;
  overflow: hidden;
  margin-left: 50px;
  margin-top: 25px;
}
.safely .saf-bj .safbj-tit {
  width: 100%;
  height: auto;
  overflow: hidden;
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
.safely .saf-bj .actset-top {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 2;
  margin-top: 36px;
}
.safely .saf-bj .actset-top .settopon {
  color: #fe7c63;
  border-bottom: 2px solid #fe7c63;
}
.safely .saf-bj .actset-top span {
  display: block;
  float: left;
  padding: 6px 10px;
  font-size: 16px;
  color: #666;
  margin-right: 25px;
  cursor: pointer;
}
.safely .saf-bj .actset-top span {
  display: block;
  float: left;
  padding: 6px 10px;
  font-size: 16px;
  color: #666;
  margin-right: 25px;
  cursor: pointer;
}
.safely .saf-bj .actset-top .acttop-line {
  width: 100%;
  height: 0px;
  border-bottom: 1px solid #ededee;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.safely .saf-bj .safe-txbj {
  float: left;
  width: 120px;
  height: 120px;
  margin-top: 50px;
  position: relative;
  border-radius: 50%;
  margin-right: 30px;
}
.safely .saf-bj .safe-txbj .safe-txup {
  border-radius: 50%;
}
.safely .saf-bj .safe-txbj .safe-upbu {
  position: absolute;
  left: 2px;
  bottom: 0;
  height: 40px;
  width: 114px;
  background: url(../../../assets/img/b.png);
  color: #fff;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
}
.safely .saf-bj .safe-zh {
  width: 500px;
  height: auto;
  overflow: hidden;
  margin-top: 50px;
  float: left;
}
.safely .saf-bj .safe-zh .zh-lis {
  width: 100%;
  height: 35px;
  line-height: 33px;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
}
.safely .saf-bj .safe-zh .zh-lis .zh-biaot {
  width: 90px;
  float: left;
  text-align: right;
}
.safely .saf-bj .safe-zh .zh-lis .zh-cents {
  width: 310px;
  float: left;
  margin-left: 10px;
}
.safely .saf-bj .safe-zh .zh-lis .zh-cents input {
  width: 310px;
  height: 33px;
  border-radius: 3px;
  border: 1px solid #d6d6d9;
  float: left;
  padding: 0px 10px;
}
.safely .saf-bj .safe-zh .zh-lis {
  width: 100%;
  height: 35px;
  line-height: 33px;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
}
.safely .saf-bj .safe-zh .zh-lis .zh-biaot {
  width: 90px;
  float: left;
  text-align: right;
}
.safely .saf-bj .safe-zh .zh-lis .zh-cents {
  width: 310px;
  float: left;
  margin-left: 10px;
}
.safely .saf-bj .safe-zh .zh-lis .zh-cents input {
  width: 310px;
  height: 33px;
  border-radius: 3px;
  border: 1px solid #d6d6d9;
  float: left;
  padding: 0px 10px;
}

.safely .saf-bj .safe-zh .buttons {
  margin-top: 15px;
  margin-left: 170px;
}
.buttons {
  margin-top: 10px;
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
</style>