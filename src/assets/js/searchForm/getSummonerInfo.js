var index;
var queue;
export function getSummonerTier(summonerRank, eventValue, loader) {

    if(summonerRank[0] && !eventValue) {
        index = 0;
    if(!queue) {
        document.getElementById(this.SoloQueue).style.display = 'flex'
        document.getElementById(this.FlexQueue).style.display = 'flex'
    }
    }
    if (summonerRank[0] && !summonerRank[1]) {
        index = 0;
        $("#queuePicker").prop("selectedIndex", 0)
        if (summonerRank[0].queueType == eventValue) {
        document.getElementById(this.SoloQueue).style.display = 'none'
        queue = this.SoloQueue

        }
        else {
        document.getElementById(this.FlexQueue).style.display = 'none'
        queue = this.FlexQueue
    }
    }

    if(summonerRank[1] && summonerRank[1].queueType == eventValue) {
        index = 1;
    }
    if(summonerRank[0]) {
    document.getElementById('info-content').style.display = 'flex'
    document.getElementById('queuePicker').style.display = 'flex'
    document.getElementById('summonerInfo').style.display = 'none'
    document.getElementById('loader').style.display = 'flex'
    document.getElementById('error-content').style.display = 'none'
    document.getElementById('wins').textContent = 'Wins: ' + summonerRank[a].wins
    document.getElementById('losses').textContent = 'Losses: ' + summonerRank[a].losses
    document.getElementById('name').textContent = summonerRank[a].summonerName
    document.getElementById('tier').textContent = 'Tier: ' + summonerRank[a].tier + " " + summonerRank[0].rank
    document.getElementById('eloImage').setAttribute("src", masteryImage.getEloImage(summonerRank[a].tier))
    var totalValue = summonerRank[a].wins + summonerRank[a].losses
    document.getElementById('rate').textContent = 'Win Rate: ' + String(Math.round((summonerRank[a].wins/totalValue) * 100) + '%')

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
