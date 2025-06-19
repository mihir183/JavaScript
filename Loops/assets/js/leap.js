var st = parseInt(prompt("Entee First Number"))
var ed = parseInt(prompt("Entee Second Number"))

while (st <= ed) {
    if (st % 4 == 0) {
        if (st % 100 == 0) {
            if (st % 400 == 0) {
                document.write(st + " ")
            }
        }
    }
    st++;
}