$(document).ready(function(){
	var player=document.getElementById('audio');
	var videobtn2=document.getElementsByTagName('video')[0];
	var videobtn=$(".myMoveVideo");
	var flag=true;
	var music_flag=99;
	var oFlag=true,tFlag=true,ttFlag=true,fFlag=true,ffFlag=true,sFlag=true,seFlag=true,eFlag=true;
	var quest_music=$("img[name]");
	var music_name=["one","two",
					"three","four","five",
					"six"
	];
	var radio_music=$("input[type=radio]")
	var music_dati1=$("span[class=que_one]");
	var music_dati2=$("span[class=que_two]");
	var music_dati3=$("span[class=que_three]");
	var music_dati_list=[["《风吹的季节》","《夏天的风》","《秋天不回来》"],["《午后红茶》","《怪你过分美丽》","《今生今世》"],
["《你的头发》","《绅士》","《丑八怪》"],["《菊次郎的夏天》","《你的背包》","《刚刚好》"],["《夜夜夜夜》","《梦醒时分》","《说爱我》"],
["《because of you》","《loveing you》","《young for you》"]
	];
	var music_worry=["好可惜哦，答错啦","答错了，我们再接再厉呗","/(ㄒoㄒ)/~~答错了"];
	var music_yes=["哇，你好厉害","真棒，你是歌神","厉害了我的哥"];
	var music_default=["拜托你先听一下啦","为什么不听。。。。","可恶，不听就答题"];
	var question_ok=$(".question_ok");
	var question_ok_p=$(".question_ok_p");
	var yess=$("#yes");

	yess.click(function(){		
		boom(music_flag);
	});

	function boom(a){
		var ok_ok=Math.floor(Math.random()*3);
		
		if(a==0){
			if(radio_music[1].checked==true){
				 alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else if(a==1){
			if(radio_music[0].checked==true){
				 alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else if(a==2){
			if(radio_music[1].checked==true){
				alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else if(a==3){
			if(radio_music[2].checked==true){
				alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else if(a==4){
			if(radio_music[0].checked==true){
				alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else if(a==5){
			if(radio_music[2].checked==true){
				alert_ok(ok_ok);
			}else{
				alert_no(ok_ok);
			}
		}else{
		 		question_ok.show(600);
		 		question_ok_p.html(music_default[ok_ok]);
		 }
	}
		function alert_ok(ok_ok){
			question_ok.show(600);
			question_ok_p.html(music_yes[ok_ok]);
		}
		function alert_no(ok_ok){
			question_ok.show(600);
				question_ok_p.html(music_worry[ok_ok]);
		}

	quest_music.click(function(){
		player.pause();
		  // quest_music.css("background","#48f0d1");
		  // $(this).css("background","white");
		  quest_music.removeClass("pic_background");
		  $(this).addClass("pic_background");
		  player.src="quest_music/"+music_name[this.name]+".mp3";
		  player.play();
		  music_dati1.html(music_dati_list[this.name][0]);
		  music_dati2.html(music_dati_list[this.name][1]);
		  music_dati3.html(music_dati_list[this.name][2]);
		  music_flag=this.name;
		  question_ok.hide(600);
});

	videobtn.click(function(){
		if(this.paused){
			$(this).animate({width: "600px", height: "600px",left:"650px",top:"100px"}, 500);
			player.pause();
			this.play();
			}else{
				this.pause();
				// $(this).animate({width: "200px", height: "200px",left:"0",top:"486px",}, 500);
				animateBack();
			}
	});

	$(".music").click(function(){	
		
 		if($(this).attr("title")==2){
 			if(tFlag==true){
 				player.src="audio/music-two.mp3";
 				videobtn2.pause();
 				// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 				animateBack();
 			player.play();
 			tFlag=false;
 			oFlag=true,ttFlag=true,fFlag=true,ffFlag=true,sFlag=true,seFlag=true,eFlag=true;
 			}else{
 				player.pause();
 				tFlag=true;
 			}
 		}
 		if($(this).attr("title")==3){
 				if(ttFlag==true){
 					player.src="audio/music-three.mp3";
 					videobtn2.pause();
 					// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 					animateBack();
 			player.play();
 			ttFlag=false;
 			oFlag=true,tFlag=true,fFlag=true,ffFlag=true,sFlag=true,seFlag=true,eFlag=true;
 				}else{
 				player.pause();
 				ttFlag=true;
 			}
 		}if($(this).attr("title")==4){
 			if(fFlag==true){
 			player.src="audio/music-four.mp3";
 			videobtn2.pause();
 			// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 			animateBack();
 			player.play();	
 			fFlag=false;
 			oFlag=true,tFlag=true,ttFlag=true,ffFlag=true,sFlag=true,seFlag=true,eFlag=true;
 			}else{
 				player.pause();
 				fFlag=true;
 			}
		}if($(this).attr("title")==5){
 			if(ffFlag==true){
 			player.src="audio/music-five.mp3";
 			videobtn2.pause();
 			// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 			animateBack();
 			player.play();	
 			ffFlag=false;
 			oFlag=true,tFlag=true,ttFlag=true,fFlag=true,sFlag=true,seFlag=true,eFlag=true;
 			}else{
 				player.pause();
 				ffFlag=true;
 			}		
 		}if($(this).attr("title")==6){
 			if(sFlag==true){
 			player.src="audio/music-six.mp3";
 			videobtn2.pause();
 			// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 			animateBack();
 			player.play();	
 			sFlag=false;
 			oFlag=true,tFlag=true,ttFlag=true,fFlag=true,ffFlag=true,seFlag=true,eFlag=true;
 			}else{
 				player.pause();
 				sFlag=true;
 			}			
 		}
 		if($(this).attr("title")==7){
 			if(seFlag==true){
 			player.src="audio/思念是一种病.mp3";
 			videobtn2.pause();
 			// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 			animateBack();
 			player.play();	
 			seFlag=false;
 			oFlag=true,tFlag=true,ttFlag=true,fFlag=true,ffFlag=true,sFlag=true,eFlag=true;
 			}else{
 				player.pause();
 				seFlag=true;
 			}			
 		}

 		if($(this).attr("title")==8){
 			if(eFlag==true){
 			player.src="audio/ヘクとパスカル - fish in the pool.mp3";
 			videobtn2.pause();
 			// videobtn.animate({width: "200px", height: "200px",left:"0",top:"532px",}, 500);
 			animateBack();
 			player.play();	
 			eFlag=false;
 			oFlag=true,tFlag=true,ttFlag=true,fFlag=true,ffFlag=true,sFlag=true,seFlag=true;
 			}else{
 				player.pause();
 				eFlag=true;
 			}			
 		} 		
	});
	function animateBack(){
		videobtn.animate({width: "200px", height: "200px",left:"0",top:"746",}, 500);
	}
	
});