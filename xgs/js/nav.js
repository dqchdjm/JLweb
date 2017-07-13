window.onload=function()
{
//右侧滚动栏事件
	var listH=$$(".h");
		var listHs=[];
		for (var k = 0; k < listH.length; k++) {
			listHs.push(listH[k].offsetTop);
		};
//导航栏------------------------------------------------------------------------------------------	
var lis=$$("#list").children[0].children;
var timer=null;
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onmouseover=function()
	{
		lis[this.index].className="list_no";
	}
}
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onmouseout=function()
	{
		lis[this.index].className="";
	}
}
// 导航栏滚动

	//执行移动
var at=0;
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function()
	{
		clearInterval(timer);
		at=scrollTop();
		console.log(at)
		var target= sum(this.index);
		timer=setInterval(function()
			{
				
				at+=(target-at)/10;
				window.scrollTo(0, at);
				if(parseInt(target-at)== 0)
				{
					clearInterval(timer);
				}
			},30)
	}
};
//返回
var ret=$$("#ret");
ret.onclick=function()
{	
	target=0;
	clearInterval(timer);
	timer=setInterval(function()
	{
			at+=(target-at)/10;
			window.scrollTo(0, at);
		if(parseInt(target-at)== 0)
		{
			clearInterval(timer);
		}
	},30)
}
	// 计算高度
function sum(i,listHs)
{
	var listH=$$(".h");

	//储存高
	var listHs=[];
	for (var k = 0; k < listH.length; k++) {
		listHs.push(listH[k].offsetTop);
	};
	var res=listHs[i]
	
	return res;
}
//图片移动
var img=$$("#img1").getElementsByTagName("img");
for (var i = 0; i < img.length; i++) {
	img[i].index=i;
	img[i].onmouseover=function()
	{
		img[this.index].style.marginLeft="-10px";
	}
}
for (var i = 0; i < img.length; i++) {
		img[i].index=i;
		img[i].onmouseout=function()
		{
			img[this.index].style.marginLeft=0;
		}
	}
		
}
//导航栏------------------------------------------------------------------------------------------	

