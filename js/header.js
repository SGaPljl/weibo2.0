$(function(){
    $('.search input').focus(function(){
        $('.search').css({"border": "1px solid #FA7D3C"})
    })
    $('.search input').blur(function(){
        $('.search').css({"border": "1px solid #ccc"})
    })
    // ajax请求
    let res=false;
    function getData(){
        // console.log(1);
        return function(){
            if(res){
                console.log("未刷新");
            }else{
                res=true
                $.ajax({ 
                    url:"search.php", 
                    type:"get", 
                    dataType:"json",
                    success:function(data){ 
                        console.log(res);
                        var x;
                        for(x in data){
                            // console.log(data[x]);
                            // console.log(x);
                            $('.down-list-i').eq(x-1).html(x);
                            $('.search-down ul li a span').eq(x-1).html(data[x]);
                        }
                    },
                })
                
            }
        }
          
    }
//    下拉框获取数据
    $('.search').click(function(event){
        event.stopPropagation();
        $('.search-down').css({"display":"block"})
        getData()();
    }) 
  
    // 点击其他区域下拉框隐藏
    $(document).click(function(){
        $('.search-down').hide();
        $('.theme').hide();
    })
    // 点击注册
    $('.h-r-location .register').click(function(){
        // console.log(1);
        window.location='http://127.0.0.1/weibo2.0/register.html';
    })
      // 换肤
    $('.change').click(function(event){
        event.stopPropagation();
        $('.theme').css({"display":"block"})
    })
    $('.theme').on('click','ul>li',function(){
        // console.log(1);
    let index=$(this).index(); 
    switch (index){
      case 0:
        $('body').css('background-color','#fff');
        break;
      case 1:
        $('body').css('background-color',' #bdc3c7');
        break;
      case 2:
        $('body').css('background-color','#c9d6ff');
        break;
    }
  })
})