
Feature('Wikipedia');

Scenario('Wikipedia Home Page Test', (I, homePage) => {
	
	I.amOnPage('/');
  	I.confirmOnPage(homePage);

  	I.invokeCustomMethodFromI();
  	homePage.doSearch('Toronto');
});
