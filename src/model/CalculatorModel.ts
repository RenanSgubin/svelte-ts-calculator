
const notCleanDisplay = false;
const cleanDisplayTrue = true;

export default class CalculatorModel {
     #value: string
     #accumulator: number
     #operation: string
     #cleanDisplay: boolean

     constructor(value: string = null, accumulator: number = null, operation: string = null, cleanDisplay = false) {
        this.#value = value
        this.#accumulator = accumulator
        this.#operation = operation
        this.#cleanDisplay = cleanDisplay
     }

     get value() {
        return this.#value?.replace('.',',') || '0'
     }

     typedNumber(newValue: string) {
        return new CalculatorModel(
            (this.#cleanDisplay || !this.#value )? newValue: this.#value + newValue,
            this.#accumulator,
            this.#operation,
            notCleanDisplay
        )
     }

     typedPoint() {
        return new CalculatorModel(
            this.#value?.includes('.') ? this.#value : this.#value + '.',
            this.#accumulator,
            this.#operation,
            notCleanDisplay
        )
     }

     cleanDisplay() {
        return new CalculatorModel()
     }

     typedOperation(nextOperation: string) {
        return this.calculate(nextOperation)
     }

     calculate(nextOperation: string = null) {
        const accumulator = !this.#operation ? parseFloat(this.#value) : 
        eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)
        const value = !this.#operation ? this.#value : `${accumulator}`

        return new CalculatorModel(
            value,
            accumulator,
            nextOperation,
            nextOperation ? cleanDisplayTrue : notCleanDisplay
        )
     }

}