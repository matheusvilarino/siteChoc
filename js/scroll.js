function scroll(elemento, velocidade){
  var href = elemento.attr("href");
  var top = $(href).offset().top;
  $("html, body").animate({scrollTop : top}, velocidade);
}

$(function(){
  $(".scroll").click(function(e){
    e.preventDefault();
    scroll($(this),500);
  });
});
