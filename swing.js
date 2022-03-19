let make, image

onload =()=> {
    const loader = document.querySelector(".loder")
    const box = document.querySelector(".box")
    make = document.body.style
    
    image = new Image()
    image.src = "https://www.dropbox.com/s/plmqc0ed6xk1lpf/kindpng_1051989.png?raw=1"
    image.onload = function() {
        box.classList.remove("end")
        make.background = "url('https://i.ibb.co/Kq2z1S7/151dc2a16ad655b6a8fe4379a3322b27.jpg')"
        make.backgroundPosition ="center"
        make.backgroundRepeat = "no-repeat"
    }
    
    GTB.autoInit()
    gtbA('Feel free to comment')
}