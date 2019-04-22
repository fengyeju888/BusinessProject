<template>
  <div class="home">
    <div class="home-top">
      <div class="top-cent">
        <ul class="top-nav">
          <li
            v-for="(item,index) in toplist"
            :key="index"
            :class="{active:showtit === index+1}"
            @click="topnav(index)"
          >{{item.name}}</li>
        </ul>
        <a href="#/actcjlist">
          <img class="crea-img" style="cursor: pointer;" src="../../assets/img/w_07.jpg">
        </a>
      </div>
    </div>
    <div class="content">
      <div class="home-cont" style="padding-bottom: 40px;">
        <div class="home-list" v-for="(item,index) in MyList" :key="index">
          <!-- 提示部分 -->
          <!-- <div class="pay-zt">未支付</div> -->
          <div class="cont-list">
            <div class="act-ts act01">
              未支付的活动最多
              <span>20</span>人参与
            </div>
            <img src="../../assets/img/w_11.jpg" alt class="clist-img">
            <div class="clist-right">
              <div class="cright-top">
                <div class="act-text">
                  <div class="text-title">
                    <input type="text" placeholder="这里填写活动标题" class="ttit-inp">
                  </div>
                  <p class="te-p">
                    <span>活动编号：</span>
                    {{item.id}}
                  </p>
                  <p class="te-p">
                    <span>活动时间：</span>
                    {{item.time}}
                  </p>
                  <p class="te-p">
                    <span>活动做大参与人数：</span>
                    <em class="color-wzf">{{item.number}}</em>
                  </p>
                </div>
                <div class="act-ybp">
                  <div class="WarmTips" style="display:none;">
                    <p>1.免费版上线人数为30人上线时间</p>
                    <p>1.免费版上线人数为30人上线时间</p>
                    <p>1.免费版上线人数为30人上线时间</p>
                  </div>
                  <div class="act-ybp-t">               
                     <div data-v-d8d6d69a class="nav-help">
                    <span data-v-d8d6d69a class="iconfont icon texti"></span>
                  </div>
                    <img class="act-img" src="../../assets/img/free.gif">
                    <p class="act-tips"></p>
                    <div class="act-bottom">
                      <span>活动限制：</span>
                      <em>{{item.limit}}</em>
                      <i class="UpdateNumner">升级人数</i>
                    </div>
                  </div>
                </div>
                <div class="act-but">
                  <!-- 点击活动设置按弹框------------ -->
                  <div class="but-ann" @click="centerDialogVisible = true">
                    <span class="iconfont icon">&#xe659;</span>活动设置
                  </div>
                  <!-- 点击预览按钮------------- -->
                  <div class="but-ann" @click="Preview">
                    <span class="iconfont icon">&#xe603;</span>预览
                  </div>
                  <!-- 点击活动数据预览跳转页面 -->
                  <div class="but-ann">
                    <a href="#/set">
                      <span style="font-size: 13px;" class="iconfont icon">&#xe624;</span>活动数据
                    </a>
                  </div>
                </div>
                <div class="act-djs djspos">
                 <button class="djs-but">发布活动</button> 
                 <button class="djs-but" style="display:none;background:#cccccc;color:#fefefe">已发布</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----------------------- 活动设置弹出框部分-------------------- -->
    <el-dialog title :visible.sync="centerDialogVisible" width="30%" customClass="Change" center>
      <div class="Designation">
        <p class="Spring" style="padding-left:15px;">
          <span class="ptitle">活动名称:</span>
          <input type="text" placeholder="暖春活动">
        </p>
        <p class="Spring" style="padding-left:15px;">
          <span class="ptitle">活动时间:</span>
          <input type="text" placeholder="2019.03.12-2019.03.20">
        </p>
        <p class="Spring">
          <span class="ptitle">最大参与人数:</span>
          <input style="width:84px;" type="text" placeholder="不限制">
          <b>可使用本月活动7天，升级月版时间延长</b>
          <i>升级人数</i>
        </p>
        <p class="Spring">
          <span class="ptitle">最大参与人数:</span>
          <input type="text" style="width:84px;" placeholder="30人">
          <b>升级后人数不限制</b>
          <i>升级人数</i>
        </p>
      </div>
      <p class="SpringTips">活动正式发布后 活动名称 活动时间不得更改</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">发布</el-button>
      </span>
    </el-dialog>
    <!-------------------- 预览设置部分-------------------------- -->

    <el-dialog
      title="预览"
      :visible.sync="centerDialogVisible1"
      width="30%"
      customClass="Change1"
      center
    >
      <div class="Change1Left">
        <img src="../../assets/img/peview.gif">
      </div>
      <div class="Change1Center">
        <img src="../../assets/img/erweima.gif">
        <p class="Copy_contain">
          wwww:ffffffffff
          <span class="copy">复制</span>
        </p>
        <p style="font-size:10px;color:gray;line-height:1.5">选择下载二维码或者下载链接复制放到你得公众号或者自定义回复菜单中</p>
      </div>
      <div class="Change1Righter">
        <p>微信扫一扫</p>
        <span slot="footer" class="dialog-footer footer-top">
          <el-button type="primary" @click="centerDialogVisible = false">下载二维码</el-button>
        </span>
        <span slot="footer" class="dialog-footer footer-bottom" style="margin-bottom:30px;">
          <el-button type="primary" @click="centerDialogVisible = false">编辑活动</el-button>
        </span>
      </div>
      <!-- -->
    </el-dialog>
  </div>
</template>
<script type='text/ecmascript-6'>
import util from "../../assets/js/util";
import $ from "jquery";
export default {
  name: "App",
  props: [""],
  data() {
    return {
      toplist: [{ name: "全部" }, { name: "待开始" }, { name: "活动中" }],
      MyList: [
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
          limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
          limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
         limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
          limit: "3天"
        },
        {
          id: "V644581",
          time: "2019.03.12-2019.03.20",
          number: "30",
          update: "不限制人数升级为一周",
          limit: "3天"
        }
      ],
      showtit: 1,
      centerDialogVisible: false,
      centerDialogVisible1: false
    };
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    topnav(index) {
      this.showtit = index + 1;
       
    },
    // 预览弹窗
    Preview() {
      this.centerDialogVisible1 = true;
    },
    mouscnvg() {
      $(".act01").show();
    },
    mouscnvg2() {
      $(".act01").hide();
    },
    //复制功能
    copyUrl() {
      var Url2 = document.getElementById("addww");
      Url2.select(); // 选择对象
      document.execCommand("copy"); // 执行浏览器复制命令
      this.$message({
        message: "复制成功",
        type: "success"
      });
    }
  },
  watch: {}
};
</script>
<style lang='scss' scoped>
@import "../../assets/styles/global.scss";
.WarmTips{
  width:275px;
  height:67px;
  background:#686667;
  position:absolute;
  top:20px;
  z-index: 111111111111;
}
.UpdateNumner{
width:67px;
height:21px;
display:inline-block;
border-radius:10px;
border:1px solid #50a083;
line-height:21px;margin-left:13px;
}
.nav-help{
  position:absolute;
  right:10px;
  top:4px;
}
.texti{
  width:20px;
  height:16px;
  color:#46ad84;
}
.act-tips {
  width: 100%;
  height: 20px;
  font-size: 14px;
  text-align: center;
  margin: 10px 0px;
}
.act-bottom {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 12px;
}
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .home-pop {
    width: 600px;
    height: 400px;
    background: #fff;
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    h2 {
      width: 100%;
      height: auto;
      overflow: hidden;
      text-align: center;
      font-weight: 100;
      color: #fff;
      padding: 20px 0px;
      font-size: 18px;
      background: #4c0da0;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .pop-gb {
      position: absolute;
      top: 18px;
      right: 18px;
      font-size: 22px;
      color: #fff;
      cursor: pointer;
    }
    .pop-text {
      padding: 40px;
      width: 100%;
      height: auto;
      overflow: hidden;
      p {
        font-size: 14px;
        color: #666;
        line-height: 22px;
      }
      .pop-taoc {
        width: 100%;
        height: auto;
        overflow: hidden;
        font-size: 14px;
        color: #333;
        line-height: 50px;
        span {
          font-weight: bold;
          color: #ff0000;
        }
      }
      .mmset {
        width: 100%;
        height: auto;
        overflow: hidden;
        font-size: 14px;
        color: #333;
        line-height: 33px;
        margin-bottom: 22px;
        .padset-left {
          width: 130px;
          height: auto;
          overflow: hidden;
          float: left;
          text-align: right;
          padding-right: 5px;
        }
        .padset-right {
          width: 320px;
          float: left;
          height: auto;
          overflow: hidden;
          input {
            width: 310px;
            height: 33px;
            border-radius: 5px;
            border: 1px solid #d6d6d9;
            padding: 0px 10px;
            box-sizing: border-box;
          }
        }
        button {
          margin-top: 10px;
          width: 136px;
          height: 44px;
          border-radius: 5px;
          border: 1px solid #fe7c63;
          background: none;
          margin-right: 34px;
          font-size: 16px;
          cursor: pointer;
        }
        .bott-up {
          color: #fe7c63;
          margin-left: 100px;
        }
        .bott-qd {
          color: #fff;
          background: #fe7c63;
        }
      }
      .hdaddress {
        width: 100%;
        height: auto;
        overflow: hidden;
        line-height: 33px;
        .add-tit {
          float: left;
          width: 130px;
          text-align: right;
          margin-right: 10px;
          font-size: 14px;
        }
        .add-ww {
          float: left;
          font-size: 16px;
          position: relative;
          input {
            opacity: 0;
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
          }
        }
        .add-cop {
          width: 64px;
          height: 33px;
          float: left;
          border-radius: 6px;
          font-size: 16px;
          color: #fff;
          background: #fe7c63;
          border: none;
          margin-left: 20px;
          cursor: pointer;
        }
      }
      .hdadd-bottom {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        .hdadd-sx {
          width: 0px;
          height: 320px;
          position: absolute;
          top: 10px;
          right: 240px;
          border-right: 1px solid #ececed;
        }
        .hdaddbot-left {
          width: 400px;
          height: auto;
          overflow: hidden;
          float: left;
          text-align: center;
          margin-top: 40px;
          margin-left: 40px;
          .hdadd-tkbt {
            width: 100%;
            height: auto;
            overflow: hidden;
            font-size: 22px;
            color: #333;
            margin-bottom: 18px;
          }
          .hdadd-botton {
            width: 100%;
            height: auto;
            overflow: hidden;
            margin: 18px 0px;
            button {
              width: 112px;
              height: 33px;
              border-radius: 5px;
              background: #fe7c63;
              color: #fff;
              font-size: 16px;
              border: none;
              cursor: pointer;
            }
          }
          .hdadd-sm {
            width: 100%;
            height: auto;
            overflow: hidden;
            font-size: 14px;
            color: #333;
            line-height: 22px;
          }
        }
        .hdbot-right {
          width: 220px;
          height: auto;
          overflow: hidden;
          float: left;
          margin-left: 100px;
          text-align: center;
          .hdadd-tkbt {
            width: 100%;
            height: auto;
            overflow: hidden;
            font-size: 22px;
            color: #333;
            margin-bottom: 40px;
            margin-top: 30px;
          }
          .hdadd-but {
            width: 112px;
            height: 33px;
            border-radius: 5px;
            background: #fe7c63;
            color: #fff;
            font-size: 16px;
            border: none;
            cursor: pointer;
            margin-top: 23px;
          }
          .hdadd-sm {
            width: 100%;
            height: auto;
            overflow: hidden;
            font-size: 14px;
            color: #333;
            line-height: 22px;
            margin-top: 60px;
          }
          a {
            display: block;
            font-size: 14px;
            color: #5367fe;
            margin-top: 18px;
          }
        }
      }
    }
  }
  .home-top {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
    margin-top: 71px;
    .top-cent {
      width: 1200px;
      height: auto;
      overflow: hidden;
      margin: 5px auto;
      .top-nav {
        float: left;
        margin-left: 13px;
        margin-top: 40px;
        margin-bottom: 8px;
        li {
          padding: 5px 10px;
          font-size: 16px;
          float: left;
          cursor: pointer;
          margin-right: 30px;
          color: #666666;
        }
        .active {
          color: #fe7c63;
          border-bottom: 2px solid #fe7c63;
        }
      }
      .crea-img {
        float: right;
        margin-top: 13px;
      }
      p {
        margin-right: 100px;
        float: right;
        font-size: 12px;
        color: #666666;
        margin-left: 20px;
        line-height: 50px;
        padding: 15px 0px;
      }
    }
  }
  .home-cont {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 7px;
    .home-list {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;
      padding-top: 10px;
    }
    .cont-list {
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #fff;
      .clist-img {
        float: left;
        width: 146px;
        height: 169px;
      }
      .clist-right {
        width: 1043px;
        height: auto;
        overflow: hidden;
        float: right;
        .cright-top {
          height: auto;
          overflow: hidden;
          width: 100%;
          border-bottom: 1px solid #eeeeee;
          padding: 28px 0px 12px 20px;
          .act-text {
            width: 290px;
            height: 130px;
            float: left;
            border-right: 1px dashed #dedede;
            .text-title {
              width: 100%;
              height: auto;
              overflow: hidden;
              margin-bottom: 5px;
              .ttit-inp {
                font-size: 18px;
                border: none;
                width: 150px;
                height: 22px;
                float: left;
              }
              .ttit-inp::placeholder {
                font-size: 18px;
                color: #ccc;
              }
              span {
                font-size: 23px;
                float: left;
                margin-left: 5px;
                color: #29bafb;
                font-weight: 600;
              }
            }
            p {
              font-size: 14px;
              color: 666666;
              line-height: 28px;
              span {
                color: #999;
              }
              .color-wzf {
                color: #fa6e58;
              }
            }
          }
          .act-ybp {
            width: 297px;
            height: 130px;
            float: left;
            border-right: 1px dashed #dedede;
            overflow: hidden;
            position: relative;
            .wc-ybp {
              width: 143px;
              height: 130px;
              position: relative;
              float: left;
              margin-left: 43px;
              overflow: hidden;
              .yxdx {
                width: 90px;
                height: auto;
                overflow: hidden;
                z-index: 10;
                position: absolute;
                top: 50px;
                left: 25px;
                text-align: center;
                .yx-sz {
                  font-size: 20px;
                  font-weight: 600;
                  color: #666666;
                  span {
                    color: #28b5fb;
                  }
                }
                .yx-shuom {
                  margin-top: 10px;
                  font-size: 10px;
                  color: #c7c7c7da;
                }
              }
            }
            .act-button {
              width: 70px;
              height: 20px;
              border-radius: 20px;
              font-size: 13px;
              color: #29b7fb;
              border: 1px solid #29b7fb;
              position: absolute;
              top: 0px;
              right: 10px;
              background: none;
              cursor: pointer;
            }
          }
          .act-but {
            width: 152px;
            height: 130px;
            float: left;
            border-right: 1px dashed #dedede;
            overflow: hidden;
            padding-top: 10px;
            .but-ann {
              margin-bottom: 8px;
              margin-left: 16px;
              width: 108px;
              height: 26px;
              line-height: 24px;
              border: 1px solid #cccccc;
              border-radius: 3px;
              text-align: center;
              font-size: 13px;
              color: #999;
              cursor: pointer;
              .icon {
                font-size: 16px;
                margin-right: 10px;
                color: #999;
              }
            }
          }
          .act-djs {
            width: 269px;
            height: 130px;
            overflow: hidden;
            float: left;
            text-align: center;
            .djs-h1 {
              margin-top: 14px;
              font-size: 22px;
              color: #666;
            }
            .djs-h3 {
              margin-top: 15px;
              font-size: 18px;
              color: #29b7fb;
            }
            .djs-but {
              width: 122px;
              height: 32px;
              cursor: pointer;
              border-radius: 3px;
              border: none;
              font-size: 16px;
              background: #fa6e58;
              color: #fff;
              margin-top: 33px;
            }
          }
        }
        .cringh-bottom {
          width: 100%;
          height: auto;
          overflow: hidden;
          padding-left: 20px;
          .sel-hd {
            width: 100%;
            height: auto;
            overflow: hidden;
            margin-top: 12px;
            span {
              float: left;
              font-size: 16px;
              color: #333;
              display: block;
              line-height: 25px;
            }
            .yx-hdlist {
              float: left;
              li {
                float: left;
                padding: 5px 6px;
                margin-left: 9px;
                border-radius: 3px;
                border: 1px solid #cccccc;
              }
            }
          }
          .sel-add {
            width: 100%;
            height: auto;
            overflow: hidden;
            font-size: 16px;
            color: #48a8ed;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .act-ts {
    width: 161px;
    height: 30px;
    background: url(../../assets/img/ts-1.png);
    line-height: 24px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    position: absolute;
    z-index: 11;
    top: 7px;
    left: 585px;
    display: none;
  }
}
.act-ybp-t {
  padding: 20px 5px 5px 5px;
  width: 220px;
  height: 129px;
  background: #ddfde6;
  position:relative;
}
.act-img {
  width: 129px;
  height: 39px;
  margin-left: 45px;
}
</style>
<style>
.Change {
  width: 682px !important;
  height: 335px;
}
.el-dialog__title {
  color: #fff;
  font-weight: bold;
}
.el-dialog__header {
  background: #3aa78a !important;
}
.Change > .el-dialog__body {
  width: 90%;
  height: 60%;
  margin: 0 auto;
  background: #fdfadb;
  margin-top: 10px;
}
.Designation {
  width: 90%;
  height: 60%;
  margin: 0 auto;
}
.el-button--primary {
  background: #fe7c64 !important;
  padding: 12px 56px !important;
  border: none;
  border-radius: 5px;
}
.Spring {
  line-height: 2;
}
.ptitle {
  color: #fe7c64;
  font-weight: bolder;
}
.SpringTips {
  margin-top: 60px !important;
  text-align: center;
  font-size: 16px;
  color: #9d9e8c;
}
.Spring > input {
  font-weight: bolder;
  border: none;
  background: #fdfadb;
}
.Spring > i {
  text-align: center;
  display: inline-block;
  width: 67px;
  height: 26px;
  color: #fe7c64;
  border: 1px solid #fe7c64;
  border-radius: 10px;
  line-height: 26px;
}
.el-dialog__headerbtn {
  position: absolute;
  top: 5px !important;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-weight: bolder;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}

input::-webkit-input-placeholder {
  font-size: 16px;
}
/* *****************预览界面样式********************* */
.Change1 {
  width: 438px !important;
  height: 568px;
}
.Change1 > .el-dialog__body {
  width: 100%;
  overflow: hidden;
  height: auto;
  padding: 75px 5px !important;
}
.Change1Righter {
  width: 25%;
  padding-top: 20px !important;
  text-align: center;
  color: #979797;
}
.Change1Center {
  width: 30%;
  text-align: center;
  margin: 0 5px !important;
}
.Change1Center > img {
  width: 90% !important;
  height: 130px !important;
}
.Change1Left {
  width: 40%;
}
.Change1Left > img {
  width: 90%;
  height: 213px;
}
.Change1Left,
.Change1Center,
.Change1Righter {
  float: left;
  height: 400px;
}
.copy {
  color: #ffd0c2;
  font-size: 14px;
}
.Copy_contain {
  font-size: 8px;
  color: #979797;
  margin: 20px 0px !important;
}
.footer-bottom > button {
  margin-top: 220px;
  padding: 0px !important;
  width: 90px;
  height: 37px;
}
.footer-top > button {
  margin-top: 30px;
  width: 90px;
  height: 37px;
  padding: 0px !important;
}
.act-bottom > i {
  color: #92dbbe;
}
.act-bottom > span {
  color: #92dbbe;
}
</style>
