(function(window,undefined){
  'use strict';
  var _i = 0;

  function TurnText(parent,n){
    var config = {};
    this.get = function (n) {
      return config[n];
    }
    this.set = function(n,v){
      config[n] = v;
    }
    this.init(parent,n);
  };

  TurnText.prototype = {
    init: function(parent,n){
      this.render(parent,n);
    },

    render: function(parent,n){
      var length = n.length;
      var el = document.createElement('div');
      for(var i=0;i < length;i++){
        var s = document.createElement('span');
        var text = n.substr(i,1);
        // if(text === ',')
        this.runMath(parent,s,text,20);
        s.innerText = 0;
      }
    },
    runMath: function(parent,el,text,time){
      parent.appendChild(el);
      var c = 1+Math.round(Math.random()*9);
      var round = 0;
      var maxRound = _i;
      var turnn = function(el,time){
        if(c<10){
          setTimeout(function(){
            el.innerText = c;
            c++;
            turnn(el,time);
          },time)
        }else{
          if(round<maxRound){
            c = 0;
            turnn(el,time);
            round++;
          }else{
            el.innerText = text;
            return;
          }
        }
      }
      turnn(el,time);
      _i++;
    }
  };
  window.TurnText = window.TurnText || TurnText;

})(window);
