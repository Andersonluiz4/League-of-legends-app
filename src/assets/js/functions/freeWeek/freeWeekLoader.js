let freeWeek;
let loadImages;
var apiKey = "RGAPI-dbed690e-2f75-4410-a1b5-7138b9b49928"

export function freeWeekInfo() {
    window.axios = require('axios');

    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + apiKey)
    ])
    .then(function (response) {
        let IdsImage = [];
        let idsList = [];
        loadImages = [];
        let championInfoList = [];
        freeWeek = []

        const keys = Object.values(response[0].data.data)
        
        for (var i in response[1].data.freeChampionIds)
            idsList.push(response[1].data.freeChampionIds[i])
        
        for(var x = 0; x < keys.length; x++) {
            var skin = Math.floor(Math.random() * 2 + 1)
            if (idsList.includes(parseInt(keys[x].key))) {
                var freeWeekLoadImage = '/assets/championImages/splash-images/' + keys[x].id + '_0.jpg'
                var skinPath = '/assets/championImages/splash-images/' + keys[x].id + '_' + skin + '.jpg'
                var championInfo = {'name': keys[x].id, 'title': keys[x].title, 'info': keys[x].info, 'url': freeWeekLoadImage, 'skinUrl': skinPath}
                championInfoList.push(championInfo)
                var freeWeekPath = '/assets/championImages/small-images/' + keys[x].id + '.png'
                document.getElementById('list').innerHTML += '<img src="' + freeWeekPath + '" + height=40px;' +'>'
          }
        }
        var thisId=0;
        window.setInterval(function(){
            $('#variable-image').attr('src', championInfoList[thisId].url);
            faderImage(championInfoList[thisId].skinUrl);
            faderTitle(championInfoList[thisId].title);
            thisId++;
            if (thisId==championInfoList.length) thisId=0;
        },3000 );

        function faderImage(message) {
            $("#champion-skin").fadeOut(20, function() {
            $(this).css("background-image", "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(" + message + ")").fadeIn(700);    
            });
        }
        function faderTitle(message) {
            $("#champ-title").fadeOut(20, function() {
            $(this).html(message).fadeIn(700);
            
            });
        }

        $(document).ready(function() {
          var $magic = $(".magic"),
              magicWHalf = $magic.width() / 2;
          $(document).on("mousemove", function(e) {
            $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
          });
        });
        return keys
    });

    
}

export function onload(loader) {
    document.getElementById('loader3').style.display = 'flex'
    document.getElementById('loader3').style.marginTop = '30px'
    $('#container').css("background-image", "url(/assets/backgroundImage/Blac-texture.jpg)"
    );
  }