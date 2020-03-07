
(function() {
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

  })();

  $(function(){
    let current = '#f5f5f4';
    const colors = ['#f5f5f4', '#afafaa', '#312b2b', '#636159', '#404448', '#524147', '#aba087']

    $('.page').click(function(){

      let count;

      for (var i=0; i < colors.length; i++){

        if (current == colors[i]){

          current = (i < colors.length - 1) ? colors[i+1] : colors[0];
          
          console.log(current)
          break;
        }
      }  

        

        $(this).css({
          background: current
        })

    })
  })