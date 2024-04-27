let $ = document;
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const nav = $.querySelector(".nav");
const makeBg = $.querySelector(".make");
const makeSlider = $.querySelector(".make-slider");
const prevBtn = $.querySelector(".prev");
const nextBtn = $.querySelector(".next");
const worksContainer = $.getElementById("worksContainer");
const sendBtn = $.getElementById('Send-Button')

let worksArray = [
  {
    id: 1,
    title: "Print Design",
    not: "Strawthings Co.",
    img: "/public/images/Home/Photography2.jpg",
  },
  {
    id: 2,
    title: "Branding",
    not: "Teen-Shirt",
    img: "/public/images/Home/Branding_t-shirt.png",
  },
  {
    id: 3,
    title: "Branding",
    not: "Streetyoung",
    img: "/public/images/Home/Branding.png",
  },
  {
    id: 4,
    title: "Photography",
    not: "Freshfruit",
    img: "/public/images/Home/Photography.png",
  },
  {
    id: 5,
    title: "Print Design",
    not: "INKGirl Co.",
    img: "/public/images/Home/Print Design.png",
  },
  {
    id: 6,
    title: "Photography",
    not: "Strawthings Co.",
    img: "/public/images/Home/Print Design2.png",
  },
];

enterMenu.addEventListener("click", function () {
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

let srcImageArray = ["/public/images/Home/mainBg.jpg", "/public/images/Home/mainBg3.png"];

let imageIndex = 0;

function goToPage(index) {
  imageIndex = index;
  makeSlider.setAttribute("src", srcImageArray[imageIndex]);
  updatePagination();
}

function prevImage() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = srcImageArray.length - 1;
  }
  makeSlider.setAttribute("src", srcImageArray[imageIndex]);
  updatePagination();
  changeTheme();
}

function nextImage() {
  imageIndex++;
  if (imageIndex > srcImageArray.length - 1) {
    imageIndex = 0;
  }
  makeSlider.setAttribute("src", srcImageArray[imageIndex]);
  updatePagination();
  changeTheme();
}

const pages = $.querySelectorAll(".page");

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    goToPage(index);
    updatePagination();
  });
});

function updatePagination() {
  pages.forEach((page, index) => {
    if (index === imageIndex) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

window.addEventListener("load", function () {
  updatePagination();
  makeSlider.classList.add("active");
});

function changeTheme() {
  makeSlider.classList.remove("active");

  setTimeout(function () {
    $.getElementById("makeSlider").setAttribute(
      "src",
      srcImageArray[imageIndex]
    );
    makeSlider.classList.add("active");
  }, 500);
}
function startSlider() {
  sliderInterval = setInterval(nextImage, 5000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

prevBtn.addEventListener("click", function () {
  stopSlider();
  prevImage();
  startSlider();
});
nextBtn.addEventListener("click", function () {
  stopSlider();
  nextImage();
  startSlider();
});

startSlider();

let fragment = $.createDocumentFragment();

worksArray.map(function (works) {
  let worksBox = $.createElement("div");
  worksBox.className = "works-box  w-3/4 sm:w-full mx-auto block";
  worksBox.innerHTML =
    `<img
 class="works-box-img bg-cover w-full"
 src="` +
    works.img +
    `"
 alt="` +
    works.title +
    `"
/>
<div class="works-box-describe block lg:flex justify-between items-center px-5  py-4 border border-amber-450 border-t-0">
 <div>
   <h4 class="font-SourceSansBold text-[28px]">` +
    works.title +
    `</h4>
   <p class="text-sm text-[#818A91]">` +
    works.not +
    `</p>
 </div>
 <a href="works.html?id=` +
    works.id +
    `"  class="text-white rounded-sm bg-amber-450 w-[70px] h-[35px] flex items-center justify-center mt-4 lg:mt-0">View</a>
</div>`;
  fragment.appendChild(worksBox);
});
worksContainer.append(fragment);

function loadPageBtn(){
   location.reload()
}



sendBtn.addEventListener('click',loadPageBtn)
