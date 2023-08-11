<script>
  // @ts-nocheck

  export let project = {
    title: "Welcome to my projects!",
    description: "Click a project from the file explorer to view it's details!",
    link: "",
    icon: "webIcons/uhc.png",
  }
</script>

<div id="preview">
  <a target="_blank" href={project.link}>
    <h1>{project.title}</h1>
  </a>
  <div id="previewWrap">

    <div class="left">
      <div>
        {@html project.description}
      </div>
    </div>

    <div class="right">
      <a target="_blank" href={project.link}>
        <img src="{project.icon}" alt="">
      </a>
    </div>

  </div>
</div>

<style>
  h1 {
    margin: 0;
    padding: 0.1em 10px;
    border-bottom: solid var(--light2);
  }

  #previewWrap {
    display: flex;
    padding: 10px;
    gap: 10px
  }

  .left {
    width: 432px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    width: 200px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right img {
    max-width: 200px;
    max-height: 200px;

    transition: scale 0.1s;
  }

  .right img:hover { 
    scale: 1.05;
  }

  a {
    color: var(--dark1);
  }

  a:hover {
    color: var(--dark2);
  }

  @media only screen and (max-width: 600px) {
    #previewWrap {
      flex-wrap: wrap;
      justify-content: center;
    }

    #preview {
      width: 75vw;
      text-align: center;
    }

    .right, .left {
      width: unset;
    }
  }
</style>