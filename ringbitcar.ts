

/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */





/**
 * Custom blocks
 */
//% color=#0fbc11 weight=10 icon="\uf1b9"
namespace motorbit {

    /**
    * TODO: describe your function here
    * @param n the n from 0 (min) to 100 (max), eg:0
    */
    //% blockId=motorbit_forward block="move forward with speed %n"
    //% n.min=0 n.max=100
    export function forward(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=motorbit_back block="move back with speed %n"
    //% n.min=0 n.max=100
    export function back(n: number): void {
        // Add code here


        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)


    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=motorbit_turnleft block="turn left with speed %n"
    //% n.min=0 n.max=100
    export function turnleft(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=motorbit_turnright block="turn right with speed %n"
    //% n.min=0 n.max=100
    export function turnright(n: number): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, n * 1023 / 100)
        pins.analogWritePin(AnalogPin.P2, 0)

    }


    /**
     * TODO: describe your function here
     * 
     */
    //% blockId=motorbit_brake block="brake"
    export function brake(): void {
        // Add code here

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)

    }



    /**
    * TODO: describe your function here
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% blockId=motorbit_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here

        if (m > 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P1, m * 1023 / 100)
        }
        else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.analogWritePin(AnalogPin.P1, - m * 1023 / 100)
        }

        if (n > 0) {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P2, n * 1023 / 100)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.analogWritePin(AnalogPin.P2, - n * 1023 / 100)
        }

    }

}
