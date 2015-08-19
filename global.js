
window.onload = function() {
  var barmost = document.getElementById("barmost");
      barmedium = document.getElementById("barmedium");
      barleast = document.getElementById("barleast");
      skills = document.querySelectorAll(".skill");
  TweenLite.set(skills,{opacity:1});

  TweenLite.to(barmost, 2, {width:"322px", onComplete: startMediumBar});
  


  var tl = new TimelineMax();
  tl.staggerFrom(skills, 1, {y:-100, ease:Quart.easeOut, opacity:0}, 0.5);
  
  // var tl = new TimelineMax({repeat: 5});
  // //     tl.to(soldier, .01, {opacity: 1})
  // //     .staggerFrom(soldier, .7, {y:200}, .4);
  //

 


}
function startMediumBar(){
    TweenLite.to(barmedium, 2, {width:"322px", onComplete: startLeastBar });
}
function startLeastBar(){
  TweenLite.to(barleast, 2, {width:"322px", onComplete: console.log("complete") });
}