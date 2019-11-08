'use strict';

describe ('Feature test:', function(){

  // Creating variables to later use as instances of Objects
  var plane;
  var airport;

  // Before running each of these describe methods:
  beforeEach(function(){
    // make vars instances of Plane and Object
    plane = new Plane();
    airport = new Airport();
  });

  // Section that tests functionality when weather isn't stormy
  describe('under normal conditions',function(){
    // before each it test,
    beforeEach(function(){
      // set Math.random to return 0, therefore weather be normal
      spyOn(Math,'random').and.returnValue(0);
    });

    it('planes can be instructed to land at an airport', function(){
      // call .land method (plane.js) on plane instance, with argument
      // of airport instance;
      plane.land(airport);
      // The array returned from .planes method should now include the landed plane
      expect(airport.planes()).toContain(plane);
    });

    // Land plane, then have it take off;
    // plane shouldn't be in planes array
    it('planes can be instructed to takeoff', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  // Section that tests functionality when weather is stormy
  describe('under stormy conditions',function(){

    it('blocks takeoff when weather is stormy', function(){
      // Start off making weather normal so that plane can land (during Arrange)
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      // Now trigger the weather to be stormy to test that plane can't takeoff
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      // with isStormy now being true, clearForTakeoff should prevent plane
      // from calling method takeoff and raise error instead
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
      // As a result, plane instance should still be in airport's planes array (hangar)
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stormy', function(){
      // Start off making weather normal so that plane can land (during Arrange)
      spyOn(Math,'random').and.returnValue(1);
      // with isStormy now being true, clearForLanding should prevent plane
      // from calling method land and raise error instead
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      // As a result, plane instance shouldn't be in hangar because it was denied landing
      expect(airport.planes()).toEqual([]);
    });
  });
});
