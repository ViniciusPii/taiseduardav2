$(document).ready(function () {
    $(".desk a, .footer a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 121
            }, 800);
        }
    });
});

$(document).ready(function () {
    $("#modal-menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    });
});

/* scrollspy */

/*$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top-122;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});*/

$(window).bind('scroll', function () {
    var currentTop = $(window).scrollTop();
    var elems = $('section, main');
    elems.each(function (index) {
        var elemTop = $(this).offset().top-122;
        var elemBottom = elemTop + $(this).height();
        if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            navElem.parent().addClass('active').siblings().removeClass('active');
        }
    })
});

/* galeria */

$(document).ready(function () {
    $('.portifolio-img').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });
});


/* modal */

var visibilidade = false;

function ocultarExibir() {
    if (visibilidade) {
        document.getElementById("modal-menu").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("modal-menu").style.display = "block";
        visibilidade = true;
    }
}

function ocultar() {
    document.getElementById("modal-menu").style.display = "none";
    visibilidade = false;
}

