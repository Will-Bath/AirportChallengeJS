'use strict';

describe('Weather',function(){
  // Defining variable which will later be instance of Weather object
  var weather;

  beforeEach(function(){
    // make weather instance of Weather object
    weather = new Weather();
  });

  // Validating that when weather is calculated as stormy,
  // the isStormy method should return true (be truthy)
  it('gives stormy sometimes', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  // Validating that when weather is calculated as normal,
  // the isStormy method should return false (be falsy)
  it('gives not stormy other times', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
