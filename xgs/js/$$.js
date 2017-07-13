
function $$(name)//获取选择器
{
	var prefix = name.charAt(0);
	if(prefix=="#"){ 
		var id = name.substring(1);
		return document.getElementById(id);
	}else if(prefix == "."){
		var className = name.substring(1);
		return getElementsByClassName(className);
	}else{
		return document.getElementsByTagName(name);
	}
}

function getElementsByClassName(ClassNmae)//getElementsByClassName ie6 7 8兼容
{
	if(document.getElementsByClassName)
	{
		return document.getElementsByClassName(ClassNmae);
	}
	else
	{
		var arrEles=[];//定义空数组
		//属于ie6，7，8，
		var allEles=document.getElementsByTagName("*");
		for (var i = 0; i < allEles.length; i++)
		{
			if (allEles[i].className==ClassNmae) 
			{
				arrEles.push(allEles[i]);
			}
		}
		return arrEles;
	}
}

function constant(ele,target)//匀速运动方法ele==ID，target==目标位置
{
	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var step=ele.offsetLeft<target?10:-10;
		ele.style.left=ele.offsetLeft+step+"px";
		if(Math.abs(ele.offsetLeft-target)<10)
		{
			ele.style.left=target+"px";
			clearInterval(ele.timer);
		}
	},10)
}

function chenge(ele,attrName,target)// 单属性  变速运动
{

	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var step=target<parseInt(getAttr(ele,attrName))?Math.floor((target-parseInt(getAttr(ele,attrName)))/10):Math.ceil((target-parseInt(getAttr(ele,attrName)))/10);
		
		ele.style[attrName]=parseInt(getAttr(ele,attrName))+step+"px";
		if(parseInt(getAttr(ele,attrName))-target==0)
		{
			clearInterval(ele.timer);
		}
	},10)
}

function anim(ele,json,func)//多属性同时变速运动 func回调函数
{
	clearInterval(ele.timer);
	ele.timer=setInterval(function()
	{
		var isStop=true;
		for(var attrName in json)
		{
			var step=null;
			if(attrName=="opacity")//判断是否为透明度
			{
				step = (json[attrName]*100-getAttrs(ele,attrName)*100)/10;
			}
			else
			{
				step = (json[attrName]-parseInt(getAttrs(ele,attrName)))/10;
			}

			step = step>0?Math.ceil(step):Math.floor(step);
			if(attrName=="opacity")//判断是否为透明度为期赋值。
			{
				ele.style[attrName]=(getAttrs(ele,attrName*100)+step)/100;
			}
			else if (attrName=="z-index")
			{
				ele.style.zIndex=json[attrName];
			}
			else
			{
				ele.style[attrName]=parseInt(getAttrs(ele,attrName))+step+"px";
			}
			var compare=(attrName=="opacity")?getAttrs(ele,attrName):parseInt(getAttrs(ele,attrName));//为停止计时器做准备
			if(compare!=json[attrName])
			{
				isStop=false;
			}
		}
			if(isStop)
			{
				clearInterval(ele.timer);
				if(func!=null)
				{
					func();//为回调函数 提供入口
				}
			}
	},10)
}

function getAttrs(ele,attrName)//获取外部样式值
{
	if (window.getComputedStyle(ele)[attrName]!=null)
	{
		 return window.getComputedStyle(ele)[attrName];
	}
	else
	{
		 return ele.currentStyle[attrName];
	}
}

function scrollTop()//
	{//滚动兼容性
		if(window.pageYOffset!=null)
		{
			return window.pageYOffset;//ie9以上
		}
		else
		{
			return document.documentElement.scrollTop;//ie678;
		}
	}

function exclude(ele)//排除思想
{
	for (var i = 0; i < ele.length; i++) 
	{
		ele[i].className="";
	}
}
