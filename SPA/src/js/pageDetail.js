import { storeIcons } from "./utility";
import { header, footer } from "./components";

const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let {
            background_image,
            website,
            name,
            rating,
            ratings_count,
            released,
            description,
            developers,
            platforms,
            publishers,
            genres,
            tags,
            stores,
            clip,
            screenshots_count,
            slug,
          } = response;
          if (background_image) {
            document.querySelector(
              ".hero--banner__image"
            ).style.backgroundImage = `url(${background_image})`;
          }

          if (website) {
            document.querySelector(".hero--banner__image").innerHTML = `
             <button class="hero--banner__button"><a href="${website}">Check Website</a></button>
             `;
          }

          if (name) {
            document.querySelector(".game-title").innerHTML = name;
          }

          if (rating && ratings_count) {
            document.querySelector(
              ".game_ratings"
            ).innerHTML = `${rating}/5 - ${ratings_count} votes`;
          }

          if (description) {
            document.querySelector(".game_description").innerHTML = description;
          }

          if (released) {
            document.querySelector(".game_release-date").innerHTML = released;
          }

          if (developers) {
            document.querySelector(".game_developers").innerHTML =
              developers[0].name;
          }

          if (platforms) {
            platforms.forEach((platform) => {
              document.querySelector(".game_platforms").innerHTML +=
                platform.platform.name;
            });
          }

          if (publishers) {
            publishers.forEach((publisher) => {
              document.querySelector(".game_publishers").innerHTML +=
                publisher.name;
            });
          }

          if (genres) {
            genres.forEach((genre) => {
              document.querySelector(".game_genres").innerHTML +=
              genre.name + " "
            })
          }

          if (tags) {
            tags.forEach((tag) => {
               document.querySelector(".game_tags").innerHTML +=
               tag.name + " "
            })
          }

          if (stores) {
            stores.forEach((store) => {
               document.querySelector(".game_stores").innerHTML +=
               store.store.name + " "
            })
          }
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
     <header>
      ${header()}
        <div class="hero--banner__image">          
        </div>
        
      </header>
      <div>
        <h1 class="game-title"></h1>
        <h1 class="game_ratings">test</h1>
      </div>
      <p class="game_description"></p>
      <section class="game-detail">
        <div class="game_release-date"></div>
        <div class="game_developers"></div>
        <div class="game_platforms"></div>
        <div class="game_publishers"></div>
        <div class="game_genres"></div>
        <div class="game_tags"></div>
        <div class="game_stores"></div>
      </section>
      ${footer()}
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
