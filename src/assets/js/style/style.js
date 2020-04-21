
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


export function cardCss() {
    var currentX;
    var currentY;
    !function(e){e.fn.hover3d=function(t){var r=e.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},t);return this.each(function(){function t(e){i.addClass(r.hoverInClass+" "+r.hoverClass),currentX=currentY=0,setTimeout(function(){i.removeClass(r.hoverInClass)},1e3)}function s(e){var t=i.innerWidth(),s=i.innerHeight(),n=Math.round(e.pageX-i.offset().left),o=Math.round(e.pageY-i.offset().top),v=r.invert?(t/2-n)/r.sensitivity:-(t/2-n)/r.sensitivity,c=r.invert?-(s/2-o)/r.sensitivity:(s/2-o)/r.sensitivity,u=n-t/2,p=o-s/2,f=180*Math.atan2(p,u)/Math.PI-90;f<0&&(f+=360),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateY("+v+"deg) rotateX("+c+"deg)"}),a.css("background","linear-gradient("+f+"deg, rgba(255,255,255,"+e.offsetY/s*.5+") 0%,rgba(255,255,255,0) 80%)")}function n(){i.addClass(r.hoverOutClass+" "+r.hoverClass),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateX(0) rotateY(0)"}),setTimeout(function(){i.removeClass(r.hoverOutClass+" "+r.hoverClass),currentX=currentY=0},1e3)}var o=e(this),i=o.find(r.selector);currentX=0,currentY=0,r.shine&&i.append('<div class="shine"></div>');var a=e(this).find(".shine");o.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),a.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),o.on("mouseenter",function(){return t()}),o.on("mousemove",function(e){return s(e)}),o.on("mouseleave",function(){return n()})})}}(jQuery);

    $(document).ready(function() {
    $(".card-hover").hover3d({
        selector: ".card",
        shine: true,
        sensitivity: 20,
        perspective: 1000
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

export function loaderSpec(outId, inId, fadeOutTime, fadeInTime) {
    setTimeout(function() {
        $(outId).fadeOut('fast');
    }, fadeOutTime);
    setTimeout(function(id) {
        cardCss();
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

export function routesIcons() {
    $('.routeIcor').click(function() {
        $(this).parent().find('.routeIcor').css('display', 'none');
      })
}