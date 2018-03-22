
# Ring:bit Car Package
This ElecFreaks Ring:bit Car package was developed by [ElecFreaks](https://www.elecfreaks.com/) with minor assistance from [Tinkercademy](https://tinkercademy.com/).

[Ring:bit car](http://www.elecfreaks.com/estore/ring-bit-car-mirco-bit-educational-smart-robot-kit-for-kids.html) is a DIY smart car which is based on BBC micro:bit and ELECFREAKS ring:bit. Ring:bit has extended 3 channels of GPIO, among which 2 channels are used for driving servos and one channel of GPIO is undefined. The basic version of ring:bit car can realize functions like road design, wireless remote control, graphic drawing etc.. By increasing other sensors' extension, this car can also realize functions line follow, light follow, barrier avoidance and so on.


![](https://github.com/elecfreaks/pxt-ringbitcar/blob/master/icon.png?raw=true)

## User Guide
[ElecFreaks Ring:bit Car User Guide](http://www.elecfreaks.com/estore/ring-bit-car-mirco-bit-educational-smart-robot-kit-for-kids.html)

## Code Example
```JavaScript
basic.forever(() => {
    RingbitCar.forward()
    basic.pause(1000)
    RingbitCar.turnleft()
    basic.pause(1000)
    RingbitCar.turnleft()
    basic.pause(1000)
    RingbitCar.back()
    basic.pause(2000)
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

