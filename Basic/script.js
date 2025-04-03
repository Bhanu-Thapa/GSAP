// gsap.from("#logo",{
//   y:-20,
//   opacity:0,
//   duration:0.5,
//   delay:0.5,
// })

// gsap.from(".menu",{
//   y:-15,
//   opacity:0,
//   duration:0.5,
//   delay:1,
//   stagger: 0.3     //***
// })

// gsap.from("#heading",{
//   scale:0.2,
//   opacity:0,
//   duration:1,
//   delay:2
// })

// TIME LINE * In Time Line we don't need to put "delay", It will Run One by One*

var timeLine = gsap.timeline()

timeLine.from("#logo",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5,
})

timeLine.from(".menu",{
  y:-15,
  opacity:0,
  duration:0.5,
  stagger: 0.3     //*** IMPORTANT - Multi element of same id or classes, Animation will Run one by one between the interval of 0.3s | -1 value will run the element from the Last.
})

timeLine.from("#heading",{
  opacity:0,
  duration:1,
  scale:0.2,
})

// More Proteries

gsap.to(".box1", {
  rotate:360,
  duration:1,
  x:800,
  delay: 4,
  repeat:1     // Run 2 times bcz by default its run 1 time | -1 value mean Infinite
})

gsap.to(".box2", {
  rotate:360,
  borderRadius:'50%',
  duration:1,
  x:500,
  repeat:-1,    // -1 value mean Infinite
  yoyo:true,    // Bounce Back the Element
})