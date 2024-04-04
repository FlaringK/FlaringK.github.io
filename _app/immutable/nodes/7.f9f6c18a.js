import{s as N,e as j,c as U}from"../chunks/scheduler.81e61739.js";import{S as L,i as Q,g as m,m as X,s as H,H as ee,h as d,j as w,n as Y,f as p,c as C,B as te,k as a,a as S,x as h,o as ie,r as D,u as G,v as E,d as V,t as q,w as T,z as se,y as oe}from"../chunks/index.a16ca3cc.js";import{e as B}from"../chunks/each.e59479a4.js";import{W as K}from"../chunks/Window.971b780f.js";function ne(r){let t,i,e,o=r[0].title+"",s,n,u,l,b,_,I,$=r[0].description+"",k,c,f,y,A,x;return{c(){t=m("div"),i=m("a"),e=m("h1"),s=X(o),u=H(),l=m("div"),b=m("div"),_=m("div"),I=new ee(!1),k=H(),c=m("div"),f=m("a"),y=m("img"),this.h()},l(v){t=d(v,"DIV",{id:!0,class:!0});var g=w(t);i=d(g,"A",{target:!0,href:!0,class:!0});var M=w(i);e=d(M,"H1",{class:!0});var O=w(e);s=Y(O,o),O.forEach(p),M.forEach(p),u=C(g),l=d(g,"DIV",{id:!0,class:!0});var P=w(l);b=d(P,"DIV",{class:!0});var F=w(b);_=d(F,"DIV",{});var R=w(_);I=te(R,!1),R.forEach(p),F.forEach(p),k=C(P),c=d(P,"DIV",{class:!0});var W=w(c);f=d(W,"A",{target:!0,href:!0,class:!0});var J=w(f);y=d(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(p),W.forEach(p),P.forEach(p),g.forEach(p),this.h()},h(){a(e,"class","svelte-1bn4mpl"),a(i,"target","_blank"),a(i,"href",n=r[0].link),a(i,"class","svelte-1bn4mpl"),I.a=null,a(b,"class","left svelte-1bn4mpl"),j(y.src,A=r[0].icon)||a(y,"src",A),a(y,"alt",""),a(y,"class","svelte-1bn4mpl"),a(f,"target","_blank"),a(f,"href",x=r[0].link),a(f,"class","svelte-1bn4mpl"),a(c,"class","right svelte-1bn4mpl"),a(l,"id","previewWrap"),a(l,"class","svelte-1bn4mpl"),a(t,"id","preview"),a(t,"class","svelte-1bn4mpl")},m(v,g){S(v,t,g),h(t,i),h(i,e),h(e,s),h(t,u),h(t,l),h(l,b),h(b,_),I.m($,_),h(l,k),h(l,c),h(c,f),h(f,y)},p(v,[g]){g&1&&o!==(o=v[0].title+"")&&ie(s,o),g&1&&n!==(n=v[0].link)&&a(i,"href",n),g&1&&$!==($=v[0].description+"")&&I.p($),g&1&&!j(y.src,A=v[0].icon)&&a(y,"src",A),g&1&&x!==(x=v[0].link)&&a(f,"href",x)},i:U,o:U,d(v){v&&p(t)}}}function re(r,t,i){let{project:e={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"}}=t;return r.$$set=o=>{"project"in o&&i(0,e=o.project)},[e]}class ae extends L{constructor(t){super(),Q(this,t,re,ne,N,{project:0})}}function Z(r,t,i){const e=r.slice();return e[5]=t[i].title,e[6]=t[i].link,e[7]=t[i].description,e[8]=t[i].icon,e[10]=i,e}function le(r){let t,i;return t=new ae({props:{project:r[0]}}),{c(){D(t.$$.fragment)},l(e){G(t.$$.fragment,e)},m(e,o){E(t,e,o),i=!0},p(e,o){const s={};o&1&&(s.project=e[0]),t.$set(s)},i(e){i||(V(t.$$.fragment,e),i=!0)},o(e){q(t.$$.fragment,e),i=!1},d(e){T(t,e)}}}function z(r){let t,i,e,o,s,n=r[5]+"",u,l,b,_,I;function $(){return r[4](r[10])}return{c(){t=m("div"),i=m("div"),e=m("img"),s=H(),u=X(n),l=H(),this.h()},l(k){t=d(k,"DIV",{class:!0});var c=w(t);i=d(c,"DIV",{class:!0});var f=w(i);e=d(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(p),s=C(c),u=Y(c,n),l=C(c),c.forEach(p),this.h()},h(){j(e.src,o=r[8])||a(e,"src",o),a(e,"alt",r[8]),a(e,"class","svelte-1st35ph"),a(i,"class","fileicon svelte-1st35ph"),a(t,"class",b="file "+(r[1]==r[10]?"active":"")+" svelte-1st35ph")},m(k,c){S(k,t,c),h(t,i),h(i,e),h(t,s),h(t,u),h(t,l),_||(I=oe(t,"click",$),_=!0)},p(k,c){r=k,c&2&&b!==(b="file "+(r[1]==r[10]?"active":"")+" svelte-1st35ph")&&a(t,"class",b)},d(k){k&&p(t),_=!1,I()}}}function ce(r){let t,i=B(r[2]),e=[];for(let o=0;o<i.length;o+=1)e[o]=z(Z(r,i,o));return{c(){t=m("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){t=d(o,"DIV",{id:!0,class:!0});var s=w(t);for(let n=0;n<e.length;n+=1)e[n].l(s);s.forEach(p),this.h()},h(){a(t,"id","filewrap"),a(t,"class","svelte-1st35ph")},m(o,s){S(o,t,s);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(o,s){if(s&14){i=B(o[2]);let n;for(n=0;n<i.length;n+=1){const u=Z(o,i,n);e[n]?e[n].p(u,s):(e[n]=z(u),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(o){o&&p(t),se(e,o)}}}function he(r){let t,i,e,o;return t=new K({props:{title:"file_preview.exe",$$slots:{default:[le]},$$scope:{ctx:r}}}),e=new K({props:{title:"file_explorer.exe",$$slots:{default:[ce]},$$scope:{ctx:r}}}),{c(){D(t.$$.fragment),i=H(),D(e.$$.fragment)},l(s){G(t.$$.fragment,s),i=C(s),G(e.$$.fragment,s)},m(s,n){E(t,s,n),S(s,i,n),E(e,s,n),o=!0},p(s,[n]){const u={};n&2049&&(u.$$scope={dirty:n,ctx:s}),t.$set(u);const l={};n&2050&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(s){o||(V(t.$$.fragment,s),V(e.$$.fragment,s),o=!0)},o(s){q(t.$$.fragment,s),q(e.$$.fragment,s),o=!1},d(s){s&&p(i),T(t,s),T(e,s)}}}function pe(r,t,i){let e=[{title:"CHORDIOID",description:"A rhythm RPG where you battle to the beat. CHORDIOID is a unique musical JRPG that seamlessly blends turn-based combat with rhythm game mechanics.",link:"https://chordioid.com/",icon:"webIcons/cd.png"},{title:"SAHCon.com",description:"The landing page for the Stuck At Home Convention, a virtual homestuck convention held in VR and across the internet.",link:"https://sahcon.com/",icon:"webIcons/sahcon.png"},{title:"Homestuck 5 plus",description:"Homestuck 5+ is a tool to format Homestuck style dialogue. Entering homestuck style dialogue in the left text area will generate formatted homestuck dialogue in the right area.",link:"https://flaringk.github.io/homestuck5plus/",icon:"webIcons/hs5plus.png"},{title:"Pesterquest Rewritten",description:"A fanmade rewrite of Homestuck - Pesterquest! <a href='https://etchjetty.github.io/'>Written by Etch Jetty</a>",link:"https://hjtfir.itch.io/pesterquest-rewritten",icon:"webIcons/pqr.png"},{title:"Flare's CSS textboxes",description:"Importable CSS module that creates multiple menus, text-styles and textboxes for use in MSPFA adventures.",link:"https://mspfa.com/?s=41577&p=1",icon:"webIcons/csst.png"},{title:"...Perform My Own Tracheotomy.",description:"<b>Watch As I Perform My Own Tracheotomy.</b> <br> A girl dissociates in her apartment and has a generally normal time. <br> <a href='https://twitter.com/Bungyg0rl'>A comic by Juney-Blues</a>",link:"https://junebugjamboree.neocities.org/tracheotomy/",icon:"webIcons/watchasiperformmyowntracheotomy.png"},{title:"Homestuck Hex Codes",description:"Easy to copy accurate Homestuck hex colours. ",link:"https://flaringk.github.io/hs-hexes/",icon:"webIcons/hexcodes.png"},{title:"Better Find and Replace",description:"A tool to make it easy to create and save the text transfroms you do every day",link:"https://flaringk.github.io/betterfindreplace/",icon:"webIcons/bfr.ico"},{title:"Grist Torrent+",description:"A Homestuck Suika Game",link:"https://flaringk.itch.io/grist-torrent",icon:"webIcons/BUILD.png"},{title:"Hades: MEGIDO",description:"A crossover mod for SGG's Hades, featuring characters from Homestuck.",link:"https://www.nexusmods.com/hades/mods/152",icon:"webIcons/megido.png"},{title:"JARI: Grimdorks",description:"Homestuck fan continuation about a girl way out of her depth <br> <a href='https://twitter.com/Nerd_Zara'>A comic by Zara Nerd</a>",link:"https://grimdorks.net/",icon:"webIcons/jari.png"},{title:"Quirk Builder",description:"A tool to help generate homestuck quirks. ",link:"https://flaringk.github.io/quirkbuilder/",icon:"webIcons/quirkb.png"},{title:"Classpect Central",description:"A website about Classpects from Homestuck! Made using React JS.",link:"https://flaringk.github.io/classpectcentral/",icon:"webIcons/classpect.png"},{title:"Homestuck Textbox Generator",description:"Generate your own homestuck textboxes. There isn't much else to it.",link:"https://flaringk.github.io/textboxy/",icon:"webIcons/htg.png"},{title:"Spriter's Exporter",description:"Turn spritesheets from spriter's resource into useable transparent sprite sheets!",link:"https://flaringk.github.io/spriters-sheet/",icon:"webIcons/spriters.png"},{title:"Gdocs to fiction",description:"Format your google docs for fanfiction websites, with homstuck pesterchum auto formatting.",link:"https://flaringk.github.io/gdocs-to-fiction/",icon:"webIcons/gdoc2f.png"},{title:"Gif analyser",description:"Analyse all your favourite GIFS with this built in viewer made for viewing an inspecting timings and positions.",link:"https://flaringk.github.io/gifinfo/",icon:"webIcons/uhc.png"},{title:"Classpect Card Generator",description:"Generate your own playing cards based off of homestuck classes and aspects.",link:"https://flaringk.github.io/classpectcards/",icon:"webIcons/classcard.png"},{title:"Wizards 101 Name Generator",description:"Generate your own wizard 101 name.",link:"https://flaringk.github.io/w101-names-gen/",icon:"webIcons/w101.png"},{title:"Pictochum Canvas",description:"A web canvas that simulates some Japanese handheld that was pretty cool back in the day.",link:"https://flaringk.github.io/PictoChum-Canvas/",icon:"webIcons/pictochum.png"},{title:"Text 2 Textbox",description:"An AutoHotKey script that converts discord messages into undertale textboxes using Demirramon's textbox API. ",link:"https://flaringk.github.io/text2textbox/",icon:"webIcons/t2t.gif"},{title:"Mintendo DS Homescreen",description:"A recreation of the Mintendo DS home screen. Made to just explore CSS and JS.",link:"https://flaringk.github.io/Mintendo-DS/",icon:"webIcons/mds.png"},{title:"mspfaViewer",description:"This script was made to let you host your mspfa or original comic on it's own site.",link:"https://github.com/FlaringK/mspfaViewer",icon:"webIcons/mspa.png"},{title:"UHC: POV Timelines",description:"A port of madman-bob's Homestuck POV Cam Chrome extension to the Unoffical Homstuck Collection.",link:"https://github.com/FlaringK/UHC-POV-Cam",icon:"webIcons/uhc.png"},{title:"UHC: Dequirker",description:"A mod for the unoffical homestuck collection, removes quirks on a troll by troll basis.",link:"https://github.com/FlaringK/dequirk-UHC",icon:"webIcons/uhc.png"},{title:"UHC: Zoosmell Pooplord",description:"A mod for the unoffical homestuck collection, replaces every text instance of the beta kids names with their inital, sillier ones!",link:"https://github.com/FlaringK/Zoosmell-Pooplord",icon:"webIcons/uhc.png"}],o={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"},s=-1,n=l=>{i(0,o=e[l]),s==l&&window.open(e[l].link,"_blank"),i(1,s=l)};return[o,s,e,n,l=>{n(l)}]}class ge extends L{constructor(t){super(),Q(this,t,pe,he,N,{})}}export{ge as component};
