import { stringify } from 'querystring';

let freeWeek;
let loadImages;
export function myMethod() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-a358fbaf-6ffb-4ad2-b208-09a08708b3a4'),
    ])
    .then(function (response) {
        let IdsImage = [];
        let idsList = [];
        let imageList = [];
        loadImages = [];
        let championInfoList = [];
        freeWeek = []

        const keys = Object.values(response[0].data.data)
        for (var i in response[1].data.freeChampionIds)
            idsList.push(response[1].data.freeChampionIds[i])

        for(var x = 0; x < keys.length; x++) {
            if (idsList.includes(parseInt(keys[x].key))) {
                var freeWeekLoadImage = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + keys[x].name + '_0.jpg'
                var championInfo = {'name': keys[x].name, 'title': keys[x].title, 'info': keys[x].info, 'url': freeWeekLoadImage}
                championInfoList.push(championInfo)
                IdsImage.push(keys[x].id)
            }
        }   
        for(var f in IdsImage) {
            var freeWeekUrl = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/' + IdsImage[f] + '.png'
            document.getElementById('list').innerHTML += '<img src="' + freeWeekUrl + '" + height=40px;' +'>'
        }

        var thisId=0;
        window.setInterval(function(){
            $('#img1').attr('src', championInfoList[thisId].url);
            faderImage(championInfoList[thisId].url);
            faderTitle(championInfoList[thisId].title);
            faderInfo(JSON.stringify(championInfoList[thisId].info));
            thisId++;
            if (thisId==championInfoList.length) thisId=0;
        },3000 );




function faderImage(message) {
    $("#img2").fadeOut(100, function() {
    $(this).attr('src', message).fadeIn(900);
    
    });
}
function faderTitle(message) {
    $("#champ-title").fadeOut(100, function() {
    $(this).html(message).fadeIn(900);
    
    });
}

function faderInfo(message) {
    $("#info-list").fadeOut(100, function() {
    $(this).html(message).fadeIn(900);
    
    });
}
    });
}

