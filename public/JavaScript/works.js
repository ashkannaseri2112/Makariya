let worksArray = [
  {
    id: 1,
    title: "Print Design",
    not: "Strawthings Co.",
    img: "/public/images/Home/Photography2.jpg",
    price:68
  },
  {
    id: 2,
    title: "Branding",
    not: "Teen-Shirt",
    img: "/public/images/Home/Branding_t-shirt.png",
    price: 13
  },
  {
    id: 3,
    title: "Branding",
    not: "Streetyoung",
    img: "/public/images/Home/Branding.png",
    price: 59
  },
  {
    id: 4,
    title: "Photography",
    not: "Freshfruit",
    img: "/public/images/Home/Photography.png",
    price: 64
  },
  {
    id: 5,
    title: "Print Design",
    not: "INKGirl Co.",
    img: "/public/images/Home/Print Design.png",
    price: 78
  },
  {
    id: 6,
    title: "Photography",
    not: "Strawthings Co.",
    img: "/public/images/Home/Print Design2.png",
    price: 9
  },
  {
    id: 7,
    title: "Article 1",
    not: "Strawthings Co.",
    img: "/public/images/Home/Article_1.png",
    price: 73
  },
  {
    id: 8,
    title: "Worked Place",
    not: "Produced Feature",
    img: "/public/images/Home/worked_place.png",
    price: 39
  },
  {
    id: 9,
    title: "Logo Type",
    not: "Streetyoung",
    img: "/public/images/Home/Logo_type2.png",
    price: 56
  },
  {
    id: 10,
    title: "Supportive Team",
    not: "Plaining care",
    img: "/public/images/Home/Support_team.png",
    price: 11
  },
  {
    id: 11,
    title: "New Imaging",
    not: "Casper Shop",
    img: "/public/images/Home/new_imaging.png",
    price: 42
  },
  {
    id: 12,
    title: "Cream Product",
    not: "Alabama Business",
    img: "/public/images/Home/cream_product.png",
    price: 24
  },
];

let $ = document;
const backPageBtn = $.getElementById("backPageBtn");
const title = $.querySelector("title");
const workTitle = $.getElementById("work-title");
const descripNote = $.getElementById("descripe-note");
const nextBtn = $.getElementById("next-Page");
const previousBtn = $.getElementById("previous-Page");
const worksImg = $.getElementById("works-img");
const worksPrice = $.getElementById("works-price");

let locationParams = new URLSearchParams(location.search);
let mainWorkId = locationParams.get("id");

function updateWorkDetails(work) {
  title.innerHTML = "Makariya. " + work.title;
  workTitle.innerHTML = work.title;
  descripNote.innerHTML = work.not;
  worksImg.setAttribute("src", work.img);
  worksPrice.innerHTML = "Buy Work " + work.price + "$";
}

let currentIndex = worksArray.findIndex(function (work) {
  return work.id === Number(mainWorkId);
});
let mainWork = worksArray[currentIndex];
updateWorkDetails(mainWork);

nextBtn.addEventListener("click", function () {
  if (currentIndex < worksArray.length - 1) {
    currentIndex++;
    mainWork = worksArray[currentIndex];
    updateWorkDetails(mainWork);
    history.pushState(null, '', '?id=' + mainWork.id);
  }
});

previousBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    mainWork = worksArray[currentIndex];
    updateWorkDetails(mainWork);
    history.pushState(null, '', '?id=' + mainWork.id);
  }
});

mainWorkId = mainWork.id;

backPageBtn.addEventListener("click", function () {
  location.href="http://127.0.0.1:5501/public/html/home.html"
});
