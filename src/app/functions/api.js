let freeWeek;
let loadImages;
var apiKey = "RGAPI-dfe86454-366a-4f7e-beca-ede838bdcfe2"
export function myMethod() {
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
    });
}

export function onload(loader) {
    console.log("0")
    document.getElementById('loader3').style.display = 'flex'
    document.getElementById('loader3').style.marginTop = '30px'
    $('#container').css("background-image", "url(/assets/Blac-texture.jpg)"
    );
  }

export function getEloImage(tier) {
    if (tier == 'WOOD') {
      return  "/assets/eloImages/Emblem_Iron.png";
    }
    else if (tier == 'BRONZE') {
      return "/assets/eloImages/Emblem_Bronze.png";
    }
    else if (tier == 'SILVER') {
      return "/assets/eloImages/Emblem_Silverd.png";
    }
    else if (tier == 'GOLD') {
      return "/assets/eloImages/Emblem_Gold.png";
    }
    else if (tier == 'PLATINUM') {
      return "/assets/eloImages/Emblem_Platinum.png";
    }
    else if (tier == 'DIAMOND') {
      return "/assets/eloImages/Emblem_Diamond.png";
    }
    else if (tier == 'MASTER') {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == 'GRANDMASTER') {
        return "/assets/eloImages/Emblem_Master.png";
    }
    else if (tier == 'CHALLENGER') {
        return "/assets/eloImages/Emblem_Challenger.png";
      }
    else {
      return ''
    }
  }