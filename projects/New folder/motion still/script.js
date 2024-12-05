// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger:".pinned",
    start:"top top",
    endTrigger: ".white-space",
    end: "bottom top",
    pin:true,
    pinSpacing: false,
    markers:true
});

ScrollTrigger.create({
    trigger:".header-info",
    start:"top top",
    endTrigger: ".white-space",
    end: "bottom top",
    pin:true,
    pinSpacing: false,
    markers:true
});

ScrollTrigger.create({
    trigger:".pinned",
    start:"top top",
    endTrigger: ".header-info",
    end: "bottom bottom",
    onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", {rotation});
    }
});


ScrollTrigger.create({
    trigger:".pinned",
    start:"top top",
    endTrigger: ".header-info",
    end: "bottom bottom",
    onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
        ${45 - 45 * progress}% 0%,
        ${55 + 45 * progress}% 0%,
        ${55 + 45 * progress}% 100%,
         ${45 - 45 * progress}% 100%
        )`;
        gsap.to(".revealer-1, .revealer-2", {
           clipPath: clipPath,
           ease: "none",
           duration: 0 
        }); 
    },
});

ScrollTrigger.create({
    trigger: ".header-info",
    start : "top top",
    end: "bottom 50%",
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;

        gsap.to(".revealer", {
            left : `${left}%`,
            ease: "none",
            duration:0,
        });
    }
});

ScrollTrigger.create({
    trigger: ".white-space",
    start : "top 50%",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
        const scale = 1 + 12 * self.progress;
        gsap.to(".revealer", {
            scale: scale,
            ease: "none",
            duration:0,
        });
    }
});