let config = require('../../../json/eloAttributes.json')
window.axios = require('axios');

var finalList = [];
export function getSpectateImages(playersIds) {
    
    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
    ])
    .then(function (response) {
        const keys = Object.values(response[0].data.data)
        for(var id in playersIds) {
            var championInfo = {'name': playersIds[id].summonerName, 'champ': playersIds[id].championId, 'teamId': playersIds[id].teamId}
            var idsInfo = [championInfo.champ]
            for(var data = 0; data < keys.length; data++) {
                if (idsInfo.includes(parseInt(keys[data].key))) {
                    var freeWeekLoadImage = '/assets/loading/' + keys[data].name + '_0.jpg'
                    var finalDict = {'name': championInfo.name, 'champ': championInfo.champ, 'teamId': championInfo.teamId, 'url': freeWeekLoadImage}
                    finalList.push(finalDict)
                }
            }
        }
        return finalList
    })
}
