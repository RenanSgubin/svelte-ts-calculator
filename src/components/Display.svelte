
<script lang="ts">
    export let value: string

    $: fontSize = value.length > 32 ? `s-32`: 'pattern' 
</script>

<div class={`display ${fontSize}`}>
    <span>{value}</span>
</div>

<style>
    .display {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 10px;
        font-size: 1.7rem;
        background-color: aliceblue;
        overflow: hidden;
        margin: 3px 1px;
    }

    .pattern {
        font-size: 1.5rem;
    }

    .s-32 { font-size: 1.25rem; }

</style>