///<reference types = 'cypress' />


 import Login_PO from "../../support/PageObjects/Frequent/Login_PO"
 import SubscriberSearch_PO from "../../support/PageObjects/customeroverview/SubscriberSearch_PO";

describe('New SIM Registration Customer360', function(){
    const login_PO = new Login_PO();
    const subscribersearch_PO = new SubscriberSearch_PO()
    beforeEach( () => {
        login_PO.LaunchURL()
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    });

    before(function() {
        cy.fixture('credentials').then(function (data) {
            globalThis.data = data;
        });
        
        cy.fixture('TestData').then(function (data1) {
            globalThis.data1 = data1;
        });
    });


    it('TC007_Validate that the subscriber is available on CLM Using Customer360_MSISDN', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC007.CustView,data1.TC007.CustOptions,data1.TC007.value);
    });

    it('TC008_Validate that the subscriber is available on CLM Using Customer360_Customer ID', () =>{
        subscribersearch_PO.SearchRegCustomer(data1.TC008.CustView,data1.TC008.CustOptions,data1.TC008.value)
    });

    it('TC009_Validate that the subscriber is available on CLM Using Customer360_AccountID', ()=>{
        subscribersearch_PO.SearchRegCustomer(data1.TC009.CustView,data1.TC009.CustOptions,data1.TC009.value)
    });

    it('TC010_Validate that the subscriber is available on CLM using Customer360_SIM Number', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC010.CustView,data1.TC010.CustOptions,data1.TC010.value);
    });

    it('TC026_Validate that the subscriber is available on CLM using Customer360_Customer Name', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC026.CustView,data1.TC026.CustOptions,data1.TC026.value);
    });

})


describe('New SIM Registration SimSwap', function(){
    const login_PO = new Login_PO();
    const subscribersearch_PO = new SubscriberSearch_PO()
    beforeEach( () => {
        login_PO.LaunchURL()
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    });

    before(function() {
        cy.fixture('credentials').then(function (data) {
            globalThis.data = data;
        });
        
        cy.fixture('TestData').then(function (data1) {
            globalThis.data1 = data1;
        });
    });


    it('TC011_Validate that the subscriber is available on CLM using SimSwap_CustomerName', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC011.CustView,data1.TC011.CustOptions,data1.TC011.value);
    });


    it('TC012_Validate that the subscriber is available on CLM via SimSwap_CustomerID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC012.CustView,data1.TC012.CustOptions,data1.TC012.value);
    });

    it('TC013_Validate that the subscriber is available on CLM using  SimSwap_Old/New AccountID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC013.CustView,data1.TC013.CustOptions,data1.TC013.value);
    });

    it('TC014_Validate that the subscriber is available on CLM using SimSwap_MSISDN', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC014.CustView,data1.TC014.CustOptions,data1.TC014.value);
    });

    it('TC015_Validate that the subscriber is available on CLM using SimSwap_SIMNumber', () => {
        subscribersearch_PO.SearchRegCustomer(data1.TC015.CustView,data1.TC015.CustOptions,data1.TC015.value);
    });

});

describe('New SIM Registration PukRetrieval', function(){
    const login_PO = new Login_PO();
    const subscribersearch_PO = new SubscriberSearch_PO()
    beforeEach( () => {
        login_PO.LaunchURL()
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    });

    before(function() {
        cy.fixture('credentials').then(function (data) {
            globalThis.data = data;
        });
        
        cy.fixture('TestData').then(function (data1) {
            globalThis.data1 = data1;
        });
    });


    it('TC016_Validate that the subscriber is available on CLM using PukRetrieval_Customer Name', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC016.CustView,data1.TC016.CustOptions,data1.TC016.value);
    });

    it('TC017_Validate that the subscriber is available on CLM using PukRetrieval_CustomerID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC017.CustView,data1.TC017.CustOptions,data1.TC017.value);
    });

    it('TC018_Validate that the subscriber is available on CLM using PukRetrieval_AccountID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC018.CustView,data1.TC018.CustOptions,data1.TC018.value);
    });

    it('TC019_Validate that the subscriber is available on CLM using PukRetrieval_MSISDN', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC019.CustView,data1.TC019.CustOptions,data1.TC019.value);
    });

    it('TC020_Validate that the subscriber is available on CLM using PukRetrieval_SIM Number', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC020.CustView,data1.TC020.CustOptions,data1.TC020.value);
    });

});

describe('New SIM Registration Vas', function(){
    const login_PO = new Login_PO();
    const subscribersearch_PO = new SubscriberSearch_PO()
    beforeEach( () => {
        login_PO.LaunchURL()
        login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password,'true');
    });

    before(function() {
        cy.fixture('credentials').then(function (data) {
            globalThis.data = data;
        });
        
        cy.fixture('TestData').then(function (data1) {
            globalThis.data1 = data1;
        });
    });


    it('TC021_Validate that the subscriber is available on CLM using Vas_Customer Name', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC021.CustView,data1.TC021.CustOptions,data1.TC021.value);
    });

    it('TC022_Validate that the subscriber is available on CLM using Vas_CustomerID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC022.CustView,data1.TC022.CustOptions,data1.TC022.value);
    });

    it('TC023_Validate that the subscriber is available on CLM using Vas_AccountID', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC023.CustView,data1.TC023.CustOptions,data1.TC023.value);
    });

    it('TC024_Validate that the subscriber is available on CLM using Vas_MSISDN', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC024.CustView,data1.TC024.CustOptions,data1.TC024.value);
    });

    it('TC025_Validate that the subscriber is available on CLM using Vas_SIMNumber', () => {
        
        subscribersearch_PO.SearchRegCustomer(data1.TC025.CustView,data1.TC025.CustOptions,data1.TC025.value);
    });

});




    
    
  

   
