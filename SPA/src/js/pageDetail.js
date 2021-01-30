import { header, footer } from "./components";
import { storeIcons } from "./utility";

const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchGame = async (url, argument) => {
      let finalURL = url + argument;
      let fetched = await fetch(`${finalURL}`);
      const response = await fetched.json();
      console.log(response);

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
        document.querySelector(".game-title").innerHTML = `${name},`;
      }

      if (rating && ratings_count) {
        document.querySelector(
          ".game-ratings"
        ).innerHTML += `${rating}/5 - ${ratings_count} votes`;
      }

      if (description) {
        document.querySelector(".game_description").innerHTML += description;
      }

      if (released) {
        document.querySelector(".game_release-date").innerHTML += released;
      } else {
        document.querySelector(".game_release-date").innerHTML += "TBA";
      }

      if (developers) {
        document.querySelector(".game_developers").innerHTML +=
          developers[0].name;
      }

      if (platforms) {
        platforms.forEach((platform, index) => {
          if (index < platforms.length - 1) {
            document.querySelector(
              ".game_platforms"
            ).innerHTML += `${platform.platform.name}, `;
          } else {
            document.querySelector(".game_platforms").innerHTML +=
              platform.platform.name;
          }
        });
      }

      if (publishers) {
        publishers.forEach((publisher) => {
          document.querySelector(
            ".game_publishers"
          ).innerHTML += `${publisher.name} \n `;
        });
      }

      if (genres) {
        genres.forEach((genre, index) => {
          if (index < genres.length - 1) {
            document.querySelector(".game_genres").innerHTML +=
              genre.name + ", ";
          } else {
            document.querySelector(".game_genres").innerHTML += genre.name;
          }
        });
      }

      if (tags) {
        tags.forEach((tag, index) => {
          if (index < tags.length - 1) {
            document.querySelector(".game_tags").innerHTML += tag.name + ", ";
          } else {
            document.querySelector(".game_tags").innerHTML += tag.name;
          }
        });
      }

      if (stores) {
        stores.forEach((store) => {
          document.querySelector(".game_stores").innerHTML += `
                <a href="${store.url}"><span class="link">${
            store.store.name
          }</span> ${storeIcons(store.store.slug)}</a><br>`;
        });
      }

      if (clip) {
        document.querySelector(".game_trailer").innerHTML += `
        <video controls width="100%" poster="${clip.preview}">
        <source src="${clip.clips.full}" type="video/mp4">          
        </video>
        `;
      }

      if (screenshots_count > 0) {
        fetchScreenshots(finalURL);
      }
    };
    const fetchScreenshots = async (finalURL) => {
      let fetched = await fetch(`${finalURL}/screenshots`);
      const response = await fetched.json();
      response.results.forEach((result, index) => {
        if (index < 4) {
          document.querySelector(".game_screenshots--grid").innerHTML += `
          <img class="game__screenshot" src="${result.image}">
          `;
        }
      });
    };
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = async () => {
    pageContent.innerHTML = `
    <header>
      ${header()}
      <div class="hero--banner__image"></div>    
    </header>
    <div class="main__content main__details">
      <div class="game-title__row">
        <h1 class="game-title"></h1>
        <h1 class="game-ratings"></h1>
      </div>    
      <div class="game_description"></div>
      <section class="game-details">
          <div class="game_release-date">
            <h3>Release Date</h3><br>
          </div>
          <div class="game_developers">
           <h3>Developer</h3><br>
          </div>
          <div class="game_platforms">
            <h3>Platforms</h3><br>
          </div>
          <div class="game_publishers">
           <h3>Publisher</h3><br>
          </div>
          <div class="game_genres">
            <h3>Genre</h3><br>
          </div>
          <div class="game_tags">
            <h3>Tags</h3><br>
          </div>
        </section>
        <div class="game_stores">
          <h2 class="game__details--subtitles">BUY</h2>
        </div>
        <div class="game_trailer">
          <h2 class="game__details--subtitles">TRAILER</h2>
        </div>
        <div class="game_screenshots">
          <h2 class="game__details--subtitles">SCREENSHOTS</h2>
          <div class="game_screenshots--grid">
          </div>
        </div>
        <div class="game_youtube">
          <h2 class="game__details--subtitles">YOUTUBE</h2>
        </div>
        <div class="game_similar">
          <h2 class="game__details--subtitles">SIMILAR GAMES</h2>
        </div>
         
    </div>
    ${footer()}
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
