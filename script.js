//For animation
//<------------Locomotive js - smooth scrolling--------->
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//<-------Gsap to animate ------->
gsap.from(".nlink",{ //From use as we wanted to show from initial
    stagger: .2,  //It shows aftr how much time animation shows
    y:10,
    duration:1,
    ease:Power2,
    opacity:0

})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opacity:0,
    ease: Expo,
    duration:1
  })

 Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":4.96,"range":[0,100]},"uFrequencyZ":{"value":45.45,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.37},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.750004242792365},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":true},"uSpeed":{"value":0.67,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.02,"range":[0,5]},"uFrequency":{"value":4.55,"range":[0,10]}} ,
 })

 Shery.imageEffect(".imgeff ",{
    style:5,
    config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.77,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 })
gsap.from("imgntext img",{
  y:"100",
  opacity:0,
  duration:2,
  ease:Expo,
})
Shery.imageEffect("#bimg ",{
  style:5,
  config:{"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.318894395433371},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.17,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2]},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true,
  
})

document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
  gsap.to("#future video",{
    opacity:1,
    duration:1,
    ease:Power4
  })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
  gsap.to("#future video",{
    opacity:0,
    duration:1,
    ease:Power4
  })
})


//<-----------Shery js to animate images accordiingly------->
