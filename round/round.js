function round(n,e,p){return ((n||0)*Math.pow(p||10,e||0)).toFixed()/Math.pow(p||10,e||0)}
function floor(n,e,p){return round((n||0)-Math.pow(1/p,e||0)/2,e)}
function ceil(n,e,p){return round((n||0)+Math.pow(1/p,e||0)/2,e)}
function trunc(n){if(n>0){return Math.floor(n);}return Math.ceil(n);}
function roundf32(x){var array = new Float32Array(1);return array[0]=x||0,array[0];}
function circular(a,n,m,d){var min=Math.min(n,m),max=Math.max(n,m),x=Number(a);while(x>max){x=x-max+min-1*!!d;}while(x<min){x=x-min+max+1*!!d;}return x;}
module.exports = {
  round:round,
  floor:floor,
  ceil:ceil,
  trunc:trunc,
  roundf32:roundf32,
  circular:circular
};
