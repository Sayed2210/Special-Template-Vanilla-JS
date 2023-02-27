//local stroage for  color page
let mainColor = localStorage.getItem("color-op");
//check that main color is not empty
if(mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    //add class active from laocal storage
    document.querySelectorAll('.color-list li').forEach((e)=>{
        e.classList.remove("active");
        if(e.dataset.color === mainColor){
            e.classList.add("active")
        }
    })
}
//setting box
// global Variables
let bgoption = true;
let bgInterval;
//local storage for background image
let bgImageLocal = localStorage.getItem("bg-op");
if(bgImageLocal !== null) {
    document.querySelectorAll('.option .random-bg span').forEach((span)=> {
        span.classList.remove("active");
    })
    if(bgImageLocal === 'true'){
        bgoption = true;
        document.querySelector(".yes").classList.add("active");
    }else {
        bgoption = false;
        document.querySelector(".no").classList.add("active");
    }
}

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
        //add active class  on clicked color
        handleActive(e);
    })
})
//change background
let changBg = Array.from(document.querySelectorAll('.option .random-bg  span'));
//loop to change background
changBg.forEach((span) => {
    span.addEventListener("click", (e)=>{
        handleActive(e);
        if(e.currentTarget.dataset.background === 'yes') {
            bgoption = true;
            randombg();
            localStorage.setItem("bg-op", true);
        }else {
            bgoption = false;
            clearInterval(bgInterval);
            localStorage.setItem("bg-op", false);
        }   
    })
})
//selesct Landing Page section
let landingPage = document.querySelector('.landing-page');
//images array
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
// setinterval function to change background to change image every 10s
function randombg() {
    if(bgoption === true) {
        bgInterval = setInterval(()=>{
            let randowmNum = Math.trunc(Math.random() * imgArray.length);
            landingPage.style.backgroundImage = 'url(../img/'+imgArray[randowmNum]+')';
        },10000)
    }
}
randombg();
// select Skills Section 
let skills = document.querySelector(".skills");
// Create Funtion to make Animation
window.onscroll = function() {
    let skillsOffsetTop = skills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = skills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window ScrollTop
  let windowScroll = this.scrollY;
    if(windowScroll >= (skillsOffsetTop+skillsOuterHeight-windowHeight)) {
        let skill = Array.from(document.querySelectorAll(".progress > span"));
        skill.forEach((e) => {
            e.style.width = e.dataset.progress;
        })
    }
}
//create pop up to images
let ourGallary = Array.from(document.querySelectorAll(".imgs-box img"));
//loop on images 
ourGallary.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        //create overlay
        let ovarlay = document.createElement("div");
        ovarlay.className = "popup-overlay";
        document.body.appendChild(ovarlay);
        //create popup box
        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';
        //create img popup
        let popupImg = document.createElement('img');
        //creat heading for img 
        if(img.alt !== null){
            let imgHeader = document.createElement("h4");
            imgHeader.innerHTML = img.alt;
            popupBox.appendChild(imgHeader);
        }
        popupImg.src = img.src;
        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox);
        //create button
        let closebtn = document.createElement("span");
        closebtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        closebtn.className = 'close-btn';
        popupBox.appendChild(closebtn);
        // Close Popup
        closebtn.addEventListener("click", (e)=> { 
            // Remove The Current Popup
            e.currentTarget.parentNode.remove();  
            // Remove Overlay
            document.querySelector(".popup-overlay").remove();      
        });
    });
});
//select bullets
let bullets = Array.from(document.querySelectorAll(".bullet"));
//loop on all bulets
bullets.forEach(bullet => {
    //add function to bullets
    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.currentTarget.dataset.section).scrollIntoView(
            {
                behavier: "smooth"
            }
        )
    })
})
//show hide bulltes
let buletsSpan = document.querySelectorAll(".showhide-bullets span");
let bulletsContainer =document.querySelector(".nav-bullets");
let buletsLocalStorage = localStorage.getItem("bulltes-opt");
if(buletsLocalStorage !== null) {
    buletsSpan.forEach((e)=>{
        e.classList.remove('active');
    })
    if(buletsLocalStorage === 'block'){
        document.querySelector(".showhide-bullets span.yes").classList.add('active');
        bulletsContainer.style.display = 'block';
    }else {
        bulletsContainer.style.display = 'none';
        document.querySelector(".showhide-bullets span.no").classList.add('active');
    }
}
//create function to span
buletsSpan.forEach(e => {
    e.addEventListener("click", (el) => {
        if (e.dataset.show !== 'yes') {
            bulletsContainer.style.display ='none';
            localStorage.setItem("bulltes-opt", 'none');
        } else {
            bulletsContainer.style.display ='block';
            localStorage.setItem("bulltes-opt", 'block');
        } 
        handleActive(el);
    });
});
//Create Handle active state function 
function handleActive (element) {
    element.currentTarget.parentNode.querySelectorAll(".active").forEach((el) => {
        el.classList.remove("active");
    })
    element.currentTarget.classList.add("active");
}
//reset button
document.querySelector(".reset").addEventListener(('click'),()=>{
    localStorage.clear();
    window.location.reload();
}) 