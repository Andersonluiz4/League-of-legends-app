import * as masteryImage from '../../js/functions/mastery/userMastery'
import { loader } from '../style/style'

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
        document.getElementById('info-content').style.display = 'flex'
        document.getElementById('queuePicker').style.display = 'flex'
        document.getElementById('summonerInfo').style.display = 'none'
        document.getElementById('loader').style.display = 'flex'
        document.getElementById('error-content').style.display = 'none'
        document.getElementById('wins').textContent = 'Wins: ' + summonerRank[index].wins
        document.getElementById('losses').textContent = 'Losses: ' + summonerRank[index].losses
        document.getElementById('name').textContent = summonerRank[index].summonerName
        document.getElementById('tier').textContent = 'Tier: ' + summonerRank[index].tier + " " + summonerRank[0].rank
        document.getElementById('eloImage').setAttribute("src", masteryImage.getEloImage(summonerRank[index].tier))
        var totalValue = summonerRank[index].wins + summonerRank[index].losses
        document.getElementById('rate').textContent = 'Win Rate: ' + String(Math.round((summonerRank[index].wins/totalValue) * 100) + '%')
    }
    else {
        document.getElementById('error-content').style.display = 'flex'
        document.getElementById('error-message').style.display = 'none'
        document.getElementById('loader2').style.display = 'flex'
        loader("#loader2", "#error-message", 500, 1000)
        document.getElementById('info-content').style.display = 'none'
        document.getElementById('error').textContent = "Nothing to display"
    }
}
