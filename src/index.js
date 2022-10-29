import "./index.scss";
import Dropdown from "bootstrap/js/dist/dropdown";

//須 npm i -D @popperjs/core
function renderDropdown() {
    const myDropdownBtn = document.getElementById("dropdownBtn");
    const bsDropdown = new Dropdown(myDropdownBtn, {
        autoClose: true,
    });

    myDropdownBtn.addEventListener("click", function () {
        bsDropdown.toggle();
    });
}

renderDropdown();
