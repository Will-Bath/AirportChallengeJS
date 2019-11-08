describe ('fizzbuzz', function(){

  var fizzbuzz

  describe ('knows what a number is...', function(){

    beforeEach(function(){
      fizzbuzz = new Fizzbuzz();
    })

    it ('divisible by 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it ('divisible by 5', function(){
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it ('divisible by 15', function(){
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe ('knows if number is not divisible', function(){
    it ('is any other number', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(11)).toEqual(11)
    })
  });
});
