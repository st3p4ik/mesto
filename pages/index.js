let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__close-btn');
let formElement = popup.querySelector('popup__form');
let nameInput = popup.querySelector('popup_input_type_name');
let statusInput = popup.querySelector('popup_input_type_status')
let profileName = document.querySelector('profile__name');
let profileStatus = document.querySelector('profile__status');


function openPopup() {
  popup.classList.add('popup_active');
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}


function closePopup(){
  popup.classList.remove('popup_active');
}


function formSubmitHandler(evt) {
  evt.preventDefault();
  let name = nameInput.value;
  profileName.textContent = name;
  let status = statusInput.value;
  profileStatus.textContent = status;
  closePopup();
}

editBtn.addEventListener('click', openPopup);

closeBtn.addEventListener('click', closePopup); 

formElement.addEventListener('submit', formSubmitHandler);