module.exports = (function(){
    const baseUrl = "http://qzyx.passboat.net";
  
    const getParam = function (search) {
        search = search.replace(/#.+$/, '');
        var re = {};
        if (search == "" || typeof search == "undefined") {
            return {};
        } else {
            search = search.substr(1).split('&');
            for (var i = 0, len = search.length; i < len; i++) {
                var tmp = search[i].split('=');
                if (i == 0 && tmp.length == 1) { //?132141
                    return {
                        '__search__': tmp[0]
                    };
                }
                re[tmp.shift()] = tmp.join('=');
            }
            return re;
        }
    };
    var canvas2File = function(canvas){
      //图片导出为 png 格式
      var type = 'png';
      var imgData = canvas.toDataURL(type);
      /**
       * 获取mimeType
       * @param  {String} type the old mime-type
       * @return the new mime-type
      */
      var _fixType = function(type) {
         type = type.toLowerCase().replace(/jpg/i, 'jpeg');
         var r = type.match(/png|jpeg|bmp|gif/)[0];
         return 'image/' + r;
      };
      // 加工image data，替换mime type
      imgData = imgData.replace(_fixType(type),'image/octet-stream');
      /**
       * 在本地进行文件保存
       * @param  {String} data     要保存到本地的图片数据
       * @param  {String} filename 文件名
       */
      var saveFile = function(data, filename){
          var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
          save_link.href = data;
          save_link.download = filename;
  
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          save_link.dispatchEvent(event);
      };
    };
    var goBack = function(){
        if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
            if(history.length > 0){
                window.history.go( -1 );
            }else{
                window.opener=null;window.close();
            }
        }else{ //非IE浏览器
            if (navigator.userAgent.indexOf('Firefox') >= 0 ||
                navigator.userAgent.indexOf('Opera') >= 0 ||
                navigator.userAgent.indexOf('Safari') >= 0 ||
                navigator.userAgent.indexOf('Chrome') >= 0 ||
                navigator.userAgent.indexOf('WebKit') >= 0){

                if(window.history.length > 1){
                    window.history.go( -1 );
                }else{
                    window.opener=null;window.close();
                }
            }else{ //未知的浏览器
                window.history.go( -1 );
            }
        }
    };


    // 日期格式化
    var format = function(data,yy){
        return data.format(yy);
    };
    Date.prototype.format = function(fmt){ //author: meizz   
        var o = {   
            "M+" : this.getMonth()+1,                 //月份   
            "d+" : this.getDate(),                    //日   
            "h+" : this.getHours(),                   //小时   
            "m+" : this.getMinutes(),                 //分   
            "s+" : this.getSeconds(),                 //秒   
            "q+" : Math.floor((this.getMonth()+3)/3), //季度   
            "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
            if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
        //调用方法 var time1 = new Date().format("yyyy-MM-dd HH:mm:ss");
    }
    
    return {
      baseUrl: baseUrl,//接口路径
      _param: getParam(window.location.search),//获取地址栏参数
      canvas2File: canvas2File,//将canvas保存为图片文件
      format: format, //日期格式化 调用方法 util.format(new Date(),"yyyy-MM-dd")
      goBack: goBack //返回
    }
  })();
  

    