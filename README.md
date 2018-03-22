# Motor:bit Package
This ElecFreaks Motor:bit package was developed by [ElecFreaks](https://www.elecfreaks.com/) with minor assistance from [Tinkercademy](https://tinkercademy.com/).

The [ElecFreaks Motor:bit](http://www.elecfreaks.com/estore/elecfreaks-motor-bit-for-micro-bit.html) is an integrated motor driver and breakout board for the BBC micro:bit. With an integrated motor driver chip TB6612, your micro:bit can drive two DC motors with 1.2A max single channel current. 

The Motor:bit also features the Octopus series "GVS" connectors, allowing for easy direct connection to compatible Octopus sensors and outputs. Among these connectors, P0, P3-P7, P9-P10 support sensors with 3.3V power voltage only; P13-P16, P19-P20 support 3.3V or 5V sensors. You can change the output voltage by sliding the switch on the board.

If you're using your own breakout board or motor driver, connect your driver such that P8 and P12 control direction, and P1 and P2 control speed.

![](https://github.com/tinkertanker/pxt-motorbit/blob/master/icon.png?raw=true)

## User Guide
[ELECFREAKS Motor:bit User Guide](https://www.elecfreaks.com/11703.html)

## Code Example
```JavaScript
basic.forever(() => {
    motorbit.forward(70)
    basic.pause(2000)
    motorbit.back(50)
    basic.pause(2000)
    motorbit.turnleft(50)
    basic.pause(2000)
    motorbit.turnright(50)
    basic.pause(2000)
    motorbit.brake()
    basic.pause(2000)
    motorbit.freestyle(-40, 30)
    basic.pause(2000)
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

