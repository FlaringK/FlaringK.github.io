<script>
// @ts-nocheck

  import Window from '../Window.svelte'
  import Preview from './Preview.svelte'

  let websites = [
    {
      title: "SAHCon.com",
      description: "The landing page for the Stuck At Home Convention, a virtual homestuck convention held in VR and across the internet.",
      link: "https://sahcon.com/",
      icon: "webIcons/sahcon.png",
    },
    {
      title: "CHORDIOID",
      description: "A rhythm RPG where you battle to the beat. CHORDIOID is a unique musical JRPG that seamlessly blends turn-based combat with rhythm game mechanics.",
      link: "https://chordioid.com/",
      icon: "webIcons/cd.png",
    },
    {
      title: "...Perform My Own Tracheotomy.",
      description: "<b>Watch As I Perform My Own Tracheotomy.</b> <br> A girl dissociates in her apartment and has a generally normal time. <br> <a href='https://twitter.com/Bungyg0rl'>A comic by Juney-Blues</a>",
      link: "https://junebugjamboree.neocities.org/tracheotomy/",
      icon: "webIcons/watchasiperformmyowntracheotomy.png",
    },
    {
      title: "JARI: Grimdorks",
      description: "Homestuck fan continuation about a girl way out of her depth <br> <a href='https://twitter.com/Nerd_Zara'>A comic by Zara Nerd</a>",
      link: "https://grimdorks.net/",
      icon: "webIcons/jari.png",
    },

  ]

  let games = [
    {
      title: "Pesterquest Rewritten",
      description: "A fanmade rewrite of Homestuck - Pesterquest! <a href='https://etchjetty.github.io/'>Written by Etch Jetty</a>",
      link: "https://hjtfir.itch.io/pesterquest-rewritten",
      icon: "webIcons/pqr.png",
    },
    {
      title: "Grist Torrent+",
      description: "A Homestuck Suika Game",
      link: "https://flaringk.itch.io/grist-torrent",
      icon: "webIcons/BUILD.png",
    },
    {
      title: "Hades: MEGIDO",
      description: "A crossover mod for SGG's Hades, featuring characters from Homestuck.",
      link: "https://www.nexusmods.com/hades/mods/152",
      icon: "webIcons/megido.png",
    },
    {
      title: "Mintendo DS Homescreen",
      description: "A recreation of the Mintendo DS home screen. Made to just explore CSS and JS.",
      link: "https://flaringk.github.io/Mintendo-DS/",
      icon: "webIcons/mds.png",
    },

  ]

  let webtools = [
    {
      title: "Homestuck 5 plus",
      description: "Homestuck 5+ is a tool to format Homestuck style dialogue. Entering homestuck style dialogue in the left text area will generate formatted homestuck dialogue in the right area.",
      link: "https://flaringk.github.io/homestuck5plus/",
      icon: "webIcons/hs5plus.png",
    },
    {
      title: "Flare's CSS textboxes",
      description: "Importable CSS module that creates multiple menus, text-styles and textboxes for use in MSPFA adventures.",
      link: "https://mspfa.com/?s=41577&p=1",
      icon: "webIcons/csst.png",
    },
    {
      title: "Homestuck Hex Codes",
      description: "Easy to copy accurate Homestuck hex colours. ",
      link: "https://flaringk.github.io/hs-hexes/",
      icon: "webIcons/hexcodes.png",
    },
    {
      title: "Quirk Builder",
      description: "A tool to help generate homestuck quirks. ",
      link: "https://flaringk.github.io/quirkbuilder/",
      icon: "webIcons/quirkb.png",
    },
    {
      title: "Better Find and Replace",
      description: "A tool to make it easy to create and save the text transfroms you do every day",
      link: "https://flaringk.github.io/betterfindreplace/",
      icon: "webIcons/bfr.ico",
    },
    {
      title: "Gif analyser",
      description: "Analyse all your favourite GIFS with this built in viewer made for viewing an inspecting timings and positions.",
      link: "https://flaringk.github.io/gifinfo/",
      icon: "webIcons/uhc.png",
    },
    {
      title: "Quadrant Maker",
      description: "A Gif generator for all your shipping needs.",
      link: "https://flaringk.github.io/quadrantmaker/",
      icon: "https://flaringk.github.io/quadrantmaker/assets/favicon.png",
    },
    {
      title: "Gifstuck",
      description: "A Gif generator for your homestuck adventure!",
      link: "https://flaringk.github.io/gifstuck/",
      icon: "https://pipe.miroware.io/5f586dbe02740c4a7fb69f99/Ididart/Icon.png",
    },
    {
      title: "Spriter's Exporter",
      description: "Turn spritesheets from spriter's resource into useable transparent sprite sheets!",
      link: "https://flaringk.github.io/spriters-sheet/",
      icon: "webIcons/spriters.png",
    },
    {
      "title": "Classpect Card Generator",
      "description": "Generate your own playing cards based off of homestuck classes and aspects.",
      "link": "https://flaringk.github.io/classpectcards/",
      icon: "webIcons/classcard.png",
    },
    {
      title: "Homestuck Textbox Generator",
      description: "Generate your own homestuck textboxes. There isn't much else to it.",
      link: "https://flaringk.github.io/textboxy/",
      icon: "webIcons/htg.png",
    },
    {
      title: "Gdocs to fiction",
      description: "Format your google docs for fanfiction websites, with homstuck pesterchum auto formatting.",
      link: "https://flaringk.github.io/gdocs-to-fiction/",
      icon: "webIcons/gdoc2f.png",
    },
    {
      title: "Wizards 101 Name Generator",
      description: "Generate your own wizard 101 name.",
      link: "https://flaringk.github.io/w101-names-gen/",
      icon: "webIcons/w101.png",
    },
    {
      title: "Pictochum Canvas",
      description: "A web canvas that simulates some Japanese handheld that was pretty cool back in the day.",
      link: "https://flaringk.github.io/PictoChum-Canvas/",
      icon: "webIcons/pictochum.png",
    },
    {
      title: "Text 2 Textbox",
      description: "An AutoHotKey script that converts discord messages into undertale textboxes using Demirramon's textbox API. ",
      link: "https://flaringk.github.io/text2textbox/",
      icon: "webIcons/t2t.gif",
    },
    {
      title: "Classpect Central",
      description: "A website about Classpects from Homestuck! Made using React JS.",
      link: "https://flaringk.github.io/classpectcentral/",
      icon: "webIcons/classpect.png",
    },
  ]

  let projects = [
    {
      title: "mspfaViewer",
      description: "This script was made to let you host your mspfa or original comic on it's own site.",
      link: "https://github.com/FlaringK/mspfaViewer",
      icon: "webIcons/mspa.png",
    },
    {
      title: "UHC: POV Timelines",
      description: "A port of madman-bob's Homestuck POV Cam Chrome extension to the Unoffical Homstuck Collection.",
      link: "https://github.com/FlaringK/UHC-POV-Cam",
      icon: "webIcons/uhc.png",
    },
    {
      title: "UHC: Dequirker",
      description: "A mod for the unoffical homestuck collection, removes quirks on a troll by troll basis.",
      link: "https://github.com/FlaringK/dequirk-UHC",
      icon: "webIcons/uhc.png",
    },
    {
      title: "UHC: Zoosmell Pooplord",
      description: "A mod for the unoffical homestuck collection, replaces every text instance of the beta kids names with their inital, sillier ones!",
      link: "https://github.com/FlaringK/Zoosmell-Pooplord",
      icon: "webIcons/uhc.png",
    }
  ]

  let currentPoject = {
    title: "Welcome to my projects!",
    description: "Click a project from the file explorer to view it's details!",
    link: "",
    icon: "webIcons/uhc.png",
  }

  let updatePreview = project => {
    // If double click open in new tab
    if (project.link == currentPoject.link) {
      window.open(project.link, "_blank");
    }

    console.log(currentPoject)
    currentPoject = project
  }
</script>

<Window title="file_preview.exe">
  <Preview project={currentPoject} />
</Window>

<Window title="file_explorer.exe"> 

  <div class="filewrap">

    <h2 class="sectionHeader">Websites</h2>
  
    <div class="filesection">
  
      {#each websites as { title, link, description, icon }, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="file {currentPoject.link == link ? "active" : ""}" on:click={() => { updatePreview({ title, link, description, icon }) }}>
          <div class="fileicon">
            <img src="{icon}" alt="{icon}">
          </div>
          {title}
        </div>
      {/each}
  
    </div>

    <h2 class="sectionHeader">Games, Game Mods and Applications</h2>
  
    <div class="filesection">
  
      {#each games as { title, link, description, icon }, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="file {currentPoject.link == link ? "active" : ""}" on:click={() => { updatePreview({ title, link, description, icon }) }}>
          <div class="fileicon">
            <img src="{icon}" alt="{icon}">
          </div>
          {title}
        </div>
      {/each}
  
    </div>
  
    <h2 class="sectionHeader">Webtools</h2>
  
    <div class="filesection">
  
      {#each webtools as { title, link, description, icon }, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="file {currentPoject.link == link ? "active" : ""}" on:click={() => { updatePreview({ title, link, description, icon }) }}>
          <div class="fileicon">
            <img src="{icon}" alt="{icon}">
          </div>
          {title}
        </div>
      {/each}
  
    </div>
    
    <h2 class="sectionHeader">Miscellaneous</h2>
  
    <div class="filesection">
  
      {#each projects as { title, link, description, icon }, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="file {currentPoject.link == link ? "active" : ""}" on:click={() => { updatePreview({ title, link, description, icon }) }}>
          <div class="fileicon">
            <img src="{icon}" alt="{icon}">
          </div>
          {title}
        </div>
      {/each}
  
    </div>

  </div>

</Window>

<style>
  .filesection {
    display: flex;
    flex-wrap: wrap;
    gap: 0 30px;
    padding: 10px;
    justify-content: space-around;
  }

  .filewrap {
    overflow-y: auto;
    max-height: 450px;
    padding: 1em 0;
  }

  .file {
    width: 100px;
    padding: 10px;
    text-align: center;
    border: solid var(--back);
  }

  .file.active {
    border: solid var(--light2);
    border-color: var(--light1) var(--light2) var(--light2) var(--light1);
  }

  .file:hover {
    background-color: var(--light2);
  }

  .fileicon {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin: auto;
    margin-bottom: 0.5em;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fileicon img {
    max-width: 100%;
    max-height: 100%;
  }

  @media only screen and (max-width: 600px) {
    .file {
      width: 80px;
      font-size: small;
    }

    .filewrap {
      width: 75vw;
    }
  }

  .sectionHeader {
    margin-top: 0;
    margin-bottom: 1rem;
    margin-left: 1em;
    margin-right: 1em;

    border-bottom: solid var(--dark1);
  }
</style>