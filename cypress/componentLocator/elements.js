
const email_or_mobile = '*[class*="rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J"]';
const next = '*[class*="FliLIb DL0QTb"]';
const password = '*[class*="rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc u3bW4e"]';
const login_button = '*[class*="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]';
const create_New_Doc = '*[class*="docs-homescreen-templates-templateview-preview docs-homescreen-templates-templateview-preview-showcase"]';
const docs_page_title = '*[class*="docs-hs-tmp-contractedheader-text"]';
const new_doc_title = '*[class*="docs-title-input"]';
const new_doc_body = '*[class*="kix-lineview kix-lineview-z-index"]';
const inpText1 = 'Genie AI\nBest legal minds, together';

export const elements = {
  login: () => {
    cy.get(email_or_mobile).type('sravyatest987');
    cy.get(next).click();
    cy.get(password).type('Test@987')
    cy.get(login_button).click({ force: true });
  },
    
  docsPageIsDisplayed: () => {
    cy.get(docs_page_title).should('be.visible');
      
  },
  
  createNewDoc: () => {
    cy.get(create_New_Doc).first().click();
  },

  addNameToDoc: () => {   
   cy.get(new_doc_title).then($div => {
      $div.text('TestOne');
   });
  },

  addDescToDoc: () => {   
    cy.get(new_doc_body).then($div => {
      $div.text(inpText1); 
    });
  },

};