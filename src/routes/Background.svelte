<script>
// @ts-nocheck

  import Window from './Window.svelte'

  let scroll = true
</script>

<div id="background" class="{scroll ? "" : "noscroll"}">

  <div class="moon">
    <Window title="moon.png">
      <img src="./favicon.png" alt="">
    </Window>
  </div>

  <div class="cat">
    <Window title="prowler.txt">
      <div class="ascii">
 _._     _,-'""`-._
(,-.`._,'(       |\`-/|
    `-.-' \ )-`( , o o)
          `-    \`_`"'-
   
      </div>
    </Window>
  </div>

  <div class="cat2">
    <Window title="sleepy.txt">
      <div class="ascii">
  |\      _,,,--,,_    
  /,`.-'`'   ._  \-;;,_ 
 |,4-  ) )_   .;.(  `'-' 
'---''(_/._)-'(_\_)
      </div>
    </Window>
  </div>

</div>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="settings">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="scrollBtn" on:click={() => { scroll = scroll ? false : true }}>
    Scrolling: { scroll ? "On" : "Off" }
  </div>
</div>

<style>

  #settings {
    position: fixed;
    bottom: 1em;
    right: 1em;
    opacity: 0.5;
    transition: opacity 0.1s;
  }

  #settings:hover {
    opacity: 1;
  }

  #scrollBtn {
    cursor: pointer;
  }

  #background {
    position: fixed;
    inset: 0;

    background-image: repeating-conic-gradient(var(--greytrans) 0% 25%, transparent 0% 50%);
    background-size: 80px 80px;
    background-attachment: fixed;
    
    animation: backgroundMove linear 5s infinite;

    pointer-events: none;
  }

  #background.noscroll {
    animation: none;
  }

  @keyframes backgroundMove {
    from { background-position: 0 0 }
    to { background-position: -80px -80px }
  }

  .ascii {
    white-space: pre-wrap;
    margin: auto;
    width: max-content;
  }

  #background > div {
    position: absolute;
    opacity: 0.5;
    z-index: -10;
  }

  .moon {
    top: 5vh;
    right: 10vh;
    scale: 0.75;
  }

  .cat {
    bottom: -2.8em;
    left: -10vw;
    scale: 0.55;
    animation: windowMove linear 70s infinite 5s;
  }
  .cat2 {
    bottom: -2em;
    left: 15vw;
    scale: 0.75;
  }

  @keyframes windowMove {
    from { left: -10vw }
    to { left: 120vw }
  }

  
  @media only screen and (max-width: 600px) {
    #background > div {
      display: none;
    }
  }

</style>