let $ = document;
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const sendButton = $.getElementById("Send-Button");
const nav = $.querySelector(".nav");
const articleContainer = $.getElementById("Aricle-Container");

let articleListArray = [
  { id:1 , title:'Article 1', img:'/public/images/Article_List/Article1.png' },
  { id:2 , title:'Article 2', img:'/public/images/Article_List/Article2.png' },
  { id:3 , title:'Article 3', img:'/public/images/Article_List/Article3.png' },
  { id:4 , title:'Article 4', img:'/public/images/Article_List/Article4.png' },
  { id:5 , title:'Article 5', img:'/public/images/Article_List/Article5.png' },
  { id:6 , title:'Article 6', img:'/public/images/Article_List/Article6.png' },
  { id:7 , title:'Article 7', img:'/public/images/Article_List/Article7.png' },
  { id:8 , title:'Article 8', img:'/public/images/Article_List/Article8.png' },
  { id:9 , title:'Article 9', img:'/public/images/Article_List/Article9.png' },
];


articleListArray.map(function(article){
  articleContainer.insertAdjacentHTML('beforeend',` <div class="max-w-[370px]  px-5 sm:px-0 mx-auto  ">
  <div class="flex">
    <img
      src="`+article.img+`"
      alt="`+article.title+`"
    />
    <div class="p-8 border-amber-450/35 border-2 border-l-0">
      <span
        class="block rounded-full text-center flex-center text-amber-450 text-[10px] w-[66px] h-[27px] border border-amber-450"
        >Branding</span
      >
      <h5 class="my-5 font-SourceSansBold text-xl">`+article.title+`</h5>
      <p class=" mb-5 text-sm line-clamp-6 text-#818A91">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eos, iusto praesentium? Sunt quibusdam et soluta corporis
        explicabo provident quia! Doloribus cumque laborum voluptas
        a? Maxime?
      </p>
      <a
        href="#"
        class="w-[72px] h-[40px] text-white rounded-sm mt-5 bg-amber-450 flex-center"
        >VIEW</a
      >
    </div>
  </div>
</div>`)
})

enterMenu.addEventListener("click", function () {
  console.log("enter");
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
