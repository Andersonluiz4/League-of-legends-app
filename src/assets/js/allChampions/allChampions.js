
export function loadAllChampions() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
    ])
    .then(function (response) {
        const keys = Object.values(response[0].data.data)
        for(var x = 0; x < keys.length; x++) {
            var freeWeekLoadImage = '/assets/championImages/champion-images/' + keys[x].id + '.png'
            document.getElementById('list').innerHTML += '<div id="' + keys[x].id + '"' + 'width=300px' + 'class="all-champions"> <img id="all-images" src="' + freeWeekLoadImage + '"' + '></div>'
          }
        
});
}