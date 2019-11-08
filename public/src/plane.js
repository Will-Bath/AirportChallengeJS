// Strict mode - prevents certain actions, throws more errors;
// Easier to write 'secure' JavaScript
'use strict';

// Creating Object model (class) for instances of Plane
function Plane(){}

// Method for landing plane (function uses airport as argument)
Plane.prototype.land = function(airport){
  // calling clearForLanding method on airport (uses argument of plane instance)
  airport.clearForLanding(this);
  // Assigns the plane's location to be that of the airport it lands in
  this._location = airport;
};

// Method for taking off plane (doesn't need argument of airport
// to take off from an airport)
Plane.prototype.takeoff = function(){
  // Removes the plane from that location using the method clearForTakeoff
  this._location.clearForTakeoff('');
};
