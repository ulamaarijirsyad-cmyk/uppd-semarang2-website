const buttons=document.querySelectorAll(".lang-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

const lang=btn.innerText.includes("EN")?"en":"id";

loadLanguage(lang);

buttons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

localStorage.setItem("lang",lang);

});

});

async function loadLanguage(lang){

const response=await fetch(`assets/lang/${lang}.json`);

const data=await response.json();

document.querySelectorAll("[data-lang]").forEach(el=>{

const key=el.dataset.lang;

if(data[key]){

el.innerHTML=data[key];

}

});

}

const saved=localStorage.getItem("lang")||"id";

loadLanguage(saved);
<script src="assets/js/translate.js"></script>