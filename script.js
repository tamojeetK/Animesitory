gsap.from("#navbar .logo, .navigation", {
    y: -100,
    delay: 0.2,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})

var t1 = gsap.timeline();

t1.from("main h1, main span, main .bg-img , main .scroll-btn",{
    y: 200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})

t1.to("main .scroll-btn",{
    y:30,
    repeat: -1,
    duration: 1.5,
    yoyo: true
})