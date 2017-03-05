
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    //Example of adding a custom method to "I"
    invokeCustomMethodFromI: function() {
      	this.say('About to check wikipedia title!!');  // Comment example .. note that console.log won't work correctly due it being run out of order from actual invokation 
      	this.seeInTitle('Wikipedia');
    }

  });
}
