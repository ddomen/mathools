function log(n,b){return Math.log(n)/Math.log(typeof b=='undefined'?Math.E:b)}
function root(x,n){return Math.pow(x,1/(n||2))}
function min(...args){
  var r=NaN,m;
  for(var x of args){
    if(Array.isArray(x)){m = min(...x)}
    else{m=parseFloat(x)}
    if(!isNaN(m)&&m<r||isNaN(r)){r=m;}
  }
  return r;
}
function max(...args){
  var r=NaN,m;
  for(var x of args){
    if(Array.isArray(x)){m = max(...x)}
    else{m=parseFloat(x)}
    if(!isNaN(m)&&m>r||isNaN(r)){r=m;}
  }
  return r;
}
function sum(...args){
  var r=0,m;
  for(var x of args){
    if(Array.isArray(x)){m = sum(...x)}
    else{m=parseFloat(x)}
    r+=m||0;
  }
  return r;
}
function prod(...args){
  var r=1,m;
  for(var x of args){
    if(Array.isArray(x)){m = prod(...x)}
    else{m=parseFloat(x)}
    r*=isNaN(m)?1:m;
  }
  return r;
}
function between(n,a,b){return Math.min(Math.max(a,b),Math.max(Math.min(a,b),n))}
module.exports = {
  log:log,
  root:root,
  max:max,
  min:min,
  sum:sum,
  prod:prod,
  between:between
}
