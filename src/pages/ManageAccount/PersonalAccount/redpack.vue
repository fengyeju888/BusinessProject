<template>
<div>
	<div class="redpack">
                    <div class="redpack-top">
                        <div class="redtop-icon">
                            <span class="iconfont icons num-tx">&#xe667;</span>
                        </div>
                        <div class="cent-hz">
                            <h3>红包余额</h3>
                            <h1>32540</h1>
                        </div>
                        <div class="redtop-cz">
                            <button>立即充值</button><br>
                            <a href="javascript:;">提现</a>
                        </div>
                    </div>
                    <div class="redpack-bottom">
                        <table class="reb-table">
                        <tr>
                            <td>序号</td>
                            <td>红包金额</td>
                            <td>红包余额</td>
                            <td>记录日期</td>
                            <td>使用状态</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>-50</td>
                            <td>100</td>
                            <td>2019.1.1 10:29</td>
                            <td>充值</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>100</td>
                            <td>50</td>
                            <td>2019.1.1 10:29</td>
                            <td>活动发放</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-50</td>
                            <td>0</td>
                            <td>2019.1.1 10:29</td>
                            <td>提现</td>
                        </tr>
                        </table>
                    </div>
                </div>
	
</div>
</template>
<style scoped>
.redpack-top {
    width: 100%;
    height: 126px;
    background: #fff;
}
.redtop-icon {
    background: #ff6973;
    width: 118px;
    height: 126px;
    float: left;
}
.redtop-icon .icons {
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
    background: linear-gradient(#fdaab1, #f94a57);
}
.cent-hz {
    width: 170px;
    height: 80px;
    float: left;
    text-align: center;
    border-right: 1px solid #d6d6d9;
    margin-top: 23px;
}	
.redtop-cz {
    width: 130px;
    height: 126px;
    float: left;
    text-align: center;
    margin-left: 20px;
}
	.redtop-cz button {
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
.cent-hz h3 {
    margin-top: 6px;
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
}
.cent-hz h1 {
    font-size: 26px;
    color: #ee1616;
    margin-top: 18px;
    font-weight: bold;
}
.redtop-cz a {
    display: block;
    width: 94px;
    height: 33px;
    border-radius: 5px;
    color: #fe7c63;
    font-size: 16px;
    border: 1px solid #fe7c63;
    line-height: 33px;
    margin-left: 18px;
}
.redpack-bottom {
    width: 100%;
    height: 624px;
    margin-top: 10px;
    background: #fff;
    padding-top: 50px;
}
.reb-table {
    width: 860px;
    height: auto;
    overflow: hidden;
    table-layout: fixed;
    border: 1px solid #e9e9e9;
    margin-left: 64px;
}
.redpack-bottom .reb-table tr:first-child {
    height: 50px;
    line-height: 50px;
    background: #f4f4f4;
}
.redpack-bottom .reb-table tr:first-child td {
    height: 50px;
    line-height: 50px;
        border: 1px solid #e9e9e9;
        text-align: center;
            color: #333;
}
.redpack-bottom .reb-table tr, .redpack .redpack-bottom .reb-table td {
    border: 1px solid #e9e9e9;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
</style>