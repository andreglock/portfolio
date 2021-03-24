let about = document.getElementById("about-btn")
let skills = document.getElementById("skills-btn")
let work = document.getElementById("work-btn")
let social = document.getElementById("social-btn")
let andre = document.getElementById("andre")

andre.addEventListener("click", andreclass)
function andreclass(){
    about.classList.remove("active")
    skills.classList.remove("active")
    work.classList.remove("active")
    social.classList.remove("active")
}

about.addEventListener("click", activeclass)
function activeclass(){
    about.classList.add("active")
    skills.classList.remove("active")
    work.classList.remove("active")
    social.classList.remove("active")
/*     about.style.borderBottom = "red 2px solid"
    skills.style.borderBottom = "none" */
}

skills.addEventListener("click", skillclass)
function skillclass(){
    skills.classList.add("active")
    about.classList.remove("active")
    work.classList.remove("active")
    social.classList.remove("active")
/*     skills.style.borderBottom = "red 2px solid"
    about.style.borderBottom = "none" */
}

work.addEventListener("click", workclass)
function workclass(){
    skills.classList.remove("active")
    about.classList.remove("active")
    work.classList.add("active")
    social.classList.remove("active")
    skills.style.borderBottom = "none"
    about.style.borderBottom = "none"
}

social.addEventListener("click", socialclass)
function socialclass(){
    skills.classList.remove("active")
    about.classList.remove("active")
    work.classList.remove("active")
    social.classList.add("active")
    skills.style.borderBottom = "none"
    about.style.borderBottom = "none"
}
