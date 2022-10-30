import "./index.scss";
import Modal from "bootstrap/js/dist/modal";

function renderModal() {
    const myModalBtn = document.getElementById("exampleModalJSBtn");
    const myModalClosedBtn = document.getElementById("exampleModalJSBtnClose");
    const myModal = document.getElementById("exampleModalJS");

    const myBsModal = new Modal(myModal);

    myModalBtn.addEventListener("click", function () {
        myBsModal.show();
    });

    myModalClosedBtn.addEventListener("click", function () {
        myBsModal.hide();
    });
}

renderModal();
