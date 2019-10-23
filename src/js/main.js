// 弹幕的主管程序
// 创建全局变量来保存弹幕对象
var msg;
// 创建变量来保存从网页获得的元素
//画布和画笔
var cv,ctx;
// 画布的宽度和高度
var canWidth,canHeight;
// 输入框 颜色 字体 按钮
 var inputMsg,inputColor,inputFont,inputBtn;
// 入口函数
function game(){
  init();
  gameloop();
}
// 初始化函数
function init(){
  // 获得页面上的元素
  cv=document.getElementById("cv");
  ctx=cv.getContext("2d");
  canWidth=cv.width;
  canHeight=cv.height;
  inputMsg=document.getElementById("inputMsg");
  inputColor=document.getElementById("inputColor");
  inputFont=document.getElementById("inputFont");
  inputBtn=document.getElementById("inputBtn");
  inputBtn.onclick=addMsg;
  // 创建弹幕对象
  msg=new msgObj;
  // 弹幕初始化
  msg.init();
}
// 循环绘制函数
function gameloop(){
  // 创建智能定时器
  requestAnimationFrame(gameloop);
  // 调用弹幕绘制方法
  msg.draw();
}
function addMsg(e){
  e.preventDefault();
  msg.add({msg:inputMsg.value,f:inputFont.value,c:inputColor.value});
}
// 网页内容加载成功后调用game
document.body.onload=game;