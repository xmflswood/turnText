(function(window){
  'use strict';
  var _i = 0;
  function TurnText(parent,n,speed){
    var config = {};
    this.get = function (n) {
      return config[n];
    }
    this.set = function(n,v){
      config[n] = v;
    }
    this.set('parent',parent);
    this.set('n',n);
    speed ? this.set('speed',speed) : this.set('speed',30);
    this.init();
  };
  TurnText.prototype = {
    init: function(){
      this.render();
    },
    refresh: function(n){
      _i = 0;
      // 数字小于原来或者位数超过原本 直接全部重置
      if(parseInt(n) < parseInt(this.get('n')) || n.length>this.get('n').length){
        this.set('n',n);
        this.cleanEl();
        this.render();
      }else{
        // 按位重置
        this.cleanEl();
        var preN = this.get('n');
        var parent = this.get('parent');
        this.set('n',n);
        for(var i =0;i<n.length;i++){
          var s = document.createElement('span');
          if(n.substr(i,1) == preN.substr(i,1)){
            s.innerText = n.substr(i,1);
            parent.appendChild(s);
          }else{
            break;
          }
        }
        for(;i<n.length;i++){
          var s = document.createElement('span');
          this.runMath(s,n.substr(i,1));
          parent.appendChild(s);
        }
      }
    },
    render: function(){
      var parent = this.get('parent');
      var n = this.get('n');
      var length = n.length;
      var el = document.createElement('div');
      var parent = this.get('parent');
      for(var i=0;i < length;i++){
        var s = document.createElement('span');
        var text = n.substr(i,1);
        this.runMath(s,text);
        s.innerText = 0;
        parent.appendChild(s);
      }
    },
    runMath: function(s,text){
      var speed = this.get('speed');
      var c = 1+Math.round(Math.random()*9);
      var round = 0;
      var maxRound = _i;
      var turn = function(s){
        if(c<10){
          setTimeout(function(){
            s.innerText = c;
            c++;
            turn(s);
          },speed)
        }else{
          if(round<maxRound){
            c = 0;
            turn(s);
            round++;
          }else{
            s.innerText = text;
            return;
          }
        }
      }
      turn(s);
      _i++;
    },
    cleanEl: function(){
      this.get('parent').innerHTML = '';
    }
  };
  window.TurnText = window.TurnText || TurnText;
})(this);
