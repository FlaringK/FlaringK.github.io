<script>
// @ts-nocheck
  export let title = "file.txt"
  export let maxWdith
  export let padding = true

  let wrapHide = ""

</script>

<div class="windowWrap {wrapHide}" style="{maxWdith ? "max-width: " + maxWdith : ""}">
  <div>{title}</div>
  <div style={padding ? "padding: 0.25em;" : ""}>
    <slot />
  </div>
</div>

<style>
  .windowWrap {
    width: fit-content;
    
    font-family: "Courier New", Courier, monospace;
    
    background: var(--grey1);
    border: solid var(--grey1);
    border-color: var(--grey1) var(--grey2) var(--grey2) var(--grey1);
    
    margin: 1em;
    padding: 0.25em;

    max-width: 650px;

    transform-origin: -50vw 50vh;
    animation: flyin 0.2s both;
  }

  .windowWrap div:first-child {
    padding: 0.25em;
    background: var(--light1);
    background: linear-gradient(115deg, var(--light1) -50%, var(--dark1) 150%);
    
    color: var(--grey1);
    font-weight: 600;
    border: solid var(--grey1);
    border-color: var(--light1) var(--dark1) var(--dark1) var(--light1);

    white-space: nowrap;

    position: relative;
    padding-right: 8em;
  }

  .windowWrap > div:first-child::after {
    content: "| - | o | x ";
    font-weight: 400;
    float: right;

    position: absolute;
    right: 0.75em;
    top: 0.25em;
  }

  .windowWrap > *:last-child {
    margin-top: 0.25em;
    border: solid var(--grey1);
    border-color: var(--grey2) var(--grey1) var(--grey1) var(--grey2);
    background: var(--back);
  }

  .windowWrap:nth-of-type(even) {
    margin-right: 10vw;
    animation-delay: 0;
  }

  .windowWrap:nth-of-type(odd) {
    margin-left: auto;
    animation-delay: 0.05s;
  }

  .windowWrap:nth-of-type(3n) {
    margin-left: auto;
    margin-right: 5vw;
    animation-delay: 0.1s;
  }

  @keyframes flyin {
    from { transform: scale(0); }
    to {transform: scale(1);}
  }

  @media only screen and (max-width: 600px) {
    .windowWrap {
      max-width: 650px !important;
    }
  }
</style>