(function(window,undefined){
  'use strict';

  function TurnText(n){
    var config = {};
    this.get = function (n) {
      return config[n];
    }
    this.set = function(n,v){
      config[n] = v;
    }
    this.init(n);
  };

  TurnText.prototype = {
    init: function(n){
      this.render(n);
    },

    render: function(n){
      alert(n)
    },
  };
  window.TurnText = window.TurnText || TurnText;

})(window);
