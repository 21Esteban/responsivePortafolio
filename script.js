const header = document.querySelector("header")

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky",window.scrollY > 200)
})

//SI al escrolear es mayor a 200 entonces agragamos la clase sticky a header

let menu = document.querySelector('box-icon#menu.menu')

let navlist= document.querySelector('.navlist')

menu.onclick = () =>{
    navlist.classList.toggle('open')
}

window.onscroll = () =>{
    navlist.classList.remove('open')
}

const sr = ScrollReveal({
    distance:'40px',
    duration:2050,
    delay:200,
    reset:true
})

sr.reveal('.hero-text',{origin:'top'})
sr.reveal('.about-img,.service-item,.about-text',{origin:'bottom'})
sr.reveal('.about-text h2, .text-center, .right-contact h2',{origin:'top'})
sr.reveal('.left-contact',{origin:'left'})
sr.reveal('.right-contact',{origin:'right'})
sr.reveal('.end-section',{origin:'top'})
