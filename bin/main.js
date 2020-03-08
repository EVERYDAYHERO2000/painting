"use strict";function browserDetect(){var e,i,t,o=navigator,n=(o.appVersion,o.userAgent),a=o.appName,s=""+parseFloat(o.appVersion),r=parseInt(o.appVersion,10);-1!=(i=n.indexOf("Opera"))?(a="opera",s=n.substring(i+6),-1!=(i=n.indexOf("Version"))&&(s=n.substring(i+8))):-1!=(i=n.indexOf("MSIE"))?(a="ie",s=n.substring(i+5)):-1!=(i=n.indexOf("Chrome"))?(a="chrome",s=n.substring(i+7)):-1!=(i=n.indexOf("Safari"))?(a="safari",s=n.substring(i+7),-1!=(i=n.indexOf("Version"))&&(s=n.substring(i+8))):-1!=(i=n.indexOf("Firefox"))?(a="firefox",s=n.substring(i+8)):-1!=n.indexOf("FBAN")&&-1!=n.indexOf("FBAV")?(a="facebook",s=0):(e=n.lastIndexOf(" ")+1)<(i=n.lastIndexOf("/"))&&(a=n.substring(e,i),s=n.substring(i+1),a.toLowerCase()==a.toUpperCase()&&(a=o.appName)),-1!=(t=s.indexOf(";"))&&(s=s.substring(0,t)),-1!=(t=s.indexOf(" "))&&(s=s.substring(0,t)),r=parseInt(""+s,10),isNaN(r)&&(s=""+parseFloat(o.appVersion),r=parseInt(o.appVersion,10));var c,d,l=/iPad|iPhone|iPod/.test(o.userAgent)&&!window.MSStream,m=window.devicePixelRatio||1,p=window.screen.width*m,f=window.screen.height*m;return{browserName:a.toLowerCase(),fullVersion:s,majorVersion:r,appName:o.appName.toLowerCase(),userAgent:o.userAgent.toLowerCase(),platform:o.platform.toLowerCase(),iphoneX:l&&1125==p&&2436===f?"iphoneX":"",isMobile:(d="not-mobile",c=o.userAgent||o.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0,4)))&&(d="mobile"),d)}}$(function(){var e=browserDetect();$(".link").each(function(e,i){var t=location.origin+location.pathname+"#"+$(i).closest(".screen").attr("id");$(this).val(t).attr("value",t)}),$(".btn_get").click(function(e){$(".window").addClass("window_visible")}),$(".btn_copy").click(function(){$(this).find(".link")[0].select(),$(this).find(".link")[0].setSelectionRange(0,99999),document.execCommand("copy")}),$(".window").click(function(e){$(e.target).is(".window")&&$(this).removeClass("window_visible")}),$(".page").addClass(e.browserName).addClass(e.isMobile),$(".page.not-mobile .screen").mouseenter(function(e){var i=$(this).find(".container"),n=$(this).find(".container__inner"),a={_x:0,_y:0,x:0,y:0,updatePosition:function(e){var i=e||window.event;this.x=i.clientX-this._x,this.y=-1*(i.clientY-this._y)},setOrigin:function(e){this._x=e.offsetLeft+Math.floor(e.offsetWidth/2),this._y=e.offsetTop+Math.floor(e.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}};a.setOrigin(i[0]);var t=0,o=10;function s(e){var i,t,o;a.updatePosition(e),i=(a.y/$(n)[0].offsetHeight/2).toFixed(2),t=(a.x/$(n)[0].offsetWidth/2).toFixed(2),o="rotateX("+i+"deg) rotateY("+t+"deg)",$(n)[0].style.transform=o,$(n)[0].style.webkitTransform=o,$(n)[0].style.mozTransform=o,$(n)[0].style.msTransform=o,$(n)[0].style.oTransform=o}$(i).mouseenter(function(e){s(e)}),$(i).mouseleave(function(e){$(n).attr("style","")}),$(i).mousemove(function(e){t++%o==0&&s(e)})});var i="#f5f5f4",t=["#f5f5f4","#afafaa","#312b2b","#636159","#404448","#524147","#aba087"];$(".container").click(function(){for(var e=0;e<t.length;e++)if(i==t[e]){i=e<t.length-1?t[e+1]:t[0];break}$(".page").css({background:i})}).children().click(function(e){return!1})}); console.log("0.0.1");
//# sourceMappingURL=main.js.map
