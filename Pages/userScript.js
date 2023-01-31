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
const featureInfo = [
  {
    title: "Who?",
    text: "For self-identified trans women who are sexually active, between ages 18–49, and living in the US.",
    imgSrc: "../Assets/ModelPhotos/Model1.jpg",
    imgAlt: "Image alt text here",
  },
  {
    title: "Why?",
    text: "Help researchers learn more about the health needs of trans women.",
    imgSrc: "../Assets/ModelPhotos/Model2.jpg",
    imgAlt: "Image alt text here",
  },
  {
    title: "Where? When?",
    text: "Test a trans women's health-related app on your mobile device with internet accss at your own pace. Fill out 4 surveys over 6 months.",
    imgSrc: "../Assets/ModelPhotos/Model5.png",
    imgAlt: "Image alt text here",
  },
  {
    title: "How?",
    text: "Thank you for your interest in TWC! The study is now closed because we have met our enrollment goal. If you'd like to learn about future studies or see the TWC app when this study is over, please <a href='./orgs.html#contactForm'>contact us.</a>",
    imgSrc: "../Assets/ModelPhotos/Model4.jpg",
    imgAlt: "Image alt text here",
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

/**
 * RENDER FEATURED INFO
 * Populates the featured blurbs with associated text and images
 */
const infoList = document.querySelector("#infoList");

featureInfo.map((info, i) => {
  const item = document.createElement("li");
  const infoTextSegment = document.createElement("div");
  const infoHeader = document.createElement("h2");
  const infoText = document.createElement("p");
  const infoImgSegment = document.createElement("div");
  const infoImgContainer = document.createElement("div");
  const infoImg = document.createElement("div");
  const infoImgHighlight = document.createElement("div");

  infoHeader.innerHTML = info.title;
  infoText.innerHTML = info.text;
  infoImg.style.backgroundImage = `url(${info.imgSrc})`;
  infoImg.setAttribute("alt", info.imgAlt);
  item.setAttribute("key", i);

  infoTextSegment.classList.add("infoText");
  infoImgHighlight.classList.add("imgHighlight");
  infoImgSegment.classList.add("infoImgBlock");
  infoImg.classList.add("infoImg");
  item.classList.add("infoBlock");

  infoImgContainer.append(infoImg);
  infoImgContainer.append(infoImgHighlight);

  infoImgSegment.append(infoImgContainer);
  infoTextSegment.append(infoHeader);
  infoTextSegment.append(infoText);

  item.append(infoTextSegment);
  item.append(infoImgSegment);

  infoList.append(item);
});

/**
 * VIDEO REVEAL
 * Hides video white out and reveals feature video
 */
const videoBtn = document.querySelector("#playButton");
const videoCover = document.querySelector("#videoCover");
const video = document.querySelector("#sourceVideo");

const toggleVideoCover = () => {
  // Toggles hamburger menu appearance
  videoBtn.classList.toggle("hidden");
  // Toggles main menu on/off
  videoCover.classList.toggle("hidden");
  video.play();
};
videoBtn.addEventListener("click", () => toggleVideoCover());
