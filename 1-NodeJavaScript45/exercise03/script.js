//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in
// lowercase, uppercase, and titlecase.

var namePerson = "ALI Ahmed";


//alert(namePerson.toLowerCase() + '\n' + namePerson.toUpperCase() + '\n' + namePerson + '\n');

console.log(namePerson.toLowerCase());
console.log(namePerson.toUpperCase());
console.log(namePerson.toTitleCase());

String.prototype.toTitleCase = function () {
    return this.replace(/\b\w+/g,
        function(text){
            return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        }
    );
};