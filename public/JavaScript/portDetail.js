let $ = document;
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const prevWorkBtn = $.querySelector(".prevWork");
const nextWorkBtn = $.querySelector(".nextWork");
const worksContainer = $.getElementById("worksContainer");
const pageNumbers = $.getElementById("pageNumbers");
const nav = $.querySelector(".nav");

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

let worksArray = [
  {
    id: 1,
    title: `Print Design`,
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
    title: "Photo graphy",
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
    title: "Photo graphy",
    not: "Strawthings Co.",
    img: "/public/images/Home/Print Design2.png",
  },
  {
    id: 7,
    title: "Article 1",
    not: "Strawthings Co.",
    img: "/public/images/Home/Article_1.png",
  },
  {
    id: 8,
    title: "Worked Place",
    not: "Produced Feature",
    img: "/public/images/Home/worked_place.png",
  },
  {
    id: 9,
    title: "Logo Type",
    not: "Streetyoung",
    img: "/public/images/Home/Logo_type2.png",
  },
  {
    id: 10,
    title: "Supportive Team",
    not: "Plaining care",
    img: "/public/images/Home/Support_team.png",
  },
  {
    id: 11,
    title: "New Imaging",
    not: "Casper Shop",
    img: "/public/images/Home/new_imaging.png",
  },
  {
    id: 12,
    title: "Cream Product",
    not: "Alabama Business",
    img: "/public/images/Home/cream_product.png",
  },
];

let currentPage = 1;

let rowsCount = 3;

function displayWorkList(
  worksContainer,
  allWorksArray,
  rowsCount,
  currentPage
) {
  worksContainer.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let mainWorks = allWorksArray.slice(startIndex, endIndex);

  mainWorks.map(function (work) {
    worksContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="works-box  w-3/4  sm:w-full mx-auto block"><img class="works-box-img bg-cover w-full" src="` +
        work.img +
        `" alt="` +
        work.title +
        `">
  <div class="works-box-describe block lg:flex justify-between items-center px-5  py-4 border border-amber-450 border-t-0">
   <div>
     <h4 class="font-SourceSansBold works-title line-clamp-1 text-[28px]">` +
        work.title +
        `</h4>
     <p class="text-sm text-[#818A91]">` +
        work.not +
        `</p>
   </div>
   <a href="works.html?id=` +
        work.id +
        `" class="text-white rounded-sm bg-amber-450 w-[70px] h-[35px] flex items-center justify-center mt-4 xl:mt-0">View</a>
  </div></div>`
    );
  });
}

displayWorkList(worksContainer, worksArray, rowsCount, currentPage);

prevWorkBtn.addEventListener("click", function () {
  currentPage--;
  if (currentPage < 1) {
    currentPage = 1;
  }
  displayWorkList(worksContainer, worksArray, rowsCount, currentPage);

  console.log(currentPage);
});

nextWorkBtn.addEventListener("click", function () {
  if (currentPage < Math.ceil(worksArray.length / rowsCount)) {
    currentPage++;
  } else {
    currentPage = Math.ceil(worksArray.length / rowsCount);
  }
  displayWorkList(worksContainer, worksArray, rowsCount, currentPage);
});

function setUpPagination(allProducts, rowsCount, pagination) {
  pagination.innerHTML = "";

  let pageCount = Math.ceil(allProducts.length / rowsCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationGenerator(i, pageCount);
    pagination.append(btn);
  }
}

function paginationGenerator(page, newCount) {
  let button = $.createElement("button");
  button.innerHTML = page;

  console.log(rowsCount);

  if (currentPage === page) {
    button.classList.add("active");
  }
  button.addEventListener("click", function () {
    currentPage = page;
  
    displayWorkList(worksContainer, worksArray, rowsCount, currentPage);
  
    let prevPage = $.querySelector("button.active");
    prevPage.classList.remove("active");
  
    button.classList.add("active");
  });

  return button
}



setUpPagination(worksArray, rowsCount, pageNumbers);
