let arabic=document.getElementById("arabic");
let english=document.getElementById("english");
let title=document.getElementById("title");
let welcome=document.getElementById("welcome-text");
let about=document.getElementById("about");
let aboutext=document.getElementById("about-text");
let contact=document.getElementById("contact");

arabic.onclick=()=>{
setlanguage("arabic");
localStorage.setItem("lang","arabic");
};


english.onclick=()=>{
setlanguage("english");
localStorage.setItem("lang","english");
};

onload=()=>{
    setlanguage(localStorage.getItem("lang"));
}

function setlanguage(getlanguage){
if(getlanguage=="arabic"){
title.innerHTML="مبرمج شيار ";
welcome.innerHTML="مرحبا في صفحه المبرمج شيار ";
about.innerHTML="حولنا";
aboutext.innerHTML="انا استاز برمجيات و مهندس برمجيات";
contact.innerHTML="اتصل بنا";

}else if(getlanguage=="english"){
title.innerHTML="Coder Shiyar";
welcome.innerHTML="Welcome to Website of Coder Shiyar";
about.innerHTML="About US";
aboutext.innerHTML="I am teacher and a software Developer";
contact.innerHTML="Contact us";



}

};