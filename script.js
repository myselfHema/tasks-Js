const add = document.querySelector("#add");
const btnRemove = document.querySelector("#remove");
const card = document.querySelector("#card");
const request_accpet = document.querySelector("#request_accpet");
let check = 0;

add.addEventListener("click", function () {
  if (check == 0) {
    add.innerHTML = "Accept";
    btnRemove.style.display = "inline-block";
    if (add.innerHTML === "Accept") {
      add.addEventListener("click", function () {
        btnRemove.style.display = "none";
        request_accpet.style.display = "block";
        add.style.display = "none";
      });
    } else {
      console.log("hmm please check");
    }
    check = 1;
  } else {
    add.innerHTML = "Add Friend";
    console.log("Check 1");
  }
});

btnRemove.addEventListener("click", function () {
  card.style.display = "none";
});

// instagram
const insta = document.querySelector("#insta");
const iconlove = document.querySelector("#hurt"); // Fix selector
const increaseInsta = document.querySelector("#increaseInsta");

let likeCount = 0; // Track like count

insta.addEventListener("dblclick", function () {
  // Increase Like Count
  likeCount++;
  // Update displayed count

  // Animate Heart
  iconlove.style.transform = "translate(-50%, -50%) scale(1)";
  iconlove.style.color = "red";
  iconlove.style.opacity = "1";
  iconlove.style.fontSize = "50px";

  setTimeout(function () {
    iconlove.style.transform = "none"; // Fix transform reset
  }, 1000);

  setTimeout(function () {
    iconlove.style.transform = "translate(-50%, -50%) scale(1.2)"; // Fix missing parenthesis
  }, 1000);

  setTimeout(function () {
    iconlove.style.opacity = "0";
  }, 1100);
  setTimeout(function () {
    increaseInsta.textContent = " " + likeCount;
  }, 1200);
});
// mouseeffects

const mouse_effects = document.querySelector("#mouse_effects");
const cycle = document.querySelector("#cycle");
mouse_effects.addEventListener("mousemove", function (changeMouse) {
  cycle.style.left = changeMouse.x + "px";
  cycle.style.top = changeMouse.y + "px";
});

// mouseeffects on images

const elem = document.querySelectorAll("#elem");
const elem_imgs = document.querySelectorAll("#elem img");

// elem.addEventListener('mouseenter', function(eleMouse) {
//   elem_imgs.style.left = eleMouse.x+"px"
//   elem_imgs.style.top = eleMouse.y+"px";
//   elem_imgs.style.opacity = 1;
// });
// elem.addEventListener('mouseleave', function(eleMouse) {
//   elem_imgs.style.left = eleMouse.x+"px"
//   elem_imgs.style.top = eleMouse.y+"px";
//   elem_imgs.style.opacity = 0;
// });
elem.forEach(function (val) {
  const getImg = val.childNodes[3];
  val.addEventListener("mouseenter", function (eleMouse) {
    getImg.style.opacity = 1;
  });

  val.addEventListener("mouseleave", function (eleMouse) {
    getImg.style.opacity = 0;
  });

  val.addEventListener("mousemove", function (eleMouse) {
    getImg.style.left = eleMouse.x + "px";
  });
});

// Learn Obj and array
let arr = [1, 2, 3, 4];
arr.forEach(function (ins) {
  console.log(ins);
});

let ob = { name: "hema", test: "hee" };
Object.keys(ob).forEach(function (key) {
  console.log(key, ob[key]);
});
for (let test in ob) {
  if (ob.hasOwnProperty(test)) {
    // Check to ensure it's not an inherited property
    console.log(test, ob[test]);
  }
}

// Instagram on images

// array with objects

let arr_img = [
  {
    dp: "https://img.freepik.com/premium-photo/beautiful-young-woman-with-long-curly-hair-pointing-away-white-wall_171337-75745.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/free-photo/tender-smiling-lady-is-walking-street-posing-casual-modern-coat-hat_231208-3269.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },
  {
    dp: "https://img.freepik.com/free-photo/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white_158538-11862.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/premium-photo/beautiful-young-woman-with-long-curly-hair-pointing-away-white-wall_171337-75745.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },

  {
    dp: "https://img.freepik.com/premium-photo/beautiful-woman-with-long-smooth-healthy-hair-tail-beauty-casual-style-color-background-brown_431835-9810.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/premium-photo/pretty-woman-coat-beautiful-hair-isolated-fund-high-quality-photo_163305-245989.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },

  {
    dp: "https://img.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall_231208-545.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/premium-photo/fashionable-beautiful-young-woman-model-with-pink-hair-stylish-casual-outfit-with-blazer-her-shoulder-posing-studio-white-background_338491-20995.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },

  {
    dp: "https://img.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall_231208-545.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/premium-photo/fashionable-beautiful-young-woman-model-with-pink-hair-stylish-casual-outfit-with-blazer-her-shoulder-posing-studio-white-background_338491-20995.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },

  {
    dp: "https://img.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall_231208-545.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
    story:
      "https://img.freepik.com/premium-photo/fashionable-beautiful-young-woman-model-with-pink-hair-stylish-casual-outfit-with-blazer-her-shoulder-posing-studio-white-background_338491-20995.jpg?ga=GA1.1.389080712.1737371425&semt=ais_hybrid",
  },
];

let clutter = "";
arr_img.forEach(function (elements, index) {
  clutter += ` <div id="story"><img id="${index}" src="${elements.dp}" alt="" /></div>`;
});

document.querySelector("#story_card").innerHTML = clutter;

document
  .querySelector("#story_card")
  .addEventListener("click", function (details) {
    console.log(arr_img[details.target.id].story);

    document.querySelector("#story_card").addEventListener("click", function () {
  document.querySelector("#showStory").style.display = "block";
  document.querySelector("#showStory").style.backgroundImage  = `url(${arr_img[details.target.id].story})`;

  // let check = (document.querySelector("#showStory").style.backgrounImage = `url(${arr_img[details.target.id].story})`);
setTimeout(function(){
  document.querySelector("#showStory").style.display = "none";
},2000)
});
  });


