cy.common = {
    RandonString: function(a) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < a; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    randNumber: (a) => {
        return Cypress._.random(0, a)
    }
}
