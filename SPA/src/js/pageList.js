let pageContent = document.querySelector("#pageContent");
import { header, footer } from "./components";
import { platformsIcons, formatDate, searchGame, getDate } from "./utility";

const PageList = (argument) => {
  const hideContent = () => {
    const cards = document.querySelectorAll(".game__card");
    cards.forEach((card, index) => {
      if (index > 8) {
        card.classList.add("hidden");
      }
    });
  };

  const showContent = () => {
    let count = 0;
    const showMoreButton = document.querySelector(".main__showmore--button");
    showMoreButton.addEventListener("click", function () {
      const cards = document.querySelectorAll(".game__card.hidden");
      count++;
      cards.forEach((card, index) => {
        if (index <= 8) {
          card.classList.remove("hidden");
        }
      });
      if (count >= 2) {
        showMoreButton.classList.add("hidden");
      }
    });
  };

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";

    const fetchList = (url, argument, pageSize) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument + pageSize;
      } else {
        finalURL = url + "?dates=" + getDate() + pageSize;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((game) => {
            const genres = [];
            game.genres.forEach((genre) => {
              genres.push(genre.slug);
            });

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
                      }" class="game__card--image alt="${game.name}">
                    <div class="game__card--details hidden">
                      <h3>${formatDate(game.released)}</h3>
                      <h3>developers lul</h3>
                      <h3>${game.rating}/5 - ${game.reviews_count} votes</h3>
                      <p>${genres.join(" ")}</p>
                     
                    </div>
                      <a href ="#pagedetail/${
                        game.id
                      }" class="game__card--title link">
                       ${game.name}
                      </a> 
                      <div class="game__card--icons">
                        ${icons.join("\n")}
                      </div>                 
                  </div>     
                `;
          });
          document.querySelector(".grid-container").innerHTML = games;
          document.querySelectorAll(".game__card--image").forEach((image) => {
            image.addEventListener("mouseover", showDetails);
          });
          document.querySelectorAll(".game__card--details").forEach((card) => {
            card.addEventListener("mouseleave", hideDetails);
          });
          hideContent();
        });
    };

    fetchList(
      "https://api.rawg.io/api/games",
      cleanedArgument, "&page_size=27"
    );
  };

  const showDetails = (e) => {
    e.target.classList.add("hidden");
    e.target.nextElementSibling.classList.remove("hidden");
  };

  const hideDetails = (e) => {
    e.target.classList.add("hidden");
    e.target.previousElementSibling.classList.remove("hidden");
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
            <option value="pc">Platform : PC</option>
            <option value="ps">Platform : PlayStation</option>
            <option value="pc">Platform : Xbox</option>
            <option value="pc">Platform : Switch</option>
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
  showContent();
};

// searchBar.addEventListener("submit", (e) => {
//   const gameSearch = document.getElementById("search").value
//   e.preventDefault()
//   PageList(gameSearch)
// })

// function qui return date today AA-MOIS-JOUR (2021-01-27, 2022-01-27)
export { PageList };
