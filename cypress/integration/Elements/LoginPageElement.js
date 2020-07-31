class LoginPageElement
{
    getUserName()
    {
        return cy.get('#usernameOrEmailAddress')
    }

    getPassword()
    {
        return cy.get('#Password')
    }

    getLoginBtn()
    {
        return cy.get('#LoginButton')
    }

}
export default LoginPageElement