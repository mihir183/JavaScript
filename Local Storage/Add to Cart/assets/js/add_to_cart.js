let blogList = JSON.parse(localStorage.getItem('movies'))
let cartList = JSON.parse(localStorage.getItem('cart'))

let title = document.querySelector('#title')
let url = document.querySelector('#url')
let rating = document.querySelector('#rating')
let category = document.querySelector('#category')
let discription = document.querySelector('#discription')
let search = document.querySelector('#search')
let count = document.querySelector("#count")


show()

showCart()

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
                <div class="col-md-3 my-2">
                    <div class="card shadow">
                        <button class="btn btn-close position-absolute bg-danger" id="close" onClick="trash(${ele.id})"></button>
                        <img src=${ele.url} class="card-img-top" alt="Movie Poster" height="300">

                        <div class="card-body text-center">
                            <ul class="list-unstyled text-capitalize">
                                <li><strong>Title:</strong> ${ele.title}</li>
                                <li><strong>Rating:</strong> ${ele.rating}</li>
                                <li><strong>category:</strong> ${ele.category}</li>
                                <li><strong>discription:</strong> ${ele.discription}</li>
                                <li class="mt-2">
                                    <button class="btn btn-info text-capitalize" onClick="add(${ele.id})">add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        });

        document.querySelector("#output").innerHTML = output
        let num = (JSON.parse(localStorage.getItem('cart')) || []).length;
        count.innerHTML = num;
    }
}

function showCart(){

    let res = ""

    if(!cartList || cartList.length == 0){
        res =  `
            <div class="row align-items-center my-1">
                <div class="col text-center text-capitalize">Cart is Empty</div>
            </div>
        `
        document.querySelector("#cart_list").innerHTML = res

    }else{
        cartList.forEach((ele)=>{
            res += `
                <div class="row align-items-center my-1">
                    <div class="col text-center"><img src="${ele.url}" alt="" width="50"></div>
                    <div class="col text-center text-capitalize">${ele.title}</div>
                    <div class="col text-center">
                        <button class="btn btn-danger" onClick="trash_cart(${ele.id})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `
            document.querySelector("#cart_list").innerHTML = res
        })
    }

}

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

// Delete Card  
function trash(id){
    if(confirm("Do you want this card..!")){
        const filterData = blogList.filter((ele)=>{
            return ele.id !== id
        })
        localStorage.setItem("movies",JSON.stringify(filterData))
        show()
    }
}

// Delete Cart Item
function trash_cart(id){
    cartList = cartList.filter((ele)=>{
        return ele.id !== id
    })
    localStorage.setItem('cart',JSON.stringify(cartList))
    showCart()
}

// Add to Cart
function add(id){
    const arr2 = cartList || []

    const cart_obj = blogList.find((ele) => ele.id === id);

    let exist = arr2.some(ele => ele.id === id);

    if(exist){
        alert("alreay Exist in Cart")
    }else{
        arr2.push(cart_obj)
        localStorage.setItem('cart',JSON.stringify(arr2))
        alert("Added in to Cart")
    }
    cartList = arr2
    showCart()
    show()
}