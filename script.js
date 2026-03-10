/* COUNTDOWN TO MARCH 12 */

let birthday = new Date("March 12, 2026 00:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = birthday - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
let seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("timer").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);


/* FIREWORKS */

function firework(){

let x=Math.random()*window.innerWidth;
let y=Math.random()*window.innerHeight/2;

for(let i=0;i<40;i++){

let p=document.createElement("div");

p.className="sparkle";

p.style.left=x+"px";
p.style.top=y+"px";

let angle=Math.random()*2*Math.PI;
let dist=80+Math.random()*60;

p.style.transform=
`translate(${Math.cos(angle)*dist}px,
${Math.sin(angle)*dist}px)`;

document.body.appendChild(p);

setTimeout(()=>p.remove(),600);

}

}

setInterval(firework,2000);


/* BALLOONS */

function balloon(){

let b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"%";

b.style.background=["#3399ff","#66ccff","#00bfff"]
[Math.floor(Math.random()*3)];

b.onclick=function(){

b.remove();

}

document.body.appendChild(b);

setTimeout(()=>b.remove(),10000);

}

setInterval(balloon,800);


/* SPARKLE TRAIL */

document.addEventListener("mousemove",function(e){

let s=document.createElement("div");

s.className="sparkle";

s.style.left=e.clientX+"px";
s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>s.remove(),600);

});