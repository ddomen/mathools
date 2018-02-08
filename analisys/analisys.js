function fourier(r,i,v){
  if(Array.isArray(r)&&Array.isArray(i)){
    v=Number(v)||1;
    r=r.map(e=>e*v);
    i=i.map(e=>e*v);
    i.unshift(0);
    return function(a){
      var o=(Number(r[0])||0)/2;
      for(var x in r){if(x==0){continue}o+=r[x]*Math.cos(x*a)}
      for(var y in i){o+=i[y]*Math.sin(y*a);}
      return o
    }
  }
  else{throw 'real and imaginary part must be arrays';}
}
function derivateR1(fun,prec){
  if(typeof fun != 'function'){throw 'function argument[0] must be of Function type'}
  var h = Math.pow(0.1,prec||5);
  return function(x){return (fun.call(null,x+h)-fun.call(null,x))/h}
}
function derivate(fun,dir,prec){
  if(typeof fun != 'function'){throw 'function argument[0] must be of Function type'}
  if(typeof dir == 'number' && !isNaN(dir)){return derivate(fun,'x',dir)}
  switch(dir){
    case 'x':dir=[1,0,0];break;
    case 'y':dir=[0,1,0];break;
    case 'z':dir=[0,0,1];break;
  }
  dir = dir || [1,0,0]
  if(!Array.isArray(dir)){throw 'no derivate direction retrived'}
  var magDir = Math.sqrt(dir.reduce((x,y,z)=>z==1?x*x+y*y:x+y*y)), prc = Math.pow(0.1,prec||5);
  dir = dir.map(x=>x*prc/magDir)
  if(dir.some(x=>!isFinite(x))){throw 'no derivate direction given'}
  return function(...args){
    var delta = args.map((x,i)=>x+(dir[i]||0)),
    ds = fun.apply(null,delta),
    xs = fun.apply(null,args);
    if(!Array.isArray(ds)){ds = [ds]}
    if(!Array.isArray(xs)){xs = [xs]}
    return ds.map((x,i)=>(x-(xs[i]||0))/prc)
  }
}
module.exports = {
  fourier: fourier,
  derivate: derivate,
  derivateR1: derivateR1
}

// f(x) = (F(x+h) - F(x))/h
// F(x+h) - F(x) = f(x) * h
