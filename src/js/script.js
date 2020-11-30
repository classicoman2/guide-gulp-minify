
import {missatge} from './modules/module.js';


window.onload = function () {
  document.getElementsByTagName("main")[0].addEventListener("click", () => {
    window.alert( missatge );
  });
};
