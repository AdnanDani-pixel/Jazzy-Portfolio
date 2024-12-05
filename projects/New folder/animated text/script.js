
// document.addEventListener("DOMContentLoaded",()=>{
//         let cursor = document.querySelector(".CURSOR");
//         let txt="Animate text effect";
    
//         for(let i=0;i<txt.length;i++){
//             let span = document.createElement("span");
//             span.classList.add("text");
//             span.style.setProperty("--i", i+1);
//             span.style.left = i*0.6+"em";
//             span.textContent=txt[i];
//             span.style.filter ="hue-rotate(${i*10}deg)";
//             cursor.appendChild(span)
//         }

//     document.addEventListener("mousemove", e =>{
//         gsap.to(".text",{
//            x: e.clientX,
//            y: e.clientY,
//            stagger: 1
//         })
//    })
    
// })

document.addEventListener("mousemove", e =>{
    gsap.to("h1",{
        x: e.clientX,
        y: e.clientY,
        stagger:0.2   
         })
})