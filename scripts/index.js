const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "button_disable",
};

const cardsList = document.querySelector(".cards");

//edit profile
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profilePopup = document.querySelector(".popup_type_edit-profile");
const closeBtn = document.querySelector(".popup__close-btn");
const formEditProfile = profilePopup.querySelector(".popup__form");
const nameInput = profilePopup.querySelector(".popup__input_type_name");
const statusInput = profilePopup.querySelector(".popup__input_type_status");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

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

profileEditBtn.addEventListener("click", openProfilePopup);

closeBtn.addEventListener("click", function (e) {
  closePopup(profilePopup);
});

formEditProfile.addEventListener("submit", submitEditProfileForm);

//new card popup

const newCardPopup = document.querySelector(".popup_type_add-card");
const newFormElement = newCardPopup.querySelector(".popup__container");
const newCardCloseBtn = newCardPopup.querySelector(".popup__close-btn");
const placeInput = newCardPopup.querySelector(".popup__input_type_place");
const urlInput = newCardPopup.querySelector(".popup__input_type_url");
const newCardBtn = document.querySelector(".profile__add-btn");
const newCardSubmitButton = newCardPopup.querySelector(".popup__submit-btn");

const fullImagePopup = document.querySelector(".popup_type_full-image");
const fullImage = fullImagePopup.querySelector(".popup__image");
const fullImageStatus = fullImagePopup.querySelector(".popup__image-status");
const fullImageCloseBtn = fullImagePopup.querySelector(".popup__close-btn");

fullImageCloseBtn.addEventListener("click", function () {
  closePopup(fullImagePopup);
});

function openAddCardPopup() {
  openPopup(newCardPopup);
  placeInput.value = "";
  urlInput.value = "";
  disableButton(newCardSubmitButton);
}

function addCardFormSubmitHandler(evt) {
  evt.preventDefault();
  cardsList.prepend(createNewCard(placeInput.value, urlInput.value));
  closePopup(newCardPopup);
}

newCardBtn.addEventListener("click", openAddCardPopup);

newCardCloseBtn.addEventListener("click", function (e) {
  closePopup(newCardPopup);
});

newFormElement.addEventListener("submit", addCardFormSubmitHandler);

//new card

const cardTemplate = document.querySelector(".card_template").content;

function createNewCard(place, url) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  cardImage.src = url;
  newCard.querySelector(".card__title").textContent = place;
  cardImage.alt = place;

  //card like

  const cardLikeBtn = newCard.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-btn_active");
  });

  //card delete

  const cardRemoveBtn = newCard.querySelector(".card__remove-btn");
  cardRemoveBtn.addEventListener("click", function (event) {
    const cardRemove = event.target.closest(".card");
    cardRemove.remove();
  });

  const smallImage = newCard.querySelector(".card__image");
  smallImage.addEventListener("click", function () {
    fullImage.src = url;
    fullImage.alt = "Фотография «" + place + "»";
    fullImageStatus.textContent = place;
    openPopup(fullImagePopup);
  });

  return newCard;
}

initialCards.forEach(function (item) {
  cardsList.append(createNewCard(item.name, item.link));
});

// popup's other functions

const closePopupByClick = (e) => {
  popupElement = e.target;
  if (e.target === e.currentTarget) {
    closePopup(popupElement);
  }
};

const closePopupByEsc = (e) => {
  popupElement = document.querySelector(".popup_active");
  if (e.code === "Escape") {
    closePopup(popupElement);
  }
};

function openPopup(popupElement) {
  popupElement.classList.add("popup_active");
  popupElement.addEventListener("click", closePopupByClick);
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_active");
  popupElement.removeEventListener("click", closePopupByClick);
  document.removeEventListener("keydown", closePopupByEsc);
}
