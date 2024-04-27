let $ = document
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const sendButton = $.getElementById('Send-Button')
const nav = $.querySelector(".nav");



enterMenu.addEventListener("click", function () {
    console.log('enter');
    nav.classList.add("fixed");
    nav.classList.remove("hidden");
  });
  
  exitMenu.addEventListener("click", function () {
    nav.classList.remove("fixed");
    nav.classList.add("hidden");
  });
  
  menuMobiles.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      let mainMenuId = event.target.dataset.id;
      setMenuId(mainMenuId);
    });
  });
  function setMenuId(menuId) {
    subMenuMob.forEach(function (subMenu) {
      let subMenuId = subMenu.dataset.id;
      if (subMenuId === menuId) {
        subMenu.classList.toggle("flex");
        subMenu.classList.toggle("hidden");
      }
    });
  }

  sendButton.addEventListener('click',function(){
    location.reload()
  })