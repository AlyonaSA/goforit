var app = {
    pow: function(userInput, userPow) {
        var result = 1;

        if (userPow < 0) {

            for (var i = 0; i > userPow; i--) {
                result *= userInput;
            };

            result = 1 / result;
            return result;

        } else {

            for (var i = 0; i < userPow; i++) {
                result *= userInput;
            };

            return result;
        };
    }
};

console.log(app.pow(2,2));
console.log(app.pow(2,3));
console.log(app.pow(2,-2));
console.log(app.pow(-2,2));
console.log(app.pow(3,3));
console.log(app.pow(-2,3));


try{
    module.exports = app;
}catch(e){}
