let thebutton = document.getElementById("thebutton");

thebutton.addEventListener("click", function(){
    window.location.href = "book.html";
});

<<<<<<< HEAD
=======
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


document.getElementById("educationinput").onchange = function() {
    
    document.getElementById("thebutton").href = 'http://book.html/"+this.value+"/';
    
}
//>>>>>>> e0d44a31dcb031c0400fa78d0e1905057b3d962f
