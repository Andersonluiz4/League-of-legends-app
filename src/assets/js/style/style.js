
import * as masteryImage from '../functions/mastery/userMastery'
export function onLoadStyle() {
    $(document).ready(function() {
        var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
        $(document).on("mousemove", function(e) {
            $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
        });
    });
}
export function onload(loader) {
    document.getElementById('loader3').style.display = 'flex'
    document.getElementById('loader3').style.marginTop = '30px'
    $('#container').css("background-image", "url(/assets/backgroundImage/Blac-texture.jpg)"
    );
}
export function loader(outId, inId, fadeOutTime, fadeInTime) {
    setTimeout(function() {
        $(outId).fadeOut('fast');
    }, fadeOutTime);
    setTimeout(function(id) {
        $(inId).fadeIn('fast');
    }, fadeInTime);
}

export function errorMessage(errorMessage) {
    document.getElementById('error-content').style.display = 'flex'
    document.getElementById('error-message').style.display = 'none'
    document.getElementById('loader2').style.display = 'flex'
    document.getElementById('error').textContent = errorMessage
    document.getElementById('info-content').style.display = 'none'
}

export function championTier(summonerRank, index) {
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