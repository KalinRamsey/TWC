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
const featureInfo = [
  {
    title: "Who?",
    text: "For self-identified trans women who are sexually active, between ages 18–49, and living in the US.",
    imgSrc: "../Assets/peppermint-lede.jpg",
    imgAlt: "Image alt text here",
  },
  {
    title: "Why?",
    text: "Help researchers learn more about the health needs of trans women.",
    imgSrc: "../Assets/peppermint-lede.jpg",
    imgAlt: "Image alt text here",
  },
  {
    title: "Where? When?",
    text: "Test a trans women's health-related app on your mobile device with internet accss at your own pace. Fill out 4 surveys over 6 months.",
    imgSrc: "../Assets/peppermint-lede.jpg",
    imgAlt: "Image alt text here",
  },
  {
    title: "How?",
    text: "Thank you for your interest in TWC! The study is now closed because we have met our enrollment goal. If you'd like to learn about future studies or see the TWC app when this study is over, please <a href='./orgs.html#contactForm'>contact us.</a>",
    imgSrc: "../Assets/peppermint-lede.jpg",
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
 * RENDER FEATURED INFO
 * Populates the featured blurbs with associated text and images
 */
const infoList = document.querySelector("#infoList");

featureInfo.map((info, i) => {
  const item = document.createElement("li");
  const infoTextSegment = document.createElement("div");
  const infoHeader = document.createElement("h3");
  const infoText = document.createElement("p");
  const infoImgSegment = document.createElement("div");
  const infoImgContainer = document.createElement("div");
  const infoImg = document.createElement("img");
  const infoImgHighlight = document.createElement("div");

  infoHeader.innerHTML = info.title.toUpperCase();
  infoText.innerHTML = info.text;
  infoImg.setAttribute("src", info.imgSrc);
  infoImg.setAttribute("alt", info.imgAlt);
  item.setAttribute("key", i);

  infoTextSegment.classList.add("infoText");
  infoImgHighlight.classList.add("imgHighlight");
  infoImgSegment.classList.add("infoImg");
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

const toggleVideoCover = () => {
  // Toggles hamburger menu appearance
  videoBtn.classList.toggle("hidden");
  // Toggles main menu on/off
  videoCover.classList.toggle("hidden");
};
videoBtn.addEventListener("click", () => toggleVideoCover());
