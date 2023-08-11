import{s as O,c as N,h as Q}from"../chunks/scheduler.8c6941b7.js";import{S as U,i as X,r as T,s as V,u as G,c as W,v as S,a as o,d as F,t as L,f as a,w as P,g as c,m as _,h as p,j as Y,n as $,l as I,x as Z,y as tt,o as et,A as C,k as v}from"../chunks/index.6d34e091.js";import{W as R}from"../chunks/Window.6e8a6a84.js";/* empty css                                                         */function st(b){let s,n=b[1][b[0]]+"",l,f,i;return{c(){s=c("div"),l=_(n),this.h()},l(u){s=p(u,"DIV",{style:!0});var e=Y(s);l=$(e,n),e.forEach(a),this.h()},h(){I(s,"text-align","center"),I(s,"cursor","pointer"),I(s,"user-select","none")},m(u,e){o(u,s,e),Z(s,l),f||(i=tt(s,"click",b[2]),f=!0)},p(u,e){e&1&&n!==(n=u[1][u[0]]+"")&&et(l,n)},d(u){u&&a(s),f=!1,i()}}}function lt(b){let s,n,l="Flare",f,i,u="FlaringK",e,r,g="programmer",y,x,D="digital art",q,d,E="Australian",k,w,K="2018",z,B,M,A,j,h,J='<b class="svelte-1fmvzqb">toasttiiee</b>',H;return{c(){s=_("Heya! I'm "),n=c("b"),n.textContent=l,f=_("! or "),i=c("b"),i.textContent=u,e=_(", if you want to be formal. I'm a "),r=c("b"),r.textContent=g,y=_(", mostly working on front end web tools. But I also play around with "),x=c("b"),x.textContent=D,q=_(" from time to time. I'm also "),d=c("b"),d.textContent=E,k=_(", if you ever need to contact me, my timezone is GMT + 8. I've been messing around and making stuff since "),w=c("b"),w.textContent=K,z=_(", hope you enjoy! "),B=c("br"),M=V(),A=c("br"),j=_(`
  Artwork below by `),h=c("a"),h.innerHTML=J,H=_("!"),this.h()},l(t){s=$(t,"Heya! I'm "),n=p(t,"B",{class:!0,"data-svelte-h":!0}),C(n)!=="svelte-dpglcs"&&(n.textContent=l),f=$(t,"! or "),i=p(t,"B",{class:!0,"data-svelte-h":!0}),C(i)!=="svelte-fafxfs"&&(i.textContent=u),e=$(t,", if you want to be formal. I'm a "),r=p(t,"B",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-mp0vac"&&(r.textContent=g),y=$(t,", mostly working on front end web tools. But I also play around with "),x=p(t,"B",{class:!0,"data-svelte-h":!0}),C(x)!=="svelte-z5x99x"&&(x.textContent=D),q=$(t," from time to time. I'm also "),d=p(t,"B",{class:!0,"data-svelte-h":!0}),C(d)!=="svelte-1h4377g"&&(d.textContent=E),k=$(t,", if you ever need to contact me, my timezone is GMT + 8. I've been messing around and making stuff since "),w=p(t,"B",{class:!0,"data-svelte-h":!0}),C(w)!=="svelte-1i215jl"&&(w.textContent=K),z=$(t,", hope you enjoy! "),B=p(t,"BR",{}),M=W(t),A=p(t,"BR",{}),j=$(t,`
  Artwork below by `),h=p(t,"A",{href:!0,"data-svelte-h":!0}),C(h)!=="svelte-1bi1"&&(h.innerHTML=J),H=$(t,"!"),this.h()},h(){v(n,"class","svelte-1fmvzqb"),v(i,"class","svelte-1fmvzqb"),v(r,"class","svelte-1fmvzqb"),v(x,"class","svelte-1fmvzqb"),v(d,"class","svelte-1fmvzqb"),v(w,"class","svelte-1fmvzqb"),v(h,"href","https://www.tumblr.com/toastiedrawz")},m(t,m){o(t,s,m),o(t,n,m),o(t,f,m),o(t,i,m),o(t,e,m),o(t,r,m),o(t,y,m),o(t,x,m),o(t,q,m),o(t,d,m),o(t,k,m),o(t,w,m),o(t,z,m),o(t,B,m),o(t,M,m),o(t,A,m),o(t,j,m),o(t,h,m),o(t,H,m)},p:N,d(t){t&&(a(s),a(n),a(f),a(i),a(e),a(r),a(y),a(x),a(q),a(d),a(k),a(w),a(z),a(B),a(M),a(A),a(j),a(h),a(H))}}}function nt(b){let s,n;return{c(){s=c("img"),this.h()},l(l){s=p(l,"IMG",{alt:!0,src:!0,style:!0}),this.h()},h(){v(s,"alt","lori.png"),Q(s.src,n="loreSquare.png")||v(s,"src",n),I(s,"max-height","40vh"),I(s,"padding","0")},m(l,f){o(l,s,f)},p:N,d(l){l&&a(s)}}}function at(b){let s,n,l,f,i,u;return s=new R({props:{title:"kitties.txt",$$slots:{default:[st]},$$scope:{ctx:b}}}),l=new R({props:{title:"intro.txt",$$slots:{default:[lt]},$$scope:{ctx:b}}}),i=new R({props:{title:"lori.png",padding:!1,$$slots:{default:[nt]},$$scope:{ctx:b}}}),{c(){T(s.$$.fragment),n=V(),T(l.$$.fragment),f=V(),T(i.$$.fragment)},l(e){G(s.$$.fragment,e),n=W(e),G(l.$$.fragment,e),f=W(e),G(i.$$.fragment,e)},m(e,r){S(s,e,r),o(e,n,r),S(l,e,r),o(e,f,r),S(i,e,r),u=!0},p(e,[r]){const g={};r&9&&(g.$$scope={dirty:r,ctx:e}),s.$set(g);const y={};r&8&&(y.$$scope={dirty:r,ctx:e}),l.$set(y);const x={};r&8&&(x.$$scope={dirty:r,ctx:e}),i.$set(x)},i(e){u||(F(s.$$.fragment,e),F(l.$$.fragment,e),F(i.$$.fragment,e),u=!0)},o(e){L(s.$$.fragment,e),L(l.$$.fragment,e),L(i.$$.fragment,e),u=!1},d(e){e&&(a(n),a(f)),P(s,e),P(l,e),P(i,e)}}}function ot(b,s,n){let l=["｡＾･ｪ･＾｡","( ͒ ु- •̫̮ – ू ͒)","( ^..^)ﾉ","( =①ω①=)","( =ω=)..nyaa","( =ノωヽ=)","(´; ω ;｀)","(^-人-^)","(^･o･^)ﾉ”","(^・ω・^ )","(^._.^)ﾉ","(^人^)","(・∀・)","(,,◕　⋏　◕,,)","(.=^・ェ・^=)","(｡･ω･｡)","((≡^⚲͜^≡))","((ΦωΦ))","(*^ω^*)","(*✧×✧*)","(*ΦωΦ*)","(⁎˃ᆺ˂)","(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)","₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛","₍˄·͈༝·͈˄₎ฅ˒˒","₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒","(=｀ω´=)","(=｀ェ´=)","（=´∇｀=）","(=^ ◡ ^=)","(=^-ω-^=)","(=^･^=)","(=^･ω･^)y＝","(=^･ω･^=)","(=^･ｪ･^=)","(=^‥^=)","(=･ω･=)","(=;ω;=)","(=;ェ;=)","(=；ェ；=)","(=;ェ;=)","(=；ェ；=)","(=；ｪ；=)","(=‘ｘ‘=)","(=⌒‿‿⌒=)","(=ↀωↀ=)","(=ↀωↀ=)✧","(=①ω①=)","(=ＴェＴ=)","(=ｘェｘ=)","(=ΦｴΦ=)","(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ","(≚ᄌ≚)ℒℴѵℯ❤","(≚ᄌ≚)ƶƵ","(○｀ω´○)","(●ↀωↀ●)","(●ↀωↀ●)✧","(✦థ ｪ థ)","(ↀДↀ)","(ↀДↀ)⁼³₌₃","(ↀДↀ)✧","(๑•ω•́ฅ✧","(๑ↀᆺↀ๑)☄","(๑ↀᆺↀ๑)✧","(p`･ω･´) q","(p`ω´) q","(Φ∇Φ)","(ΦεΦ)","(ΦωΦ)","(ΦёΦ)","(ΦзΦ)","(ฅ`･ω･´)っ=","(ฅ`ω´ฅ)","(ฅ’ω’ฅ)","(ะ`♔´ะ)","(ะ☫ω☫ะ)","(ㅇㅅㅇ❀)","(ノω<。)","(ꀄꀾꀄ)","（三ФÅФ三）","[ΦωΦ]","] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣","＼(=^‥^)/’`","<(*ΦωΦ*)>","<ΦωΦ>","|ΦωΦ|","|ｪ･`｡)･･･　　","~(=^‥^)","~(=^‥^)_旦~","~(=^‥^)/","~(=^‥^)ノ","~□Pヘ(^･ω･^=)~","⊱ฅ•ω•ฅ⊰","└(=^‥^=)┐","✩⃛( ͒ ु•·̫• ू ͒)","❤(´ω｀*)","ヽ(^‥^=ゞ)","ヾ(*ΦωΦ)ﾉ","ヾ(*ФωФ)βyё βyё☆彡","ヾ(=｀ω´=)ノ”","ヽ(=^･ω･^=)丿","ヾ(=ﾟ･ﾟ=)ﾉ","0( =^･_･^)=〇","٩(ↀДↀ)۶","b(=^‥^=)o","d(=^･ω･^=)b","o(^・x・^)o","o(=・ω・=o)","V(=^･ω･^=)v","ლ(=ↀωↀ=)ლ","ლ(●ↀωↀ●)ლ","ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ","ฅ( ᵕ ω ᵕ )ฅ","ฅ(´-ω-`)ฅ","ฅ(´・ω・｀)ฅ","ฅ(^ω^ฅ)","ฅ(≚ᄌ≚)","ฅ(⌯͒• ɪ •⌯͒)ฅ❣","ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣","ฅ(●´ω｀●)ฅ","ฅ*•ω•*ฅ♡","ฅ•ω•ฅ","ฅ⊱*•ω•*⊰ฅ","ㅇㅅㅇ","ミ๏ｖ๏彡","ミ◕ฺｖ◕ฺ彡","=＾● ⋏ ●＾=","ฅ^•ﻌ•^ฅ","₍ᵔ·͈༝·͈ᵔ₎","ฅ(⌯͒•̩̩̩́ ˑ̫ •̩̩̩̀⌯͒)ฅ","₍˄·͈༝·͈˄*₎◞ ̑̑","ଲ( ⓛ ω ⓛ *)ଲ","=^._.^= ∫","ଲ(⁃̗̀̂❍⃓ˑ̫❍⃓⁃̠́̂)ଲ"],f=Math.floor(Math.random()*l.length);return[f,l,()=>{n(0,f=Math.floor(Math.random()*l.length))}]}class ut extends U{constructor(s){super(),X(this,s,ot,at,O,{})}}export{ut as component};