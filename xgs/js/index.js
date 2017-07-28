// 代码开始
window.onload=function()
{
//右侧滚动栏事件
// ---------------大广告------------大广告-----------------大广告----------------------------------------------
		var box=$$("#fs_col2");
		var dir_l=$$(".dir")[0];
		var dir_r=$$(".dir")[1];
		var fsList=box.children[0].children;
		var images = ["./images/01.jpg","./images/02.jpg","./images/03.jpg","./images/04.jpg","./images/05.jpg","./images/06.jpg"];
		
      	box.style.backgroundImage="url("+images[0]+")";

						// 鼠标切换广告图
for (var i = 0; i < fsList.length; i++) {
	fsList[i].a=i;

	fsList[i].onmouseover=function()
	{
		exclude(fsList);

		fsList[this.a].className="fs_first";
		box.style.backgroundImage="url("+images[this.a]+")";
	}
};
							//计时器切换图片
var indexBig=0;
var timer=setInterval(function()
{
	indexBig ++;
	indexBig %= images.length;
	box.style.backgroundImage="url("+images[indexBig]+")";
	exclude(fsList);
	fsList[indexBig].className="fs_first";
},3000)
		
//方向显示与隐藏
box.onmouseover=function()
{
	// clearInterval(timer);
	dir_l.style.display="block";
	dir_r.style.display="block";
}
box.onmouseout=function()
{
	dir_l.style.display="none";
	dir_r.style.display="none";
}
var indexs=0;
dir_l.onmouseover=function()
{
		dir_l.style.backgroundColor="rgba(0,0,0,0.6)";
	if (indexs>0) {
		indexs--;
		console.log(indexs)
		box.style.backgroundImage="url("+images[indexs]+")";
	};
	
	
}
dir_l.onmouseout=function()
{
	dir_l.style.backgroundColor="rgba(0,0,0,0.1)";
}
dir_l.onclick=function(){
	if (indexs>0) {
		indexs--;
		console.log(indexs)
		box.style.backgroundImage="url("+images[indexs]+")";
	};
}
dir_r.onclick=function(){
	if (indexs<images.length) {
		indexs++;
		console.log(indexs)
		box.style.backgroundImage="url("+images[indexs]+")";
	};
}
dir_r.onmouseover=function()
{
	dir_r.style.backgroundColor="rgba(0,0,0,0.6)";
}
dir_r.onmouseout=function()
{
	dir_r.style.backgroundColor="rgba(0,0,0,0.1)";
}

// 京东秒杀------------------------------------------------------------------------------------------	
	var seckillLeft=$$(".seckill-box-left")[0];
	var seckillRight=$$(".seckill-box-right")[0];
	var skul=$$(".sk_list_wrapper")[0].children[0];

	seckillLeft.onclick=function()//ul左移动
	{
		anim(skul,{"left":-1005})
	}
	seckillRight.onclick=function()//ul右移动
	{
		anim(skul,{"left":0})
	}
	var skli=skul.children;
	for (var i = 0; i < skli.length; i++) {//小图片上下移动
		skli[i].a=i;
		skli[i].onmouseover=function()
		{
			var skImg=skli[this.a].children[0];
			anim(skImg,{"top":-10})
			// console.log(skImg)
		}
		skli[i].onmouseout=function()
		{
			var skImg=skli[this.a].children[0];
			anim(skImg,{"top":0})
			// console.log(skImg)
		}
	};
// 排行榜------------------------------------------------------------------------------------------	
var topMove=$$("#top_tab_head_move");
var topUl=$$(".top_tab_content")[0].children;
var topList=$$(".top_tab_head")[0].children[0].children;
for (var i = 0; i < topList.length; i++) {
	topList[i].a=i;
	topList[i].onmouseover=function()
	{
		for (var i = 0; i < topList.length; i++) {
			topUl[i].className="none";
		};
		var locationMove=75*this.a;
		anim(topMove,{"left":locationMove})
		topUl[this.a].className="";
	}
};

	
}

