/*
Ce qui doit être visible lorsqu'on "ouvre" la carte
*/
$('#a1').hide();
$('#a2').hide();
$('#a3').hide();

/*
Click sur chaque paragraphe
*/
$('h1').on('click', function(){
  $('#a1').show();
})


$('#a1').on('click', function(){
  $('#a2').show();
})

$('#a2').on('click', function(){
  $('#a3').show();
})

/*
Démarrage/gestion de la partie audio
*/
$('#a3').on('click', function(){
  ($('audio').attr('autoplay','active'));
})
