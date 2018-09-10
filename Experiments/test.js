function myFunction() {
var output = prompt("Where would you like to go on the internet", "www.google.com");

output = "https://" + output;

if (output.length - 4 != "."){
    output = output + ".com";
}
window.open(output);
}