
Feature('Wikipedia');

Scenario('Wikipedia Home Page Test', (I, homePage) => {
	I.amOnPage('/');
  	I.seeInTitle('Wikipedia');
  	I.invokeCustomMethodFromI();
  	homePage.doSearch('Toronto');
});
