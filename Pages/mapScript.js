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
const interactiveMapSource = "https://tailwindcss.com/docs";
const mapFilterOptions = ["margin", "padding", "width", "height", "opacity"];

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
 * EDIT MAP RENDER
 * Reload interactive map based on selected
 */

const mapFilterForm = document.querySelector("#mapFilterForm");
const interactiveMap = document.querySelector("#interactiveFrame");

interactiveMap.setAttribute("src", interactiveMapSource);

const setMapFilter = (input) => {
  const newSrc = `${interactiveMapSource}/${input}`;

  console.log(newSrc);
  interactiveMap.setAttribute("src", newSrc);
};

mapFilterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mapFilterSelector = document.querySelector("#mapFilterSelector");

  setMapFilter(mapFilterSelector.value);
});

/**
 * BUILD FILTER OPTIONS
 * Add filter options based on given preset
 */

const mapFilterSelector = document.querySelector("#mapFilterSelector");

mapFilterOptions.map((o, i) => {
  const option = document.createElement("option");

  option.innerHTML = o[0].toUpperCase() + o.substring(1);
  option.setAttribute("id", i);
  option.setAttribute("name", o);
  option.setAttribute("value", o);

  mapFilterSelector.append(option);
});
