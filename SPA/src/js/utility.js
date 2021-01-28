const platformsIcons = (platform) => {
  switch (platform) {
  case "pc":
    return "<img src='/src/images/icons/windows.svg' alt='' class='platform__icon'>"
 
  case "playstation":
    return "<img src='src/images/icons/ps4.svg' alt='' class='platform__icon'>"
 
  case "xbox":
    return "<img src='/src/images/icons/xbox.svg' alt='' class='platform__icon'>"
 
  case "ios":
    return "<img src='/src/images/icons/mobile.svg' alt='' class='platform__icon'>"
 
  case "android":
    return "<img src='src/images/icons/androi.svg' alt='' class='platform__icon'>"
 
  case "mac":
    return "<img src='src/images/icons/apple.svg' alt='' class='platform__icon'>"
 
  case "linux":
    return "<img src='src/images/icons/linux.svg' alt='' class='platform__icon'>"
 
  case "nintendo":
    return "<img src='src/images/icons/switch.svg' alt='' class='platform__icon'>"
 
  case "atari":
    return "<img src='src/images/icons/ghost-solid.svg' alt='' class='platform__icon'>"
 
  case "commodore-amiga":
    return "<img src='src/images/icons/ghost-solid.svg' alt='' class='platform__icon'>"
 
  case "sega":
    return "<img src='src/images/icons/ghost-solid.svg' alt='' class='platform__icon'>"
 
  case "3do":
    return "<img src='src/images/icons/ghost-solid.svg' alt='' class='platform__icon'>"

  case "neo-geo":
    return "<img src='src/images/icons/ghost-solid.svg' alt='' class='platform__icon'>"

  case "web":
    return "<img data-id='14' src='src/images/icons/chrome.svg' alt='' class='platform__icon'>"
  }
};

// const storeIcons = {
//   steam:
//     "<img data-id='1' src='src/images/icons/steam.svg' alt='' class='mx-2' style='height :2em;'>",
//     break
//   "playstation-store":
//     "<img data-id='2' src='src/images/icons/ps4.svg' alt='' class='mx-2' style='height :2em;'>",
//   "xbox-store":
//     "<img data-id='3' src='src/images/icons/xbox.svg' alt='' class='mx-2' style='height :2em;'>",
//   "apple-appstore":
//     "<img data-id='4' src='src/images/icons/applestore.svg' alt='' class='mx-2' style='height :2em;'>",
//   gog:
//     "<img data-id='5' src='src/images/icons/gog.svg' alt='' class='mx-2' style='height :2em;'>",
//   nintendo:
//     "<img data-id='6' src='src/images/icons/switch.svg' alt='' class='mx-2' style='height :2em;'>",
//   xbox360:
//     "<img data-id='7' src='src/images/icons/xbox.svg' alt='' class='mx-2' style='height :2em;'>",
//   "google-play":
//     "<img data-id='8' src='src/images/icons/googleplay.svg' alt='' class='mx-2' style='height :2em;'>",
//   itch:
//     "<img data-id='9' src='src/images/icons/itch.svg' alt='' class='mx-2' style='height :2em;'>",
//   "epic-games":
//     "<img data-id='10' src='src/images/icons/epic.svg' alt='' class='mx-2' style='height :2em;'>",
// };

export { platformsIcons }