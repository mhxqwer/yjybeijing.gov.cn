// JavaScript Document
$(function(){
/**
var oMeta = document.createElement('meta');
oMeta.name = 'viewport';
oMeta.content = 'initial-scale=1, minimum-scale=1, maximum-scale=1';
document.getElementsByTagName('head')[0].prepend(oMeta);
**/

//判断是否为移动版
var appFlag=false;
if($("body,html").width()<=750){
	appFlag=true;
}

if(!appFlag){

$('.nav').find('li').each(function(){
$(this).hover(function(){
var ynum = $(this).find('.subnav').length;
var pcNum = $(this).index()-1;
$(this).addClass('now').siblings().removeClass('now');
if(ynum){
$('.pcnav').find('.subnav_pc').eq(pcNum).show().siblings().hide();
$('.pcnav').show()
}
else{
$('.pcnav').hide()
}
})
})
$(document).click(function(e) {
		if(!$('.pcnav').is(e.target)&&!$('.nav').is(e.target)&&$('.nav').has(event.target).length === 0){
            $('.pcnav').hide();
            $('.nav').find('li').removeClass('now')
		}

   });
}



var searFlag = true;
$(".search p").click(function(e) {
	
	if($(this).text()=='本网'){		
		$(this).text("一网通查");
		searFlag = false;
		if(appFlag){
			$(".ser_ipt").css("width","400px");
		}else{
			$(".ser_ipt").css("width","230px");
		}	    
	}else{
		$(this).text("本网");
		searFlag = true;
	    if(appFlag){
			$(".ser_ipt").css("width","460px");
		}else{
			$(".ser_ipt").css("width","260px");
		}
	}
    
});

function search_submit(){
	var sea_val = $(".ser_ipt").val();
	if(sea_val=="")
	{
		alert("检索词不能为空！");
		return false;
	}
	else
	{
		if(searFlag)
		{
			document.searchForm.action = "//fgw.beijing.gov.cn/so/s?tab=all&siteCode=1100000011"
			_vaq.push(['trackSiteSearch', sea_val, 'search', '1']);
		}
		else
		{
			document.searchForm.action = "//www.beijing.gov.cn/so/s?tab=all&sourceCode=1100000011";
			_vaq.push(['trackSiteSearch', document.searchForm.qt.value, 'tongcha', '1']);
		}
		document.searchForm.method = "post";
		document.searchForm.submit();
	}
}
$(".ser_sub").click(function(){
	search_submit();
	
});

$(".ser_ipt").keypress(function (e) {
    if (e.which == 13) {
       search_submit();
    }
});

if(appFlag){
	$('.clist_new0508').removeClass('clist_new0508');
	$('.subnav').each(function(){
		$(this).removeClass('subnav_pc');
		$(this).removeClass('subnav_pc_1200');
	})
	$(".nolink").click(function(e){
		e.preventDefault();							
	});
   $(".nav li").click(function(e) {
   	if($(this).find('.subnav').length){
   	e.stopPropagation();
	  $(this).siblings().find('.subnav').hide();
      $(this).addClass("open").siblings().removeClass("open"); 
	  $(this).find('.subnav').toggle();
      var index;
      if($(this).parents('.nav').hasClass('nav_index')){
      	index=($(this).index())%3;
      }
	  else{
	  	index=($(this).index()-1)%3;
	  }
	  console.log(index);
	  $(this).find(".subnav").css("left",-index*212.5-20);	
   	}
	  
   });	
   $(".foot_logo3").click(function(e) {
	  e.stopPropagation();
      $(".foot_wx_box").show();
	  return false;
   });
   $(document).click(function(e) {
      if(!$('.nav li').is(e.target)&&$('.nav li').has(event.target).length === 0){
            $('.nav li').removeClass("open"); 
		}
	  if(!$('.foot_wx_box').is(e.target)&&$('.foot_wx_box').has(event.target).length === 0){
            $('.foot_wx_box').hide();
		}
   });
}


var mySwiperNav = new Swiper('#swiper_menu', {
		freeMode: true,
		freeModeFluid: true,
		calculateHeight: true,
		slidesPerView: 'auto',
		cssWidthAndHeight: true,
		initialSlide: 0,
		onFirstInit: function (swiper) {
			if ( $(".m_menu li").length <= 3 ) {
				$('#menu_right').hide();
			} 
			holdPosition = 0,holdPosition2=0, mySwiperNavTimer = null;

		},
		onTouchStart: function (swiper) {
			holdPosition = 0, holdPosition2=0,clearTimeout(mySwiperNavTimer);			
		},
		onTouchEnd: function (swiper) {			
			if (holdPosition != 0) {
				$('#menu_right').hide();
				$('#menu_left').stop().fadeIn();
				
			}else{
			   $('#menu_left').hide();
			   $('#menu_right').stop().fadeIn();		
			};
		
		},				
		onResistanceAfter: function (swiper, pos) {
			holdPosition = pos
		},
		onResistanceBefore: function (swiper, pos2) {
			holdPosition2 = pos2
		}
	})


})

function toDBC(str){
    var result = "";
    var len = str.length;
    for(var i=0;i<len;i++)
    {
        var cCode = str.charCodeAt(i);
        //全角与半角相差（除空格外）：65248(十进制)
        cCode = (cCode>=0x0021 && cCode<=0x007E)?(cCode + 65248) : cCode;
        //处理空格
        cCode = (cCode==0x0020)?0x03000:cCode;
        result += String.fromCharCode(cCode);
    }
    return result;
}

  $(function(){
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Safari") > -1&&userAgent.indexOf("Chrome")==-1) {

$('.list').find('span').each(function(){
  var sTxt = $(this).html();
  var newTxt = toDBC(sTxt);
  $(this).addClass('letterspace').html(newTxt)
})
    }



  })