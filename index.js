const pokemonVideo = document.createElement("video")
pokemonVideo.src = "/videos/pokemon-game.mp4"
pokemonVideo.preload = "auto";

const eventsVideo = document.createElement("video")
eventsVideo.src = "/videos/iic-portfolio.mp4"
eventsVideo.preload = "auto";

const onlineIdeVideo = document.createElement("video")
onlineIdeVideo.src = "/videos/onlineide.mp4"
onlineIdeVideo.preload = "auto";

pokemonVideo.addEventListener("canplay", ()=>{
    console.log("Pokemon Video Loaded");
})

eventsVideo.addEventListener("canplay", ()=>{
    console.log("Events Video Loaded");
}
)

onlineIdeVideo.addEventListener("canplay", ()=>{
    console.log("Online Ide Video Loaded");
}
)

window.onload = function() {
    console.log("All Content Loaded");
}
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".square-trigger-2",
        start: "top",
        end: "bottom",
        scrub: 0.2,
        // markers: true,
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

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".dot");
const text = document.querySelector(".text");
cursor.style.pointerEvents = "none";
dot.style.pointerEvents = "none";
window.addEventListener("mousemove", (e) => {
    cursor.style.display = "block";
    dot.style.display = "block";
    gsap.to(dot, {
        x: e.clientX -5,
        y: e.clientY -5,
        duration: 0.5,
    })
})

function moveCursor (){
    gsap.to(cursor, {
        ease: "power2.out",
        x: dot.getBoundingClientRect().left + (dot.offsetWidth / 2) - (cursor.offsetWidth / 2) ,
        y: dot.getBoundingClientRect().top + (dot.offsetHeight / 2) - (cursor.offsetHeight / 2) ,
           duration: 1,
           })
}
setInterval(moveCursor, 10);


const icons = document.querySelectorAll(".icon");
icons.forEach(icon =>{
    icon.addEventListener("mouseenter", () => {
        // cursor.style.pointerEvents = "none";
        // dot.style.pointerEvents = "none";
        cursor.classList.add("cursor-text");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 2,
            duration: 0.7,
            })
        text.innerHTML = icon.getAttribute("data-text");
    })
    icon.addEventListener("mouseleave", () => {
        // cursor.style.pointerEvents = "auto";
        // dot.style.pointerEvents = "auto";
        cursor.classList.remove("cursor-text");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 1,
            duration: 0.5,
            })
        text.innerHTML = "";
     })
})

// const projectTitle = document.querySelector(".projectName");
// projectTitle.addEventListener("mouseenter", () => {

//     cursor.classList.add("cursor-video");
//     gsap.to(cursor, {
//         ease: "power2.out",
//         scale: 2,
//         duration: 0.7,
//         })
//     text.innerHTML = `<video width="320" height="240" muted auto autoplay>
//     <source src="./videos/pokemon-game.mp4" type="video/mp4">
//     Your browser does not support the video tag.
//   </video>`;
// }
// )
// projectTitle.addEventListener("mouseleave", () => {
//     cursor.classList.remove("cursor-video");
//     gsap.to(cursor, {
//         ease: "power2.out",
//         scale: 1,
//         duration: 0.5,
//         })  
//     text.innerHTML = "";
// }
// )
const videoElements = document.querySelectorAll(".videoElement");
videoElements.forEach(videoElement => {
    videoElement.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-video");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 2,
            duration: 7,
            })
        text.innerHTML = `<video width="620" height="440" muted auto autoplay>
        <source src="${videoElement.getAttribute("data-video-path")}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
    })
    videoElement.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-video");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 1,
            duration: 0.5,
            })  
        text.innerHTML = "";
    })
}
)
const liveDemos = document.querySelectorAll(".liveDemo");
liveDemos.forEach(liveDemo => {
    liveDemo.addEventListener("mouseenter", () => {
        dot.classList.add("dot-liveDemo");
        gsap.to(dot, {
            ease: "power2.out",
            scale: 5,
            duration: 0.7,
            })
        dot.innerHTML = `<i class="fa-solid fa-up-right-from-square"></i>`;
    })
    liveDemo.addEventListener("mouseleave", () => {
        dot.classList.remove("dot-liveDemo");
        gsap.to(dot, {
            ease: "power2.out",
            scale: 1,
            duration: 1,
            })  
        dot.innerHTML = "";
    })
}
)

const Codes = document.querySelectorAll(".Code");
Codes.forEach(Code => {
    Code.addEventListener("mouseenter", () => {
        dot.classList.add("dot-liveDemo");
        gsap.to(dot, {
            ease: "power2.out",
            scale: 5,
            duration: 0.7,
            })
        dot.innerHTML = `<i class="fa-solid fa-up-right-from-square"></i>`;
    })
    Code.addEventListener("mouseleave", () => {
        dot.classList.remove("dot-liveDemo");
        gsap.to(dot, {
            ease: "power2.out",
            scale: 1,
            duration: 1,
            })  
        dot.innerHTML = "";
    })
}
)

const techStacks = document.querySelectorAll(".TechStack");
techStacks.forEach(techStack => {
    techStack.addEventListener("mouseenter", () => {
        cursor.classList.remove("cursor")
        cursor.classList.add("cursor-techStack");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 2,
            duration: 0.7,
            })
        text.innerHTML = techStack.getAttribute("data-tech-stack");
    })
    techStack.addEventListener("mouseleave", () => {
        cursor.classList.add("cursor")
        cursor.classList.remove("cursor-techStack");
        gsap.to(cursor, {
            ease: "power2.out",
            scale: 1,
            duration: 0.5,
            })
        text.innerHTML = "";
     })
}
)