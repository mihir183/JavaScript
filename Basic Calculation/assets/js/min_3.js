var a = parseInt(prompt("Enter First Number"))
var b = parseInt(prompt("Enter Second Number"))
var c = parseInt(prompt("Enter Third Number"))

if(a<b && a<c){
    alert(a+" is Smallest Number....!")
}else if(b<a && b<c){
    alert(b+" is Smallest Number....!")
}else{
    alert(c+" is Smallest Number....!")
}