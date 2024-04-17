let auto = document.querySelector(".auto-type");
var typed = new Typed(auto, {
    strings: ["Programmer", "Web Devloper", "Web Designer"],
    typeSpeed: 150,
    backSPeed: 150,
    loop: true
});


let nav = document.querySelector(".list");
let navList = document.querySelectorAll("li");
let totalNavList = navList.length;
let allSection = document.querySelectorAll(".section");
let totalSection = allSection.length;
//  console.log(navList)
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element) {

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}


const navToggle = document.querySelector(".nav-toggle");
const aside = document.querySelector(".side-bar");

// navToggle.addEventListener("click", ()=>{
//     asideSectionBtn();
// })

// function asideSectionBtn(){
//     aside.classList.toggle("open");
//     navToggle.classList.toggle("open");

//     for(let i=0;i<totalSection;i++){
//         allSection[i].classList.toggle("open");
//     }
// }

const toggleNav =()=>{
    console.log('click')
    aside.classList.toggle("tgl");
};

navToggle.addEventListener("click",()=>toggleNav());

function removeTgl(){
    aside.classList.add("tgl")
}