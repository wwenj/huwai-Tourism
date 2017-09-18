
window.onload=function(){
/*抽屉特效图*/
	$(".pic").hover(function(){
		$(this).stop(true).animate({width:"789px"},500).siblings().stop(true).animate({width:"100px"},500);
	});

	var inputZc1=document.getElementById('inputZc1');
	var inputZc2=document.getElementById('inputZc2');
	var inputZc3=document.getElementById('inputZc3');
	var inputZc4=document.getElementById('inputZc4');
	var ZcSpan1=document.getElementById('ZcSpan1');
	var ZcSpan2=document.getElementById('ZcSpan2');
	var ZcSpan3=document.getElementById('ZcSpan3');
	var ZcSpan4=document.getElementById('ZcSpan4');

	var input1=document.getElementById('input1');
	var input2=document.getElementById('input2');
	var oBtn=document.getElementById("btnLogin");
	var dl=document.getElementById("dl");
	var zc=document.getElementById("zc");
	//var ZcSpan=document.getElementById('ZcSpan');

	oBtn.onclick=function(){		//点击按钮
		openNew();
	}
	dl.onclick=function(){
		login2();
	}	
/*input点击背景颜色*/
	input1.onclick=function(){
		input1.style.border="2px solid rgba(255,255,255,0.1)";
		input1.style.color="#ccc";
		input1.placeholder="";
		input1.className="inputDl1";
	}
	input2.onclick=function(){
		input2.className="inputDl2";
	}	
	input2.onblur=function(){
		input2.className="inputDlout2"
	}
//登录正则
	input1.onblur=function() {
	input1.className="inputDlout1"
	var pattern=/^[0-9]+$/ig;	
	var str=input1.value;	
	var obj=pattern.test(str);	

	if(obj!=true){
		input1.style.border="2px solid red";
		input1.value="";
		input1.placeholder="输入格式不正确"
		input1.style.color="red";
	}
  }
/*点击注册*/
	zc.onclick=function(){		//点击按钮
		Registered();
	}
/*点击注册*/
	inputZc1.onclick=function(){
		inputOnclick(inputZc1,ZcSpan1);
	}
	inputZc2.onclick=function(){
		inputOnclick(inputZc2,ZcSpan2);
	}
	inputZc3.onclick=function(){
		inputOnclick(inputZc3,ZcSpan3);
	}
	inputZc4.onclick=function(){
		inputOnclick(inputZc4,ZcSpan4);
	}

/*注册离开正则*/
	inputZc1.onblur=function(){		
		inputOnblur(inputZc1);
		regular(/^[0-9]+$/ig,inputZc1,ZcSpan1);
	}
	inputZc2.onblur=function(){	
		inputOnblur(inputZc2);
		regular(/^[0-9 a-z A-Z]+$/ig,inputZc2,ZcSpan2);
	}
	inputZc3.onblur=function(){		
		inputOnblur(inputZc3);
		if (inputZc3.value!==inputZc2.value) {
			this.style.border="2px solid red"
			ZcSpan3.innerHTML="*两次密码不一致";
			ZcSpan3.style.color="red";
		}else if (this.value=="") {
			this.style.border="2px solid red"
			ZcSpan3.innerHTML="*请确认密码";
			ZcSpan3.style.color="red";
		}else{
			this.style.border="2px solid green"
			ZcSpan3.innerHTML="*密码可用";
			ZcSpan3.style.color="green";
		}
	}
	inputZc4.onblur=function(){	
		inputOnblur(inputZc4);
		regular( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,inputZc4,ZcSpan4);
	}

}





/*封装测算距离的函数*/
function distance(height,width,inId){
	var top=(document.documentElement.clientHeight-height)/2+"px";
	var left=(document.documentElement.clientWidth-width)/2+"px";
	inId.style.top=top;
	inId.style.left=left;
}	
/*改变背景颜色*/
function inputOnclick(inputId,inputSpan){
	inputId.style.border="2px solid rgba(255,255,255,0.1)";
	inputId.style.background="rgba(255,255,255,0.6)";
	inputSpan.innerHTML="";
}
function inputOnblur(inputId){
	inputId.style.background="rgba(255,255,255,0.3)";
}

function openNew(){
	//遮罩层
	var oMask=document.getElementById("mask")
	oMask.style.display="block";
	//弹出层
	var oLogin=document.getElementById("login");
	oLogin.style.display="block";
	distance(450,500,oLogin);
	oLogin.className="loginChange";

	//关闭按钮
	var oClose=document.getElementById("close");
	oClose.onclick=function(){
	// oLogin.style.display="none";
	 oLogin.className="loginChange2";
	oMask.style.display="none";
	
	};
	
};
	/*弹出登录框*/
function login2(){
	var login2=document.getElementById('login2');
	
	distance(300,280,login2);
	login2.className="login2Change";

	var oMask=document.getElementById("mask")
	oMask.style.display="block";

	var oClose2=document.getElementById("close2");
	oClose2.onclick=function(){
	login2.className="login2Change2";
	oMask.style.display="none";
	 };
};
/*弹出注册框*/
function Registered(){
	var oMask=document.getElementById("mask");
	oMask.style.display="block";

	var registered=document.getElementById("registered");
	distance(550,500,registered);
	registered.className="registeredChange"

	var oClose3=document.getElementById("close3");
	oClose3.onclick=function(){
	registered.className="registeredChange2"
	oMask.style.display="none";
	 };
};
/*焦点外面注册正则*/
function regular(pattern1,inputId,zcSpan){
	var pattern=pattern1;
	var str=inputId.value;	
	var obj=pattern.test(str);	
		if(obj!=true){
	zcSpan.innerHTML="*您的输入不合法"
	zcSpan.style.color="red";
	inputId.style.border="2px solid red";
	}
	else{
		zcSpan.innerHTML="*输入正确"
		zcSpan.style.color="green";
		inputId.style.border="2px solid green";
	}
};


// function hasClass(element, className) {  
// 	return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
// }
// //添加一个class，如果不存在的话
// function addClass(element, className) {
// 	if (!hasClass(element, className))   {       
// 		element.className += " "+className;  
// 	}
// }
// //删除一个class，如果存在的话
// function removeClass(element, className) {   
// 	if (hasClass(element, className)) {         
// 		element.className = element.className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),' ');
// 	}
// }  

//



