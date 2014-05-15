/**
 *Expression Industry Created by Phirom Yim on 5/15/14.
 */
//Using String Variables, Casting and Concatenating to create my online Business Card

stringVar = "510";//casting number 510 as a string
stringVar2= "710"; //casting number 710 as a string
stringVar3="6466";//casting number 6466 as a string
var phoneNo = "(" + stringVar + ")" + " " + stringVar2 + " - " + stringVar3;

var firstLine = "Email: phirom.yim@fullsail.edu"; //declaring first variable line
var secondLine = "Web Design and Development";//declaring second variable line
var result = firstLine + "\n" + secondLine;//declaring expression for concatenating string
alert ("For Business Inquiry: \nCell:" + " " + phoneNo + "\n" + result);//concatenating string and alert message for output
alert("Thank you for stopping!");//alert message for output