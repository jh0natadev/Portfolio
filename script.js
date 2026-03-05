particlesJS("particles-js", {

particles:{

number:{ value:80 },

color:{ value:"#00ffff" },

shape:{ type:"circle" },

opacity:{ value:0.5 },

size:{ value:3 },

line_linked:{
enable:true,
distance:150,
color:"#00ffff",
opacity:0.4,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{
events:{
onhover:{
enable:true,
mode:"grab"
}
},

modes:{
grab:{
distance:140,
line_linked:{ opacity:1 }
}
}

}

});


/* 3D INTERATIVO */

const cards = document.querySelectorAll(".card-3d");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateX = -(y - centerY) / 10;
const rotateY = (x - centerX) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "rotateX(0) rotateY(0)";

});

});