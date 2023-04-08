///<reference types = 'cypress' />


import Login_PO from "../../support/PageObjects/Frequent/Login_PO"

describe('Login Scenarios', ()=>{
  const login_PO = new Login_PO();
  beforeEach( () => {
    login_PO.LaunchURL();
  });

  before(function() {
  cy.fixture('credentials').then( (data) =>{
    globalThis.data = data;

  })
});

  it('TC_001_Verify that a user with a valid username and a valid password can login', function(){
    
    login_PO.login(data.login.validdataset1.username,data.login.validdataset1.password);
  })

  it('TC_002_Verify that a user with invalid username and a valid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset1.username,data.login.invaliddataset1.password);
  })

  it('TC_003_Verify that a user with a valid username and invalid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset2.username,data.login.invaliddataset2.password);
  })

  it('TC_004_Verify that a user with a invalid username and invalid password can not login', function(){
    
    login_PO.invalid(data.login.invaliddataset3.username,data.login.invaliddataset3.password);
  })

  it('TC_005_Verify that a user can not login when username and password fields are blank', function(){
    login_PO.blankfields();
    
  })

  it('TC_006_Verify the forgot password link', function(){
    login_PO.forgotPasswordl();
    
  })



})