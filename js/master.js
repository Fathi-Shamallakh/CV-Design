// Check If There's Local Storage Color Optipn

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color-option"));

  // document.documentElement.style.setProperty('--main--color',localStorage.getItem("color-option"));
  document.documentElement.style.setProperty('--main--color', mainColors);

  // Remove Active Class From All Colors List Item

  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storagr Item 

    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");
    }
  });




}

// Random Background Option

let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInteral;

// Check If There's Local Storage Random Background Item

let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty

if (backgroundLocalItem !== null) {

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

  } else {

    backgroundOption = false;

  }

  // Remove Active Class From All Spans

  document.querySelectorAll('.random-backgrounds span').forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add('active');

  } else {

    document.querySelector(".random-backgrounds .no").classList.add('active');

  }

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings i").onclick = function () {
  // Toggle Class Fa-spin For Rotation on self
  this.classList.toggle("fa-spin");

  // Toggle Class Open ON Main Settings Box 
  document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
  // Click on Every List Items
  li.addEventListener("click", (e) => {


    // Set Color On Root
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

    // Set Color On Local Storage

    localStorage.setItem("color-option", e.target.dataset.color);

    handleActive(e);

  });
});


// Switch Random Background Opton

const randomBacksEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBacksEl.forEach(span => {
  // Click on Every Span
  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;
      randomizeImgs();

      localStorage.setItem("background_option", true);

    } else {

      backgroundOption = false;

      clearInterval(backgroundInteral);

      localStorage.setItem("background_option", false);

    }

  });
});

// Select landing page Element

let landingPage = document.querySelector(".landing-page");

// Get Array Of images
let imgsArray = ["1.png", "2.png", "3.png"];



// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {
    backgroundInteral = setInterval(() => {

      // Get Random Number 
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url 
      landingPage.style.backgroundImage = 'Url("image/' + imgsArray[randomNumber] + '")';

    }, 5000);
  }
}

randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills offset Top

  let skillsoffsetTop = ourSkills.offsetTop;

  // Skills Outer Height

  let skillsOuterHeight = ourSkills.offsetHeight;

  //Window Height

  let windowHeight = this.innerHeight;

  // window ScrollTop

  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >= (skillsoffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });

  }
  // this.console.log(windowHeight);
  // this.console.log(skillsOuterHeight);
  // this.console.log(skillsoffsetTop);



  // Create Popup With The Image
  let ourGallery = document.querySelectorAll(".gallery img");

  ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

      // Create Overlay Element

      let overlay = document.createElement("div");

      // Add Class overlay 

      overlay.className = 'popup-overlay';

      // Append Overlay To Body

      document.body.appendChild(overlay);

      // Create The Popup Boxs

      let popupBox = document.createElement("div");

      // Add Class To The Popup Box

      popupBox.className = 'popup-box';

      // Create The Image


      if (img.alt !== null) {

        // Create Heading

        let imgHeading = document.createElement("h3");

        // Create Text For Heading

        let imgText = document.createTextNode(img.alt);

        // Append The Text The Heading

        imgHeading.appendChild(imgText);

        // Append The Eeading To Popup Box

        popupBox.appendChild(imgHeading);

      }


      let popupImage = document.createElement("img");

      // Set Image Source

      popupImage.src = img.src;

      // Add Imgae Popup Box 

      popupBox.appendChild(popupImage);

      // Append The Popup Box To Body

      document.body.appendChild(popupBox);

      // Create The Close span

      let closeButton = document.createElement("span");

      // Create The Close Button Text

      let closeButtonText = document.createTextNode("X");

      // Append Text Cloce Button

      closeButton.appendChild(closeButtonText);

      // Add Class To Cloce Button

      closeButton.className = 'close-button';

      // Add Cloce Button To The Popup Box

      popupBox.appendChild(closeButton);

    });

  });

};

// Close Popup 

document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay

    document.querySelector(".popup-overlay").remove();
  }

});

// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links

const allLinks = document.querySelectorAll(".links a");


function scrollToSomewhere(element) {
  element.forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handel Active State

function handleActive(ev) {
  // Remove Active Class From All Childrens

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });

  // Add Active Class On Self
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocaliItem = localStorage.getItem("bullets_option");

if(bulletLocaliItem !== null){
  
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  });

  if(bulletLocaliItem === 'block'){

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");
    
  }else{
    
    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active")

  }
}

bulletsSpan.forEach(span =>{

  span.addEventListener("click", (e) => {

    if(span.dataset.display === 'show'){
      bulletsContainer.style.display = 'block';
      
      localStorage.setItem("bullets_option", 'block');
    }else{
      bulletsContainer.style.display = 'none';
    
      localStorage.setItem("bullets_option", 'none');
    }

    handleActive(e);

  });
});

// Reset Button

document.querySelector(".reset_options").onclick = function(){

  //localStorage.clear(); // هادا لو بدك تعمل لجميع العناصر 
  localStorage.removeItem("color-option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option"); // هدا لو بدك تحذف بس الي داخل classs


  // Reload Window
  window.location.reload(); // بتعمل اعادة تحميل للموقع
};

// Toggel Muen

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){
  
  // Stop Propagation
  e.stopPropagation();


  // Toggle Class "mwnu-active" On Button
  this.classList.toggle("menu-active");
  //  Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

  // Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {
  
  if(e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu IS Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "mwnu-active" On Button
      toggleBtn.classList.toggle("menu-active");
      //  Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }
});
  // Stop Propagation On Menu
tLinks.onclick = function(e){
  e.stopPropagation();
};
