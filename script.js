const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixedImg = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixedImg.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixedImg.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var Img = e.getAttribute("data-image")
        fixedImg.style.backgroundImage = `url(${Img})`
    })
})

const images = {
    0: "./img5.webp",
    1: "./img2.webp",
    2: "./img1.webp"
}

const paragraphs = {
    0: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    1: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    2: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
}

let imageContainer = document.querySelector("#p4right")
let p4Elems = document.querySelectorAll(".p4h1")
let currentActive = null
let para = document.querySelector("#p4Para")

const toggleOn = (e, para, text, imgSrc) => {
    e.style.paddingLeft = '0.5vw'
    e.style.color = 'white'
    e.style.transition = 'all ease 0.2s'
    e.style.borderLeft = '3px solid red'
    para.textContent = text
    para.style.opacity = 1
    imageContainer.style.backgroundImage = `url(${imgSrc})`
    imageContainer.style.opacity = 1
}

const toggleOff = (e, para) => {
    e.style.paddingLeft = '3vw'
    e.style.color = 'rgba(255, 255, 255, 0.281)'
    e.style.transition = 'all ease 0.2s'
    e.style.borderLeft = '3px solid rgba(255, 255, 255, 0.281)'
    para.style.opacity = 0
}



window.addEventListener('load', function() {
    const firstElement = p4Elems[0]
    toggleOn(firstElement, para, paragraphs[0], images[0])
    currentActive = firstElement
})

p4Elems.forEach(function(e, index){
    e.addEventListener("click", function(){
        if (currentActive !== null) {
            toggleOff(currentActive, para)
        }
        if (currentActive !== e) {
            toggleOn(e, para, paragraphs[index], images[index])
            currentActive = e
        } else {
            currentActive = firstElement
        }
    })
})
var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
}, 4000)