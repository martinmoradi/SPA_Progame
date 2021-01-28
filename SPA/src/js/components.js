const header = () => {
  return `
  <nav class="header--navigation">
      <a href="#" class="header--title">The Hyper Progame</a>
      <div class="header--searchbar">
    <i class="fa fa-search searchIcon"></i>
        <input type="text" name="searchGame" id="searchGame" placeholder="Find a game...">
        
      </div>
    </nav>
  `;
};

const footer = () => {
  return `
  <footer class="footer__main">
    <div class="footer__redbar"></div>
    <p class="footer__text">
      Martin Moradi © 2021 - Fictionnal website for exercice
    </p>
  </footer>
  `;
};

export { header, footer };
