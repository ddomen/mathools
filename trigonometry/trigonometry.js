function tanh(n){return (Math.exp(n)-Math.exp(-n))/(Math.exp(n)+Math.exp(-n))}
function deg(x){return x/Math.PI*180}
function rad(x){return x*Math.PI/180}
function cot(x){return Math.cos(x)/Math.sin(x)}
function acot(x){return 1/Math.atan(x)}
function acot2(x,y){return 1/Math.atan2(x,y)}

module.exports = {
  tanh:tanh,
  deg:deg,
  rad:rad,
  cot:cot,
  acot:acot,
  acot2:acot2
}
