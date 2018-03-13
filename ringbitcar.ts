

/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */





/**
 * Custom blocks
 */
//% color=#0fbc11 weight=10 icon="\uf207"
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
    //% advanced=true
    //% blockId=ringbitcar_line_follow block="line follow"
    export function line_follow(): void {
        // Add code here

        pins.analogWritePin(pin_left_wheel, 0)
        pins.analogWritePin(pin_right_wheel, 0)

    }
    
    
    /**
    * TODO: describe your function here
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% advanced=true
    //% blockId=ringbitcar_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here

        if (m > 0) {
            pins.servoWritePin(AnalogPin.P1, 100 + m * 4 / 5)            
        } else if (m < 0){
            pins.servoWritePin(AnalogPin.P1, 80 + m * 4 / 5)
        } else pins.analogWritePin(AnalogPin.P1, 0)


        if (n > 0) {
            pins.servoWritePin(AnalogPin.P0, 80 - n * 4 / 5)
        } else if (n < 0) {
            pins.servoWritePin(AnalogPin.P0, 100 - n * 4 / 5)
        } else pins.analogWritePin(AnalogPin.P0, 0)

    }


}
