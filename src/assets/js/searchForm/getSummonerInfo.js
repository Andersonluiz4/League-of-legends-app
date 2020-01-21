import * as style from '../style/style'

const config = require('../../json/eloAttributes.json')

var index;
export function getSummonerTier(summonerRank, eventValue) {
    if(summonerRank[0] && !eventValue) {
        index = 0;
        document.getElementById(config.soloqueue).style.display = 'none'
        document.getElementById(config.flexqueue).style.display = 'none'
        if(summonerRank[0].queueType == config.soloqueue){
            $("#queuePicker").prop("selectedIndex", 0)
            document.getElementById(config.soloqueue).style.display = 'flex'
        }
        else {
            $("#queuePicker").prop("selectedIndex", 1)
            document.getElementById(config.flexqueue).style.display = 'flex'
        }
    }
    if(summonerRank[1] && summonerRank[1].queueType == eventValue) {
        index = 1;
    }
    else {
        index = 0;
    }
    if (summonerRank[0] && summonerRank[1]) {
        document.getElementById(config.soloqueue).style.display = 'flex'
        document.getElementById(config.flexqueue).style.display = 'flex'  
    }
    if(summonerRank[0]) {
       style.championTier(summonerRank, index)
    }
    else {
        style.loader("#loader2", "#error-message", 500, 1000)
        style.errorMessage("No ranked information to display")
    }
}
