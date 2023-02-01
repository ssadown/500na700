  const windowWidth2 = window.screen.width;
  console.log (windowWidth2);
  header = document.querySelector('#header'); 
  let menu = {
    menu: document.querySelector('#header_menu'),
    check: 0,
    button: document.querySelector('#button_burger'),
    burger: function () {
      if (this.check == 0) {
        console.log('1');
        this.check += 1;
        this.menu.style.transform = 'translate(20vh,0)';
        this.button.innerHTML = `<img src="images/c.svg">`
        } else if (this.check == 1) {
          console.log('0');
          this.check -= 1;
          this.menu.style.transform = 'translate(120vh,0)';
          this.button.innerHTML = `<img src="images/b.svg">`
        }
    }
  };
const subscribeComment = document.querySelector('#subscribe_comment');
if (windowWidth2 <= 768) {
  subscribeComment.innerHTML = `<p>Отправляем анонсы новых статей, выпусков и трансляций</p>`
}
const newsBlock = document.querySelector('#news_content');
if (windowWidth2 <=768) {
  newsBlock.innerHTML = `<div class="swiper-wrapper">
  <div class="news_block swiper-slide">
  <img src="images/news1.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>
  </div>
</div>
<div class="news_block swiper-slide">
  <img src="images/news2.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>              
  </div>  
</div>
<div class="news_block swiper-slide">
  <img src="images/news3.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>              
  </div>  
</div>
<div class="news_block swiper-slide">
  <img src="images/news4.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>              
  </div>  
</div>
<div class="news_block swiper-slide">
  <img src="images/news5.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>              
  </div>  
</div>
<div class="news_block swiper-slide">
  <img src="images/news6.png" alt="">
  <div class="news_block_text">
      <h4>Заголовок</h4>
      <p>Описание</p>              
  </div>  
</div>
</div>
</div>`

};
const swiper2 = new Swiper('#news_content', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  updateOnWindowResize: true,

});
const nav = document.querySelector('nav');
if (windowWidth2 <= 768) {
  nav.innerHTML = `                
  <button onclick="menuChooseAdaptive.firstBurger()" id="first"><p class="header_menu_text">Пункт 1</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p></button>
  <button onclick="menuChooseAdaptive.secondBurger()" id="second"><p class="header_menu_text">Пункт 2</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p></button>
  <button onclick="menuChooseAdaptive.threeBurger()" id="three"><p class="header_menu_text">Пункт 3</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p></button>
  <button onclick="menuChooseAdaptive.fourBurger()" id="four"><p class="header_menu_text">Пункт 4</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p></button>
  <button onclick="menuChooseAdaptive.fiveBurger()" id="five"><p class="header_menu_text">Пункт 5</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p><p>Подпункт</p></button>`
}
const menuChooseAdaptive = {
  firstCheckMenu: 0,
  secondCheckMenu: 0,
  threeCheckMenu: 0,
  fourCheckMenu: 0,
  fiveCheckMenu: 0,
  firstButton: document.querySelector('#first'),
  secondButton: document.querySelector('#second'),
  threeButton: document.querySelector('#three'),
  fourButton: document.querySelector('#four'),
  fiveButton: document.querySelector('#five'),
  firstBurger: function () {
    if (this.firstCheckMenu == 0) {
    this.firstButton.style.height = '40%';
    this.firstCheckMenu += 1;
    } else if (this.firstCheckMenu == 1) {
      this.firstButton.style.height = '9%';
      this.firstCheckMenu -= 1;
    };
    if (this.secondCheckMenu == 1)  {
      this.secondButton.style.height = '9%';
      this.secondCheckMenu -= 1;
    };
    if (this.threeCheckMenu == 1)  {
      this.threeButton.style.height = '9%';
      this.threeCheckMenu -= 1;
    };
    if (this.fourCheckMenu == 1)  {
      this.fourButton.style.height = '9%';
      this.fourCheckMenu -= 1;
    };
    if (this.fiveCheckMenu == 1)  {
      this.fiveButton.style.height = '9%';
      this.fiveCheckMenu -= 1;
    };
  },
  secondBurger: function () {
    if (this.secondCheckMenu == 0) {
    this.secondButton.style.height = '40%';
    this.secondCheckMenu += 1;
    } else if (this.secondCheckMenu == 1) {
      this.secondButton.style.height = '9%';
      this.secondCheckMenu -= 1;
    };
    if (this.firstCheckMenu == 1)  {
      this.firstButton.style.height = '9%';
      this.firstCheckMenu -= 1;
    };
    if (this.threeCheckMenu == 1)  {
      this.threeButton.style.height = '9%';
      this.threeCheckMenu -= 1;
    };
    if (this.fourCheckMenu == 1)  {
      this.fourButton.style.height = '9%';
      this.fourCheckMenu -= 1;
    };
    if (this.fiveCheckMenu == 1)  {
      this.fiveButton.style.height = '9%';
      this.fiveCheckMenu -= 1;
    };
  },
  threeBurger: function () {
    if (this.threeCheckMenu == 0) {
    this.threeButton.style.height = '40%';
    this.threeCheckMenu += 1;
    } else if (this.threeCheckMenu == 1) {
      this.threeButton.style.height = '9%';
      this.threeCheckMenu -= 1;
    }
    if (this.secondCheckMenu == 1)  {
      this.secondButton.style.height = '9%';
      this.secondCheckMenu -= 1;
    };
    if (this.firstCheckMenu == 1)  {
      this.firstButton.style.height = '9%';
      this.firstCheckMenu -= 1;
    };
    if (this.fourCheckMenu == 1)  {
      this.fourButton.style.height = '9%';
      this.fourCheckMenu -= 1;
    };
    if (this.fiveCheckMenu == 1)  {
      this.fiveButton.style.height = '9%';
      this.fiveCheckMenu -= 1;
    };
  },
  fourBurger: function () {
    if (this.fourCheckMenu == 0) {
    this.fourButton.style.height = '40%';
    this.fourCheckMenu += 1;
    } else if (this.fourCheckMenu == 1) {
      this.fourButton.style.height = '9%';
      this.fourCheckMenu -= 1;
    };
    if (this.secondCheckMenu == 1)  {
      this.secondButton.style.height = '9%';
      this.secondCheckMenu -= 1;
    };
    if (this.threeCheckMenu == 1)  {
      this.threeButton.style.height = '9%';
      this.threeCheckMenu -= 1;
    };
    if (this.firstCheckMenu == 1)  {
      this.firstButton.style.height = '9%';
      this.firstCheckMenu -= 1;
    };
    if (this.fiveCheckMenu == 1)  {
      this.fiveButton.style.height = '9%';
      this.fiveCheckMenu -= 1;
    };
  },  fiveBurger: function () {
    if (this.fiveCheckMenu == 0) {
    this.fiveButton.style.height = '40%';
    this.fiveCheckMenu += 1;
    } else if (this.fiveCheckMenu == 1) {
      this.fiveButton.style.height = '9%';
      this.fiveCheckMenu -= 1;
    };
    if (this.secondCheckMenu == 1)  {
      this.secondButton.style.height = '9%';
      this.secondCheckMenu -= 1;
    };
    if (this.threeCheckMenu == 1)  {
      this.threeButton.style.height = '9%';
      this.threeCheckMenu -= 1;
    };
    if (this.fourCheckMenu == 1)  {
      this.fourButton.style.height = '9%';
      this.fourCheckMenu -= 1;
    };
    if (this.firstCheckMenu == 1)  {
      this.firstButton.style.height = '9%';
      this.firstCheckMenu -= 1;
    };
  },
}