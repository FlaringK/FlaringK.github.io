<script>
// @ts-nocheck

  import Window from './Window.svelte'

  export let title = "text.txt"
</script>

<Window {title}>
  <ol class="txtList">
    <slot />
  </ol>
</Window>

<style>
  .txtList {
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    counter-reset: lineNumber;

    list-style: none;
    padding: 0;
  }
  .txtList * {
    position: relative;
  }
  .txtList *::before {
    counter-increment: lineNumber;
    color: var(--dark2);
    content: counter(lineNumber) " |";

    position: absolute;
    top: 0;
    left: -2em;
  }
</style>