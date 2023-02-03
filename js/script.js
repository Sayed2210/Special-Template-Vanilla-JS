//setting box
document.querySelector(".setting-btn i").addEventListener("click", (e)=>{
    //Make gear rotate
    e.currentTarget.classList.toggle("fa-spin");
    //open the box
    document.querySelector(".setting-box").classList.toggle("open");
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