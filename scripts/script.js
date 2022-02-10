const exploreButton = document.querySelector("#explore-btn");

//Scrolls to the element with id main-content, taking into account the size of the Navbar.
const scrollToTarget = (event) => {
  let element = document.getElementById('main-content');
  let headerOffset = document.getElementById('navbar').offsetHeight;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
  event.target.blur();
  
}

//diplay modal image with the clicked image source
document.addEventListener("click", function (e) {
  if(e.target.classList.contains("thumbnail")){
    const src = e.target.getAttribute("src");
    const title = e.target.getAttribute("title");
    document.querySelector(".modal-title").textContent = title
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    myModal.show();
  }
})

//initiate bootstrap popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

exploreButton.addEventListener("click", scrollToTarget);