import "./index.scss";

//記得引入 Collapse 才會有折疊效果
//因為有用到 Dropdown 所以也要引入
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Offcanvas from "bootstrap/js/dist/offcanvas";

function offcanvasHandler() {
    const myOffcanvasBtn = document.getElementById("offcanvasExampleJSBtn");
    const myOffcanvas = document.getElementById("offcanvasExampleJS");

    const myBsOffcanvas = new Offcanvas(myOffcanvas, {
        //可在此物件加入 options
        backdrop: false,
        keyboard: false,
        scroll: true,
    });

    myOffcanvasBtn.addEventListener("click", function () {
        myBsOffcanvas.toggle();
    });
}

offcanvasHandler();
