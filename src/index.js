import "./index.scss";
import Tab from "bootstrap/js/dist/tab";

function renderTabs() {
    const triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
    triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new Tab(triggerEl);

        triggerEl.addEventListener("click", function (event) {
            event.preventDefault();
            tabTrigger.show();
        });
    });
}

renderTabs();
