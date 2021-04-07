describe('Image Snapshot', () => {
    it('Should be able to compare the Image', () => {
      cy.visit('https://secureeps.payrollstaging.com/');
  
      //snapshot for generation
      //cy.get('.logo_res > img') . matchImageSnapshot( 'Application Logo');


      // image for comparing
      //cy.get('#btnSignUp'). matchImageSnapshot( 'Application Logo');

    });
  });