
import {missatge} from './modules/module.js';


window.onload = function () {
  console.log("Welcome to this dummy application");

  document.getElementsByTagName("main")[0].addEventListener("click", () => {
    window.alert( missatge );
  });
};
