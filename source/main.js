$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(function() {

    detectVisible();

    $(window).on('resize scroll', function() {
      detectVisible();
    });

    function detectVisible() {
      $('.painting_prv').each(function() {
        if ($(this).isInViewport()) {
          $(this).lazyload();
          $(this).removeClass('painting_prv')
        }
      });
    }

    //let images = document.querySelectorAll('.painting');
    //lazyload(images);

    const browser = browserDetect();

    if (browser.platform == 'macintel') $('html').addClass('macintel')

    $('.link').each(function(i,e){
      
      let href = location.origin + location.pathname + '#' + $(e).closest('.screen').attr('id');
      
      $(this).val(href).attr('value', href);

    })

    $('.btn_get').click(function(e){

      $('.window').addClass('window_visible');

    });

    $('.btn_copy').click(function(){

      $(this).find('.link')[0].select(); 
      $(this).find('.link')[0].setSelectionRange(0, 99999);


      document.execCommand("copy");

    });

    $('.window').click(function(e){

      if ( $(e.target).is('.window') ) $(this).removeClass('window_visible');

    })

    $('.page').addClass(browser.browserName).addClass(browser.isMobile);

    $('.page.not-mobile .screen').mouseenter(function(e){

      let container = $(this).find('.container');  
      let inner = $(this).find(".container__inner");

    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    mouse.setOrigin(container[0]);

    var counter = 0;
    var updateRate = 10;

    $(container).mouseenter(function(e){
      update(e);
    })

    $(container).mouseleave(function(e){
      
        $(inner).attr('style','');

    });

    $(container).mousemove(function(e){

      if (isTimeToUpdate()) {
        update(e);
      }

    });

    function isTimeToUpdate() {
      return counter++ % updateRate === 0;
    };

    function update(event) {
      mouse.updatePosition(event);

      updateTransformStyle(
        (mouse.y / $(inner)[0].offsetHeight / 2).toFixed(2),
        (mouse.x / $(inner)[0].offsetWidth / 2).toFixed(2)
      );

       

    };
  
    function updateTransformStyle(x, y) {

        

        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

        $(inner)[0].style.transform = style;
        $(inner)[0].style.webkitTransform = style;
        $(inner)[0].style.mozTransform = style;
        $(inner)[0].style.msTransform = style;
        $(inner)[0].style.oTransform = style;

    };


      

    });  

    /*
    // Init
    var containers = document.querySelectorAll(".container");

    for (var i = 0; i < containers.length; i++ ){

    var container = containers[i];  
    var inner = containers[i].querySelector(".container__inner");

  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      var inners = document.body.querySelectorAll(".container__inner");

      for (var i = 0; i < inners.length; i++){

        var inner = inners[i];
        inner.style = "";

      }  
      
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);

      var inners = document.body.querySelectorAll(".container__inner");

      for (var i = 0; i < inners.length; i++){

        var inner = inners[i];

        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );

      }  

    };
  
    var updateTransformStyle = function(x, y) {

      var inners = document.body.querySelectorAll(".container__inner");

      for (var i = 0; i < inners.length; i++){

        var inner = inners[i];

        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;

      }  
    };
  
    //-----------------------------------------
    
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;

    }
    */
 

    let current = '#f5f5f4';
    const colors = ['#f5f5f4', '#afafaa', '#312b2b', '#636159', '#404448', '#524147', '#aba087']

    $('.container').click(function(){

      let count;

      for (var i=0; i < colors.length; i++){

        if (current == colors[i]){

          current = (i < colors.length - 1) ? colors[i+1] : colors[0];
          
          break;
        }
      }  

        

        $('.page').css({
          background: current
        })

    }).children().click(function(e) {
      return false;
    });

  });

  function browserDetect() {

    var nav = navigator; 
    var nVer = nav.appVersion;
    var nAgt = nav.userAgent;
    var browserName = nav.appName;
    var fullVersion = '' + parseFloat(nav.appVersion);
    var majorVersion = parseInt(nav.appVersion, 10);
    var nameOffset, verOffset, ix;
    
  
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
      
    } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browserName = "ie";
      fullVersion = nAgt.substring(verOffset + 5);
      
    } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "chrome";
      fullVersion = nAgt.substring(verOffset + 7);
      
    } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
      
    } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "firefox";
      fullVersion = nAgt.substring(verOffset + 8);
      
    } else if (nAgt.indexOf("FBAN") != -1 && nAgt.indexOf("FBAV") != -1 ) {
      browserName = "facebook";
      fullVersion = 0;
      
    } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
      (verOffset = nAgt.lastIndexOf('/'))) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = nav.appName;
      }
    }
  
    if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);
  
    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(nav.appVersion);
      majorVersion = parseInt(nav.appVersion, 10);
    }
  
    var iOS = /iPad|iPhone|iPod/.test(nav.userAgent) && !window.MSStream;
    var ratio = window.devicePixelRatio || 1;
    var screen = {
      width : window.screen.width * ratio,
      height : window.screen.height * ratio
    };
    
    return {
      browserName: browserName.toLowerCase(),
      fullVersion: fullVersion,
      majorVersion: majorVersion,
      appName: nav.appName.toLowerCase(),
      userAgent: nav.userAgent.toLowerCase(),
      platform: nav.platform.toLowerCase(),
      iphoneX: (iOS && screen.width == 1125 && screen.height === 2436) ? 'iphoneX' : '',
      isMobile: (function () {
        var check = 'not-mobile';
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = 'mobile';
        })(nav.userAgent || nav.vendor || window.opera);
        return check;
      })()
    }
    
  };
  
  

  