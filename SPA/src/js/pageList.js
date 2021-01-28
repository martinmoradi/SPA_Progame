let pageContent = document.querySelector("#pageContent");
import { header, footer } from "./components";
import { platformsIcons } from "./utility";

  const contentDisplayer = () => {
    const cards = document.querySelectorAll(".game__card");
    cards.forEach((card, index) => {
      if (index > 8) {
        card.style.display = "none"
      }
    });  
  };

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
            const platforms = [];
            game.parent_platforms.forEach((parent) =>
              platforms.push(parent.platform.slug)
            );
            const disctinctPlatforms = [...new Set(platforms)];
            let icons = [];
            disctinctPlatforms.forEach((ele) =>
              icons.push(platformsIcons(ele))
            );
            games += `
                    <div class="game__card">
                      <img src="${
                        game.background_image
                      }" class="game__card--image">
                      <a href ="#pagedetail/${
                        game.id
                      }" class="game__card--title">
                       ${game.name}
                      </a> 
                      <div class="game__card--icons">
                        ${icons.join("\n")}
                      </div>                 
                  </div>     
                `;
          });
          document.querySelector(".grid-container").innerHTML = games;
         contentDisplayer();
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
        <p>
         The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
        <form class="header--select__wrapper">
          <select id="platforms" name="platformlist" class="header--select__box">
            <option value="any">Platform : Any</option>
          </select>
        </form>
      </header>
      
      <section class="games-list">
        <div class="grid-container">...loading</div>
        <div class="main__showmore">
          <button class="main__showmore--button">Show more</button>
        </div>
      </section>

       ${footer()}
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
