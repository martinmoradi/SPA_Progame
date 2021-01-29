import { PageList } from "./pageList";

const platformsIcons = (platform) => {
  switch (platform) {
    case "pc":
      return "<img src='/src/images/icons/windows.svg' alt='Windows' class='platform__icon'>";

    case "playstation":
      return "<img src='src/images/icons/ps4.svg' alt='PlayStation' class='platform__icon'>";

    case "xbox":
      return "<img src='/src/images/icons/xbox.svg' alt='Xbox' class='platform__icon'>";

    case "ios":
      return "<img src='/src/images/icons/mobile.svg' alt='Ios' class='platform__icon'>";

    case "android":
      return "<img src='src/images/icons/androi.svg' alt='Android' class='platform__icon'>";

    case "mac":
      return "<img src='src/images/icons/apple.svg' alt='Mac' class='platform__icon'>";

    case "linux":
      return "<img src='src/images/icons/linux.svg' alt='Linux' class='platform__icon'>";

    case "nintendo":
      return "<img src='src/images/icons/switch.svg' alt='Nintendo' class='platform__icon'>";

    case "atari":
      return "<img src='src/images/icons/ghost-solid.svg' alt='Atari' class='platform__icon'>";

    case "commodore-amiga":
      return "<img src='src/images/icons/ghost-solid.svg' alt='Commodore' class='platform__icon'>";

    case "sega":
      return "<img src='src/images/icons/ghost-solid.svg' alt='Sega' class='platform__icon'>";

    case "3do":
      return "<img src='src/images/icons/ghost-solid.svg' alt='3do' class='platform__icon'>";

    case "neo-geo":
      return "<img src='src/images/icons/ghost-solid.svg' alt='Neo-Geo' class='platform__icon'>";

    case "web":
      return "<img data-id='14' src='src/images/icons/chrome.svg' alt='Web' class='platform__icon'>";
  }
};

const storeIcons = (store) => {
  switch (store) {
    case "steam":
      return "<img data-id='1' src='src/images/icons/steam.svg' alt='Steam' class='store__icon'>"

    case "playstation-store":
      return "<img data-id='2' src='src/images/icons/ps4.svg' alt='PS Store' class='store__icon'>"

    case"xbox-store":
      return "<img data-id='3' src='src/images/icons/xbox.svg' alt='Xbox Store' class='store__icon'>";

    case "apple-appstore":
      return "<img data-id='4' src='src/images/icons/applestore.svg' alt='Apple Store' class='store__icon'>";

    case "gog":
      return "<img data-id='5' src='src/images/icons/gog.svg' alt='GoG' class='store__icon'>";

    case "nintendo":
      return "<img data-id='6' src='src/images/icons/switch.svg' alt='Nintendo' class='store__icon'>";

    case "xbox360":
      return "<img data-id='7' src='src/images/icons/xbox.svg' alt='Xbox360' class='store__icon'>";

    case "google-play":
      return "<img data-id='8' src='src/images/icons/googleplay.svg' alt='Google Play' class='store__icon'>";

    case "switch":
      return "<img data-id='9' src='src/images/icons/itch.svg' alt='Switch' class='store__icon'>";

    case "epic-games":
      return "<img data-id='10' src='src/images/icons/epic.svg' alt='Epic Games' class='store__icon'>";
  }
  
}

const formatDate = (date) => {
  let splittedDate = date.split("-");
  let formatted = `${monthFormater(splittedDate[1])} ${splittedDate[2]} ${
    splittedDate[0]
  }`;
  return formatted;
};

const monthFormater = (month) => {
  switch (month) {
    case "01":
      return "Jan.";
    case "02":
      return "Feb.";
    case "03":
      return "Mar.";
    case "04":
      return "Apr.";
    case "05":
      return "May";
    case "06":
      return "Jun.";
    case "07":
      return "Jul.";
    case "08":
      return "Aug.";
    case "09":
      return "Sept.";
    case "10":
      return "Oct.";
    case "11":
      return "Nov.";
    case "12":
      return "Dec.";
  }
};

const getDate = () => {
  let dateNow = new Date();
  let month = dateNow.getMonth() + 1;
  let day = dateNow.getDate();
  let fullCurrentDate =
    dateNow.getFullYear() +
    "-" +
    (("" + month).length < 2 ? "0" : "") +
    month +
    "-" +
    (("" + day).length < 2 ? "0" : "") +
    day;

  // get current year+1
  let fullNextYear =
    dateNow.getFullYear() +
    1 +
    "-" +
    (("" + month).length < 2 ? "0" : "") +
    month +
    "-" +
    (("" + day).length < 2 ? "0" : "") +
    day;

  return `${fullCurrentDate},${fullNextYear}`;
};

const searchGame = () => {
  let search = document.getElementById("searchGame").value;
  searchBar.addEventListener("submit", (e) => {
    const request = document.getElementById("searchGame").value;
    console.log(request);
    e.preventDefault();
    PageList(request);
  });
};

const fetchDevelopers = () => {
  let developers = document.querySelectorAll(".game__card--developers");
  developers.forEach((developer) => {
    let game = developer.innerHTML;
    fetch(`https://api.rawg.io/api/games/${game}`)
      .then((response) => response.json())
      .then((response) => {
        let devStudio;
        if (response.developers) {
          response.developers.forEach((developer) => {
            devStudio = `${developer.name}`;
          });
        }
        developer.innerHTML = devStudio;
      });
  });
};

const fetchPlatforms = async () => {
  let options = '<option value="any">Platform : Any</option>';
  let fetched = await fetch(`https://api.rawg.io/api/platforms?&page_size=8`);
  const response = await fetched.json();

  response.results.forEach((platform) => {
    options += `
                <option value="${platform.slug}">Platform : ${platform.name}</option>
                `;
  });
  document.querySelector("#platforms").innerHTML = options;
};

export {
  platformsIcons,
  formatDate,
  searchGame,
  getDate,
  fetchDevelopers,
  fetchPlatforms,
  storeIcons
};
