// bg menu
const btnFixed = document.querySelector('.menu-toggle');
const btnFixedList = document.querySelector('.header__nav');

btnFixed.addEventListener('click', () => {
    btnFixedList.classList.toggle('header__nav--open');
});

// smooth scroll
let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}

// anima
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
}
  
let options = { threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element_animation');
  
for (let elm of elements) {
    observer.observe(elm);
}

// modal
const modal = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal-btn-js");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.querySelector(".overlay");

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add("open");
        modal.classList.add("open");
        modal.classList.add("modal-an");
        document.querySelector('body').style.overflow = 'hidden';
    })
})

closeBtn.onclick = function() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
    document.querySelector('body').removeAttribute('style');
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("open");
        overlay.classList.remove("open");
        document.querySelector('body').removeAttribute('style');

    }
}

// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1420: {
            spaceBetween: 10,
            slidesPerView: 5,
        },

        1200: {
            spaceBetween: 10,
            slidesPerView: 4,
        },
        1050: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        780: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        450: {
            spaceBetween: 10,
            slidesPerView: 1,
        },

        0: {
            spaceBetween: 10,
            slidesPerView: 1,
        },
    },
    // autoplay: {
    //     delay: 3000, //затримка прокрутки 1000мс = 1 секунда
    // },
});

// active num (анімація чисел)
function animNum(argClass, speed){
    let number = document.querySelector(argClass),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {

    if(window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval = setInterval(function() {
            number.innerHTML = ++start;
            if(start == end) {
            clearInterval(interval);
            }   
        }, speed);
    }
});
}
animNum('.statistics__num--25', 80);
animNum('.statistics__num--85', 20);
animNum('.statistics__num--125', 12);
