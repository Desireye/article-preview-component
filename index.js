const shareBtn = document.getElementById("share-btn")
const socials = document.getElementById("socials")

shareBtn.addEventListener("mouseover", function() {
    socials.style.display = 'block'
    console.log("hover")
})