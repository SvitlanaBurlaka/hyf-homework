console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let ul = document.querySelector(".listOfProducts");

function renderProducts(ourProducts) {
    for (let i = 0; i < ourProducts.length; i++) {
        const productNames = ourProducts[i];
        const productTitle = document.createElement("h3");
        const productPrice = document.createElement("p");
        const productRating = document.createElement("p");
        productTitle.innerText = productNames.name;
        productPrice.innerText = "Price :" + productNames.price;
        productRating.innerText = "Rating :";
        productNames.rating;

        let list = document.createElement("li");
        list.appendChild(productTitle);
        list.appendChild(productPrice);
        list.appendChild(productRating);
        ul.appendChild(list);
    }
}

renderProducts(products);