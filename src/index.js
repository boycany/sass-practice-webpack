import "./index.scss";
import "bootstrap/js/dist/collapse"; //引用 手風琴 摺疊效果
// import "bootstrap/js/dist/alert";
import Alert from "bootstrap/js/dist/alert"; //引用 alert 效果的 close功能

// function alertHandler() {
//   //custom alert
//   const alertCustomDiv = document.getElementById("alertCustom");
//   document.getElementById("alertCustomBtn").addEventListener("click", () => {
//     const alertCustom = new Alert(alertCustomDiv); //用這樣的方式僅引入 Alert 的部分，效能較好
//     alertCustom.close(); // close() 來自 bootstrap.Alert
//   });

//   //當關閉 alert 之後還想要有其他操作的話
//   alertCustomDiv.addEventListener("closed.bs.alert", function () {
//     console.log("closed....");
//   });

//   //
//   const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
//   const alertTrigger = document.getElementById("liveAlertBtn");

//   function alert(message, type) {
//     const wrapper = document.createElement("div");
//     wrapper.innerHTML =
//       '<div class="alert alert-' +
//       type +
//       ' alert-dismissible" role="alert">' +
//       message +
//       ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

//     alertPlaceholder.append(wrapper);
//   }

//   if (alertTrigger) {
//     alertTrigger.addEventListener("click", function () {
//       alert(
//         `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity me-2" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
// </svg>Nice, you trigged this <a href="#" class="alert-link"> alert message!</a>`,
//         "danger"
//       );
//     });
//   }
// }

// alertHandler();

// var alertList = document.querySelectorAll(".alert");
// var alerts = [].slice.call(alertList).map(function (element) {
//   return new bootstrap.Alert(element);
// });

// var alertNode = document.querySelector(".alert");
// var alert = bootstrap.Alert.getInstance(alertNode);
// alert.close();

// var myAlert = document.getElementById("myAlert");
// myAlert.addEventListener("closed.bs.alert", function () {
//   // do something, for instance, explicitly move focus to the most appropriate element,
//   // so it doesn't get lost/reset to the start of the page
//   // document.getElementById('...').focus()
// });
