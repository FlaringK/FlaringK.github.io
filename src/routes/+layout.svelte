<script>
  import Nav from './Nav.svelte'
  import Topbar from './Topbar.svelte'
  import Background from './Background.svelte'

  export const prerender = true;
</script>

<div id="wrapper">
  <Topbar />
  <Nav />
  <Background />


  <div id="mainWrap">
    <div id="main">
      <slot />
    </div>
  </div>
</div>

<svelte:head>
  <title>FlaringK</title>
</svelte:head>


<style>
  :root {
    --dark1: #156064ff;
    --dark2: #00c49aff;
    --light1: #fb8f67ff;
    --light2: #ffc2b4ff;
    
    --back: #fff;
    --grey1: #eee;
    --grey2: #aaa;
    --greytrans: #eeea;
  }

  @font-face {
    font-family: batmfa;
    src: url("batmfa.ttf");
  }

  /* BACKGROUND */

  #wrapper {
    background-color: var(--light2);
    color: var(--dark1);
    margin: 0;
    font-family: batmfa;

    min-height: 100vh;
  }

  /* MAIN */

  #mainWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: 300px;
    padding-top: 4em;
    
    min-height: calc(100vh - 4em);
  }

  @media only screen and (max-width: 600px) {
    #mainWrap {
      margin-left: unset;
      padding: 2em 5vw 4em;
    }
  }
</style>