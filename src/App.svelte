
<script lang="ts">
  import Button from './components/Button.svelte';
  import Calculator from './components/Calculator.svelte';
</script>

<main>
    <Calculator/>
</main>

<style>

  :global(body) {
    background-color: rgb(35, 35, 35);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :root {
    --bg-color: #555;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
