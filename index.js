const mainPg = document.getElementById("main")
const popUp = document.getElementById("popUp")
const closePop = document.getElementById("close-pop")
const innerContent = document.getElementById("innerContent")
const svg = document.getElementById("svg")
const nopeBtn = document.getElementById("decline-btn")
const flexBtn = document.getElementById("flexBtn")

setTimeout(function(){
    mainPg.style.filter = "blur(10px)"
    popUp.style.display = "block"
}, 1500)

closePop.addEventListener("click", function(){
    popUp.style.display = "none"
    mainPg.style.filter = "none"
})

form.addEventListener("submit", function(e){
    e.preventDefault()

    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")

        svg.innerHTML = 
        `
        <div>
        <img class="svgImg" src="./images/loading.svg">
        <p id="mainText" class="mainText">Uploading your data to Dark Web...</p>
        </div>
        `
    setTimeout(function(){
        document.getElementById("mainText").innerText = "Making a Dark Sale..."
    }, 3000)

    setTimeout(function(){
        innerContent.innerHTML = 
        `
        <div>
        <h1>Thanks, <span class="naEm">${name}</span>, you legendary sucker!!</h1>
        <img class="pirateImg" src="./images/pirate.gif">
        <h3 class="text">Sending dangerous viruses to <span class="naEm">${email}</span>....😈💻</h3>
        </div>
        `
        closePop.disabled = false
    }, 6000)
})

nopeBtn.addEventListener("mouseenter", function(){
    flexBtn.classList.toggle("change")
})