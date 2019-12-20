let freeWeek;
export function myMethod() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-e5551933-5e01-413f-a912-bc67364e4a90'),
    ])
    .then(function (response) {
        let IdsImage = [];
        let idsList = [];
        let imageList = [];
        let loadImages = [];
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

            loadImages.push(loadImageInfo.url)
        }            

        var a  = 0;
        var renew = setInterval(function() {
            if(a==loadImages.length) a=0;
                document.getElementById("img1").src = loadImages[a]
            if(a+1==loadImages.length) a=-1;
                document.getElementById("img1").src = loadImages[a++];
            if(a+2==loadImages.length) a=-2;
                document.getElementById("img1").src = loadImages[a+2];

            i+=3;

        },500)
        
})
}

export function imagesChange() {
    var images = ["https://www.smartplacecoworking.com.br/coworking/imagens/onde-tem-endereco-fiscal-comercio.jpg", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG2&w=327&h=420", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG3&w=327&h=420",
                "https://www.smartplacecoworking.com.br/coworking/imagens/onde-tem-endereco-fiscal-comercio.jpg", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG5&w=327&h=420","http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG6&w=327&h=420","http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG7&w=327&h=420"
              ];

  var i = 0;
  var renew = setInterval(function(){
        if(i==images.length) i=0;
          document.getElementById("img1").src = images[i]; 
        if(i+1==images.length) i=-1;
            document.getElementById("img1").src = images[i+1];
        if(i+2==images.length) i=-2;
            document.getElementById("img1").src = images[i+2];
        i+=3;

      
  },1000);
}