document.addEventListener("DOMContentLoaded", function () {
    initApp();
  });
  
  function initApp() {
    headerMenu();
  }
  
  /*=============================================
  =             header menu           =
  =============================================*/
  function headerMenu() {
    const mobile_icon = document.querySelector('#mobile-icon');
    const mobile_menu = document.querySelector('#mobile-menu');
    const hamburger_icon = document.querySelector("#bars");
  
    
    function openCloseMenu() {
      mobile_menu.classList.toggle('block');
      mobile_menu.classList.toggle('active');
      hamburger_icon.classList.toggle('fa-xmark');
      document.body.classList.toggle("overflow-hidden");
    }
  
    document.querySelectorAll("#mobile-menu").forEach((item) => {
      item.addEventListener("click", openCloseMenu);
    });
    mobile_icon.addEventListener('click', openCloseMenu);
  
  }

