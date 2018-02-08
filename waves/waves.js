function parametric(a,deg){if(deg){while(a>360){a-=360;}while(a<0){a+=360;}}else{while(a>Math.PI*2){a-=Math.PI*2;}while(a<0){a+=Math.PI*2;}}return a;}
function square(a){return Math.sign(Math.sin(a))}
function trinagle(a){return 2/Math.PI*Math.asin(Math.sin(a))}
function sawtooth(a){return 2/Math.PI*Math.atan(Math.cot(a))}
function rounded(a){return Math.round(Math.sin(a))}
function noise(){return 2*Math.random()-1}

module.exports= {
  parametric:parametric,
  square:square,
  trinagle:trinagle,
  sawtooth:sawtooth,
  rounded:rounded,
  noise:noise
}
