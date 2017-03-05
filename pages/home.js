
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  doSearch(query){
  	I.say('Performing search for ' + query);
  	I.fillField('search', query);
  	I.click('[type=submit]');
  },

  confirmOnPage(){
  	I.seeInTitle('Wikipedia');
  }
}
