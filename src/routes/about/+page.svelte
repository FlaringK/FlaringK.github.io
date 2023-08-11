<script>
// @ts-nocheck

  import Window from '../Window.svelte'
  import TextWindow from '../TextWindow.svelte'
</script>

<TextWindow title="about.txt">
  Hello! I'm <b>FlaringK</b>, but you can just call me <b>Flare</b>! (<b>any/all</b>) <br>
  <br>
  I'm just a <b>university student</b> from <b>Australia</b> on the internet making whatever I feel like making!... Most of which is for or based off of the webcomic <b>Homestuck</b>. <br>
  <br>
  First and foremost  I'm a <b>front end web developer</b>, but I also like to <b>draw</b> when I have the motivation too. A majority of my work is simple <b>static web tools</b>, but I've also made and helped out with some <b>comic hosting sites</b> and <b>video game mods</b>. <br>
  <br>
  I've worked with a number of <b>coding languages</b>. My bread and butter is <b>Javascript</b> but I also am pretty fluent in <b>Java</b>, which appears a lot in my schooling. I can also use <b>Lua</b>, <b>Python</b>, <b>C</b>, and can generally pick up languages pretty quickly. <br>
  <br>
  I've also worked with a few <b>front end frameworks</b>, including <b>React</b>, <b>Vue</b> and <b>Svelte</b>, the latter being what the <b>site you're looking at</b> is built off of! <br>
  <br>
  I got my start with web development messing around with <b>CSS</b> and <b>Javascript</b> on the comic hosting site <b>MSPFA</b> at the beginning of <b>2018</b> or so, and I haven't stopped messing around with it since. <br>
  <br>
  You can check out my coding projects in the <b>projects</b> page, or you can check out some of my art in the <b>gallery</b> page. Hope you enjoy!
</TextWindow>

<Window title="cat.txt">
  <div class="cat">
    &nbsp;
     ／|、    meow   
    （ﾟ､ ｡7         
      |  ~ヽ       
      じしf_,)ノ
  </div>
</Window>

<style>
  .cat {
    white-space: pre-wrap;
  }

  b {
    color: var(--dark1);
    text-shadow: 0.05em 0.05em var(--light1);
    text-transform: capitalize;
  }
</style>