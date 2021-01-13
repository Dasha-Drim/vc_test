let widget = document.querySelector('.widget-alfa-capital');
widget.insertAdjacentHTML('afterbegin', '<div class="main"><h2 class="main__title">Сколько денег вы откладываете в месяц?</h2><p class="main__text">Ответьте и узнаете, сколько копят другие.</p><div class="main__range main-range"><span>0 ₽</span><div class="main-range__holder"><div class="main-range__value"><span class="main-range__value-text"></span><div class="main-range__pointer"></div></div><input type="range" min="0" max="50000" value="0" class="main-range__input"></div><span>50 000 ₽</span></div></div><div class="results"><h2 class="results__title results-title">Вы откладываете <span class="results-title__value"></span> в месяц.<br> За три года вы бы заработали:</h2><div class="results__options results-options"><div class="results-options__option under-mattres"><img src="src/img/money1.svg"><span class="results-options__span under-mattress__result">5545</span><p class="results-options__text">если откладывать под матрас <svg class="under-mattress__btn help" data-modal-open="under-mattress" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FEEBEF"/><path d="M9.24365 12.3975C9.24788 12.0928 9.26058 11.8431 9.28174 11.6484C9.3029 11.4495 9.34733 11.2739 9.41504 11.1216C9.48275 10.965 9.58008 10.8169 9.70703 10.6772C9.83398 10.5334 10.0033 10.3641 10.2148 10.1694C10.3587 10.0213 10.5047 9.86898 10.6528 9.7124C10.8052 9.55583 10.9427 9.3929 11.0654 9.22363C11.1924 9.05013 11.2961 8.86816 11.3765 8.67773C11.4569 8.4873 11.4971 8.2863 11.4971 8.07471C11.4971 7.61344 11.3638 7.26221 11.0972 7.021C10.8306 6.77555 10.4497 6.65283 9.95459 6.65283C9.7557 6.65283 9.56104 6.67822 9.37061 6.729C9.18441 6.77555 9.01725 6.85173 8.86914 6.95752C8.72526 7.05908 8.60889 7.19027 8.52002 7.35107C8.43115 7.50765 8.38672 7.69596 8.38672 7.91602H7.2124C7.21663 7.56055 7.29069 7.24105 7.43457 6.95752C7.57845 6.67399 7.771 6.4349 8.01221 6.24023C8.25765 6.04134 8.54541 5.89111 8.87549 5.78955C9.2098 5.68376 9.5695 5.63086 9.95459 5.63086C10.382 5.63086 10.7629 5.68587 11.0972 5.7959C11.4357 5.90169 11.7214 6.05827 11.9541 6.26562C12.1868 6.47298 12.3646 6.72477 12.4873 7.021C12.61 7.31722 12.6714 7.65576 12.6714 8.03662C12.6714 8.34131 12.6185 8.62907 12.5127 8.8999C12.4069 9.1665 12.2715 9.42041 12.1064 9.66162C11.9414 9.8986 11.7552 10.1208 11.5479 10.3281C11.3447 10.5355 11.1437 10.728 10.9448 10.9058C10.8179 11.0285 10.7184 11.1449 10.6465 11.2549C10.5788 11.3649 10.528 11.4771 10.4941 11.5913C10.4603 11.7056 10.4391 11.8283 10.4307 11.9595C10.4222 12.0864 10.418 12.2324 10.418 12.3975H9.24365ZM9.11035 14.3843C9.11035 14.1812 9.1696 14.0119 9.28809 13.8765C9.41081 13.741 9.59277 13.6733 9.83398 13.6733C10.0752 13.6733 10.2572 13.741 10.3799 13.8765C10.5068 14.0119 10.5703 14.1812 10.5703 14.3843C10.5703 14.5789 10.5068 14.7419 10.3799 14.873C10.2572 15.0042 10.0752 15.0698 9.83398 15.0698C9.59277 15.0698 9.41081 15.0042 9.28809 14.873C9.1696 14.7419 9.11035 14.5789 9.11035 14.3843Z" fill="#FE4D4A"/></svg></p><div class="results-options__modal" data-modal="under-mattress"><p>В этом мало смысла — такие накопления «съедает» инфляция</p></div></div><div class="results-options__option deposit"><img src="src/img/money2.svg"><span class="results-options__span deposit__result">46456456</span><p>если откладывать на депозит <svg class="deposit__btn help" data-modal-open="deposit" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FEEBEF"/><path d="M9.24365 12.3975C9.24788 12.0928 9.26058 11.8431 9.28174 11.6484C9.3029 11.4495 9.34733 11.2739 9.41504 11.1216C9.48275 10.965 9.58008 10.8169 9.70703 10.6772C9.83398 10.5334 10.0033 10.3641 10.2148 10.1694C10.3587 10.0213 10.5047 9.86898 10.6528 9.7124C10.8052 9.55583 10.9427 9.3929 11.0654 9.22363C11.1924 9.05013 11.2961 8.86816 11.3765 8.67773C11.4569 8.4873 11.4971 8.2863 11.4971 8.07471C11.4971 7.61344 11.3638 7.26221 11.0972 7.021C10.8306 6.77555 10.4497 6.65283 9.95459 6.65283C9.7557 6.65283 9.56104 6.67822 9.37061 6.729C9.18441 6.77555 9.01725 6.85173 8.86914 6.95752C8.72526 7.05908 8.60889 7.19027 8.52002 7.35107C8.43115 7.50765 8.38672 7.69596 8.38672 7.91602H7.2124C7.21663 7.56055 7.29069 7.24105 7.43457 6.95752C7.57845 6.67399 7.771 6.4349 8.01221 6.24023C8.25765 6.04134 8.54541 5.89111 8.87549 5.78955C9.2098 5.68376 9.5695 5.63086 9.95459 5.63086C10.382 5.63086 10.7629 5.68587 11.0972 5.7959C11.4357 5.90169 11.7214 6.05827 11.9541 6.26562C12.1868 6.47298 12.3646 6.72477 12.4873 7.021C12.61 7.31722 12.6714 7.65576 12.6714 8.03662C12.6714 8.34131 12.6185 8.62907 12.5127 8.8999C12.4069 9.1665 12.2715 9.42041 12.1064 9.66162C11.9414 9.8986 11.7552 10.1208 11.5479 10.3281C11.3447 10.5355 11.1437 10.728 10.9448 10.9058C10.8179 11.0285 10.7184 11.1449 10.6465 11.2549C10.5788 11.3649 10.528 11.4771 10.4941 11.5913C10.4603 11.7056 10.4391 11.8283 10.4307 11.9595C10.4222 12.0864 10.418 12.2324 10.418 12.3975H9.24365ZM9.11035 14.3843C9.11035 14.1812 9.1696 14.0119 9.28809 13.8765C9.41081 13.741 9.59277 13.6733 9.83398 13.6733C10.0752 13.6733 10.2572 13.741 10.3799 13.8765C10.5068 14.0119 10.5703 14.1812 10.5703 14.3843C10.5703 14.5789 10.5068 14.7419 10.3799 14.873C10.2572 15.0042 10.0752 15.0698 9.83398 15.0698C9.59277 15.0698 9.41081 15.0042 9.28809 14.873C9.1696 14.7419 9.11035 14.5789 9.11035 14.3843Z" fill="#FE4D4A"/></svg></p><div class="results-options__modal" data-modal="deposit"><p>Ставки по вкладам различны в разных банках и зависят от многих факторов, в частности, от ключевой ставки Центрального банка РФ<a target="_blank" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1">¹</a>.</p></div></div><div class="results-options__option alfa-capital"><img src="src/img/money3.svg"><span class="results-options__span alfa-capital__result">546564564</span><p class="results-options__text">если инвестировать в ПИФ «Альфа-Капитала» <svg class="alfa-capital__btn help" data-modal-open="alfa-capital" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FEEBEF"/><path d="M9.24365 12.3975C9.24788 12.0928 9.26058 11.8431 9.28174 11.6484C9.3029 11.4495 9.34733 11.2739 9.41504 11.1216C9.48275 10.965 9.58008 10.8169 9.70703 10.6772C9.83398 10.5334 10.0033 10.3641 10.2148 10.1694C10.3587 10.0213 10.5047 9.86898 10.6528 9.7124C10.8052 9.55583 10.9427 9.3929 11.0654 9.22363C11.1924 9.05013 11.2961 8.86816 11.3765 8.67773C11.4569 8.4873 11.4971 8.2863 11.4971 8.07471C11.4971 7.61344 11.3638 7.26221 11.0972 7.021C10.8306 6.77555 10.4497 6.65283 9.95459 6.65283C9.7557 6.65283 9.56104 6.67822 9.37061 6.729C9.18441 6.77555 9.01725 6.85173 8.86914 6.95752C8.72526 7.05908 8.60889 7.19027 8.52002 7.35107C8.43115 7.50765 8.38672 7.69596 8.38672 7.91602H7.2124C7.21663 7.56055 7.29069 7.24105 7.43457 6.95752C7.57845 6.67399 7.771 6.4349 8.01221 6.24023C8.25765 6.04134 8.54541 5.89111 8.87549 5.78955C9.2098 5.68376 9.5695 5.63086 9.95459 5.63086C10.382 5.63086 10.7629 5.68587 11.0972 5.7959C11.4357 5.90169 11.7214 6.05827 11.9541 6.26562C12.1868 6.47298 12.3646 6.72477 12.4873 7.021C12.61 7.31722 12.6714 7.65576 12.6714 8.03662C12.6714 8.34131 12.6185 8.62907 12.5127 8.8999C12.4069 9.1665 12.2715 9.42041 12.1064 9.66162C11.9414 9.8986 11.7552 10.1208 11.5479 10.3281C11.3447 10.5355 11.1437 10.728 10.9448 10.9058C10.8179 11.0285 10.7184 11.1449 10.6465 11.2549C10.5788 11.3649 10.528 11.4771 10.4941 11.5913C10.4603 11.7056 10.4391 11.8283 10.4307 11.9595C10.4222 12.0864 10.418 12.2324 10.418 12.3975H9.24365ZM9.11035 14.3843C9.11035 14.1812 9.1696 14.0119 9.28809 13.8765C9.41081 13.741 9.59277 13.6733 9.83398 13.6733C10.0752 13.6733 10.2572 13.741 10.3799 13.8765C10.5068 14.0119 10.5703 14.1812 10.5703 14.3843C10.5703 14.5789 10.5068 14.7419 10.3799 14.873C10.2572 15.0042 10.0752 15.0698 9.83398 15.0698C9.59277 15.0698 9.41081 15.0042 9.28809 14.873C9.1696 14.7419 9.11035 14.5789 9.11035 14.3843Z" fill="#FE4D4A"/></svg></p><div class="results-options__modal" data-modal="alfa-capital"><p>Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие. Они решают, когда покупатьи продавать ценные бумаги, чтобы обеспечить инвестиционный доход. Купить или продать паи фонда можно в любой момент<a target="_blank" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2">²</a>.</p></div></div></div></div><div class="extra-data"><a href="#" class="extra-data__link extra-data__link--open">А как в среднем у читателей vc.ru?<img src="src/icons/arrow.svg"></a><div class="extra-data__average average"><div class="average__img"><span class="average__text">123123</span></div><p class="average__p">в среднем откладывают читатели vc.ru</p><div class="average__donuts dounuts"><div class="donuts__holder"><svg width="150px" height="150px" viewBox="0 0 42 42" class="donut more-thousend"><circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#FEEBEF"></circle><circle class="donut-ring" cx="21" cy="21" r="14.91549430918954" fill="transparent" stroke="#ffffff" stroke-width="2"></circle><circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#FE4D4A" stroke-width="4" stroke-dasharray="75 25" stroke-dashoffset="25"></circle></svg><span class="value-more-thousend donuts__span">75%</span><p>читателей откладывают больше 1000 ₽ в месяц</p></div><div class="donuts__holder"><svg width="150px" height="150px" viewBox="0 0 42 42" class="donut more-ten-thousend"><circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#FEEBEF"></circle><circle class="donut-ring" cx="21" cy="21" r="14.91549430918954" fill="transparent" stroke="#ffffff" stroke-width="2"></circle><circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#FE4D4A" stroke-width="4" stroke-dasharray="5 95" stroke-dashoffset="25"></circle></svg><span class="donuts__span value-more-ten-thousend">5%</span><p>читателей откладывают больше 10 000 ₽ в месяц</p></div></div></div><a href="#" class="extra-data__link--close">Свернуть<img src="src/icons/arrow.svg"></a></div><div class="start"><h3 class="start__title">Как начать инвестировать?</h3><a href="https://alfabank.ru/make-money/investments/"  class="start__btn" target="_blank">Узнать</a></div>');

let results = widget.querySelector('.results');
let range = widget.querySelector('.main-range__input');
let x = range.value;

/*DATA FROM BACKEND*/
let averagePostpone = 32540;
let moreThousand = 75;
let moreTenThousand = 45;

/* WIRK WITH DIAGRAM*/
widget.querySelector('.more-thousend .donut-segment').setAttribute('stroke-dasharray', moreThousand + ' ' + (100-moreThousand));
widget.querySelector('.value-more-thousend').textContent = moreThousand + ' %';
widget.querySelector('.more-ten-thousend .donut-segment').setAttribute('stroke-dasharray', moreTenThousand + ' ' + (100-moreTenThousand));
widget.querySelector('.value-more-ten-thousend').textContent = moreTenThousand + ' %';

/* WORK WHIS NUMBERS*/
if (Math.trunc(averagePostpone/1000) == 0) {
  widget.querySelector('.average__text').textContent = (averagePostpone%1000) + ' ₽';
} else {
  if (averagePostpone%1000 == 0) {
    widget.querySelector('.average__text').textContent = Math.trunc(averagePostpone/1000) + ' 000' + ' ₽';
  } else if ((averagePostpone%1000 >= 0) && (averagePostpone%1000 < 10)){
    widget.querySelector('.average__text').textContent = Math.trunc(averagePostpone/1000) + ' 00' + averagePostpone%1000 + ' ₽';
  } else if ((averagePostpone%1000 >= 10) && (averagePostpone%1000 < 100)) {
    widget.querySelector('.average__text').textContent = Math.trunc(averagePostpone/1000) + ' 0' + averagePostpone%1000 + ' ₽';
  } else {
    widget.querySelector('.average__text').textContent = Math.trunc(averagePostpone/1000) + ' ' + (averagePostpone%1000) + ' ₽';
  }
}

/* AVARAGE DATA IMAGE*/
if (averagePostpone <= 10000) {
  widget.querySelector('.average__img').style.backgroundImage = "url('src/icons/money1.svg')"
} else if ((averagePostpone > 10000) && (averagePostpone <= 20000)) {
  widget.querySelector('.average__img').style.backgroundImage = "url('src/icons/money2.svg')"
} else if ((averagePostpone > 20000) && (averagePostpone <= 30000)) {
  widget.querySelector('.average__img').style.backgroundImage = "url('src/icons/money3.svg')"
} else if ((averagePostpone > 30000) && (averagePostpone <= 40000)) {
  widget.querySelector('.average__img').style.backgroundImage = "url('src/icons/money4.svg')"
} else {
  widget.querySelector('.average__img').style.backgroundImage = "url('src/icons/money5.svg')"
}



/*ACTIONS WITH RANGE INPUTE*/

range.addEventListener("mousemove", function() {
  let x = range.value;
  widget.querySelector('.main-range__value-text').textContent = x + ' ₽';
  let color = 'linear-gradient(90deg, #FF9796 4.65%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
  widget.querySelector('.main-range__value').style.left = x/500 - 4 + '%';
  if (x == 0) {
    color = 'linear-gradient(90deg, #FF9796 0%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
    widget.querySelector('.main-range__value').style.left = '-2%';
  } else if (x >= 10000) {
    widget.querySelector('.main-range__value').style.left = x/500 - 6 + '%';
  }
  range.style.background = color;
})

range.addEventListener("mousedown", function() {
  let x = range.value;
  widget.querySelector('.main-range__value-text').textContent = x + ' ₽';
  widget.querySelector('.main-range__value').style.display = "flex"
  let color = 'linear-gradient(90deg, #FF9796 4.65%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
  widget.querySelector('.main-range__value').style.left = x/500 - 4 + '%';
  if (x == 0) {
    color = 'linear-gradient(90deg, #FF9796 0%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
    widget.querySelector('.main-range__value').style.left = '-2%';
  } else if (x >= 10000) {
    widget.querySelector('.main-range__value').style.left = x/500 - 6 + '%';
  }
  range.style.background = color;
})



/*SELECTING VALUE AND CALCULATING RESULT, SHOW RESULT*/

range.addEventListener("change", function() {
  let x = range.value;
  widget.querySelector('.main-range__value-text').textContent = x + ' ₽';
  widget.querySelector('.results-title__value').textContent = x + ' ₽';
  widget.querySelector('.main-range__value').style.display = "flex"
  let color = 'linear-gradient(90deg, #FF9796 4.65%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
  widget.querySelector('.main-range__value').style.left = x/500 - 4 + '%';
  if (x == 0) {
    color = 'linear-gradient(90deg, #FF9796 0%, #FE4D4A ' + x/500 + '%, rgba(226, 226, 226, 1)' + x/500 +'%)';
    widget.querySelector('.main-range__value').style.left = '-2%';
  } else if (x >= 10000) {
    widget.querySelector('.main-range__value').style.left = x/500 - 6 + '%';
  }
  let year = x*12;
  widget.querySelector('.under-mattress__result').textContent = '~ ' + year*3 + ' ₽';
  widget.querySelector('.deposit__result').textContent = '~ ' + Math.floor(year*1.0698)*3 + ' ₽';
  widget.querySelector('.alfa-capital__result').textContent = '~ ' + Math.floor((year*3)*1.7121) + ' ₽';
  range.style.background = color;

  results.classList.add('b-show');
  widget.querySelector('.extra-data').classList.add('b-show');
  widget.querySelector('.start').classList.add('b-show');
})



/*ACTION WITH AVERAGE DATA*/

widget.querySelector('.extra-data__link--open').addEventListener("click", (e) => {
  e.preventDefault();
  widget.querySelector('.extra-data__average').classList.add('b-show');
  widget.querySelector('.extra-data__link--close').classList.add('b-show');
  widget.querySelector('.extra-data__link--open').classList.add('b-close');
})
widget.querySelector('.extra-data__link--close').addEventListener("click", (e) => {
  e.preventDefault();
  widget.querySelector('.extra-data__average').classList.remove('b-show');
  widget.querySelector('.extra-data__link--close').classList.remove('b-show');
  widget.querySelector('.extra-data__link--open').classList.remove('b-close');
})



/*MODALS WINDOWS*/

let modalsOpen = widget.querySelectorAll('[data-modal-open]');

modalsOpen.forEach((e) => {
  let name = e.getAttribute('data-modal-open');

  document.addEventListener('click', (elem) => {
    if (!elem.target.parentNode.classList.contains('help')) {
      results.querySelectorAll('[data-modal]').forEach((el)=> {
        el.classList.remove('opened');
      })
      results.querySelectorAll('circle').forEach((el)=> {
        el.setAttribute('fill', '#FEEBEF');
      })
      results.querySelectorAll('path').forEach((el)=> {
        el.setAttribute('fill', '#FE4D4A');
      })
    } 
  })

  e.addEventListener('click', () => {
    console.log(e.childNodes)
    e.childNodes[0].setAttribute('fill', '#FE4D4A');
    e.childNodes[1].setAttribute('fill', '#ffffff');
    results.querySelector('[data-modal="' + name + '"]').classList.add('opened');
  })
})




