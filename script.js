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
const loadingQuotes = [
  "Connecting you, your health, and your community",
  "Test Quote 2",
  "Test Quote 3",
  "Test Quote 4",
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
 * LOADING SCREEN TRANSITION
 * Transition to the main user page after some seconds
 */
const delay = 5;
const originName = "/TWC/";

if (
  window.location.pathname == "/index.html" ||
  window.location.pathname == originName
) {
  /**
   * LOADING SCREEN QUOTE GENERATOR
   * Loads a random quote at the bottom of loading screen
   */
  const footer = document.querySelector("#loadingQuote");
  const quoteElement = document.createElement("p");
  quoteElement.innerHTML =
    loadingQuotes[Math.floor(Math.random() * loadingQuotes.length)];

  footer.append(quoteElement);

  let timer = 0;

  setInterval(() => {
    console.log(timer);
    timer++;
    if (timer === delay) {
      window.location.replace("./Pages/users.html");
    }
  }, 1000);
}
