#Instructions

## Quick Start

1. TODO


## Running using codecept 

1. Ensure codecept is installed .. #npm install codecept
2. Ensure webdriverio package is installed .. #npm install webdriverio
3. Run the tests ... #codecept run --steps

## Running using npm

1. Ensure required packages are installed  ... #npm install
2. Run the tests ... #npm test


## Starting Selenium Server 

#npm install selenium-standalone
Package ships an executable for you, that runs Selenium. But package itself contains the only downloader code, you need to fetch actual Selenium distro.

#./node_modules/.bin/selenium-standalone install

Then we can run Selenium server.
#./node_modules/.bin/selenium-standalone start