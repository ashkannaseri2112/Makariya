let $ = document;
const enterMenu = $.getElementById("enter-Menu");
const exitMenu = $.getElementById("exit-menu");
const menuMobiles = $.querySelectorAll(".listItemMobile");
const subMenuMob = $.querySelectorAll(".subMenuMob");
const sendButton = $.getElementById("Send-Button");
const nav = $.querySelector(".nav");
const inspiredContainer = $.querySelector(".inspired-Container");
const likeButton = $.querySelectorAll(".likeButton");
const likeNumber = $.querySelectorAll(".like-Number");
const replyButtons = $.querySelectorAll(".replyButton");
const replayForms = $.querySelectorAll('.replayForm')
const postReplaies = $.querySelectorAll('.postReply')

let inspiredArray = [
  {
    id: 1,
    title: "Article 1",
    img: "/public/images/Article_List/Article1.png",
  },
  {
    id: 2,
    title: "Article 2",
    img: "/public/images/Article_List/Article2.png",
  },
];

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

inspiredArray.map(function (article) {
  inspiredContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="max-w-[370px]  px-5 sm:px-0 mx-auto  ">
    <div class="flex">
      <img
        src="` +
      article.img +
      `"
        alt="` +
      article.title +
      `"
      />
      <div class="p-8 border-amber-450/35 border-2 border-l-0">
        <span
          class="block rounded-full text-center flex-center text-amber-450 text-[10px] w-[66px] h-[27px] border border-amber-450"
          >Branding</span
        >
        <h5 class="my-5 font-SourceSansBold text-xl">` +
      article.title +
      `</h5>
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
</div>`
  );
});

let initialComments = [];

$.querySelectorAll(".comments-box").forEach(function (commentBox) {
  initialComments.push(commentBox.style.display);
});

function showAllComments() {
  let commentBoxes = $.querySelectorAll(".comments-box");

  commentBoxes.forEach(function (commentBox) {
    commentBox.style.display = "block";
  });

  $.getElementById("loadButton").style.display = "none";
  $.getElementById("HideButton").style.display = "block";
}

function hideComment() {
  let commentBoxes = $.querySelectorAll(".comments-box");

  for (var i = 0; i < commentBoxes.length; i++) {
    commentBoxes[i].style.display = initialComments[i];
  }

  $.getElementById("loadButton").style.display = "block";
  $.getElementById("HideButton").style.display = "none";
}

likeButton.forEach(function (button) {
  button.addEventListener("click", function () {
    let dataId = button.getAttribute("data-id");

    let mainLikeNumber = $.querySelector(
      '.like-Number[data-id="' + dataId + '"]'
    );

    if (button.getAttribute("fill") === "white") {
      button.setAttribute("fill", "#FFB51F");
      let currentLikes = parseInt(mainLikeNumber.textContent);
      let newLikes = currentLikes + 1;
      mainLikeNumber.textContent = newLikes;
    } else {
      button.setAttribute("fill", "white");
      let currentLikes = parseInt(mainLikeNumber.textContent);
      let newLikes = currentLikes - 1;
      mainLikeNumber.textContent = newLikes;
    }
  });
});

replyButtons.forEach(function (replayBtn) {
  replayBtn.addEventListener("click", function () {
    replayForms.forEach(function(form){
      form.style.display = 'none'
    });
   let formId = replayBtn.getAttribute('data-id')
   let selectedForm = $.querySelector('.replayForm[data-id="'+formId+'"')
   selectedForm.style.display = 'flex'
  });
});

postReplaies.forEach(function(post){
   post.addEventListener('click',function(){
    location.reload()
   })
})

sendButton.addEventListener('click',function(){
  location.reload()
})