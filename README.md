## Google Docs Cypress Tests
This is small guide to facilitate understanding of the Google Docs Cypress tests

## Cypress Installation
Command to install Cypress using npm using  $npm install cypress --save-dev 
or
Command to install Cypress using yarn $yarn add cypress --dev

## Getting started
Clone the repo and run `yarn` to install the dependencies. 
$git clone

## Open Cypress
In command prompt from the project folder type $yarn cypress open

## Projects Structure
For reusability all the elements are maintainee under cypress->componentLocator folder
The actual tests are maintained under cypress->integration folder

### Issues faced and handled 
1) While Login to http://docs.google.com/ it navigates to different origin URL. So please run the tests in Firefox browser.
2) Exception handling code is handling any exceptions raised during tests. The code is available at cypress->support->index.js
3) Unable to use type() method to insert text in google docs so used another method.
However type allows new line and formatting but the other method doesn't.
4) After entering title and text to the document the google docs should automatically save to google drive but in this case google docs is detecting cypress proxy and unable to save.
5) Sometimes the creating new doc page is not loading or reloading. It's google issue.