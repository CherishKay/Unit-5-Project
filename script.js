let Start= document.querySelector(".page1");
let Begin = document.querySelector(".Start");
let Page2= document.querySelector(".page2");
let Page3= document.querySelector(".page3");
let Page4= document.querySelector(".page4");
let Type1= document.querySelector (".Age");
let Next1=document.querySelector(".button-82-pushable");
let Next2=document.querySelector(".button-81-pushable");
let result=document.querySelector(".result");


Begin.onclick= function(){
  Start.style.display="none";
  Page2.style.display="block";
  result.style.display="none";
};


Next1.onclick= function(){
  Page3.style.display="block";
  Page2.style.display="none";
 
};

Next2.onclick= function(){
  Page3.style.display="none";
  Page2.style.display="none";
  Page4.style.display="block";
};
let season;

let summerButton = document.querySelector(".Summer");
summerButton.onclick = (function() {
  season= summerButton.textContent;
  console.log(season);
});

let autumnButton = document.querySelector(".Autumn");
autumnButton.onclick = (function() {
 season= autumnButton.textContent;
});

let winterButton = document.querySelector(".Winter");
winterButton.onclick = (function() {
 season= winterButton.textContent;
  console.log(season);
});

let springButton = document.querySelector(".Spring");
springButton.onclick = (function() {
 season= springButton.textContent;
});

let submitButton = document.querySelector(".button-83-pushable");
submitButton.onclick = (function() {
Page4.style.display="none";
  result.style.display="block";
  
let age=document.querySelector(".Age").value;
  let frequency=document.querySelector(".frequency").value.toLowerCase(); 
 
  if (season.trim() === "Summer!" && age <= 25 && frequency==="a"){
    result.innerHTML="You will definitely survive";
  }
  else if (season.trim() === "Winter!" && age < 25 && (frequency==="b"|| frequency==="d")){
    result.innerHTML="You could probably survive a storm on a fornite game.";
  }
    else if (season.trim() === "Autumn!" && age > 25 && (frequency==="b"|| frequency==="a")){
    result.innerHTML="You know, autumn is a very unigue season young padawan...I sense that you can survive through windy disasters.";
  }
   else if (season.trim() === "Summer!" && age <= 25 && frequency==="a"|| frequency==="d"){
    result.innerHTML="You need to experience life more...enjoy the peace while you can";
  }   
     else if (season.trim() === "Spring!" && age <= 30 && frequency==="d"){
    result.innerHTML="You may or may not survive a tornado...I don't know, but what I do know is that because you chose the last option...you are definitely a boomer in denial...tough, I know."
  }
   
  else{
    result.innerHTML="You are an expert"
  }
});
  
