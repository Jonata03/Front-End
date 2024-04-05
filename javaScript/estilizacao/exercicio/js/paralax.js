(function(){
    window.addEventListener("scroll", positionImage)

    const dataParalaxConteiner = [...document.querySelectorAll("[data-paralax]")]
    function isGettingOut(container){
        return container.getBoundingClientRect(top <= 0)
    }

    function positionImage(){
        dataParalaxConteiner.forEach(c => {
            let originalPositionY = getComputedStyle(c).backgroundPositionY
            let originalPositionX = getComputedStyle(c).backgroundPositionX

            if(isGettingOut(c)){
                c.style.backgroundPosition = `${originalPositionX} ${getNewPosition(c)}px`
            }
        })
    }
    function getNewPsition(c){
         const v = parseFloat(c.getAttribute("data-p-velocity")) || .5
         return c.getBoundingClientRect().top * v * -1
    }
})()