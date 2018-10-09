// 登录框

$(function(){
	var $qr=$('.login-box-inner-qr');
	var $ps=$('.login-box-inner-ps');
	var $desc=$('.login-box .desc');
	var $user=$('#username');
	var $cancel=$('#cancel');

	// 登录方式切换
	$('.login-toggle').click(function(){
		if($qr.is(':visible')){
			$qr.hide();
			$ps.show();
			$user.focus();
			$desc.html('<img src="img/login/desc.png" alt="">扫码登录更安全<span></span><em></em>').css('top','10px').show();
		}else{
			$ps.hide();
			$qr.show();
			$desc.hide();
		}
	});

	$('.ps-login').click(function(event){
		$('.login-toggle').click();
		event.preventDefault();
	});

	// 二维码示意动画
	var $qrcode=$('.login-box-inner-qr .qrcode');
	var $qrdesc=$('.qrcode-desc');
	var timer=null;
	$qrcode.mouseover(function(){
		clearTimeout(timer);
		$(this).stop().animate({left:-66},function(){
			$qrdesc.show().animate({opacity:'1'});
		})
	}).mouseout(function(){
		timer=setTimeout(function(){
			$qrdesc.hide().animate({opacity:'0'});
			$qrcode.stop().animate({left:'1'});
		},300);
	});

	$qrdesc.mouseover(function(){
		clearTimeout(timer);
	}).mouseout(function(){
			$qrdesc.hide().animate({opacity:'0'});
			$qrcode.stop().animate({left:'1'});
	});

	// 账户名清空按钮
	$user.on('keyup',function(){
		if($(this).val()==''){
			$cancel.hide();
		}else{
			$cancel.show().click(function(){
				$user.val('');
				$(this).hide();
			});
		}
	});

	// 表单验证
	$('.login-form .submit').click(function(event){
		var $notice=$('.notice');
		var $pass=$('#pass');
		var $title=$('.login-box-inner-ps .login-title');
		var $txt=$notice.find('span');
		if($user.val()=='' && $pass.val()==''){
			$notice.show();
			$title.hide();
			event.preventDefault();
		}else if($user.val()==''){
			$txt.text('请填写账户名');
			$notice.show();
			$title.hide();
			event.preventDefault();
		}else if($pass.val()==''){
			$txt.text('请输入密码');
			$notice.show();
			$title.hide();
			event.preventDefault();
		}
	});
});







// 右侧菜单栏
window.addEventListener('load',function(){
	var sideMenu=document.querySelector('#side-menu');
	var vipright=document.querySelector('.vipright');
	var shopcar=document.querySelector('.side-menu-bar .shopcar');
	var mymoney=document.querySelector('.mymoney');
	var mycollect=document.querySelector('.mycollect');
	var myview=document.querySelector('.myview');
	var recharge=document.querySelector('.recharge');
	var fadeback=document.querySelector('.fadeback');
	var theqr=document.querySelector('.side-menu-bar .qr');
	var qrBox=document.querySelector('.side-menu-bar .qr .qr-box');
	var backtop=document.querySelector('.backtop');
	var tip=document.querySelectorAll('.side-menu-bar .tip');
	var theLogin=document.querySelector('.side-menu-bar .side-login-box');
	var theExit=theLogin.getElementsByClassName('exit')[0];
	var panelBack=document.querySelector('.side-menu-panel .back');
	

	theLogin.onmouseover=function(){
		this.style.display='block';
	};
	theLogin.onmouseout=theExit.onclick=function(){
		theLogin.style.display='none';
	}

	vipright.onmouseover=function(){
		tipshow(tip[0],'block',100,35);
	};
	vipright.onmouseout=function(){
		tipshow(tip[0],'none',0,70);
		loginshow(138.5,10,'none');

	}
	vipright.onclick=function(){
		loginshow(138.5,10,'block');
		tipshow(tip[0],'none',0,70);
	}
	shopcar.onclick=function(){
		loginshow(184,10,'block');
	}

	mymoney.onmouseover=function(){
		tipshow(tip[1],'block',100,35);
	};
	mymoney.onmouseout=function(){
		tipshow(tip[1],'none',0,70);

	};
	mymoney.onclick=function(){
		loginshow(55,245,'block');
		tipshow(tip[1],'none',0,70);
	};


	mycollect.onmouseover=function(){
		tipshow(tip[2],'block',100,35);
	};
	mycollect.onmouseout=function(){
		tipshow(tip[2],'none',0,70);

	};
	mycollect.onclick=function(){
		loginshow(80,265,'block');
		tipshow(tip[2],'none',0,70);
	};

	myview.onmouseover=function(){
		tipshow(tip[3],'block',100,35);
	};
	myview.onmouseout=function(){
		tipshow(tip[3],'none',0,70);

	};
	myview.onclick=function(){
		loginshow(120,265,'block');
		tipshow(tip[3],'none',0,70);
	};

	recharge.onmouseover=function(){
		tipshow(tip[4],'block',100,35);
	};
	recharge.onmouseout=function(){
		tipshow(tip[4],'none',0,70);

	};
	recharge.onclick=function(){
		tipshow(tip[4],'none',0,70);
	};

	fadeback.onmouseover=function(){
		tipshow(tip[5],'block',100,35);
	};
	fadeback.onmouseout=function(){
		tipshow(tip[5],'none',0,70);

	}

	theqr.onmouseover=function(){
		tipshow(tip[6],'block',100,35);
	};
	theqr.onmouseout=function(){
		tipshow(tip[6],'none',0,70);
		qrBox.style.display='none';
	};
	theqr.onclick=function(){
		qrBox.style.display='block';
		tipshow(tip[6],'none',0,70);
	};
	qrBox.onmouseover=function(){
		this.style.display='block';
	}

	backtop.onmouseover=function(){
		tipshow(tip[7],'block',100,35);
	};
	backtop.onmouseout=function(){
		tipshow(tip[7],'none',0,70);

	};
	
	//回到顶部
	backtop.onclick=function(){
		tipshow(tip[7],'none',0,70);
		moveScrollTop(0);
	};
	window.addEventListener('scroll',function(){
		var scrollTop=parseInt(document.documentElement.scrollTop||document.body.scrollTop);
		if(scrollTop<=100){
			move(backtop,{opacity:0},function(){
				backtop.style.display='none';	
			});
		}else{
			backtop.style.display='block';	
			move(backtop,{opacity:100});
		}
	},false);


	// 充值面板
	var showPrice=document.querySelector('.menu-panel-body .value');
	var chargePrice=document.querySelector('.menu-panel-body .check-value');
	var choicePrice=document.querySelectorAll('.menu-panel-body .check-value .price');
	var chargeTxt=document.querySelectorAll('.menu-panel-body input');
	var disPrice=document.querySelector('#dis-price');
	var chargeBtn=document.querySelector('.menu-panel-body button');
	var sideMenuBody=document.body;
	var valueTitle=document.querySelector('.menu-panel-body .value-title');
	var chargeNotice=document.querySelector('.menu-panel-body .notice');

	var priceArr=['98-99.5','9.8-9.9','9.8-9.9','19.6-20','294-299','29.4-30','490-498','49-49.8','980-990'];


	recharge.onclick=function(){
		tipshow(tip[4],'none',0,70);
		if(this.style.backgroundColor==''){
			this.style.backgroundColor='#FF0036';
			move(sideMenu,{right:0});
		}else{
			this.style.backgroundColor='';
			move(sideMenu,{right:-235});
		}
	};
	panelBack.onclick=function(){
		recharge.click();
	};



	showPrice.onclick=function(e){
		var e=e||event;
		e.stopPropagation();
		e.cancelBubble=true;
		chargePrice.style.display='block';
		if(chargeNotice.style.display=='block'){
			chargeNotice.style.display='none';
		}
	};
	valueTitle.onclick=function(e){
		var e=e||event;
		e.stopPropagation();
		e.cancelBubble=true;
		showPrice.click();
	};

	
	chargePrice.onclick=function(e){
		var e=e||event;
		var target=e.target||e.srcElement;
		if(target!=chargePrice){
			chargeTxt[1].value=target.innerText;
			for(var i=0;i<choicePrice.length;i++){
				choicePrice[i].className='price';
				choicePrice[i].price=priceArr[i];
			};
			target.className='price active';
			disPrice.innerText=target.price;
			chargePrice.style.display='none';
		}
	};

	chargeBtn.onclick=function(e){
		var e=e||event;
		e.stopPropagation();
		e.cancelBubble=true;
		if(chargeTxt[0].value==''){
			chargeNotice.style.display='block';
			e.preventDefault();
			e.returnValue=false;
			return false;
		}
	};

	//点击页面，右侧菜单隐藏，菜单内操作恢复默认
	sideMenuBody.addEventListener('click',function(){
		if(parseInt(getAttr(sideMenu,'right'))==0){
			recharge.click();
		}
	},false);

	sideMenu.onclick=function(e){
		var e=e||event;
		if(chargeNotice.style.display=='block'){
				chargeNotice.style.display='none';
			}
		if(chargePrice.style.display=='block'){
			chargePrice.style.display='none';
		}

		e.stopPropagation();
		e.cancelBubble=true;
	};


	// 左侧导航栏回到顶部
	var guideTop=document.querySelector('.side-nav .guide-desc.end');
	guideTop.onclick=function(){
		moveScrollTop(0);
	}



},false);













function tipshow(ele,display,opacity,right){
	if(display=='block'){
		ele.style.display=display;
	}
	move(ele,{'opacity':opacity,'right':right},function(){
		if(display=='none'){
			ele.style.display=display;	
		}
	});
}

function loginshow(top,arr,display){
	var theLogin=document.querySelector('.side-menu-bar .side-login-box');
	var arrow=theLogin.getElementsByClassName('login-arrow')[0];
	theLogin.style.top=top+'px';
	arrow.style.top=arr+'px';
	theLogin.style.display=display;
}




// 获取元素据页面顶部的距离

function getTop(ele){
	var top=0;
	function getEleTop(ele){
		top+=ele.offsetTop;
		if(ele.tagName.toLowerCase()=='body'){
			return top;
		}else{
			getEleTop(ele.offsetParent);
		}
	}
	getEleTop(ele);
	return top;
}


// 页面平滑滚动到目标距离
var topTimer=null;
function moveScrollTop(iTarget,fun){
	clearInterval(topTimer);
	topTimer=setInterval(function(){
		var cur=parseInt(document.documentElement.scrollTop||document.body.scrollTop);
		var speed=(iTarget-cur)/4;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==iTarget){
			clearInterval(topTimer);
			if(fun){fun};
		}else{
			cur+=speed;
			window.scrollTo(0,cur);
		}
	},30);
}

function offSet(curEle) {
    var totalLeft = null;
    var totalTop = null;
    var par = curEle.offsetParent;
    //首先把自己本身的相加
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop;
    //现在开始一级一级往上查找，只要没有遇到body，我们就把父级参照物的边框和偏移相加
    while (par){
        if (navigator.userAgent.indexOf("MSIE 8.0") === -1){
            //不是IE8我们才进行累加父级参照物的边框
            totalTop += par.clientTop;
            totalLeft += par.clientLeft;
        }
        //把父级参照物的偏移相加
        totalTop += par.offsetTop;
        totalLeft += par.offsetLeft;
        par = par.offsetParent;
    }
    return {left: totalLeft,top: totalTop};
    //返回一个数组，方便我们使用哦。
}

// 运动框架
function getAttr(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}

function move(ele,json,fun){
	clearInterval(ele.timer);
	ele.timer=setInterval(function(){
		var stop=true;
		for(var attr in json){
			var cur;
			var iTarget=json[attr];
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getAttr(ele,attr))*100);
			}else{
				cur=parseInt(getAttr(ele,attr));
			}

			var speed=(iTarget-cur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=iTarget){
				stop=false;
			}

			if(attr=='opacity'){
				cur+=speed;
				ele.style.opacity=cur/100;
				ele.style.filter='alpha(opacity:'+cur+')';
			}else{
				ele.style[attr]=cur+speed+'px';
			}
		}

		if(stop){
			clearInterval(ele.timer);
			if(fun){
				fun();
			}
		}

	},30);
}

