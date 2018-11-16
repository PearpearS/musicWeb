window.onload=function(){
	mv.app.toTip();
};
var mv={}; //命名空间
mv.tools={};
mv.ui={};
mv.ui.textChange=function(obj,str){
	obj.onfocus=function(){
		
		if(this.value!=null){
			console.log("udui a ");
			this.value='';
		}
	};
	obj.onblur=function(){
		if(this.value==''){
			this.value=str;
		}
	}
};



mv.app={};
mv.app.toTip=function(){
	var oText1=document.getElementsByClassName('text')[0];
	var oText2=document.getElementById('text');

	mv.ui.textChange(oText1,'Search website');
	mv.ui.textChange(oText2,'Search website');
};