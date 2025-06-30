const project=document.querySelector("#projects");
const certificates=document.querySelector("#Certificates");
const skills=document.querySelector("#skills");
const projecthide=document.querySelector(".project");
const pannel3=document.querySelectorAll(".pannel3");


project.addEventListener("click",()=>{
    console.log("project was clicked");
    projecthide.classList.toggle("hide");
});

skills.addEventListener("click",()=>{
    console.log("skill was clicked");
    projecthide.classList.add("hide");

});


certificates.addEventListener("click",()=>{
    console.log("certificates was clicked");
    projecthide.classList.add("hide");
    
});









