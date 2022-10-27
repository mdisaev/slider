console.log("Launching script");
const mainClass = document.querySelector(".main-class");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsAnchor = document.querySelector(".details-anc");
const detailsFrame = document.querySelector(".details-frame");
const detailsContainer = document.querySelector(".details-container");
const detailsMusic = document.querySelector(".thumbnails-music");
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
   detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
   detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
   detailsAnchor.setAttribute("details-url", anchor.getAttribute('data-details-url'));
   pauseAudio(1);
   detailsMusic.setAttribute('src', anchor.getAttribute('data-details-music'));
}

function showDetails() {
   mainClass.classList.remove(HIDDEN);
   detailsContainer.classList.add(IS_POINT);
   setTimeout(function() {
      detailsContainer.classList.remove(IS_POINT);
   }, 1);

   playAudio();
   pauseAudio(10000);
}

function hideDetails() {
   mainClass.classList.add(HIDDEN);
   pauseAudio(1);

}

function playAudio() {
   setTimeout(function () {
      detailsMusic.play();
   },1);
}

function pauseAudio(msecs) {
   setTimeout(function() {
      detailsMusic.pause();
   }, msecs); 
}
 
detailsFrame.addEventListener("click", function () {
   window.open(detailsAnchor.getAttribute('details-url'))
})

for (let i = 0; i < anchors.length; i++) {
   anchors[i].addEventListener("click", function () {
      console.log("event - click on ", anchors[i]);
      setDetails(anchors[i]);
      showDetails();
   
   })
}

// function startMusic(anchor) {
//    detailsMusic.play('src', anchor.getAttribute('data-details-music'));
//    setTimeout(function() {
//       detailsMusic.pause();
//    },5000)
// }




//  function printSomething(){
//          console.log("anchor's amount is ", anchors.length);
//          console.log("a's amount is ", document.querySelectorAll('a').length);
//          console.log("ul's amount is ", document.querySelectorAll('ul').length);
//          console.log("li's amount is ", document.querySelectorAll('li').length);} 


//    window.onload = pageLoadedHandler;
//    function pageLoadedHandler() { 
//    alert("I'm alive!");
// }
