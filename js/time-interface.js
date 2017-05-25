// var currentTime = function() {
//   // moment().format('MMMM Do YYYY, h:mm:ss a');
// };


$(document).ready(function() {
  $('#time').text(moment().format("LTS"));
  $('#alarm-form').submit(function() {
    var alarm = $('#tim').val();
    $('#alarm-set').text(alarm);
    event.preventDefault();

 });
});
