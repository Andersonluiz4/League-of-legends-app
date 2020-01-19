
import * as style from '../style/style'
export function loadAllChampions() {
  window.axios = require('axios');

  axios.all([
      window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
  ])
  .then(function (response) {
      const keys = Object.values(response[0].data.data)
      for(var x = 0; x < keys.length; x++) {
          var freeWeekLoadImage = '/assets/championImages/loading/' + keys[x].id + '_0.jpg'
          document.getElementById('list').innerHTML += '<img id="' + keys[x].id + '"' + 'class="img-thumbnail" src="' + freeWeekLoadImage + '"' + 'naruto>'
          document.getElementById(keys[x].id).style.height += '190px';
          document.getElementById(keys[x].id).style.width += '120px';
          document.getElementById(keys[x].id).style.margin += '10px';
          document.getElementById(keys[x].id).style.padding += '0px';
          
        }
        style.onLoadStyle()
  });
}