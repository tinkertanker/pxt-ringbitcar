
# Ring:bit Car Package
This ElecFreaks Ring:bit Car package was developed by [ElecFreaks](https://www.elecfreaks.com/) with minor assistance from [Tinkercademy](https://tinkercademy.com/).

[Ring:bit Car](http://www.elecfreaks.com/estore/ring-bit-car-mirco-bit-educational-smart-robot-kit-for-kids.html) is a DIY smart car which is based on BBC micro:bit and ELECFREAKS ring:bit. Ring:bit has extended 3 channels of GPIO, among which 2 channels are used for driving servos and one channel of GPIO is undefined. The basic version of ring:bit car can realize functions like road design, wireless remote control, graphic drawing etc.. By increasing other sensors' extension, this car can also realize functions line follow, light follow, barrier avoidance and so on.

![](https://i.imgur.com/TiLb9mB.png)



## Code Example
```JavaScript

let strip: neopixel.Strip = null
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})
basic.forever(function () {
    RingbitCar.freestyle(30, 90)
    basic.pause(1500)
    RingbitCar.freestyle(90, 30)
    basic.pause(1500)
})


```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

