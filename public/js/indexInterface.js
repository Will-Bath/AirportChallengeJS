$(document).ready(function() {

  var plane;
  var airport = new Airport();
  var weather = new Weather();

  // I CAN'T GET THIS JQUERY TO WORK WITH A CONDITION!
  $('#land-plane').on('click', function() {
    plane = new Plane();
    plane.land(airport);
    $('#number-of-planes').text(airport.planes().length);
    // if ($('#number-of-planes').val() === airport.planes()) {
    //   $('#number-of-planes').text(airport.planes().length);
    // } else {
    //   alert('Weather is too stormy to land a plane!');
    // };
  });



});
