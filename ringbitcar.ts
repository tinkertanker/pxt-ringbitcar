

/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */





/**
 * Custom blocks
 */
//% color=#0fbc11 weight=10 icon="\uf1b9"
namespace RingbitCar {

    let pin_left_wheel = AnalogPin.P1
    let pin_right_wheel = AnalogPin.P2

    /**
    * TODO: describe your function here
    * @param left describe parameter here, eg: AnalogPin.P1
    * @param right describe parameter here, eg: AnalogPin.P2
    */
    //% blockId=ringbitcar_init block="set left wheel at pin %left|right wheel at ping %right"
    export function init_wheel(left: AnalogPin, right: AnalogPin): void {
        // Add code here

        pin_left_wheel = left
        pin_right_wheel = right

    }


    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_forward block="move forward"
    export function forward(): void {
        // Add code here

        pins.servoWritePin(pin_left_wheel, 180)
        pins.servoWritePin(pin_right_wheel, 0)

    }

    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_back block="move back"
    export function back(): void {
        // Add code here

        pins.servoWritePin(pin_left_wheel, 0)
        pins.servoWritePin(pin_right_wheel, 180)

    }

    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_left block="turn left"
    export function turnleft(): void {
        // Add code here

        pins.servoWritePin(pin_left_wheel, 0)
        pins.servoWritePin(pin_right_wheel, 0)

    }


    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_right block="turn right"
    export function turnright(): void {
        // Add code here

        pins.servoWritePin(pin_left_wheel, 180)
        pins.servoWritePin(pin_right_wheel, 180)

    }


    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_brake block="brake"
    export function brake(): void {
        // Add code here

        pins.analogWritePin(pin_left_wheel, 0)
        pins.analogWritePin(pin_right_wheel, 0)

    }


    /**
    * TODO: describe your function here
    */
    //% blockId=ringbitcar_line_follow block="line follow"
    export function line_follow(): void {
        // Add code here

        pins.analogWritePin(pin_left_wheel, 0)
        pins.analogWritePin(pin_right_wheel, 0)

    }


}
