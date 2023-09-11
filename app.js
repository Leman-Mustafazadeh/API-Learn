
let container = document.querySelector(".container");

let allData = fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data => {

        data.forEach((item) =>{
            
        const {image,title,price} = item;

    container.innerHTML += `
    <div class="box">
        <div class="img-box">
            <img src=${image} alt="">
        </div>
        <div class="textBox">
            <h3>${price}</h3>
            <p>${title}</p>
        </div>
    </div>
    `

         } )
    })



/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */