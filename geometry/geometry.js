function mag(...args){var ret=0;for(var a of args){if(Array.isArray(a)){ret += Math.pow(mag(...a),2)}else{ret += a*a;}}return Math.sqrt(ret)}
function mag2decibel(mag){return 20*Math.log(mag)/Math.log(10)}

function Vector(...args){
  var arr = [];
  arr.push.apply(arr,args.map(x=>Number(x)||0))
  arr.__proto__ = Vector.prototype
  Object.defineProperty(arr,'x',{get(){return this[0]},set(v){this[0]=v}})
  Object.defineProperty(arr,'y',{get(){return this[1]},set(v){this[1]=v}})
  Object.defineProperty(arr,'z',{get(){return this[2]},set(v){this[2]=v}})
  Object.defineProperty(arr,'w',{get(){return this[3]},set(v){this[3]=v}})
  Object.defineProperty(arr,'u',{get(){return this[4]},set(v){this[4]=v}})
  return arr
}
Vector.prototype = new Array;


Vector.has = function(vector,t,e){return typeof vector[t]!='number' || isNaN(vector[t])?e||0:vector[t]};
Vector.mag = function(vector,v){if(typeof v=='undefined'){return mag(vector)}return vector.normalize().mul(v)};
Vector.decibel = function(vector){return 20*Math.log(vector.mag())/Math.log(10)};
Vector.addMag = function(vector,v){return vector.setMag(vector.mag()+v)}
Vector.subMag = function(vector,v){return vector.addMag(-v);}
Vector.limit = function(vector,l){return vector.setMag(Math.min(vector.mag(),l));}
Vector.set = function(vector,...args){Vector.argsEach(args,v=>Object.assign(vector,v));return vector};
Vector.selfMap = function(vector,callback){return vector.set(vector.map(callback))};
Vector.add = function(vector,...args){Vector.argsEach(args,v=>vector.selfMap((c,i)=>c+v.has(i,0)));return vector};
Vector.sub = function(vector,...args){Vector.argsEach(args,v=>vector.selfMap((c,i)=>c-v.has(i,0)));return vector};
Vector.mul = function(vector,...args){args.forEach(x=>vector.selfMap(c=>c*x));return vector};
Vector.div = function(vector,...args){args.forEach(x=>vector.selfMap(c=>c/x));return vector};
Vector.invert = function(vector){return vector.mul(-1)};
Vector.inverse = function(vector){return vector.selfMap(x=>1/x)};
Vector.normalize = function(vector){return vector.div(vector.mag()||1)};
Vector.dot = function(vector,...args){var ret = 0, v=Vector.commuteArguments(args)[0];vector.map((c,i)=>ret+=c*v.has(i,0));return ret};
Vector.lerp = function(vector,amt,...args){Vector.argsEach(args,v=>vector.sub(v).mul(-amt));return vector};
Vector.copy = function(vector){return new Vector(...vector)};
Vector.abs = function(vector){return vector.selfMap(x=>Math.abs(x))};
Vector.sign = function(vector){return vector.selfMap(x=>Math.sign(x))};
Vector.cut = function(vector,i){if(vector.has(i,'not')!='not'){vector[i]=0}return vector};
Vector.lead = function(vector,i){if(vector.has(i,'not')!='not'){vector[i]/=(vector.mag()||1)}return vector};
Vector.project = function(vector,i){var mag=vector.mag();return vector.selfMap((c,j)=>j==i?mag:0)};
Vector.round = function(vector,n){n=Math.pow(10,n||0);return vector.selfMap(c=>Math.round(c*n)/n)};
Vector.floor = function(vector,n){n=Math.pow(10,n||0);return vector.selfMap(c=>Math.floor(c*n)/n)};
Vector.ceil = function(vector,n){n=Math.pow(10,n||0);return vector.selfMap(c=>Math.ceil(c*n)/n)};
Vector.random = function(vector,n){n=Math.pow(10,n||0);return vector.selfMap(c=>Math.round(Math.random()*n)/n)};
Vector.setAngle = function(vector,a,b){
  a=typeof a=='undefined'?vector.angle(0):a;b=typeof b=='undefined'?vector.angle(0):b;
  var l=vector.mag();return vector.set(Math.cos(a)*Math.cos(b),Math.sin(a)*Math.cos(b),Math.sin(b)).mul(l);
};
Vector.rotate = function(vector,a,b){return vector.setAngle(vector.angleXY()+a,vector.angleXZ()+b);};
Vector.angle = function(vector,i){return Math.acos(vector.lead(i))};
Vector.angle2 = function(vector,i,j){return Math.atan2(vector.has(i),vector.has(j))};
Vector.angleBetween = function(vector,...args){var v = Vector.commuteArguments(args)[0];return vector.angle(0) - v.angle(1)};
Vector.solidAngle = function(vector){return [vector.angle2(0,1),vector.angle2(0,2),vector.angle2(1,2)];};
Vector.spaceAngle = function(vector){return [vector.angle(0),vector.angle(1),vector.angle(2)]};
Vector.distance = function(vector,...args){return Vector.commuteArguments(args)[0].sub(vector).invert().mag()};
Vector.orthographic = function(vector,sx,sz){sz=typeof sz=='undefined'?sx:sz;return vector.set(vector[0]*sx,vector[2]*sz,0);}
Vector.perspective = function(vector){console.log(vector.toString());return vector.set(vector[0]/vector[2],vector[1]/vector[2],0);}

for(var g in Vector){(function(i){Vector.prototype[i] = function(){return Vector[i](this,...arguments)}})(g)}

Vector.X = 0;
Vector.Y = 1;
Vector.Z = 2;
Vector.W = 3;
Vector.U = 4;

Vector.getAxis = function(v){
  if(typeof v == 'string' && typeof Vector[v.toUpperCase()] == 'number'){return Vector[v.toUpperCase()]}
  else if(typeof v == 'number'){return v}
  return 0
}

Vector.is = function(v){return v instanceof Vector}

Vector.fromArray = function(args){
  if(!Array.isArray(args)){return Vector.commuteArguments(...arguments)}
  return new Vector(...args)
}

Vector.commuteArguments = function(args){
  if(!Array.isArray(args)){return Vector.commuteArguments(...arguments)}
  var ret = [], unret = [];
  for(var a of args){
    if(Vector.is(a)){ret.push(a);}
    else if(Array.isArray(a)){ret.push(Vector.fromArray(a))}
    else{unret.push(a)}}
  ret.push(Vector.fromArray(unret))
  return ret
}

Vector.argsEach = function(args,cb){
  if(Array.isArray(args)){
    var ret = Vector.commuteArguments(args)
    if(typeof cb == 'function'){ret.map(cb)}
    return ret
  }
  return false
}


module.exports = {
  mag: mag,
  mag2db: mag2decibel,
  Vector: Vector
}
