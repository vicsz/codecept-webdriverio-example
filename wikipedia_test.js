
Feature('Wikipedia');

Scenario('Wikipedia Home Page Test', (I) => {
	I.amOnPage('/');
  	I.seeInTitle('Wikipedia');
  	I.invokeCustomMethodFromI();
});
