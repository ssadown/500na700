/*свайпер */
const swiper = new Swiper('.swiper', {
        // Optional parameters
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 1.1,
        loop: true,
        autoplay: true,
        updateOnWindowResize: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
    breakpoints: {
      1024: {
        spaceBetween: 30,
        slidesPerView: 1.1,
      },
      720: {
        slidesPerView: 1,
      }
    }
  });
  const windowWidth = window.screen.width;
  /*аккордеон */
  let accordion = {
    faqFirst: document.querySelector('#first-quest-block'),
    faqSecond: document.querySelector('#second-quest-block'),
    faqThree: document.querySelector('#three-quest-block'),
    checkFirst: 0,
    checkSecond: 0,
    checkThree: 0,
  };
  function accordionFirst () {
    if (accordion.checkFirst == 0 && windowWidth > 768) {
      accordion.faqFirst.style.height = '20vh';
      accordion.checkFirst = accordion.checkFirst + 1;
      accordion.faqFirst.style.borderTop = '1px solid white';
      if (accordion.checkSecond == 1) {
        accordion.faqSecond.style.height = '8vh';
        accordion.checkSecond = accordion.checkSecond - 1;
        accordion.faqSecond.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
      };
      if ( accordion.checkThree == 1) {
        accordion.faqThree.style.height = '8vh';
        accordion.checkThree = accordion.checkThree - 1;
        accordion.faqThree.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
      };
      console.log(accordion.faqFirst);
    } else if (accordion.checkFirst == 1) {
      accordion.faqFirst.style.height = '8vh';
      accordion.checkFirst = accordion.checkFirst - 1;
      accordion.faqFirst.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
      console.log(accordion.faqFirst);
    } else if (accordion.checkFirst == 0 && windowWidth <= 768) {
      accordion.faqFirst.style.height = '28vh';
      accordion.checkFirst = accordion.checkFirst + 1;
      accordion.faqFirst.style.borderTop = '1px solid white';
      if (accordion.checkSecond == 1) {
        accordion.faqSecond.style.height = '8vh';
        accordion.checkSecond = accordion.checkSecond - 1;
        accordion.faqSecond.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
      };
      if ( accordion.checkThree == 1) {
        accordion.faqThree.style.height = '8vh';
        accordion.checkThree = accordion.checkThree - 1;
        accordion.faqThree.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
      };
      console.log(accordion.faqFirst);
    }
  };
      function accordionSecond () {
        if (accordion.checkSecond == 0 && windowWidth > 768) {
          accordion.faqSecond.style.height = '20vh';
          accordion.checkSecond = accordion.checkSecond + 1;
          accordion.faqSecond.style.borderTop = '1px solid white';
          if (accordion.checkFirst == 1) {
            accordion.faqFirst.style.height = '8vh';
            accordion.checkFirst = accordion.checkFirst - 1;
            accordion.faqFirst.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
          };
          if (accordion.checkThree == 1) {
            accordion.faqThree.style.height = '8vh';
            accordion.checkThree = accordion.checkThree - 1;
            accordion.faqThree.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
          };
          console.log(accordion.faqSecond);
        } else if (accordion.checkSecond == 1) {
          accordion.faqSecond.style.height = '8vh';
          accordion.checkSecond = accordion.checkSecond - 1;
          accordion.faqSecond.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
          console.log(accordion.faqSecond);
        } else if (accordion.checkSecond == 0 && windowWidth <= 768) {
          accordion.faqSecond.style.height = '28vh';
          accordion.checkSecond = accordion.checkSecond + 1;
          accordion.faqSecond.style.borderTop = '1px solid white';
          if (accordion.checkFirst == 1) {
            accordion.faqFirst.style.height = '8vh';
            accordion.checkFirst = accordion.checkFirst - 1;
            accordion.faqFirst.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
          };
          if (accordion.checkThree == 1) {
            accordion.faqThree.style.height = '8vh';
            accordion.checkThree = accordion.checkThree - 1;
            accordion.faqThree.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
          };
          console.log(accordion.faqSecond);
        }
      };
        function accordionThree () {
          if (accordion.checkThree == 0 && windowWidth > 768) {
            accordion.faqThree.style.height = 'unset';
            accordion.checkThree = accordion.checkThree + 1;
            accordion.faqThree.style.borderTop = '1px solid white';
            if (accordion.checkFirst == 1) {
              accordion.faqFirst.style.height = '8vh';
              accordion.checkFirst = accordion.checkFirst - 1;
              accordion.faqFirst.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            };
            if (accordion.checkSecond == 1) {
              accordion.faqSecond.style.height = '8vh';
              accordion.checkSecond = accordion.checkSecond - 1;
              accordion.faqSecond.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            };
            console.log(accordion.faqThree);
          } else if (accordion.checkThree == 1) {
            accordion.faqThree.style.height = '8vh';
            accordion.checkThree = accordion.checkThree - 1;
            accordion.faqThree.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            console.log(accordion.faqThree);
          } else if (accordion.checkThree == 0 && windowWidth <= 768) {
            accordion.faqThree.style.height = '28vh';
            accordion.checkThree = accordion.checkThree + 1;
            accordion.faqThree.style.borderTop = '1px solid white';
            if (accordion.checkFirst == 1) {
              accordion.faqFirst.style.height = '8vh';
              accordion.checkFirst = accordion.checkFirst - 1;
              accordion.faqFirst.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            };
            if (accordion.checkSecond == 1) {
              accordion.faqSecond.style.height = '8vh';
              accordion.checkSecond = accordion.checkSecond - 1;
              accordion.faqSecond.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
            };
            console.log(accordion.faqThree);
          };
        };
/*Меню хэдера*/
let menuChoose = {
  First: document.querySelector('#menu_choose'),
  checkFirst: 0,
  text: document.querySelector('.menu_text_choose'),
  firstBurger: function () {
    if (this.checkFirst == 0) {
    this.First.style.transform = 'translate(0, 0)';
    this.checkFirst = 1;
    console.log(this.checkFirst)
    } else if (this.checkFirst == 1) {
      this.First.style.transform = 'translate(0, -50vh)';
      this.checkFirst -=1;
      console.log(this.checkFirst)
    };
    this.text.innerHTML = `
    <a href="#" class="menu_text_choose_url"><p>Подпункт 1</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 1</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 1</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 1</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 1</p></a>
    `
  },
  secondBurger: function () {
    if (this.checkFirst == 0) {
    this.First.style.transform = 'translate(0, 0)';
    this.checkFirst = 1;
    console.log(this.checkFirst)
    } else if (this.checkFirst == 1) {
      this.First.style.transform = 'translate(0, -50vh)';
      this.checkFirst -=1;
      console.log(this.checkFirst)
    };
    this.text.innerHTML = `
    <a href="#" class="menu_text_choose_url"><p>Подпункт 2</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 2</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 2</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 2</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 2</p></a>
    `
  },
  threeBurger: function () {
    if (this.checkFirst == 0) {
    this.First.style.transform = 'translate(0, 0)';
    this.checkFirst = 1;
    console.log(this.checkFirst)
    } else if (this.checkFirst == 1) {
      this.First.style.transform = 'translate(0, -50vh)';
      this.checkFirst -=1;
      console.log(this.checkFirst)
    };
    this.text.innerHTML = `
    <a href="#" class="menu_text_choose_url"><p>Подпункт 3</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 3</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 3</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 3</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 3</p></a>
    `
  },
  fourBurger: function () {
    if (this.checkFirst == 0) {
    this.First.style.transform = 'translate(0, 0)';
    this.checkFirst = 1;
    console.log(this.checkFirst)
    } else if (this.checkFirst == 1) {
      this.First.style.transform = 'translate(0, -50vh)';
      this.checkFirst -=1;
      console.log(this.checkFirst)
    };
    this.text.innerHTML = `
    <a href="#" class="menu_text_choose_url"><p>Подпункт 4</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 4</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 4</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 4</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 4</p></a>
    `
  },
  fiveBurger: function () {
    if (this.checkFirst == 0) {
    this.First.style.transform = 'translate(0, 0)';
    this.checkFirst = 1;
    console.log(this.checkFirst)
    } else if (this.checkFirst == 1) {
      this.First.style.transform = 'translate(0, -50vh)';
      this.checkFirst -=1;
      console.log(this.checkFirst)
    };
    this.text.innerHTML = `
    <a href="#" class="menu_text_choose_url"><p>Подпункт 5</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 5</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 5</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 5</p></a>
    <a href="#" class="menu_text_choose_url"><p>Подпункт 5</p></a>
    `
  },
};
