
Feature('Sample');

Scenario('test something', (I) => {
	I.amOnPage('http://www.google.com');
  	I.see('Welcome');
});
