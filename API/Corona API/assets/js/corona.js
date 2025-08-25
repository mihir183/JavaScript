document.querySelector("#submit").addEventListener('click', async (e) => {
    e.preventDefault();

    var country = document.querySelector("#country").value;

    const url = 'https://covid-19-by-api-ninjas.p.rapidapi.com/v1/covid19?date=2022-01-01';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ffd72410d0mshe2c7aa3381d87bdp1a2d6ajsnb856f4d73984',
            'x-rapidapi-host': 'covid-19-by-api-ninjas.p.rapidapi.com'
        }
    };
    if(country){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
    
            // filter country
            const data1 = result.filter(ele => ele.country.toLowerCase() === country.toLowerCase());
    
            if (data1 && data1.length > 0) {
                const obj = data1[0];
                // console.log("Country:", obj.country);
                // console.log("Total Cases:", obj.cases.total);
                document.querySelector("#output").style.display = 'block'
                document.querySelector("#output").innerHTML =`
                <b> country</b> : ${country} <br>
                <b> total cases</b> : ${obj.cases.total}
                `
                document.querySelector("#country").value = ""
            } else {
                document.querySelector("#output").style.display = 'block'
                document.querySelector("#output").classList.add('text-dark')
                document.querySelector("#output").classList.remove('text-danger')
                document.querySelector("#output").classList.remove('fw-bolder')
                document.querySelector("#output").innerHTML = "No data found for this country"
                document.querySelector("#country").value = ""
    
            }
        } catch (error) {
            document.querySelector("#output").style.display = 'block'
            document.querySelector("#output").classList.add('text-dark')
            document.querySelector("#output").classList.remove('text-danger')
            document.querySelector("#output").classList.remove('fw-bolder')
            document.querySelector("#output").innerHTML = error
            document.querySelector("#country").value = ""
    
        }
    }
    else{
        document.querySelector("#output").style.display = 'block'
        document.querySelector("#output").classList.remove('text-dark')
        document.querySelector("#output").classList.add('text-danger')
        document.querySelector("#output").classList.add('fw-bolder')
        document.querySelector("#output").innerHTML = "Enter Country"
        document.querySelector("#country").value = ""
    }

});
