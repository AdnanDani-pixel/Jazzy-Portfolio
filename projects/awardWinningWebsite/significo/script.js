function home () {

  
gsap.set(".slidesm", {scale:5} )


var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".home",
    start:"top top",
    end:"bottom bottom",
    scrub:2,
  }
})
tl.to(".vdodiv", {
        '--clip':"0%",
       
}, 'a')
.to(".slidesm", {
  scale:1,
  ease:2
},'a')

.to(".lft", {
  xPercent:-10,
  ease:4
},'b')
.to(".rgt", {
  xPercent:5,
  ease:4
},'b')
}
function realPage(){
  gsap.to(".slide", {
    scrollTrigger:{
     trigger:".real",
     start:"top top",
     end:"bottom bottom",
     scrub:2
    },
    xPercent:-200,
    ease:4
  })
}

function teamAnimation (){
  document.querySelectorAll(".listelem")

.forEach(function(el){
  el.addEventListener("mousemove", function(dets){
    gsap.to(  this.querySelector(".picture"), {
      opacity:1,
       x: gsap.utils.mapRange(0, window.innerWidth, -200,200, dets.clientX),
      ease:4,
      duration:.4
    })
  })
  
  el.addEventListener("mouseleave", function(dets){
    gsap.to(  this.querySelector(".picture"), {
      opacity:0,
      ease:4,
      duration:.4
    })
  })
})

}
function loco(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}

document.querySelectorAll(".section")
.forEach(function(e){
  ScrollTrigger.create({
    trigger:e,
    start:"top 50%",
    end:"bottom 50%",
    markers:true,
    onEnter: function (){
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function(){
      document.body.setAttribute("theme", e.dataset.color);
    }
  })
})

loco();
home ();
realPage ();
teamAnimation();