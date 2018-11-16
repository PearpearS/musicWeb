$(function(){
	(function(){

 	var card=$("form label");
 	var myAudio=document.getElementsByTagName('audio')[0];
 	var title=$("h2");
 	var iNow="";
 	// alert(title.text());
 		card.click(function(){

 			iNow=$(this).attr("for");
 			console.log();
 			Play(iNow);
 			
 		});
 
 		function Play(iNow){

 			if(iNow=="img1"){
 				myAudio.src="music/1.mp3" 	
 				title.fadeOut().fadeIn().text("オオカミ少年独白");		
				myAudio.play();
 			}else if(iNow=="img2"){
 				myAudio.src="music/2.mp3" 
 				title.fadeOut().fadeIn().text("君は口内炎");	
 				myAudio.play();	
 			}else if(iNow=="img3"){
 				myAudio.src="music/3.mp3" 
 				title.fadeOut().fadeIn().text("グレゴリオ");
 				myAudio.play();	
 			}
 			else if(iNow=="img4"){
 				myAudio.src="music/4.mp3" 
 				title.fadeOut().fadeIn().text("飘移");
 				myAudio.play();	
 			}else if(iNow=="img5"){
 				myAudio.src="music/5.mp3" 
 				title.fadeOut().fadeIn().text("Poker Face");
 				myAudio.play();	
 			}
 			else if(iNow=="img6"){
 				myAudio.src="music/6.mp3" 
 				title.fadeOut().fadeIn().text("7538");
 				myAudio.play();	
 			}
 		}

})();


});