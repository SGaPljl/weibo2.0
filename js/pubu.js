let list=[];
function showpic() {
    for(var i=0;i<picture.length;i++){
        var $div='<div class = "box"><div class = "pic"><img src = "'+picture[i].image+'" alt=""></div></div>';
        var link=$($div);
        list.push(link);
        $('main').append($div);
    }  
    // console.log(picture.length);
}
showpic();
// 无限加载图片
function loadimg() {
    console.log(1);
    var cHeight=document.documentElement.clientHeight;//窗口高度
    var ctop=$(document).scrollTop();//滚动高度
    if($('.box').eq(list.length-1).offset().top<cHeight+ctop){
        showpic();
    }
    // console.log(1);
}
// 防抖
function debounce(fn,wait) {
    var timer=null;
    return function(){
        if(timer!==null){
            clearTimeout(timer);
        }
        timer=setTimeout(fn,wait);
        //  console.log(1);
    }
   
}
// 监听滚动事件
window.addEventListener("scroll" ,debounce(loadimg,500));
window.addEventListener('resize',function(){
    if(document.body.clientWidth>690){
        $('main').css('width',400);
        $('main').css('column-count',1);
    }
    if(document.body.clientWidth>700){
        $('main').css('width',700);
        $('main').css('column-count',2);
    }
    if(document.body.clientWidth>1000){
        $('main').css('width',1000);
        $('main').css('column-count',3);
    }
    if(document.body.clientWidth>1260){
        $('main').css('width',1260);
        $('main').css('column-count',4);
    }
})