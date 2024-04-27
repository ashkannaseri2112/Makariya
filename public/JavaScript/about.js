let $ = document;
const teamBoxContainer = $.getElementById("teamBoxContainer");
const sendButton = $.getElementById('send-button')
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const nav = $.querySelector(".nav");



let teamBoxArray = [
  {
    id: 1,
    img: "/public/images/About_Us/user1.png",
    name: "Aaron Smith",
    work: "Interior Designer",
  },
  {
    id: 2,
    img: "/public/images/About_Us/user2.png",
    name: "Poppy Sinclair",
    work: "SEO Developer",
  },
  {
    id: 3,
    img: "/public/images/About_Us/user3.png",
    name: "Henry Hamilton",
    work: "Front Developer",
  },
  {
    id: 4,
    img: "/public/images/About_Us/user4.png",
    name: "Molly Horton",
    work: "Sales Manager",
  },
  {
    id: 5,
    img: "/public/images/About_Us/user6.png",
    name: "Abbie Welch",
    work: "Sales consultant",
  },
  {
    id: 6,
    img: "/public/images/About_Us/user5.png",
    name: "Hayden Shaw",
    work: "Program engineer",
  },
];

let teamBoxFragment = $.createDocumentFragment();

teamBoxArray.map(function (user) {
  let teamBoxElem = $.createElement("div");
  teamBoxElem.className = "team-box relative mx-auto w-3/4 sm:w-full" ;

  teamBoxElem.innerHTML = `
  <img class="w-full"
  src="`+user.img+`"
  alt="`+user.name+`"
/>
<div
  class="text-center py-4 border border-amber-450/35 border-t-0 text-2xl"
>
  <h5 class="font-SourceSansBold">`+user.name+`</h5>
</div>
<div
  class="w-full h-[210px] py-8  opacity-0 transition-opacity duration-300 text-center team-box-doc bottom-0 absolute bg-white border border-[#FAE6B2]"
>
  <h5 class="font-SourceSansBold text-2xl">`+user.name+`</h5>
  <span class="block text-sm text-[#818A91]"
    >`+user.work+`</span
  >
  <span
    class="block mx-auto rounded-sm mt-7 bg-amber-450 w-9 h-1.5"
  ></span>
  <p class="text-sm mt-5 text-[#818A91]">Follow him on:</p>
  <ul class="flex-center gap-x-4 mt-2">
    <li>
      <a href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            id="linkedin"
            d="M19.5,32H1.5A1.506,1.506,0,0,0,0,33.514V51.486A1.506,1.506,0,0,0,1.5,53h18A1.51,1.51,0,0,0,21,51.486V33.514A1.51,1.51,0,0,0,19.5,32ZM6.347,50H3.234V39.978H6.352V50ZM4.791,38.609a1.8,1.8,0,1,1,1.8-1.8A1.805,1.805,0,0,1,4.791,38.609ZM18.014,50H14.9V45.125c0-1.162-.023-2.658-1.617-2.658-1.622,0-1.87,1.266-1.87,2.573V50H8.3V39.978h2.986v1.369h.042a3.278,3.278,0,0,1,2.948-1.617c3.15,0,3.736,2.077,3.736,4.777Z"
            transform="translate(0 -32)"
            fill="#ffb51f"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            id="dribbble"
            d="M18.5,8A10.5,10.5,0,1,0,29,18.5,10.512,10.512,0,0,0,18.5,8Zm6.942,4.842a8.926,8.926,0,0,1,2.025,5.587,20.959,20.959,0,0,0-6.245-.289c-.244-.594-.473-1.117-.788-1.762a11.947,11.947,0,0,0,5.008-3.536Zm-1-1.037a10.126,10.126,0,0,1-4.7,3.24A47.872,47.872,0,0,0,16.4,9.794,8.945,8.945,0,0,1,24.445,11.8ZM14.687,10.4a57.226,57.226,0,0,1,3.325,5.187,33.453,33.453,0,0,1-8.291,1.093A9,9,0,0,1,14.687,10.4ZM9.531,18.514c0-.092,0-.183,0-.274a33.083,33.083,0,0,0,9.217-1.276c.257.5.5,1.013.727,1.522a13.892,13.892,0,0,0-7.643,6.025A8.933,8.933,0,0,1,9.531,18.514Zm3.464,7.075a12.614,12.614,0,0,1,7.1-5.621A37.28,37.28,0,0,1,22,26.77,8.95,8.95,0,0,1,12.995,25.589Zm10.516.359a38.709,38.709,0,0,0-1.742-6.395,13.164,13.164,0,0,1,5.586.383A8.984,8.984,0,0,1,23.511,25.948Z"
            transform="translate(-8 -8)"
            fill="#ffb51f"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="17.056"
          viewBox="0 0 21 17.056"
        >
          <path
            id="twitter"
            d="M18.841,52.333c.013.187.013.373.013.56A12.162,12.162,0,0,1,6.609,65.138,12.163,12.163,0,0,1,0,63.206a8.9,8.9,0,0,0,1.039.053A8.62,8.62,0,0,0,6.383,61.42a4.312,4.312,0,0,1-4.024-2.985,5.427,5.427,0,0,0,.813.067A4.552,4.552,0,0,0,4.3,58.356,4.3,4.3,0,0,1,.853,54.132v-.053a4.334,4.334,0,0,0,1.945.546,4.31,4.31,0,0,1-1.332-5.756,12.234,12.234,0,0,0,8.874,4.5,4.859,4.859,0,0,1-.107-.986,4.308,4.308,0,0,1,7.449-2.945A8.474,8.474,0,0,0,20.414,48.4a4.292,4.292,0,0,1-1.892,2.372A8.628,8.628,0,0,0,21,50.107,9.252,9.252,0,0,1,18.841,52.333Z"
            transform="translate(0 -48.082)"
            fill="#ffb51f"
          />
        </svg>
      </a>
    </li>
  </ul>
</div>`;

teamBoxFragment.append(teamBoxElem)
});

teamBoxContainer.append(teamBoxFragment)

sendButton.addEventListener('click',function(){
  location.reload()
})

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