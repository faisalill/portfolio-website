gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".square-trigger-2",
        start: "top",
        end: "bottom",
        scrub: 0.2,
        markers: true,
    }
})

// gsap.to(".container",{
//     rotationX: "-25deg", 
//     rotationY: "20deg",
//     scale: 0.8,
//     y: 100,
//     duration: 1,
//     scrollTrigger:{
//         trigger: ".square-trigger-1",
//         start: "top",
//         end: "bottom",
//         scrub: 0.2,
//         markers: true,
//     }
// })
tl.to(".container",{
    rotationX: "20deg", 
    rotationY: "20deg",
    rotationZ: "5deg",
    scale: 0.5,
    y: "40%",
    duration: 2,
})
tl.to(".container-2", {
    x: "50%",
    y: "42%",
    duration: 2,
}, "-=2")
tl.to(".container", {
    x:"-50%",
    duration: 1,
})
tl.to(".container-2", {
    x: "0%",
    // y: "50%",
    duration: 1,
}, "-=1")
tl.to(".container-2", {
    y: "50%",
    duration: 0.4,
})
tl.to(".container-2", {
    scale: 1,
    rotationX: "0deg",
    rotationY: "0deg",
    rotationZ: "0deg",
    y: "180%",
    duration: 0.4,
})
tl.to(".container-2", {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
    duration: 1,
})

