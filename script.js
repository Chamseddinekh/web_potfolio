// Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Typed
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'appelle\
       khedhri chamseddine, je suis un développeur\
       junior Back End  PHP/Symfony.","J'ai eu l'occasion de travailler\
       en tant que développeur Front chez clic Informatique, J’ai eu également\
       deux expériences dans des centres de contact après j'ai choisi de reprendre mon carrière de an tant que développeur",
      "J’ai décidé de me lancer a fond depuis prés d'un ans je me forme a temps\
      plein dans l'école d’ingénieur fondée dans Silicon Valley aussi en autodidacte\
      aux langages Back et Front tels que C, Python, PHP, HTML, CSS, JavaScript, ainsi que\
      des les Framework Symfony,React."],
    typeSpeed: 20,
  });

  //counter
  let compteur = 0;
  $(window).scroll(function(){
    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top){
      $('.counter-value').each(function(){
        let $this = $(this),
          countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum : countTo
          },
          {
            duration: 10000,
            easing: 'swing',
            step: function(){
              $this.text(Math.floor(this.countNum));

            },
            complete: function(){
              $this.text(this.countNum);
            }
          });

      });
      compteur = 1;
    }
  });

  AOS.init();