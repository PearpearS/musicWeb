$(function(){
	// 搜索框JS
	(function(){
		var MenuLi=$("#menu li");
		var oText=$(".form").find(".search");
		var iNow=0;
		var MenuLiText=['搜搜附近有什么店铺','你想搜哪里呢？','看看有什么优惠券','搜文章~~~','干杯！哔哩哔哩~'];
		oText.val(MenuLiText[iNow]);
		MenuLi.each(function(index){
			$(this).click(function(){
				 MenuLi.attr('class','gradient');
				 $(this).attr('class','active');
				 iNow = index;
				 oText.val(MenuLiText[iNow]);		
		});	
	});	
		oText.focus(function(){
			if($(this).val()==MenuLiText[iNow]){
				$(this).val("");
			}

		});
		oText.blur(function(){
			if($(this).val()==""){
				oText.val(MenuLiText[iNow]);
			}
		});			
	})();

	// update文字滚动效果
	(function(){
		var oDD=$(".update")
		var oUl=oDD.find('ul')
		var iNow=0;
		var updateUp=$("#updateUpbtn");
		var updateDown=$("#updateDownbtn");
		var timer=null;
		var arrDate=[
			{'name':'好大的西瓜','time':'2','title':'血赚了，我抢到了MacBook Pro'},
			{'name':'我要吃草莓','time':'6','title':'胖哥俩蛮好吃的，有人一起吃吗'},
			{'name':'香蕉君','time':'9','title':'自学前端有什么推荐的书籍吗？'},
			{'name':'梨梨梨梨梨','time':'3','title':'美剧《硅谷》挺好看的'},
		];
		var str="";
		for(var i=0;i<arrDate.length;i++){
			str+='<li><a href="#"><strong>'+arrDate[i].name+'</strong><span>'+arrDate[i].time+'分钟前 </span>'+arrDate[i].title+'</a></li>';
		}
		oUl.html(str);
		var oLi=oUl.find("li").height();
		oUl.animate({"top":oLi*-1}, 3000);
		updateUp.click(function(){
			doMove(-1);
		});
		updateDown.click(function(){
			doMove(1);
		})
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},2500)
		}
		oDD.hover(function() {
			clearInterval(timer);
		},autoPlay);
		function doMove(num){
			iNow+=num;
			if(Math.abs(iNow)>arrDate.length-1){
				iNow=0;
			}
			if(iNow>0){
				iNow=-(arrDate.length-1);
			}
			oUl.stop().animate({"top":oLi*iNow}, 3000)
		}
	})();

	// option选项卡
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'));
		fnTab($('.tabNav2'),$('.tabCon2'));


		function fnTab(oNav,aCon){
			var aElem=oNav.children();
			aCon.hide().eq(0).show();

			aElem.each(function(index){
				$(this).click(function(){
				aElem.removeClass('active').addClass('gradient');
				$(this).removeClass('gradient').addClass('active');
				aElem.find('a').attr('class','triangle_down_gray');
				$(this).find('a').attr('class','triangle_down_red');

				aCon.hide().eq(index).show();	
			});
				
			});
		}
	})();

	//轮播
	(function(){
		var oDiv=$('.pic');
		var oUl=oDiv.find('ul li');
		var oOl=oDiv.find('ol li');
		var op=oDiv.find('p');
		var arrText=['天梭','百达翡丽','丹尼尔惠林顿'];
		var iNow = 0;
		var timer = null;

		fnFade();
		function fnFade(){
			oUl.each(function(index){
				if(index!=iNow){
					oUl.eq(index).fadeOut().css('zIndex',1);
					oOl.eq(index).removeClass('active');
				}else{
					oUl.eq(index).fadeIn().css('zIndex',2);
					oOl.eq(index).addClass('active');
				}
			});
			op.text(arrText[iNow]);
		}
		oOl.click(function(){
			iNow=$(this).index();
			fnFade();
		});
		oDiv.hover(function() {
			clearInterval(timer);
		}, autoPlay);

		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=arrText.length;
				fnFade();
			},2000)
		}
	})();

	//日历
	(function(){
		var aSpan=$('.calendar h3 span');
		var almg=$('.calendar .img');
		var oPrompt=$('.today_info');
		var olmg=oPrompt.find('img');
		var oStrong=oPrompt.find('strong');
		var oP=oPrompt.find('p');

		almg.hover(function() {
			var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+55;
			var index=$(this).parent().index()%7;
			//console.log($(this).attr('info'));
			oPrompt.show().css({"left":iLeft,"top":iTop});
			oP.text($(this).attr('info'));
			olmg.attr('src',$(this).attr('src'));
			oStrong.text(aSpan.eq(index).text());
		}, function() {
			oPrompt.hide();	/* Stuff to do when the mouse leaves the element */
		});

	})();

		// BBS高亮显示
	(function (){
		$('.bbs ol li').mouseover(function (){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		});
	})();

	// //知道分子鼠标移入事件
	// (function(){
	// 	var myUl=$(".tab ul");
	// 	var myTab=$(".tab ul li");
	// 	var myNav3=$(".tabNav3");
	// 	var myText=$(".tabNav3 li");
	// 	var aElem=myNav3.children();
	// 	myNav3.hide().eq(0).show();

	// 	aElem.each(function(index){
	// 	myTab.mouseover(function(){
	// 		//console.log($(this).index());
	// 		aElem.removeClass('active').addClass('gradient');
	// 		$(this).removeClass('gradient').addClass('active');
	// 		aElem.find('a').attr('class', 'triangle_down_gray');
	// 		$(this).find('a').attr('class', 'triangle_down_red');
	// 		myNav3.hide().eq(index).show();
	// 	});	

	// });
		
	// })();

 });
//fnTab( $('.tabNav1'), $('.tabCon1'), 'click' );
// 		fnTab( $('.tabNav2'), $('.tabCon2'), 'click' );
// 		fnTab( $('.tabNav3'), $('.tabCon3'), 'mouseover' );
// 		fnTab( $('.tabNav4'), $('.tabCon4'), 'mouseover' );
		
// 		function fnTab( oNav, aCon, sEvent ) {
// 			var aElem = oNav.children();
// 			aCon.hide().eq(0).show();
			
// 			aElem.each(function (index){
				
// 				$(this).on(sEvent, function (){
// 					aElem.removeClass('active').addClass('gradient');
// 					$(this).removeClass('gradient').addClass('active');
// 					aElem.find('a').attr('class', 'triangle_down_gray');
// 					$(this).find('a').attr('class', 'triangle_down_red');
					
// 					aCon.hide().eq( index ).show();