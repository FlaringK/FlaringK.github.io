<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let pages = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/projects", name: "Projects" },
    { route: "/gallery", name: "Gallery" },
    { route: "/commissions", name: "Commissions" },
    { route: "/contact", name: "Contact Me" },
  ]

  $: pagePath = $page.url.pathname

  let menuOpen = false

  onMount(() => { 
    let p = $page.url.searchParams.get("p")
    if (p) {
      goto("/" + p)
    }
  })
  
</script>

<div id="navWrap" class={menuOpen ? "open" : ""}>
	<ul>

    {#each pages as { route, name }, i}
      <li class="{pagePath == route ? "active" : ""}">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <a href="{route}" on:click={() => {menuOpen = false}}>
          {name}
        </a>
      </li>
    {/each}

	</ul>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div id="openButton" on:click={() => {menuOpen = menuOpen ? false : true}}>
    {menuOpen ? "Close" : "Open"}
  </div>

</div>

<style>
  #navWrap {
    position: fixed;
    z-index: 10;
    background: var(--light1);
    
    top: 0;
    bottom: 0;
    left: -200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    padding-left: 224px;
    
    font-size: 24px;
    
    transform-origin: 100% 50%;
    transform: skew(-15deg);
  }

  ul {
    padding: 0;
    list-style: none;
    transform: skew(15deg);
  }

  li {
    width: fit-content;
    padding: 0.1em 0.25em;
    margin: 0.1em 0;
    position: relative;
  }

  a {
    display: inline-block;
    color: var(--dark1);
    text-decoration: none;
    transition: color 0.1s;
  }

  li:not(.active) a:hover {
    color: var(--dark2);
  }

  li::before {
    content: "";
    position: absolute;
    z-index: -1;

    transform-origin: 50% 50%;
    transform: skew(-15deg);

    top: 0;
    left: 0;
    bottom: 0;

    width: 100%;
    max-width: 0;
    transition: max-width ease-in-out .25s;
    transition-delay: .05s;

    background-color: var(--dark2);
  }

  li.active::before {
    max-width: 100%;
    transition-delay: 0s;
  }

  #openButton {
    position: absolute;
    display: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    #navWrap {
      bottom: unset;
      left: 0;
      right: 0;

      top: -350px;

      padding-left: 0;
      padding-top: 1em;


      transform: skewY(-15deg);

      transition: padding-top 0.5s;
    }

    #navWrap.open {
      padding-top: calc(1em + 250px);
    }

    ul {
      padding: 0;
      list-style: none;
      transform: skewY(15deg);
    }

    #openButton {
      display: block;
      bottom: 0.5em;
      left: 0.5em;
    }
  }
</style>