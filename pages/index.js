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
const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup_type_edit-profile');
const closeBtn = document.querySelector('.popup__close-btn');
const formEditProfile = profilePopup.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const statusInput = profilePopup.querySelector('.popup__input_type_status')
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');


function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopup(profilePopup);
}


editBtn.addEventListener('click', openProfilePopup);

closeBtn.addEventListener('click', function (e) {
  closePopup(profilePopup);
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

//new card popup

const addCardPopup = document.querySelector('.popup_type_add-card');
const addFormElement = addCardPopup.querySelector('.popup__container');
const addCardCloseBtn = addCardPopup.querySelector('.popup__close-btn');
const placeInput = addCardPopup.querySelector('.popup__input_type_place');
const urlInput = addCardPopup.querySelector('.popup__input_type_url');
const addBtn = document.querySelector('.profile__add-btn');

const imagePopup = document.querySelector('.popup_type_full-image');
const fullImage = imagePopup.querySelector('.popup__image');
const fullImageStatus = imagePopup.querySelector('.popup__image-status');
const fullImageCloseBtn = imagePopup.querySelector('.popup__close-btn');

fullImageCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
});


function openAddCardPopup() {
  openPopup(addCardPopup);
  placeInput.value = '';
  urlInput.value = '';
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

const elementTemplate = document.querySelector('.card_template').content;

function createNewCard(Place, Url) {
  const newCard = elementTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = Url;
  newCard.querySelector('.card__title').textContent = Place;
  cardImage.alt = Place;

  //card like

  const cardLikeBtn = newCard.querySelector('.card__like-btn');
  cardLikeBtn.addEventListener('click', function () {
    cardLikeBtn.classList.toggle('card__like-btn_active');
  });

  //card delete

  const cardRemoveBtn = newCard.querySelector('.card__remove-btn');
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
