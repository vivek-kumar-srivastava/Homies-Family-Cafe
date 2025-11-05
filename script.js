let crsr = document.getElementById("cursor");
let crsrWrap = document.getElementById("cursor-blur");
document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrWrap.style.left = dets.x-125 + "px";
    crsrWrap.style.top = dets.y-125 + "px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1 ,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -15%",
        end:"top -60%",
        scrub:2,
    }
})

gsap.from("#colon1",{
y:-30,
x:-40,
scrollTrigger:{
trigger:"#colon1",
scroller:"body",
start:"top 55%",
end:"top 45%",
scrub:4,
}
})

gsap.from("#colon2",{
y:70,
x:70,
scrollTrigger:{
trigger:"#colon1",
scroller:"body",
start:"top 55%",
end:"top 45%",
scrub:4,
}
})

gsap.from("#page3 p",{
scale:0.95,
scrollTrigger:{
trigger:"#colon1",
scroller:"body",
start:"top 55%",
end:"top 45%",
scrub:4,
}
})

gsap.from("#page4 h1",{
y:50,
scrollTrigger:{
trigger:"#page4 h1",
scroller:"body",
start:"top 75%",
end:"top 70%",
scrub:3,
}
})
