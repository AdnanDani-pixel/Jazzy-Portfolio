var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "1000vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: 0.1,
   marginTop: "-20%"
})
let tl2 = gsap.timeline({scrollTrigger:{
   trigger:"#center",
  //  markers:true,
   start:"10% 10%",
   // end:"150% 30%",
   scrub:2,
   markers:true
   
}});

tl2.to('.content .first',{
   delay:0.2,
   scale:5,
})
tl2.to('.first',{
   scale:1
})



