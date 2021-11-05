//生成从minNum到maxNum的随机数 
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break;
        default: return 0; 
        break; 
    } 
}



$(function(){
    $('#phone').blur(function(){
        var phoneValue=$('#phone').val();
        if(phoneValue===""){
            // console.log("111");
            $(this).parent('.phone-float').next('.tip').html('手机号不能为空')
        }
        else{
            var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
            if(off){
                $(this).parent('.phone-float').next('.tip').html('手机号可以使用')
            }else{
                $(this).parent('.phone-float').next('.tip').html('手机号错误')
            }
        }
    })
    $('#pass').blur(function(){
        var pass=$('#pass').val();
        if(pass===""){
        // console.log("111");
        $(this).parent('.phone-float').next('.tip').html('密码不能为空');
        }
        else{
            if(pass.length<6){
                $(this).parent('.phone-float').next('.tip').html('密码至少6位');
            }
            else{
                $(this).parent('.phone-float').next('.tip').html('密码可以使用');
            }
        }
        
    })
    $('#butt').click(function(){
        var num= randomNum(1000,9999);
        // console.log(num);
        $(this).siblings('.tip').html(num);
        $('#get').blur(function(){
            if($('#get').val()==num){
                 $(this).siblings('.tip').html("验证码正确");
            }else{
                $(this).siblings('.tip').html("验证码错误");
            }
        })
    })
    $('.login-but').click(function(){
        // console.log($('#phone').parent('.phone-float').next('.tip').html());
        var a=0
        if($('#phone').parent('.phone-float').next('.tip').html()=='手机号可以使用'){
            // console.log(11);
            a++;
        }
        if($('#pass').parent('.phone-float').next('.tip').html()=='密码可以使用'){
            // console.log(22);
            a++;
        }
        if($('#get').siblings('.tip').html()=="验证码正确"){
            // console.log(33);
            a++;
        }
        if(a==3){
            alert('注册成功');
            setCookie('phone',$('#phone').val(),7);
            setCookie('pass',$('#pass').val(),7)
            window.location='http://127.0.0.1/weibo2.0/'
        }else{
            alert("请填写正确信息");
            // console.log(a);
        }
        
    })
})