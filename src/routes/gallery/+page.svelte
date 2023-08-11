<script>
// @ts-nocheck

  import Window from '../Window.svelte'
  import TextWindow from '../TextWindow.svelte'

  let imageNames = [
    "Thatplaceagain",
    "idk",
    "idk2",
    "Lore",
    "Violin",
    "Guitar",
    "Jazztaur",
    "Emtaur",
    "Chara",
    "Fai Kao",
    "Friskmon",
    "HappyFeet2",
  ]

  let currentIndex = 0
</script>

<Window title="image_selector.exe">

  <div id="imagePreview">
    {#each imageNames as image, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img src="gallery/{image}.png" alt="{image}" on:click={() => { currentIndex = i}}>
    {/each}
  </div>
  
</Window>

<Window title="{imageNames[currentIndex]}.png" padding={false} maxWdith="60vw">
  <div id="viewedImage">
    <img src="gallery/{imageNames[currentIndex]}.png" alt="{imageNames[currentIndex]}">
  </div>
</Window>

<TextWindow title="disclaimer.txt">
  <li>The amount of art I do fluctuates from time to time.</li>
  <li>A majority of the time you'll find me not doing any at all, but there'll be times where I'm extremely motivated to draw.</li>
  <li>Regardless, here are some pieces I'm prouder of then the rest.</li>
</TextWindow>

<style>
  #imagePreview {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding: 10px;
  }

  #imagePreview img {
    max-height: 150px;
    transition: scale 0.1s;
  }

  #imagePreview img:hover {
    scale: 1.05;
  }

  #viewedImage {
    width: calc(60vw - 10px);
    aspect-ratio: 16 / 9;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #viewedImage img {
    max-width: 100%;
    max-height: 100%;
  }

  @media only screen and (max-width: 600px) {
      
    #viewedImage {
      width: unset;
    }
    #imagePreview {
      max-width: 80vw;
      padding: 0px
    }

    #imagePreview img {
      max-height: 50px;
   }
  }
</style>