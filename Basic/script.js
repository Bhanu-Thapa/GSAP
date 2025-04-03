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
  stagger: 0.3     //*** IMPORTANT
})

timeLine.from("#heading",{
  opacity:0,
  duration:1,
  scale:0.2,
})