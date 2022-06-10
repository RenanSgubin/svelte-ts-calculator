
<script lang="ts">
    export let text: string
    export let tripleWidthButton: boolean = false
    export let doubleWidthButton: boolean = false
    export let operation: boolean = false
    export let highlight: boolean = false
    
    export let onClick: (value: string) => void = () => {}

</script>

<button class="button" 
    on:click={ () => onClick(text)}
    class:tripleWidthButton 
    class:doubleWidthButton
    class:operation
    class:highlight>
    {text}
</button>

<style>
    .button {
        flex-basis: 25%;
        height: 10vh;
        margin: 0;
        border: 1px solid var(--bg-color);
        font-size: 1.35rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        transition: 0.1s all;
        cursor: pointer;
    }

    .button:hover {
        filter: brightness(80%);
    }

    .tripleWidthButton {
        flex-basis: 75%;
    }

    .doubleWidthButton {
        flex-basis: 50%;
    }

    .operation {
        background-color: orange;
        color: rgb(239, 239, 239);
    }

    .highlight {
        background-color: rgb(244, 52, 52);
        color: rgb(239, 239, 239);
    }

</style>