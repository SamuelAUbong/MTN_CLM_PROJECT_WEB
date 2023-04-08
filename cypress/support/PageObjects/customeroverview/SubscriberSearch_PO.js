class SubscriberSearch_PO {
    /* Subscriber search for different options */
    SearchRegCustomer(CustView, CustOptions, value, popups){
        if (CustView == 'Customer 360') {
            if (CustOptions == 'MSISDN') {
                cy.get('input[ng-model=inputValue]').type(value)
            } else {
                cy.get('div:nth-child(2) > select').select(CustOptions)
                cy.get('input[ng-model=inputValue]').type(value)
            }
        } else {
            cy.get('div:nth-child(1) > select').select(CustView)
            cy.get('div:nth-child(2) > select').select(CustOptions)
            cy.get('input[ng-model=inputValue]').type(value)
        }
        cy.get('form').eq(0).submit()
        if (CustOptions == 'MSISDN') {
            if (cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').should('be.exist')) {
                cy.get('.ng-isolate-scope > :nth-child(6)').each(($e1, index) => {
                    const text = $e1.text();
                    if (text.includes('Active')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    } else if (text.includes('Suspension')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    } else if (text.includes('Inactive')) {
                        cy.log(index)
                        cy.get('tr:nth-child(' + (index + 1) + ').ng-isolate-scope > :nth-child(1) > .ng-binding').click()
                    }
                })
            }
            
        } else {
            if (cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').should('be.exist')) {
                cy.get('.ng-isolate-scope > :nth-child(1) > .ng-binding').click()
            }
        }
        if (CustOptions != 'SIM Number') {
            if (CustView == 'Customer 360') {
                cy.waitUntil(() => cy.url().should('include', 'customers/overview'))
                //Close the dialog 'Demographic Mismatch Identifier' if exist
                if (popups=='true'){
                    if(cy.get('.modal.ng-isolate-scope > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.exist')){
                        cy.get('.modal.ng-isolate-scope > .modal-dialog > .modal-content > .modal-footer > .btn').click()
                    }
                }
            }
            else if (CustView == 'SIM Swap') {
            //cy.waitUntil(() => cy.url().should('include', 'SIM/sim-change'))
             cy.waitUntil(() => cy.title().should('include', 'CLM') )
             //cy.waitUntil(() => cy.get('.page-header').should('exist'))
               
            }
            else if (CustView == 'PUK Retrieval') {
            //cy.waitUntil(() => cy.url().should('include', '/PINPUKREQ'))
            }
            else if (CustView == 'Vas') {
               // cy.waitUntil(() => cy.url().should('include', '/VAS/add-vas'))
            }
        } else {
            cy.get('.ng-isolate-scope > :nth-child(4)').then(($sno) => {
                const serviceno = $sno.text()
                cy.log('Service number: ', serviceno)
            })
        }
    }

    
}
export default SubscriberSearch_PO;