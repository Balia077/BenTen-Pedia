const counter = document.querySelector("#counter");
const hero = document.querySelector("#hero")

gsap.set(".video-container",{
    scale: 0,
    rotation: -20,
});


gsap.to("#hero",{
    onStart: () => {
        gsap.to(".video-container",{
            scale: 1,
            rotation: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            delay: 4.5,
            ease: "power2.out"
        });
        gsap.to(".logo",{
            left: "0%",
            transform: "translateX(0%)",
            duration: 1.25,
            ease: "power2.out",

            onStart: () => {
                gsap.to(".char.anim-out h1",{
                    y: "100%",
                    duration: 1,
                    stagger: -0.075,
                    ease: "power1.out"
                });

                gsap.to(".char.anim-in h1",{
                    x: "-1200%",
                    duration: 1,
                    ease: "power.out",
                    delay: 0.25
                });
            }
        });
    },
});

gsap.to([".header span", ".coordinates span"], {
    y: "0%",
    duration: 1,
    stagger: 0.125,
    ease: "power3.out",
    delay: 5.75
}); 

var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},4000)