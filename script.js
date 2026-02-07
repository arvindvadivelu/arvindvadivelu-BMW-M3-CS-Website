function playVideo() {document.querySelector("body").addEventListener("click",() =>{
  document.querySelector("video").play();
  console.log("hey")
})
}
playVideo();


function sliderAnimation(){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });
}
sliderAnimation()


function locoScroll () {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}
locoScroll();

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");
page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    });
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    });
})
}
cursorEffect();
function page2Animation(){
    gsap.from(".elem h1",{
        y:100,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 45%",
            scrub:1
        }
    })
}
page2Animation();

var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.2
})
tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1,
  stagger:-0.2
})
tl.to("#loader",{
  opacity:0,
  display:"none",
})
tl.from("#page1-content span",{
  y:100,
  opacity:0,
  stagger:0.1
})