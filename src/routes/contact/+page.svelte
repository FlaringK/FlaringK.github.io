<script>
  import Window from '../Window.svelte'
  import TextWindow from '../TextWindow.svelte'

  let links = [
    { title: "Email", imgPath: "email", link: "mailto:caelans@iinet.net.au" },
    { title: "Tumblr", imgPath: "tumblr", link: "https://flaringk.tumblr.com/" },
    { title: "Kofi", imgPath: "kofi", link: "https://ko-fi.com/flaringk" },
    { title: "MSPFA", imgPath: "mspfa", link: "https://mspfa.com/user/?u=100855018780708322446" },
    { title: "Github", imgPath: "github", link: "https://github.com/FlaringK" },
  ]
</script>

<TextWindow title="contact_me.txt">
  <li>You can contact me on any of the profiles below!</li>
</TextWindow>

{#each links as {title, imgPath, link}, i}
  <Window title="{title}.ico">
    <a target="_blank" href={link}>
      <div class="contactIcon">
        <img src="contacts/{imgPath}.png" alt="{title} Icon">
      </div>
      <div class="contactTitle">
        {title}
      </div>
    </a>
  </Window>
{/each}

<TextWindow title="contact_me.txt">
  <li>I can also be found under FlaringK on most other platforms, like discord and the site that used to be twitter.</li>
</TextWindow>


<style>
  img {
    width: 150px;
  }

  .contactIcon {
    display: flex;
    justify-content: center;

    transition: scale 0.1s;
  }

  .contactIcon:hover {
    scale: 1.05;
  }

  .contactTitle {
    text-align: center;
    font-size: large;
    font-weight: 600;
  }

  a {
    color: var(--dark1)
  }

  a:hover {
    color: var(--dark2)
  }
</style>