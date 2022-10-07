//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in
// lowercase, uppercase, and titlecase.

var namePerson = "ALI Ahmed";


//alert(namePerson.toLowerCase() + '\n' + namePerson.toUpperCase() + '\n' + namePerson + '\n');



String.prototype.toTitleCase = function () {
    return this.replace(
        /\b\w+/g, 
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};
console.log(namePerson.toLowerCase());
console.log(namePerson.toUpperCase());
console.log(namePerson.toTitleCase());
