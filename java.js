const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


// scrool do banner //
const images = [
  './image/capanovvvva.png',
  './image/1.png',
  './image/2.png',
  
];

const mainHome = document.querySelector('.main-home');
let currentIndex = 0;

setInterval(() => {
  mainHome.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}, 5000);

// modal //
const modalLinks = document.querySelectorAll('img[data-modal]');

modalLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = link.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    const imgSrc = link.src;
    modal.querySelector('.modal-img').src = imgSrc;
    modal.style.display = 'block';
  });
});

// Adicione um evento para fechar o modal
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      modal.style.display = 'none';
    });
  }
});


const modal = document.getElementById('myModal');
const modalImg = modal.querySelector('.modal-img');
const prevBtn = modal.querySelector('.prev-btn');
const nextBtn = modal.querySelector('.next-btn');
const cartItems = document.querySelectorAll('.cart');


const imagesModal = Array.from(cartItems).map(item => item.querySelector('img').src);


let ctIndex = 0;


function showImage() {
  modalImg.src = imagesModal[ctIndex];
}


function nextImage() {
  ctIndex = (ctIndex + 1) % imagesModal.length;
  showImage();
}


function prevImage() {
  ctIndex = (ctIndex - 1 + imagesModal.length) % imagesModal.length;
  showImage();
}


prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);


cartItems.forEach(item => {
  item.addEventListener('click', () => {
    ctIndex = Array.from(cartItems).indexOf(item);
    showImage();
    modal.style.display = 'block';
  });
});


window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});