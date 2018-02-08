# @mathools/round
[![License](https://img.shields.io/badge/License-MIT-1a237e.svg)](./LICENSE)
[![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)

[@mathools](https://github.com/ddomen/mathools) round module for approximations calcs

### Installing
For install library is easy to install by cloning the repo.
You can install trhought npm too:
Local installation
```
npm install @mathools/round
```
Global installation
```
npm install -g @mathools/round
```

## Contains
* **Round** `round(number, decimals=0, pass=10)` => the `number` rounded at `pass` with `decimals` approximation

* **Floor** `floor(number, decimals=0, pass=10)` => the `number` rounded down at `pass` with `decimals` approximation

* **Ceil** `ceil(number, decimals=0, pass=10)` => the `number` rounded up at `pass` with `decimals` approximation

* **Trunc** `trunc(number)` => truncate the number loosing all decimals

* **Round (Float 32)** `roundf32(number)` => round the number to the nearest float32 number

* **Circular** `circular(number, min, max, inclused)` => costrain a `number` to stay between `min` and `max` (if `inclused` is tru `min` and `max` are inclused (>=min, <=max), else are rejected (>min, <max))

## Contacts
If you like the project feel free to contact me on my [![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com).

Something gone wrong? Feel free to rise an issue!

Did you like this project and it was usefull? Help me improve my work:

[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)
