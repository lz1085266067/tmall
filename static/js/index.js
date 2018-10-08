$(function(){
    $('.topnav .hd:not(:last) a').mouseenter(function(){
        $(this).css('color','#ff0036')
    }).mouseleave(function(){
        $(this).css('color','#999')
    })
    $('.menu-hd:not(:last)').hover(function () {
        $(this).css('color','#ff0036')
    },function () {
        $(this).css('color','#999')
    })
    $('.hd').mouseenter(function(){
        $(this).css({'background':'#fff'})
        $(this).find('.menu-hd').css('borderColor','#eee')
        $(this).find('.son').css('display','block')
    }).mouseleave(function(){
        $(this).css('background','')
        $(this).find('.son').css({'display':'none'})
        $(this).find('.menu-hd').css('borderColor','#f2f2f2')

    })
    $('.hd .son:not(:last)').find('a').hover(function () {
            $(this).css('color','#ff0036')
        },function () {
            $(this).css('color','#666')
        })
    color=['#f56a00','#2263d4']
    $('.con1').each(function (index,value) {
        if(index<2){
        $(value).find('a').hover(function () {
            $(this).css('color',color[index])
            console.log(1)
        },function () {
            $(this).css('color','#666')

        })}
    })
    $('.inputcon').click(function(){
        $('#word').css('color','rgb(204, 204, 204)')
        $('.input').focus()
    })
    $('.input').blur(function(){
        $('#word').css('color','rgb(102, 102, 102)')
        if($(this).val()==''){
        $('#word').css('display','block')
        }
    }).keydown(function(){
        $('#word').css('display','none')
    })

    $('.inputcon2').click(function(){
        $('#word2').css('color','rgb(204, 204, 204)')
        $('.input2').focus()
    })
    $('.input2').blur(function(){
        $('#word2').css('color','rgb(102, 102, 102)')
        if($(this).val()==''){
        $('#word2').css('display','block')
        }
    }).keydown(function(){
        $('#word2').css('display','none')
    })


    $('.sidenav li').mouseenter(function(){
        $(this).css('background','#fff').children('a').css('fontWeight','bold').addClass('hot-word')
        $(this).children('.son').css('display','block')
        $(this).children('span').addClass('hot-word')

    }).mouseleave(function(){
        $(this).children('.son').css('display','none')
        $(this).css('background','').children('a').css('fontWeight','normal').removeClass('hot-word')
        $(this).children('span').removeClass('hot-word')
    })
    $('.sidenav li .son').find('a').hover(function(){
        $(this).addClass('hot-word')
    },function(){
        $(this).removeClass('hot-word')
    })
    let i=0
    function move(){
        i++
        if(i>5){
            i=0
        }
        $('.imgbox a').css('display','none').eq(i).css('display','block')
        $('.back li').css('display','none').eq(i).css('display','block')
        $('.btns .btn').removeClass('change').eq(i).addClass('change')

    }
    $('.btns .btn').mouseenter(function(){
        let m=$(this).index()
        $('.imgbox a').css('display','none').eq(m).css('display','block')
        $('.back li').css('display','none').eq(m).css('display','block')
        $('.btns .btn').removeClass('change').eq(m).addClass('change')
        i=m
    })
    $('.btns .btn').click(function(){
        let m=$(this).index()
        $('.imgbox a').css('display','none').eq(m).css('display','block')
        $('.back li').css('display','none').eq(m).css('display','block')
        $('.btns .btn').removeClass('change').eq(m).addClass('change')
        i=m
    })
    let j=0
    function move2(){
        j++
        if(j>1){
            j=0
        }
        $('.tabs .tabcontent').css('display','none').eq(j).css('display','block')
        $('.tabs ul li').removeClass('on').eq(j).addClass('on')
    }
    $('.imgbox').hover(function(){
        clearInterval(t)
    },function(){
       t= setInterval(move,3000)
    })
    $('.tabcontent').hover(function(){
        clearInterval(t2)
    },function(){
       t2= setInterval(move2,2000)
    })
    let t=setInterval(move,3000)
    let t2=setInterval(move2,2000)
    $('.tabs ul li').click(function(){
        let x=$(this).index()
        $('.tabs .tabcontent').css('display','none').eq(x).css('display','block')
        $('.tabs ul li').removeClass('on').eq(x).addClass('on')
        j=x
    })
    let q
    let bgcolor=['#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036']
    $('.ever').hover(function(){
        let i=$(this).index()
        let color=bgcolor[i-1]
        $(this).css('background',color)
    },function(){
        let i=$(this).index()
        if(q==i){
            return
        }else{
        $(this).css('background','rgba(0, 0, 0, 0.6)')
    }})
    let flag=true
    let floor=[]
    $('.floor').each(function(){
        floor.push($(this).position().top)
    })
    $('.ever').click(function(){
        flag=false
        let i=$(this).index()
        q=i
        let color=bgcolor[i-1]
        $('.ever').css('background','rgba(0, 0, 0, 0.6)')
        $(this).css('background',color)
        $('html').stop().animate({scrollTop:floor[i-1]-100},1000,function(){
            flag=true
        })
    })
    $('.ends').click(function(){
        flag=false
        $('html').stop().animate({scrollTop:0},1000,function () {
            flag=true;
        })
    })
    $(window).scroll(function(){
        let t=$('html').scrollTop()
        if(t>=1300){
            $('.jump').css('display','block')
            $('.show').css('display','block')
        }
        if(t<1300){
            $('.jump').css('display','none')
            $('.show').css('display','none')
        }
        let index=floor.findIndex(item=>item>t-400)
        if(flag==false){
            return
        }else{
        if(index>=0){
            let color=bgcolor[index]
            $('.ever').css('background','rgba(0, 0, 0, 0.6)').eq(index).css('background',color)
        }}
    })
    let words=['会员权益','我的资产','我的收藏','我看过的','我要充值','用户反馈','','返回顶部']
    $('.masktab').hover(function () {

        let word=words[$(this).index('.masktab')]
        $(this).find('.hidden').html(word).css('display','block').animate({right:35,opacity:1},500)
    },function () {
        $(this).find('.hidden').animate({right:70,opacity:0},500,function () {
            $(this).css('display','none')
        })
    })

    $('.innercon1 a').hover(function () {
        $(this).css('color','#FF0036')
    },function () {
        $(this).css('color','#333')
    })
})