const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener");document.querySelector("#btnNuevo");let d=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),o=(t=2)=>{e=i(),l=[];for(let r=0;r<t;r++)l.push(0);s.forEach(e=>e.innerText=0),d.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},i=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(l+a);for(let n of r)for(let d of t)e.push(n+d);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},c=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(l[t]+=c(e),s[t].innerText=l[t],l[t]),f=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),d[t].append(r)},h=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("Nadie gana =("):e>21?alert("Computadora gana!"):t>21?alert("Jugador Gana"):alert("Computadora Gana")},95)},b=e=>{let t=0;do{let r=u();t=$(r,l.length-1),f(r,l.length-1)}while(t<e&&e<=21);h()};return a.addEventListener("click",()=>{let e=u(),t=$(e,0);f(e,0),t>21?(console.log("Perdiste!"),a.disabled=!0,n.disabled=!0,b(t)):21===t&&(console.warn("Ganaste"),a.disabled=!0,n.disabled=!0,b(t))}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,b(l[0])}),{nuevoJuego:o}})();