
getdate(new Date());
    function getdate(date){
        var y=date.getFullYear();
        var m=date.getMonth()+1;
        var d=date.getDate();
        var h=date.getHours();
        var min=date.getMinutes();
        var s=date.getSeconds();
        var day=date.getDay();
        var weeks=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
        var ews=new Array("Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday");
        var week=weeks[day];
        var ew=ews[day]
        var str=y+'年'+(m<10?('0'+m):m)+'月'+(d<10?('0'+d):d)+'日 ';
        var num=(h<10?('0'+h):h)+':'+(min<10?('0'+min):min)+':'+(s<10?('0'+s):s);
        $(".date").html(str);
        $(".time").html(num);
        $(".week").html(week+'/'+ew);
        setTimeout("getdate(new Date());",1000);
        return str;
    }