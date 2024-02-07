var tl = gsap.timeline()

tl.from("#nav h1", {
    y: -50,
    duration: 0.5,
    opacity: 0
})
tl.from("#nav-part2 h2", {
    y: -50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    // delay: 1,
})
tl.from("#bottom h1", {
    y: -50,
    duration: 1,
    stagger: 0.5,
    // delay: 0.5,
    opacity: 0
})
tl.from("#nav-part3 h2", {
    y: -50,
    duration: 0.5,
    // delay: 1,
    opacity: 0,
    stagger: 0.3
})
tl.from("#head h1", {
    x: -100,
    duration: 1,
    scale: 0.5,
    stagger: 0.3,
    opacity: 0,
})
tl.to("#treat", {
    fontSize: 20,
    duration: 0.5,
})
tl.to("#treat", {
    delay: 0.5,
})
tl.to("#treat", {
    textContent: "Treat",

})
tl.to("#treat", {
    fontSize: "10vw",
    duration: 1,
    scale: 1
})
tl.to("#photo1", {
    rotate: 0,
    duration: 0.5,
    // delay: 3.9
})
tl.to("#photo2", {
    rotate: 0,
    duration: 0.5,
    // delay: 3.9
})
tl.to("#photo3", {
    rotate: 0,
    duration: 0.5,
    // delay: 3.9
})
tl.to("#photo1", {
    x: 300,
    y: 150,
    // delay: 5.5,
    duration: 1
})
tl.to("#photo2", {
    x: -300,
    y: 150,
    // delay: 5.5,
    duration: 1
})







