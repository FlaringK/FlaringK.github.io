<script>
  import Window from './Window.svelte'
  import TextWindow from './TextWindow.svelte'

  let cats = ["｡＾･ｪ･＾｡","( ͒ ु- •̫̮ – ू ͒)","( ^..^)ﾉ","( =①ω①=)","( =ω=)..nyaa","( =ノωヽ=)","(\xb4; ω ;｀)","(^-人-^)","(^･o･^)ﾉ”","(^・ω・^ )","(^._.^)ﾉ","(^人^)","(・∀・)","(,,◕　⋏　◕,,)","(.=^・ェ・^=)","(｡･ω･｡)","((≡^⚲͜^≡))","((ΦωΦ))","(*^ω^*)","(*✧\xd7✧*)","(*ΦωΦ*)","(⁎˃ᆺ˂)","(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)","₍˄\xb7͈༝\xb7͈˄₎◞ ̑̑ෆ⃛","₍˄\xb7͈༝\xb7͈˄₎ฅ˒˒","₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒","(=｀ω\xb4=)","(=｀ェ\xb4=)","（=\xb4∇｀=）","(=^ ◡ ^=)","(=^-ω-^=)","(=^･^=)","(=^･ω･^)y＝","(=^･ω･^=)","(=^･ｪ･^=)","(=^‥^=)","(=･ω･=)","(=;ω;=)","(=;ェ;=)","(=；ェ；=)","(=;ェ;=)","(=；ェ；=)","(=；ｪ；=)","(=‘ｘ‘=)","(=⌒‿‿⌒=)","(=ↀωↀ=)","(=ↀωↀ=)✧","(=①ω①=)","(=ＴェＴ=)","(=ｘェｘ=)","(=ΦｴΦ=)","(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ","(≚ᄌ≚)ℒℴѵℯ❤","(≚ᄌ≚)ƶƵ","(○｀ω\xb4○)","(●ↀωↀ●)","(●ↀωↀ●)✧","(✦థ ｪ థ)","(ↀДↀ)","(ↀДↀ)⁼\xb3₌₃","(ↀДↀ)✧","(๑•ω•́ฅ✧","(๑ↀᆺↀ๑)☄","(๑ↀᆺↀ๑)✧","(p`･ω･\xb4) q","(p`ω\xb4) q","(Φ∇Φ)","(ΦεΦ)","(ΦωΦ)","(ΦёΦ)","(ΦзΦ)","(ฅ`･ω･\xb4)っ=","(ฅ`ω\xb4ฅ)","(ฅ’ω’ฅ)","(ะ`♔\xb4ะ)","(ะ☫ω☫ะ)","(ㅇㅅㅇ❀)","(ノω<。)","(ꀄꀾꀄ)","（三Ф\xc5Ф三）","[ΦωΦ]","] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣","＼(=^‥^)/’`","<(*ΦωΦ*)>","<ΦωΦ>","|ΦωΦ|","|ｪ･`｡)･･･　　","~(=^‥^)","~(=^‥^)_旦~","~(=^‥^)/","~(=^‥^)ノ","~□Pヘ(^･ω･^=)~","⊱ฅ•ω•ฅ⊰","└(=^‥^=)┐","✩⃛( ͒ ु•\xb7̫• ू ͒)","❤(\xb4ω｀*)","ヽ(^‥^=ゞ)","ヾ(*ΦωΦ)ﾉ","ヾ(*ФωФ)βyё βyё☆彡","ヾ(=｀ω\xb4=)ノ”","ヽ(=^･ω･^=)丿","ヾ(=ﾟ･ﾟ=)ﾉ","0( =^･_･^)=〇","٩(ↀДↀ)۶","b(=^‥^=)o","d(=^･ω･^=)b","o(^・x・^)o","o(=・ω・=o)","V(=^･ω･^=)v","ლ(=ↀωↀ=)ლ","ლ(●ↀωↀ●)ლ","ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ","ฅ( ᵕ ω ᵕ )ฅ","ฅ(\xb4-ω-`)ฅ","ฅ(\xb4・ω・｀)ฅ","ฅ(^ω^ฅ)","ฅ(≚ᄌ≚)","ฅ(⌯͒• ɪ •⌯͒)ฅ❣","ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣","ฅ(●\xb4ω｀●)ฅ","ฅ*•ω•*ฅ♡","ฅ•ω•ฅ","ฅ⊱*•ω•*⊰ฅ","ㅇㅅㅇ","ミ๏ｖ๏彡","ミ◕ฺｖ◕ฺ彡","=＾● ⋏ ●＾=","ฅ^•ﻌ•^ฅ","₍ᵔ\xb7͈༝\xb7͈ᵔ₎","ฅ(⌯͒•̩̩̩́ ˑ̫ •̩̩̩̀⌯͒)ฅ","₍˄\xb7͈༝\xb7͈˄*₎◞ ̑̑","ଲ( ⓛ ω ⓛ *)ଲ","=^._.^= ∫","ଲ(⁃̗̀̂❍⃓ˑ̫❍⃓⁃̠́̂)ଲ"];

  let catIndex = Math.floor(Math.random()*cats.length)
</script>

<Window title="kitties.txt">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div style="text-align: center; cursor: pointer; user-select: none;" on:click={() => { catIndex = Math.floor(Math.random()*cats.length) }}>
    {cats[catIndex]}
  </div>
</Window>

<Window title="intro.txt">
  Heya! I'm <b>Flare</b>! or <b>FlaringK</b>, if you want to be formal. I'm a <b>programmer</b>, mostly working on front end web tools. But I also play around with <b>digital art</b> from time to time. I'm also <b>Australian</b>, if you ever need to contact me, my timezone is GMT + 8. I've been messing around and making stuff since <b>2018</b>, hope you enjoy! <br>
  <br>
  Artwork below by <a href="https://www.tumblr.com/toastiedrawz"><b>toasttiiee</b></a>!
</Window>

<Window title="lori.png" padding={false}>
  <img alt="lori.png" src="loreSquare.png" style="max-height: 40vh; padding: 0">
</Window>

<style>
  b {
    color: var(--dark1);
    text-shadow: 0.05em 0.05em var(--light1);
    text-transform: capitalize;
  }
</style>