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

closeBtn.addEventListener('click', function (e){
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
let cardsList = document.querySelector('.cards');

function openAddCardPopup(){
  openPopup(addCardPopup);
  placeInput.value = '';
  urlInput.value = '';
}

function closeAddCardPopup(){
  addCardPopup.classList.remove('popup_active');
}

function addCardFormSubmitHandler(evt) {
  evt.preventDefault();
  cardsList.prepend(createCard(placeInput.value, urlInput.value));
  closePopup(addCardPopup);
}

addBtn.addEventListener('click', openAddCardPopup);

addCardCloseBtn.addEventListener('click', function(e) {
closePopup(addCardPopup);
});

addFormElement.addEventListener('submit', addFormElementSubmitHandler);

