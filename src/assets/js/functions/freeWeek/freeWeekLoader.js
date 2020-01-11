let freeWeek;
let loadImages;
const config = require('../../../json/eloAttributes.json')



export function freeWeekInfo() {
    window.axios = require('axios');
    axios.all([
        window.axios.get('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'),
        window.axios.get('https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + config.apikey)
    ])
    .then(function (response) {
        let idsList = [];
        loadImages = [];
        let championInfoList = [];
        freeWeek = []

        const keys = Object.values(response[0].data.data)
        
        for (var id in response[1].data.freeChampionIds)
            idsList.push(response[1].data.freeChampionIds[id])
        
        for(var data = 0; data < keys.length; data++) {
            var skin = Math.floor(Math.random() * 2 + 1)
            if (idsList.includes(parseInt(keys[data].key))) {
                var freeWeekLoadImage = '/assets/championImages/splash-images/' + keys[data].id + '_0.jpg'
                var skinPath = '/assets/championImages/splash-images/' + keys[data].id + '_' + skin + '.jpg'
                var championInfo = {'name': keys[data].id, 'title': keys[data].title, 'info': keys[data].info, 'url': freeWeekLoadImage, 'skinUrl': skinPath}
                championInfoList.push(championInfo)
                interval(championInfoList, faderImage, faderTitle)
                var freeWeekPath = '/assets/championImages/small-images/' + keys[data].id + '.png'
                document.getElementById('list').innerHTML += '<img src="' + freeWeekPath + '" + height=40px;' +'>'
          }
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
        $(document).ready(function() {
          var $magic = $(".magic"),
              magicWHalf = $magic.width() / 2;
          $(document).on("mousemove", function(e) {
            $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
          });
        });
    });
}

function interval(championInfoList, faderImage, faderTitle) {
    var thisId=0;
    window.setInterval(function(){
        $('#variable-image').attr('src', championInfoList[thisId].url);
        faderImage(championInfoList[thisId].skinUrl);
        faderTitle(championInfoList[thisId].title);
        thisId++;
        if (thisId==championInfoList.length) thisId=0;
    },3000 );
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