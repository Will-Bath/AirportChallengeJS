'use strict';

describe('Airport', function(){
  // Create variables for airport, plane and weather
  // to be defined as Object instances later
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    // define weather as Jasmine mock object
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    // var airport is now instance of Airport class
    airport = new Airport(weather);
    // define plane as spy object that is named plane and can call method land
    plane = jasmine.createSpy('plane', ['land']);
  });

  // _hangar returned from .planes method should be empty to start
  it('starts off with no planes', function(){
    expect(airport.planes()).toEqual([]);
  });

  // Section of tests where weather is normal
  describe('under normal conditions', function(){

    // Before each it test,
    beforeEach(function(){
      // set isStormy to return false => normal weather
      weather.isStormy.and.returnValue(false);
    })

    it('can clear planes for landng', function(){
      // calling clearForLanding grants permission for plane to land
      airport.clearForLanding(plane);
      // Successful landing => airport hangar array now has plane inside
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      // Successful landing then takeoff => hangar should be empty
      expect(airport.planes()).toEqual([]);
    });
  });

  // Section of tests where weather is set as stormy
  describe('under stormy conditions', function(){
    // Every it test will run with stormy weather
    beforeEach(function(){
      weather.isStormy.and.returnValue(true)
    });

    it ('does not clear planes for landing', function(){
      // Instead of pushing plane to hangar array, should throw error instead
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    })

    it ('does not clear planes for takeoff', function(){
      // Instead of removing airport from hangar, should throw error instead
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
