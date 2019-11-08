'use strict';

describe('Plane', function(){

  // Make variables to later become instances of Objects
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    // defining airport variable as mock object named 'airport' that can call methods
    // clearForLanding and clearForTakeoff
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
  });

  it('can land in an airport', function(){
    plane.land(airport);
    // When plane attempts landing, airport should call method clearForLanding
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff form an airport', function(){
    plane.land(airport);
    plane.takeoff();
    // When plane attempts takeoff, airport should call method clearForTakeoff
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
