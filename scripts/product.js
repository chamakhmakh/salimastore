import { products } from "./data/data.js";

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="col-4">
            <img src="${products.image}">
            <h4>${products.productName}</h4>
            <div class="rating">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <p>${products.price} TND</p>
        </div>
    `
});

console.log(productsHTML);