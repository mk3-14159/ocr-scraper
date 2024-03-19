<script lang="ts">
    import { main } from '../script/main'; // It might not be wise to run this as a server side function 
    let input: string = '';
</script>

<h1>Selenium OCR scraper</h1>

<input type="text" bind:value={input} placeholder="Enter Link"> 
<button on:click={main}>Submit</button>
