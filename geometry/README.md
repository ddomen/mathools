# @mathools/gemoetry
[![License](https://img.shields.io/badge/License-MIT-1a237e.svg)](./LICENSE)
[![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)

[@mathools](https://github.com/ddomen/mathools) geometry module for vector calcs

### Installing
For install library is easy to install by cloning the repo.
You can install trhought npm too:
Local installation
```
npm install @mathools/geometry
```
Global installation
```
npm install -g @mathools/geometry
```

## Contains
* **Magnitude** `mag([Vector|arguments])` => ![mag](http://latex.codecogs.com/gif.latex?\sqrt{\sum_{Vector}^{v}v^{2}})

* **Decibels** `mag2decibel(magnitude)` => ![mag2decibel](http://latex.codecogs.com/gif.latex?20&space;\cdot&space;log_{10}(magnitude))

* **Vector** `Vector([arguments]) extends Array`
Vector class extends Array with some utils function for Vectors calcs. Function that are allowed only with Vectors takes `Vector|arguments` as parameter, and automatically convert Array, Vector or arguments Array to a usable Vector. Every function that doesnt return a value, return the Vector object. Every function has both static and instance scope, and can be called in two way: `Vector.function( myVector, arguments )` or `myVector.function( arguments )`.

*NB: [arguments] isn't an Array of numbers but the Array argument of the function, so it is possible to call a function in three way: `function(0,1,2,3)` or `function([0,1,2,3])` or `function(new Vector(0,1,2,3))` and the result are the same*

  * `has(index,fallback)` => return the index-th-component of the vector if present, fallback otherwise *[scalar]*
  * `mag(magnitude)` => if no `magnitude` return the Vector's magnitude *[scalar]*, else set it and return the Vector
  * `decibel()` => convert the Vector's magnitude to decibels *[scalar]*
  * `addMag(value)` => add the `value` to the magnitude
  * `subMag(value)` => subtract the `value` from the magnitude
  * `limit(limit)` => constrain the magnitude to be less than `limit`
  * `set([arguments])` => set the components of the Vecotr
  * `selfMap(callback(currValue,index,array))` => set the Vector's components with the results of calling `callback` function on every component (Array.map + Vector.set)
  * `add([Vector|arguments])` => add the `arguments` to the Vector's components
  * `sub([Vector|arguments])` => subtract the `arguments` to the Vector's components
  * `mul([arguments])` => multilpy each component with the arguments
  * `div([arguments])` => divide each component with the arguments
  * `invert()` => set `-component` of each component
  * `inverse()` => set `1/component` of each component
  * `normalize()` => set the magnitude to 1 (Normalized Vector)
  * `dot(Vector|arguments)` => return the dot product between two Vectors ()
  * `lerp(value, [Vector|arguments])` => subract the `arguments` and multiply it by `value`
  * `copy()` => return a copy of the Vector
  * `abs()` => set each component to his absolute value
  * `sign()` => set each component to his sign value
  * `cut(i)` => set to 0 the ith-component of the vector
  * `lead(i)` => set to `component/magnitude` the ith-component of the vector
  * `project(i)` => set 0 all components except the ith-component that is setted as magnitude
  * `round(decimals)` => round all components with `decimals` approximation
  * `floor(decimals)` => floor all components with `decimals` approximation
  * `ceil(decimals)` => ceil all components with `decimals` approximation
  * `random(decimals)` => set every component to random value with `decimals` approximation
  * `setAngle(angleXY, angleXZ)` => set angle of the Vector
  * `rotate(angleXY, angleXZ)` => rotate of an angle the Vector
  * `angle(i)` => return a the angle of the ith-component with the 0th-component axis (X-Axis) *[scalar]*
  * `angle2(i,j)` => return the angle of the ith-component with the j-th component axis *[scalar]*
  * `angleBetween(Vector|arguments)` => return the angle between two Vector *[scalar]*
  * `solidAngle()` => return an Array of angles `[ angleXY, angleXZ, angleYZ ]` *[scalar[]]*
  * `spaceAngle()` => return an Array of angles `[ angleX, angleY, angleZ ]` *[scalar[]]*
  * `distance(Vector|arguments)` => return the distance between two Vectors *[scalar]*
  * `orthographic(scaleX,scaleZ)` => orthographic projection - set the Vector's 3D components to `[ x*scaleX, y*scaleZ, 0 ]`
  * `perspective()` => perspective - set the Vector's 3D components to `[ x/z, y/z, 0 ]`

  ## Contacts
  If you like the project feel free to contact me on my [![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com).

  Something gone wrong? Feel free to rise an issue!

  Did you like this project and it was usefull? Help me improve my work:

  [![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
  [![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)
