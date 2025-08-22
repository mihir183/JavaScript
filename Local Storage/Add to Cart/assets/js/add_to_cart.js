let blogList = JSON.parse(localStorage.getItem('movies'))

let title = document.querySelector('#title')
let url = document.querySelector('#url')
let rating = document.querySelector('#rating')
let category = document.querySelector('#category')
let discription = document.querySelector('#discription')
let search = document.querySelector('#search')

show()

// Add Data in Local Storage
document.querySelector("#submit").addEventListener('click', () => {

    if(title.value && url.value && rating.value){    

        const arr = blogList || []
        const id = Date.now()
    
        movie_obj = {
        id,
        title: title.value,
        url: url.value,
        rating: rating.value,
        category: category.value,
        discription: discription.value
    }
    
    arr.push(movie_obj)
    localStorage.setItem("movies", JSON.stringify(arr))
    document.querySelector("#myForm").reset()
    show()

    }else{
        alert("Enter Data")
    }

})

// Clear Local Storage
document.querySelector("#clear").addEventListener('click',()=>{
    localStorage.clear()
    show()
})

// Searching
document.querySelector("#search").addEventListener('input',()=>{
    // alert('m')

})

// Show Data from Local Storage
function show() {
    blogList = JSON.parse(localStorage.getItem('movies'))
    let output = ""

    if (!blogList || blogList.length === 0) {
        output = `
            <div class="col-md-3 text-center text-capitalize">no data</div>
        `
        document.querySelector("#output").innerHTML = output
    }
    else{
        blogList.forEach((ele,index) => {
            output += `
                <div class="col-md-3">
                    <div class="card shadow-lg">
                        <button class="btn btn-close position-absolute bg-danger" id="close" onClick(trash(${ele.id}))></button>
                        <img src=${ele.url} class="card-img-top" alt="Movie Poster" height="300">

                        <div class="card-body text-center">
                            <ul class="list-unstyled text-capitalize">
                                <li><strong>Title:</strong> ${ele.title}</li>
                                <li><strong>Rating:</strong> ${ele.rating}</li>
                                <li><strong>category:</strong> ${ele.category}</li>
                                <li><strong>discription:</strong> ${ele.discription}</li>
                                <li class="mt-2">
                                    <button class="btn btn-info text-capitalize">add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        });

        document.querySelector("#output").innerHTML = output
    }
}

// Delete Card
function trash(id){
    const filterData = blogList.filter((ele)=>{
        return ele.id !== id
    })
    localStorage.setItem("movies",JSON.stringify(filterData))
    window.location.reload()
}