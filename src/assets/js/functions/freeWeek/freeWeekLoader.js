
import * as loadStyle from '../../style/style'

var championInfoList = [];
let config = require('../../../json/eloAttributes.json')
window.axios = require('axios');

export function freeWeekInfo(value) {
    
    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + config.apikey)
    ])
    .then(function (response) { 
        let idsList = [];
        const keys = Object.values(response[0].data.data)
        if(!value) {
            for (var id in response[1].data.freeChampionIds) {
                idsList.push(response[1].data.freeChampionIds[id])
            }
            for(var data = 0; data < keys.length; data++) {
                var skin = Math.floor(Math.random() * 2 + 1)
                if (idsList.includes(parseInt(keys[data].key))) {
                    var freeWeekLoadImage = '/assets/championImages/splash-images/' + keys[data].id + '_0.jpg'
                    var skinPath = '/assets/championImages/splash-images/' + keys[data].id + '_' + skin + '.jpg'
                    var championInfo = {'name': keys[data].id, 'title': keys[data].title, 'info': keys[data].info, 'url': freeWeekLoadImage, 'skinUrl': skinPath}
                    championInfoList.push(championInfo)
                    var freeWeekPath = '/assets/championImages/small-images/' + keys[data].id + '.png'
                    document.getElementById('list').innerHTML += '<img src="' + freeWeekPath + '" + height=40px;' +'>'
                }
            }
            loadStyle.onLoadStyle()
        } else {
            axios.all([
            window.axios.get('https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + value + '?api_key=' + config.apikey)
            ])
            .then(function (id) { 
                var mostPlayedChamp = [id[0].data[0].championId]
                for(var data = 0; data < keys.length; data++) {
                    if (mostPlayedChamp.includes(parseInt(keys[data].key))) {
                        var freeWeekLoadImage = '/assets/championImages/splash-images/' + keys[data].name + '_0.jpg'
                        console.log(freeWeekLoadImage)
                        $("#info-content").css("background-image", "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + freeWeekLoadImage + ")");
                    }
                }
            });

        }
    
    });
}
   
export function interval() {
    var thisId=0;
    window.setInterval(function() {
        $('#variable-image').attr('src', championInfoList[thisId].url);
        faderImage(championInfoList[thisId].skinUrl);
        faderTitle(championInfoList[thisId].title);
        thisId++;
        if (thisId==championInfoList.length) thisId=0;
    },2500 );
}

function faderImage(message) {
    $("#champion-skin").fadeOut(20, function() {
    $(this).css("background-image", "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + message + ")").fadeIn(500);    
    });
}
function faderTitle(message) {
    $("#champ-title").fadeOut(20, function() {
    $(this).html(message).fadeIn(500);
    
    });
}