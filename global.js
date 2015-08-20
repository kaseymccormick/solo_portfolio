
window.onload = function() {
// var test = document.getElementById("leastskill")


  
  var barmost = document.getElementById("barmost");
      barmedium = document.getElementById("barmedium");
      barleast = document.getElementById("barleast");
      mostSkills = document.querySelectorAll(".mostskill");
      mediumSkills = document.querySelectorAll(".mediumskill");
      leastSkills = document.querySelectorAll(".leastskill");
      
  TweenMax.to(barmost, 4.5, {onStart :startMostWords, width:"160px", onComplete: startMediumBar});
 
}

function startMostWords(){
  var tl1w = new TimelineMax();
  tl1w.staggerTo(mostSkills, 1, { y:20, ease:Quart.easeOut, opacity:1}, 0.5); 
}

function startMediumBar(){
    TweenMax.to(barmedium, 8, {onStart:startMediumWords, width:"520px", onComplete: startLeastBar });
}

function startMediumWords(){
  var tl2w = new TimelineMax();
  tl2w.staggerTo(mediumSkills, 1, { y:20, ease:Quart.easeOut, opacity:1}, 0.5);
}


function startLeastBar(){
  TweenMax.to(barleast, 5, {onStart: startLeastWords, width:"160px", onComplete: console.log("complete") });
}

function startLeastWords(){
  var tl3w = new TimelineMax();
  tl3w.staggerTo(leastSkills, 1, {y:20, ease:Quart.easeOut, opacity:1}, 0.5);
}




