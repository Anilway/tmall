
window.onload=function(){
	//公共组件-购物车登录框
	var shopMask=document.getElementsByClassName('shopMask')[0];
	var exitBtn=document.querySelector('.shopMask .login-head .exit');
	var shopcar=document.querySelector('#shopcar a');

	shopcar.onclick=function(e){
		var e=e||event;
		shopMask.style.display='block';
		shopMask.style.height=document.body.offsetHeight+'px';
	};

	exitBtn.onclick=function(){
		shopMask.style.display='none';
	};

	
	document.onkeydown=function(e){
		var e=e||event;
		if(shopMask.style.display=='block'){
			if(e.keyCode==27){
				exitBtn.click();
			}
		}
	};


	// 搜索部分有内容直接提交给天猫官网，没内容转跳到自己做的搜索页面。
	var search=document.querySelector('.search');
	var form=search.getElementsByTagName('form')[0];
	var txt=search.getElementsByTagName('input')[0];
	var submit=search.getElementsByTagName('button')[0];

	submit.onclick=function(e){
		var e=e||event;
		if(txt.value){
			form.action='https://list.tmall.com/search_product.htm';
		}else{
			// window.open('login.html','_blank');
			e.preventDefault();
			e.returnValue=false;
			return false;
		}
	}




	// 固定搜索栏fix-search有内容直接提交给天猫官网，没内容转跳到自己做的搜索页面。
	var fixForm=document.querySelector('.fix-search form');
	var fixTxt=document.querySelector('.fix-inner form input');
	var fixBtn=document.querySelector('.fix-inner form button');
	var fixSearch=document.querySelector('.fix-search');

	fixBtn.onclick=function(e){
		var e=e||event;
		this.style.outlineColor='#86a7d9';
		if(fixTxt.value){
			fixForm.action='https://list.tmall.com/search_product.htm';
			fixTxt.placeholder='搜索 天猫 商品/品牌/店铺';
		}else{
			fixTxt.placeholder='请输入关键字';
			move(fixTxt,{opacity:70},function(){
				move(fixTxt,{opacity:100},function(){
					move(fixTxt,{opacity:70},function(){
						move(fixTxt,{opacity:100});
					})
				})
			});
			e.preventDefault();
			e.returnValue=false;
			return false;
		}
	};	


	// 轮播图
	var banImg=document.querySelectorAll('.banner-box-inner .banner-img');
	var banBtn=document.querySelectorAll('.banner-nav-btn li');
	var bannerBox=document.querySelector('.banner-box');
	var bgcolor=['#262d42','#e8e8e8','#789db7','#e8e8e8','#a9c9e5','#e8e8e8'];
	var timer=null;
	var num=banBtn.length-1;
	var n=0;

	for(var i=0;i<num+1;i++){
		banBtn[i].index=i;
		banImg[i].index=i;

		banBtn[i].onmouseover=function(){
			clearInterval(timer);
			for(var j=0;j<banBtn.length;j++){
				banBtn[j].className='';
				move(banImg[j],{'opacity':0});
				banImg[j].style.display='none';
			}
			this.className='active';
			banImg[this.index].style.display='block';
			bannerBox.style.background=bgcolor[this.index];
			move(banImg[this.index],{'opacity':100});
		};

		banImg[i].onmouseover=function(){
			clearInterval(timer);
		};

		banBtn[i].onmouseout=banImg[i].onmouseout=function(){
			n=this.index;
			timer=setInterval(banShow,5000);
		};
	}

	timer=setInterval(banShow,5000);

	function banShow(){
		if(n==0){
			banBtn[num].className='';
			move(banImg[num],{'opacity':0});
			banImg[num].style.display='none';
			banBtn[0].className='active';
			banImg[0].style.display='block';
			bannerBox.style.background=bgcolor[0];
			move(banImg[0],{'opacity':100});
			n++;
		}else if(n>0 && n<num){
			banBtn[n-1].className='';
			move(banImg[n-1],{'opacity':0});
			banImg[n-1].style.display='none';
			banBtn[n].className='active';
			banImg[n].style.display='block';
			bannerBox.style.background=bgcolor[n];
			move(banImg[n],{'opacity':100});
			n++;
		}else{
			banBtn[n-1].className='';
			move(banImg[n-1],{'opacity':0});
			banImg[n-1].style.display='none';
			banBtn[n].className='active';
			banImg[n].style.display='block';
			bannerBox.style.background=bgcolor[n];
			move(banImg[n],{'opacity':100});
			n=0;
		}
	}


	// 商品导航
	var mainNavList=document.querySelectorAll('.main-nav ul li');
	var mainNavNext=document.querySelectorAll(' .li-level2');
	for(var i=0;i<mainNavList.length;i++){
		mainNavList[i].index=i;
		mainNavNext[i].index=i;
		mainNavList[i].onmouseover=mainNavNext[i].onmouseover=function(){
			mainNavNext[this.index].style.display='block';
		};
		mainNavList[i].onmouseout=mainNavNext[i].onmouseout=function(){
			mainNavNext[this.index].style.display='none';
		}
	}




	//product左侧广告渐变效果
	var contentLeftLink=document.querySelectorAll('.floor-item-content .content-left a');
	var contentLeftImg=document.querySelectorAll('.floor-item-content .content-left a img');
	for(var i=0;i<contentLeftImg.length;i++){
		contentLeftImg[i].onmouseover=function(){
			move(this,{opacity:70});
		};

		contentLeftImg[i].onmouseout=function(){
			move(this,{opacity:100});
		};
	}

	for(var i=0;i<contentLeftLink.length;i++){
		contentLeftLink[i].onmouseover=function(){
			move(this,{opacity:70});
		};
		contentLeftLink[i].onmouseout=function(){
			move(this,{opacity:100});
		};
	}








	// 左侧导航
	var sideNav=document.querySelector('.side-nav');
	var zone={
		tmcs:document.querySelector('.side-nav .zone.tmcs'),
		tmgj:document.querySelector('.side-nav .zone.tmgj'),
		mlrs:document.querySelector('.side-nav .zone.mlrs'),
		cdkw:document.querySelector('.side-nav .zone.cdkw'),
		jjsh:document.querySelector('.side-nav .zone.jjsh'),
		dzac:document.querySelector('.side-nav .zone.dzac'),
		hwcx:document.querySelector('.side-nav .zone.hwcx'),
		cnxh:document.querySelector('.side-nav .zone.cnxh'),
		bgcolor:['#64C333','#FF0036','#F15453','#19C8A9','#EA5F8D','#0AA6E8','#64C333','#FF0036']
	};

	var topTarget={
		tmcs:getTop(document.querySelector('#tmcs')),
		tmgj:getTop(document.querySelector('#tmgj')),
		mlrs:getTop(document.querySelector('#mlrs')),
		cdkw:getTop(document.querySelector('#cdkw')),
		jjsh:getTop(document.querySelector('#jjsh')),
		dzac:getTop(document.querySelector('#dzac')),
		hwcx:getTop(document.querySelector('#hwcx')),
		cnxh:getTop(document.querySelector('#favorite'))
	};

	// 点击导航转跳到指定位置
	zoneScroll('tmcs',0);
	zoneScroll('tmgj',1);
	zoneScroll('mlrs',2);
	zoneScroll('cdkw',3);
	zoneScroll('jjsh',4);
	zoneScroll('dzac',5);
	zoneScroll('hwcx',6);
	zoneScroll('cnxh',7);

	function zoneScroll(ele,index){
		zone[ele].onclick=function(){
		moveScrollTop(topTarget[ele]-70);
		};
	}

	// 鼠标滚动关联导航颜色
	// 虽然有些多此一举，但是是为了防止有时候滚动条没有滚动到执行范围，而导致左侧导航快不关联变色。
	showColor('tmcs',0);
	showColor('tmgj',1);
	showColor('mlrs',2);
	showColor('cdkw',3);
	showColor('jjsh',4);
	showColor('dzac',5);
	showColor('hwcx',6);
	showColor('cnxh',7);

	function showColor(ele,index){
		// 兼容火狐鼠标滚动
		document.addEventListener('DOMMouseScroll',function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(Math.abs(scrollTop-topTarget[ele])<200){
				zoneBgDefault();
				zone[ele].style.backgroundColor=zone.bgcolor[index];	
			}	
		},false);

		 //鼠标滚动 
		document.addEventListener('mousewheel',function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(Math.abs(scrollTop-topTarget[ele])<200){
				zoneBgDefault();
				zone[ele].style.backgroundColor=zone.bgcolor[index];	
			}	
		},false);
	}


	// 回到顶部
	var guideTop=document.querySelector('.side-nav .guide-desc.end');

	guideTop.addEventListener('click',function(){
		zoneBgDefault();
		// moveScrollTop(0,zoneBgDefault);
	},false);

	// 恢复导航按钮默认背景色
	function zoneBgDefault(){
		for(var arr in zone){
				if(arr!=='bgcolor'){
					zone[arr].style.backgroundColor='rgba(0,0,0,.6)';
				}
			}
	}


	



	// 固定搜索栏动态显示
	var siteNav=document.getElementById('site-nav');
	var header=document.getElementById('header');
	var serveNav=document.getElementById('serve-nav');
	var banner=document.getElementById('banner');

	window.onscroll=function(){
		var scrollTop=parseInt(document.documentElement.scrollTop||document.body.scrollTop);
		var heightTop=siteNav.offsetHeight+header.offsetHeight+serveNav.offsetHeight+banner.offsetHeight;
		if(scrollTop<=heightTop){
			if(fixSearch.offsetTop==0){
				move(fixSearch,{top:-50},function(){
				fixTxt.placeholder='搜索 天猫 商品/品牌/店铺';
				fixBtn.style.outlineColor='transparent';
				});
			}
		}else{
			move(fixSearch,{top:0});
		}

		// 左侧导航，在导航区域外，导航背景色恢复默认
		if(scrollTop<getTop(document.querySelector('.new-hot-brand'))){
			zoneBgDefault();
		}


		// 滚动条滚动到导航位置，导航背景颜色提示
		showColor('tmcs',0);
		showColor('tmgj',1);
		showColor('mlrs',2);
		showColor('cdkw',3);
		showColor('jjsh',4);
		showColor('dzac',5);
		showColor('hwcx',6);
		showColor('cnxh',7);
		function showColor(ele,index){
			if(Math.abs(scrollTop-topTarget[ele]+70)<100){
					zoneBgDefault();
					zone[ele].style.backgroundColor=zone.bgcolor[index];	
				}
		}


		// 左侧当行动态显示
		if(scrollTop<getTop(document.querySelector('.top-brand'))){
			move(sideNav,{left:-40,bottom:0,opacity:0},function(){
				sideNav.style.display='none';
			});
		}else{
			sideNav.style.display='block';
			move(sideNav,{left:4,bottom:50,opacity:100});
		}

	};



	// 天猫超市一元疯抢
	var tmcsli=document.querySelectorAll('#tmcs .sale .sale-inner .tab li');
	var tmcsSaleImg=document.querySelector('#tmcs .sale .sale-inner a img.sale-img');
	var tmcsSaleTitle=document.querySelector('#tmcs .sale .sale-inner a .desc .desc-title span');
	var tmcsSaleDesc=document.querySelector('#tmcs .sale .sale-inner a .desc .desc-sub span');
	var saleTimer=null;

	tmcsli[0].onmouseover=function(){
		clearInterval(saleTimer);
		tmcsli0();};
	tmcsli[1].onmouseover=function(){
		clearInterval(saleTimer);
		tmcsli1();};
	tmcsli[0].onmouseout=tmcsli[1].onmouseout=function(){
		saleToggle();
	}
	saleToggle();

	
	function saleToggle(){
		clearInterval(saleTimer);
		saleTimer=setInterval(function(){
			if(tmcsli[0].className=='active'){
				tmcsli1();
			}else{
				tmcsli0();
			}
		},3000);
	}

	function tmcsli0(){
		tmcsli[0].className='active';
		tmcsli[1].className='';
		tmcsSaleImg.src='img/index/tmcs/sale-img.jpg';
		tmcsSaleTitle.innerText='限时限量疯抢';
		tmcsSaleDesc.innerText='1元超值疯抢中';
	}

	function tmcsli1(){
		tmcsli[0].className='';
		tmcsli[1].className='active';
		tmcsSaleImg.src='img/index/tmcs/sale-img-1.jpg';
		tmcsSaleTitle.innerText='舒适宝卫生巾';
		tmcsSaleDesc.innerText='限时减10元';
	}
};

