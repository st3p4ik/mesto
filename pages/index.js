const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');



editBtn.addEventListener('click', function(){
  popup.classList.remove('popup_active');
});

closeBtn.addEventListener('click', function(){
  popup.classList.add('popup_active');
});

