let freeWeek;
export function myMethod() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-a97a3000-9b03-4680-b0e2-bc47b80d8d57'),
    ])
    .then(function (response) {
        let IdsImage = [];
        let idsList = [];
        let imageList = [];
        freeWeek = []

        const keys = Object.values(response[0].data.data)
        for (var i in response[1].data.freeChampionIds)
            idsList.push(response[1].data.freeChampionIds[i])

        for(var x = 0; x < keys.length; x++)
            if (idsList.includes(parseInt(keys[x].key))) 
                IdsImage.push(keys[x].id)

        for(var f in IdsImage) {
            var url = 'http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/' + IdsImage[f] + '.png'
            var imageInfo = {'name': IdsImage[f], 'url': url}
            document.getElementById('list').innerHTML += '<img src="' + imageInfo.url + '" + height=40px;' + 'onmouseover="this.src=http://icons.iconarchive.com/icons/fasticon/angry-birds/128/red-bird-icon.png"' +'>'
            freeWeek.push(imageInfo.url)
        }            

    return imageList
})
}


export function imagesChange() {
    console.log(freeWeek)
    var images = ["https://www.smartplacecoworking.com.br/coworking/imagens/onde-tem-endereco-fiscal-comercio.jpg", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG2&w=327&h=420", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG3&w=327&h=420",
                "https://www.smartplacecoworking.com.br/coworking/imagens/onde-tem-endereco-fiscal-comercio.jpg", "http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG5&w=327&h=420","http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG6&w=327&h=420","http://placeholdit.imgix.net/~text?txtsize=85&bg=ef4135&txtclr=ffffff&txt=IMG7&w=327&h=420"
              ];

  var i = 0;
  var renew = setInterval(function(){
        if(i==images.length) i=0;
          document.getElementById("img1").src = images[i]; 
        if(i+1==images.length) i=-1;
            document.getElementById("img2").src = images[i+1];
        if(i+2==images.length) i=-2;
            document.getElementById("img3").src = images[i+2];
        i+=3;

      
  },1000);
}