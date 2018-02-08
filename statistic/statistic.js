function random(s,e,c){
  if(Array.isArray(s)){return s[Math.floor(Math.random()*s.length)]}
  s=s||0;e=e||1;c=c||10;
  var cf = [0,1,2,3,4,5,6,7,8,9], res = 0;
  for(var i=1;i<=c;i++){res+=arguments.callee(cf)*Math.pow(0.1,i)}
  var n = res*(e-s)+s,e=c-1,p=10;
  return ((n||0)*Math.pow(p||10,e||0)).toFixed()/Math.pow(p||10,e||0)
}
module.exports = {
  random:random
}
