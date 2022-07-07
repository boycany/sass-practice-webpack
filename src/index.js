import "./index.scss";
import "bootstrap/js/dist/collapse"; //引用 手風琴 摺疊效果
import Button from "bootstrap/js/dist/button";

function buttonHandler() {
  const button = document.getElementById("myButton");
  const bsButton = new Button(button);
  setTimeout(() => {
    bsButton.toggle();
  }, 2000);
}

buttonHandler();
