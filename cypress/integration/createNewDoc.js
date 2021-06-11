import {elements} from '../componentLocator/elements';

context('Actions', () => {
  before(() => {
    cy.visit('http://docs.google.com/');
      elements.login();
      elements.docsPageIsDisplayed();
  });

  it('Create a new google doc. Add name and text in the body', () => {
    elements.createNewDoc();
    elements.addNameToDoc();  
    elements.addDescToDoc();
  });  
});
