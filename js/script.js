var pageHeader = document.querySelector('.page-header__wrapper');
var navigationToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header__wrapper--menu-nojs');

navigationToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header__wrapper--menu-closed')) {
    pageHeader.classList.remove('page-header__wrapper--menu-closed');
    pageHeader.classList.add('page-header__wrapper--menu-opened');
  } else {
    pageHeader.classList.add('page-header__wrapper--menu-closed');
    pageHeader.classList.remove('page-header__wrapper--menu-opened');
  }
});

var modalCart = document.querySelector('.modal-cart');

if (modalCart) {
  var promoOrderButton = document.querySelector('.promo__order');
  var overlay = modalCart.querySelector('.modal-cart__overlay');
  var catalogItem = document.querySelectorAll('.catalog-item');

  if (promoOrderButton) {
    promoOrderButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalCart.classList.add('modal-cart--open');
    });
  }

  for (var i = 0; i < catalogItem.length; i++) {
    var addToCart = catalogItem[i].querySelector('.catalog-item__button');

    addToCart.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalCart.classList.add('modal-cart--open');
    });
  }

  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalCart.classList.remove('modal-cart--open');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalCart.classList.contains('modal-cart--open')) {
        modalCart.classList.remove('modal-cart--open');
      }
    }
  });
}

var contacts = document.querySelector('.contacts');

if (contacts) {
  var mapImage = document.querySelector('.contacts__map-wrapper');

  ymaps.ready(init);
  function init() {
    mapImage.classList.add('contacts__map-wrapper--hide');

    var myMap = new ymaps.Map('yandexmap', {
      center: [59.938900, 30.323055],
      zoom: 15
    }),

    myPlacemark = new ymaps.Placemark([59.938900, 30.323055], {
      hintContent: 'Интернет магазин «Мишка»'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/icon-map-pin.svg',
        iconImageSize: [66, 101],
        iconImageOffset: [-35, -85]
      })

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  };
}
