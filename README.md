# Motor:bit Package
ELECFREKAS Motor:bit package is developed under the cooperation  of [ELECFREAKS](https://www.elecfreaks.com/) and [TINKERCADEMY](https://tinkercademy.com/).

[ELECFREKAS Motor:bit](http://www.elecfreaks.com/estore/elecfreaks-motor-bit-for-micro-bit.html) is a kind of motor drive board based on micro:bit. It has integrated a motor drive chip TB6612, which can drive two DC motors with 1.2A max single channel current. Motor:bit has integrated Octopus series' sensor connectors. You can plug various sensors into it directly. Among these connectors, P0, P3-P7, P9-P10 support sensors with 3.3V power voltage only; P13-P16, P19-P20 support 3.3V or 5V sensors. You can change electric level by sliding the switch on the board.

![](https://github.com/elecfreaks/pxt-mototbit/blob/master/icon.png?raw=true)

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

