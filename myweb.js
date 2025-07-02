const project=document.querySelector("#projects");
const certificates=document.querySelector("#Certificates");
const skills=document.querySelector("#skills");
const projecthide=document.querySelector(".project");
const skillhide=document.querySelector(".skill");
const pannel3=document.querySelectorAll(".pannel3");
const menubar=document.querySelector(".menubar");
const menubar1=document.querySelector(".menubar1");

const hide2=document.querySelector(".menu");




menubar.addEventListener("click",()=>{
     hide2.classList.remove("hide2");

});

menubar1.addEventListener("click",()=>{
     hide2.classList.add("hide2");
});


project.addEventListener("click",()=>{
    skillhide.classList.add("hide1");
    projecthide.classList.toggle("hide");
});

skills.addEventListener("click",()=>{
    projecthide.classList.add("hide");
    skillhide.classList.toggle("hide1");


});


certificates.addEventListener("click",()=>{
   projecthide.classList.add("hide");
    skillhide.classList.add("hide1");
    
});












