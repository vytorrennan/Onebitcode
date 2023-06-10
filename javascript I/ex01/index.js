firstName = window.prompt("Enter your first name: ");
lastName = window.prompt("Enter your last name: ");
field = window.prompt("Enter your field of study: ");
birthYear = window.prompt("Enter birth year: ");
window.alert("Nome completo: " + firstName + " " + lastName + "\nField: " + field + "\nAge: " +  ((new Date).getFullYear() - birthYear).toString());

firstNum = parseFloat(window.prompt("Enter first num: "));
secondNum = parseFloat(window.prompt("Enter second num: "));
window.alert("Soma: " + (firstNum+secondNum) + "\nSubtração: " + (firstNum-secondNum) + "\nMultiplicação: " + (firstNum*secondNum) + "\nDivisão: " + (firstNum/secondNum));
