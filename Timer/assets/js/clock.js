var degS = 0
var degM = 0
var sec = 0
var min = 0
setInterval(()=>{
    degS += 6
    sec ++
    if(degS==360 || sec == 60){
        degS = 0
        sec = 0
    }
    document.querySelector("#sec").style.transform  = `translate(-50%, -100%) rotate(${degS}deg)`;
    document.querySelector("#sec").innerHTML  = sec
},1000)

setInterval(()=>{
    degM++
    min++
    document.querySelector("#min").style.transform  = `translate(-50%, -100%) rotate(${degM}deg)`;
    document.querySelector("#min").innerHTML  = min
},60000)