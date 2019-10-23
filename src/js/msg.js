// 此文件完成弹幕的任务工程
// 创建一个弹幕的构造函数 来保存弹幕的必备数据
var msgObj=function(){
  // 弹幕中显示的文字
  this.m=[];
  // 弹幕的坐标
  this.x=[];
  this.y=[];
  // 弹幕移动速度
  this.spd=[];
  // 弹幕文字大小
  this.font=[];
  // 弹幕中文字颜色
  this.color=[];
  // 弹幕的状态
  this.alive=[];
}
msgObj.prototype.num=100;
// 初始化 为弹幕数据初始赋值
msgObj.prototype.init=function(){
  for(var i=0;i<this.num;i++){
    this.m[i]="";
    this.x[i]=canWidth;
    this.y[i]=100;
    this.spd[i]=3;
    this.font[i]="16px";
    this.color[i]="#000";
    this.alive[i]=false;
  }
  console.log(this.x);
}
//绘制函数   将数据绘制在网页中
msgObj.prototype.draw=function(){
  // 遍历所有弹幕
  ctx.clearRect(0,0,canWidth,canHeight);
  for(var i=0;i<this.num;i++){
    if(this.alive[i]){
      
      var c=this.color[i];
      var f=this.font[i];
      this.x[i]-=this.spd[i];
      var m=this.m[i];
      ctx.font=f+" SimHei";
      ctx.fillStyle=c;
      ctx.fillText(m,this.x[i],this.y[i]);
      if(this.x[i]<-10){
        // 移出屏幕后 重置
        this.alive[i]=false;
        this.x[i]=canWidth;
      }
    }
  }
  // 将alive为true的弹幕绘制在页面上

}
// add 将新弹幕添加到弹幕池中
msgObj.prototype.add=function(m){
  console.log(m);
  for(var i=0;i<this.num;i++){
    if(!this.alive[i]){
      this.alive[i]=true;
      // 将用户输入的弹幕信息添加到弹幕池中
      this.m[i]=m.msg;
      this.font[i]=m.f;
      this.color[i]=m.c;
      this.y[i]=Math.random()*canHeight;
      this.spd[i]=Math.random()*4+1;
      return;
    }
  }
}
