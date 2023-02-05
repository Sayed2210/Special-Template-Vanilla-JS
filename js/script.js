//local stroage
let mainColor = localStorage.getItem("color-op");
//check that main color is not empty
if(mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
}
//setting box
document.querySelector(".setting-btn i").addEventListener("click", (e)=>{
    //Make gear rotate
    e.currentTarget.classList.toggle("fa-spin");
    //open the box
    document.querySelector(".setting-box").classList.toggle("open");
})
//change color
let changColor = Array.from(document.querySelectorAll('.color-list li'));
//loop to change color
changColor.forEach((li) => {
    li.addEventListener("click", (e)=>{
        //set property 
        document.documentElement.style.setProperty('--main-color',e.currentTarget.dataset.color);
        //add color to local stroage
        localStorage.setItem("color-op" , e.currentTarget.dataset.color);
        //add class on clicked color
        changColor.forEach((el) => {
            el.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})
//selesct Landing Page section
let landingPage = document.querySelector('.landing-page');
//images array
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
// setinterval function to change background to change image every 10s
setInterval(()=>{
    let randowmNum = Math.trunc(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url(../img/'+imgArray[randowmNum]+')';
},10000)