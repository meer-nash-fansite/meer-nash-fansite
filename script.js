// =========================
// THE WORLD OF MEER NASH
// =========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll(".section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Scroll to top button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.onclick = () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

// Hero zoom effect
window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let scroll=window.pageYOffset;

hero.style.backgroundSize=100+scroll*0.03+"%";

});

// Gallery click animation
document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// Welcome message
console.log("Welcome to The World of Meer Nash ❤️");