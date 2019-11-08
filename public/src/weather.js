// Strict mode - prevents certain actions, throws more errors;
// Easier to write 'secure' JavaScript
'use strict';

// Creating Object model (Class) for weather
function Weather(){
  // instance variable => constant for 50/50 chance that weather is stormy
  this._CHANCE_OF_STORMY = 0.5;
}

// Method that randomly determines whether weather is stormy or not
Weather.prototype.isStormy = function(){
  // Math.random() => Returns float number between 0 and 1;
  // If Math.random() is greater than 0.5 => return true (weather is stormy)
  return (Math.random() > this._CHANCE_OF_STORMY);
};
