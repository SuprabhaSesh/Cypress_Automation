describe ('First TC', ()=> {

    it ('should open google', () => {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf'). type ('gmail')
                        . type ('{enter}')
        cy.get('[href="https://www.google.com/gmail/"] > .LC20lb'). click()
        cy.get('.header__nav--ltr > :nth-child(2) > .h-c-header__nav-li-link'). click()
        cy.visit ('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
                        .type('suprabha.s@expressexcise.com')
                    

    })
})
// Test Case if failing when trying to go to gmail - says Security Error