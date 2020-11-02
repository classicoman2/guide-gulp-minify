window.onload = function () {
  console.log("Welcome to this dummy application");

  document.getElementsByTagName("main")[0].addEventListener("click", () => {
    window.alert("This is a dummy message");
  });
};
