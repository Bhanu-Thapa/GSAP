// SCROLL TRIGGER

gsap.to("#page1 .box1", {
  x:550,
  rotate:360,
  borderRadius:'50%',
  duration:2,
  // scrollTrigger:'#page2'
  scrollTrigger: {
    trigger: '.box1',  // animation trigger elements
    scroller:'body',
    start: "top 40%",  // Animation Starting Point
    // markers:true
  }
})

gsap.to(".box2", {
  x:800,
  y:330,
  rotate:360,
  borderRadius:'50%',
  duration:2,

  scrollTrigger: {
    trigger: '#page2',
    scroller:'body',
    start: "top 50%",
    // end: "top 10%",   // if we dont give end point thn it will take "trigger" elements of bottom side
    markers:true,    // scroller-start and scroller-end point (like a marker)
    scrub:3    // *** Animation run by scrolling, higher the value the smoother the animation
  }
})

gsap.to("#page3 h2",{
  transform:'translateX(-165%)',
  scrollTrigger:{
    trigger:'#page3',
    scroller:'body',
    // markers:true,
    start:'top 0%',
    scrub:4,
    pin:true,  // this keeps the element fixed
  }
})

gsap.to("#page4 h2",{
  transform: 'translateY(100%)',
  scrollTrigger:{
    trigger:'#page4',
    scroller:'body',
    // markers:true,
    start:'top 100%',
    scrub:3,
  }
})