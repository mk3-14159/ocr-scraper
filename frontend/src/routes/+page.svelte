<script lang="ts">
    // let uploadedImage: File | null = null;
    let input: string = '';
    let output: string = '';

    // filler function
    function process_onclick(): void {
        output = `processed ${input}`;
    }
</script>

<div class="title">
    <h1>Selenium OCR scraper</h1>
</div>

<div class="main">
    <input type="text" bind:value={input} placeholder="Enter Link"> 
    <button on:click={process_onclick}>Submit</button>
    <!-- <p>{output}</p> -->
</div>

<div class="ret">
    <p>{output}</p>
</div>



<style>
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 30vh;
    height: 10%;
    margin: 0;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 10vh;
  height: 100%;
  margin: 0;
}

.ret {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 10vh;
    height: 100%;
    margin: 0;
}
</style>
