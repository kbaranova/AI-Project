//fade in
$('.intro').fadeIn(2000);
$('.arrow_down').fadeIn(3000);

//scroll animation down
$(function() {
  function scroll(){
   $('.arrow_down')
     .animate({top:10, opacity:0.1},1000)
     .animate({top:0, opacity:1},1000, scroll);
  };
  scroll();
});

$('.arrow_up').fadeIn(3000);

//scroll animation up
$(function() {
  function scroll(){
   $('.arrow_up')
     .animate({top:-10, opacity:0.1},1000)
     .animate({top:0, opacity:1},1000, scroll);
  };
  scroll();
});

//scroll
$("a").on('click', function(event) {

    var scrollUp = this.hash;

    if (this.hash !== "") {
          event.preventDefault();

      $('html, body').animate({scrollTop: $(scrollUp).offset().top}, 800, function(){
      window.location.hash = scrollUp;
      });
    }
});

//button-first page
var current_index = 0;
var article_number = $('.intro_text').length;

$('#button').click(function(){
  var next = current_index + 1;
  if (next > article_number - 1){
    next = 0;
  }

  $('.intro_text').eq(current_index).animate({'opacity':'0'});
  $('.intro_text').eq(next).stop().css({'opacity':'1'});
  $('.intro_text').eq(next).animate({'opacity':'1'});

  current_index = next;
});



//2nd page
//scrolls
var lastDrag = 0;
function dragMe(){
var valueText = parseInt(document.getElementById("slider_bar").value);
var nextDisplay, start, end;

    if (lastDrag < valueText) {
      nextDisplay='block';
      start = lastDrag;
      end = valueText;

    } else {
      nextDisplay='none';
      start = valueText;
      end = lastDrag;
    }

    for (var i = start; i < end; i++) {
      var ii = i+1;
      document.getElementById("circle_"+ii).style.display = nextDisplay;
      document.getElementById("history_"+ii).style.display = nextDisplay;
      var line = document.getElementById("line_"+i);
      if (line != null)
        line.style.display = nextDisplay;
    }
    lastDrag = valueText;
}

//3rd page
//object animation
$(function() {
    var rect = $("svg"), degree = 0, timer;
    rotate();
    function rotate() {

        rect.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        rect.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
});

//Connect objects to texto
$('.objects').click(function(){

      var indice_cliced = $(this).index();
      var indice_active = $('.active_object').index();

      if( indice_active != indice_cliced ){

        $('.active_object svg').removeAttr('style');
        $('.active_object').removeClass('active_object');
        $('.active_article').removeClass('active_article');

        $('.myth').stop().animate( {'opacity':'0'} );
        $('.fact').stop().animate( {'opacity':'0'} );
        $('.myth_button').css({'text-decoration':'none'});
        $('.fact_button').css({'text-decoration':'none'});

        $(this).addClass('active_object');
        $(this).find('svg').animate({top:100, left:-280},1000, function(){

          $('.myth').eq( indice_cliced-1 ).stop().css( {'opacity':'1'} );
          $('.myth').eq( indice_cliced-1 ).animate( {'opacity':'1'} );

          $('.myth_button').css({'text-decoration':'underline'});

          $('.myth').eq( indice_cliced-1 ).closest('.article').addClass('active_article');

        })
    };
  });

$('.myth_button').click(function(){
  if($('.active_article').length) {
    $('.myth_button').css({'text-decoration':'underline'});
    $('.fact_button').css({'text-decoration':'none'});

    $('.active_article .myth').stop().css( {'opacity':'1'} );
    $('.active_article .myth').animate( {'opacity':'1'} );
    $('.fact').stop().animate( {'opacity':'0'} );
  }
});

$('.fact_button').click(function(){
  if($('.active_article').length) {
    $('.myth_button').css({'text-decoration':'none'});
    $('.fact_button').css({'text-decoration':'underline'});

    $('.active_article .fact').stop().css( {'opacity':'1'} );
    $('.active_article .fact').animate( {'opacity':'1'} );
    $('.myth').stop().animate( {'opacity':'0'} );
  }
});

//page 4

//slide animation

$('.arrow_right').click(function(){
    $('.group-1').css('z-index','0');
    $('.group-2').css('z-index','1');
    $('.group-2').animate( {'left':'-1300px'} );
    $('.group-1').animate( {'left':'83px'} );

  });

  $('.arrow_left').click(function(){
    $('.group-1').css('z-index','1');
    $('.group-2').css('z-index','0');
    $('.group-1').animate( {'left':'1300px'} );
    $('.group-2').animate( {'left':'83px'} );

    });

//articles appear
$('.image').click(function(){

  $('#image_list').fadeOut();

  var article = $(this).attr('data-target');
  $(article).fadeIn();

});
$('.back_button').click(function(){

   $('.info-article').fadeOut();
   $('#image_list').fadeIn();
 });

 //page 5
 // citation animation
 var active_citation = 0;
function slideCitation() {
  setTimeout(function() {
     $('.citation').eq(active_citation).fadeOut();
     active_citation+=1;
     if (active_citation  == $('.citation').length) {
       active_citation = 0
     }
     $('.citation').eq(active_citation).fadeIn();

      slideCitation();
   },5000);
}
slideCitation();

//slider number range
 var slider = document.getElementById("slider");
var output = document.getElementById("numbers");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//slider button

function slider_range() {
    var value = document.getElementById("slider").value;

  if (value <= 5) {
    document.getElementById("answer_2").style.display = 'block';
    document.getElementById("answer_1").style.display = 'none';

  } else {
    document.getElementById("answer_2").style.display = 'none';
    document.getElementById("answer_1").style.display = 'block';
  }

}
