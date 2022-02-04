console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let ul = document.querySelector(".listOfProducts");

function renderProducts(ourProducts) {
    ul.innerHTML = "";
    for (let i = 0; i < ourProducts.length; i++) {
        const product = ourProducts[i];
        const productTitle = document.createElement("h3");
        const productPrice = document.createElement("p");
        const productRating = document.createElement("p");
        productTitle.innerText = product.name;
        productPrice.innerText = "Price :" + product.price;
        productRating.innerText = "Rating :" + product.rating;

        let list = document.createElement("li");
        list.appendChild(productTitle);
        list.appendChild(productPrice);
        list.appendChild(productRating);
        ul.appendChild(list);
    }
}

renderProducts(products);

// Filter products based on title

const filterInputTitle = document.querySelector(".filteringTitle");

filterInputTitle.addEventListener("input", function(e) {
    const valueInputTitles = e.target.value;
    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(valueInputTitles.toLowerCase())
    );
    console.log(filteredProducts);
    renderProducts(filteredProducts);
});

// Filter products based on max price

const filterInputPrice = document.querySelector(".filteringPrice");

filterInputPrice.addEventListener("input", function(e) {
    const valueMaxPrice = e.target.value;
    const filteredMaxPrices = products.filter(
        (item) => item.price <= valueMaxPrice
    );
    filteredMaxPrices.sort((a, b) => a.price - b.price);
    renderProducts(filteredMaxPrices);
});

// Filter products based on rating

const filterInputRating = document.querySelector(".filteringRating");
filterInputRating.addEventListener("input", function(e) {
    const valueInputRating = e.target.value;
    const filteredRating = products.filter(
        (item) => item.rating <= valueInputRating
    );
    filteredRating.sort((a, b) => a.rating - b.rating);

    renderProducts(filteredRating);
});