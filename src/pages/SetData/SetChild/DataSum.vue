<template>
  <div>
    <div class="Number">
      <div class="Number-item">
        <p class="Number-item-left">
          <img src="../../../assets/img/a_07.jpg">
        </p>
        <div class="Number-item-right">
          <p class="textTips">活动参与人数</p>
          <p class="textNumber">23540</p>
        </div>
        <div class="nav-help">
          <span class="iconfont icon texti">&#xe6a4;</span>
        </div>
      </div>
      <div class="Number-item">
        <p class="Number-item-left">
          <img src="../../../assets/img/a_07.jpg">
        </p>
        <div class="Number-item-right">
          <p class="textTips">活动参与人数</p>
          <p class="textNumber">23540</p>
        </div>
        <div class="nav-help">
          <span class="iconfont icon texti">&#xe6a4;</span>
        </div>
      </div>
      <div class="Number-item">
        <p class="Number-item-left">
          <img src="../../../assets/img/a_07.jpg">
        </p>
        <div class="Number-item-right">
          <p class="textTips">活动参与人数</p>
          <p class="textNumber">23540</p>
        </div>
        <div class="nav-help">
          <span class="iconfont icon texti">&#xe6a4;</span>
        </div>
      </div>
    </div>
    <!-- 中间部分地图 -->
    <div class="MapContain">
      <div class="MapLeft">
        <h2>参与用户地区分布</h2>
        <div class="MapBox">
          <div class="echarts">
            <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
          </div>
        </div>
      </div>
      <div class="MapRight">
        <h2>参与用户男女比例</h2>
        <div class="Sex">
          <!-- 男性比例 -->
          <div class="Men" style="margin-left:68px">
            <span class="MenPrecent">70%</span>
            <div class="MenData">
              <div class="MenInner"></div>
            </div>
            <span style="font-size:20px;font-weight:bolder">男</span>
          </div>
          <div class="Men">
            <span class="MenPrecent">30%</span>
            <div class="MenData" style="background:#fa9daf;">
              <div class="MenInner" style="height:70%;"></div>
            </div>
            <span style="font-size:20px;font-weight:bolder">女</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Number {
  width: 100%;
  height: 125px;
}
.Number-item {
  width: 32%;
  height: 100%;
  float: left;
  background: #fff;
  position: relative;
  margin-right: 10px;
}
.Number-item-left {
  width: 85px;
  float: left;
  height: 77px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 20px;
}
.Number-item-left > img {
  width: 100%;
  height: 100%;
}

.Number-item-right {
  width: 60%;
  float: right;
  height: 100%;
  padding-top: 30px;
}
.Number-item-right > p {
  width: 100%;
  height: 30px;
}
.textNumber {
  color: #29b9ff;
  font-size: 28px;
}
.nav-help {
  position: absolute;
  right: 10px;
  top: 10px;
}
.texti {
  font-size: 26px;
  color: #cdcdcd;
}
.MapContain {
  width: 97.8%;
  height: 664px;
  background: #fff;
  margin-top: 10px;
  padding-top: 37px;
}
.MapLeft {
  width: 70%;
  height: 100%;
  float: left;
}
.MapRight {
  width: 30%;
  height: 100%;
  float: right;
}
/* 地图部分 */
.MapBox {
  width: 573px;
  height: 476px;
  margin: 0 auto;
  margin-top: 37px;
  border-right: 1px solid #d6d6d6;
}
.MapBox > img {
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 20px;
  font-weight: bolder;
  margin-left: 42px;
}
.Men {
  width: 51px;
  height: 600px;
  padding-top: 50px;
  float: left;
}
.MenData {
  width: 26px;
  height: 365px;
  background: #3aa78a;
  margin-top: 10px;
  margin-bottom: 60px;
}
.MenInner {
  width: 100%;
  height: 30%;
  background: #cdcdcd;
}
.MenPrecent {
  font-size: 20px;
  color: #3ab8ff;
}
</style>
<script>
import echarts from "echarts";
import "../../../../node_modules/echarts/map/js/china";

export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
      console.log(this.userJson);
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        backgroundColor: "#ffffff",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"]
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo" // 对应上方配置
          },
          {
            name: "启动次数", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 599
              },
              {
                name: "上海",
                value: 142
              },
              {
                name: "黑龙江",
                value: 44
              },
              {
                name: "深圳",
                value: 92
              },
              {
                name: "湖北",
                value: 810
              },
              {
                name: "四川",
                value: 453
              }
            ]
          }
        ]
      });
    }
  }
};
</script>