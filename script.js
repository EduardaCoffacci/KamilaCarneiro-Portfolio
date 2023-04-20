const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + 700;
  target.forEach(function (elemento) {
    if (windowTop > elemento.offsetTop) {
      elemento.classList.add(animationClass);
    } else {
      elemento.classList.remove(animationClass);
    }
  });
}

animeScroll();
if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}
