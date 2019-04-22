<template>
  <div>
    <div class="Header-img">
      <div class="Header-img-left">
          <div class="Header-img-upload">
             <img src='../../../assets/img/g_03.jpg'>
             <div class="Header-img-info">上传头像</div>
          </div>
          <div class="Header-img-nick">昵称哈哈哈</div>
      </div>
      <div class="Header-img-center">
          <h3>已经发布</h3>
          <h1>3250</h1>
      </div>
      <div class="Header-img-right">
          <h3>已经发布</h3>
          <h1>3250</h1>
      </div>
      <a href="#/personal/edit" class="Header-img-button">编辑资料</a>
    </div>
    <div class="Pay-content">
        <div class="pay-content-box">
            <div class="pay-img">
                <span class="pay-img-info">
                  <img src='../../../assets/img/d1.png'>
                </span>
            </div>
            <div class="pay-info-right">
                <p class="pay-tips">未支付订单:</p>
                <p class="pay-number">&nbsp;&nbsp;23</p>
            </div>
        </div>
         <div class="pay-content-box">
            <div class="pay-img" style="background:#5b83f6">
                <span class="pay-img-info yue">
                  <img src='../../../assets/img/d1.png'>
                </span>
            </div>
            <div class="pay-info-right">
                <p class="pay-tips">账户余额：:</p>
                <p class="pay-number" style="color:#5b83f6">&nbsp;&nbsp;2300元</p>
            </div>
        </div>
         <div class="pay-content-box">
            <div class="pay-img" style="background:#ff6973;">
                <span class="pay-img-info specail">
                  <img  style=" margin-top:13px;margin-left:3px;" src='../../../assets/img/hong.gif'>
                </span>
            </div>
            <div class="pay-info-right">
                <p class="pay-tips">红包余额：:</p>
                <p class="pay-number" style="color:#ff6973;">&nbsp;&nbsp;2300元</p>
            </div>
        </div>
         <div class="pay-content-box">
            <div class="pay-img" style="background:#12c88a;">
                <span class="pay-img-info message ">
                 <img src='../../../assets/img/message.gif'>
                </span>
            </div>
            <div class="pay-info-right">
                <p class="pay-tips">短信余额：:</p>
                <p class="pay-number" style="color:#12c88a">&nbsp;&nbsp;23条</p>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.Header-img{
  width: 100%;
    height: 206px;
    padding: 30px 0px;
    background: #fff;
}
.Header-img-left{
    width: 460px;
    height: 100%;
    float: left;
    margin-left: 30px;
}
.Header-img-center{
    width: 170px;
    height: 90px;
    float: left;
    border-left: 1px solid #d6d6d6;
    text-align: center;
    margin-top: 28px;
}
.Header-img-right{
     width: 170px;
    height: 90px;
    float: left;
    border-left: 1px solid #d6d6d6;
    text-align: center;
    margin-top: 28px;
}
.Header-img-upload{
  float: left;
    width: 120px;
    height: 120px;
    position: relative;
    border-radius: 50%;
    margin-right: 30px;
    margin-top: 10px;
    margin-left: 27px;
}
.Header-img-info{
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
.Header-img-nick{
    width: 175px;
    height: auto;
    overflow: hidden;
    float: left;
    margin-left: 40px;
    font-size: 16px;
    line-height: 30px;
    margin-top: 50px;
    font-weight: bold;
}
h3{
   font-size: 16px;
    font-weight: 500;
    line-height: 25px;
}
h1{
    font-size: 26px;
    color: #29b7fb;
    margin-top: 30px;
    font-weight: bold;
}
.Header-img-button{
    display:block;
    text-align: center;
    float: left;
    width: 120px;
    height: 36px;
    line-height: 36px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #fe7c63;
    background: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background: #fe7c63;
}
.Pay-content{
    width: 100%;
    height: 544px;
    margin-top: 10px;
    background: #fff;
    padding: 20px 14px;
}
.pay-content-box{
    width: 466px;
    height: 123px;
    float: left;
    border: 1px solid #e2e3e3;
    margin: 7px;
}
.pay-img{
    background: #f79481;
    width: 121px;
    height: 121px;
    float: left;
}
.pay-img-info{
    display: block;
    width: 73px;
    height: 73px;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    float: left;
    line-height: 73px;
    font-size: 38px;
    margin-left: 25px;
    margin-top: 25px;
    background: linear-gradient(#fcbeb4, #f69a88);
}
.pay-info-right{
    width: 300px;
    height: auto;
    float: left;
    line-height: 50px;
    margin-left: 28px;
    margin-top: 35px;
}
.pay-tips{
    font-size: 16px;
    color: #333;
    float: left;
    font-weight: bold;
}
.pay-number{
    font-size: 25px;
    color: #f79481;
    font-weight: bold;
}
.yue{
    background: linear-gradient(#94affb, #487af7);
}
.specail{
    background: linear-gradient(#fdaab1, #f94a57);
}
.message{
background: linear-gradient(#63f1a0, #1acb90);
}

</style>