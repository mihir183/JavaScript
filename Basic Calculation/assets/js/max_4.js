var a = parseInt(prompt("Enter First Number"))
var b = parseInt(prompt("Enter Second Number"))
var c = parseInt(prompt("Enter Third Number"))
var d = parseInt(prompt("Enter Fourth Number"))

if(a>b && a>c && a>d){
    alert(a+" is Largest Number....!")
}else if(b>a && b>c && b>d){
    alert(b+" is Largest Number....!")
}else if(c>a && c>b && c>d){
    alert(c+" is Largest Number....!")
}else{
    alert(d+" is Largest Number....!")
}