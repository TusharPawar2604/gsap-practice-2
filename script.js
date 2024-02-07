// var tl =  gsap.timeline()

gsap.from("#nav h1", {
    y: -50,
    duration: 1,
    opacity: 0
})
gsap.from("#nav-part2 h2", {
    y: -50,
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    delay: 1,
})
gsap.from("#bottom h1", {
    y: -50,
    duration: 1,
    stagger: 0.5,
    delay: 0.5,
    opacity: 0
})
gsap.from("#nav-part3 h2", {
    y: -50,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    stagger: 0.3
})
gsap.from("#head h1", {
    x: -100,
    duration: 1,
    delay: 2,
    scale: 0.5,
    stagger: 0.3,
    opacity: 0,
})
gsap.to("#photo1", {
    rotate: 0,
    duration: 1.5,
    delay: 3.9
})
gsap.to("#photo2", {
    rotate: 0,
    duration: 1.5,
    delay: 3.9
})
gsap.to("#photo3", {
    rotate: 0,
    duration: 1.5,
    delay: 3.9
})
gsap.to("#photo1", {
    x: 300,
    y: 150,
    delay: 5.5,
    duration: 1
})
gsap.to("#photo2", {
    x: -300,
    y: 150,
    delay: 5.5,
    duration: 1
})


