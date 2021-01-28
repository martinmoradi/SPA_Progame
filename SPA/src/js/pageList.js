let pageContent = document.querySelector("#pageContent");
import { header, footer } from "./components";

const PageList = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((game) => {
            games += `
                  <div class="game__card">
                  <img src="${game.background_image}" class="game__card--image">
                  <a href ="#pagedetail/${game.id}" class="game__card--title">${game.name}</a>                  
                  </div>
                `;
          });
          document.querySelector(".grid-container").innerHTML = games;
        });
    };

    fetchList(
      "https://api.rawg.io/api/games",
      cleanedArgument + "&page_size=27"
    );
  };

  const render = () => {
    pageContent.innerHTML = `    
    <header>
    ${header()}
        <h1>Welcome,</h1>
        <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
        <div class="box">
          <select id="platforms" name="platformlist">
            <option value="any">Platform : Any</option>
          </select>
        </div>  
      </header>
      
      <section class="games-list">
        <div class="grid-container">...loading</div>
      </section>
    `;

    preparePage();
  };

  render();
};

// searchBar.addEventListener("submit", (e) => {
//   const gameSearch = document.getElementById("search").value
//   e.preventDefault()
//   PageList(gameSearch)
// })

// function qui return date today AA-MOIS-JOUR (2021-01-27, 2022-01-27)
export { PageList };
