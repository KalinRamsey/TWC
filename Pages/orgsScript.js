/*
///////////////////////////////////////////////
      _      _____ _____ ______ _______ _____ 
     / \    / ____/ ____|  ____|__   __/ ____|
    / . \  | (___| (___ | |__     | | | (___  
   / /_\ \  \___ \\___ \|  __|    | |  \___ \ 
  / _____ \ ____) |___) | |____   | |  ____) |
 /_/     \_\_____/_____/|______|  |_| |_____/ 
///////////////////////////////////////////////
///////////////////////////////////////////////
- Alter the values here to adjust the information
	displayed. When adding new data, refer to the
	templates provided to ensure consistency.

*/
const featureImgData = [
  {
    id: 1,
    active: true,
    imgSrc: "../Assets/FeaturePhotos/Feature1.jpg",
    alt: "Image featuring 3 trans women dancing happily",
  },
  {
    id: 2,
    active: false,
    imgSrc: "../Assets/FeaturePhotos/Feature2.jpg",
    alt: "Image featuring a trans woman smiling at the viewer",
  },
  {
    id: 3,
    active: false,
    imgSrc: "../Assets/FeaturePhotos/Feature3.jpg",
    alt: "Image featuring trans woman smiling at something on her phone",
  },
];

/*
///////////////////////////////////////////////////////////////////////////////////
__          __ _     _____  _   _ _____ _   _  _____ 
\ \        / // \   |  __ \| \ | |_   _| \ | |/ ____|
 \ \  /\  / // . \  | |__) |  \| | | | |  \| | |  __ 
	\ \/  \/ // /_\ \ |  _  /| . ` | | | | . ` | | |_ |
	 \  /\  // _____ \| | \ \| |\  |_| |_| |\  | |__| |
	  \/  \//_/     \_\_|  \_\_| \_|_____|_| \_|\_____|
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
EDITING BELOW THIS LINE MAY AFFECT CORE FUNCTIONALITY							 
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
*/

/**
 * MAIN MENU ACCESS
 * Mobile Main menu modal toggle
 */

const closeBtn = document.querySelector("#closeMenu");
const menuBtn = document.querySelector("#hamburgerMenu");
const menuNav = document.querySelector("#mainMenuModal");

const toggleMenuNav = () => {
  // Toggles hamburger menu appearance
  closeBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");

  // Toggles main menu on/off
  menuNav.classList.toggle("hidden");
};
menuBtn.addEventListener("click", () => toggleMenuNav());
closeBtn.addEventListener("click", () => toggleMenuNav());

/**
 * FEATURE IMAGE HANDLER
 * generates and controls which feature image is currently displayed
 */
let currentFeatureIndex = 0;

const setImgIndicator = (index) => {
  // Update selection indicator
  featureImgData.forEach((f) => {
    f.active = false;
  });
  featureImgData[index].active = true;
  const featureList = document.querySelector("#selectionIndicators");
  featureList.innerHTML = "";

  for (let f of featureImgData) {
    featureList.append(buildIndicator(f));
  }
  setFeatureImg(index);
};

const setFeatureImg = (index) => {
  const currentFeatureImg = document.querySelector("#featureImg");
  currentFeatureImg.src = featureImgData[index].imgSrc;
  currentFeatureIndex = index;
};

const buildIndicator = (img) => {
  const listItem = document.createElement("li");
  const div = document.createElement("div");

  listItem.id = img.id;
  if (img.active) {
    div.className = "active";
  } else {
    div.className = "inactive";
  }

  div.addEventListener("click", () => {
    if (!img.active) {
      setImgIndicator(img.id - 1);
    }
  });

  listItem.append(div);

  return listItem;
};

const prevFeatureImgBtn = document.querySelector("#selectPrev");
const nextFeatureImgBtn = document.querySelector("#selectNext");

const updateFeatureImgs = (index) => {
  setImgIndicator(index);
  setFeatureImg(index);
};

// Populate initial feature image section
updateFeatureImgs(currentFeatureIndex);

setInterval(() => {
  updateFeatureImgs(currentFeatureIndex);
  if (currentFeatureIndex === featureImgData.length - 1) {
    currentFeatureIndex = 0;
  } else {
    currentFeatureIndex++;
  }
}, 5000);

prevFeatureImgBtn.addEventListener("click", () => {
  // Update feature imgs to display previous img
  if (currentFeatureIndex === 0) {
    currentFeatureIndex = featureImgData.length - 1;
  } else {
    currentFeatureIndex--;
  }

  updateFeatureImgs(currentFeatureIndex);
});

nextFeatureImgBtn.addEventListener("click", () => {
  // Update feature imgs to display next img
  if (currentFeatureIndex === featureImgData.length - 1) {
    currentFeatureIndex = 0;
  } else {
    currentFeatureIndex++;
  }

  updateFeatureImgs(currentFeatureIndex);
});
