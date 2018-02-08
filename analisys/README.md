# @mathools/analisys
[![License](https://img.shields.io/badge/License-MIT-1a237e.svg)](./LICENSE)
[![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)

[@mathools](https://github.com/ddomen/mathools) analisys module for analisys functions

### Installing
For install library is easy to install by cloning the repo.
You can install trhought npm too:
Local installation
```
npm install @mathools/analisys
```
Global installation
```
npm install -g @mathools/analisys
```

## Contains
* **Derivate (Rn)** `derivate(function, [direction='x',] precision=5)` => ![log](http://latex.codecogs.com/gif.latex?(function(x&space;&plus;&space;direction\cdot0.1^{precision}&space;)&space;-&space;function(x))/(0.1^{precision}))

`direction` can be an Array or 'x','y','z' strings;

* **Derivate (R1)** `derivateR1(function, precision=5)` => ![root](http://latex.codecogs.com/gif.latex?(function(x&space;&plus;&space;0.1^{precision}&space;)&space;-&space;function(x))/(0.1^{precision}))

* **Fourier** `fourier(real, imaginary, scale)` => compute a Fourier Series: `function(x){return real[0]/2 * sum[i](real[i] * cos(i*x)) + sum[i](imaginary[i] * sin(i*x))}`

## Contacts
If you like the project feel free to contact me on my [![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com).

Something gone wrong? Feel free to rise an issue!

Did you like this project and it was usefull? Help me improve my work:

[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)
