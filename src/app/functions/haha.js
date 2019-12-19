var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Http = new XMLHttpRequest();
const url='https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6a04504e-60a8-4960-82b1-1d9efa9684c2';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}