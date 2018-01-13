/*
*/
$('#a1').show();
$('#a2').hide();
$('#a3').hide();
$('audio').hide();

$('#a1').on('click', function(){
  $('#a2').show();
})

$('#a2').on('click', function(){
  $('#a3').show();
})

$('#a3').on('click', function(){
  /* $('audio').play(); */
  $('audio').find();
  ($('audio').attr('autoplay','active'));
})
