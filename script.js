var crsr=document.querySelector("#cursor");
var crsrBlur=document.querySelector("#cursor-blur");



document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsrBlur.style.left=dets.x-200+"px"
    crsrBlur.style.top=dets.y-200+"px"

});

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()

{
    crsr.style.scale=3
    crsr.style.border="1px solid white"
    crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #95C11E"
    crsr.style.backgroundColor="transparent"
}
)
}
)


gsap.to("#nav",{
    backgroundColor: "#000000",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top -10%",
        end:"top -10%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor: "#000000",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers: true,
        start:"top -26%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 56%",
        scrub:2
    }

}
)

gsap.from(".card",{
    scale:0.6,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }

}
)

gsap.from("#colon-left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-left",
        scoller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
}
)

gsap.from("#colon-right",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-left",
        scoller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
}
)
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scoller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
}
)