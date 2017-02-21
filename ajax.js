//封装ajax函数
function ajax(obj){
      //检验传入的数据的格式是否正确
      if(typeof obj!=="object"){
            console.error("请以正确的方式传入数据！");
            return false;
      }
      //检测是否传入地址
      var url=obj.url;
      if(url===undefined){
            console.error("请输入地址！");
            return false;
      }

      var type=obj.type||"get";//方式
      var asynch=obj.asynch==undefined?true:obj.asynch;//同异步
      var dataType=obj.dataType||"text";//返回数据的类型 text json xml document
      var success=obj.success;//当数据返回成功之后,我们要做的事情 
      var error=obj.error;//容错处理
      var data=obj.data||"";//传递的数据
      var str=""

      //处理传入的数据
      switch(typeof(data)){
            case "undefined":
                  break;
            case "object":
                  for (var i in data){
                     str+=i+"="+data[i]+"&";
                  };
                  str=str.slice(0,-1)
                  break;
            case "string":
                  str=data;
                  break;
      }

      //获取ajax对象
      var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");

      ajax.onreadystatechange=function () {
            if (ajax.readyState==4){
                  if(ajax.status==200){
                        var result;
                        if(typeof dataType==="xml"){
                              result=ajax.responseXML;
                        }else{
                              result=ajax.response;
                        }
                        if(success){
                              success(result);
                        };
                  }else if(ajax.status==404){
                        error("页面没有找到！");
                  }else{
                        error("获取错误！");
                  } ;
            };
      };

      if(type=="get"){
            ajax.open("get", url+'?'+str, asynch);
            if(dataType!="xml") {
                  ajax.responseType = dataType;
            }
            ajax.send(null);
      }else if(type=="post"){
            ajax.open("post", url, asynch);
            if(dataType!="xml") {
                  ajax.responseType = dataType;
            }
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.send(str);
   };
}