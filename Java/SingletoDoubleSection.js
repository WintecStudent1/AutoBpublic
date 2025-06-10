$('#collapse1').on('shown.bs.collapse', function () {
  $('#OneCatch').addClass('doubleSection');
});

$('#collapse1').on('hidden.bs.collapse', function () {
  $('#OneCatch').removeClass('doubleSection');
});