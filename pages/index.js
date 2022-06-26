const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsList = document.querySelector('.cards');

function openPopup(popup) {
  popup.classList.add('popup_active');
}
function closePopup(popup) {
  popup.classList.remove('popup_active');
}

//edit profile
let editBtn = document.querySelector('.profile__edit-btn');
let profilePopup = document.querySelector('.popup__edit-profile');
let closeBtn = document.querySelector('.popup__close-btn');
let formElement = profilePopup.querySelector('.popup__form');
let nameInput = profilePopup.querySelector('.popup__input_type_name');
let statusInput = profilePopup.querySelector('.popup__input_type_status')
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');


function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopup(profilePopup);
}


editBtn.addEventListener('click', openProfilePopup);

closeBtn.addEventListener('click', function (e) {
  closePopup(profilePopup);
});

formElement.addEventListener('submit', formSubmitHandler);

//new card popup

let addCardPopup = document.querySelector('.popup__add-card');
let addFormElement = addCardPopup.querySelector('.popup__container');
let addCardCloseBtn = addCardPopup.querySelector('.popup__close-btn');
let placeInput = addCardPopup.querySelector('.popup__input_type_place');
let urlInput = addCardPopup.querySelector('.popup__input_type_url');
let addBtn = document.querySelector('.profile__add-btn');

let imagePopup = document.querySelector('.popup__full-image');
let fullImage = imagePopup.querySelector('.popup__image');
let fullImageStatus = imagePopup.querySelector('.popup__image-status');
let fullImageCloseBtn = imagePopup.querySelector('.popup__close-btn');

fullImageCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
});


function openAddCardPopup() {
  openPopup(addCardPopup);
  placeInput.value = '';
  urlInput.value = '';
}

function closeAddCardPopup() {
  addCardPopup.classList.remove('popup_active');
}

function addCardFormSubmitHandler(evt) {
  evt.preventDefault();
  cardsList.prepend(createNewCard(placeInput.value, urlInput.value));
  closePopup(addCardPopup);
}

addBtn.addEventListener('click', openAddCardPopup);

addCardCloseBtn.addEventListener('click', function (e) {
  closePopup(addCardPopup);
});

addFormElement.addEventListener('submit', addCardFormSubmitHandler);

//new card

let elementTemplate = document.querySelector('.card_template').content;

function createNewCard(Place, Url) {
  let newCard = elementTemplate.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__image').src = Url;
  newCard.querySelector('.card__title').textContent = Place;
  newCard.querySelector('.card__image').alt = Place;

  //card like

  let cardLikeBtn = newCard.querySelector('.card__like-btn');
  cardLikeBtn.addEventListener('click', function () {
    cardLikeBtn.classList.toggle('card__like-btn_active');
  });

  //card delete

  let cardRemoveBtn = newCard.querySelector('.card__remove-btn');
  cardRemoveBtn.addEventListener('click', function (event) {
    const parent = event.target.parentElement;
    parent.remove();
  });

  const smallImage = newCard.querySelector('.card__image');
  smallImage.addEventListener('click', function () {
    fullImage.src = Url;
    fullImage.alt = "Фотография «" + Place + "»";
    fullImageStatus.textContent = Place;
    openPopup(imagePopup);
  })

  return newCard;
}

for (let i = 0; i < initialCards.length; i++) {
  cardsList.append(createNewCard(initialCards[i].name, initialCards[i].link));
}
