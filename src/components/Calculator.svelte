
<script lang="ts">
    import CalculatorModel from "../model/CalculatorModel";   
    import Button from "./Button.svelte";
    import Display from "./Display.svelte";
    import Line from "./Line.svelte";

    let calc = new CalculatorModel()

    const typedNumber = (num: string) => calc = calc.typedNumber(num)
    const typedOperation = (op: string) => calc = calc.typedOperation(op)
    const calculate = () => calc = calc.calculate()
    const typedPoint = () => calc = calc.typedPoint()
    const cleanDisplay = () => calc = calc.cleanDisplay()

</script>

<div class="calculator">
    <Display value={calc.value}/>
    <Line>
        <Button highlight tripleWidthButton={true} text="AC" onClick={cleanDisplay}/>
        <Button operation text="/" onClick={typedOperation}/>
    </Line>
    <Line>
        <Button text="1" onClick={typedNumber}/>
        <Button text="2" onClick={typedNumber}/>
        <Button text="3" onClick={typedNumber}/>
        <Button operation text="-" onClick={typedOperation}/>
    </Line>
    <Line>
        <Button text="4" onClick={typedNumber}/>
        <Button text="5" onClick={typedNumber}/>
        <Button text="6" onClick={typedNumber}/>
        <Button operation text="+" onClick={typedOperation}/>
    </Line>
    <Line>
        <Button text="7" onClick={typedNumber}/>
        <Button text="8" onClick={typedNumber}/>
        <Button text="9" onClick={typedNumber}/>
        <Button operation text="*" onClick={typedOperation}/>
    </Line>
    <Line>
        <Button doubleWidthButton text="0" onClick={typedNumber}/>
        <Button text="," onClick={typedPoint}/>
        <Button highlight text="=" onClick={calculate}/>
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--bg-color);
        height: 550px;
        width: 450px;
        padding: 10px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
    }
</style>