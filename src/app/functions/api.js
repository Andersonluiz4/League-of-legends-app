import { stringify } from 'querystring';

let freeWeek;
let loadImages;
export function myMethod() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882'),
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
                var skinUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + keys[x].name + '_1.jpg'
                var championInfo = {'name': keys[x].name, 'title': keys[x].title, 'info': keys[x].info, 'url': freeWeekLoadImage, 'skinUrl': skinUrl}
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
            faderImage(championInfoList[thisId].skinUrl);
            faderTitle(championInfoList[thisId].title);
            thisId++;
            if (thisId==championInfoList.length) thisId=0;
        },3000 );

        function faderImage(message) {
            $("#sasuke").fadeOut(100, function() {
            $(this).css("background-image", "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + message + ")").fadeIn(900);    
            });
        }
        function faderTitle(message) {
            $("#champ-title").fadeOut(100, function() {
            $(this).html(message).fadeIn(900);
            
            });
        }

        
    });
}

