const openModalButton = document.getElementById("form-submit-button");
const modalContainer = document.getElementById("modal-container");
const modalCancelButton = document.getElementById("modal-cancel-button");
const modalOkButton = document.getElementById("modal-ok-button");

const elementsEvent = [openModalButton, modalCancelButton, modalOkButton];


elementsEvent.forEach((element) => {
    element.addEventListener("click", toggleModal);
});

function toggleModal() {
    modalContainer.classList.toggle('hide');
}

// openModalButton.addEventListener("click", toggleModal);