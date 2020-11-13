var cover = document.getElementById('box-cover');
var boxWrap = document.getElementById('box-wrap');

cover.addEventListener('click', function(e) {
    boxWrap.classList.add('hold-still');
    cover.classList.add('off');

    setTimeout(function() {
        cover.remove();
        document.getElementById('pyro').classList.add('show');
    }, 1000)
})