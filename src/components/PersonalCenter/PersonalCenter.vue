<template>
  <div class="center">
      <div class="cent-xx">
          <div class="cent-tx">
              <span class="iconfont icon">&#xe68a;</span>
              <div class="centtx-mc">
                  昵称<br>
                  绑定手机：138177088888
              </div>
          </div>
          <div class="cent-hz">
              <h3>已发布</h3>
              <h1>32540</h1>
          </div>
          <div class="cent-hz">
              <h3>总参与人数</h3>
              <h1>32540</h1>
          </div>
          <div class="cent-hz">
              <a href="javascript:;" style="margin-top:15px;">修改手机号</a>
              <a href="javascript:;">修改密码</a>
          </div>
      </div>
  </div>
</template>

<script type='text/ecmascript-6'>

  export default {
    name:'App',
    props:[''],
    data () {
      return {

      };
    },

    created() {},

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
   @import '../../assets/styles/global';
    .center{
        width: 988px;
        height: 760px;
        float: right;
        background: #fff;
        .cent-xx{
            width: 896px;
            height: auto;
            overflow: hidden;
            border-radius: 5px;
            border: 1px solid #d6d6d6;
            padding: 30px 0px;
            margin-top: 30px;
            margin-left: 15px;
            .cent-tx{
                width: 345px;
                height: 90px;
                float: left;
                margin-left: 30px;
                .icon{
                    display: block;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    text-align: center;
                    color: #fff;
                    float: left;
                    line-height: 64px;
                    font-size: 30px;
                    margin-top: 15px;
                    background: linear-gradient(#fa3eb9,#591cb7);
                }
                .centtx-mc{
                    width: 175px;
                    height: auto;
                    overflow: hidden;
                    float: left;
                    margin-left: 40px;
                    font-size: 14px;
                    line-height: 30px;
                    margin-top: 15px;
                }
            }
            .cent-hz{
                width: 170px;
                height: 90px;
                float: left;
                border-left: 1px solid #d6d6d6;
                text-align: center;
                h3{
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25px;
                }
                h1{
                    font-size: 26px;
                    color: #29b7fb;
                    margin-top: 30px;
                }
                a{
                    display: block;
                    line-height: 30px;
                    font-size: 16px;
                    color: #29b7fb;
                }
            }
        }
    }
</style>
