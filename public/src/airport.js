// Strict mode - prevents certain actions, throws more errors;
// Easier to write 'secure' JavaScript
'use strict';

// Creating object model (Class) called Airport, with argument weather
function Airport(weather){
  // Creating instance variable _weather which is defined as a condition:
  // if _weather has been defined as var weather, then this._weather = weather;
  // else, make _weather an instance of the Weather object
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  // Creating instance variable of an array that will hold Plane instances
  this._hangar = [];
}

// Method to return contents of hangar (.planes => array of Planes)
Airport.prototype.planes = function(){ return this._hangar; };

// Method with condition to prevent plane from landing when weather is stormy
Airport.prototype.clearForLanding = function(plane) {
  // if var _weather, when isStormy called on it, returns true:
  if(this._weather.isStormy()){
    throw new Error('cannot land during storm');
  } else {
    // else, push plane instance to airport's array
    this._hangar.push(plane);
  }
};

// Method with condition to prevent plane from taking off when weather is stormy
Airport.prototype.clearForTakeoff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  // else, remove plane instance from airport array
  this._hangar = [];
};
