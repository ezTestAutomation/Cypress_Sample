cy.common = {
    RandomString: function(a) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < a; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    randNumber: (max, length) => {
        if(length == null){
            return Cypress._.random(0, max)
        }
        var result = "";

        for (var i = 0; i < length; i++)
            result += Cypress._.random(0, max);
        return result;
    },
    setAttr: (element ,attributeName, value) => {
        element.then(function($input){
            $input[0].setAttribute(attributeName, value)
        })
    }
}
