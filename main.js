// Initialize VANTA effects and store them in variables
let vantaGlobe = VANTA.GLOBE({
    el: "#vanta-bg-home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    size: 0.60,
    backgroundColor: 0x181818,
});

let vantaDotsEvents = VANTA.DOTS({
    el: "#vanta-bg-events",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 0.7,
    scaleMobile: 1.00,
    color: 0xf2f2f2,
    color2: 0x181818,
    backgroundColor: 0x181818,
});

let vantaDotsGallery = VANTA.DOTS({
    el: "#vanta-bg-gallery",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 0.7,
    scaleMobile: 1.00,
    color: 0xf2f2f2,
    color2: 0x181818,
    backgroundColor: 0x181818,
});
let vantaDotsAboutUs = VANTA.DOTS({
    el: "#vanta-bg-about",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 0.7,
    scaleMobile: 1.00,
    color: 0xf2f2f2,
    color2: 0x181818,
    backgroundColor: 0x181818,
});
// Destroy VANTA effects when no longer needed
function destroyVantaEffects() {
    if (vantaGlobe) vantaGlobe.destroy();
    if (vantaDotsEvents) vantaDotsEvents.destroy();
    if (vantaDotsGallery) vantaDotsGallery.destroy();
    if (vantaDotsAboutUs) vantaDotsAboutUs.destroy();
}

// Example of calling destroy function on page unload
window.addEventListener('beforeunload', function() {
    destroyVantaEffects();
});

// GSAP animations
gsap.from(".text h1", { duration: 1.5, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 });
gsap.from(".text p", { duration: 1.5, y: 50, opacity: 0, ease: "power3.out", delay: 0.7 });
gsap.from(".button", { duration: 1.5, y: 50, opacity: 0, ease: "power3.out", delay: 0.9 });
gsap.from(".header nav", { duration: 1.5, y: 50, opacity: 0, ease: "power3.out", delay: 1.1 });
gsap.registerPlugin(ScrollTrigger);

gsap.to(".cards-container", {
    scrollTrigger: {
        trigger: ".cards-container",
        scrub: true
    },
    x: 500,
});

gsap.to(".text2 h1", {
    scrollTrigger: {
        trigger: ".cards-container",
        scrub: true
    },
    x: 500,
    y: 50
});
