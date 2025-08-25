// https://api.rootnet.in/covid19-in/stats/latest
document.querySelector("#submit").addEventListener('click', async (e) => {
    e.preventDefault();

    var state = document.querySelector("#state").value;
        if (state) {
          fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
            .then(response => response.json())
            .then(data => {
                const arr = data.data.regional
                console.log(arr)
                arr.forEach(ele => {
                  console.log(ele.loc)
                });
                const filterData = arr.find((ele)=>{
                      if(ele.loc == state){
                          return ele
                      }
                })
              
                document.querySelector("#output").style.display = 'block'
                document.querySelector("#output").innerHTML = `
                    <b> state</b> : ${filterData.loc} <br>
                    <b> total cases </b> : ${filterData.totalConfirmed} <br>
                    <b> total death</b> : ${filterData.deaths}
                `
            })

            .catch(
                error => {
                document.querySelector("#output").innerHTML = error
              }
            );
        }else{
            document.querySelector("#output").style.display = 'block'
                document.querySelector("#output").innerHTML = `
                    enter state
                `
        }
})


//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();

//         // filter state
//         const data1 = result.filter(ele => ele.state.toLowerCase() === state.toLowerCase());

//         if (data1 && data1.length > 0) {
//             const obj = data1[0];
//             // console.log("state:", obj.state);
//             // console.log("Total Cases:", obj.cases.total);
//             document.querySelector("#output").style.display = 'block'
//             document.querySelector("#output").innerHTML =`
//             <b> state</b> : ${state} <br>
//             <b> total cases</b> : ${obj.cases.total}
//             `
//             document.querySelector("#state").value = ""
//         } else {
//             document.querySelector("#output").innerHTML = "No data found for this state"
//         }
//     } catch (error) {
//         document.querySelector("#output").innerHTML = error
//     }
// });
