var system ={
win : false,
mac : false,
xll : false
};
//检测
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
  document.writeln("<div align='center'><a href=\'http://www.mmfldh.com\' target=\'_blank\' ><img src=\'https://wx3.sinaimg.cn/mw690/0060lm7Tly1ftiu9zkxy9j30rs01fq3d.jpg\'width=\'100%\'></a><\/div>");//zhaozu

}else{
document.writeln("<div align='center'><a href=\'http://www.mmfldh.com\' target=\'_blank\' ><img src=\'https://wx3.sinaimg.cn/mw690/0060lm7Tly1ftiu9zkxy9j30rs01fq3d.jpg\'width=\'100%\'></a><\/div>");//zhaozu
}
