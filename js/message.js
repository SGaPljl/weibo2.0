$(function(){
    $(".submit").click(function(){
        var $name=$('#name').val();
        var $text=$('#text').val();
        if($name!=''&&$text!=''){
            var $name=$('#name').val();
            var $text=$('#text').val();
            var myDate=new Date();
            var $time=myDate.toLocaleString();
            var $txt=$('<div class="out-body"><div class="name">'+$name+'</div><div class="text">'+$text+'</div><div class="time">'+$time+'<span class="out-reply">回复</span><button class="del">删除</button></div></div>');
            $('.out').append($txt);
            $('#name').val('')
            $('#text').val('');
            
        }else{
            alert("昵称和内容不能为空")
        }
    })
    $(".out").on('click',".del",function(){
        $(this).parent().parent().remove();
    })
    
    $(".out").on('click',".out-reply",function(){
        if($(this).parent().siblings('.reply').css("width")===undefined){
            console.log($(this).parent().css("color"));
            var $name=$(this).parent().siblings('.name').text();
            console.log($name);
            var $reply=$('<div class="reply"><span>刘小小回复'+$name+'</span><textarea name="" id="reply" cols="30" rows="10"></textarea><button class="reply-btn">提交</button></div>');
            $('.out-body').append($reply);
        }
        if($(this).parent().siblings('.reply').css("display")=="none"){
           $(this).parent().siblings('.reply').css({"display":"block"})
        }else{
            $(this).parent().siblings('.reply').css({"display":"none"})
        }
    })
    $(".out").on('click',".reply-btn",function(){
        var $name=$(this).parent().siblings('.name').text();
        var $reply=$(this).siblings('#reply').val();
        var myDate=new Date();
        var $time=myDate.toLocaleString();
        var $txt=$('<div class="out-body"><div class="name"><span>刘小小回复'+$name+'</span></div><div class="text">'+$reply+'</div><div class="time">'+$time+'<span class="out-reply">回复</span><button class="del">删除</button></div></div>');
        $('.out').append($txt);
        $(this).parent().css({"display":"none"})
    })
})