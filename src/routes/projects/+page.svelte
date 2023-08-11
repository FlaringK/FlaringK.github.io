<script>
// @ts-nocheck

  import Window from '../Window.svelte'
  import Preview from './Preview.svelte'

  let projects = [
    {
      title: "SAHCon.com",
      description: "The landing page for the Stuck At Home Convention, a virtual homestuck convention held in VR and across the internet.",
      link: "https://sahcon.com/",
      icon: "webIcons/sahcon.png",
    },
    {
      title: "Homestuck 5 plus",
      description: "Homestuck 5+ is a tool to format Homestuck style dialogue. Entering homestuck style dialogue in the left text area will generate formatted homestuck dialogue in the right area.",
      link: "https://flaringk.github.io/homestuck5plus/",
      icon: "webIcons/hs5plus.png",
    },
    {
      title: "Hades: MEGIDO",
      description: "A crossover mod for SGG's Hades, featuring characters from Homestuck.",
      link: "https://www.nexusmods.com/hades/mods/152",
      icon: "webIcons/megido.png",
    },
    {
      title: "Flare's CSS textboxes",
      description: "Importable CSS module that creates multiple menus, text-styles and textboxes for use in MSPFA adventures.",
      link: "https://mspfa.com/?s=41577&p=1",
      icon: "webIcons/csst.png",
    },
    {
      title: "...Perform My Own Tracheotomy.",
      description: "<b>Watch As I Perform My Own Tracheotomy.</b> <br> A girl dissociates in her apartment and has a generally normal time. <br> <a href='https://twitter.com/Bungyg0rl'>A comic by Juney-Blues</a>",
      link: "https://junebugjamboree.neocities.org/tracheotomy/",
      icon: "webIcons/watchasiperformmyowntracheotomy.png",
    },
    {
      title: "Homestuck Hex Codes",
      description: "Easy to copy accurate Homestuck hex colours. ",
      link: "https://flaringk.github.io/hs-hexes/",
      icon: "webIcons/hexcodes.png",
    },
    {
      title: "Better Find and Replace",
      description: "A tool to make it easy to create and save the text transfroms you do every day",
      link: "https://flaringk.github.io/betterfindreplace/",
      icon: "webIcons/bfr.ico",
    },
    {
      title: "JARI: Grimdorks",
      description: "Homestuck fan continuation about a girl way out of her depth <br> <a href='https://twitter.com/Nerd_Zara'>A comic by Zara Nerd</a>",
      link: "https://grimdorks.net/",
      icon: "webIcons/jari.png",
    },
    {
      title: "Quirk Builder",
      description: "A tool to help generate homestuck quirks. ",
      link: "https://flaringk.github.io/quirkbuilder/",
      icon: "webIcons/quirkb.png",
    },
    {
      title: "Classpect Central",
      description: "A website about Classpects from Homestuck! Made using React JS.",
      link: "https://flaringk.github.io/classpectcentral/",
      icon: "webIcons/classpect.png",
    },
    {
      title: "Homestuck Textbox Generator",
      description: "Generate your own homestuck textboxes. There isn't much else to it.",
      link: "https://flaringk.github.io/textboxy/",
      icon: "webIcons/htg.png",
    },
    {
      title: "Spriter's Exporter",
      description: "Turn spritesheets from spriter's resource into useable transparent sprite sheets!",
      link: "https://flaringk.github.io/spriters-sheet/",
      icon: "webIcons/spriters.png",
    },
    {
      title: "Gdocs to fiction",
      description: "Format your google docs for fanfiction websites, with homstuck pesterchum auto formatting.",
      link: "https://flaringk.github.io/gdocs-to-fiction/",
      icon: "webIcons/gdoc2f.png",
    },
    {
      title: "Gif analyser",
      description: "Analyse all your favourite GIFS with this built in viewer made for viewing an inspecting timings and positions.",
      link: "https://flaringk.github.io/gifinfo/",
      icon: "webIcons/uhc.png",
    },
    {
      "title": "Classpect Card Generator",
      "description": "Generate your own playing cards based off of homestuck classes and aspects.",
      "link": "https://flaringk.github.io/classpectcards/",
      icon: "webIcons/classcard.png",
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
      title: "Mintendo DS Homescreen",
      description: "A recreation of the Mintendo DS home screen. Made to just explore CSS and JS.",
      link: "https://flaringk.github.io/Mintendo-DS/",
      icon: "webIcons/mds.png",
    },
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

  let currentIndex = -1;

  let updatePreview = index => {
    currentPoject = projects[index]

    // If double click open in new tab
    if (currentIndex == index) {
      window.open(projects[index].link, "_blank");
    }
    currentIndex = index
  }
</script>

<Window title="file_preview.exe">
  <Preview project={currentPoject} />
</Window>

<Window title="file_explorer.exe"> 
  <div id="filewrap">

    {#each projects as { title, link, description, icon }, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="file {currentIndex == i ? "active" : ""}" on:click={() => { updatePreview(i) }}>
        <div class="fileicon">
          <img src="{icon}" alt="{icon}">
        </div>
        {title}
      </div>
    {/each}

  </div>
</Window>

<style>
  #filewrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    max-height: 450px;
    overflow-y: auto;
    justify-content: space-around;
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

    #filewrap {
      width: 75vw;
    }
  }
</style>