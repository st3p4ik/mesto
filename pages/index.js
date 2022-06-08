let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__close-btn');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let statusInput = popup.querySelector('.popup__input_type_status')
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');


function openPopup() {
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  popup.classList.add('popup_active');
}


function closePopup(){
  popup.classList.remove('popup_active');
}


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopup();
}

editBtn.addEventListener('click', openPopup);

closeBtn.addEventListener('click', closePopup); 

formElement.addEventListener('submit', formSubmitHandler);