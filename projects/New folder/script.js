var tl =  gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"50% 50%",
    end:"100% 50%",
    markers:true,
    scrub:2,
    pin:true
}})
tl.to(".top",{
    top:"-50%"
},"a")
tl.to(".bottom",{
    bottom:"-50%"
},"a")
tl.to("#top-h",{
    bottom:"100%"
},"a")



