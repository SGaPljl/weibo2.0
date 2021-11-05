// 轮播图
$(function(){
    var num=0;
    // var timer=null;
    go();
    $(".center-lun").mouseover(function(){//实现当鼠标移入时，不执行自动轮播功能
        clearInterval(timer);//移动进去时清除定时器
    }).mouseout(function(){
        go();//移出后执行go函数
    });
    function go(){
          timer=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=1;
                    $(".lun_body").css("margin-left","0px");
                }
                
                $(".number li").each(function(index){
                    // console.log(num);//3
                    // console.log(this.innerHTML);//123
                    this.className=this.innerHTML== num+1 ? 'number-li':'num'
                })
                if(num==3){
                    $(".number li").eq(0).toggleClass('number-li')
                }
                $(".lun_body").animate({"margin-Left":-660*num+"px"},580);//使用animate实行运动功能
                
            },2000);
        }
})

// 登录窗
$(function(){
    // var top=$(".login").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1300) {
            $(".login").css({ "position": "fixed", "top": "60px" });
        }
        else {
            $(".login").css({ "position": "", "top": "" })
        }
    });
    let userPhone=getCookie('phone');
    let userPass=getCookie('pass');
    $('.login-btn .l-btn').click(function(){
        // console.log(1);
        // console.log(userPhone);
        // console.log(userPass);
        // console.log($('#login_1-phone').val());
        if($('#login_1-phone').val()== userPhone&&$('#login_1-pass').val()== userPass){
            $(".login_1").css({"display":"none"})
            $(".login_2").css({"display":"none"})
            $(".login_3").css({"display":"none"})
            $(".login_4").css({"display":"block"})
            $('.l4-name span').html(userPhone)
        }
        else{
            $(".login_1").css({"display":"block"})
            $(".login_4").css({"display":"none"})
        }
    })
    $(".login-account").click(function(){
            $(".login_1").css({"display":"block"})
            $(".login_2").css({"display":"none"})
            $(".login_3").css({"display":"none"})
            $(".login-account").css({"border-bottom": "3px solid #FF8140"})
            $(".login-safe").css({"border-bottom": "3px solid #fff"})
        })
        $(".login-safe").click(function(){
            $(".login_1").css({"display":"none"})
            $(".login_2").css({"display":"block"})
            $(".login_3").css({"display":"none"})
            $(".login-account").css({"border-bottom": "3px solid #fff"})
            $(".login-safe").css({"border-bottom": "3px solid #FF8140"})
        })
        $(".header-btn").click(function(){
            $(".login_1").css({"display":"none"})
            $(".login_2").css({"display":"none"})
            $(".login_3").css({"display":"block"})
            $(".login-account").css({"border-bottom": "3px solid #fff"})
            $(".login-safe").css({"border-bottom": "3px solid #fff"})
        })
    
})
// 左侧栏
$(".left-nav").click(function(){
    var num=this;
    $(".left-nav").each(function(){
        this.className=this== num ? 'left-nav current':'left-nav'
    })
})
// 置顶
$(function () {
/*根据滚动距离判断按钮是否显示或隐藏*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".back").css("display", "inline-block");
    }
    else {
        $(".back").css("display", "none");
    }
    });
    /*实现点击滚动回顶部*/
    $(function(){
        $(".back").click(function(){
            $("html,body").scrollTop(0);
        })
    })
})
$(function(){
    $(".back").click(function(){
        $("html,body").scrollTop(0);
    })
})

// 加载文章
let j=1;
function showText(length){
    for(var i=0;i<length;i++){
        let $text='<div class="b-c-jimu"><div class="jimu-img"><img src="'+textData[j-1].img1+'" alt="披荆斩棘的哥哥"></div><div class="jimu-list"><div class="j-list-1"><a href="#">'+textData[j-1].title+'<br></a>中午好</div><div class="j-list-2"><a href="#"><img src="'+textData[j-1].img2+'" alt="陈小春"></a><a href="#">'+textData[j-1].name+'</a><a href="#">'+textData[j-1].data+'</a><span><i class="iconfont icon-zhuanfa"></i><i>'+textData[j-1].forwarding+'</i></span><span><i class="iconfont icon-pinglun"></i><i>'+textData[j-1].comments+'</i></span><span><i class="iconfont icon-dianzan"></i><i>'+textData[j-1].praise+'</i></span></div></div></div>';
        $('#text').append($text);
    }
    
}
showText(2);

// 一次性加载2篇文章
let a=1;
let flag=true;
$(document).scroll(function() {
  let cHeight=document.documentElement.clientHeight;//可视区域高度
  let ctop = $(document).scrollTop();  //滚动高度
  let time;
  if(j<textData.length && $('#text .b-c-jimu').eq(j).offset().top<=cHeight+ctop){
    j+=a;
    $('#text').append('<div class="b-c-tip"><a>正在加载中，请稍候</a></div>')
    time=setTimeout(()=>{
      showText(a)
      $('.b-c-tip').remove()
    },2000)     
  } 
  if(j>=textData.length&&flag){
      console.log(j);
    flag=false;
    clearTimeout(time)
    $('.b-c-tip').remove()
    $('#text').append('<div class="b-c-tip"><a>没有更多文章了</a></div>')
  }
});


$('.iconfont.icon-cuowu').click(function(){
    // console.log(1);
  $('.b-c-tip').remove();
})