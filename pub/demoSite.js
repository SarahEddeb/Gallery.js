'use strict'

function showAPI() {
    console.log("Showing API")
    let api = document.getElementById("api");
    let examples = document.getElementById("examples");
    let landing = document.getElementById("landing");

    if (api.classList.contains("hide")) {
        api.classList.remove("hide")
    }

    examples.style.position = "absolute"
    examples.style.left = "-1000000px"

}

// function hide(element) {
//     element.style.display = "none";
//     if(element.children.length > 0) {
//         for (let i = 0; i < element.children.length; i++) {
//             hide(element.children[i])
//         }
//     }
//     else {
//         return null
//     }
// }

function showExamples() {
    let api = document.getElementById("api").style.display = "none"
    let examples = document.getElementById("examples")
    let landing = document.getElementById("landing").style.display = "none"

    if (examples.classList.contains("hide")){
        examples.classList.remove("hide")
    } 
}

function showLanding() {
    let api = document.getElementById("api").style.display = "none"
    let examples = document.getElementById("examples").style.display = "none"
    let landing = document.getElementById("landing")

    if (landing.classList.contains("hide")){
        landing.classList.remove("hide")
    } 
}