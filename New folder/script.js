// var tl = gsap.timeline({scrollTrigger:{
//     trigger:"#main",
//    //  markers:true,
//     start:"50% 50%",
//     end:"150% 50%",
//     scrub:2,
//     pin:true
// }});


var tl = gsap.timeline({scrollTrigger:{
   trigger:"#main",
   markers:true,
   start:"50% 50%",
   end:"150% 50%",
   scrub:2,
   pin:true
}})

tl.to("#top",{
    top:"-100%",
},'a')
tl.to("#bottom",{
    bottom:"-50%",
},'a')
tl.to("#center",{
    marginTop:"-20%",
    delay:1,
},'a')

