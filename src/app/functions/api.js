let freeWeek;
let loadImages;
export function myMethod() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-a84beb3a-e548-4667-9bd4-9a40b8ce417f'),
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
                var championInfo = {'name': keys[x].name, 'title': keys[x].title, 'info': keys[x].info }
                championInfoList.push(championInfo)
                IdsImage.push(keys[x].id)
        }
    }   
        for(var f in IdsImage) {
            var freeWeekUrl = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/' + IdsImage[f] + '.png'
            var freeWeekLoadImage = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + IdsImage[f] + '_0.jpg'
            var imageInfo = {'name': IdsImage[f], 'url': freeWeekUrl}
            var loadImageInfo = {'name': IdsImage[f], 'url': freeWeekLoadImage}
            document.getElementById('list').innerHTML += '<img src="' + freeWeekUrl + '" + height=40px;' +'>'
            loadImages.push(loadImageInfo)
        } 


        function fader(message) {
            $("#sasuke").fadeOut(100, function() {
            $(this).html(message).fadeIn(900);
            
            });
        }
        var thisId=0;
        window.setInterval(function(){
            $('#img1').attr('src', loadImages[thisId].url);
            fader(loadImages[thisId].name);
            thisId++; //increment data array id
            if (thisId==loadImages.length) thisId=0;
        },2000);

    });
}

