const header = () => {
  return `
  <nav class="header--navigation">
      <a href="#" class="header--title">The Hyper Progame</a>
      <div class="header--searchbar">
        <div class="header--searchbar__icon">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M87.6,81.8L70.5,64.7c-1.4-1.4-3.4-1.9-5.3-1.5l-6.9-6.9c4.8-4.7,7.8-11.3,7.8-18.5c0-14.5-12.1-26.3-27-26.3  s-27,11.8-27,26.3c0,14.5,12.1,26.3,27,26.3c5.3,0,10.2-1.5,14.3-4l7.5,7.5c-0.4,1.8,0.1,3.8,1.5,5.3l17.1,17.1  c1.1,1.1,2.6,1.7,4,1.7s2.9-0.6,4-1.7C89.8,87.6,89.8,84,87.6,81.8z M18.3,37.8c0-11.1,9.4-20.1,20.8-20.1c11.5,0,20.8,9,20.8,20.1  s-9.4,20.1-20.8,20.1C27.6,57.9,18.3,48.9,18.3,37.8z"/></svg>
         </div>
        <input type="text" name="searchGame" id="searchGame" placeholder="Find a game...">
        
      </div>
    </nav>
  `;
};

export { header };
