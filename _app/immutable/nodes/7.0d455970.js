import{s as N,h as P,c as K}from"../chunks/scheduler.8c6941b7.js";import{S as Q,i as L,g as m,m as X,s as C,H as ee,h as f,j as _,n as Y,f as h,c as H,C as te,k as a,a as j,x as p,o as se,r as E,u as G,v as D,d as V,t as M,w as T,z as ie,y as oe}from"../chunks/index.6d34e091.js";import{e as B}from"../chunks/each.e59479a4.js";import{W as R}from"../chunks/Window.6e8a6a84.js";function ne(r){let t,s,e,o=r[0].title+"",i,n,u,l,b,w,$,I=r[0].description+"",k,c,d,y,x,A;return{c(){t=m("div"),s=m("a"),e=m("h1"),i=X(o),u=C(),l=m("div"),b=m("div"),w=m("div"),$=new ee(!1),k=C(),c=m("div"),d=m("a"),y=m("img"),this.h()},l(v){t=f(v,"DIV",{id:!0,class:!0});var g=_(t);s=f(g,"A",{target:!0,href:!0,class:!0});var F=_(s);e=f(F,"H1",{class:!0});var q=_(e);i=Y(q,o),q.forEach(h),F.forEach(h),u=H(g),l=f(g,"DIV",{id:!0,class:!0});var S=_(l);b=f(S,"DIV",{class:!0});var W=_(b);w=f(W,"DIV",{});var O=_(w);$=te(O,!1),O.forEach(h),W.forEach(h),k=H(S),c=f(S,"DIV",{class:!0});var U=_(c);d=f(U,"A",{target:!0,href:!0,class:!0});var J=_(d);y=f(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(h),U.forEach(h),S.forEach(h),g.forEach(h),this.h()},h(){a(e,"class","svelte-1bn4mpl"),a(s,"target","_blank"),a(s,"href",n=r[0].link),a(s,"class","svelte-1bn4mpl"),$.a=null,a(b,"class","left svelte-1bn4mpl"),P(y.src,x=r[0].icon)||a(y,"src",x),a(y,"alt",""),a(y,"class","svelte-1bn4mpl"),a(d,"target","_blank"),a(d,"href",A=r[0].link),a(d,"class","svelte-1bn4mpl"),a(c,"class","right svelte-1bn4mpl"),a(l,"id","previewWrap"),a(l,"class","svelte-1bn4mpl"),a(t,"id","preview"),a(t,"class","svelte-1bn4mpl")},m(v,g){j(v,t,g),p(t,s),p(s,e),p(e,i),p(t,u),p(t,l),p(l,b),p(b,w),$.m(I,w),p(l,k),p(l,c),p(c,d),p(d,y)},p(v,[g]){g&1&&o!==(o=v[0].title+"")&&se(i,o),g&1&&n!==(n=v[0].link)&&a(s,"href",n),g&1&&I!==(I=v[0].description+"")&&$.p(I),g&1&&!P(y.src,x=v[0].icon)&&a(y,"src",x),g&1&&A!==(A=v[0].link)&&a(d,"href",A)},i:K,o:K,d(v){v&&h(t)}}}function re(r,t,s){let{project:e={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"}}=t;return r.$$set=o=>{"project"in o&&s(0,e=o.project)},[e]}class ae extends Q{constructor(t){super(),L(this,t,re,ne,N,{project:0})}}function Z(r,t,s){const e=r.slice();return e[5]=t[s].title,e[6]=t[s].link,e[7]=t[s].description,e[8]=t[s].icon,e[10]=s,e}function le(r){let t,s;return t=new ae({props:{project:r[0]}}),{c(){E(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){D(t,e,o),s=!0},p(e,o){const i={};o&1&&(i.project=e[0]),t.$set(i)},i(e){s||(V(t.$$.fragment,e),s=!0)},o(e){M(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}function z(r){let t,s,e,o,i,n=r[5]+"",u,l,b,w,$;function I(){return r[4](r[10])}return{c(){t=m("div"),s=m("div"),e=m("img"),i=C(),u=X(n),l=C(),this.h()},l(k){t=f(k,"DIV",{class:!0});var c=_(t);s=f(c,"DIV",{class:!0});var d=_(s);e=f(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(h),i=H(c),u=Y(c,n),l=H(c),c.forEach(h),this.h()},h(){P(e.src,o=r[8])||a(e,"src",o),a(e,"alt",r[8]),a(e,"class","svelte-1st35ph"),a(s,"class","fileicon svelte-1st35ph"),a(t,"class",b="file "+(r[1]==r[10]?"active":"")+" svelte-1st35ph")},m(k,c){j(k,t,c),p(t,s),p(s,e),p(t,i),p(t,u),p(t,l),w||($=oe(t,"click",I),w=!0)},p(k,c){r=k,c&2&&b!==(b="file "+(r[1]==r[10]?"active":"")+" svelte-1st35ph")&&a(t,"class",b)},d(k){k&&h(t),w=!1,$()}}}function ce(r){let t,s=B(r[2]),e=[];for(let o=0;o<s.length;o+=1)e[o]=z(Z(r,s,o));return{c(){t=m("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=f(o,"DIV",{id:!0,class:!0});var i=_(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(h),this.h()},h(){a(t,"id","filewrap"),a(t,"class","svelte-1st35ph")},m(o,i){j(o,t,i);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(o,i){if(i&14){s=B(o[2]);let n;for(n=0;n<s.length;n+=1){const u=Z(o,s,n);e[n]?e[n].p(u,i):(e[n]=z(u),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},d(o){o&&h(t),ie(e,o)}}}function pe(r){let t,s,e,o;return t=new R({props:{title:"file_preview.exe",$$slots:{default:[le]},$$scope:{ctx:r}}}),e=new R({props:{title:"file_explorer.exe",$$slots:{default:[ce]},$$scope:{ctx:r}}}),{c(){E(t.$$.fragment),s=C(),E(e.$$.fragment)},l(i){G(t.$$.fragment,i),s=H(i),G(e.$$.fragment,i)},m(i,n){D(t,i,n),j(i,s,n),D(e,i,n),o=!0},p(i,[n]){const u={};n&2049&&(u.$$scope={dirty:n,ctx:i}),t.$set(u);const l={};n&2050&&(l.$$scope={dirty:n,ctx:i}),e.$set(l)},i(i){o||(V(t.$$.fragment,i),V(e.$$.fragment,i),o=!0)},o(i){M(t.$$.fragment,i),M(e.$$.fragment,i),o=!1},d(i){i&&h(s),T(t,i),T(e,i)}}}function he(r,t,s){let e=[{title:"SAHCon.com",description:"The landing page for the Stuck At Home Convention, a virtual homestuck convention held in VR and across the internet.",link:"https://sahcon.com/",icon:"webIcons/sahcon.png"},{title:"Homestuck 5 plus",description:"Homestuck 5+ is a tool to format Homestuck style dialogue. Entering homestuck style dialogue in the left text area will generate formatted homestuck dialogue in the right area.",link:"https://flaringk.github.io/homestuck5plus/",icon:"webIcons/hs5plus.png"},{title:"Hades: MEGIDO",description:"A crossover mod for SGG's Hades, featuring characters from Homestuck.",link:"https://www.nexusmods.com/hades/mods/152",icon:"webIcons/megido.png"},{title:"Flare's CSS textboxes",description:"Importable CSS module that creates multiple menus, text-styles and textboxes for use in MSPFA adventures.",link:"https://mspfa.com/?s=41577&p=1",icon:"webIcons/csst.png"},{title:"...Perform My Own Tracheotomy.",description:"<b>Watch As I Perform My Own Tracheotomy.</b> <br> A girl dissociates in her apartment and has a generally normal time. <br> <a href='https://twitter.com/Bungyg0rl'>A comic by Juney-Blues</a>",link:"https://junebugjamboree.neocities.org/tracheotomy/",icon:"webIcons/watchasiperformmyowntracheotomy.png"},{title:"Homestuck Hex Codes",description:"Easy to copy accurate Homestuck hex colours. ",link:"https://flaringk.github.io/hs-hexes/",icon:"webIcons/hexcodes.png"},{title:"Better Find and Replace",description:"A tool to make it easy to create and save the text transfroms you do every day",link:"https://flaringk.github.io/betterfindreplace/",icon:"webIcons/bfr.ico"},{title:"JARI: Grimdorks",description:"Homestuck fan continuation about a girl way out of her depth <br> <a href='https://twitter.com/Nerd_Zara'>A comic by Zara Nerd</a>",link:"https://grimdorks.net/",icon:"webIcons/jari.png"},{title:"Quirk Builder",description:"A tool to help generate homestuck quirks. ",link:"https://flaringk.github.io/quirkbuilder/",icon:"webIcons/quirkb.png"},{title:"Classpect Central",description:"A website about Classpects from Homestuck! Made using React JS.",link:"https://flaringk.github.io/classpectcentral/",icon:"webIcons/classpect.png"},{title:"Homestuck Textbox Generator",description:"Generate your own homestuck textboxes. There isn't much else to it.",link:"https://flaringk.github.io/textboxy/",icon:"webIcons/htg.png"},{title:"Spriter's Exporter",description:"Turn spritesheets from spriter's resource into useable transparent sprite sheets!",link:"https://flaringk.github.io/spriters-sheet/",icon:"webIcons/spriters.png"},{title:"Gdocs to fiction",description:"Format your google docs for fanfiction websites, with homstuck pesterchum auto formatting.",link:"https://flaringk.github.io/gdocs-to-fiction/",icon:"webIcons/gdoc2f.png"},{title:"Gif analyser",description:"Analyse all your favourite GIFS with this built in viewer made for viewing an inspecting timings and positions.",link:"https://flaringk.github.io/gifinfo/",icon:"webIcons/uhc.png"},{title:"Classpect Card Generator",description:"Generate your own playing cards based off of homestuck classes and aspects.",link:"https://flaringk.github.io/classpectcards/",icon:"webIcons/classcard.png"},{title:"Wizards 101 Name Generator",description:"Generate your own wizard 101 name.",link:"https://flaringk.github.io/w101-names-gen/",icon:"webIcons/w101.png"},{title:"Pictochum Canvas",description:"A web canvas that simulates some Japanese handheld that was pretty cool back in the day.",link:"https://flaringk.github.io/PictoChum-Canvas/",icon:"webIcons/pictochum.png"},{title:"Text 2 Textbox",description:"An AutoHotKey script that converts discord messages into undertale textboxes using Demirramon's textbox API. ",link:"https://flaringk.github.io/text2textbox/",icon:"webIcons/t2t.gif"},{title:"Mintendo DS Homescreen",description:"A recreation of the Mintendo DS home screen. Made to just explore CSS and JS.",link:"https://flaringk.github.io/Mintendo-DS/",icon:"webIcons/mds.png"},{title:"mspfaViewer",description:"This script was made to let you host your mspfa or original comic on it's own site.",link:"https://github.com/FlaringK/mspfaViewer",icon:"webIcons/mspa.png"},{title:"UHC: POV Timelines",description:"A port of madman-bob's Homestuck POV Cam Chrome extension to the Unoffical Homstuck Collection.",link:"https://github.com/FlaringK/UHC-POV-Cam",icon:"webIcons/uhc.png"},{title:"UHC: Dequirker",description:"A mod for the unoffical homestuck collection, removes quirks on a troll by troll basis.",link:"https://github.com/FlaringK/dequirk-UHC",icon:"webIcons/uhc.png"},{title:"UHC: Zoosmell Pooplord",description:"A mod for the unoffical homestuck collection, replaces every text instance of the beta kids names with their inital, sillier ones!",link:"https://github.com/FlaringK/Zoosmell-Pooplord",icon:"webIcons/uhc.png"}],o={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"},i=-1,n=l=>{s(0,o=e[l]),i==l&&window.open(e[l].link,"_blank"),s(1,i=l)};return[o,i,e,n,l=>{n(l)}]}class ge extends Q{constructor(t){super(),L(this,t,he,pe,N,{})}}export{ge as component};