(function() {
  var g = document.getElementById('govian'),
      on = function(){ g.className = 'hover'; },
      off = function(){ g.className = ''; },
      l = g.getElementsByTagName('a'),
      i;

  g.onmouseenter = on;
  g.onmouseleave = off;
  for(i = 0; i < l.length; i++) {
    l[i].onfocus = on;
    l[i].onblur = off;
  }
}());
