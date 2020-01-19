
export function onLoadStyle() {
    $(document).ready(function() {
        var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
        $(document).on("mousemove", function(e) {
            $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
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