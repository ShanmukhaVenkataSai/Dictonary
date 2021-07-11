var Typo = require("typo-js");

var typo = new Typo ("en_US", false,false,{
    platform: 'any'
});


let is_spelled_correctly = typo.check("mispelled");

console.log(is_spelled_correctly,'is_spelled_correctly');

var array_of_suggestions = typo.suggest("mispelled");

console.log(array_of_suggestions,'array_of_suggestions');


