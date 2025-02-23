/** Nav bar code */
const btn = document.getElementById("button");
const link = document.querySelector(".nav-list");

btn.addEventListener("click",function (){
if(link.classList.contains("nav-list")){
    link.classList.remove("nav-list")
    link.classList.add("show-link")
 btn.classList.remove("fa-bars");
 btn.classList.add("fa-xmark");
}
else{
    link.classList.remove("show-link")
    link.classList.add("nav-list")
  btn.classList.remove("fa-xmark");
  btn.classList.add("fa-bars");
}
});



/**
 Review Code
 */
 const collection = [
    {
        id: 1,
        info :'"I am truly grateful for the outstanding service provided by Glitterz_Exlusive. Their expertise, dedication, and attention to detail transformed our space beyond expectations. Entrusting them with our project was the best decision, and the results speak for themselves—simply breathtaking!"',
        name: "Oloniyo Bolaji M",
        img: "./Review.jpg"
    },
    {
        id: 2,
        info :'"Glitterz_Exclusive exceeded our expectations in every way! Their keen eye for detail, creativity, and professionalism brought our vision to life beautifully. The transformation was nothing short of spectacular, and we couldn’t be happier with the results. Highly recommended for anyone looking to elevate their space!"',
        name: "Badmus Oluwapelumi T",
        img: "./Testing 3.jpg"
    },
    {
        id: 3,
        info :'"Absolutely stunning work! Glitterz_Exclusive turned our space into a masterpiece with their impeccable taste and attention to detail. From start to finish, the process was seamless, and the final result left us speechless. Truly a game-changer in interior decor!"',
        name: "Badmus Adeyemi S",
        img: "./Glitterz image 8.jpg"
    },
    {
        id: 4,
        info :'"Working with Glitterz_Exclusive was an absolute delight! Their creativity, professionalism, and dedication to perfection made all the difference. Every corner of our space now reflects elegance and warmth, making it feel like a dream come true. We highly recommend their services!"',
        name: "Abass Omotayo D",
        img: "./Glitterz image 9.jpg"
    },
     
]

const image = document.getElementById("image");
const info = document.getElementById("info");
const nameRv = document.getElementById("name");


const prvBtn = document.getElementById("leftArrow");
const nextBtn = document.getElementById("rightArrow");
const randomBtn = document.getElementById("random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showReview (currentItem)
});
function showReview (currentItem){
    let item= collection[currentItem];
    image.src = item.img;
    info.textContent = item.info;
    nameRv.textContent = item.name;
};
prvBtn.addEventListener("click",function (){
    if(currentItem === 0 ){
        currentItem = collection.length - 1;
        showReview(currentItem);
    }else{
        currentItem--;
        showReview(currentItem);
    }  
});
nextBtn.addEventListener("click",function (){
    if(currentItem === collection.length-1){
        currentItem = 0;
        showReview(currentItem);
    }else{
        currentItem++;
        showReview(currentItem);
    }  
});


/**   Faqs Code */
const btns = document.querySelectorAll(".question-btn");


btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.nextElementSibling;
        question.classList.toggle("answer");
        const show = e.currentTarget;
        if(show.classList.contains("fa-minus")){
            show.classList.remove("fa-minus");
            show.classList.add("fa-plus");
        }
        
        else{
            show.classList.add("fa-minus");
            show.classList.remove("fa-plus");
            
        };
        const myAns = document.querySelectorAll(".ans");
        if(!myAns.classList.contains("answer")){
            myAns.classList.add("answer");
            myAns.classList.remove("ans");
        }
    });
});